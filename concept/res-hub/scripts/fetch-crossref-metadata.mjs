#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');
const AUDIT_DIR = join(ROOT_DIR, 'audit');
const REPORT_PATH = join(AUDIT_DIR, 'crossref-update-report.json');

// ============================================================================
// DOI normalization (re-implemented from src/utils/doi.ts)
// ============================================================================

function normalizeDoi(input) {
  if (!input) return '';
  let normalized = input.trim().toLowerCase();
  normalized = normalized.replace(/^https?:\/\/doi\.org\//, '');
  normalized = normalized.replace(/^doi:/, '');
  return normalized;
}

// ============================================================================
// Missing field detection (from audit script)
// ============================================================================

function isMissing(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

function getMissingFields(paper) {
  const missing = [];
  
  if (isMissing(paper.abstract)) missing.push('abstract');
  if (isMissing(paper.publication?.year)) missing.push('publication.year');
  if (isMissing(paper.journal?.name)) missing.push('journal.name');
  if (isMissing(paper.authors) || (Array.isArray(paper.authors) && paper.authors.length === 0)) {
    missing.push('authors');
  }
  if (isMissing(paper.access?.localPdfUrl)) missing.push('access.localPdfUrl');
  if (isMissing(paper.doi) && isMissing(paper.identifiers?.doi)) {
    missing.push('identifiers.doi');
  }
  
  return missing;
}

// ============================================================================
// Crossref API integration
// ============================================================================

/**
 * Fetches metadata from Crossref API for a given DOI
 */
async function fetchCrossrefMetadata(doi, delay = 1000) {
  const normalizedDoi = normalizeDoi(doi);
  const url = `https://api.crossref.org/works/${encodeURIComponent(normalizedDoi)}`;
  
  // Polite usage: include User-Agent header
  const headers = {
    'User-Agent': 'res-hub-metadata-fetcher (mailto:your-email@example.com)',
    'Accept': 'application/json',
  };
  
  try {
    // Rate limiting: wait before request
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    const response = await fetch(url, { headers });
    
    // Handle rate limiting
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : delay * 2;
      console.warn(`Rate limited. Waiting ${waitTime}ms...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      // Retry once
      const retryResponse = await fetch(url, { headers });
      if (!retryResponse.ok) {
        throw new Error(`HTTP ${retryResponse.status}: ${retryResponse.statusText}`);
      }
      const retryData = await retryResponse.json();
      return retryData.message;
    }
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('DOI not found in Crossref');
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return data.message;
  } catch (error) {
    if (error.message.includes('fetch failed') || error.message.includes('network')) {
      throw new Error(`Network error: ${error.message}`);
    }
    throw error;
  }
}

// ============================================================================
// Crossref to our schema mapping
// ============================================================================

/**
 * Maps Crossref response to our paper schema format
 */
function mapCrossrefToSchema(crossrefData, existingPaper) {
  const updates = {};
  
  // Title (only if missing)
  if (isMissing(existingPaper.title) && crossrefData.title && crossrefData.title.length > 0) {
    updates.title = crossrefData.title[0];
  }
  
  // Abstract (only if missing)
  if (isMissing(existingPaper.abstract) && crossrefData.abstract) {
    updates.abstract = crossrefData.abstract;
  }
  
  // Authors (only if missing)
  if ((isMissing(existingPaper.authors) || existingPaper.authors.length === 0) && crossrefData.author) {
    updates.authors = crossrefData.author.map((author, index) => ({
      given: author.given || '',
      family: author.family || '',
      orcid: author.ORCID ? `https://orcid.org/${author.ORCID.replace(/^https?:\/\/orcid\.org\//, '')}` : undefined,
      sequence: index + 1,
    })).filter(author => author.given || author.family);
  }
  
  // Publication year (only if missing)
  if (isMissing(existingPaper.publication?.year)) {
    let year = null;
    
    // Try published-print first
    if (crossrefData['published-print'] && crossrefData['published-print']['date-parts']) {
      const dateParts = crossrefData['published-print']['date-parts'][0];
      if (dateParts && dateParts.length > 0) {
        year = dateParts[0];
      }
    }
    
    // Fall back to published-online
    if (!year && crossrefData['published-online'] && crossrefData['published-online']['date-parts']) {
      const dateParts = crossrefData['published-online']['date-parts'][0];
      if (dateParts && dateParts.length > 0) {
        year = dateParts[0];
      }
    }
    
    if (year && year > 1900 && year < 2100) {
      updates.publication = {
        ...existingPaper.publication,
        year: year,
      };
    }
  }
  
  // Journal name (only if missing)
  if (isMissing(existingPaper.journal?.name) && crossrefData['container-title'] && crossrefData['container-title'].length > 0) {
    updates.journal = {
      ...existingPaper.journal,
      name: crossrefData['container-title'][0],
    };
  }
  
  // Journal abbreviation (only if missing)
  if (isMissing(existingPaper.journal?.abbreviation) && crossrefData['container-title'] && crossrefData['container-title'].length > 1) {
    updates.journal = {
      ...(updates.journal || existingPaper.journal || {}),
      abbreviation: crossrefData['container-title'][1],
    };
  }
  
  // ISSN (only if missing)
  if (isMissing(existingPaper.journal?.issn) && crossrefData.ISSN && crossrefData.ISSN.length > 0) {
    updates.journal = {
      ...(updates.journal || existingPaper.journal || {}),
      issn: crossrefData.ISSN[0],
    };
  }
  
  // Volume (only if missing)
  if (isMissing(existingPaper.journal?.volume) && crossrefData.volume) {
    updates.journal = {
      ...(updates.journal || existingPaper.journal || {}),
      volume: String(crossrefData.volume),
    };
  }
  
  // Issue (only if missing)
  if (isMissing(existingPaper.journal?.issue) && crossrefData.issue) {
    updates.journal = {
      ...(updates.journal || existingPaper.journal || {}),
      issue: String(crossrefData.issue),
    };
  }
  
  // Pages (only if missing)
  if (crossrefData.page && isMissing(existingPaper.journal?.pages?.start)) {
    const pageMatch = crossrefData.page.match(/^(\d+)(?:-(\d+))?$/);
    if (pageMatch) {
      updates.journal = {
        ...(updates.journal || existingPaper.journal || {}),
        pages: {
          start: pageMatch[1],
          end: pageMatch[2] || null,
        },
      };
    }
  }
  
  // Ensure identifiers.doi is set (only if missing)
  if (isMissing(existingPaper.identifiers?.doi) && crossrefData.DOI) {
    updates.identifiers = {
      ...existingPaper.identifiers,
      doi: normalizeDoi(crossrefData.DOI),
    };
  }
  
  // Ensure top-level doi is set (only if missing)
  if (isMissing(existingPaper.doi) && crossrefData.DOI) {
    updates.doi = normalizeDoi(crossrefData.DOI);
  }
  
  return updates;
}

