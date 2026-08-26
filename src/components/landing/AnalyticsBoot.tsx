"use client";

import { useEffect } from "react";
import { bootAnalytics } from "@/lib/analytics";

/**
 * Mount-only component that boots analytics scripts
 * (Meta Pixel + Google Analytics) and fires the initial page_view event.
 */
export default function AnalyticsBoot() {
  useEffect(() => {
    bootAnalytics();
  }, []);
  return null;
}
