import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/developer-portfolio",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
