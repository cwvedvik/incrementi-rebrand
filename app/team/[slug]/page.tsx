import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PersonPageClient from "@/components/pages/PersonPageClient";
import { PEOPLE, getPerson, personPath } from "@/lib/people";
import { getRequestLocale } from "@/lib/i18n/server";
import { localePath } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/types";

const BASE = "https://incrementi.no";

export function generateStaticParams() {
  return PEOPLE.map((p) => ({ slug: p.slug }));
}

function firstSentence(text: string): string {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) return {};
  const locale = await getRequestLocale();
  const path = personPath(slug);
  const title = `${person.name}, ${t(person.role, locale)} | Incrementi`;
  const description = firstSentence(t(person.bio, locale));
  const url = `${BASE}${localePath(path, locale)}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        nb: `${BASE}${path}`,
        en: `${BASE}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      type: "profile",
      images: person.fullPhoto ? [{ url: person.fullPhoto }] : undefined,
    },
  };
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getPerson(slug);
  if (!person) notFound();
  const locale = await getRequestLocale();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: t(person.role, locale),
    description: t(person.bio, locale),
    email: person.email ? `mailto:${person.email}` : undefined,
    telephone: person.phone,
    image: person.fullPhoto ? `${BASE}${person.fullPhoto}` : undefined,
    url: `${BASE}${localePath(personPath(slug), locale)}`,
    sameAs: person.linkedin ? [person.linkedin] : undefined,
    worksFor: {
      "@type": "Organization",
      name: "Incrementi",
      url: BASE,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PersonPageClient slug={slug} />
    </>
  );
}
