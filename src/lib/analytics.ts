"use client";

import { PRODUCT_CONFIG } from "@/lib/product-config";

/**
 * Lightweight analytics dispatcher.
 *
 * Supports Meta Pixel + Google Analytics (gtag) when their IDs are configured
 * in PRODUCT_CONFIG.analytics. Leave an ID as an empty string to skip loading
 * that service; provide a real ID to auto-initialize it on mount.
 *
 * Tracked events:
 *   - page_view      (fired once on mount)
 *   - video_play
 *   - faq_open       (payload: question)
 *   - shopify_redirect (payload: url)
 *   - click_get_my_necklace  (the canonical CTA click event name)
 */

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const hasMetaPixel =
  typeof window !== "undefined" &&
  !!PRODUCT_CONFIG.analytics.metaPixelId &&
  PRODUCT_CONFIG.analytics.metaPixelId.length > 0;

const hasGA =
  typeof window !== "undefined" &&
  !!PRODUCT_CONFIG.analytics.googleAnalyticsId &&
  PRODUCT_CONFIG.analytics.googleAnalyticsId.length > 0;

/**
 * Fire an analytics event across all configured providers.
 */
export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;

  // Meta Pixel
  if (hasMetaPixel && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, payload);
  }

  // Google Analytics 4
  if (hasGA && typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  // Always log to console during development so QA can confirm events fire
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${eventName}`, payload);
  }
}

/**
 * Fire the canonical "Get My Necklace" CTA click event,
 * then redirect to the Shopify product URL.
 */
export function fireCtaAndRedirect() {
  trackEvent(PRODUCT_CONFIG.ctaEventName);
  trackEvent("shopify_redirect", { url: PRODUCT_CONFIG.shopifyUrl });

  // Use a hard navigation so tracking has a moment to flush before unload
  if (typeof window !== "undefined") {
    setTimeout(() => {
      window.location.href = PRODUCT_CONFIG.shopifyUrl;
    }, 80);
  }
}

/**
 * Boot-time loader for Meta Pixel + GA scripts.
 * Called from a client-only effect once on mount.
 */
export function bootAnalytics() {
  if (typeof window === "undefined") return;

  /* Meta Pixel */
  if (hasMetaPixel) {
    /* eslint-disable */
    (function (f: any, b: any, e: any, v: any) {
      if (f.fbq) return;
      const n: any = (f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      });
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      const t = b.createElement(e);
      t.async = true;
      t.src = v;
      const s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq?.("init", PRODUCT_CONFIG.analytics.metaPixelId);
    window.fbq?.("track", "PageView");
    /* eslint-enable */
  }

  /* Google Analytics */
  if (hasGA) {
    const ga = document.createElement("script");
    ga.async = true;
    ga.src = `https://www.googletagmanager.com/gtag/js?id=${PRODUCT_CONFIG.analytics.googleAnalyticsId}`;
    document.head.appendChild(ga);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", PRODUCT_CONFIG.analytics.googleAnalyticsId, {
      send_page_view: true,
    });
  }

  // Always log our own internal page_view event for development visibility
  trackEvent("page_view");
}
