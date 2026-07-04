import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Sparkles, Cpu, Zap, ShieldCheck } from "lucide-react";
import dashboardImg from "@/assets/dashboard-mockup.png";

export default function PlatformShowcaseSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="platform" ref={ref} className="relative py-24 md:py-36 bg-dark-navy text-white overflow-hidden noise-overlay">
      {/* mesh */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-[#3B82F6]/25 blur-[160px] animate-mesh" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-cyan-400/20 blur-[160px] animate-mesh" style={{ animationDelay: "-6s" }} />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-premium text-xs font-semibold tracking-widest uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" /> BlueGecko Platform
          </div>
          <h2 className={`font-display font-extrabold leading-[1.02] text-4xl md:text-5xl lg:text-[3.75rem] text-balance ${isVisible ? "animate-pop-in" : "opacity-0"}`}>
            One platform for <span className="bg-gradient-to-r from-cyan-300 to-[#3B82F6] bg-clip-text text-transparent">every data motion.</span>
          </h2>
          <p className={`mt-6 text-lg text-white/70 font-premium max-w-2xl mx-auto ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "150ms" }}>
            Profiling, mapping, ETL, governance and observability — unified under a multi-agent AI supervisor.
          </p>
        </div>

        {/* Laptop mockup */}
        <div className={`relative max-w-5xl mx-auto ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
          {/* floating chips */}
          <div className="hidden md:flex absolute -top-4 -left-6 z-20 items-center gap-2 px-4 py-2.5 rounded-2xl glass-premium shadow-2xl animate-float-y">
            <Cpu className="w-4 h-4 text-cyan-300" />
            <span className="text-xs font-semibold">AI Mapper</span>
          </div>
          <div className="hidden md:flex absolute top-1/3 -right-6 z-20 items-center gap-2 px-4 py-2.5 rounded-2xl glass-premium shadow-2xl animate-float-y-slow">
            <ShieldCheck className="w-4 h-4 text-[#FFB000]" />
            <span className="text-xs font-semibold">Governed</span>
          </div>
          <div className="hidden md:flex absolute -bottom-4 left-1/4 z-20 items-center gap-2 px-4 py-2.5 rounded-2xl glass-premium shadow-2xl animate-float-y">
            <Zap className="w-4 h-4 text-cyan-300" />
            <span className="text-xs font-semibold">50% Faster ETL</span>
          </div>

          {/* laptop frame */}
          <div className="relative rounded-[28px] bg-gradient-to-b from-slate-700 to-slate-900 p-3 shadow-[0_60px_140px_-30px_rgba(59,130,246,0.55)] border border-white/10">
            <div className="rounded-[20px] overflow-hidden bg-white">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 border-b border-slate-200">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-[11px] font-mono text-slate-500">bluegecko.nextgenlytics.com</span>
              </div>
              <img src={dashboardImg} alt="BlueGecko dashboard" className="w-full block" loading="lazy" />
            </div>
          </div>
          {/* laptop base shadow */}
          <div className="mx-auto w-[85%] h-8 bg-black/40 blur-2xl rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}