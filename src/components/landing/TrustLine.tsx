"use client";

import { PRODUCT_CONFIG, enabledTrustBadges } from "@/lib/product-config";
import { cn } from "@/lib/utils";

type TrustLineProps = {
  className?: string;
};

/**
 * Renders the trust badges that are actually enabled in
 * `PRODUCT_CONFIG.trustBadges`. If no badges are enabled, this
 * component renders nothing.
 *
 * Used by Hero, Offer, and FinalCTA so there is a single source of
 * truth for which trust claims appear on the page.
 */
export default function TrustLine({ className }: TrustLineProps) {
  const badges = enabledTrustBadges();
  if (badges.length === 0) return null;

  return (
    <p
      className={cn(
        "text-xs text-white/45 flex flex-wrap items-center justify-center gap-x-1 gap-y-1",
        className,
      )}
    >
      {badges.map((b, idx) => (
        <span key={b.label} className="inline-flex items-center">
          {b.label}
          {idx < badges.length - 1 && (
            <span className="mx-1.5 text-white/25" aria-hidden>
              ·
            </span>
          )}
        </span>
      ))}
    </p>
  );
}

// Re-export for convenience so callers can import everything from one place
export { PRODUCT_CONFIG };
