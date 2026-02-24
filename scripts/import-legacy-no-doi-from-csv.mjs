#!/usr/bin/env node

import { parse } from 'csv-parse/sync';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createHash } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');
const DEFAULT_CSV_PATH = '/Users/jeremy/Downloads/251219103220_pmo-adhd-publications_formidable_entries_no_doi.csv';

// ============================================================================
// Sanitization helpers
// ============================================================================

/**
 * Sanitizes text: normalizes line endings, removes invalid control chars,
 * decodes HTML entities, trims whitespace
 */
function sanitizeText(value) {
  if (value === null || value === undefined) return '';
  
  let text = String(value);
  
  // Normalize line endings
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  
  // Remove invalid control characters (keep \n and \t)
  text = text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '');
  
  // Decode common HTML entities (minimal safe decode)
  const entities = {
    '&amp;': '&',
    '&nbsp;': ' ',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'",
    '&lt;': '<',
    '&gt;': '>',
    '&rsquo;': "'",
    '&lsquo;': "'",
    '&rdquo;': '"',
    '&ldquo;': '"',
  };
  
  for (const [entity, replacement] of Object.entries(entities)) {
    text = text.replace(new RegExp(entity, 'gi'), replacement);
  }
  
  // Trim whitespace
  text = text.trim();
  
  return text;
}

/**
 * Sanitizes an array: splits delimited strings, sanitizes each element, removes empties
 */
function sanitizeArray(value, delimiter = null) {
  if (!value) return [];
  
  let items = [];
  
  if (Array.isArray(value)) {
    items = value;
  } else {
    const str = String(value).trim();
    if (!str) return [];
    
    // Try semicolon first, then comma
    if (delimiter) {
      items = str.split(delimiter);
    } else {
      items = str.includes(';') ? str.split(';') : str.split(',');
    }
  }
  
  return items
    .map(item => sanitizeText(item))
    .filter(item => item.length > 0);
}

/**
 * Slugifies a string for use in filenames
 */
function slugify(text) {
  if (!text) return '';
  
  let slug = String(text).toLowerCase();
  
  // Replace & with and
  slug = slug.replace(/&/g, 'and');
  
  // Remove HTML tags
  slug = slug.replace(/<[^>]*>/g, '');
  
  // Replace spaces and underscores with hyphens
  slug = slug.replace(/[\s_]+/g, '-');
  
  // Remove punctuation except hyphens
  slug = slug.replace(/[^\w\-]/g, '');
  
  // Collapse multiple hyphens
  slug = slug.replace(/-+/g, '-');
  
  // Remove leading/trailing hyphens
  slug = slug.replace(/^-+|-+$/g, '');
  
  return slug;
}

/**
 * Generates a short hash from text
 */
function shortHash(text) {
  return createHash('sha1').update(String(text)).digest('hex').substring(0, 10);
}

/**
 * Ensures unique slug by appending -2, -3, etc. if file exists
 */
function ensureUniqueSlug(baseSlug, year = null) {
  let slug = baseSlug;
  if (year) {
    slug = `${slug}-${year}`;
  }
  
  let finalSlug = slug;
  let counter = 2;
  const filepath = join(PAPERS_DIR, `${finalSlug}.json`);
  
  while (existsSync(filepath)) {
    finalSlug = year ? `${baseSlug}-${year}-${counter}` : `${baseSlug}-${counter}`;
    counter++;
  }
  
  return finalSlug;
}

// ============================================================================
// CSV parsing and mapping
// ============================================================================

/**
 * Extracts authors from CSV row (handles multiple author fields)
 */
