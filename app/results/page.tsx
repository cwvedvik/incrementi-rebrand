import type { Metadata } from "next";
import ResultsPageClient from "@/components/pages/ResultsPageClient";

export const metadata: Metadata = {
  title: "Resultater | Incrementi",
  description:
    "Utvalgte referanser med målbare resultater. Hver case åpner hele historien.",
  alternates: {
    languages: {
      no: "/results",
      en: "/en/results",
    },
  },
};

export default function ResultsPage() {
  return <ResultsPageClient />;
}
