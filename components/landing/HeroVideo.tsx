"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { aiControl } from "@/lib/content/aiControl";
import { IconArrowUpRight } from "@/components/icons";

type Mode = "preview" | "sound" | "ended" | "unavailable";

/**
 * Filmen har voiceover. Den går stum i loop som forhåndsvisning, og først når
 * besøkende ber om det startes den forfra med lyd. Nettlesere blokkerer
 * autoplay med lyd, så rekkefølgen kan ikke snus.
 */
export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("preview");
  const { video, cta } = aiControl;

  // Feil som skjer før hydrering når aldri onError, så de fanges her.
  useEffect(() => {
    const v = ref.current;
    if (v && (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE)) {
      setMode("unavailable");
    }
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || mode !== "preview") return;
    if (reduce) {
      v.pause();
      return;
    }
    v.muted = true;
    v.play().catch(() => {});
  }, [reduce, mode]);

  function playWithSound() {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = false;
    v.loop = false;
    setMode("sound");
    v.play().catch(() => {
      v.muted = true;
      setMode("preview");
    });
  }

  return (
    <figure className={`lp-video lp-video-${mode}`}>
      <video
        ref={ref}
        className="lp-video-el"
        src={video.src}
        poster={video.poster}
        muted
        loop
        playsInline
        preload="metadata"
        controls={mode === "sound"}
        aria-label={video.label}
        onEnded={() => setMode("ended")}
        onError={() => setMode("unavailable")}
      />

      {mode === "unavailable" ? (
        <Image
          src={video.poster}
          alt=""
          fill
          sizes="(max-width: 900px) 100vw, 58vw"
          className="mkt-cover"
        />
      ) : null}

      {mode === "preview" ? (
        <button type="button" className="lp-video-play" onClick={playWithSound}>
          <span className="lp-video-play-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M8 5.5v13l10.5-6.5z" fill="currentColor" />
            </svg>
          </span>
          {video.play}
        </button>
      ) : null}

      {mode === "ended" ? (
        <div className="lp-video-end">
          <p className="display">{video.endTitle}</p>
          <div className="lp-video-end-actions">
            <a className="mkt-btn mkt-btn-primary" href="#kontakt">
              {cta.primary}
              <span className="mkt-btn-icon" aria-hidden="true">
                <IconArrowUpRight width={14} height={14} />
              </span>
            </a>
            <button type="button" className="lp-video-replay" onClick={playWithSound}>
              {video.replay}
            </button>
          </div>
        </div>
      ) : null}
    </figure>
  );
}
