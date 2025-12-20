# res.adhd.org.sa-concept
Research Portal Concept

## Paper Management Scripts

This repository includes several scripts for managing the research paper library in `concept/res-hub/src/content/papers/`.

### Audit Papers

Audit all papers to identify missing metadata and generate normalized outputs.

```bash
cd concept/res-hub
npm run papers:audit
```

**Outputs:**
- `audit/papers_normalized.json` - All papers with complete schema structure (sorted by year desc, then title)
- `audit/papers_missing.csv` - CSV report of papers with missing fields

**Missing fields flagged:**
- `abstract` (if missing or shorter than 100 characters)
- `publication.year`
- `journal.name`
- `authors` (if empty array)
- `access.localPdfUrl` (only if `access.sourceUrl` is also missing - distinguishes metadata completeness from local cache)
- `identifiers.doi` (if null - checks both top-level `doi` and `identifiers.doi`)

### Fetch Metadata from Crossref

Fetch missing metadata from Crossref API for papers with DOIs. Only fills missing fields and never overwrites existing data.

```bash
cd concept/res-hub
npm run papers:fetch-crossref
```

**Options:**
- `--dry-run` - Show what would be updated without writing files
- `--doi <doi>` - Process only a specific DOI (for testing)
- `--fields <field1,field2>` - Only update specific fields (e.g., `authors,publication.year`)
- `--limit <n>` - Process only first N papers (for testing)
- `--delay <ms>` - Delay between requests in milliseconds (default: 1000)

**Examples:**
```bash
# Dry run on first 10 papers
npm run papers:fetch-crossref -- --dry-run --limit 10

# Update only authors and publication year
npm run papers:fetch-crossref -- --fields authors,publication.year

# Process specific DOI
npm run papers:fetch-crossref -- --doi "10.1002/bio.4812"

# Full run with custom delay (2 seconds between requests)
npm run papers:fetch-crossref -- --delay 2000
```

**Outputs:**
- Updated paper JSON files (unless `--dry-run` is used)
- `audit/crossref-update-report.json` - Detailed log of what was updated per paper

**Note:** The script respects Crossref's rate limits (1 request/second by default) and includes automatic retry logic for rate limit errors.

### Fetch Open Access Status from Unpaywall

Fetch open access status and URLs from Unpaywall API for papers with DOIs. Updates `access.status` (from "unknown" to "open" or "closed") and can provide open access URLs.

```bash
cd concept/res-hub
npm run papers:fetch-unpaywall
```

**Options:**
- `--dry-run` - Show what would be updated without writing files
- `--doi <doi>` - Process only a specific DOI (for testing)
- `--limit <n>` - Process only first N papers (for testing)
- `--delay <ms>` - Delay between requests in milliseconds (default: 1000)
- `--only-unknown` - Only update papers with `access.status` set to "unknown"

**Examples:**
```bash
# Dry run on first 10 papers
npm run papers:fetch-unpaywall -- --dry-run --limit 10

# Only update papers with status "unknown"
npm run papers:fetch-unpaywall -- --only-unknown

# Process specific DOI
npm run papers:fetch-unpaywall -- --doi "10.1177/10870547241265877"

# Full run with custom delay (2 seconds between requests)
npm run papers:fetch-unpaywall -- --delay 2000
```

**Outputs:**
- Updated paper JSON files (unless `--dry-run` is used)
- `audit/unpaywall-update-report.json` - Detailed log of what was updated per paper

**Fields updated:**
- `access.status` - Set to "open" or "closed" based on Unpaywall data (only if currently "unknown" or missing)
- `access.sourceUrl` - Open access URL from best available location (only if missing)
- `access.license` - License information if available (only if missing)
- `access.licenseUrl` - License URL if available (only if missing)

**Note:** The script uses email `web@adhd.org.sa` as required by Unpaywall API. It respects rate limits (1 request/second by default) and includes automatic retry logic for rate limit errors.

### Enrich Papers Metadata (Multi-Source)

Enrich papers with missing metadata by querying multiple sources in priority order. This script reads `audit/papers_missing.csv` and attempts to fill gaps from OpenAlex, Semantic Scholar, publisher page scraping, and GROBID PDF parsing. Supports both DOI-based lookups and title-based search for papers without DOIs.

```bash
cd concept/res-hub
npm run papers:enrich
```

