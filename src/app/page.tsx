import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import ProductGallery from "@/components/landing/ProductGallery";
import Offer from "@/components/landing/Offer";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import AnalyticsBoot from "@/components/landing/AnalyticsBoot";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-onyx text-foreground has-sticky-cta">
      {/* Subtle global background — fixed so it doesn't scroll-jank */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(168, 85, 247, 0.18), transparent 60%), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(236, 72, 153, 0.10), transparent 60%), radial-gradient(ellipse 60% 40% at 20% 70%, rgba(56, 189, 248, 0.08), transparent 60%), #0a0510",
        }}
        aria-hidden
      />

      <Navbar />
      <AnalyticsBoot />

      {/* === Page flow (per latest PRD) === */}
      <Hero />
      <Benefits />
      <ProductGallery />
      <Offer />
      <FAQ />
      <FinalCTA />
      <Footer />

      {/* Mobile-only sticky CTA — appears after hero, hides near final CTA */}
      <StickyMobileCTA />
    </main>
  );
}
