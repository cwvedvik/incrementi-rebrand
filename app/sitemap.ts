import type { MetadataRoute } from "next";
import { CASES } from "@/lib/cases";

const BASE = "https://incrementi.no";

const ROUTES = [
  "",
  "/platform",
  "/what-we-build",
  "/industries",
  "/results",
  "/about",
  "/start",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ROUTES.flatMap((route) => {
    const path = route || "/";
    return [
      {
        url: `${BASE}${path === "/" ? "" : path}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            nb: `${BASE}${path === "/" ? "" : path}`,
            en: `${BASE}/en${path === "/" ? "" : path}`,
          },
        },
      },
      {
        url: `${BASE}/en${path === "/" ? "" : path}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            nb: `${BASE}${path === "/" ? "" : path}`,
            en: `${BASE}/en${path === "/" ? "" : path}`,
          },
        },
      },
    ];
  });

  const cases = CASES.flatMap((c) => [
    {
      url: `${BASE}/results/${c.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          nb: `${BASE}/results/${c.slug}`,
          en: `${BASE}/en/results/${c.slug}`,
        },
      },
    },
    {
      url: `${BASE}/en/results/${c.slug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          nb: `${BASE}/results/${c.slug}`,
          en: `${BASE}/en/results/${c.slug}`,
        },
      },
    },
  ]);

  return [...pages, ...cases];
}
