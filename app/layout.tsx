import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://incrementi.no"),
  title: "Incrementi — The AI transformation partner",
  description:
    "The whole journey to AI-native. We build your engine — data foundation, operating system, AI in your context — and you keep the keys. One partner, increment by increment. A 99x company.",
  keywords: [
    "AI transformation",
    "AI-native",
    "data platform",
    "Microsoft Fabric",
    "AI consultancy Norway",
    "Incrementi",
  ],
  openGraph: {
    title: "Incrementi — The AI transformation partner",
    description:
      "The whole journey to AI-native. We build your engine — and you keep the keys. Increment by increment.",
    url: "https://incrementi.no",
    siteName: "Incrementi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Incrementi — The AI transformation partner",
    description:
      "The whole journey to AI-native. We build your engine — and you keep the keys. Increment by increment.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
