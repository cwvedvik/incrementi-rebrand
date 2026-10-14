"use client";

import { useEffect, useRef } from "react";

const PORTAL_ID = "26258430";
const FORM_ID = "99ae255d-2016-45ce-ae96-898987bdb82a";
const REGION = "eu1";
const SCRIPT_SRC = `https://js-${REGION}.hsforms.net/forms/embed/${PORTAL_ID}.js`;

declare global {
  interface Window {
    __HS__FORMS__EMBED__?: unknown;
  }
}

/**
 * HubSpot's embed script renders every .hs-form-frame once and then marks
 * itself as started in window.__HS__FORMS__EMBED__. Client-side navigation
 * remounts this component without a page load, so the marker is cleared and
 * the script re-added on every mount, or the form would stay empty.
 */
export default function HubSpotForm({ className }: { className?: string }) {
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    frame.replaceChildren();

    document
      .querySelectorAll<HTMLScriptElement>("script[data-hs-embed]")
      .forEach((s) => s.remove());
    delete window.__HS__FORMS__EMBED__;

    const script = document.createElement("script");
    script.src = `${SCRIPT_SRC}?t=${Date.now()}`;
    script.defer = true;
    script.dataset.hsEmbed = FORM_ID;
    document.body.appendChild(script);

    return () => {
      script.remove();
      frame.replaceChildren();
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className={`hs-form-frame${className ? ` ${className}` : ""}`}
      data-region={REGION}
      data-form-id={FORM_ID}
      data-portal-id={PORTAL_ID}
    />
  );
}
