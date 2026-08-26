import { PRODUCT_CONFIG } from "@/lib/product-config";
import CtaButton from "./CtaButton";
import TrustLine from "./TrustLine";

export default function Offer() {
  return (
    <section
      id="offer"
      className="relative px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="offer-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-3xl overflow-hidden glass-card p-8 sm:p-12 text-center">
          {/* Aura glow */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-violet-500/30 blur-3xl pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-pink-500/25 blur-3xl pointer-events-none"
            aria-hidden
          />

          <div className="relative">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-white/55">
              Today&apos;s Offer
            </span>

            <h2
              id="offer-heading"
              className="mt-4 font-serif text-3xl sm:text-4xl text-white"
            >
              {PRODUCT_CONFIG.productName}
            </h2>

            <div className="mt-6 flex items-end justify-center gap-3">
              <span className="text-white/45 line-through text-2xl font-light">
                {PRODUCT_CONFIG.originalPrice}
              </span>
              <span className="text-6xl sm:text-7xl font-serif font-semibold text-white leading-none">
                {PRODUCT_CONFIG.salePrice}
              </span>
            </div>

            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80">
              <span aria-hidden>✨</span>
              {PRODUCT_CONFIG.freeShippingLabel}
            </p>

            <div className="mt-8 max-w-xs mx-auto">
              <CtaButton size="lg" className="w-full">
                {PRODUCT_CONFIG.ctaLabel}
              </CtaButton>
            </div>

            <div className="mt-4">
              <TrustLine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
