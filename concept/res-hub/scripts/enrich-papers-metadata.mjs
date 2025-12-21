#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { parse } from 'csv-parse/sync';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');
const AUDIT_DIR = join(ROOT_DIR, 'audit');
const CACHE_DIR = join(AUDIT_DIR, 'cache');
const MISSING_CSV = join(AUDIT_DIR, 'papers_missing.csv');
const ENRICHMENT_LOG = join(AUDIT_DIR, 'enrichment-log.json');
const ENRICHMENT_SUMMARY = join(AUDIT_DIR, 'enrichment-summary.json');
const GROBID_ENDPOINT = process.env.GROBID_ENDPOINT || 'http://localhost:8070';

// ============================================================================
// Utilities
// ============================================================================

function normalizeDoi(input) {
  if (!input) return '';
  let normalized = input.trim().toLowerCase();
  normalized = normalized.replace(/^https?:\/\/doi\.org\//, '');
  normalized = normalized.replace(/^doi:/, '');
  return normalized;
}

function doiToSlug(doi) {
  const normalized = normalizeDoi(doi);
  return normalized.replace(/\//g, '-').replace(/[^a-z0-9\-.]/g, '').replace(/-+/g, '-').replace(/^-+|-+$/g, '');
}

function isMissing(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

function isShortAbstract(abstract) {
  if (!abstract || typeof abstract !== 'string') return false;
  return abstract.trim().length < 100;
}

// ============================================================================
// String similarity (Levenshtein-based)
// ============================================================================

function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(null));
  
  for (let i = 0; i <= len1; i++) matrix[i][0] = i;
  for (let j = 0; j <= len2; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  return matrix[len1][len2];
}

function stringSimilarity(str1, str2) {
  if (!str1 || !str2) return 0;
  const s1 = str1.toLowerCase().trim();
  const s2 = str2.toLowerCase().trim();
  if (s1 === s2) return 1;
  const maxLen = Math.max(s1.length, s2.length);
  if (maxLen === 0) return 1;
  const distance = levenshteinDistance(s1, s2);
  return 1 - (distance / maxLen);
}

// ============================================================================
// Validation
// ============================================================================

function validateMatch(paper, fetchedTitle, fetchedYear) {
  const paperTitle = paper.title || '';
  const paperYear = paper.publication?.year;
  
  // Title similarity
  const titleSim = stringSimilarity(paperTitle, fetchedTitle || '');
  if (titleSim < 0.85) {
    return { valid: false, reason: `Title similarity too low: ${(titleSim * 100).toFixed(1)}%` };
  }
  
  // Year match (allow ±1)
  if (fetchedYear && paperYear) {
    const yearDiff = Math.abs(fetchedYear - paperYear);
    if (yearDiff > 1) {
      return { valid: false, reason: `Year mismatch: ${paperYear} vs ${fetchedYear}` };
    }
  }
  
  return { valid: true, confidence: titleSim };
}

// ============================================================================
// Caching
// ============================================================================

function getCachePath(source, doi) {
  const slug = doiToSlug(doi);
  return join(CACHE_DIR, `${source}-${slug}.json`);
}

function readCache(source, doi) {
  const cachePath = getCachePath(source, doi);
  if (existsSync(cachePath)) {
    try {
      return JSON.parse(readFileSync(cachePath, 'utf-8'));
    } catch (error) {
      return null;
    }
  }
  return null;
}

function writeCache(source, doi, data) {
  if (!existsSync(CACHE_DIR)) {
    mkdirSync(CACHE_DIR, { recursive: true });
  }
  const cachePath = getCachePath(source, doi);
  writeFileSync(cachePath, JSON.stringify(data, null, 2), 'utf-8');
}

// ============================================================================
// OpenAlex API
// ============================================================================

async function searchOpenAlexByTitle(title, year = null, delay = 1000) {
  // Check cache
  const cacheKey = `search-${title.substring(0, 50)}-${year || 'any'}`;
  const cached = readCache('openalex-search', cacheKey);
  if (cached) {
    return cached;
  }
  
  let url = `https://api.openalex.org/works?search=${encodeURIComponent(title)}&per-page=10`;
  if (year) {
    url += `&filter=publication_year:${year}`;
  }
  
  try {
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'res-hub-enricher (mailto:web@adhd.org.sa)',
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    writeCache('openalex-search', cacheKey, data);
    return data.results || [];
  } catch (error) {
    return null;
  }
}

async function fetchOpenAlex(doi, delay = 1000) {
  const normalizedDoi = normalizeDoi(doi);
  
  // Check cache
  const cached = readCache('openalex', doi);
  if (cached) {
    return cached;
  }
  
  const url = `https://api.openalex.org/works/https://doi.org/${encodeURIComponent(normalizedDoi)}`;
  
  try {
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'res-hub-enricher (mailto:web@adhd.org.sa)',
        'Accept': 'application/json',
      },
    });
    
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : delay * 2;
      await new Promise(resolve => setTimeout(resolve, waitTime));
      const retryResponse = await fetch(url);
      if (!retryResponse.ok) {
        throw new Error(`HTTP ${retryResponse.status}`);
      }
      const data = await retryResponse.json();
      writeCache('openalex', doi, data);
      return data;
    }
    
    if (!response.ok) {
      if (response.status === 404) {
        writeCache('openalex', doi, null);
        return null;
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    writeCache('openalex', doi, data);
    return data;
  } catch (error) {
    throw new Error(`OpenAlex error: ${error.message}`);
  }
}

