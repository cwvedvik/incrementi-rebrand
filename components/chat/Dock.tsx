"use client";

import { useRef, useEffect } from "react";
import { Chip } from "./Message";

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
  const inputRef = useRef<HTMLInputElement>(null);

  // any printable key focuses the input — the whole page is the prompt
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
            placeholder="Ask Incrementi…"
            autoComplete="off"
            aria-label="Ask Incrementi a question"
            onFocus={() => onListening(true)}
            onBlur={() => onListening(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") submit();
            }}
          />
          <button className="send" onClick={submit} aria-label="Send" type="button">
            ↑
          </button>
        </div>
        <div className="dock-hint">
          {inConversation
            ? "Keep asking — or press “Back to the beginning” to reset."
            : "Suggested questions above — or type your own. Ask what matters to you. Skip what doesn’t."}
        </div>
      </div>
    </div>
  );
}
