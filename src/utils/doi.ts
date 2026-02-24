/**
 * Normalizes a DOI string by trimming, lowercasing, and removing https://doi.org/ prefix if present
 */
export function normalizeDoi(input: string): string {
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
export function doiToSlug(doi: string): string {
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
