import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Users, Calendar, Zap, Sparkles, MapPin, ArrowUpRight } from "lucide-react";

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  const cardBase =
    "group relative overflow-hidden rounded-card p-8 md:p-9 border border-[#0B1E66]/8 bg-white premium-shadow hover:-translate-y-1 hover:shadow-[0_30px_100px_-20px_rgba(11,30,102,0.22)] transition-all duration-500";

  return (
    <section id="why-us" ref={ref} className="relative py-24 md:py-36 bg-[#F8FAFC] overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E66]/5 text-[#0B1E66] text-xs font-semibold tracking-widest uppercase mb-6">
            Why NGSIT
          </div>
          <h2 className={`font-display font-extrabold text-[#081A45] leading-[1.02] text-4xl md:text-5xl lg:text-[3.75rem] text-balance ${isVisible ? "animate-pop-in" : "opacity-0"}`}>
            Built for enterprise.<br />
            <span className="bg-gradient-to-r from-[#0B1E66] to-[#3B82F6] bg-clip-text text-transparent">Priced for reality.</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
          {/* Big hero tile — 50% faster */}
          <div
            className={`md:col-span-4 md:row-span-2 relative overflow-hidden rounded-card p-10 md:p-14 bg-dark-navy text-white premium-glow hover:-translate-y-1 transition-all duration-500 ${
              isVisible ? "animate-pop-in" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/30 blur-[100px] animate-mesh" />
            <div className="absolute -bottom-32 -left-24 w-[400px] h-[400px] rounded-full bg-cyan-400/20 blur-[120px] animate-mesh" style={{ animationDelay: "-4s" }} />
            <div className="relative">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-6">
                <Zap className="w-4 h-4" /> Speed
              </div>
              <div className="font-display font-extrabold text-[6rem] md:text-[9rem] leading-none bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-transparent">
                50%
              </div>
              <div className="mt-4 text-2xl md:text-3xl font-display font-bold">Faster Delivery</div>
              <p className="mt-4 text-white/60 font-premium max-w-md">
                BlueGecko automates profiling, mapping, ETL and validation — every stage moves faster.
              </p>
            </div>
          </div>

          {/* EDT */}
          <div className={`md:col-span-2 ${cardBase} ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
            <Users className="w-8 h-8 text-[#3B82F6] mb-4" />
            <div className="font-display font-bold text-2xl md:text-3xl text-[#081A45] leading-tight">Extended Delivery Team</div>
            <p className="mt-3 text-sm text-muted-foreground font-premium leading-relaxed">Named engineers, transparent pricing, integrated with your team.</p>
            <ArrowUpRight className="absolute top-6 right-6 w-5 h-5 text-[#0B1E66]/30 group-hover:text-[#0B1E66] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </div>

          {/* Founded 2022 */}
          <div className={`md:col-span-2 ${cardBase} ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "300ms" }}>
            <Calendar className="w-8 h-8 text-[#FFB000] mb-4" />
            <div className="font-display font-bold text-2xl md:text-3xl text-[#081A45] leading-tight">Founded 2022</div>
            <p className="mt-3 text-sm text-muted-foreground font-premium leading-relaxed">Amsterdam &amp; India. Built native for AI-era delivery — no legacy debt.</p>
          </div>

          {/* BlueGecko */}
          <div className={`md:col-span-3 relative overflow-hidden rounded-card p-8 md:p-9 border border-[#3B82F6]/20 bg-gradient-to-br from-[#F0F6FF] to-white premium-shadow hover:-translate-y-1 transition-all duration-500 ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "400ms" }}>
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#3B82F6]/15 blur-[80px]" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#3B82F6]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#3B82F6]">Flagship Platform</span>
              </div>
              <div className="font-display font-bold text-3xl md:text-4xl text-[#081A45] leading-tight">BlueGecko AI Platform</div>
              <p className="mt-3 text-muted-foreground font-premium leading-relaxed max-w-md">
                Multi-agent supervisor architecture. AI proposes, humans approve. Every action auditable.
              </p>
            </div>
          </div>

          {/* Onsite Europe */}
          <div className={`md:col-span-3 ${cardBase} ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "500ms" }}>
            <MapPin className="w-8 h-8 text-[#0B1E66] mb-4" />
            <div className="font-display font-bold text-2xl md:text-3xl text-[#081A45] leading-tight">Onsite Europe Support</div>
            <p className="mt-3 text-muted-foreground font-premium leading-relaxed max-w-md">
              Dutch leadership on the ground. Offshore delivery from Hyderabad &amp; Lucknow. One team, one clock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
