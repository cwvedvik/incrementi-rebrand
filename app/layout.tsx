import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import { getRequestLocale } from "@/lib/i18n/server";
import { htmlLang } from "@/lib/i18n/config";
import { LocaleProvider } from "@/lib/i18n/locale";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-dm",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const isNo = locale === "no";
  return {
    metadataBase: new URL("https://incrementi.no"),
    title: isNo
      ? "Incrementi – Enklere hverdag fra fragmenterte data"
      : "Incrementi – A simpler workday from fragmented data",
    description: isNo
      ? "Vi samler og strukturerer data fra systemene dere allerede har, og bygger et fundament for innsikt og automatisering som gjør at dere jobber raskere og mer lønnsomt. A 99x company."
      : "We gather and structure data from the systems you already have, and build a foundation for insight and automation that helps you work faster and more profitably. A 99x company.",
    keywords: [
      "dataplattform",
      "rådgivning",
      "industri",
      "maritim",
      "bygg og anlegg",
      "AI",
      "Incrementi",
      "99X",
    ],
    alternates: {
      languages: {
        nb: "https://incrementi.no",
        en: "https://incrementi.no/en",
      },
    },
    openGraph: {
      title: isNo
        ? "Incrementi – Enklere hverdag fra fragmenterte data"
        : "Incrementi – A simpler workday from fragmented data",
      description: isNo
        ? "Fra fragmenterte data til målbar produktivitet – rådgivning, data, programvare og AI der det gir verdi."
        : "From fragmented data to measurable productivity – advisory, data, software and AI where it adds value.",
      url: isNo ? "https://incrementi.no" : "https://incrementi.no/en",
      siteName: "Incrementi",
      locale: isNo ? "nb_NO" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isNo
        ? "Incrementi – Enklere hverdag fra fragmenterte data"
        : "Incrementi – A simpler workday from fragmented data",
      description: isNo
        ? "Fra fragmenterte data til målbar produktivitet – rådgivning, data, programvare og AI der det gir verdi."
        : "From fragmented data to measurable productivity – advisory, data, software and AI where it adds value.",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getRequestLocale();
  return (
    <html lang={htmlLang(locale)} className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
