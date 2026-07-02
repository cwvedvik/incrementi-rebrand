import type { Metadata } from "next";
import PageShell from "@/components/sections/PageShell";
import BuildingBlocks from "@/components/sections/BuildingBlocks";

export const metadata: Metadata = {
  title: "The Journey — Incrementi",
  description:
    "One journey, six building blocks: Direction, prototype & scope, data foundation, the operating system, AI context & control, agent enablement. Every block stands on its own and compounds into the next.",
};

export default function JourneyPage() {
  return (
    <PageShell experienceTopic="journey">
      <div className="eyebrow-sm">The Incrementi Journey</div>
      <h1 className="page-title">How we take a firm to AI-native.</h1>
      <p className="page-intro">
        One journey, six building blocks. You control the priority and the
        pace — every block stands on its own and compounds into the next.
      </p>
      <BuildingBlocks />
    </PageShell>
  );
}
