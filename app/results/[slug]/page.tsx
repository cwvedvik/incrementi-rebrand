import type { Metadata } from "next";
import { CASES, getCase, localizeCase } from "@/lib/cases";
import { getRequestLocale } from "@/lib/i18n/server";
import CasePageClient from "@/components/pages/CasePageClient";

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
  const locale = await getRequestLocale();
  const loc = localizeCase(cs, locale);
  return {
    title: `${loc.client}: ${loc.title} — Incrementi`,
    description: loc.summary,
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CasePageClient slug={slug} />;
}
