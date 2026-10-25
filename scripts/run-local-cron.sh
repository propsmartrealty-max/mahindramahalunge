#!/usr/bin/env bash
# ==============================================================================
# Local Search Engine Auto-Indexer Cron Runner
# Mahindra Rivenza Ecosystem (https://mahindralifespaceshomes.in)
# ==============================================================================

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

cd "${PROJECT_ROOT}"

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Starting Search Engine Indexer Cron..."

# Ensure dependencies & build are fresh
if [ ! -d "dist" ]; then
  echo "Building production static pages..."
  npm run build
fi

# Execute Broadcast Script
node scripts/cron-search-indexer.mjs

echo "[$(date '+%Y-%m-%d %H:%M:%S')] Search Engine Indexer Cron finished successfully."
