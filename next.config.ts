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
      { source: "/diagram", destination: "/platform", permanent: true },
      { source: "/en/diagram", destination: "/en/platform", permanent: true },
      { source: "/people", destination: "/about", permanent: true },
      { source: "/en/people", destination: "/en/about", permanent: true },
      { source: "/journey", destination: "/about", permanent: true },
      { source: "/en/journey", destination: "/en/about", permanent: true },
    ];
  },
};

export default nextConfig;
