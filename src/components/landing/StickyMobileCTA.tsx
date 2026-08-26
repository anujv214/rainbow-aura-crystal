"use client";

import { useEffect, useState } from "react";
import { PRODUCT_CONFIG } from "@/lib/product-config";
import { fireCtaAndRedirect } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the sticky bar once the user has scrolled past the hero CTA (~ 70% of viewport)
    const onScroll = () => {
      const scrolled = window.scrollY;
      const threshold = window.innerHeight * 0.7;
      setVisible(scrolled > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide when the final CTA section is in view to avoid two CTAs at once
  useEffect(() => {
    const finalCta = document.getElementById("buy");
    if (!finalCta) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 },
    );
    observer.observe(finalCta);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 md:hidden transition-transform duration-300 ease-out",
        visible ? "translate-y-0" : "translate-y-full pointer-events-none",
      )}
      style={{
        paddingBottom: "env(safe-area-inset-bottom, 0)",
      }}
      role="region"
      aria-label="Quick purchase"
    >
      <div className="m-3 rounded-2xl glass-card shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.5)] p-3 flex items-center gap-3">
        <div className="flex flex-col leading-tight pl-1">
          <div className="flex items-baseline gap-2">
            <span className="text-white font-semibold text-lg">
              {PRODUCT_CONFIG.salePrice}
            </span>
            <span className="text-white/45 line-through text-xs">
              {PRODUCT_CONFIG.originalPrice}
            </span>
          </div>
          <span className="text-[11px] text-white/55">Free US shipping</span>
        </div>
        <button
          type="button"
          onClick={fireCtaAndRedirect}
          data-event={PRODUCT_CONFIG.ctaEventName}
          aria-label={`${PRODUCT_CONFIG.ctaLabel} — opens Shopify product page`}
          className="btn-aura flex-1 h-12 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold"
        >
          {PRODUCT_CONFIG.ctaLabel}
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
