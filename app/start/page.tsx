import type { Metadata } from "next";
import StartPageClient from "@/components/pages/StartPageClient";

export const metadata: Metadata = {
  title: "Strategisesjon — Incrementi",
  description:
    "Book en AI- og datastrategisesjon. Én uke med Retning — lav risiko, høy klarhet.",
};

export default function StartPage() {
  return <StartPageClient />;
}