function extractFromOpenAlex(data) {
  if (!data) return { 
    abstract: null, 
    sourceUrl: null, 
    landingUrl: null, 
    title: null, 
    year: null,
    authors: null,
    journalName: null,
    doi: null,
  };
  
  // Abstract - check both abstract and abstract_inverted_index
  let abstract = data.abstract || null;
  if (!abstract && data.abstract_inverted_index) {
    // Reconstruct from inverted index
    const words = [];
    for (const [word, positions] of Object.entries(data.abstract_inverted_index)) {
      for (const pos of positions) {
        words[pos] = word;
      }
    }
    abstract = words.filter(Boolean).join(' ');
  }
  
  // PDF URL (rename to sourceUrl for clarity)
  let sourceUrl = null;
  if (data.best_oa_location?.pdf_url) {
    sourceUrl = data.best_oa_location.pdf_url;
  } else if (data.primary_location?.pdf_url) {
    sourceUrl = data.primary_location.pdf_url;
  }
  
  // Landing page
  const landingUrl = data.primary_location?.landing_page_url || data.doi || null;
  
  // Title and year
  const title = data.title || null;
  let year = null;
  if (data.publication_date) {
    year = parseInt(data.publication_date.split('-')[0], 10);
  }
  
  // Authors
  let authors = null;
  if (data.authorships && data.authorships.length > 0) {
    authors = data.authorships.map((authorship, index) => ({
      given: authorship.author?.display_name?.split(' ').slice(0, -1).join(' ') || '',
      family: authorship.author?.display_name?.split(' ').slice(-1)[0] || '',
      orcid: authorship.author?.orcid ? `https://orcid.org/${authorship.author.orcid.replace(/^https?:\/\/orcid\.org\//, '')}` : undefined,
      sequence: index + 1,
    })).filter(author => author.given || author.family);
  }
  
  // Journal name
  const journalName = data.primary_location?.source?.display_name || 
                      data.primary_location?.source?.name || null;
  
  // DOI
  const doi = data.doi ? normalizeDoi(data.doi.replace(/^https?:\/\/doi\.org\//, '')) : null;
  
  return { abstract, sourceUrl, landingUrl, title, year, authors, journalName, doi };
}

// ============================================================================
// Semantic Scholar API
// ============================================================================

async function fetchSemanticScholar(doi, delay = 1000) {
  const normalizedDoi = normalizeDoi(doi);
  
  // Check cache
  const cached = readCache('semantic', doi);
  if (cached) {
    return cached;
  }
  
  const url = `https://api.semanticscholar.org/graph/v1/paper/DOI:${encodeURIComponent(normalizedDoi)}?fields=abstract,openAccessPdf,title,year,authors,venue`;
  
  try {
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'res-hub-enricher (mailto:web@adhd.org.sa)',
        'Accept': 'application/json',
      },
    });
    
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : delay * 2;
      await new Promise(resolve => setTimeout(resolve, waitTime));
      const retryResponse = await fetch(url);
      if (!retryResponse.ok) {
        throw new Error(`HTTP ${retryResponse.status}`);
      }
      const data = await retryResponse.json();
      writeCache('semantic', doi, data);
      return data;
    }
    
    if (!response.ok) {
      if (response.status === 404) {
        writeCache('semantic', doi, null);
        return null;
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    writeCache('semantic', doi, data);
    return data;
  } catch (error) {
    throw new Error(`Semantic Scholar error: ${error.message}`);
  }
}

