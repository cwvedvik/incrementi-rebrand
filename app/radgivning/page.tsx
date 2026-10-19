import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdvisoryLanding from "@/components/landing/AdvisoryLanding";
import { advisory } from "@/lib/content/advisory";
import { getRequestLocale } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: advisory.meta.title,
  description: advisory.meta.description,
  alternates: { canonical: "/radgivning" },
  openGraph: {
    title: advisory.meta.title,
    description: advisory.meta.description,
    url: "https://incrementi.no/radgivning",
    siteName: "Incrementi",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: advisory.meta.title,
    description: advisory.meta.description,
  },
};

export default async function AdvisoryPage() {
  // Kampanjen finnes bare på norsk, som /ai-kontroll.
  if ((await getRequestLocale()) === "en") redirect("/radgivning");
  return <AdvisoryLanding />;
}
