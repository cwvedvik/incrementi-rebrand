import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/work", destination: "/results", permanent: true },
      { source: "/work/:slug", destination: "/results/:slug", permanent: true },
      { source: "/en/work", destination: "/en/results", permanent: true },
      {
        source: "/en/work/:slug",
        destination: "/en/results/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
