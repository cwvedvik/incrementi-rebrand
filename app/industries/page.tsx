import type { Metadata } from "next";
import PageShell from "@/components/sections/PageShell";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "Industries — Incrementi",
  description:
    "Maritime & ocean, industrial, and financial & professional services — three sectors, one profile: firms that run on operations and can't afford to bet the company.",
};

export default function IndustriesPage() {
  return (
    <PageShell experienceTopic="industries">
      <div className="eyebrow-sm">Industries</div>
      <h1 className="page-title">Three sectors. One profile.</h1>
      {TOPICS.industries.render()}
    </PageShell>
  );
}
