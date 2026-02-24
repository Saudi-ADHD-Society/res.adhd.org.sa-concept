#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const SCRIPTS_DIR = __dirname;
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');
const LIBRARY_DIR = join(ROOT_DIR, 'public/library');
const PDF_MAP_PATH = join(SCRIPTS_DIR, 'pdf_map.json');

// ============================================================================
// Load PDF Map
// ============================================================================

function loadPdfMap() {
  if (!existsSync(PDF_MAP_PATH)) {
    console.error(`Error: PDF map file not found: ${PDF_MAP_PATH}`);
    console.error('Please copy pdf_map.json to the scripts directory.');
    process.exit(1);
  }

  try {
    const content = readFileSync(PDF_MAP_PATH, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error reading PDF map: ${error.message}`);
    process.exit(1);
  }
}

// ============================================================================
// Update Paper JSON with PDF URL
// ============================================================================

function updatePaperJson(paper, pdfPath) {
  // Create access object if it doesn't exist
  if (!paper.access) {
    paper.access = {
      status: 'unknown',
    };
  }

  // Update/add localPdfUrl
  paper.access.localPdfUrl = pdfPath;

  return paper;
}

// ============================================================================
// Process all papers
// ============================================================================

function applyPdfMap() {
  console.log('Loading PDF map...');
  const pdfMap = loadPdfMap();
  console.log(`Loaded ${Object.keys(pdfMap).length} PDF mappings\n`);

  console.log('Processing paper JSON files...\n');

  // Get all JSON files in papers directory
  const files = readdirSync(PAPERS_DIR)
    .filter(file => file.endsWith('.json'))
    .sort();

  let updated = 0;
  let unchanged = 0;
  const unmatched = [];
  const missingPdfs = [];
  let errors = 0;

  for (const filename of files) {
    const filepath = join(PAPERS_DIR, filename);

    try {
      // Read and parse JSON
      const content = readFileSync(filepath, 'utf-8');
      const paper = JSON.parse(content);

      // Get slug
      const slug = paper.slug;
      if (!slug) {
        console.warn(`WARNING: ${filename} has no slug field, skipping`);
        unchanged++;
        continue;
      }

      // Check if slug exists in PDF map
      if (pdfMap[slug]) {
        const pdfPath = pdfMap[slug];

        // Check if PDF file exists
        const pdfFilePath = join(ROOT_DIR, 'public', pdfPath);
        if (!existsSync(pdfFilePath)) {
          missingPdfs.push({ slug, pdfPath });
        }

        // Update paper JSON
        const updatedPaper = updatePaperJson(paper, pdfPath);

        // Write back JSON with proper formatting (2-space indent, newline at EOF)
        const jsonContent = JSON.stringify(updatedPaper, null, 2) + '\n';
        writeFileSync(filepath, jsonContent, 'utf-8');

        updated++;
        if (updated % 10 === 0) {
          console.log(`  Updated ${updated} papers...`);
        }
      } else {
        unmatched.push(slug);
        unchanged++;
      }
    } catch (error) {
      errors++;
      console.error(`Error processing ${filename}: ${error.message}`);
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('PDF Map Application Summary');
  console.log('='.repeat(60));
  console.log(`Records updated: ${updated}`);
  console.log(`Records unchanged: ${unchanged}`);
  console.log(`Errors: ${errors}`);
  console.log('');

  if (unmatched.length > 0) {
    console.log(`Unmatched slugs (not in map): ${unmatched.length}`);
    unmatched.forEach(slug => {
      console.log(`  - ${slug}`);
    });
    console.log('');
  } else {
    console.log('All slugs matched in PDF map!');
    console.log('');
  }

  if (missingPdfs.length > 0) {
    console.log(`Missing PDF files (path doesn't exist): ${missingPdfs.length}`);
    missingPdfs.forEach(({ slug, pdfPath }) => {
      console.log(`  - ${slug} -> ${pdfPath}`);
    });
    console.log('');
  } else {
    console.log('All PDF files exist in public/library/');
  }

  console.log('='.repeat(60));
}

// ============================================================================
// Main
// ============================================================================

applyPdfMap();

