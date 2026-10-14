import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AiControlLanding from "@/components/landing/AiControlLanding";
import { aiControl } from "@/lib/content/aiControl";
import { getRequestLocale } from "@/lib/i18n/server";

export const metadata: Metadata = {
  title: aiControl.meta.title,
  description: aiControl.meta.description,
  alternates: { canonical: "/ai-kontroll" },
  openGraph: {
    title: aiControl.meta.title,
    description: aiControl.meta.description,
    url: "https://incrementi.no/ai-kontroll",
    siteName: "Incrementi",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: aiControl.meta.title,
    description: aiControl.meta.description,
  },
};

export default async function AiControlPage() {
  // Kampanjen finnes bare på norsk. /en/ai-kontroll ville ellers gitt norsk
  // innhold med lang="en" og engelske tillitsmerker.
  if ((await getRequestLocale()) === "en") redirect("/ai-kontroll");
  return <AiControlLanding />;
}
