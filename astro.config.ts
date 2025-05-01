import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://yumiizumi.com",
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            tabIndex: -1,
          },
        },
      ],
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  redirects: {
    "/blog/1/": "/blog/why-i-will-start-blogging/",
    "/blog/2/": "/blog/componetizing-everything/",
    "/blog/3/": "/blog/why-i-read-books/",
    "/blog/4/": "/blog/the-power-of-statically-typing/",
    "/blog/5/": "/blog/why-i-stopped-procrastinating/",
    "/blog/6/": "/blog/what-writing-does-for-me/",
    "/blog/7/": "/blog/how-i-think-about-privacy/",
  },
});
