/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
