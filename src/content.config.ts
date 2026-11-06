// This file tells Astro where the reflections (blog posts) and publications live,
// and which fields each one must have. If a field is missing or misspelled,
// the build stops with a message naming the file, so mistakes never go live.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Every .md file in src/content/reflections/ is one post on the Reflections page.
const reflections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reflections' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Every entry in src/data/publications.yaml is one item on Publications and Projects.
const publications = defineCollection({
  loader: file('src/data/publications.yaml'),
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    date: z.coerce.date(),
    link: z.string().url(),
    description: z.string(),
  }),
});

export const collections = { reflections, publications };
