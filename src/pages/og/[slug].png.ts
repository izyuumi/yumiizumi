import type { APIContext } from "astro";
import { getCollection, getEntryBySlug } from "astro:content";
import { getOgImage } from "@/components/OgImage";

export async function getStaticPaths() {
	const posts = await getCollection("blog");
	return posts.map((post) => ({ params: { slug: post.slug } }));
}

export async function GET({ params }: APIContext) {
	const post = await getEntryBySlug("blog", params.slug!);
	const body = await getOgImage(post?.data.title ?? "Untitled");
	return new Response(body, {
		headers: {
			"content-type": "image/png",
		},
	});
}
