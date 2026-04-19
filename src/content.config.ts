import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    status: z.enum(['live', 'testflight', 'internal', 'dev']),
    kind: z.enum(['app', 'website']).default('app'),
    accent: z.enum(['warm', 'cool', 'neutral']).default('neutral'),
    url: z.string().url().optional(),
    testflight: z.string().url().optional(),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(false),
  }),
});

const businesses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/businesses' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    description: z.string(),
    services: z.array(z.string()).default([]),
    link: z.object({ label: z.string(), href: z.string() }),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    readTime: z.string().optional(),
    excerpt: z.string(),
    href: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(false),
  }),
});

export const collections = { projects, businesses, articles };
