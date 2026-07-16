import type { Metadata } from "next";
import BuildPageClient from "@/components/pages/BuildPageClient";

export const metadata: Metadata = {
  title: "Hva vi bygger — Incrementi",
  description:
    "Datagrunnlag, operativsystem, AI-kontekstlag og agent-kapabilitet — pluss produktledelse ved siden av reisen.",
};

export default function WhatWeBuildPage() {
  return <BuildPageClient />;
}
