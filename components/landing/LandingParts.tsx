"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import HubSpotForm from "@/components/sections/HubSpotForm";
import { TrustBar } from "@/components/trust/TrustBadges";
import { CLIENTS } from "@/lib/clients";
import { home } from "@/lib/content/home";
import { PEOPLE } from "@/lib/people";

/** Kampanjesidene deler rullemodus med markedsføringsforsiden. */
export function useMarketingMode() {
  useEffect(() => {
    document.body.dataset.mode = "marketing";
    return () => {
      delete document.body.dataset.mode;
    };
  }, []);
}

export function LandingTop({ ctaShort }: { ctaShort: string }) {
  return (
    <header className="lp-top">
      <Link href="/" className="lp-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/incrementi-logo-ink.png" alt="Incrementi" />
      </Link>
      <a className="lp-top-cta" href="#kontakt">
        {ctaShort}
      </a>
    </header>
  );
}

export function LandingCta({ label, note }: { label: string; note: string }) {
  return (
    <div className="lp-cta">
      <a className="lp-btn" href="#kontakt">
        {label}
      </a>
      <p className="lp-cta-note">{note}</p>
    </div>
  );
}

export function LandingLogos({ label }: { label: string }) {
  return (
    <section className="lp-logos" aria-label={label}>
      <div className="lp-logo-row">
        {CLIENTS.map((c) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={c.name} src={c.logoSrc} alt={c.name} />
        ))}
      </div>
    </section>
  );
}

export function LandingContact({
  title,
  lead,
  personIntro,
  personSlug,
}: {
  title: string;
  lead: string;
  personIntro: string;
  personSlug: string;
}) {
  const person = PEOPLE.find((p) => p.slug === personSlug);
  return (
    <section className="lp-contact" id="kontakt">
      <div className="lp-col">
        <h2>{title}</h2>
        <p className="lp-lead">{lead}</p>
        <div className="lp-form">
          <HubSpotForm />
        </div>
        {person ? (
          <div className="lp-person">
            {person.photo ? (
              <Image src={person.photo} alt={person.name} width={64} height={64} />
            ) : null}
            <p>
              {personIntro} <strong>{person.name}</strong>, {person.role.no}
              <br />
              {person.phone ? (
                <a href={`tel:${person.phone.replace(/\s/g, "")}`}>{person.phone}</a>
              ) : null}
              {person.phone && person.email ? " · " : null}
              {person.email ? <a href={`mailto:${person.email}`}>{person.email}</a> : null}
            </p>
          </div>
        ) : null}
        <TrustBar className="lp-trust" />
      </div>
    </section>
  );
}

export function LandingFooter() {
  return (
    <footer className="lp-footer">
      {home.footer.legalName.no} · {home.footer.orgNr.no} · {home.footer.address.no}
    </footer>
  );
}
