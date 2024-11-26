/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: "/",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
