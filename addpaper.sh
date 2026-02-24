#!/usr/bin/env bash

set -euo pipefail

usage() {
  echo "Usage: $0 \"<doi>\""
  echo
  echo "Example:"
  echo "  $0 \"10.4103/ijpam.ijpam_167_25\""
}

if [[ $# -ne 1 ]]; then
  usage
  exit 1
fi

doi="$1"

run_step() {
  local step="$1"
  shift
  echo
  echo "==> ${step}"
  "$@"
}

run_step "Creating paper file" npm run paper:new -- --doi "$doi"
run_step "Auditing papers" npm run papers:audit
run_step "Fetching Crossref metadata" npm run papers:fetch-crossref -- --doi "$doi"
run_step "Fetching Unpaywall metadata" npm run papers:fetch-unpaywall -- --doi "$doi"
run_step "Enriching paper metadata" npm run papers:enrich -- --doi "$doi"
run_step "Cleaning abstract markup" npm run papers:clean-abstracts -- --doi "$doi"

echo
echo "Done: all steps completed successfully for DOI: $doi"
