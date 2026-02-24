#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');
const AUDIT_DIR = join(ROOT_DIR, 'audit');
const REPORT_PATH = join(AUDIT_DIR, 'unpaywall-update-report.json');
const UNPAYWALL_EMAIL = 'web@adhd.org.sa';

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
// Missing field detection
// ============================================================================

function isMissing(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
}

function needsAccessUpdate(paper) {
  // Check if access.status is missing or "unknown"
  const status = paper.access?.status;
  if (!status || status === 'unknown') {
    return true;
  }
  
  // Also check if sourceUrl is missing but we might have an OA URL
  if (isMissing(paper.access?.sourceUrl)) {
    return true;
  }
  
  return false;
}

// ============================================================================
// Unpaywall API integration
// ============================================================================

/**
 * Fetches open access information from Unpaywall API for a given DOI
 */
async function fetchUnpaywallMetadata(doi, delay = 1000) {
  const normalizedDoi = normalizeDoi(doi);
  const url = `https://api.unpaywall.org/v2/${encodeURIComponent(normalizedDoi)}?email=${encodeURIComponent(UNPAYWALL_EMAIL)}`;
  
  try {
    // Rate limiting: wait before request
    if (delay > 0) {
      await new Promise(resolve => setTimeout(resolve, delay));
    }
    
    const response = await fetch(url);
    
    // Handle rate limiting
    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      const waitTime = retryAfter ? parseInt(retryAfter, 10) * 1000 : delay * 2;
      console.warn(`Rate limited. Waiting ${waitTime}ms...`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      // Retry once
      const retryResponse = await fetch(url);
      if (!retryResponse.ok) {
        throw new Error(`HTTP ${retryResponse.status}: ${retryResponse.statusText}`);
      }
      return await retryResponse.json();
    }
    
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('DOI not found in Unpaywall');
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    if (error.message.includes('fetch failed') || error.message.includes('network')) {
      throw new Error(`Network error: ${error.message}`);
    }
    throw error;
  }
}

// ============================================================================
// Unpaywall to our schema mapping
// ============================================================================

/**
 * Maps Unpaywall response to our paper schema format
 */