function extractFromSemanticScholar(data) {
  if (!data) return { 
    abstract: null, 
    sourceUrl: null, 
    title: null, 
    year: null,
    authors: null,
    journalName: null,
    doi: null,
  };
  
  // Authors
  let authors = null;
  if (data.authors && data.authors.length > 0) {
    authors = data.authors.map((author, index) => ({
      given: author.name?.split(' ').slice(0, -1).join(' ') || '',
      family: author.name?.split(' ').slice(-1)[0] || '',
      sequence: index + 1,
    })).filter(author => author.given || author.family);
  }
  
  // Journal name (venue)
  const journalName = data.venue || null;
  
  // DOI - extract from paperId if available
  let doi = null;
  if (data.paperId) {
    // Semantic Scholar paperId is not a DOI, but we can check externalIds
    if (data.externalIds && data.externalIds.DOI) {
      doi = normalizeDoi(data.externalIds.DOI);
    }
  }
  
  return {
    abstract: data.abstract || null,
    sourceUrl: data.openAccessPdf?.url || null,
    title: data.title || null,
    year: data.year || null,
    authors,
    journalName,
    doi,
  };
}

// ============================================================================
// Publisher Page Scraping
// ============================================================================

async function fetchPublisherPage(doi, delay = 1000) {
  const normalizedDoi = normalizeDoi(doi);
  const url = `https://doi.org/${encodeURIComponent(normalizedDoi)}`;
  
  try {
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; res-hub-enricher; +mailto:web@adhd.org.sa)',
        'Accept': 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
    });
    
    if (!response.ok) {
      return null;
    }
    
    const html = await response.text();
    return html;
  } catch (error) {
    throw new Error(`Publisher page error: ${error.message}`);
  }
}

