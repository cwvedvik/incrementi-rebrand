"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export interface HeroVideoContent {
  /** null betyr at filmen ikke finnes ennå, og plakatbildet vises alene. */
  src: string | null;
  poster: string;
  label: string;
  play: string;
  alt?: string;
}

/** Nettleserens egne kontroller dekker teksten nederst i plakatbildet, så de
    vises først når filmen er startet. */
export default function HeroVideo({ video }: { video: HeroVideoContent }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function play() {
    setStarted(true);
    ref.current?.play().catch(() => {});
  }

  if (!video.src) {
    return (
      <div className="lp-video lp-video-still">
        <Image
          src={video.poster}
          alt={video.alt ?? ""}
          fill
          priority
          sizes="(max-width: 840px) 100vw, 800px"
        />
      </div>
    );
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
