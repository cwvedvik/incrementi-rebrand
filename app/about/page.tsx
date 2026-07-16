import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "Om oss — Incrementi",
  description:
    "Incrementi er AI-transformasjonspartner: vi eier hele reisen til AI-native — så overleverer vi den. A 99x company.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
