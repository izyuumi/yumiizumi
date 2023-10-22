import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function get(context: APIContext) {
  const posts = await getCollection("blog");
  const dictionary: { [key: string]: string } = {};
  posts.forEach((post) => {
    dictionary[post.slug] = post.data.blogShort ?? post.slug;
  });

  return new Response(JSON.stringify(dictionary), {
    headers: {
      "content-type": "application/json",
    },
  });
}
