import type { Metadata } from "next";
import PageShell from "@/components/sections/PageShell";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "What we build — Incrementi",
  description:
    "Four layers that stack into a firm that runs on its own data: data & integration platform, the operating system, AI context & control layer, agent enablement — plus product management and development consulting.",
};

export default function WhatWeBuildPage() {
  return (
    <PageShell experienceTopic="build">
      <div className="eyebrow-sm">What we build</div>
      <h1 className="page-title">
        Four layers that stack into a firm that runs on its own data.
      </h1>
      {TOPICS.build.render()}
    </PageShell>
  );
}
