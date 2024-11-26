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
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();

  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPagePosts(pageNumber = 0): Post[] {
  const allPosts = getAllPosts();

  const pagePosts = allPosts.slice(pageNumber * POSTS_PER_PAGE, (pageNumber + 1) * POSTS_PER_PAGE);

  return pagePosts;
}

export function getTotalPosts(): number {
  return getAllPosts().length;
}

export function getTotalPages(): number {
  return Math.ceil(getTotalPosts() / POSTS_PER_PAGE);
}
