import { PRODUCT_CONFIG } from "@/lib/product-config";
import CtaButton from "./CtaButton";
import TrustLine from "./TrustLine";

export default function FinalCTA() {
  return (
    <section
      id="buy"
      className="relative px-4 sm:px-6 py-20 sm:py-28"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-3xl overflow-hidden px-6 sm:px-12 py-12 sm:py-16 text-center">
          {/* Rainbow aura background */}
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(168, 85, 247, 0.35), transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(236, 72, 153, 0.30), transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(56, 189, 248, 0.20), transparent 70%)",
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 -z-10 starfield opacity-40"
            aria-hidden
          />

          <h2
            id="final-cta-heading"
            className="font-serif text-3xl sm:text-5xl text-white"
          >
            Ready to Get Yours? <span aria-hidden>🌈</span>
          </h2>

          <p className="mt-4 text-white/75 text-lg">
            {PRODUCT_CONFIG.productName}
          </p>

          <div className="mt-6 flex items-end justify-center gap-3">
            <span className="text-white/45 line-through text-xl font-light">
              {PRODUCT_CONFIG.originalPrice}
            </span>
            <span className="text-5xl sm:text-6xl font-serif font-semibold text-white leading-none">
              {PRODUCT_CONFIG.salePrice}
            </span>
          </div>

          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80">
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
    </section>
  );
}
