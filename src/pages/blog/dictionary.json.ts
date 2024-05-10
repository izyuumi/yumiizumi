import type { APIContext } from "astro";
import { publicBlogs as posts } from "@/utils";

export async function GET(context: APIContext) {
  const dictionary: { [key: string]: string } = {};
  posts.forEach((post) => {
    dictionary[post.data.blogShort ?? post.slug] = post.slug;
  });

  return new Response(JSON.stringify(dictionary), {
    headers: {
      "content-type": "application/json",
    },
  });
}