// ============================================================================
// Safe merge logic
// ============================================================================

/**
 * Safely merges updates into existing paper, preserving all existing data
 */
function mergeUpdates(paper, updates) {
  const merged = { ...paper };
  
  // Merge top-level fields
  for (const [key, value] of Object.entries(updates)) {
    if (key === 'journal' || key === 'publication' || key === 'identifiers') {
      // Deep merge nested objects
      merged[key] = { ...(merged[key] || {}), ...value };
    } else {
      merged[key] = value;
    }
  }
  
  // Deep merge journal pages if both exist
  if (updates.journal?.pages && merged.journal?.pages) {
    merged.journal.pages = { ...merged.journal.pages, ...updates.journal.pages };
  }
  
  return merged;
}

// ============================================================================
// Argument parsing
// ============================================================================

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    dryRun: false,
    doi: null,
    fields: null,
    limit: null,
    delay: 1000,
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--dry-run') {
      result.dryRun = true;
    } else if (arg === '--doi' && i + 1 < args.length) {
      result.doi = args[++i];
    } else if (arg === '--fields' && i + 1 < args.length) {
      result.fields = args[++i].split(',').map(f => f.trim());
    } else if (arg === '--limit' && i + 1 < args.length) {
      result.limit = parseInt(args[++i], 10);
    } else if (arg === '--delay' && i + 1 < args.length) {
      result.delay = parseInt(args[++i], 10);
    }
  }
  
  return result;
}

