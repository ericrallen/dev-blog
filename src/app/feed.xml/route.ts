import { Feed, type Item } from "feed";
import { getAllPosts } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";
import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  const posts = await getAllPosts();

  const feed = new Feed({
    title: "Interweb Alchemy",
    description: "Transmuting the Web",
    id: BASE_URL,
    link: BASE_URL,
    language: "en",
    favicon: `${BASE_URL}/favicon.ico`,
    copyright: `MIT / CC BY-NC 4.0 (https://github.com/ericrallen/dev-blog/blob/main/LICENSE)`,
    author: {
      name: "Eric Allen",
      email: "eric@ericrallen.dev",
      link: BASE_URL,
    },
    updated: new Date(),
  });

  posts.forEach((post) => {
    const item: Item = {
      title: post.title,
      id: `${BASE_URL}/posts/${post.slug}`,
      link: `${BASE_URL}/posts/${post.slug}`,
      description: post.excerpt,
      content: post.content,
      date: new Date(post.date),
      author: [
        {
          name: post.author.name,
        },
      ],
    };

    if (post.coverImage) {
      item.image = `${BASE_URL}${post.coverImage}`;
    }

    feed.addItem(item);
  });

  return new NextResponse(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
