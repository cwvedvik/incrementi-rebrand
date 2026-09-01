import type { MetadataRoute } from "next";

const BASE = "https://incrementi.no";

/** Only public routes while /platform and /results are soft-hidden. */
const ROUTES = [""];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) => {
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
}
