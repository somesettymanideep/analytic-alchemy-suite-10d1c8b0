import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Database, Cloud, Sparkles, Layers, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    num: "01",
    icon: Database,
    title: "SAP Solutions",
    count: 7,
    desc: "Data migration, ECC support, Datasphere, BTP integration — partner-enabled implementation.",
    tags: ["S/4HANA", "Datasphere", "BTP", "ECC"],
  },
  {
    num: "02",
    icon: Cloud,
    title: "Microsoft Solutions",
    count: 4,
    desc: "D365 F&O implementation & AMS, Business Central, AX migration, Fabric engineering.",
    tags: ["D365 F&O", "BC", "Fabric", "AX"],
  },
  {
    num: "03",
    icon: Sparkles,
    title: "AI Solutions",
    count: 7,
    desc: "BlueGecko AI agents, governance AI, predictive analytics, custom applications, AI testing.",
    tags: ["Agents", "Governance", "Predictive", "Testing"],
  },
  {
    num: "04",
    icon: Layers,
    title: "Data & AI Foundation",
    count: 7,
    desc: "Data governance, maturity assessment, organisation training, platform engineering.",
    tags: ["Governance", "Platform", "Training", "Maturity"],
  },
];

export default function SolutionsSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* soft brand background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #0B1F8C22, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, #F59E0B22, transparent 70%)" }}
        />
      </div>

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className={`flex items-center justify-center gap-3 mb-5 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="w-8 h-0.5 bg-[#F59E0B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0B1F8C]">
              Solutions
            </span>
            <span className="w-8 h-0.5 bg-[#F59E0B]" />
          </div>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-[#0B1F8C] ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            Four practices. One data-first foundation.
          </h2>
          <p
            className={`mt-5 text-base md:text-lg text-slate-600 leading-relaxed ${
              isVisible ? "animate-reveal-up delay-200" : "opacity-0"
            }`}
          >
            Each solution stands on its own — and each is strengthened by{" "}
            <span className="text-[#0B1F8C] font-semibold">BlueGecko</span>, our AI-native
            platform built from real delivery.
          </p>
        </div>

        {/* 4-column cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((s, i) => (
            <article
              key={s.title}
              className={`group relative rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/60 border border-slate-100 px-6 pt-14 pb-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(11,31,140,0.25)] hover:border-[#0B1F8C]/20 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${250 + i * 120}ms` }}
            >
              {/* Floating icon circle */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="w-20 h-20 rounded-full bg-white shadow-[0_12px_30px_-12px_rgba(11,31,140,0.35)] flex items-center justify-center border border-slate-100 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="w-9 h-9 text-[#0B1F8C]" strokeWidth={1.6} />
                </div>
              </div>

              <h3 className="text-xl md:text-[1.35rem] font-bold text-[#0B1F8C] leading-tight mb-3 min-h-[3.25rem] flex items-center justify-center">
                {s.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-[14.5px] mb-5">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 justify-center pt-4 border-t border-slate-200/70">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10.5px] font-medium px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600 group-hover:border-[#F59E0B]/50 group-hover:text-[#0B1F8C] transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* bottom accent bar */}
              <span className="absolute left-6 right-6 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>

        {/* BlueGecko foundation strip */}
        <div
          className={`mt-16 relative rounded-2xl bg-[#0B1F8C] text-white p-6 md:p-8 overflow-hidden ${
            isVisible ? "animate-reveal-up delay-700" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle at 80% 50%, #F59E0B55, transparent 60%)" }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                <Layers className="w-6 h-6 text-[#0B1F8C]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[#F59E0B] font-semibold">
                  Foundation Layer
                </div>
                <div className="text-xl font-bold">BlueGecko Platform</div>
              </div>
            </div>
            <div className="flex-1 text-white/75 text-sm md:text-base leading-relaxed">
              The AI-native platform underneath every practice — accelerating mapping,
              migration, observability, and agents across SAP, Microsoft, and modern data stacks.
            </div>
            <a
              href="/bluegecko"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#F59E0B] text-[#0B1F8C] font-semibold text-sm hover:bg-[#F59E0B]/90 transition-colors whitespace-nowrap"
            >
              Explore BlueGecko <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
