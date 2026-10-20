import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PrivacyPageClient from "@/components/pages/PrivacyPageClient";
import { PRIVACY_PATHS, privacy } from "@/lib/content/privacy";
import { getRequestLocale } from "@/lib/i18n/server";

const BASE = "https://incrementi.no";
const doc = privacy.en;

export const metadata: Metadata = {
  title: doc.meta.title,
  description: doc.meta.description,
  alternates: {
    canonical: `${BASE}${PRIVACY_PATHS.en}`,
    languages: {
      nb: `${BASE}${PRIVACY_PATHS.no}`,
      en: `${BASE}${PRIVACY_PATHS.en}`,
    },
  },
  openGraph: {
    title: doc.meta.title,
    description: doc.meta.description,
    url: `${BASE}${PRIVACY_PATHS.en}`,
    siteName: "Incrementi",
    locale: "en_US",
    type: "website",
  },
};

export default async function PrivacyPolicyPage() {
  // The English page is served at /en/privacy-policy; the bare path is Norwegian.
  if ((await getRequestLocale()) === "no") redirect(PRIVACY_PATHS.no);
  return <PrivacyPageClient />;
}
