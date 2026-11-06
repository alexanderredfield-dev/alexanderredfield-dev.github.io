// This file tells Astro where the blog posts and portfolio items live,
// and which fields each one must have. If a field is missing or misspelled,
// the build stops with a message naming the file, so mistakes never go live.
import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Every .md file in src/content/writing/ is one blog post.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Every entry in src/data/portfolio.yaml is one portfolio item.
const portfolio = defineCollection({
  loader: file('src/data/portfolio.yaml'),
  schema: z.object({
    title: z.string(),
    outlet: z.string(),
    date: z.coerce.date(),
    link: z.string().url(),
    description: z.string(),
  }),
});

export const collections = { writing, portfolio };
