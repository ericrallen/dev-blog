import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { Post } from "@/interfaces/post";
import { POSTS_PER_PAGE } from "@/lib/constants";
import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkVideo from "remark-video";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

import type { MDXRemoteProps } from "next-mdx-remote";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx?$/, "");

  // check for mdx vs md extension
  let fullPath = join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    fullPath = join(postsDirectory, `${realSlug}.md`);
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getPostContent(slug: string): Promise<MDXRemoteProps> {
  const post = await getPostBySlug(slug);

  return await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkGfm,
        remarkDirective,
        [remarkVideo, { publicDir: "./assets" }],
      ],
      rehypePlugins: [
        rehypeAutolinkHeadings,
        rehypeSlug,
        [rehypeShiki, { theme: "tokyo-night" }],
      ],
    },
    parseFrontmatter: true,
  });
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug))
  );

  // sort posts by date in descending order
  const sortedPosts = posts.sort((post1, post2) =>
    post1.date > post2.date ? -1 : 1
  );

  return sortedPosts;
}

export async function getPagePosts(pageNumber = 0): Promise<Post[]> {
  const allPosts = await getAllPosts();

  const pagePosts = allPosts.slice(
    pageNumber * POSTS_PER_PAGE,
    (pageNumber + 1) * POSTS_PER_PAGE
  );

  return pagePosts;
}

export async function getTotalPosts(): Promise<number> {
  return (await getAllPosts()).length;
}

export async function getTotalPages(): Promise<number> {
  return Math.ceil((await getTotalPosts()) / POSTS_PER_PAGE);
}
