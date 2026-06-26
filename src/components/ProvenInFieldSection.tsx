import { useEffect, useRef, useState, useCallback, KeyboardEvent } from "react";
import { ArrowRight, Database, Cpu, Globe2, Building2, CheckCircle2 } from "lucide-react";

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
  highlights: string[];
  tags: string[];
  accent: string;
  icon: typeof Database;
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
    highlights: [
      "32 stakeholders aligned across 39 workshops",
      "S/4HANA Public Cloud go-live in 4 countries",
      "4 warehouses unified into one Datasphere model",
    ],
    tags: ["SAP", "S/4HANA", "Datasphere", "Azure", "Power BI"],
    accent: "#0B4BFF",
    icon: Building2,
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
    highlights: [
      "D365 F&O AMS across 6 ISVs in production",
      "Finance close automation across 70+ entities",
      "E-invoicing via Azure Logic Apps, fully unattended",
    ],
    tags: ["Dynamics 365", "Azure", "Logic Apps", "Fabric", "AI"],
    accent: "#FFC72C",
    icon: Cpu,
  },
];

export default function ProvenInFieldSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onTabKey = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % caseStudies.length);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + caseStudies.length) % caseStudies.length);
      } else if (e.key === "Home") {
        e.preventDefault();
        setActiveIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setActiveIndex(caseStudies.length - 1);
      }
    },
    [],
  );

  const active = caseStudies[activeIndex];

  return (
    <section
      ref={sectionRef}
      aria-labelledby="proven-heading"
      className="relative overflow-hidden bg-[#FAFBFD]"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,75,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,75,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 30%, black 30%, transparent 80%)",
        }}
      />
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full blur-3xl"
        style={{ background: "#0B4BFF", opacity: 0.07 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full blur-3xl"
        style={{ background: "#FFC72C", opacity: 0.06 }}
      />

      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-20 md:py-28 lg:py-32">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 transition-all duration-700 ${
            revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0B4BFF]/20 bg-white px-3.5 py-1.5 mb-6 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FFC72C]" />
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.28em] uppercase text-[#0B4BFF]">
                Proven in the field
              </span>
            </div>
            <h2
              id="proven-heading"
              className="font-[Playfair_Display,'Space_Grotesk',serif] text-[2.25rem] sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[#081A45]"
            >
              Real engagements.{" "}
              <span className="italic font-light text-[#0B4BFF]">
                Real outcomes.
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Two flagship enterprise transformations — SAP and Microsoft — delivered
              end-to-end by NGSIT teams.
            </p>
          </div>

          {/* Quick stats summary */}
          <dl className="grid grid-cols-3 gap-6 sm:gap-10 lg:text-right">
            {[
              { v: "2", l: "Flagship cases" },
              { v: "13", l: "Countries" },
              { v: "320+", l: "Entities served" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-[10px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
                  {s.l}
                </dt>
                <dd className="mt-1.5 font-[Space_Grotesk] text-2xl sm:text-3xl font-bold text-[#081A45] tabular-nums">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Case studies"
          className="mt-12 md:mt-16 flex flex-wrap gap-3"
        >
          {caseStudies.map((s, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={s.id}
                role="tab"
                id={`proven-tab-${s.id}`}
                aria-selected={isActive}
                aria-controls={`proven-panel-${s.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                onKeyDown={onTabKey}
                className={`group inline-flex items-center gap-3 rounded-full border px-4 py-2.5 text-sm font-medium transition-all min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4BFF] focus-visible:ring-offset-2 ${
                  isActive
                    ? "border-[#0B4BFF] bg-[#0B4BFF] text-white shadow-[0_10px_30px_-10px_rgba(11,75,255,0.5)]"
                    : "border-slate-200 bg-white text-[#081A45] hover:border-[#0B4BFF]/40 hover:bg-[#0B4BFF]/[0.04]"
                }`}
              >
                <span
                  className={`font-mono text-[11px] font-bold ${
                    isActive ? "text-[#FFC72C]" : "text-slate-400"
                  }`}
                >
                  {s.index}
                </span>
                <span className="hidden xs:inline">{s.platform}</span>
                <span className="sm:inline truncate max-w-[180px] sm:max-w-none">
                  {s.client}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panels */}
        <div className="mt-8 md:mt-10">
          {caseStudies.map((s, i) => (
            <CasePanel
              key={s.id}
              study={s}
              active={i === activeIndex}
              caseCount={caseStudies.length}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-14 md:mt-20 rounded-2xl border border-[#0B4BFF]/15 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-[0_20px_60px_-30px_rgba(11,75,255,0.25)]">
          <div className="flex items-start gap-4">
            <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-[#0B4BFF] to-[#081A45] text-white flex items-center justify-center">
              <Globe2 className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.28em] text-[#0B4BFF] font-semibold">
                Want the full deck?
              </div>
              <p className="text-[15px] sm:text-base text-[#081A45] mt-1.5 font-medium">
                Browse every NGSIT engagement — SAP, Microsoft, Databricks and beyond.
              </p>
            </div>
          </div>
          <a
            href="/case-study"
            className="group inline-flex items-center gap-2 rounded-full bg-[#081A45] px-6 py-3.5 text-sm font-semibold text-white min-h-11 transition-all hover:bg-[#0B4BFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4BFF] focus-visible:ring-offset-2"
          >
            All case studies
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function CasePanel({
  study,
  active,
  caseCount,
}: {
  study: CaseStudy;
  active: boolean;
  caseCount: number;
}) {
  const Icon = study.icon;
  return (
    <article
      id={`proven-panel-${study.id}`}
      role="tabpanel"
      aria-labelledby={`proven-tab-${study.id}`}
      hidden={!active}
      className={`relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-[0_30px_80px_-40px_rgba(8,26,69,0.25)] ${
        active ? "animate-fade-in" : ""
      }`}
    >
      {/* Accent rail */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{
          background: `linear-gradient(180deg, ${study.accent} 0%, #081A45 100%)`,
        }}
      />
      {/* Corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full blur-3xl"
        style={{ background: study.accent, opacity: 0.1 }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* LEFT — identity */}
        <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 lg:border-r lg:border-slate-200/80 relative">
          <div className="flex items-center justify-between gap-4">
            <div
              className="h-14 w-14 rounded-2xl flex items-center justify-center text-white shrink-0"
              style={{
                background: `linear-gradient(135deg, ${study.accent} 0%, #081A45 100%)`,
              }}
            >
              <Icon className="w-6 h-6" aria-hidden="true" />
            </div>
            <span className="font-mono text-xs font-bold tracking-[0.3em] text-slate-300">
              {study.index} / {String(caseCount).padStart(2, "0")}
            </span>
          </div>

          <div className="mt-6">
            <div className="text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-semibold text-[#0B4BFF]">
              {study.category}
            </div>
            <h3 className="mt-3 font-[Playfair_Display,serif] text-2xl sm:text-3xl lg:text-4xl text-[#081A45] leading-tight">
              {study.client}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{study.clientNote}</p>
          </div>

          <p className="mt-6 text-[15px] text-slate-600 leading-relaxed">
            {study.description}
          </p>

          <div className="mt-8">
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-semibold mb-3">
              Tech stack
            </div>
            <ul className="flex flex-wrap gap-2">
              {study.tags.map((t) => (
                <li key={t}>
                  <span className="inline-flex items-center rounded-full border border-[#0B4BFF]/15 bg-[#0B4BFF]/[0.04] px-3 py-1.5 text-[11px] font-medium text-[#081A45]">
                    {t}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — outcomes */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#FAFBFD] to-white">
          <div className="text-[10px] uppercase tracking-[0.28em] text-[#FFC72C] font-bold mb-6">
            Outcomes delivered
          </div>
          <dl className="grid grid-cols-3 gap-4 sm:gap-8">
            {study.stats.map((s, i) => (
              <div key={s.label} className="relative">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-[Space_Grotesk] text-3xl sm:text-4xl lg:text-5xl font-extrabold tabular-nums leading-none bg-gradient-to-br from-[#0B4BFF] to-[#081A45] bg-clip-text text-transparent">
                  <Counter value={s.value} active={active} delay={i * 120} />
                </dd>
                <div
                  aria-hidden
                  className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-[#FFC72C] to-transparent"
                />
                <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-slate-500 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </dl>

          <hr className="my-8 border-slate-200" />

          <div className="text-[10px] uppercase tracking-[0.28em] text-[#0B4BFF] font-bold mb-4">
            Programme highlights
          </div>
          <ul className="space-y-3">
            {study.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[15px] text-slate-700 leading-relaxed">
                <CheckCircle2
                  className="w-5 h-5 mt-0.5 shrink-0 text-[#0B4BFF]"
                  aria-hidden="true"
                />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:justify-between">
            <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
              End-to-end · NGSIT
            </span>
            <a
              href="/case-study"
              className="group inline-flex items-center gap-2 rounded-full bg-[#081A45] px-5 py-3 text-xs font-semibold text-white min-h-11 transition-all hover:bg-[#0B4BFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4BFF] focus-visible:ring-offset-2"
              aria-label={`Read full case study: ${study.client}`}
            >
              View full case study
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </article>
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

