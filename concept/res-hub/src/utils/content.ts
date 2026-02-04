import { getCollection } from 'astro:content';
import type { Locale } from './i18n';

/**
 * Get page content by ID and locale from the pages collection
 */
export async function getPageContent(pageId: string, locale: Locale) {
  const allPages = await getCollection('pages');
  const page = allPages.find(
    (entry) => entry.data.id === pageId && entry.data.locale === locale
  );
  
  if (!page) {
    // Return null if not found - components should handle fallback
    return null;
  }
  
  return page;
}
