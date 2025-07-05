import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep existing ESLint/TypeScript settings
  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['app', 'components', 'pages'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Force static export ALWAYS (remove conditional)
  output: 'export', // ← Critical change

  // Disable source maps in production (optional)
  productionBrowserSourceMaps: false,

  reactStrictMode: true,

  // Required for static exports
  images: {
    unoptimized: true, // Disables Image Optimization API (not available in static exports)
  },

  // Optional: Add basePath if using GitHub Pages subpath (e.g., /repo-name)
  // basePath: '/repo-name',
};

export default nextConfig;