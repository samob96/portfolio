import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    status: z.enum(['live', 'testflight', 'internal', 'dev']),
    url: z.string().url().optional(),
    testflight: z.string().url().optional(),
    github: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    published: z.boolean().default(false),
  }),
});

export const collections = { projects };
