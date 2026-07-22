"use client";

/**
 * Instrumented-sea atmosphere behind the living brain.
 * Soft depth, quiet horizon, peripheral instrument ticks — homepage only.
 */
export default function HeroSea() {
  return (
    <div className="hero-sea" aria-hidden="true">
      <div className="hero-sea-depth" />
      <div className="hero-sea-horizon" />
      <svg className="hero-sea-ticks" viewBox="0 0 100 100" preserveAspectRatio="none">
        <g opacity="0.1" stroke="currentColor" strokeWidth="0.15" fill="none">
          <line x1="4" y1="18" x2="7" y2="18" />
          <line x1="4" y1="28" x2="6" y2="28" />
          <line x1="4" y1="38" x2="7" y2="38" />
          <line x1="93" y1="22" x2="96" y2="22" />
          <line x1="94" y1="32" x2="96" y2="32" />
          <line x1="93" y1="42" x2="96" y2="42" />
        </g>
      </svg>
    </div>
  );
}
