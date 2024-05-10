import { getCollection } from "astro:content";

export const publicBlogs = await getCollection("blog", ({ data }) => {
  return !data.draft;
}).then((collection) => {
  return collection
    .sort((a, b) => {
      return new Date(b.data.pubDate) > new Date(a.data.pubDate) ? 1 : -1;
    })
    .slice(0, 5);
});