// ============================================================================
// Field filtering
// ============================================================================

function shouldUpdateField(field, allowedFields) {
  if (!allowedFields) return true;
  return allowedFields.includes(field);
}

function filterUpdates(updates, allowedFields) {
  if (!allowedFields) return updates;
  
  const filtered = {};
  
  for (const [key, value] of Object.entries(updates)) {
    if (key === 'journal' && allowedFields.some(f => f.startsWith('journal.'))) {
      const journalUpdates = {};
      if (shouldUpdateField('journal.name', allowedFields) && value.name) {
        journalUpdates.name = value.name;
      }
      if (shouldUpdateField('journal.abbreviation', allowedFields) && value.abbreviation) {
        journalUpdates.abbreviation = value.abbreviation;
      }
      if (shouldUpdateField('journal.issn', allowedFields) && value.issn) {
        journalUpdates.issn = value.issn;
      }
      if (shouldUpdateField('journal.volume', allowedFields) && value.volume) {
        journalUpdates.volume = value.volume;
      }
      if (shouldUpdateField('journal.issue', allowedFields) && value.issue) {
        journalUpdates.issue = value.issue;
      }
      if (shouldUpdateField('journal.pages', allowedFields) && value.pages) {
        journalUpdates.pages = value.pages;
      }
      if (Object.keys(journalUpdates).length > 0) {
        filtered.journal = journalUpdates;
      }
    } else if (key === 'publication' && allowedFields.includes('publication.year')) {
      filtered.publication = value;
    } else if (shouldUpdateField(key, allowedFields)) {
      filtered[key] = value;
    }
  }
  
  return filtered;
}

// ============================================================================
// Main processing function
// ============================================================================

async function processPaper(filePath, args, stats) {
  try {
    const paper = JSON.parse(readFileSync(filePath, 'utf-8'));
    
    // Get DOI
    const doi = paper.doi || paper.identifiers?.doi;
    if (!doi) {
      stats.skippedNoDoi++;
      return { status: 'skipped', reason: 'no DOI' };
    }
    
    // Check if we should process this specific DOI
    if (args.doi && normalizeDoi(doi) !== normalizeDoi(args.doi)) {
      return { status: 'skipped', reason: 'DOI mismatch' };
    }
    
    // Check missing fields
    const missingFields = getMissingFields(paper);
    if (missingFields.length === 0) {
      stats.skippedComplete++;
      return { status: 'skipped', reason: 'no missing fields' };
    }
    
    // Filter by allowed fields if specified
    const relevantMissingFields = args.fields 
      ? missingFields.filter(f => args.fields.includes(f) || args.fields.some(af => f.startsWith(af + '.')))
      : missingFields;
    
    if (relevantMissingFields.length === 0) {
      stats.skippedNoRelevantFields++;
      return { status: 'skipped', reason: 'no relevant missing fields' };
    }
    
    // Fetch from Crossref
    let crossrefData;
    try {
      crossrefData = await fetchCrossrefMetadata(doi, args.delay);
    } catch (error) {
      stats.errors++;
      return { status: 'error', error: error.message, doi };
    }
    
    // Map to our schema
    const updates = mapCrossrefToSchema(crossrefData, paper);
    
    // Filter updates by allowed fields
    const filteredUpdates = filterUpdates(updates, args.fields);
    
    if (Object.keys(filteredUpdates).length === 0) {
      stats.skippedNoUpdates++;
      return { status: 'skipped', reason: 'no updates available from Crossref' };
    }
    
    // Merge updates
    const updatedPaper = mergeUpdates(paper, filteredUpdates);
    
    // Track what was updated
    const updatedFields = Object.keys(filteredUpdates);
    for (const field of updatedFields) {
      if (field === 'journal') {
        stats.fieldsUpdated['journal.*'] = (stats.fieldsUpdated['journal.*'] || 0) + 1;
      } else if (field === 'publication') {
        stats.fieldsUpdated['publication.*'] = (stats.fieldsUpdated['publication.*'] || 0) + 1;
      } else {
        stats.fieldsUpdated[field] = (stats.fieldsUpdated[field] || 0) + 1;
      }
    }
    
    // Write or report
    if (!args.dryRun) {
      const jsonContent = JSON.stringify(updatedPaper, null, 2) + '\n';
      writeFileSync(filePath, jsonContent, 'utf-8');
    }
    
    stats.updated++;
    return {
      status: args.dryRun ? 'would-update' : 'updated',
      doi,
      updatedFields,
      slug: paper.slug,
    };
  } catch (error) {
    stats.errors++;
    return { status: 'error', error: error.message };
  }
}

