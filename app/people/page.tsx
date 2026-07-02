import type { Metadata } from "next";
import PageShell from "@/components/sections/PageShell";
import { TOPICS } from "@/lib/topics";

export const metadata: Metadata = {
  title: "People — Incrementi",
  description:
    "Senior partners lead every engagement, 99X's 650+ specialists scale it. Meet the partners, advisors and consultants who own your journey personally.",
};

export default function PeoplePage() {
  return (
    <PageShell experienceTopic="people">
      <div className="eyebrow-sm">People</div>
      <h1 className="page-title">Who you&apos;ll actually work with.</h1>
      {TOPICS.people.render()}
    </PageShell>
  );
}
