import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import { Post } from "@/interfaces/post";
import { POSTS_PER_PAGE } from "@/lib/constants";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.mdx?$/, "");
  let isMdx = true;

  // check for mdx vs md extension
  let fullPath = join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    fullPath = join(postsDirectory, `${realSlug}.md`);
    isMdx = false;
  }

  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content, isMdx } as Post;
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

export async function getFeaturedPosts(count = 1): Promise<Post[]> {
  const allPosts = await getAllPosts();

  const featuredPosts = allPosts
    .filter((post) => post.featured)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return featuredPosts.slice(0, count);
}
