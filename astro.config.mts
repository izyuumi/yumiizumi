import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://yumiizumi.com",
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: {
        tabIndex: -1
      }
    }]]
  },
  integrations: [react()]
});