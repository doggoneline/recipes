import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
                                 schema: z.object({
                                     title: z.string(),
                                                  categories: z.array(z.string()).default([]),
                                                  tags: z.array(z.string()).default([]),
                                                  ingredients: z.array(z.object({
                                                      amount: z.union([z.number(), z.string()]).optional(),
                                                                                unit: z.string().optional(),
                                                                                item: z.string(),
                                                                                note: z.string().optional(),
                                                  })),
                                 }),
});

export const collections = { recipes };
