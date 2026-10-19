"use client";

import Image from "next/image";
import HeroVideo from "@/components/landing/HeroVideo";
import {
  LandingContact,
  LandingCta,
  LandingFooter,
  LandingLogos,
  LandingTop,
  useMarketingMode,
} from "@/components/landing/LandingParts";
import { aiControl } from "@/lib/content/aiControl";

export default function AiControlLanding() {
  const { hero, sections, photo, solution, contact } = aiControl;
  useMarketingMode();

  const cta = <LandingCta label={aiControl.cta} note={aiControl.ctaNote} />;

  return (
    <div className="mkt lp">
      <LandingTop ctaShort={aiControl.ctaShort} />

      <main>
        <section className="lp-hero">
          <div className="lp-col">
            <p className="lp-eyebrow">{hero.eyebrow}</p>
            <h1>
              {hero.title} <span>{hero.titleQuestion}</span>
            </h1>
            <p className="lp-lead">{hero.lead}</p>
          </div>
          <div className="lp-col-wide">
            <HeroVideo video={aiControl.video} />
          </div>
          <div className="lp-col">{cta}</div>
        </section>

        <LandingLogos label={aiControl.logosLabel} />

        <article className="lp-letter lp-col">
          {sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="lp-emphasis">{s.emphasis}</p>
            </section>
          ))}

          <Image
            src={photo.src}
            alt={photo.alt}
            width={1024}
            height={683}
            sizes="(max-width: 760px) 100vw, 720px"
            className="lp-photo"
          />

          <section>
            <h2>{solution.title}</h2>
            {solution.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p>{solution.listIntro}</p>
            <ul className="lp-list">
              {solution.list.map(([k, v]) => (
                <li key={k}>
                  <strong>{k}</strong> {v}
                </li>
              ))}
            </ul>
            {cta}
          </section>
        </article>

        <LandingContact
          title={contact.title}
          lead={contact.lead}
          personIntro={contact.personIntro}
          personSlug="espen-slyngstad"
        />
      </main>

      <LandingFooter />
    </div>
  );
}
