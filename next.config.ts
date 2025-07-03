import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false, 
    dirs: ['app', 'components', 'pages'],
  },
  typescript: {
    ignoreBuildErrors: false, 
  },

  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,

  productionBrowserSourceMaps: true,

  reactStrictMode: true,

  images: {
    unoptimized: true,
  }
};

export default nextConfig;