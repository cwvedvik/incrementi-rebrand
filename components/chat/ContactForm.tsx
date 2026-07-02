"use client";

import { useState } from "react";

interface ContactFormProps {
  compact?: boolean;
  initialMessage?: string;
  heading?: string;
}

type Status = "idle" | "sending" | "done" | "error";

export default function ContactForm({
  compact = false,
  initialMessage = "",
  heading = "Book your AI & data strategy session",
}: ContactFormProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(initialMessage);
  const [status, setStatus] = useState<Status>("idle");

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
          <p>
            Received. A partner — not a bot — will get back to you, usually
            within one working day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="contact-card" onSubmit={submit}>
      <div className="k">{compact ? "Direct line" : "Phase 0 — Direction"}</div>
      <h4>{heading}</h4>
      <div className="contact-fields">
        <div className="field">
          <label className="sr-only" htmlFor={`cf-name-${compact}`}>
            Name
          </label>
          <input
            id={`cf-name-${compact}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label className="sr-only" htmlFor={`cf-company-${compact}`}>
            Company
          </label>
          <input
            id={`cf-company-${compact}`}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company"
            autoComplete="organization"
          />
        </div>
        <div className="field full">
          <label className="sr-only" htmlFor={`cf-email-${compact}`}>
            Work email
          </label>
          <input
            id={`cf-email-${compact}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work email"
            required
            autoComplete="email"
          />
        </div>
        <div className="field full">
          <label className="sr-only" htmlFor={`cf-message-${compact}`}>
            Message
          </label>
          <textarea
            id={`cf-message-${compact}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              compact
                ? "Your question"
                : "Where does your operation hurt the most? (optional)"
            }
            rows={compact ? 2 : 3}
          />
        </div>
      </div>
      <div className="contact-submit">
        <button className="btn-copper" type="submit" disabled={status === "sending"}>
          {status === "sending"
            ? "Sending…"
            : compact
              ? "Send"
              : "Book a strategy session"}
        </button>
        {/* Replace with the real booking link (e.g. Calendly / Bookings) */}
        <a className="contact-note" href="#" onClick={(e) => e.preventDefault()}>
          Or book a 30-minute intro call ↗
        </a>
      </div>
      {status === "error" && (
        <p className="contact-error" style={{ marginTop: 10 }}>
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
