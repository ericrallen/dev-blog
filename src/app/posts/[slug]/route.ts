import { permanentRedirect } from "next/navigation";

import { getAllPosts } from "@/lib/api";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: unknown, { params }: Params) {
  const slug = (await params).slug;

  permanentRedirect(`/blog/post/${slug}`);
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamic = "force-static";
