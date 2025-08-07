import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/twang.ai' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/twang.ai' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
