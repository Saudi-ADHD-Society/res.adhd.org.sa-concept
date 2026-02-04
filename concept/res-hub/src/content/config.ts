import { defineCollection, z } from 'astro:content';

// Content section schema for page content
const contentSectionSchema = z.object({
  id: z.string(),
  type: z.enum(['heading', 'paragraph', 'list', 'card', 'hero', 'stats', 'cta']),
  content: z.union([
    z.string(), // For simple text content
    z.object({
      title: z.string().optional(),
      text: z.string().optional(),
      items: z.array(z.string()).optional(),
      link: z.string().optional(),
      linkText: z.string().optional(),
      icon: z.string().optional(),
      metadata: z.record(z.any()).optional(),
    }),
  ]),
  metadata: z.record(z.any()).optional(),
});

const pagesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(), // Page identifier (e.g., "home", "clinical-tools", "topic-guide-what-is-adhd")
    locale: z.enum(['en', 'ar']),
    title: z.string(),
    description: z.string().optional(),
    sections: z.array(contentSectionSchema).optional(),
    // For structured content like topic guides
    hero: z.object({
      title: z.string().optional(),
      subtitle: z.string().optional(),
      description: z.string().optional(),
      cta: z.object({
        primary: z.object({
          text: z.string(),
          href: z.string(),
        }).optional(),
        secondary: z.object({
          text: z.string(),
          href: z.string(),
        }).optional(),
      }).optional(),
    }).optional(),
    // For card-based pages like clinical tools
    cards: z.array(z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      href: z.string(),
      icon: z.string().optional(),
    })).optional(),
    // For stats sections (like home page)
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
  }),
});

const papersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    doi: z.string().optional(),
    identifiers: z.object({
      doi: z.string().optional(),
      url: z.string().optional(),
      pmid: z.string().optional(),
      pmcid: z.string().optional(),
      isbn: z.string().optional(),
    }).optional(),
    title: z.string(),
    abstract: z.string().optional(),
    language: z.string().default('English'),
    categories: z.array(z.string()),
    keywords: z.array(z.string()).optional(),
    publication: z.object({
      type: z.string().optional(),
      publishedDate: z.string().optional(),
      year: z.number().optional(),
    }).optional(),
    journal: z.object({
      name: z.string().optional(),
      abbreviation: z.string().optional(),
      issn: z.string().optional(),
      volume: z.string().optional(),
      issue: z.string().nullable().optional(),
      pages: z.object({
        start: z.string().optional(),
        end: z.string().nullable().optional(),
      }).optional(),
    }).optional(),
    authors: z.array(z.object({
      given: z.string(),
      family: z.string(),
      orcid: z.string().optional(),
      authorship: z.string().optional(),
      sequence: z.number().optional(),
    })).optional(),
    access: z.object({
      status: z.enum(['open', 'closed', 'unknown']),
      license: z.string().optional(),
      source: z.string().optional(),
      licenseUrl: z.string().nullable().optional(),
      sourceUrl: z.string().nullable().optional(),
      localPdfUrl: z.string().nullable().optional(),
      researchGateUrl: z.string().nullable().optional(),
    }),
    visibility: z.object({
      hidden: z.boolean().default(false),
    }).default({ hidden: false }),
    legacy: z.record(z.any()).optional(),
  }),
});

export const collections = {
  papers: papersCollection,
  pages: pagesCollection,
};
