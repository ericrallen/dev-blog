import { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllPosts, getPostBySlug, getPostContent } from "@/lib/api";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostHeader } from "@/app/_components/post-header";
import { PostBody } from "@/app/_components/post-body";
import { PostBodyMDX } from "@/app/_components/post-body-mdx";
import markdownToHtml from "@/lib/markdownToHtml";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  let content;

  if (post.isMdx) {
    content = post.content;
  } else {
    content = await markdownToHtml(post.content);
  }

  if (!post) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          {post.isMdx ? (
            <PostBodyMDX content={content} />
          ) : (
            <PostBody content={content} />
          )}
        </article>
      </Container>
    </main>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Interweb Alchemy`;

  return {
    title,
    openGraph: {
      title,
      images: [post?.ogImage?.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
