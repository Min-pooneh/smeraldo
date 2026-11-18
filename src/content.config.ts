import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/products' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    brand: z.string().optional(),
    code: z.string().optional(),
    draft: z.boolean().default(false),
    category: z.string(),
    price: z.string().optional(),
    image: image().optional(),
    gallery: z.array(z.object({ image: image(), label: z.string() })).optional(),
    originalPrice: z.string().optional(),
    colors: z.array(z.object({ name: z.string(), hex: z.string().regex(/^#[0-9a-fA-F]{6}$/), image: image().optional(), modelImage: image().optional() })).optional(),
  }),
});
const categories = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/categories' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    nameFa: z.string(),
    image: image(),
    banner: image().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { products, categories };
