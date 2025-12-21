#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');
const TEMPLATE_PATH = join(__dirname, 'paper.template.json');

// ============================================================================
// DOI normalization (re-implemented from src/utils/doi.ts)
// ============================================================================

/**
 * Normalizes a DOI string by trimming, lowercasing, and removing https://doi.org/ prefix if present
 */
function normalizeDoi(input) {
  if (!input) return '';
  let normalized = input.trim().toLowerCase();
  // Remove https://doi.org/ or http://doi.org/ prefix if present
  normalized = normalized.replace(/^https?:\/\/doi\.org\//, '');
  // Remove doi: prefix if present
  normalized = normalized.replace(/^doi:/, '');
  return normalized;
}

/**
 * Converts a DOI to a URL-safe slug
 * Replaces / with -, removes illegal chars, collapses multiple dashes
 */
function doiToSlug(doi) {
  const normalized = normalizeDoi(doi);
  // Replace / with -
  let slug = normalized.replace(/\//g, '-');
  // Remove any characters that aren't alphanumeric, dash, or dot
  slug = slug.replace(/[^a-z0-9\-.]/g, '');
  // Collapse multiple consecutive dashes into a single dash
  slug = slug.replace(/-+/g, '-');
  // Remove leading/trailing dashes
  slug = slug.replace(/^-+|-+$/g, '');
  return slug;
}

// ============================================================================
// Slug validation/cleaning
// ============================================================================

/**
 * Cleans and validates a slug
 */
function cleanSlug(slug) {
  if (!slug) return '';
  // Remove any characters that aren't alphanumeric, dash, or dot
  let cleaned = slug.toLowerCase().replace(/[^a-z0-9\-.]/g, '');
  // Collapse multiple consecutive dashes
  cleaned = cleaned.replace(/-+/g, '-');
  // Remove leading/trailing dashes
  cleaned = cleaned.replace(/^-+|-+$/g, '');
  return cleaned;
}

// ============================================================================
// Argument parsing
// ============================================================================

/**
 * Parses command line arguments
 */
function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    doi: null,
    slug: null,
    title: null,
    year: null,
    force: false,
  };
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--doi' && i + 1 < args.length) {
      result.doi = args[++i];
    } else if (arg === '--slug' && i + 1 < args.length) {
      result.slug = args[++i];
    } else if (arg === '--title' && i + 1 < args.length) {
      result.title = args[++i];
    } else if (arg === '--year' && i + 1 < args.length) {
      const year = parseInt(args[++i], 10);
      if (!isNaN(year) && year > 1900 && year < 2100) {
        result.year = year;
      }
    } else if (arg === '--force') {
      result.force = true;
    }
  }
  
  return result;
}

// ============================================================================
// Paper creation
// ============================================================================

/**
 * Generates a random 10-character hex string
 */
function randomId() {
  return randomBytes(5).toString('hex');
}

/**
 * Recursively removes null values from an object, except for fields that are
 * explicitly allowed to be null according to the schema (nullable fields).
 * Fields that are optional but not nullable should be omitted entirely.
 */
function removeNullValues(obj, parentPath = '') {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => removeNullValues(item, parentPath));
  }
  
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    const currentPath = parentPath ? `${parentPath}.${key}` : key;
    
    // Fields that are explicitly nullable according to the schema
    // These are: access.licenseUrl, access.sourceUrl, access.localPdfUrl, 
    // access.researchGateUrl, journal.issue, journal.pages.end
    const nullableFieldPaths = new Set([
      'access.licenseUrl',
      'access.sourceUrl',
      'access.localPdfUrl',
      'access.researchGateUrl',
      'journal.issue',
      'journal.pages.end',
    ]);
    
    if (value === null) {
      // Keep null values for fields that are explicitly nullable
      if (nullableFieldPaths.has(currentPath)) {
        result[key] = null;
      }
      // Otherwise, omit the field entirely (don't add it to result)
    } else if (typeof value === 'object') {
      const cleaned = removeNullValues(value, currentPath);
      // Only include non-empty objects/arrays
      // For objects, check if they have any non-null values
      if (Array.isArray(cleaned)) {
        if (cleaned.length > 0) {
          result[key] = cleaned;
        }
      } else {
        const hasNonNullValues = Object.values(cleaned).some(v => v !== null);
        if (hasNonNullValues) {
          result[key] = cleaned;
        }
        // If object only contains null values, omit it (since nested objects are optional)
      }
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

/**
 * Creates a new paper from template and arguments
 */
function createNewPaper(args) {
  // Load template
  const template = JSON.parse(readFileSync(TEMPLATE_PATH, 'utf-8'));
  
  // Determine DOI and slug
  let doi = null;
  let slug = null;
  
  if (args.doi) {
    doi = normalizeDoi(args.doi);
    slug = doiToSlug(doi);
  } else if (args.slug) {
    slug = cleanSlug(args.slug);
  } else {
    throw new Error('Either --doi or --slug must be provided');
  }
  
  if (!slug) {
    throw new Error('Could not generate a valid slug');
  }
  
  // Generate ID
  let id;
  if (doi) {
    id = `doi-${slug}`;
  } else {
    id = `legacy-${randomId()}`;
  }
  
  // Build paper object
  const paper = {
    ...template,
    id,
    slug,
    title: args.title || '',
    categories: ['Uncategorized'],
    access: {
      ...template.access,
      status: 'unknown',
    },
  };
  
  // Add DOI if provided
  if (doi) {
    paper.doi = doi;
    paper.identifiers = {
      ...template.identifiers,
      doi: doi,
    };
  }
  
  // Add year if provided
  if (args.year) {
    paper.publication = {
      ...template.publication,
      year: args.year,
    };
  }
  
  // Remove null values from optional fields that don't allow null
  // This ensures the paper matches the Zod schema which expects optional
  // fields to be omitted rather than set to null
  const cleanedPaper = removeNullValues(paper);
  
  return { paper: cleanedPaper, slug };
}

// ============================================================================
// Main function
// ============================================================================

function main() {
  try {
    const args = parseArgs();
    
    // Validate arguments
    if (!args.doi && !args.slug) {
      console.error('Error: Either --doi or --slug must be provided');
      console.error('\nUsage:');
      console.error('  node new-paper.mjs --doi <doi> [--year <year>] [--force]');
      console.error('  node new-paper.mjs --slug <slug> --title <title> [--year <year>] [--force]');
      process.exit(1);
    }
    
    if (!args.doi && !args.title) {
      console.error('Error: --title is required when using --slug');
      process.exit(1);
    }
    
    // Create paper
    const { paper, slug } = createNewPaper(args);
    
    // Check if file exists
    const filePath = join(PAPERS_DIR, `${slug}.json`);
    if (existsSync(filePath) && !args.force) {
      console.error(`Error: File already exists: ${filePath}`);
      console.error('Use --force to overwrite');
      process.exit(1);
    }
    
    // Write file
    const jsonContent = JSON.stringify(paper, null, 2) + '\n';
    writeFileSync(filePath, jsonContent, 'utf-8');
    
    console.log(`Created paper: ${filePath}`);
    console.log(`  ID: ${paper.id}`);
    console.log(`  Slug: ${paper.slug}`);
    if (paper.doi) {
      console.log(`  DOI: ${paper.doi}`);
    }
    if (paper.title) {
      console.log(`  Title: ${paper.title}`);
    }
    if (paper.publication?.year) {
      console.log(`  Year: ${paper.publication.year}`);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    if (error.stack) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

main();

