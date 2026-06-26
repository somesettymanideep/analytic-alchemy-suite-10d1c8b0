import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  index: string;
  category: string;
  platform: string;
  client: string;
  clientNote: string;
  stats: Stat[];
  description: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "sap-bed",
    index: "01",
    category: "SAP · Data Migration",
    platform: "SAP",
    client: "European Bed Manufacturer",
    clientNote: "Manufacturing · EU",
    stats: [
      { value: "4", label: "Countries" },
      { value: "250+", label: "Dealers & studios" },
      { value: "40+", label: "Enterprise KPIs unified" },
    ],
    description:
      "Data strategy advisory across 32 stakeholders and 39 workshops, S/4HANA Public Cloud migration, and SAP Datasphere analytics unifying 4 fragmented warehouses.",
    tags: ["SAP", "S/4HANA", "Datasphere", "Azure", "Power BI"],
  },
  {
    id: "microsoft-nash",
    index: "02",
    category: "Microsoft · AMS & Automation",
    platform: "MICROSOFT",
    client: "Nash Squared",
    clientNote: "Global Tech & Talent",
    stats: [
      { value: "70+", label: "Legal entities" },
      { value: "9", label: "Countries" },
      { value: "24/7", label: "Automated processing" },
    ],
    description:
      "D365 F&O managed services across 6 ISVs, financial process automation, and e-invoice automation via Azure Logic Apps — manual effort eliminated.",
    tags: ["Dynamics 365", "Azure", "Logic Apps", "Fabric", "AI"],
  },
];

function AnimatedCounter({ value, active }: { value: string; active: boolean }) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (!active || hasRun.current) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      hasRun.current = true;
      return;
    }
    const numeric = parseInt(match[1], 10);
    const suffix = match[2];
    hasRun.current = true;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${Math.round(numeric * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);

  return <span className="tabular-nums">{display}</span>;
}

