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
            ? "Incrementi — Fra data-kaos til målbar produktivitet"
            : "Incrementi — From data chaos to measurable productivity"}
        </h1>
        <p>
          {locale === "no"
            ? "Vi samler fragmenterte systemer i en felles dataplattform og et styrt kontekstlag. Da blir AI trygg og nyttig — og gevinstene lander i produktivitet, inntjening per ansatt og EBITDA. Dere beholder nøklene. A 99x company."
            : "We bring fragmented systems into a shared data platform and a governed context layer. Then AI becomes safe and useful — and the gains land in productivity, earnings per employee, and EBITDA. You keep the keys. A 99x company."}
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
