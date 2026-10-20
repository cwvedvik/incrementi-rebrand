"use client";

import { Fragment, type ReactNode } from "react";
import PageShell from "@/components/sections/PageShell";
import { openCookieSettings } from "@/lib/analytics";
import { privacy, type PrivacyBlock } from "@/lib/content/privacy";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

const INLINE = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;

function rich(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(INLINE)) {
    const at = m.index ?? 0;
    if (at > last) out.push(text.slice(last, at));
    if (m[1] !== undefined) {
      out.push(<strong key={at}>{m[1]}</strong>);
    } else {
      const href = m[3];
      const external = /^https?:/.test(href);
      out.push(
        <a
          key={at}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {m[2]}
        </a>,
      );
    }
    last = at + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Block({ block }: { block: PrivacyBlock }) {
  switch (block.type) {
    case "p":
      return <p>{rich(block.text)}</p>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "list":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{rich(item)}</li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="pv-table-wrap">
          <table
            className={`pv-table${block.head.length > 3 ? " pv-table-dense" : ""}`}
          >
            {block.caption && <caption>{block.caption}</caption>}
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c} data-label={block.head[c]}>
                      {rich(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function PrivacyPageClient() {
  const { locale } = useLocale();
  const doc = privacy[locale];
  const cookieSection = locale === "no" ? "informasjonskapsler" : "cookies";

  return (
    <PageShell wide cta={false}>
      <header className="pv-hero">
        <p className="eyebrow-sm">{doc.eyebrow}</p>
        <h1 className="mkt-sub-title">{doc.title}</h1>
        <p className="mkt-sub-lead">{doc.lead}</p>
        <p className="pv-updated">
          {doc.updatedLabel}{" "}
          <time dateTime={doc.updatedIso}>{doc.updated}</time>
        </p>
        {doc.languageNote && <p className="pv-lang-note">{doc.languageNote}</p>}
      </header>

      <div className="pv-layout">
        <nav className="pv-toc" aria-labelledby="pv-toc-label">
          <p className="pv-toc-label" id="pv-toc-label">
            {doc.tocLabel}
          </p>
          <ol>
            {doc.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="pv-body">
          <section className="pv-summary" aria-labelledby="pv-summary-title">
            <h2 id="pv-summary-title">{doc.summaryTitle}</h2>
            <ul>
              {doc.summary.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          {doc.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="pv-section"
              aria-labelledby={`${section.id}-title`}
            >
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.blocks.map((block, i) => (
                <Fragment key={i}>
                  <Block block={block} />
                  {section.id === cookieSection && i === 1 && (
                    <p className="pv-consent">
                      <span>{doc.cookieButtonLead}</span>
                      <button
                        type="button"
                        className="mkt-btn mkt-btn-primary"
                        onClick={openCookieSettings}
                      >
                        {t(ui.cookieSettings, locale)}
                      </button>
                    </p>
                  )}
                </Fragment>
              ))}
            </section>
          ))}
        </article>
      </div>
    </PageShell>
  );
}