function mapUnpaywallToSchema(unpaywallData, existingPaper) {
  const updates = {};
  
  if (!unpaywallData) {
    return updates;
  }
  
  // Determine access status
  let accessStatus = 'unknown';
  if (unpaywallData.is_oa === true) {
    // Map OA status: gold, green, hybrid, bronze -> open
    const oaStatus = unpaywallData.oa_status?.toLowerCase();
    if (oaStatus === 'gold' || oaStatus === 'green' || oaStatus === 'hybrid' || oaStatus === 'bronze') {
      accessStatus = 'open';
    } else {
      accessStatus = 'open'; // If is_oa is true, treat as open regardless of specific status
    }
  } else if (unpaywallData.is_oa === false) {
    accessStatus = 'closed';
  }
  
  // Only update status if it's missing or "unknown"
  const currentStatus = existingPaper.access?.status;
  if (!currentStatus || currentStatus === 'unknown') {
    updates.access = {
      ...existingPaper.access,
      status: accessStatus,
    };
  }
  
  // Get best OA location URL
  const bestOaLocation = unpaywallData.best_oa_location;
  if (bestOaLocation && bestOaLocation.url) {
    // Only update sourceUrl if it's missing
    if (isMissing(existingPaper.access?.sourceUrl)) {
      updates.access = {
        ...(updates.access || existingPaper.access || {}),
        sourceUrl: bestOaLocation.url,
      };
    }
    
    // Update license if available
    if (bestOaLocation.license && isMissing(existingPaper.access?.license)) {
      updates.access = {
        ...(updates.access || existingPaper.access || {}),
        license: bestOaLocation.license,
      };
    }
    
    // Update licenseUrl if available
    if (bestOaLocation.license_url && isMissing(existingPaper.access?.licenseUrl)) {
      updates.access = {
        ...(updates.access || existingPaper.access || {}),
        licenseUrl: bestOaLocation.license_url,
      };
    }
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
  
  // Merge access object
  if (updates.access) {
    merged.access = { ...(merged.access || {}), ...updates.access };
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
    limit: null,
    delay: 1000,
    onlyUnknown: false, // Only update papers with status "unknown"
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
    } else if (arg === '--only-unknown') {
      result.onlyUnknown = true;
    }
  }
  
  return result;
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
    
    // Note: If args.doi was provided, files were already filtered by DOI/slug/filename,
    // so no need to check again here
    
    // Check if access update is needed
    if (!needsAccessUpdate(paper)) {
      if (args.onlyUnknown) {
        stats.skippedComplete++;
        return { status: 'skipped', reason: 'access status already set' };
      }
      // If not only-unknown mode, still check if sourceUrl is missing
      if (!isMissing(paper.access?.sourceUrl)) {
        stats.skippedComplete++;
        return { status: 'skipped', reason: 'access information complete' };
      }
    }
    
    // If only-unknown mode, check status
    if (args.onlyUnknown) {
      const status = paper.access?.status;
      if (status && status !== 'unknown') {
        stats.skippedComplete++;
        return { status: 'skipped', reason: 'status is not unknown' };
      }
    }
    
    // Fetch from Unpaywall
    let unpaywallData;
    try {
      unpaywallData = await fetchUnpaywallMetadata(doi, args.delay);
    } catch (error) {
      stats.errors++;
      return { status: 'error', error: error.message, doi };
    }
    
    // Map to our schema
    const updates = mapUnpaywallToSchema(unpaywallData, paper);
    
    if (Object.keys(updates).length === 0) {
      stats.skippedNoUpdates++;
      return { status: 'skipped', reason: 'no updates available from Unpaywall' };
    }
    
    // Merge updates
    const updatedPaper = mergeUpdates(paper, updates);
    
    // Track what was updated
    const updatedFields = [];
    if (updates.access) {
      if (updates.access.status) updatedFields.push('access.status');
      if (updates.access.sourceUrl) updatedFields.push('access.sourceUrl');
      if (updates.access.license) updatedFields.push('access.license');
      if (updates.access.licenseUrl) updatedFields.push('access.licenseUrl');
    }
    
    for (const field of updatedFields) {
      stats.fieldsUpdated[field] = (stats.fieldsUpdated[field] || 0) + 1;
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
  
  console.log('Unpaywall Metadata Fetcher');
  console.log('='.repeat(60));
  if (args.dryRun) {
    console.log('DRY RUN MODE - No files will be modified');
  }
  console.log(`Email: ${UNPAYWALL_EMAIL}`);
  console.log(`Delay between requests: ${args.delay}ms`);
  if (args.doi) {
    console.log(`Processing specific DOI: ${args.doi}`);
  }
  if (args.onlyUnknown) {
    console.log('Only updating papers with status "unknown"');
  }
  if (args.limit) {
    console.log(`Processing limit: ${args.limit} papers`);
  }
  console.log('='.repeat(60));
  console.log('');
  
  // Get list of papers
  let files = readdirSync(PAPERS_DIR).filter(f => f.endsWith('.json'));
  
  // Filter by DOI/slug/filename if specified
  if (args.doi) {
    const targetDoi = normalizeDoi(args.doi);
    const targetInput = args.doi.toLowerCase().trim();
    files = files.filter(file => {
      try {
        const paper = JSON.parse(readFileSync(join(PAPERS_DIR, file), 'utf-8'));
        const paperDoi = normalizeDoi(paper.doi || paper.identifiers?.doi || '');
        const paperSlug = (paper.slug || file.replace(/\.json$/, '')).toLowerCase();
        const fileName = file.replace(/\.json$/, '').toLowerCase();
        // Match by normalized DOI, slug, or filename
        return paperDoi === targetDoi || 
               paperSlug === targetInput || 
               fileName === targetInput;
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

