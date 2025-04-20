import { MetadataRoute } from "next";

import { getAllPosts, getPagePosts, getTotalPages } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const home = {
    url: BASE_URL,
    lastModified: new Date().toString(),
  };

  const posts = await getAllPosts();

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date().toString(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  posts.forEach((post) => {
    routes.push({
      url: `${BASE_URL}/blog/post/${post.slug}`,
      lastModified: new Date(post.date).toString(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  const postPages = Array.from(
    { length: await getTotalPages() },
    (_, i) => i
  ).filter((i) => i !== 0);

  for (const pageNumber of postPages) {
    const posts = await getPagePosts(pageNumber);

    routes.push({
      url: `${BASE_URL}/blog/page/${pageNumber}`,
      lastModified: new Date(posts[0].date).toString(),
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  return routes;
}
