"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

const KEY = "incrementi_sticky_dismissed";

export default function StickySessionBar() {
  const { locale, href } = useLocale();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(sessionStorage.getItem(KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? window.scrollY / max : 0;
      setVisible(ratio > 0.35);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div className="sticky-session" role="region" aria-label={t(ui.sticky.line, locale)}>
      <span>{t(ui.sticky.line, locale)}</span>
      <div className="sticky-session-actions">
        <Link href={href("/start")} className="btn-outline">
          {t(ui.sticky.button, locale)}
        </Link>
        <button
          type="button"
          className="sticky-dismiss"
          onClick={() => {
            try {
              sessionStorage.setItem(KEY, "1");
            } catch {
              /* ignore */
            }
            setDismissed(true);
          }}
        >
          {t(ui.sticky.dismiss, locale)}
        </button>
      </div>
    </div>
  );
}
