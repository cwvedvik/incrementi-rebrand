import Link from "next/link";
import Experience from "@/components/chat/Experience";
import { CASES } from "@/lib/cases";
import { PAGE_NAV } from "@/lib/nav";
import { getRequestLocale } from "@/lib/i18n/server";
import { localePath } from "@/lib/i18n/config";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default async function Page() {
  const locale = await getRequestLocale();

  return (
    <>
      <Experience />

      <nav className="seo-content" aria-label="Site pages">
        <h1>
          {locale === "no"
            ? "Incrementi — AI-transformasjonspartner"
            : "Incrementi — The AI transformation partner"}
        </h1>
        <p>
          {locale === "no"
            ? "Hele reisen til AI-native. Vi bygger motoren din — dataplattform, operativsystem, AI i din kontekst — og du beholder nøklene. Én partner, steg for steg. A 99x company."
            : "The whole journey to AI-native. We build your engine — data foundation, operating system, AI in your context — and you keep the keys. One partner, increment by increment. A 99x company."}
        </p>
        <ul>
          {PAGE_NAV.map((item) => (
            <li key={item.href}>
              <Link href={localePath(item.href, locale)}>
                {t(ui.nav[item.key], locale)}
              </Link>
            </li>
          ))}
          <li>
            <Link href={localePath("/start", locale)}>
              {t(ui.nav.start, locale)}
            </Link>
          </li>
          {CASES.map((c) => (
            <li key={c.slug}>
              <Link href={localePath(`/results/${c.slug}`, locale)}>
                {locale === "no" ? "Case" : "Case study"}: {c.client} —{" "}
                {c.title[locale]}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
