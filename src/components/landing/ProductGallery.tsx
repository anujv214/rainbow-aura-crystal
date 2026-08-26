"use client";

import { useState } from "react";
import { PRODUCT_CONFIG } from "@/lib/product-config";
import { cn } from "@/lib/utils";

export default function ProductGallery() {
  const images = PRODUCT_CONFIG.productImages.filter(Boolean);

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="gallery"
      className="relative px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="gallery-heading"
          className="text-center font-serif text-3xl sm:text-4xl text-white"
        >
          See Every Angle of the Rainbow
        </h2>
        <p className="mt-3 text-center text-white/55 max-w-xl mx-auto">
          Hand-wrapped copper meets iridescent aura quartz. Tap a thumbnail to view.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6">
          {/* Main image */}
          <div className="relative aspect-square rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/[0.02]">
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt={
                  PRODUCT_CONFIG.galleryAltText[idx] ?? PRODUCT_CONFIG.productName
                }
                loading={idx === 0 ? "eager" : "lazy"}
                decoding="async"
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out",
                  idx === activeIdx
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none",
                )}
              />
            ))}
            {/* Soft inner glow */}
            <div
              className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-3xl pointer-events-none"
              aria-hidden
            />
          </div>

          {/* Thumbnails */}
          <div
            className="grid gap-3 lg:gap-4"
            style={{
              gridTemplateColumns: `repeat(${Math.min(images.length, 5)}, minmax(0, 1fr))`,
            }}
          >
            {images.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveIdx(idx)}
                aria-label={`View product image ${idx + 1}`}
                aria-pressed={idx === activeIdx}
                className={cn(
                  "relative aspect-square rounded-xl overflow-hidden ring-1 transition-all duration-300",
                  idx === activeIdx
                    ? "ring-2 ring-violet-400 scale-[1.02]"
                    : "ring-white/10 hover:ring-white/30",
                )}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