**Options:**
- `--dry-run` - Show what would be updated without writing files
- `--doi <doi>` - Process only a specific DOI (for testing)
- `--limit <n>` - Process only first N papers (for testing)
- `--delay <ms>` - Delay between requests in milliseconds (default: 1000)
- `--skip-grobid` - Skip GROBID PDF parsing (useful if service not available)
- `--sources <source1,source2>` - Only use specified sources (e.g., `openalex,semantic`)

**Examples:**
```bash
# Dry run on first 10 papers
npm run papers:enrich -- --dry-run --limit 10

# Process specific DOI
npm run papers:enrich -- --doi "10.1177/10870547241265877"

# Only use OpenAlex and Semantic Scholar (skip scraping and GROBID)
npm run papers:enrich -- --sources openalex,semantic

# Full run with custom delay (2 seconds between requests)
npm run papers:enrich -- --delay 2000

# Skip GROBID (if service not available)
npm run papers:enrich -- --skip-grobid
```

**Outputs:**
- Updated paper JSON files (unless `--dry-run` is used)
- `audit/enrichment-log.json` - Detailed log showing source and confidence for each update
- `audit/enrichment-summary.json` - Summary statistics
- `audit/cache/` - Cached API responses (enables fast re-runs)

**Source Priority:**
1. **OpenAlex API** - Fetches comprehensive metadata including abstract, authors, journal, year, DOI, and OA locations (PDF URLs, landing pages)
2. **Semantic Scholar API** - Fetches abstract, authors, journal, year, and open access PDF URLs
3. **Publisher Page Scraping** - Scrapes meta tags from DOI landing pages for abstract and PDF URLs
4. **GROBID PDF Parsing** - Extracts abstract from local PDF files (requires GROBID service running)

**Fields Updated:**
- `abstract` - Fetched from available sources (only if missing or shorter than 100 characters)
- `access.sourceUrl` - PDF URL from available sources (only if missing)
- `authors` - Author list with given/family names and ORCIDs (only if missing or empty)
- `journal.name` - Journal name (only if missing)
- `publication.year` - Publication year (only if missing)
- `identifiers.doi` - DOI discovered via title search (only if missing)

**Title-Based Search:**
- When a paper lacks a DOI, the script automatically searches OpenAlex by title
- Validates matches using title similarity (85% threshold) and year matching (±1 year)
- If a match is found, extracts the DOI and uses it for subsequent metadata lookups
- This enables enrichment of papers that were imported without DOIs

**Validation:**
- Title similarity check (85% threshold) to ensure correct paper match
- Year matching (allows ±1 year difference)
- Only updates if validation passes

**Caching:**
- API responses are cached in `audit/cache/` to avoid re-fetching
- Cache keyed by normalized DOI
- Enables safe re-runs and faster development/testing

**Note:** 
- The script processes papers from `audit/papers_missing.csv` (run `npm run papers:audit` first)
- Processes papers with any missing fields: `abstract`, `access.sourceUrl`, `authors`, `journal.name`, `publication.year`, or `identifiers.doi`
- Automatically uses title-based search when DOI is missing (no special flag needed)
- GROBID requires a running service (default: `http://localhost:8070`, configurable via `GROBID_ENDPOINT` env var)
- Rate limits: OpenAlex (1 req/sec), Semantic Scholar (100 req/5min), Publisher scraping (1 req/sec)
- All updates are validated using title similarity and year matching before applying

### Create New Paper

Generate a new paper JSON file from a template with consistent formatting.

```bash
cd concept/res-hub
npm run paper:new
```

**Options:**
- `--doi <doi>` - Create paper from DOI (slug will be auto-generated)
- `--slug <slug> --title <title>` - Create paper with custom slug and title
- `--year <year>` - Set publication year (optional)
- `--force` - Overwrite existing file if it exists

**Examples:**
```bash
# Create from DOI
npm run paper:new -- --doi "10.1000/test.doi" --title "Test Paper" --year 2024

# Create without DOI
npm run paper:new -- --slug "test-paper" --title "Test Paper" --year 2023
```

**Default values:**
- `categories`: `["Uncategorized"]`
- `access.status`: `"unknown"`
- `id`: `doi-<slug>` if DOI provided, otherwise `legacy-<random10>`

## Paper Schema

Papers follow a Zod schema defined in `concept/res-hub/src/content/config.ts`. A canonical template with all fields is available at `concept/res-hub/scripts/paper.template.json` for reference.
