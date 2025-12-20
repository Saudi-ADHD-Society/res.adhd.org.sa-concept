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
- `abstract`
- `publication.year`
- `journal.name`
- `authors` (if empty array)
- `access.localPdfUrl` (if null)
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
