import { defineCollection, z } from 'astro:content';

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
};
