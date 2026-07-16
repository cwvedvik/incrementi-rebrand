"use client";

import { useRef, useEffect } from "react";
import { Chip } from "./Message";
import { useLocale } from "@/lib/i18n/locale";
import { ui } from "@/lib/i18n/ui";
import { t } from "@/lib/i18n/types";

export default function Dock({
  chips,
  visited,
  onAsk,
  onSubmit,
  onListening,
  inConversation,
}: {
  chips: string[];
  visited: Set<string>;
  onAsk: (id: string) => void;
  onSubmit: (text: string) => void;
  onListening: (listening: boolean) => void;
  inConversation: boolean;
}) {
  const { locale } = useLocale();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key.length === 1 &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        document.activeElement !== inputRef.current &&
        !(document.activeElement instanceof HTMLInputElement) &&
        !(document.activeElement instanceof HTMLTextAreaElement)
      ) {
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function submit() {
    const el = inputRef.current;
    if (!el) return;
    const val = el.value.trim();
    if (!val) return;
    el.value = "";
    onSubmit(val);
  }

  return (
    <div className="dock">
      <div className="dock-inner">
        {chips.length > 0 && (
          <div className="chips">
            {chips.map((id) => (
              <Chip key={id} id={id} visited={visited.has(id)} onAsk={onAsk} />
            ))}
          </div>
        )}
        <div className="inputbar">
          <span className="pre" aria-hidden="true">
            ›
          </span>
          <input
            ref={inputRef}
            type="text"
            placeholder={t(ui.dock.placeholder, locale)}
            autoComplete="off"
            aria-label={t(ui.dock.placeholder, locale)}
            onFocus={() => onListening(true)}
            onBlur={() => onListening(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
          />
          <button
            className="send"
            onClick={submit}
            aria-label={t(ui.dock.send, locale)}
            type="button"
          >
            ↑
          </button>
        </div>
        <div className="dock-hint">
          {inConversation
            ? t(ui.dock.hintAfter, locale)
            : t(ui.dock.hint, locale)}
        </div>
      </div>
    </div>
  );
}
