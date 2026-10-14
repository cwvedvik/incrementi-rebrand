import type { MetadataRoute } from "next";
import { PEOPLE, personPath } from "@/lib/people";

const BASE = "https://incrementi.no";

/** Only public routes while /platform and /results are soft-hidden. */
const ROUTES = ["", ...PEOPLE.map((p) => personPath(p.slug))];

/** Campaign pages that exist in Norwegian only. */
const NO_ONLY_ROUTES = ["/ai-kontroll"];

export default function sitemap(): MetadataRoute.Sitemap {
  const noOnly: MetadataRoute.Sitemap = NO_ONLY_ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
  }));
  return [...noOnly, ...localized()];
}

function localized(): MetadataRoute.Sitemap {
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