function extractAuthors(row, headers) {
  const authors = [];
  const firstNameIndices = [];
  const middleNameIndices = [];
  const lastNameIndices = [];
  
  headers.forEach((header, idx) => {
    if (header === 'First Name') firstNameIndices.push(idx);
    if (header === 'Middle Name') middleNameIndices.push(idx);
    if (header === 'Last Name') lastNameIndices.push(idx);
  });
  
  const maxAuthors = Math.min(firstNameIndices.length, lastNameIndices.length);
  
  for (let i = 0; i < maxAuthors; i++) {
    const firstName = sanitizeText(row[firstNameIndices[i]]);
    const middleName = sanitizeText(row[middleNameIndices[i]]);
    const lastName = sanitizeText(row[lastNameIndices[i]]);
    
    if (firstName || lastName) {
      const given = [firstName, middleName].filter(Boolean).join(' ');
      const family = lastName || '';
      
      if (given || family) {
        authors.push({
          given: given || '',
          family: family || '',
          sequence: i + 1,
        });
      }
    }
  }
  
  return authors;
}

/**
 * Maps CSV row to paper object
 */
function mapRowToPaper(row, headers, rowIndex) {
  // Helper to get column value (handle both array and object row formats)
  const getCol = (name) => {
    // If row is an object (csv-parse with columns: true), access by key
    if (typeof row === 'object' && !Array.isArray(row)) {
      return row[name] !== undefined ? row[name] : null;
    }
    // If row is an array, find by index
    const idx = headers.indexOf(name);
    return idx >= 0 ? row[idx] : null;
  };
  
  // Extract basic fields
  const titleRaw = getCol('Title');
  const title = sanitizeText(titleRaw);
  
  if (!title) {
    return null; // Skip rows without title
  }
  
  const abstract = sanitizeText(getCol('Abstract'));
  const yearStr = sanitizeText(getCol('Year'));
  const year = yearStr ? parseInt(yearStr, 10) : null;
  const validYear = year && !isNaN(year) && year > 1900 && year < 2100 ? year : null;
  
  // Generate ID
  let id;
  const entryId = sanitizeText(getCol('ID')) || sanitizeText(getCol('Entry ID'));
  if (entryId) {
    id = `legacy-ff-${entryId}`;
  } else {
    const hashInput = `${title}${validYear || ''}`;
    id = `legacy-${shortHash(hashInput)}`;
  }
  
  // Generate slug
  const baseSlug = slugify(title);
  const slug = ensureUniqueSlug(baseSlug, validYear);
  
  // Extract authors
  const authors = extractAuthors(row, headers);
  
  // Extract categories
  let categories = sanitizeArray(getCol('Category') || getCol('Categories'));
  if (categories.length === 0) {
    categories = ['Legacy / No DOI'];
  }
  
  // Extract keywords
  const keywords = sanitizeArray(getCol('Keywords'));
  
  // Extract journal info
  const journalName = sanitizeText(getCol('Journal Name'));
  const journalAbbr = sanitizeText(getCol('Journal Abbreviation'));
  const volume = sanitizeText(getCol('Volume'));
  const issue = sanitizeText(getCol('Issue'));
  const startPage = sanitizeText(getCol('Start Page'));
  const endPage = sanitizeText(getCol('End Page'));
  const issn = sanitizeText(getCol('ISSN'));
  
  // Extract access info
  const sourceUrl = sanitizeText(getCol('Source URL') || getCol('Paper'));
  const researchGateUrl = sanitizeText(getCol('ResearchGate Link'));
  const accessLabel = sanitizeText(getCol('Access (label)'));
  const accessValue = sanitizeText(getCol('Access (value)'));
  const license = sanitizeText(getCol('Licence'));
  const licenseUrl = sanitizeText(getCol('Licence URL'));
  
  // Determine access status
  let accessStatus = 'unknown';
  const accessLower = (accessLabel || accessValue || '').toLowerCase();
  if (accessLower.includes('open')) {
    accessStatus = 'open';
  } else if (accessLower.includes('closed')) {
    accessStatus = 'closed';
  }
  
  // Build paper object
  const paper = {
    id,
    slug,
    title,
    ...(abstract && { abstract }),
    categories,
    ...(keywords.length > 0 && { keywords }),
    ...(validYear && {
      publication: {
        year: validYear,
      },
    }),
    ...(journalName || journalAbbr || volume || issue || startPage || endPage || issn ? {
      journal: {
        ...(journalName && { name: journalName }),
        ...(journalAbbr && { abbreviation: journalAbbr }),
        ...(issn && { issn }),
        ...(volume && { volume }),
        ...(issue && issue !== 'null' && issue !== '' && { issue }),
        ...(startPage || endPage ? {
          pages: {
            ...(startPage && { start: startPage }),
            ...(endPage && endPage !== 'null' && endPage !== '' && { end: endPage }),
          },
        } : {}),
      },
    } : {}),
    ...(authors.length > 0 && { authors }),
    access: {
      status: accessStatus,
      ...(license && { license }),
      ...(sourceUrl && { source: sourceUrl }),
      ...(sourceUrl && { sourceUrl }),
      ...(licenseUrl && { licenseUrl }),
      ...(researchGateUrl && { researchGateUrl }),
    },
    ...(sourceUrl && {
      identifiers: {
        url: sourceUrl,
      },
    }),
    visibility: {
      hidden: sanitizeText(getCol('Hidden')).toLowerCase() === 'yes',
    },
  };
  
  return paper;
}

