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
      ? "Incrementi — AI-transformasjonspartner"
      : "Incrementi — The AI transformation partner",
    description: isNo
      ? "Hele reisen til AI-native. Vi bygger motoren din — dataplattform, operativsystem, AI i din kontekst — og du beholder nøklene. Én partner, steg for steg. A 99x company."
      : "The whole journey to AI-native. We build your engine — data foundation, operating system, AI in your context — and you keep the keys. One partner, increment by increment. A 99x company.",
    keywords: [
      "AI transformation",
      "AI-native",
      "dataplattform",
      "Microsoft Fabric",
      "AI rådgivning Norge",
      "Incrementi",
    ],
    alternates: {
      languages: {
        nb: "https://incrementi.no",
        en: "https://incrementi.no/en",
      },
    },
    openGraph: {
      title: isNo
        ? "Incrementi — AI-transformasjonspartner"
        : "Incrementi — The AI transformation partner",
      description: isNo
        ? "Hele reisen til AI-native. Vi bygger motoren — og du beholder nøklene."
        : "The whole journey to AI-native. We build your engine — and you keep the keys.",
      url: isNo ? "https://incrementi.no" : "https://incrementi.no/en",
      siteName: "Incrementi",
      locale: isNo ? "nb_NO" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isNo
        ? "Incrementi — AI-transformasjonspartner"
        : "Incrementi — The AI transformation partner",
      description: isNo
        ? "Hele reisen til AI-native. Vi bygger motoren — og du beholder nøklene."
        : "The whole journey to AI-native. We build your engine — and you keep the keys.",
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
