/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["next-mdx-remote"],
  redirects: [
    {
      source: "/posts/:slug",
      destination: "/blog/post/:slug",
      permanent: true,
    },
    {
      source: "/page/:slug",
      destination: "/blog/page/:slug",
      permanent: true,
    },
    {
      source: "/page/0/",
      destination: "/blog/",
      permanent: true,
    },
  ],
};

export default nextConfig;
