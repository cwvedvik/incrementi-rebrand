"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import HubSpotForm from "@/components/sections/HubSpotForm";
import HeroVideo from "@/components/landing/HeroVideo";
import { TrustBar } from "@/components/trust/TrustBadges";
import { aiControl } from "@/lib/content/aiControl";
import { CLIENTS } from "@/lib/clients";
import { home } from "@/lib/content/home";
import { PEOPLE } from "@/lib/people";

const contactPerson = PEOPLE.find((p) => p.slug === "espen-slyngstad");

function Cta() {
  return (
    <div className="lp-cta">
      <a className="lp-btn" href="#kontakt">
        {aiControl.cta}
      </a>
      <p className="lp-cta-note">{aiControl.ctaNote}</p>
    </div>
  );
}

export default function AiControlLanding() {
  const { hero, sections, photo, solution, contact } = aiControl;

  useEffect(() => {
    document.body.dataset.mode = "marketing";
    return () => {
      delete document.body.dataset.mode;
    };
  }, []);

  return (
    <div className="mkt lp">
      <header className="lp-top">
        <Link href="/" className="lp-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/incrementi-logo-ink.png" alt="Incrementi" />
        </Link>
        <a className="lp-top-cta" href="#kontakt">
          {aiControl.ctaShort}
        </a>
      </header>

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
            <HeroVideo />
          </div>
          <div className="lp-col">
            <Cta />
          </div>
        </section>

        <section className="lp-logos" aria-label={aiControl.logosLabel}>
          <p>{aiControl.logosLabel}</p>
          <div className="lp-logo-row">
            {CLIENTS.map((c) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={c.name} src={c.logoSrc} alt={c.name} />
            ))}
          </div>
        </section>

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
            <Cta />
          </section>
        </article>

        <section className="lp-contact" id="kontakt">
          <div className="lp-col">
            <h2>{contact.title}</h2>
            <p className="lp-lead">{contact.lead}</p>
            <div className="lp-form">
              <HubSpotForm />
            </div>
            {contactPerson ? (
              <div className="lp-person">
                {contactPerson.photo ? (
                  <Image
                    src={contactPerson.photo}
                    alt={contactPerson.name}
                    width={64}
                    height={64}
                  />
                ) : null}
                <p>
                  {contact.personIntro} <strong>{contactPerson.name}</strong>,{" "}
                  {contactPerson.role.no}
                  <br />
                  {contactPerson.phone ? (
                    <a href={`tel:${contactPerson.phone.replace(/\s/g, "")}`}>
                      {contactPerson.phone}
                    </a>
                  ) : null}
                  {contactPerson.phone && contactPerson.email ? " · " : null}
                  {contactPerson.email ? (
                    <a href={`mailto:${contactPerson.email}`}>{contactPerson.email}</a>
                  ) : null}
                </p>
              </div>
            ) : null}
            <TrustBar className="lp-trust" />
          </div>
        </section>
      </main>

      <footer className="lp-footer">
        {home.footer.legalName.no} · {home.footer.orgNr.no} · {home.footer.address.no}
      </footer>
    </div>
  );
}
