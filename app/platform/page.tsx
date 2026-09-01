import type { Metadata } from "next";
import DiagramPageClient from "@/components/pages/DiagramPageClient";

export const metadata: Metadata = {
  title: "Kontrollag | Incrementi",
  description:
    "Et kontekst- og kontrollag som gjør hele virksomheten klar for AI: roller, rettigheter, sporbarhet og kostnadskontroll.",
  alternates: {
    languages: {
      no: "/platform",
      en: "/en/platform",
    },
  },
};

export default function PlatformPage() {
  return <DiagramPageClient />;
}
