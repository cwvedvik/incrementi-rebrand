import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    // brand-strategy.html is an internal handover document — reachable by
    // link, but kept out of search indexes
    rules: { userAgent: "*", allow: "/", disallow: "/brand-strategy.html" },
    sitemap: "https://incrementi.no/sitemap.xml",
  };
}
