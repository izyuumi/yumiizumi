import { defineCollection, z } from "astro:content";

const tags = ["tech", "music", "math", "science", "programming"];

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().url().optional(),
    tags: z
      .array(
        z.string().refine((tag) => tags.includes(tag), {
          params: (tag: string) => ({ tag }),
          message: "Invalid tag: $tag",
        })
      )
      .optional(),
  }),
});

export const collections = { blog };
