# res.adhd.org.sa-concept
Research Portal Concept

## Editorial Guidance

### Research Brief vs Topic Guide

This section provides operational definitions to help decide whether content belongs in the **Topic Guides** section or the **Research Briefs** section.

---

#### Research Brief

**Purpose:**
To communicate the key findings, certainty, and implications of a specific body of evidence (usually a single study, review, or tightly bounded set of studies) in a concise, decision-focused format.

**Defining characteristics:**
- Anchored to one primary evidence source (e.g. an umbrella review, guideline update, landmark trial)
- Emphasises what the evidence says now
- Focuses on findings, strength of evidence, and implications
- Time-sensitive: may become outdated as evidence evolves
- Designed to be read quickly by clinicians, researchers, and policy-makers

**Typical questions it answers:**
- What did this study/review find?
- How strong and certain is the evidence?
- What does this mean for practice, policy, or future research?
- What are the limitations or uncertainties?

**Common features:**
- Clear citation to the source evidence
- Summary tables or certainty ratings (e.g. GRADE-style language)
- Short sections (Background → Key Findings → Implications → Limitations)
- Neutral, analytical tone

**In short:**
A Research Brief translates new or specific evidence into action-relevant insight.

---

#### Topic Guide

**Purpose:**
To provide a structured, authoritative overview of a broad topic, integrating evidence, concepts, debates, and practical implications to support deep understanding and informed use of evidence.

**Defining characteristics:**
- Covers a topic area, not a single study
- Integrates multiple evidence types (systematic reviews, guidelines, critiques, conceptual models)
- Emphasises how to understand and apply the evidence
- Relatively stable over time, with periodic updates
- Educational and interpretive, not just summarative

**Typical questions it answers:**
- What is known about this topic overall?
- What are the main concepts, models, or controversies?
- Where is there consensus, and where is there disagreement?
- How should professionals think about and use this evidence?

**Common features:**
- Conceptual framing and definitions
- Thematic sections (e.g. validity, mechanisms, assessment, implications)
- Links out to multiple Research Briefs and primary sources
- Clear signposting for different audiences (clinical, research, policy)

**In short:**
A Topic Guide helps users understand a field, not just a finding.

---

#### The Simplest Editorial Rule (if you're unsure)

- If you are explaining a piece of evidence → **Research Brief**
- If you are explaining a topic or question → **Topic Guide**

Or even more compact:
- **Research Brief** = "What does this evidence show?"
- **Topic Guide** = "How should we understand this area?"

---

#### How They Work Together on the Portal

Think of the relationship like this:
- **Topic Guides** are the conceptual backbone
- **Research Briefs** are the evidence updates plugged into that backbone

A Topic Guide should link out to multiple Research Briefs, while a Research Brief should usually sit within (or point back to) a relevant Topic Guide.

---

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

Generate a new paper JSON file from a template with consistent formatting. Creates a JSON file in `src/content/papers/` based on `scripts/paper.template.json`.

```bash
cd concept/res-hub
npm run paper:new
```

**Options:**
- `--doi <doi>` - Create paper from DOI (slug will be auto-generated from the DOI)
- `--slug <slug> --title <title>` - Create paper with custom slug (requires `--title`)
- `--year <year>` - Set publication year (optional, must be between 1900-2099)
- `--force` - Overwrite existing file if it exists

**Usage:**
- **With DOI**: Provide `--doi` and optionally `--year`. The slug is automatically generated from the DOI by normalizing it (lowercase, removes `https://doi.org/` prefix, converts `/` to `-`).
- **Without DOI**: Provide both `--slug` and `--title`, optionally `--year`. The slug will be cleaned (lowercase, removes invalid characters, collapses dashes).

**Examples:**
```bash
# Create from DOI (slug auto-generated as "10-1000-test-doi")
npm run paper:new -- --doi "10.1000/test.doi" --year 2024

# Create from DOI with full URL (automatically normalized)
npm run paper:new -- --doi "https://doi.org/10.1177/10870547241265877"

# Create without DOI (title required)
npm run paper:new -- --slug "my-research-paper" --title "My Research Paper Title" --year 2023

# Overwrite existing file
npm run paper:new -- --doi "10.1000/existing.doi" --force
```

**Output:**
- Creates a JSON file at `src/content/papers/<slug>.json`
- Prints confirmation with ID, slug, DOI (if provided), title (if provided), and year (if provided)

**Generated fields:**
- `id`: `doi-<slug>` if DOI provided, otherwise `legacy-<random10>` (10-character hex string)
- `slug`: Auto-generated from DOI or cleaned from provided slug
- `categories`: `["Uncategorized"]`
- `access.status`: `"unknown"`
- `doi` and `identifiers.doi`: Set if `--doi` provided (normalized)
- `title`: Set if `--title` provided (when using `--slug`)
- `publication.year`: Set if `--year` provided

## Paper Schema

Papers follow a Zod schema defined in `concept/res-hub/src/content/config.ts`. A canonical template with all fields is available at `concept/res-hub/scripts/paper.template.json` for reference.
