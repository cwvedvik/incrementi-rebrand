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
      ? "Incrementi — Fra data-kaos til målbar produktivitet"
      : "Incrementi — From data chaos to measurable productivity",
    description: isNo
      ? "Vi samler fragmenterte systemer i en felles dataplattform og et styrt kontekstlag. Da blir AI trygg og nyttig — og gevinstene lander i produktivitet, inntjening per ansatt og EBITDA. Dere beholder nøklene. A 99x company."
      : "We bring fragmented systems into a shared data platform and a governed context layer. Then AI becomes safe and useful — and the gains land in productivity, earnings per employee, and EBITDA. You keep the keys. A 99x company.",
    keywords: [
      "dataplattform",
      "virksomhetsarkitektur",
      "kontekstlag",
      "AI transformasjon",
      "Microsoft Fabric",
      "gevinstrealisering",
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
        ? "Incrementi — Fra data-kaos til målbar produktivitet"
        : "Incrementi — From data chaos to measurable productivity",
      description: isNo
        ? "Felles dataplattform og styrt kontekstlag — slik at AI betaler seg i produktivitet og EBITDA."
        : "Shared data platform and governed context layer — so AI pays off in productivity and EBITDA.",
      url: isNo ? "https://incrementi.no" : "https://incrementi.no/en",
      siteName: "Incrementi",
      locale: isNo ? "nb_NO" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isNo
        ? "Incrementi — Fra data-kaos til målbar produktivitet"
        : "Incrementi — From data chaos to measurable productivity",
      description: isNo
        ? "Felles dataplattform og styrt kontekstlag — slik at AI betaler seg i produktivitet og EBITDA."
        : "Shared data platform and governed context layer — so AI pays off in productivity and EBITDA.",
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
