import type { Metadata } from "next";
import PageShell from "@/components/sections/PageShell";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "About — Incrementi",
  description:
    "Incrementi is the AI transformation partner: we own the whole journey to AI-native — then hand it over. Not a strategy house, not a vendor, not a dev shop. Part of 99X Group.",
};

export default function AboutPage() {
  return (
    <PageShell experienceTopic="why">
      <div className="eyebrow-sm">About Incrementi</div>
      <h1 className="page-title">The AI transformation partner.</h1>
      <p className="page-intro">
        We take operations-heavy firms the whole journey to AI-native — we
        build the engine, and you keep the keys. A 99x company.
      </p>
      {TOPICS.why.render()}
    </PageShell>
  );
}
