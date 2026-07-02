import type { Metadata } from "next";
import PageShell from "@/components/sections/PageShell";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Start — book an AI & data strategy session — Incrementi",
  description:
    "Start with an AI & data strategy session: one week of Direction — low risk, high clarity. You leave with a plan the whole journey steers by, whether or not we work together.",
};

export default function StartPage() {
  return (
    <PageShell experienceTopic="start">
      <div className="eyebrow-sm">Start</div>
      <h1 className="page-title">
        Book an AI &amp; data strategy session.
      </h1>
      {TOPICS.start.render()}
    </PageShell>
  );
}
