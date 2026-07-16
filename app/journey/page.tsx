import type { Metadata } from "next";
import JourneyPageClient from "@/components/pages/JourneyPageClient";

export const metadata: Metadata = {
  title: "Reisen — Incrementi",
  description:
    "Én reise, seks byggeklosser: Retning, prototype, datagrunnlag, operativsystem, AI-kontekst og agent-kapabilitet.",
};

export default function JourneyPage() {
  return <JourneyPageClient />;
}
