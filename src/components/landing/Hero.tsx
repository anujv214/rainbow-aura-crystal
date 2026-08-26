"use client";

import { useEffect, useRef, useState } from "react";
import { PRODUCT_CONFIG } from "@/lib/product-config";
import { trackEvent } from "@/lib/analytics";
import CtaButton from "./CtaButton";
import TrustLine from "./TrustLine";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Autoplay the Reel video. muted + playsInline are required by mobile
  // browsers, and we re-attempt play in case the first call was deferred.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = () => {
      v.play().catch(() => {
        /* Autoplay blocked — poster image will remain visible */
      });
    };
    tryPlay();
    const onPlay = () => trackEvent("video_play", { source: "hero_reel" });
    v.addEventListener("play", onPlay, { once: true });
    return () => v.removeEventListener("play", onPlay);
  }, []);

  const hasVideo =
    !!PRODUCT_CONFIG.VIDEO_URL && PRODUCT_CONFIG.VIDEO_URL.length > 0;

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-center pt-28 pb-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Aurora glow background */}
      <div className="aura-bg" aria-hidden />
      {/* Starfield overlay */}
      <div
        className="absolute inset-0 starfield opacity-60 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* === Left: Reel video === */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-1">
          <div className="relative w-full aspect-[9/16] max-w-[300px] sm:max-w-[320px] lg:max-w-[360px] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-[0_25px_60px_-20px_rgba(168,85,247,0.5)]">
            {/* Glow frame */}
            <div
              className="absolute -inset-[1px] rounded-3xl pointer-events-none z-20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(168,85,247,0.6), rgba(236,72,153,0.5), rgba(56,189,248,0.4))",
                maskImage:
                  "linear-gradient(black, black), linear-gradient(black, black)",
                WebkitMask:
                  "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
              aria-hidden
            />

            {hasVideo && !videoError ? (
              <video
                ref={videoRef}
                src={PRODUCT_CONFIG.VIDEO_URL}
                poster={PRODUCT_CONFIG.VIDEO_POSTER}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
                className="absolute inset-0 w-full h-full object-cover"
                aria-label={`${PRODUCT_CONFIG.productName} reel video`}
              />
            ) : (
              // Fallback image when no video URL is configured or video fails
              <img
                src={PRODUCT_CONFIG.VIDEO_POSTER}
                alt={`${PRODUCT_CONFIG.productName} — hero image`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            )}

            {/* Subtle bottom gradient for legibility */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0510] to-transparent pointer-events-none z-10"
              aria-hidden
            />

            {/* Loading shimmer while video buffers */}
            {!videoLoaded && hasVideo && !videoError && (
              <div
                className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-violet-500/10 to-pink-500/10"
                aria-hidden
              />
            )}
          </div>
        </div>

        {/* === Right: Headline + price + CTA === */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white/70">
            <span aria-hidden>✨</span>
            New Arrival
          </span>

          {/* === Headline === */}
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-white">
            <span className="text-aura">{PRODUCT_CONFIG.productName}</span>
            <span className="block text-white/80 text-lg sm:text-xl mt-3 tracking-wide font-sans font-normal">
              {PRODUCT_CONFIG.productTagline}
            </span>
          </h1>

          {/* === Price === */}
          <div className="mt-6 flex items-end justify-center lg:justify-start gap-3">
            <span className="text-white/45 line-through text-xl sm:text-2xl font-light">
              {PRODUCT_CONFIG.originalPrice}
            </span>
            <span className="text-5xl sm:text-6xl font-serif font-semibold text-white leading-none">
              {PRODUCT_CONFIG.salePrice}
            </span>
          </div>

          {/* === Free shipping badge === */}
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80">
            <span aria-hidden>✨</span>
            {PRODUCT_CONFIG.freeShippingLabel}
          </p>

          {/* === Primary CTA === */}
          <div className="mt-8 w-full sm:w-auto sm:min-w-[280px]">
            <CtaButton size="lg" className="w-full sm:w-auto">
              {PRODUCT_CONFIG.ctaLabel}
            </CtaButton>
          </div>

          {/* === Trust information === */}
          <div className="mt-4">
            <TrustLine className="lg:justify-start" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-[0.3em] uppercase"
        aria-hidden
      >
        ↓ Scroll
      </div>
    </section>
  );
}
