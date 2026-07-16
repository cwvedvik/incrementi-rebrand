"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

interface ContactFormProps {
  compact?: boolean;
  initialMessage?: string;
  heading?: string;
}

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm({
  compact = false,
  initialMessage = "",
  heading,
}: ContactFormProps) {
  const { locale } = useLocale();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [status, setStatus] = useState<Status>("idle");

  const title =
    heading ??
    (compact
      ? t(ui.form.compactHeading, locale)
      : t(ui.form.heading, locale));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="contact-card">
        <div className="contact-done">
          <span className="orb" aria-hidden="true" />
          <p>{t(ui.form.success, locale)}</p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-card" onSubmit={submit}>
      <div className="k">
        {compact
          ? locale === "no"
            ? "Direkte linje"
            : "Direct line"
          : t(ui.ctaBand.eyebrow, locale)}
      </div>
      <h4>{title}</h4>
      <div className="contact-fields">
        <div className="field">
          <label className="sr-only" htmlFor={`cf-name-${compact}`}>
            {t(ui.form.name, locale)}
          </label>
          <input
            id={`cf-name-${compact}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t(ui.form.name, locale)}
            required
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label className="sr-only" htmlFor={`cf-company-${compact}`}>
            {t(ui.form.company, locale)}
          </label>
          <input
            id={`cf-company-${compact}`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={t(ui.form.company, locale)}
            autoComplete="organization"
          />
        </div>
        <div className="field full">
          <label className="sr-only" htmlFor={`cf-email-${compact}`}>
            {t(ui.form.email, locale)}
          </label>
          <input
            id={`cf-email-${compact}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t(ui.form.email, locale)}
            required
            autoComplete="email"
          />
        </div>
        <div className="field full">
          <label className="sr-only" htmlFor={`cf-message-${compact}`}>
            {t(ui.form.message, locale)}
          </label>
          <textarea
            id={`cf-message-${compact}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              compact
                ? locale === "no"
                  ? "Ditt spørsmål"
                  : "Your question"
                : locale === "no"
                  ? "Hvor gjør driften mest vondt? (valgfritt)"
                  : "Where does your operation hurt the most? (optional)"
            }
            rows={compact ? 2 : 3}
          />
        </div>
      </div>
      <div className="contact-submit">
        <button
          className="btn-copper"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? t(ui.form.sending, locale)
            : compact
              ? t(ui.dock.send, locale)
              : t(ui.form.submit, locale)}
        </button>
        <span className="contact-note">{t(ui.form.note, locale)}</span>
      </div>
      {status === "error" && (
        <p className="contact-error" style={{ marginTop: 10 }}>
          {t(ui.form.error, locale)}
        </p>
      )}
    </form>
  );
}
