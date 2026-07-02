import type { MetadataRoute } from "next";
import { CASES } from "@/lib/cases";

const BASE = "https://incrementi.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/journey",
    "/what-we-build",
    "/industries",
    "/work",
    "/people",
    "/about",
    "/start",
    ...CASES.map((c) => `/work/${c.slug}`),
  ];
  return pages.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/work/") ? 0.7 : 0.8,
  }));
}
