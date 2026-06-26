import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Calendar, Download } from "lucide-react";
import bannerAsset from "@/assets/start-with-one-day-banner.png.asset.json";

export default function StartWithOneDaySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-16 md:py-24 text-primary-foreground overflow-hidden">
      {/* Background banner image */}
      <div className="absolute inset-0">
        <img
          src={bannerAsset.url}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
      </div>


      <div className="container relative z-10" ref={ref}>
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
            <Calendar className="w-3.5 h-3.5" />
            Engagement
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Start with one day.
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed text-balance max-w-3xl mx-auto mb-10">
            A scoped AI Hackathon. A Data Maturity Assessment. Either way, we go at your pace — and we never start by building. We start by understanding.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:bg-accent/90 active:scale-95 transition-all"
            >
              Book a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold hover:bg-white/20 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              Download Capability Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
