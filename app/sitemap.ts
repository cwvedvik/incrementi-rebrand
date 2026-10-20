import type { MetadataRoute } from "next";
import { PEOPLE, personPath } from "@/lib/people";
import { PRIVACY_PATHS, privacy } from "@/lib/content/privacy";

const BASE = "https://incrementi.no";

/** Only public routes while /platform and /results are soft-hidden. */
const ROUTES = ["", ...PEOPLE.map((p) => personPath(p.slug))];

/** Campaign pages that exist in Norwegian only. */
const NO_ONLY_ROUTES = ["/ai-kontroll", "/radgivning"];

export default function sitemap(): MetadataRoute.Sitemap {
  const noOnly: MetadataRoute.Sitemap = NO_ONLY_ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
  }));
  return [...noOnly, ...localized(), ...privacyPages()];
}

function privacyPages(): MetadataRoute.Sitemap {
  const languages = {
    nb: `${BASE}${PRIVACY_PATHS.no}`,
    en: `${BASE}${PRIVACY_PATHS.en}`,
  };
  const lastModified = new Date(privacy.no.updatedIso);
  return [
    { url: languages.nb, lastModified, alternates: { languages } },
    { url: languages.en, lastModified, alternates: { languages } },
  ];
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
