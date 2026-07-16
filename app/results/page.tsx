import type { Metadata } from "next";
import ResultsPageClient from "@/components/pages/ResultsPageClient";

export const metadata: Metadata = {
  title: "Resultater — Incrementi",
  description:
    "Resultatorienterte case-studier — tall først. Fordelen som forsterker seg, dokumentert.",
};

export default function ResultsPage() {
  return <ResultsPageClient />;
}
