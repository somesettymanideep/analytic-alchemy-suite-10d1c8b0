import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const steps = [
  { n: "01", title: "Discover", desc: "Map your data landscape. Interview stakeholders. Define outcomes." },
  { n: "02", title: "Assess", desc: "Profile every source. Score data quality. Quantify migration risk." },
  { n: "03", title: "Migrate", desc: "BlueGecko-driven ETL, mapping and validation — 50%+ faster." },
  { n: "04", title: "Optimize", desc: "Tune performance, cost, and adoption post go-live." },
  { n: "05", title: "Govern", desc: "Continuous audit, PII detection, human-approved AI." },
];

export default function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section id="process" ref={ref} className="relative py-24 md:py-36 bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E66]/5 text-[#0B1E66] text-xs font-semibold tracking-widest uppercase mb-6">
            The process
          </div>
          <h2 className={`font-display font-extrabold text-[#081A45] leading-[1.02] text-4xl md:text-5xl lg:text-[3.5rem] text-balance ${isVisible ? "animate-pop-in" : "opacity-0"}`}>
            Five stages. <span className="bg-gradient-to-r from-[#0B1E66] to-[#3B82F6] bg-clip-text text-transparent">One outcome.</span>
          </h2>
        </div>

        <div className="relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-16 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0B1E66]/20 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s, i) => (
              <div
                key={s.n}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className={`group relative rounded-card p-7 bg-white border border-[#0B1E66]/8 hover:border-[#3B82F6]/40 hover:premium-shadow hover:-translate-y-2 transition-all duration-500 ${isVisible ? "animate-pop-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="relative w-16 h-16 mb-6 rounded-2xl bg-[#F0F6FF] border border-[#3B82F6]/20 flex items-center justify-center group-hover:bg-dark-navy group-hover:border-[#3B82F6] transition-all duration-500">
                  <span className="font-display font-extrabold text-2xl bg-gradient-to-br from-[#0B1E66] to-[#3B82F6] bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-white transition-all">{s.n}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#081A45] mb-2">{s.title}</h3>
                <p className={`text-sm text-muted-foreground font-premium leading-relaxed transition-all duration-500 ${hover === i ? "opacity-100 max-h-40" : "opacity-70 max-h-16 overflow-hidden"}`}>
                  {s.desc}
                </p>
                {/* arrow between */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 h-6 rounded-full bg-white border border-[#0B1E66]/10 items-center justify-center z-10 flex text-[#0B1E66]/40 text-xs">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