function extractFromPublisherPage(html) {
  if (!html) return { abstract: null, sourceUrl: null };
  
  // Simple regex-based extraction (cheerio would be better but avoiding dependency for now)
  const results = { abstract: null, sourceUrl: null };
  
  // Extract abstract from meta tags
  const abstractPatterns = [
    /<meta\s+name=["']citation_abstract["']\s+content=["']([^"']+)["']/i,
    /<meta\s+name=["']DC\.Description["']\s+content=["']([^"']+)["']/i,
    /<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i,
  ];
  
  for (const pattern of abstractPatterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      results.abstract = match[1].trim();
      break;
    }
  }
  
  // Extract PDF URL from meta tags (rename to sourceUrl)
  const pdfPatterns = [
    /<meta\s+name=["']citation_pdf_url["']\s+content=["']([^"']+)["']/i,
    /<link\s+rel=["']alternate["']\s+type=["']application\/pdf["']\s+href=["']([^"']+)["']/i,
  ];
  
  for (const pattern of pdfPatterns) {
    const match = html.match(pattern);
    if (match && match[1]) {
      results.sourceUrl = match[1].trim();
      break;
    }
  }
  
  // Also check for common PDF URL patterns in anchors
  if (!results.sourceUrl) {
    const anchorPatterns = [
      /href=["']([^"']*\/doi\/pdf\/[^"']+)["']/i,
      /href=["']([^"']*\/pdf\/[^"']+)["']/i,
      /href=["']([^"']*\/article-pdf\/[^"']+)["']/i,
      /href=["']([^"']*\/epdf\/[^"']+)["']/i,
      /href=["']([^"']*\/action\/showPdf[^"']*)["']/i,
    ];
    
    for (const pattern of anchorPatterns) {
      const match = html.match(pattern);
      if (match && match[1]) {
        let sourceUrl = match[1];
        // Convert relative URLs to absolute
        if (sourceUrl.startsWith('/')) {
          // Would need base URL, skip for now
        } else if (!sourceUrl.startsWith('http')) {
          // Relative URL, would need base URL
        } else {
          results.sourceUrl = sourceUrl;
          break;
        }
      }
    }
  }
  
  return results;
}

// ============================================================================
// GROBID Integration
// ============================================================================

async function checkGrobidAvailable() {
  try {
    const response = await fetch(`${GROBID_ENDPOINT}/api/isalive`, {
      method: 'GET',
      signal: AbortSignal.timeout(2000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

async function extractAbstractFromPdf(pdfPath) {
  if (!existsSync(pdfPath)) {
    return null;
  }
  
  const isAvailable = await checkGrobidAvailable();
  if (!isAvailable) {
    return null;
  }
  
  try {
    const pdfBuffer = readFileSync(pdfPath);
    
    // Create multipart form data for Node.js
    // Note: This is a simplified version - for production, consider using form-data package
    const boundary = `----WebKitFormBoundary${Date.now()}`;
    const CRLF = '\r\n';
    
    const formParts = [
      `--${boundary}${CRLF}`,
      `Content-Disposition: form-data; name="input"; filename="paper.pdf"${CRLF}`,
      `Content-Type: application/pdf${CRLF}`,
      `${CRLF}`,
    ];
    
    const formData = Buffer.concat([
      Buffer.from(formParts.join('')),
      pdfBuffer,
      Buffer.from(`${CRLF}--${boundary}--${CRLF}`),
    ]);
    
    const response = await fetch(`${GROBID_ENDPOINT}/api/processFulltextDocument`, {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
      },
      body: formData,
      signal: AbortSignal.timeout(60000), // 60 second timeout
    });
    
    if (!response.ok) {
      return null;
    }
    
    const teiXml = await response.text();
    
    // Extract abstract from TEI XML
    const abstractMatch = teiXml.match(/<abstract[^>]*>([\s\S]*?)<\/abstract>/i);
    if (abstractMatch) {
      // Remove XML tags and clean up
      let abstract = abstractMatch[1]
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return abstract;
    }
    
    return null;
  } catch (error) {
    return null;
  }
}

// ============================================================================
// Main enrichment logic
// ============================================================================

async function enrichPaper(paper, args, stats) {
  let doi = paper.doi || paper.identifiers?.doi;
  const normalizedDoi = doi ? normalizeDoi(doi) : null;
  
  const logEntry = {
    slug: paper.slug,
    doi: normalizedDoi || null,
    updates: {},
    skipped: [],
    errors: [],
  };
  
  const updates = {};
  const sources = args.sources || ['openalex', 'semantic', 'publisher', 'grobid'];
  
  // Check what's missing
  const needsAbstract = isMissing(paper.abstract) || isShortAbstract(paper.abstract);
  const needsSourceUrl = isMissing(paper.access?.sourceUrl);
  const needsAuthors = isMissing(paper.authors) || (Array.isArray(paper.authors) && paper.authors.length === 0);
  const needsJournalName = isMissing(paper.journal?.name);
  const needsYear = isMissing(paper.publication?.year);
  const needsDoi = isMissing(paper.doi) && isMissing(paper.identifiers?.doi);
  
  if (!needsAbstract && !needsSourceUrl && !needsAuthors && !needsJournalName && !needsYear && !needsDoi) {
    return { status: 'skipped', reason: 'no missing fields' };
  }
  
  let workData = null;
  let extracted = null;
  
  // If no DOI, try title-based search
  if (!doi && paper.title && sources.includes('openalex')) {
    try {
      const searchResults = await searchOpenAlexByTitle(paper.title, paper.publication?.year, args.delay);
      if (searchResults && searchResults.length > 0) {
        // Find best match
        let bestMatch = null;
        let bestScore = 0;
        
        for (const result of searchResults) {
          const extractedCandidate = extractFromOpenAlex(result);
          const validation = validateMatch(paper, extractedCandidate.title, extractedCandidate.year);
          if (validation.valid && validation.confidence > bestScore) {
            bestScore = validation.confidence;
            bestMatch = result;
            extracted = extractedCandidate;
          }
        }
        
        if (bestMatch) {
          workData = bestMatch;
          logEntry.updates._foundViaTitleSearch = { source: 'openalex', confidence: bestScore };
          // If we found a DOI, use it for subsequent lookups
          if (extracted.doi) {
            doi = extracted.doi;
            logEntry.doi = extracted.doi;
          }
        } else {
          logEntry.errors.push('OpenAlex title search: no valid match found');
        }
      }
    } catch (error) {
      logEntry.errors.push(`OpenAlex title search: ${error.message}`);
    }
  }
  
  // Try OpenAlex by DOI (or use workData from title search)
  if (sources.includes('openalex') && doi && !workData) {
    try {
      workData = await fetchOpenAlex(doi, args.delay);
      if (workData) {
        extracted = extractFromOpenAlex(workData);
        const validation = validateMatch(paper, extracted.title, extracted.year);
        
        if (!validation.valid) {
          logEntry.errors.push(`OpenAlex validation failed: ${validation.reason}`);
          workData = null;
          extracted = null;
        }
      }
    } catch (error) {
      logEntry.errors.push(`OpenAlex: ${error.message}`);
    }
  }
  
  // Apply OpenAlex data if we have it
  if (extracted && workData) {
    if (needsAbstract && extracted.abstract) {
      updates.abstract = extracted.abstract;
      logEntry.updates.abstract = { source: 'openalex', confidence: extracted.title ? stringSimilarity(paper.title, extracted.title) : 0.90 };
    }
    if (needsSourceUrl && extracted.sourceUrl) {
      updates.sourceUrl = extracted.sourceUrl;
      logEntry.updates['access.sourceUrl'] = { source: 'openalex', confidence: 0.90 };
    }
    if (needsAuthors && extracted.authors && extracted.authors.length > 0) {
      updates.authors = extracted.authors;
      logEntry.updates.authors = { source: 'openalex', confidence: 0.90 };
    }
    if (needsJournalName && extracted.journalName) {
      updates.journalName = extracted.journalName;
      logEntry.updates['journal.name'] = { source: 'openalex', confidence: 0.90 };
    }
    if (needsYear && extracted.year) {
      updates.year = extracted.year;
      logEntry.updates['publication.year'] = { source: 'openalex', confidence: 0.90 };
    }
    if (needsDoi && extracted.doi) {
      updates.doi = extracted.doi;
      logEntry.updates['identifiers.doi'] = { source: 'openalex', confidence: 0.90 };
    }
  }
  
  // Try Semantic Scholar (only if we still need fields and have a DOI)
  if (doi && sources.includes('semantic') && 
      ((needsAbstract && !updates.abstract) || (needsSourceUrl && !updates.sourceUrl) || 
       (needsAuthors && !updates.authors) || (needsJournalName && !updates.journalName) || 
       (needsYear && !updates.year))) {
    try {
      const data = await fetchSemanticScholar(doi, args.delay);
      if (data) {
        const extractedS2 = extractFromSemanticScholar(data);
        const validation = validateMatch(paper, extractedS2.title, extractedS2.year);
        
        if (validation.valid) {
          if (needsAbstract && !updates.abstract && extractedS2.abstract) {
            updates.abstract = extractedS2.abstract;
            logEntry.updates.abstract = { source: 'semantic', confidence: validation.confidence };
          }
          if (needsSourceUrl && !updates.sourceUrl && extractedS2.sourceUrl) {
            updates.sourceUrl = extractedS2.sourceUrl;
            logEntry.updates['access.sourceUrl'] = { source: 'semantic', confidence: validation.confidence };
          }
          if (needsAuthors && !updates.authors && extractedS2.authors && extractedS2.authors.length > 0) {
            updates.authors = extractedS2.authors;
            logEntry.updates.authors = { source: 'semantic', confidence: validation.confidence };
          }
          if (needsJournalName && !updates.journalName && extractedS2.journalName) {
            updates.journalName = extractedS2.journalName;
            logEntry.updates['journal.name'] = { source: 'semantic', confidence: validation.confidence };
          }
          if (needsYear && !updates.year && extractedS2.year) {
            updates.year = extractedS2.year;
            logEntry.updates['publication.year'] = { source: 'semantic', confidence: validation.confidence };
          }
        } else {
          logEntry.errors.push(`Semantic Scholar validation failed: ${validation.reason}`);
        }
      }
    } catch (error) {
      logEntry.errors.push(`Semantic Scholar: ${error.message}`);
    }
  }
  
  // Try Publisher page scraping (only if we have a DOI and still need fields)
  if (doi && sources.includes('publisher') && 
      ((needsAbstract && !updates.abstract) || (needsSourceUrl && !updates.sourceUrl))) {
    try {
      const html = await fetchPublisherPage(doi, args.delay);
      if (html) {
        const extractedPub = extractFromPublisherPage(html);
        
        if (needsAbstract && !updates.abstract && extractedPub.abstract) {
          updates.abstract = extractedPub.abstract;
          logEntry.updates.abstract = { source: 'publisher', confidence: 0.80 };
        }
        if (needsSourceUrl && !updates.sourceUrl && extractedPub.sourceUrl) {
          updates.sourceUrl = extractedPub.sourceUrl;
          logEntry.updates['access.sourceUrl'] = { source: 'publisher', confidence: 0.75 };
        }
      }
    } catch (error) {
      logEntry.errors.push(`Publisher scraping: ${error.message}`);
    }
  }
  
  // Try GROBID (only for abstract, and only if PDF available locally)
  if (!args.skipGrobid && sources.includes('grobid') && needsAbstract && !updates.abstract) {
    try {
      // Check for local PDF
      let pdfPath = null;
      if (paper.access?.localPdfUrl) {
        const relativePath = paper.access.localPdfUrl;
        pdfPath = join(ROOT_DIR, 'public', relativePath);
      } else if (doi) {
        // Try common library path
        const libraryPath = join(ROOT_DIR, 'public', 'library', `${doiToSlug(doi)}.pdf`);
        if (existsSync(libraryPath)) {
          pdfPath = libraryPath;
        }
      }
      
      if (pdfPath) {
        const abstract = await extractAbstractFromPdf(pdfPath);
        if (abstract) {
          updates.abstract = abstract;
          logEntry.updates.abstract = { source: 'grobid', confidence: 0.90 };
        } else {
          logEntry.skipped.push('grobid - no abstract extracted');
        }
      } else {
        logEntry.skipped.push('grobid - no local PDF');
      }
    } catch (error) {
      logEntry.errors.push(`GROBID: ${error.message}`);
    }
  }
  
  // Apply updates
  if (Object.keys(updates).length === 0) {
    return { status: 'skipped', reason: 'no updates found', logEntry };
  }
  
  // Merge updates into paper
  const updatedPaper = { ...paper };
  if (updates.abstract) {
    updatedPaper.abstract = updates.abstract;
  }
  if (updates.sourceUrl) {
    if (!updatedPaper.access) {
      updatedPaper.access = {};
    }
    updatedPaper.access.sourceUrl = updates.sourceUrl;
  }
  if (updates.authors) {
    updatedPaper.authors = updates.authors;
  }
  if (updates.journalName) {
    if (!updatedPaper.journal) {
      updatedPaper.journal = {};
    }
    updatedPaper.journal.name = updates.journalName;
  }
  if (updates.year) {
    if (!updatedPaper.publication) {
      updatedPaper.publication = {};
    }
    updatedPaper.publication.year = updates.year;
  }
  if (updates.doi) {
    updatedPaper.doi = updates.doi;
    if (!updatedPaper.identifiers) {
      updatedPaper.identifiers = {};
    }
    updatedPaper.identifiers.doi = updates.doi;
  }
  
  // Write file
  if (!args.dryRun) {
    const jsonContent = JSON.stringify(updatedPaper, null, 2) + '\n';
    const filePath = join(PAPERS_DIR, `${paper.slug}.json`);
    writeFileSync(filePath, jsonContent, 'utf-8');
  }
  
  // Update stats
  if (updates.abstract) stats.abstractsUpdated++;
  if (updates.sourceUrl) stats.pdfUrlsUpdated++;
  if (updates.authors) stats.authorsUpdated = (stats.authorsUpdated || 0) + 1;
  if (updates.journalName) stats.journalNamesUpdated = (stats.journalNamesUpdated || 0) + 1;
  if (updates.year) stats.yearsUpdated = (stats.yearsUpdated || 0) + 1;
  if (updates.doi) stats.doisUpdated = (stats.doisUpdated || 0) + 1;
  
  return { status: args.dryRun ? 'would-update' : 'updated', updates, logEntry };
}

// ============================================================================
// CSV parsing and main function
// ============================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    dryRun: false,
    doi: null,
    limit: null,
    delay: 1000,
    skipGrobid: false,
    sources: null,
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--dry-run') {
      result.dryRun = true;
    } else if (arg === '--doi' && i + 1 < args.length) {
      result.doi = args[++i];
    } else if (arg === '--limit' && i + 1 < args.length) {
      result.limit = parseInt(args[++i], 10);
    } else if (arg === '--delay' && i + 1 < args.length) {
      result.delay = parseInt(args[++i], 10);
    } else if (arg === '--skip-grobid') {
      result.skipGrobid = true;
    } else if (arg === '--sources' && i + 1 < args.length) {
      result.sources = args[++i].split(',').map(s => s.trim());
    }
  }
  
  return result;
}

async function main() {
  const args = parseArgs();
  
  console.log('Metadata Enrichment Pipeline');
  console.log('='.repeat(60));
  if (args.dryRun) {
    console.log('DRY RUN MODE - No files will be modified');
  }
  console.log(`Delay between requests: ${args.delay}ms`);
  if (args.doi) {
    console.log(`Processing specific DOI: ${args.doi}`);
  }
  if (args.sources) {
    console.log(`Using sources: ${args.sources.join(', ')}`);
  }
  if (args.skipGrobid) {
    console.log('GROBID disabled');
  }
  if (args.limit) {
    console.log(`Processing limit: ${args.limit} papers`);
  }
  console.log('='.repeat(60));
  console.log('');
  
  // Read missing CSV
  if (!existsSync(MISSING_CSV)) {
    console.error(`Error: Missing CSV not found: ${MISSING_CSV}`);
    console.error('Please run "npm run papers:audit" first.');
    process.exit(1);
  }
  
  const csvContent = readFileSync(MISSING_CSV, 'utf-8');
  const records = parse(csvContent, {
    columns: true,
    skip_empty_lines: true,
  });
  
  // Filter for papers needing any enrichment (abstract, sourceUrl, authors, journal.name, publication.year, identifiers.doi)
  let papersToEnrich = records.filter(record => {
    const missingFields = (record.missing_fields || '').split(';');
    return missingFields.includes('abstract') || 
           missingFields.includes('access.localPdfUrl') || 
           missingFields.includes('authors') || 
           missingFields.includes('journal.name') || 
           missingFields.includes('publication.year') || 
           missingFields.includes('identifiers.doi');
  });
  
  // Filter by DOI/slug/filename if specified
  if (args.doi) {
    const targetDoi = normalizeDoi(args.doi);
    const targetInput = args.doi.toLowerCase().trim();
    papersToEnrich = papersToEnrich.filter(record => {
      // Need to load paper to get DOI
      try {
        const paperPath = join(PAPERS_DIR, `${record.slug}.json`);
        if (existsSync(paperPath)) {
          const paper = JSON.parse(readFileSync(paperPath, 'utf-8'));
          const paperDoi = normalizeDoi(paper.doi || paper.identifiers?.doi || '');
          const paperSlug = (paper.slug || record.slug || '').toLowerCase();
          // Match by normalized DOI or slug
          return paperDoi === targetDoi || 
                 paperSlug === targetInput ||
                 record.slug.toLowerCase() === targetInput;
        }
      } catch {
        return false;
      }
      return false;
    });
    
    // If no papers found in CSV, try to load directly from papers directory
    if (papersToEnrich.length === 0) {
      const allFiles = readdirSync(PAPERS_DIR).filter(f => f.endsWith('.json'));
      const matchingFiles = allFiles.filter(file => {
        try {
          const paperPath = join(PAPERS_DIR, file);
          const paper = JSON.parse(readFileSync(paperPath, 'utf-8'));
          const paperDoi = normalizeDoi(paper.doi || paper.identifiers?.doi || '');
          const paperSlug = (paper.slug || file.replace(/\.json$/, '')).toLowerCase();
          const fileName = file.replace(/\.json$/, '').toLowerCase();
          return paperDoi === targetDoi || 
                 paperSlug === targetInput || 
                 fileName === targetInput;
        } catch {
          return false;
        }
      });
      
      // Convert matching files to records format
      papersToEnrich = matchingFiles.map(file => {
        const paperPath = join(PAPERS_DIR, file);
        const paper = JSON.parse(readFileSync(paperPath, 'utf-8'));
        return {
          slug: paper.slug || file.replace(/\.json$/, ''),
          missing_fields: 'abstract;authors;journal.name;publication.year', // Assume all fields might need enrichment
        };
      });
    }
  }
  
  // Apply limit
  if (args.limit) {
    papersToEnrich = papersToEnrich.slice(0, args.limit);
  }
  
  console.log(`Found ${papersToEnrich.length} paper(s) to enrich\n`);
  
  const stats = {
    total: papersToEnrich.length,
    updated: 0,
    skipped: 0,
    errors: 0,
    abstractsUpdated: 0,
    pdfUrlsUpdated: 0,
    authorsUpdated: 0,
    journalNamesUpdated: 0,
    yearsUpdated: 0,
    doisUpdated: 0,
  };
  
  const logEntries = [];
  
  // Process each paper
  for (let i = 0; i < papersToEnrich.length; i++) {
    const record = papersToEnrich[i];
    const paperPath = join(PAPERS_DIR, `${record.slug}.json`);
    
    if (!existsSync(paperPath)) {
      console.log(`[${i + 1}/${papersToEnrich.length}] Skipping ${record.slug} - file not found`);
      stats.skipped++;
      continue;
    }
    
    try {
      const paper = JSON.parse(readFileSync(paperPath, 'utf-8'));
      
      process.stdout.write(`[${i + 1}/${papersToEnrich.length}] Processing ${record.slug}... `);
      
      const result = await enrichPaper(paper, args, stats);
      
      if (result.status === 'updated' || result.status === 'would-update') {
        const fields = Object.keys(result.updates);
        console.log(`✓ Updated: ${fields.join(', ')}`);
        stats.updated++;
        if (result.logEntry) {
          logEntries.push(result.logEntry);
        }
      } else if (result.status === 'error') {
        console.log(`✗ Error`);
        stats.errors++;
        if (result.logEntry) {
          logEntries.push(result.logEntry);
        }
      } else {
        console.log(`- ${result.reason}`);
        stats.skipped++;
        if (result.logEntry) {
          logEntries.push(result.logEntry);
        }
      }
    } catch (error) {
      console.log(`✗ Error: ${error.message}`);
      stats.errors++;
    }
  }
  
  // Create audit directory if needed
  if (!existsSync(AUDIT_DIR)) {
    mkdirSync(AUDIT_DIR, { recursive: true });
  }
  
  // Write logs
  if (logEntries.length > 0) {
    writeFileSync(ENRICHMENT_LOG, JSON.stringify(logEntries, null, 2), 'utf-8');
  }
  
  const summary = {
    timestamp: new Date().toISOString(),
    stats,
    sourcesUsed: args.sources || ['openalex', 'semantic', 'publisher', 'grobid'],
  };
  writeFileSync(ENRICHMENT_SUMMARY, JSON.stringify(summary, null, 2), 'utf-8');
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Total papers processed: ${stats.total}`);
  console.log(`Papers updated: ${stats.updated}`);
  console.log(`Skipped: ${stats.skipped}`);
  console.log(`Errors: ${stats.errors}`);
  console.log('');
  console.log('Fields updated:');
  if (stats.abstractsUpdated > 0) console.log(`  Abstracts: ${stats.abstractsUpdated}`);
  if (stats.pdfUrlsUpdated > 0) console.log(`  PDF URLs: ${stats.pdfUrlsUpdated}`);
  if (stats.authorsUpdated > 0) console.log(`  Authors: ${stats.authorsUpdated}`);
  if (stats.journalNamesUpdated > 0) console.log(`  Journal names: ${stats.journalNamesUpdated}`);
  if (stats.yearsUpdated > 0) console.log(`  Publication years: ${stats.yearsUpdated}`);
  if (stats.doisUpdated > 0) console.log(`  DOIs: ${stats.doisUpdated}`);
  console.log('='.repeat(60));
  
  if (logEntries.length > 0) {
    console.log(`\nDetailed log written to: ${ENRICHMENT_LOG}`);
  }
  console.log(`Summary written to: ${ENRICHMENT_SUMMARY}`);
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

