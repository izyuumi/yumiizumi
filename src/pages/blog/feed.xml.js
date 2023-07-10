import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function get(context) {
  const posts = await getCollection("blog").then((collection) =>
    collection.sort((a, b) =>
      new Date(b.data.pubDate) > new Date(a.data.pubDate) ? 1 : -1
    )
  );
  return rss({
    title: "Yumi Izumi's Blog",
    description: "Yumi Izumi's periodical blog",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.pubDate).toISOString(),
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    })),
    customData: `<language>en-us</language>`,
  });
}
