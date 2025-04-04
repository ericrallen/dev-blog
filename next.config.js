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
};

export default nextConfig;
