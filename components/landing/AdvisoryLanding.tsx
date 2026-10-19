"use client";

import { MotionConfig } from "framer-motion";
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
import DirectionPath from "@/components/landing/advisory/DirectionPath";
import LeadershipTable from "@/components/landing/advisory/LeadershipTable";
import PriorityMatrix from "@/components/landing/advisory/PriorityMatrix";
import StandardShift from "@/components/landing/advisory/StandardShift";
import { advisory } from "@/lib/content/advisory";

export default function AdvisoryLanding() {
  const { hero, meeting, choices, photo, together, contact } = advisory;
  useMarketingMode();

  const cta = <LandingCta label={advisory.cta} note={advisory.ctaNote} />;

  return (
    <MotionConfig reducedMotion="user">
      <div className="mkt lp lp-advisory">
        <LandingTop ctaShort={advisory.ctaShort} />

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
              <HeroVideo video={advisory.video} />
            </div>
            <div className="lp-col">{cta}</div>
          </section>

          <LandingLogos label={advisory.logosLabel} />

          <article className="lp-letter lp-col">
            <section>
              <h2>{meeting.title}</h2>
              {meeting.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <LeadershipTable />
              <p className="lp-emphasis">{meeting.emphasis}</p>
            </section>

            <section>
              <h2>{choices.title}</h2>
              <p>{choices.pace}</p>
              <StandardShift />
              <p>{choices.horizon}</p>
              <DirectionPath />
              <p className="lp-emphasis">{choices.emphasis}</p>
            </section>

            <Image
              src={photo.src}
              alt={photo.alt}
              width={1024}
              height={683}
              sizes="(max-width: 760px) 100vw, 720px"
              className="lp-photo"
            />

            <section>
              <h2>{together.title}</h2>
              {together.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <PriorityMatrix />
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
    </MotionConfig>
  );
}
