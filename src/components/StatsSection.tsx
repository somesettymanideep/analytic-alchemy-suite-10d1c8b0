import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { end: 12, suffix: "", label: "Countries" },
  { end: 17, suffix: "", label: "Legal Entities" },
  { end: 70, suffix: "+", label: "Projects" },
  { end: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function StatsSection() {
  const { ref, isVisible } = useScrollReveal(0.15);
  const counters = stats.map((s) => useCountUp(s.end, 2200));

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-[#F8FAFC] overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E66]/5 text-[#0B1E66] text-xs font-semibold tracking-widest uppercase mb-6">
            Index Report
          </div>
          <h2 className={`font-display font-extrabold text-[#081A45] leading-[1.05] text-4xl md:text-5xl lg:text-[3.5rem] text-balance ${isVisible ? "animate-pop-in" : "opacity-0"}`}>
            The numbers that <span className="bg-gradient-to-r from-[#0B1E66] to-[#3B82F6] bg-clip-text text-transparent">move the market.</span>
          </h2>
        </div>

        {/* KPI dashboard */}
        <div className={`relative rounded-card overflow-hidden bg-dark-navy text-white premium-glow ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/40 blur-[140px] animate-mesh" />
            <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] rounded-full bg-cyan-400/30 blur-[140px] animate-mesh" style={{ animationDelay: "-6s" }} />
          </div>
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-y divide-x divide-white/10 lg:divide-y-0">
            {stats.map((s, i) => (
              <div key={s.label} className="p-8 md:p-12">
                <div ref={counters[i].ref} className="font-display font-extrabold text-6xl md:text-7xl lg:text-[6rem] leading-none bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-transparent tabular-nums">
                  {counters[i].count}{s.suffix}
                </div>
                <div className="mt-4 h-px bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <div className="mt-4 text-sm font-semibold tracking-widest uppercase text-white/70 font-premium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
