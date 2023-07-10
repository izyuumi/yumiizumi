import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().url().optional(),
    tags: z
      .array(
        z.union([
          z.literal("tech"),
          z.literal("music"),
          z.literal("math"),
          z.literal("science"),
          z.literal("programming"),
        ])
      )
      .optional(),
  }),
});

export const collections = { blog };
