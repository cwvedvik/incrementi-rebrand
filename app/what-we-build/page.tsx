import type { Metadata } from "next";
import BuildPageClient from "@/components/pages/BuildPageClient";

export const metadata: Metadata = {
  title: "Hva vi bygger — Incrementi",
  description:
    "Fire lag: datagrunnlag, operativsystem, AI-kontekstlag og agent-kapabilitet — fra data-kaos til AI som jobber for driften.",
};

export default function WhatWeBuildPage() {
  return <BuildPageClient />;
}
