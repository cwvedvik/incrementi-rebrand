"use client";

import { useRef, useState } from "react";
import { aiControl } from "@/lib/content/aiControl";

/** Nettleserens egne kontroller dekker teksten nederst i plakatbildet, så de
    vises først når filmen er startet. */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const { video } = aiControl;

  function play() {
    setStarted(true);
    ref.current?.play().catch(() => {});
  }

  return (
    <div className="lp-video">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
        controls={started}
        playsInline
        preload="metadata"
        aria-label={video.label}
        onPlay={() => setStarted(true)}
      />
      {started ? null : (
        <button type="button" className="lp-play" onClick={play} aria-label={video.play}>
          <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
            <path d="M8 5v14l11-7z" fill="currentColor" />
          </svg>
        </button>
      )}
    </div>
  );
}
