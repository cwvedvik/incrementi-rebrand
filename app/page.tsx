import Link from "next/link";
import Experience from "@/components/chat/Experience";
import { CASES } from "@/lib/cases";
import { PAGE_NAV } from "@/components/sections/PageShell";

export default function Page() {
  return (
    <>
      <Experience />

      {/*
        Visually hidden, crawlable index of the real pages behind the
        experience. The full content lives on those routes; this keeps the
        homepage focused while search engines (and screen-reader users
        skipping the experience) can reach everything.
      */}
      <nav className="seo-content" aria-label="Site pages">
        <h1>Incrementi — The AI transformation partner</h1>
        <p>
          The whole journey to AI-native. We build your engine — data
          foundation, operating system, AI in your context — and you keep the
          keys. One partner, increment by increment. A 99x company.
        </p>
        <ul>
          {PAGE_NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/start">Book an AI &amp; data strategy session</Link>
          </li>
          {CASES.map((c) => (
            <li key={c.slug}>
              <Link href={`/work/${c.slug}`}>
                Case study: {c.client} — {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
