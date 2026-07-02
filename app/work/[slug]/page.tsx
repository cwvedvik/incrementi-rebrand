import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/sections/PageShell";
import { CASES, getCase } from "@/lib/cases";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCase(slug);
  if (!cs) return {};
  return {
    title: `${cs.client}: ${cs.title} — Incrementi`,
    description: cs.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCase(slug);
  if (!cs) notFound();

  return (
    <PageShell experienceTopic="proof">
      <div className="eyebrow-sm">
        {cs.client} · {cs.sector}
      </div>
      <h1 className="page-title">{cs.title}</h1>
      <p className="page-intro">{cs.summary}</p>

      <div className="case-hero-metrics">
        {cs.metrics.map((m, i) => (
          <div className="m" key={i}>
            <div className="n">{m.value}</div>
            <div className="l">{m.label}</div>
          </div>
        ))}
      </div>

      <section className="case-section">
        <h2>The challenge</h2>
        <p>{cs.challenge}</p>
      </section>

      <section className="case-section">
        <h2>What we built</h2>
        <ul className="ai-points">
          {cs.built.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="case-section">
        <h2>The results</h2>
        <ul className="ai-points">
          {cs.results.map((r, i) => (
            <li key={i}>
              <b>{r}</b>
            </li>
          ))}
        </ul>
      </section>

      <section className="case-section">
        <h2>Where the compounding starts for you</h2>
        <p>
          Every case begins the same way: an AI &amp; data strategy session —
          one week of Direction, low risk, high clarity.{" "}
          <Link href="/start" style={{ color: "var(--copper)" }}>
            Book yours →
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