// ============================================================================
// Main import function
// ============================================================================

function importLegacyPapers(csvPath) {
  console.log(`Reading CSV from: ${csvPath}`);
  
  if (!existsSync(csvPath)) {
    console.error(`Error: CSV file not found: ${csvPath}`);
    process.exit(1);
  }
  
  const csvContent = readFileSync(csvPath, 'utf-8');
  
  // Remove BOM if present
  let cleanContent = csvContent;
  if (csvContent.charCodeAt(0) === 0xFEFF) {
    cleanContent = csvContent.slice(1);
  }
  
  // Parse CSV with proper handling of quotes, newlines, etc.
  const records = parse(cleanContent, {
    columns: true,
    skip_empty_lines: true,
    relax_column_count: true,
    trim: false, // We'll trim in sanitizeText
    bom: true, // Handle BOM automatically
  });
  
  console.log(`Found ${records.length} rows in CSV\n`);
  
  // Debug: Print column mapping (optional, can be removed)
  if (records.length > 0 && process.env.DEBUG) {
    console.log('Discovered CSV columns:');
    const sampleRow = records[0];
    const keys = Object.keys(sampleRow);
    keys.slice(0, 20).forEach(key => {
      console.log(`  - ${key}`);
    });
    if (keys.length > 20) {
      console.log(`  ... and ${keys.length - 20} more columns`);
    }
    console.log('');
  }
  
  const headers = records.length > 0 ? Object.keys(records[0]) : [];
  
  let created = 0;
  let skipped = 0;
  let errors = 0;
  
  for (let i = 0; i < records.length; i++) {
    const row = records[i];
    
    try {
      const paper = mapRowToPaper(row, headers, i);
      
      if (!paper) {
        skipped++;
        continue;
      }
      
      const filepath = join(PAPERS_DIR, `${paper.slug}.json`);
      
      // Skip if file already exists (idempotent)
      if (existsSync(filepath)) {
        console.log(`SKIP: ${paper.slug}.json (already exists)`);
        skipped++;
        continue;
      }
      
      // Write JSON file with proper formatting
      const jsonContent = JSON.stringify(paper, null, 2) + '\n';
      writeFileSync(filepath, jsonContent, 'utf-8');
      
      created++;
      if (created % 10 === 0) {
        console.log(`Created ${created} papers...`);
      }
      
    } catch (error) {
      errors++;
      console.error(`Error processing row ${i + 1}: ${error.message}`);
      if (error.stack) {
        console.error(error.stack);
      }
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('Import Summary:');
  console.log(`  Total rows processed: ${records.length}`);
  console.log(`  Created: ${created}`);
  console.log(`  Skipped: ${skipped}`);
  console.log(`  Errors: ${errors}`);
  console.log('='.repeat(60));
}

// ============================================================================
// CLI entry point
// ============================================================================

const csvPath = process.argv[2] || DEFAULT_CSV_PATH;
importLegacyPapers(csvPath);