// ============================================================================
// Main function
// ============================================================================

async function main() {
  const args = parseArgs();
  
  console.log('Crossref Metadata Fetcher');
  console.log('='.repeat(60));
  if (args.dryRun) {
    console.log('DRY RUN MODE - No files will be modified');
  }
  console.log(`Delay between requests: ${args.delay}ms`);
  if (args.doi) {
    console.log(`Processing specific DOI: ${args.doi}`);
  }
  if (args.fields) {
    console.log(`Only updating fields: ${args.fields.join(', ')}`);
  }
  if (args.limit) {
    console.log(`Processing limit: ${args.limit} papers`);
  }
  console.log('='.repeat(60));
  console.log('');
  
  // Get list of papers
  let files = readdirSync(PAPERS_DIR).filter(f => f.endsWith('.json'));
  
  // Filter by DOI if specified
  if (args.doi) {
    const targetDoi = normalizeDoi(args.doi);
    files = files.filter(file => {
      try {
        const paper = JSON.parse(readFileSync(join(PAPERS_DIR, file), 'utf-8'));
        const paperDoi = normalizeDoi(paper.doi || paper.identifiers?.doi || '');
        return paperDoi === targetDoi;
      } catch {
        return false;
      }
    });
  }
  
  // Apply limit
  if (args.limit) {
    files = files.slice(0, args.limit);
  }
  
  console.log(`Found ${files.length} paper(s) to process\n`);
  
  const stats = {
    total: files.length,
    updated: 0,
    skippedNoDoi: 0,
    skippedComplete: 0,
    skippedNoRelevantFields: 0,
    skippedNoUpdates: 0,
    errors: 0,
    rateLimitHits: 0,
    fieldsUpdated: {},
  };
  
  const report = [];
  
  // Process each paper
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = join(PAPERS_DIR, file);
    
    process.stdout.write(`[${i + 1}/${files.length}] Processing ${file}... `);
    
    const result = await processPaper(filePath, args, stats);
    
    if (result.status === 'updated' || result.status === 'would-update') {
      console.log(`✓ Updated: ${result.updatedFields.join(', ')}`);
      report.push({
        slug: result.slug,
        doi: result.doi,
        status: result.status,
        updatedFields: result.updatedFields,
      });
    } else if (result.status === 'error') {
      console.log(`✗ Error: ${result.error}`);
      report.push({
        slug: file.replace('.json', ''),
        doi: result.doi,
        status: 'error',
        error: result.error,
      });
    } else {
      console.log(`- ${result.reason}`);
    }
  }
  
  // Create audit directory if needed
  if (!existsSync(AUDIT_DIR)) {
    mkdirSync(AUDIT_DIR, { recursive: true });
  }
  
  // Write report
  if (report.length > 0) {
    writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2), 'utf-8');
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('Summary');
  console.log('='.repeat(60));
  console.log(`Total papers processed: ${stats.total}`);
  console.log(`Papers updated: ${stats.updated}`);
  console.log(`Skipped (no DOI): ${stats.skippedNoDoi}`);
  console.log(`Skipped (complete): ${stats.skippedComplete}`);
  console.log(`Skipped (no relevant fields): ${stats.skippedNoRelevantFields}`);
  console.log(`Skipped (no updates available): ${stats.skippedNoUpdates}`);
  console.log(`Errors: ${stats.errors}`);
  console.log(`Rate limit hits: ${stats.rateLimitHits}`);
  console.log('');
  
  if (Object.keys(stats.fieldsUpdated).length > 0) {
    console.log('Fields updated:');
    for (const [field, count] of Object.entries(stats.fieldsUpdated)) {
      console.log(`  ${field}: ${count}`);
    }
  }
  
  console.log('='.repeat(60));
  
  if (report.length > 0) {
    console.log(`\nDetailed report written to: ${REPORT_PATH}`);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});

