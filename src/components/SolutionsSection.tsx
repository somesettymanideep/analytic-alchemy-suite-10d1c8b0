import { useEffect, useRef, useState } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: ((e.clientX - r.left) / r.width) * 100,
        y: ((e.clientY - r.top) / r.height) * 100,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0B1F8C] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #F59E0B33, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, #ffffff22, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 transition-[background] duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(245,158,11,0.10), transparent 60%)`,
          }}
        />
      </div>
      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        {/* Header */}
        <div className="max-w-3xl">
          <div className={`flex items-center gap-3 mb-6 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="w-8 h-0.5 bg-[#F59E0B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F59E0B]">
              Solutions
            </span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            Four practices.
            <br />
            <span className="text-white/70">One data-first foundation.</span>
          </h2>
          <p
            className={`mt-6 text-lg text-white/70 leading-relaxed max-w-2xl ${
              isVisible ? "animate-reveal-up delay-200" : "opacity-0"
            }`}
          >
            Each solution stands on its own — and each is strengthened by{" "}
            <span className="text-[#F59E0B] font-semibold">BlueGecko</span>, our AI-native platform
            built from real delivery.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 relative">
          {/* Connector center */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#F59E0B]/40 to-transparent -translate-x-1/2" />

          {solutions.map((s, i) => (
            <article
              key={s.title}
              className={`group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-1 hover:border-[#F59E0B]/50 hover:bg-white/[0.07] hover:shadow-[0_30px_80px_-20px_rgba(245,158,11,0.35)] ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              {/* Border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.12), transparent 50%)" }}
              />

              <div className="relative flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-[#F59E0B]/15 group-hover:border-[#F59E0B]/40 transition-all duration-500 group-hover:rotate-3">
                    <s.icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] text-white/40">
                    {s.num} / 04
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#F59E0B] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">
                {s.title}
              </h3>

              <div className="flex items-center gap-2 mb-5">
                <span className="text-[#F59E0B] font-mono text-sm font-bold">{s.count}</span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-semibold">
                  Offerings
                </span>
                <span className="flex-1 h-px bg-gradient-to-r from-[#F59E0B]/40 to-transparent ml-2" />
              </div>

              <p className="text-white/70 leading-relaxed mb-7 text-[15px]">
                {s.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:border-[#F59E0B]/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* BlueGecko foundation layer */}
        <div
          className={`mt-14 relative rounded-2xl border border-[#F59E0B]/30 bg-gradient-to-r from-[#F59E0B]/10 via-white/5 to-[#F59E0B]/10 p-6 md:p-8 overflow-hidden ${
            isVisible ? "animate-reveal-up delay-700" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute inset-0 animate-pulse"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.18), transparent 70%)" }}
            />
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
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
            <div className="flex-1 text-white/70 text-sm md:text-base leading-relaxed">
              The AI-native platform underneath every practice — accelerating mapping, migration, observability, and agents across SAP, Microsoft, and modern data stacks.
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
