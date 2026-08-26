/**
 * ============================================================
 *  ARVO STUDIO — Rainbow Aura Quartz Necklace
 *  Central configuration object.
 *
 *  Edit any value in this file to update the entire landing page.
 * ============================================================
 */

export const PRODUCT_CONFIG = {
  /* ---------- Branding ---------- */
  brandName: "ARVO STUDIO",

  /* ---------- Product ---------- */
  productName: "Rainbow Aura Quartz Necklace",
  productTagline: "Charged for Chakra Balance",

  /* ---------- Pricing (in USD) ----------
   * Display strings used directly across the page so there is
   * exactly ONE source of truth for the visible price.
   */
  originalPrice: "$28",
  salePrice: "$18",

  /* ---------- Shipping / Offers ---------- */
  freeShippingLabel: "Free US Shipping Today",

  /**
   * IMPORTANT: Shopify product URL.
   * Every "Get My Necklace" CTA opens this exact URL.
   * DO NOT change unless updating the destination product.
   */
  shopifyUrl:
    "https://anujverse.myshopify.com/products/hot-selling-stone-crystal-pillar-tree-of-life-pendant-ins-fashion-necklace?variant=50214906003713",

  /* ---------- Hero / Reel video ----------
   * Direct MP4 URL of the Reel that brought visitors to the page.
   * Do NOT use an Instagram webpage URL — only a direct .mp4 URL.
   * The local /reel.mp4 file ships with the project; replace with
   * a CDN URL if you host the video externally.
   */
  VIDEO_URL: "/reel.mp4",

  /* Poster / fallback image shown before the video loads and
     if the video fails to load. */
  VIDEO_POSTER: "/images/product-1.jpg",

  /* ---------- Product gallery images ----------
   * Only real product photos. Replace the array entries below —
   * no other code changes required to update the gallery.
   */
  productImages: [
    "/images/product-1.jpg",
    "/images/product-2.jpg",
    "/images/product-3.jpg",
    "/images/product-4.jpg",
    "/images/product-5.jpg",
  ],

  /* Alt text for accessibility + SEO */
  galleryAltText: [
    "Rainbow Aura Quartz Necklace with copper wire wrap — front view",
    "Rainbow Aura Quartz pendant close-up showing iridescent crystal colors",
    "Tree of Life copper-wrapped rainbow aura quartz pendant",
    "Assorted rainbow aura quartz necklaces showing color variation",
    "Three rainbow aura quartz crystal pendants displayed on dark surface",
  ],

  /* ---------- FAQ content (editable) ---------- */
  faq: {
    // EDIT: replace with the actual fulfillment window once confirmed with the seller.
    shippingTime: "YOUR_ACTUAL_SHIPPING_TIME",
    isRealQuartz:
      "Yes. Each pendant features a genuine aura quartz crystal, treated through a vacuum-coating process to create its signature rainbow iridescence. The wire wrap is handmade copper.",
    material:
      "Aura quartz crystal, handmade copper wire wrap, and a soft adjustable necklace cord.",
    naturalVariation:
      "Yes. Aura quartz is a natural stone, so every pendant will have slight variations in color intensity, pattern, and shape — making each necklace one of a kind.",
  },

  /* ---------- Trust badges ----------
   * Only display the badges below that are actually true for your store.
   * Set a flag to false (or empty its label) to hide that badge everywhere
   * on the page — including the hero, offer, and final CTA sections.
   */
  trustBadges: {
    secureCheckout: true,
    returns: true,
    returnsText: "30-day returns",
    shipsFromUS: false,
  },

  /* ---------- Analytics ----------
   * Leave an ID as an empty string ("") to skip loading that service.
   * Provide a real ID to auto-initialize Meta Pixel / Google Analytics 4.
   */
  analytics: {
    metaPixelId: "",
    googleAnalyticsId: "",
  },

  /* ---------- CTA copy ---------- */
  ctaLabel: "Get My Necklace",
  ctaEventName: "click_get_my_necklace",
} as const;

/**
 * Returns an array of trust badges currently enabled in the config,
 * in the order they should be displayed.
 */
export type TrustBadge = { label: string };
export function enabledTrustBadges(): TrustBadge[] {
  const t = PRODUCT_CONFIG.trustBadges;
  const out: TrustBadge[] = [];
  if (t.secureCheckout) out.push({ label: "Secure checkout" });
  if (t.returns && t.returnsText) out.push({ label: t.returnsText });
  if (t.shipsFromUS) out.push({ label: "Ships from US" });
  return out;
}
