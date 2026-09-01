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
      { source: "/people", destination: "/?s=om-oss", permanent: false },
      { source: "/en/people", destination: "/en?s=om-oss", permanent: false },
      {
        source: "/journey",
        destination: "/?s=slik-jobber-vi",
        permanent: false,
      },
      {
        source: "/en/journey",
        destination: "/en?s=slik-jobber-vi",
        permanent: false,
      },
      {
        source: "/what-we-build",
        destination: "/?s=hva-vi-leverer",
        permanent: false,
      },
      {
        source: "/en/what-we-build",
        destination: "/en?s=hva-vi-leverer",
        permanent: false,
      },
      { source: "/about", destination: "/?s=om-oss", permanent: false },
      { source: "/en/about", destination: "/en?s=om-oss", permanent: false },
      {
        source: "/industries",
        destination: "/?s=bransjer",
        permanent: false,
      },
      {
        source: "/en/industries",
        destination: "/en?s=bransjer",
        permanent: false,
      },
      { source: "/start", destination: "/?s=kontakt", permanent: false },
      { source: "/en/start", destination: "/en?s=kontakt", permanent: false },
    ];
  },
};

export default nextConfig;
