/**
 * Helper function to prepend base path to asset URLs
 * @param {string} basePath - The base path (e.g., '/res.adhd.org.sa-concept/')
 * @param {string} path - The asset path (e.g., 'images/photo.png')
 * @returns {string} - The full URL with base path
 */
export function withBase(basePath, path) {
  const base = basePath?.endsWith("/") ? basePath : `${basePath}/`;
  const clean = String(path || "").replace(/^\/+/, "");
  return `${base}${clean}`;
}
