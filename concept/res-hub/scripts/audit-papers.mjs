#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');
const TEMPLATE_PATH = join(__dirname, 'paper.template.json');
const AUDIT_DIR = join(ROOT_DIR, 'audit');
const NORMALIZED_OUTPUT = join(AUDIT_DIR, 'papers_normalized.json');
const MISSING_CSV_OUTPUT = join(AUDIT_DIR, 'papers_missing.csv');

// ============================================================================
// Deep merge utility
// ============================================================================

/**
 * Deep merges two objects, with source values taking precedence
 */
function deepMerge(target, source) {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] === null || source[key] === undefined) {
      // Keep target value if source is null/undefined
      continue;
    }
    
    if (Array.isArray(source[key])) {
      // Arrays: use source if non-empty, otherwise keep target
      result[key] = source[key].length > 0 ? source[key] : (target[key] || []);
    } else if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
      // Objects: recursively merge
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      // Primitives: use source value
      result[key] = source[key];
    }
  }
  
  return result;
}

// ============================================================================
// Missing field detection
// ============================================================================

/**
 * Checks if a field is missing (null, empty string, or empty array)
 */
function isMissing(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

/**
 * Detects missing important fields in a normalized paper
 */
function detectMissingFields(paper) {
  const missing = [];
  
  // Check if abstract is missing or shorter than 100 characters
  const abstract = paper.abstract || '';
  if (isMissing(paper.abstract) || (typeof abstract === 'string' && abstract.trim().length < 100)) {
    missing.push('abstract');
  }
  
  if (isMissing(paper.publication?.year)) {
    missing.push('publication.year');
  }
  
  if (isMissing(paper.journal?.name)) {
    missing.push('journal.name');
  }
  
  if (isMissing(paper.authors) || (Array.isArray(paper.authors) && paper.authors.length === 0)) {
    missing.push('authors');
  }
  
  // Only flag localPdfUrl as missing if sourceUrl is also missing
  // (localPdfUrl is a download pipeline issue, not metadata completeness)
  if (isMissing(paper.access?.localPdfUrl) && isMissing(paper.access?.sourceUrl)) {
    missing.push('access.localPdfUrl');
  }
  
  // Check for DOI in either top-level doi field or identifiers.doi
  const hasDoi = !isMissing(paper.doi) || !isMissing(paper.identifiers?.doi);
  if (!hasDoi) {
    missing.push('identifiers.doi');
  }
  
  return missing;
}

// ============================================================================
// CSV generation
// ============================================================================

/**
 * Escapes a CSV field value
 */
function escapeCsvField(value) {
  if (value === null || value === undefined) return '';
  const str = String(value);
  // If contains comma, quote, or newline, wrap in quotes and escape quotes
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

/**
 * Generates CSV content from missing papers data
 */
function generateCsv(missingPapers) {
  const lines = ['slug,title,year,access_status,missing_fields'];
  
  for (const paper of missingPapers) {
    const slug = escapeCsvField(paper.slug);
    const title = escapeCsvField(paper.title);
    const year = paper.publication?.year || '';
    const accessStatus = escapeCsvField(paper.access?.status || 'unknown');
    const missingFields = escapeCsvField(paper.missingFields.join(';'));
    lines.push(`${slug},${title},${year},${accessStatus},${missingFields}`);
  }
  
  return lines.join('\n');
}

// ============================================================================
// Main audit function
// ============================================================================

function auditPapers() {
  console.log('Loading template...');
  const template = JSON.parse(readFileSync(TEMPLATE_PATH, 'utf-8'));
  
  console.log('Reading papers from:', PAPERS_DIR);
  const files = readdirSync(PAPERS_DIR).filter(f => f.endsWith('.json'));
  console.log(`Found ${files.length} paper files\n`);
  
  const normalizedPapers = [];
  const missingPapers = [];
  const missingCounts = {
    abstract: 0,
    'publication.year': 0,
    'journal.name': 0,
    authors: 0,
    'access.localPdfUrl': 0,
    'identifiers.doi': 0,
  };
  
  let errors = 0;
  
  for (const file of files) {
    try {
      const filePath = join(PAPERS_DIR, file);
      const paperContent = readFileSync(filePath, 'utf-8');
      const paper = JSON.parse(paperContent);
      
      // Deep merge with template
      const normalized = deepMerge(template, paper);
      
      // Ensure nested objects exist (in case they were missing entirely)
      if (!normalized.identifiers) normalized.identifiers = { ...template.identifiers };
      if (!normalized.access) normalized.access = { ...template.access };
      if (!normalized.publication) normalized.publication = { ...template.publication };
      if (!normalized.journal) normalized.journal = { ...template.journal };
      if (!normalized.visibility) normalized.visibility = { ...template.visibility };
      
      // Deep merge nested objects
      normalized.identifiers = deepMerge(template.identifiers, paper.identifiers || {});
      normalized.access = deepMerge(template.access, paper.access || {});
      normalized.publication = deepMerge(template.publication, paper.publication || {});
      normalized.journal = deepMerge(template.journal, paper.journal || {});
      normalized.visibility = deepMerge(template.visibility, paper.visibility || {});
      
      // Detect missing fields
      const missingFields = detectMissingFields(normalized);
      
      if (missingFields.length > 0) {
        missingPapers.push({
          ...normalized,
          missingFields,
        });
        
        // Update counts
        for (const field of missingFields) {
          if (missingCounts[field] !== undefined) {
            missingCounts[field]++;
          }
        }
      }
      
      normalizedPapers.push(normalized);
    } catch (error) {
      errors++;
      console.error(`Error processing ${file}: ${error.message}`);
    }
  }
  
  // Sort normalized papers: year desc, then title asc
  normalizedPapers.sort((a, b) => {
    const yearA = a.publication?.year || 0;
    const yearB = b.publication?.year || 0;
    if (yearB !== yearA) {
      return yearB - yearA;
    }
    const titleA = (a.title || '').toLowerCase();
    const titleB = (b.title || '').toLowerCase();
    return titleA.localeCompare(titleB);
  });
  
  // Create audit directory if it doesn't exist
  if (!existsSync(AUDIT_DIR)) {
    mkdirSync(AUDIT_DIR, { recursive: true });
  }
  
  // Write normalized JSON
  console.log(`Writing normalized papers to: ${NORMALIZED_OUTPUT}`);
  writeFileSync(NORMALIZED_OUTPUT, JSON.stringify(normalizedPapers, null, 2), 'utf-8');
  
  // Write missing fields CSV
  console.log(`Writing missing fields report to: ${MISSING_CSV_OUTPUT}`);
  const csvContent = generateCsv(missingPapers);
  writeFileSync(MISSING_CSV_OUTPUT, csvContent, 'utf-8');
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('Audit Summary');
  console.log('='.repeat(60));
  console.log(`Total papers processed: ${normalizedPapers.length}`);
  console.log(`Papers with missing fields: ${missingPapers.length}`);
  console.log(`Errors: ${errors}\n`);
  
  console.log('Missing field counts:');
  for (const [field, count] of Object.entries(missingCounts)) {
    if (count > 0) {
      console.log(`  ${field}: ${count}`);
    }
  }
  console.log('='.repeat(60));
}

// ============================================================================
// Run audit
// ============================================================================

auditPapers();

