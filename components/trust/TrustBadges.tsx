"use client";

import { home } from "@/lib/content/home";
import { useLocale } from "@/lib/i18n/locale";
import { t } from "@/lib/i18n/types";

type Size = "sm" | "md";
type Certification = (typeof home.trust.certifications)[number];

function SealMark({ cert }: { cert: Certification }) {
  return (
    <svg
      className="trust-seal-mark"
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="trust-seal-ring" cx="32" cy="32" r="30.5" />
      <circle className="trust-seal-inner" cx="32" cy="32" r="26" />
      <circle className="trust-seal-dot" cx="7.5" cy="32" r="1.3" />
      <circle className="trust-seal-dot" cx="56.5" cy="32" r="1.3" />
      <text className="trust-seal-prefix" x="32" y="22.5" textAnchor="middle">
        {cert.prefix}
      </text>
      <text className="trust-seal-number" x="32" y="36.5" textAnchor="middle">
        {cert.standard}
      </text>
      <text className="trust-seal-year" x="32" y="47" textAnchor="middle">
        {cert.year}
      </text>
    </svg>
  );
}

export function CertSeal({
  cert,
  size = "md",
}: {
  cert: Certification;
  size?: Size;
}) {
  const { locale } = useLocale();
  const label = t(cert.label, locale);
  const full = `${cert.prefix} ${cert.standard}:${cert.year}`;
  return (
    <li className={`trust-seal trust-seal-${size}`} title={`${full} · ${label}`}>
      <SealMark cert={cert} />
      {size === "md" ? (
        <span className="trust-seal-text">
          <strong>{label}</strong>
          <span>{full}</span>
        </span>
      ) : (
        <span className="sr-only">
          {full}, {label}
        </span>
      )}
    </li>
  );
}

export function CertSeals({
  size = "md",
  caption = true,
  className,
}: {
  size?: Size;
  caption?: boolean;
  className?: string;
}) {
  const { locale } = useLocale();
  return (
    <div className={`trust-seals trust-seals-${size}${className ? ` ${className}` : ""}`}>
      <ul aria-label={t(home.trust.certifiedThrough, locale)}>
        {home.trust.certifications.map((cert) => (
          <CertSeal key={cert.standard} cert={cert} size={size} />
        ))}
      </ul>
      {caption ? (
        <p className="trust-seals-caption">
          {t(home.trust.certifiedThrough, locale)}
        </p>
      ) : null}
    </div>
  );
}

export function NinetyNineXBadge({ size = "md" }: { size?: Size }) {
  const { locale } = useLocale();
  const { specialists } = home.trust;
  const label = t(size === "sm" ? specialists.short : specialists.long, locale);
  return (
    <a
      className={`trust-99x trust-99x-${size}`}
      href={home.trust.ninetyNineXHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/media/brand/99xlogo-color.svg" alt="99X" />
      <span className="trust-99x-rule" aria-hidden="true" />
      <span className="trust-99x-copy">
        <strong>{specialists.value}</strong>
        <span>{label}</span>
      </span>
    </a>
  );
}

/**
 * Fast tillitsstripe: 99X-merket og ISO-seglene i liten utgave, slik de står
 * under hero-en på forsiden. Brukes der et skjema eller en CTA trenger bevis
 * rett ved siden av seg.
 */
export function TrustBar({ className }: { className?: string }) {
  return (
    <div className={`trust-bar${className ? ` ${className}` : ""}`}>
      <NinetyNineXBadge size="sm" />
      <CertSeals size="sm" />
    </div>
  );
}
