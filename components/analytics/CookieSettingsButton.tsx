"use client";

import { openCookieSettings } from "@/lib/analytics";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function CookieSettingsButton({
  className = "",
}: {
  className?: string;
}) {
  const { locale } = useLocale();

  return (
    <button
      type="button"
      className={`cookie-settings-link ${className}`.trim()}
      onClick={openCookieSettings}
    >
      {t(ui.cookieSettings, locale)}
    </button>
  );
}
