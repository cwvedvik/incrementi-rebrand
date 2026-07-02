import type { Metadata } from "next";
import PageShell from "@/components/sections/PageShell";
import LogoStrip from "@/components/sections/LogoStrip";
import CaseCards from "@/components/sections/CaseCards";

export const metadata: Metadata = {
  title: "Work & client cases — Incrementi",
  description:
    "Result-oriented client cases from maritime, industrial and professional-services firms: hours saved, costs halved, platforms in production. The numbers do the persuading.",
};

export default function WorkPage() {
  return (
    <PageShell experienceTopic="proof">
      <div className="eyebrow-sm">Work</div>
      <h1 className="page-title">The numbers do the persuading.</h1>
      <p className="page-intro">
        Cases from operations-heavy firms across the Nordics — every one
        result-oriented, in hours or money. The brand stays understated.
      </p>
      <LogoStrip dense />
      <CaseCards />
    </PageShell>
  );
}