export default function ProvenInFieldSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Sticky scroll progression
  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      const idx = Math.min(caseStudies.length - 1, Math.floor(p * caseStudies.length * 0.999));
      setActiveIndex(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      aria-labelledby="proven-heading"
      className="relative overflow-hidden"
      style={{
        background: "#FAFBFD",
        backgroundImage:
          "linear-gradient(rgba(11,75,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(11,75,255,0.04) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      {/* Background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-40 w-[720px] h-[720px] rounded-full blur-3xl"
        style={{ background: "#0B4BFF", opacity: 0.06, animation: "float-glow 22s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-40 w-[640px] h-[640px] rounded-full blur-3xl"
        style={{ background: "#FFC72C", opacity: 0.06, animation: "float-glow 26s ease-in-out infinite reverse" }}
      />

      {/* Header */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0B4BFF]/15 bg-white/70 backdrop-blur px-4 py-1.5 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FFC72C]" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0B4BFF]">
            Proven in the field
          </span>
        </div>
        <h2
          id="proven-heading"
          className="font-[Playfair_Display,'Space_Grotesk',serif] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight text-[#081A45]"
        >
          Real Engagements.
          <br />
          <span className="italic font-light text-[#0B4BFF]">Real Outcomes.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg text-slate-600 leading-relaxed">
          Two flagship enterprise transformations across SAP and Microsoft — delivered end-to-end by
          NGSIT teams. Scroll to read the stories.
        </p>
      </div>

      {/* Sticky scroll storytelling */}
      <div
        ref={containerRef}
        className="relative max-w-[1400px] mx-auto px-6 lg:px-10"
        style={{ height: `${caseStudies.length * 100}vh` }}
      >
        <div className="sticky top-0 h-screen flex items-center">
          <div className="grid grid-cols-12 gap-10 w-full">
            {/* LEFT — Sticky index */}
            <aside className="col-span-12 lg:col-span-4 hidden lg:flex flex-col justify-center">
              <div className="text-[11px] font-semibold tracking-[0.3em] uppercase text-slate-500 mb-6">
                Case Study {String(activeIndex + 1).padStart(2, "0")} / {String(caseStudies.length).padStart(2, "0")}
              </div>
              <div className="font-[Space_Grotesk] text-[7rem] xl:text-[9rem] font-extrabold leading-none bg-gradient-to-br from-[#0B4BFF] to-[#081A45] bg-clip-text text-transparent transition-all duration-700">
                {caseStudies[activeIndex].index}
              </div>
              <div className="mt-8 max-w-xs">
                <div className="text-[11px] tracking-[0.25em] uppercase text-[#FFC72C] font-semibold mb-3">
                  {caseStudies[activeIndex].category}
                </div>
                <h3 className="font-[Playfair_Display,serif] text-3xl xl:text-4xl text-[#081A45] leading-tight transition-all duration-700">
                  {caseStudies[activeIndex].client}
                </h3>
                <p className="mt-3 text-sm text-slate-500">{caseStudies[activeIndex].clientNote}</p>
              </div>

              {/* Progress indicator */}
              <ol className="mt-10 space-y-4">
                {caseStudies.map((s, i) => {
                  const isActive = i === activeIndex;
                  const isPast = i < activeIndex;
                  return (
                    <li key={s.id} className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs w-6 transition-colors ${
                          isActive ? "text-[#0B4BFF] font-bold" : isPast ? "text-slate-400" : "text-slate-300"
                        }`}
                      >
                        {s.index}
                      </span>
                      <span className="relative block h-[2px] flex-1 bg-slate-200 overflow-hidden rounded-full">
                        <span
                          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0B4BFF] to-[#FFC72C] transition-all duration-700 ease-out"
                          style={{
                            width: isPast ? "100%" : isActive ? `${Math.min(100, (progress * caseStudies.length - i) * 100)}%` : "0%",
                          }}
                        />
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full border transition-all ${
                          isActive
                            ? "bg-[#FFC72C] border-[#FFC72C] scale-125"
                            : isPast
                            ? "bg-[#0B4BFF] border-[#0B4BFF]"
                            : "bg-white border-slate-300"
                        }`}
                      />
                    </li>
                  );
                })}
              </ol>
            </aside>

            {/* RIGHT — Animated cards stack */}
            <div className="col-span-12 lg:col-span-8 relative h-[560px] md:h-[600px]">
              {caseStudies.map((study, i) => {
                const isActive = i === activeIndex;
                const isPast = i < activeIndex;
                const isFuture = i > activeIndex;
                return (
                  <article
                    key={study.id}
                    aria-hidden={!isActive}
                    className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateY(0) scale(1)"
                        : isFuture
                        ? `translateY(${i % 2 === 0 ? "120px" : "80px"}) translateX(${i % 2 === 0 ? "0" : "60px"}) scale(0.95)`
                        : "translateY(-80px) scale(0.96)",
                      pointerEvents: isActive ? "auto" : "none",
                      zIndex: isActive ? 10 : 1,
                    }}
                  >
                    <CaseCard study={study} active={isActive} />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="h-24" />

      <style>{`
        @keyframes float-glow {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(40px,-30px); }
        }
        @keyframes pill-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  );
}

function CaseCard({ study, active }: { study: CaseStudy; active: boolean }) {
  return (
    <div className="group relative h-full w-full rounded-[28px] bg-white p-7 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_120px_-30px_rgba(11,75,255,0.35)] overflow-hidden"
      style={{ boxShadow: "0 25px 80px rgba(8,26,69,0.08)" }}
    >
      {/* Animated gradient left border */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-[5px] rounded-l-[28px] overflow-hidden"
      >
        <div
          className="w-full transition-all duration-1000 ease-out"
          style={{
            height: active ? "100%" : "0%",
            background: "linear-gradient(180deg, #FFC72C 0%, #FF8A3D 40%, #0B4BFF 100%)",
          }}
        />
      </div>

      {/* Top meta */}
      <div className="flex items-start justify-between gap-4 pl-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0B4BFF] to-[#081A45] text-white flex items-center justify-center font-[Space_Grotesk] font-bold text-xs tracking-wider">
            LOGO
          </div>
          <div>
            <div className="text-[10px] tracking-[0.28em] uppercase font-semibold text-[#0B4BFF]">
              {study.category}
            </div>
            <div className="text-[15px] font-semibold text-[#081A45] mt-0.5">{study.client}</div>
          </div>
        </div>
        <span className="font-[Space_Grotesk] text-xs font-bold tracking-[0.25em] text-slate-300">
          {study.index} / {String(caseStudies.length).padStart(2, "0")}
        </span>
      </div>

      {/* KPIs */}
      <div className="mt-8 pl-3 grid grid-cols-3 gap-4 md:gap-6">
        {study.stats.map((s, i) => (
          <div key={s.label} className="relative">
            <div className="font-[Space_Grotesk] text-3xl md:text-5xl font-extrabold tabular-nums leading-none bg-gradient-to-br from-[#0B4BFF] to-[#081A45] bg-clip-text text-transparent">
              <Counter value={s.value} active={active} delay={i * 120} />
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500 leading-tight">
              {s.label}
            </div>
            <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#FFC72C] to-transparent" />
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-8 pl-3 max-w-2xl text-[15px] md:text-base text-slate-600 leading-relaxed">
        {study.description}
      </p>

      {/* Floating tech pills */}
      <div className="mt-8 pl-3 flex flex-wrap gap-2">
        {study.tags.map((t, i) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-[#0B4BFF]/15 bg-[#0B4BFF]/[0.04] px-3 py-1.5 text-[11px] font-medium text-[#081A45]"
            style={{ animation: active ? `pill-float 4s ease-in-out ${i * 0.2}s infinite` : "none" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="absolute bottom-7 md:bottom-10 left-10 right-10 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
          Programme highlights
        </span>
        <a
          href="/case-study"
          className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#081A45] px-5 py-3 text-xs font-semibold text-white transition-all hover:bg-[#0B4BFF]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#0B4BFF] to-[#FFC72C] transition-transform duration-500 group-hover/btn:translate-x-0" />
          <span className="relative">View Full Case Study</span>
          <ArrowRight className="relative w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </a>
      </div>

      {/* Corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "#0B4BFF", opacity: 0.08 }}
      />
    </div>
  );
}

function Counter({ value, active, delay = 0 }: { value: string; active: boolean; delay?: number }) {
  const [display, setDisplay] = useState(value);
  const ran = useRef(false);
  useEffect(() => {
    if (!active) return;
    if (ran.current) return;
    ran.current = true;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return setDisplay(value);
    const num = parseInt(match[1], 10);
    const suffix = match[2];
    const start = performance.now() + delay;
    const dur = 1400;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.max(0, now - start);
      const p = Math.min(t / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(`${Math.round(num * eased)}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value, delay]);
  return <span>{display}</span>;
}

