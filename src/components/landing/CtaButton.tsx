"use client";

import { PRODUCT_CONFIG } from "@/lib/product-config";
import { fireCtaAndRedirect } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  className?: string;
  label?: string;
  size?: "default" | "lg" | "sm";
  variant?: "aura" | "ghost";
  children?: React.ReactNode;
};

export default function CtaButton({
  className,
  label,
  size = "default",
  variant = "aura",
  children,
}: CtaButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "h-14 sm:h-16 text-base sm:text-lg px-8"
      : size === "sm"
      ? "h-10 text-sm px-5"
      : "h-12 sm:h-14 text-sm sm:text-base px-7";

  const variantClasses =
    variant === "aura"
      ? "btn-aura"
      : "bg-white/8 text-white border border-white/15 hover:bg-white/12";

  return (
    <button
      type="button"
      onClick={fireCtaAndRedirect}
      data-event={PRODUCT_CONFIG.ctaEventName}
      aria-label={label ?? PRODUCT_CONFIG.ctaLabel}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full w-full sm:w-auto whitespace-nowrap",
        "transition-transform duration-200 active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0510]",
        sizeClasses,
        variantClasses,
        className,
      )}
    >
      {children ?? label ?? PRODUCT_CONFIG.ctaLabel}
    </button>
  );
}
