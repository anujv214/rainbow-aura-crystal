"use client";

import { PRODUCT_CONFIG } from "@/lib/product-config";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 pt-4">
      <nav className="mx-auto max-w-6xl flex items-center justify-between rounded-full glass-card px-5 py-3">
        <a
          href="#top"
          className="font-serif text-lg sm:text-xl tracking-[0.18em] text-white"
          aria-label={`${PRODUCT_CONFIG.brandName} — back to top`}
        >
          {PRODUCT_CONFIG.brandName}
        </a>

        <a
          href="#faq"
          className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
        >
          FAQ
        </a>
      </nav>
    </header>
  );
}
