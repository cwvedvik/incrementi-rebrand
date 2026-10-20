import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PrivacyPageClient from "@/components/pages/PrivacyPageClient";
import { PRIVACY_PATHS, privacy } from "@/lib/content/privacy";
import { getRequestLocale } from "@/lib/i18n/server";

const BASE = "https://incrementi.no";
const doc = privacy.no;

export const metadata: Metadata = {
  title: doc.meta.title,
  description: doc.meta.description,
  alternates: {
    canonical: `${BASE}${PRIVACY_PATHS.no}`,
    languages: {
      nb: `${BASE}${PRIVACY_PATHS.no}`,
      en: `${BASE}${PRIVACY_PATHS.en}`,
    },
  },
  openGraph: {
    title: doc.meta.title,
    description: doc.meta.description,
    url: `${BASE}${PRIVACY_PATHS.no}`,
    siteName: "Incrementi",
    locale: "nb_NO",
    type: "website",
  },
};

export default async function PersonvernPage() {
  // /en/personvern lander her via middleware-rewrite.
  if ((await getRequestLocale()) === "en") redirect(PRIVACY_PATHS.en);
  return <PrivacyPageClient />;
}
