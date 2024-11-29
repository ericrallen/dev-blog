import { MetadataRoute } from "next";

import { getAllPosts, getPagePosts, getTotalPages } from "@/lib/api";
import { BASE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: BASE_URL,
    lastModified: new Date().toString(),
  };

  const posts = getAllPosts();

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
      url: `${BASE_URL}/posts/${post.slug}`,
      lastModified: new Date(post.date).toString(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  });

  Array.from({ length: getTotalPages() }, (_, i) => i)
    .filter((i) => i !== 0)
    .forEach((i) => {
      const posts = getPagePosts(i);

      routes.push({
        url: `${BASE_URL}/page/${i}`,
        lastModified: new Date(posts[0].date).toString(),
        changeFrequency: "weekly",
        priority: 0.5,
      });
    });

  return routes;
}
