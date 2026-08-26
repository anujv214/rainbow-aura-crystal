import { PRODUCT_CONFIG } from "@/lib/product-config";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-white/8 px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-serif text-lg tracking-[0.18em] text-white">
          {PRODUCT_CONFIG.brandName}
        </div>
        <div className="text-xs text-white/45 text-center sm:text-right">
          © {year} {PRODUCT_CONFIG.brandName}. All rights reserved.
          <span className="block sm:inline sm:ml-2">
            Crystals are natural — actual color may vary slightly.
          </span>
        </div>
      </div>
    </footer>
  );
}
