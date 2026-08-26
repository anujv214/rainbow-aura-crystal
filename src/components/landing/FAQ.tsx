"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PRODUCT_CONFIG } from "@/lib/product-config";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type FAQItem = {
  question: string;
  answer: string;
  // Stable identifier used for the analytics event payload
  id: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "shipping",
    question: "How long does shipping to the US take?",
    answer: `Shipping to the US takes ${PRODUCT_CONFIG.faq.shippingTime}. You'll receive a tracking link by email as soon as your order ships.`,
  },
  {
    id: "real_quartz",
    question: "Is it real quartz?",
    answer: PRODUCT_CONFIG.faq.isRealQuartz,
  },
  {
    id: "material",
    question: "What material is the necklace made from?",
    answer: PRODUCT_CONFIG.faq.material,
  },
  {
    id: "variation",
    question: "Can every crystal look slightly different?",
    answer: PRODUCT_CONFIG.faq.naturalVariation,
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  function toggle(idx: number, id: string) {
    const isOpening = openIdx !== idx;
    setOpenIdx(openIdx === idx ? null : idx);
    if (isOpening) {
      trackEvent("faq_open", { question: id });
    }
  }

  return (
    <section
      id="faq"
      className="relative px-4 sm:px-6 py-16 sm:py-24 scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="faq-heading"
          className="text-center font-serif text-3xl sm:text-4xl text-white"
        >
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-white/55 max-w-xl mx-auto">
          Straight answers about shipping, materials, and what makes each piece unique.
        </p>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx, item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
                >
                  <span className="text-white font-medium text-base sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-white/60 transition-transform duration-300",
                      isOpen && "rotate-180 text-violet-300",
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-white/70 leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
