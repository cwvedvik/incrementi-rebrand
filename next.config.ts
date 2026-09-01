import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      { source: "/work", destination: "/?s=referanser", permanent: false },
      { source: "/work/:slug", destination: "/?s=referanser", permanent: false },
      { source: "/en/work", destination: "/en?s=referanser", permanent: false },
      {
        source: "/en/work/:slug",
        destination: "/en?s=referanser",
        permanent: false,
      },
      {
        source: "/results",
        destination: "/?s=referanser",
        permanent: false,
      },
      {
        source: "/en/results",
        destination: "/en?s=referanser",
        permanent: false,
      },
      {
        source: "/results/:slug",
        destination: "/?s=referanser",
        permanent: false,
      },
      {
        source: "/en/results/:slug",
        destination: "/en?s=referanser",
        permanent: false,
      },
      {
        source: "/platform",
        destination: "/?s=hva-vi-leverer",
        permanent: false,
      },
      {
        source: "/en/platform",
        destination: "/en?s=hva-vi-leverer",
        permanent: false,
      },
      {
        source: "/diagram",
        destination: "/?s=hva-vi-leverer",
        permanent: false,
      },
      {
        source: "/en/diagram",
        destination: "/en?s=hva-vi-leverer",
        permanent: false,
      },
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
