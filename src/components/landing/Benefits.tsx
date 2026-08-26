import { Sparkles, Gem, Flame } from "lucide-react";

const BENEFITS = [
  {
    icon: Flame,
    title: "Handmade Copper Wrap",
    description:
      "Each pendant is individually wire-wrapped by hand in pure copper, giving every necklace a one-of-a-kind artisan finish.",
  },
  {
    icon: Gem,
    title: "Real Aura Quartz",
    description:
      "A genuine quartz crystal treated with a vacuum-coating process that creates its signature rainbow iridescence — no glass, no plastic.",
  },
  {
    icon: Sparkles,
    title: "Balances 7 Chakras",
    description:
      "The full rainbow spectrum aligns with the seven chakra energy centers, making this both a beautiful piece and a meaningful ritual object.",
  },
] as const;

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative px-4 sm:px-6 py-16 sm:py-24"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="benefits-heading"
          className="text-center font-serif text-3xl sm:text-4xl text-white"
        >
          Why You&apos;ll Love This Necklace
        </h2>
        <p className="mt-3 text-center text-white/55 max-w-xl mx-auto">
          Three reasons it lives in your everyday jewelry rotation — not buried in a drawer.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {BENEFITS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col items-start gap-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-violet-300" aria-hidden />
              </div>
              <div>
                <h3 className="font-serif text-xl text-white flex items-center gap-2">
                  <span className="text-violet-300" aria-hidden>
                    ✓
                  </span>
                  {title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
