#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..');
const PAPERS_DIR = join(ROOT_DIR, 'src/content/papers');

function normalizeDoi(input) {
  if (!input) return '';
  return input
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\/doi\.org\//, '')
    .replace(/^doi:/, '');
}

function parseArgs() {
  const args = process.argv.slice(2);
  const result = { doi: null };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--doi' && i + 1 < args.length) {
      result.doi = args[i + 1];
      i++;
    }
  }
  return result;
}

function decodeHtmlEntities(text) {
  if (!text) return text;

  const namedEntities = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' ',
    ensp: ' ',
    emsp: ' ',
    thinsp: ' ',
  };

  return text.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity) => {
    if (entity.startsWith('#x') || entity.startsWith('#X')) {
      const codePoint = parseInt(entity.slice(2), 16);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
    }
    if (entity.startsWith('#')) {
      const codePoint = parseInt(entity.slice(1), 10);
      return Number.isFinite(codePoint) ? String.fromCodePoint(codePoint) : match;
    }
    return Object.prototype.hasOwnProperty.call(namedEntities, entity)
      ? namedEntities[entity]
      : match;
  });
}

function normalizeTitle(title) {
  if (!title) return '';
  const cleaned = title.replace(/\s+/g, ' ').trim().replace(/[:\uFF1A]+$/u, '');
  if (!cleaned) return '';
  return `${cleaned}:`;
}

function normalizeWhitespace(text) {
  if (!text) return text;
  return text
    .replace(/\r/g, '')
    .replace(/[\u00A0\u2000-\u200A\u202F\u205F\u3000]/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n[ \t]+/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/([^\n])\n([^\n])/g, '$1 $2')
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    .trim();
}

function cleanJatsSections(raw) {
  const secPattern = /<(?:(?:\w+:)?sec)\b[^>]*>([\s\S]*?)<\/(?:(?:\w+:)?sec)>/gi;
  const sections = [];
  let match;

  while ((match = secPattern.exec(raw)) !== null) {
    const secContent = match[1];
    const titleMatch = secContent.match(/<(?:(?:\w+:)?title)\b[^>]*>([\s\S]*?)<\/(?:(?:\w+:)?title)>/i);
    const title = titleMatch ? normalizeTitle(stripTags(titleMatch[1])) : '';

    const paragraphs = [];
    const pPattern = /<(?:(?:\w+:)?p)\b[^>]*>([\s\S]*?)<\/(?:(?:\w+:)?p)>/gi;
    let pMatch;
    while ((pMatch = pPattern.exec(secContent)) !== null) {
      const paragraph = normalizeWhitespace(stripTags(pMatch[1]))
        .replace(/\n+/g, ' ')
        .replace(/\s{2,}/g, ' ')
        .trim();
      if (paragraph) paragraphs.push(paragraph);
    }

    if (paragraphs.length > 0) {
      const body = paragraphs.join(' ');
      sections.push(title ? `${title} ${body}` : body);
    }
  }

  return sections.length > 0 ? sections.join('\n\n') : null;
}

function stripTags(text) {
  if (!text) return text;

  const withBlockBreaks = text
    .replace(/<\s*br\s*\/?\s*>/gi, '\n')
    .replace(/<\s*\/?\s*(?:\w+:)?(?:p|div|sec|title|li|ul|ol)\b[^>]*>/gi, '\n');

  const withoutTags = withBlockBreaks
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ');

  return decodeHtmlEntities(withoutTags);
}

function cleanAbstract(rawAbstract) {
  if (!rawAbstract || typeof rawAbstract !== 'string') {
    return rawAbstract;
  }

  const sectionCleaned = cleanJatsSections(rawAbstract);
  const candidate = sectionCleaned || stripTags(rawAbstract);
  return normalizeWhitespace(candidate);
}

function matchesTargetPaper(paper, fileName, targetInput) {
  if (!targetInput) return true;

  const normalizedTargetDoi = normalizeDoi(targetInput);
  const targetLower = targetInput.toLowerCase().trim();
  const fileSlug = fileName.replace(/\.json$/, '').toLowerCase();
  const paperSlug = (paper.slug || '').toLowerCase();
  const paperDoi = normalizeDoi(paper.doi || paper.identifiers?.doi || '');

  return paperDoi === normalizedTargetDoi || paperSlug === targetLower || fileSlug === targetLower;
}

function processPaperFile(filePath) {
  const content = readFileSync(filePath, 'utf8');
  const paper = JSON.parse(content);

  if (!paper.abstract || typeof paper.abstract !== 'string') {
    return { updated: false, reason: 'no abstract' };
  }

  const originalAbstract = paper.abstract;
  const cleanedAbstract = cleanAbstract(originalAbstract);
  if (!cleanedAbstract || cleanedAbstract === originalAbstract) {
    return { updated: false, reason: 'no changes needed' };
  }

  paper.abstract = cleanedAbstract;
  writeFileSync(filePath, JSON.stringify(paper, null, 2) + '\n', 'utf8');
  return { updated: true };
}

function main() {
  const args = parseArgs();
  const files = readdirSync(PAPERS_DIR).filter(file => file.endsWith('.json'));

  console.log('Abstract Cleanup');
  console.log('='.repeat(50));
  if (args.doi) {
    console.log(`Target DOI/slug/file: ${args.doi}`);
  }
  console.log(`Scanning ${files.length} paper file(s)\n`);

  let processedCount = 0;
  let updatedCount = 0;
  let skippedCount = 0;

  for (const file of files) {
    const filePath = join(PAPERS_DIR, file);

    try {
      const paper = JSON.parse(readFileSync(filePath, 'utf8'));
      if (!matchesTargetPaper(paper, file, args.doi)) {
        continue;
      }

      processedCount++;
      const result = processPaperFile(filePath);

      if (result.updated) {
        updatedCount++;
        console.log(`✓ Updated: ${file}`);
      } else {
        skippedCount++;
        console.log(`- Skipped: ${file} (${result.reason})`);
      }
    } catch (error) {
      skippedCount++;
      console.error(`✗ Error: ${file} (${error.message})`);
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log('Summary');
  console.log('='.repeat(50));
  console.log(`Processed: ${processedCount}`);
  console.log(`Updated: ${updatedCount}`);
  console.log(`Skipped/Errors: ${skippedCount}`);
}

main();

