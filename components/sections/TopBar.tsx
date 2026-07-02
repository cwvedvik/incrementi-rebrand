"use client";

import { NAV_ITEMS } from "@/lib/topics";

export default function TopBar({
  visited,
  onAsk,
  onReset,
}: {
  visited: Set<string>;
  onAsk: (id: string) => void;
  onReset: () => void;
}) {
  return (
    <header className="topbar">
      <button className="logo" onClick={onReset} aria-label="Incrementi — back to the beginning">
        <img src="/incrementi-logo.png" alt="Incrementi" />
        <small>A 99x Company</small>
      </button>
      <nav className="nav" aria-label="Topics">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={visited.has(item.id) ? "visited" : ""}
            onClick={() => onAsk(item.id)}
            type="button"
          >
            {item.label}
          </button>
        ))}
        <button className="start" onClick={() => onAsk("start")} type="button">
          Start
        </button>
      </nav>
    </header>
  );
}
