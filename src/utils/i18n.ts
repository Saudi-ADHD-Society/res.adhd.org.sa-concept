import enTranslations from '../i18n/en.json';
import arTranslations from '../i18n/ar.json';

export type Locale = 'en' | 'ar';

type TranslationKey = 
  | `navigation.${string}`
  | `breadcrumbs.${string}`
  | `footer.${string}`
  | `common.${string}`
  | `library.${string}`
  | `status.${string}`
  | `forms.${string}`;

type Translations = typeof enTranslations;

/**
 * Get the translations object for a given locale
 */
export function getTranslations(locale: Locale): Translations {
  return locale === 'ar' ? arTranslations : enTranslations;
}

/**
 * Get a translated string by key path
 * Supports nested keys like 'navigation.sections.evidence-insights'
 * 
 * @param key - Dot-separated key path (e.g., 'navigation.sections.evidence-insights')
 * @param locale - Language locale ('en' or 'ar')
 * @param fallback - Optional fallback string if translation is missing
 * @returns Translated string or fallback/key if not found
 */
export function t(key: string, locale: Locale, fallback?: string): string {
  const translations = getTranslations(locale);
  
  // Navigate through nested object using dot notation
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k as keyof typeof value];
    } else {
      // Key not found, return fallback or key itself
      return fallback || key;
    }
  }
  
  // Handle string interpolation for values like "{count} paper{plural} found"
  if (typeof value === 'string') {
    return value;
  }
  
  return fallback || key;
}

/**
 * Get a nested translation object (useful for sections like navigation.items)
 */
export function getTranslationSection<T = any>(section: string, locale: Locale): T | undefined {
  const translations = getTranslations(locale);
  const keys = section.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k as keyof typeof value];
    } else {
      return undefined;
    }
  }
  
  return value as T;
}
