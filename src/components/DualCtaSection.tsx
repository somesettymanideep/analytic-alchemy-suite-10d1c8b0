import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Play } from "lucide-react";

export default function DualCtaSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="relative py-28 md:py-40 bg-dark-navy text-white overflow-hidden noise-overlay">
      {/* animated mesh gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/30 blur-[160px] animate-mesh" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-cyan-400/25 blur-[180px] animate-mesh" style={{ animationDelay: "-6s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FFB000]/15 blur-[160px] animate-mesh" style={{ animationDelay: "-12s" }} />
      </div>

      <div className="container relative text-center max-w-4xl">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass-premium text-xs font-semibold tracking-widest uppercase mb-8 ${isVisible ? "animate-pop-in" : "opacity-0"}`}>
          Get started
        </div>

        <h2 className={`font-display font-extrabold leading-[0.98] text-5xl md:text-6xl lg:text-[5.5rem] text-balance ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
          Ready to Modernize<br />
          <span className="bg-gradient-to-r from-cyan-300 via-white to-[#FFB000] bg-clip-text text-transparent">
            Your Enterprise?
          </span>
        </h2>

        <p className={`mt-8 text-lg md:text-xl text-white/70 font-premium max-w-2xl mx-auto ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          Book your Data Maturity Assessment. Thirty minutes. Three concrete recommendations.
        </p>

        <div className={`mt-12 flex flex-wrap gap-4 justify-center ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "450ms" }}>
          <a
            href="mailto:info@nextgenlytics.com"
            className="magnetic-btn group inline-flex items-center gap-2 px-8 py-4 rounded-btn font-semibold text-sm bg-gradient-to-r from-cyan-400 to-sky-500 text-[#081A45] shadow-[0_15px_50px_-10px_rgba(56,189,248,0.6)]"
          >
            Book Meeting
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#platform"
            className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 rounded-btn font-semibold text-sm glass-premium hover:bg-white/10 text-white"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
