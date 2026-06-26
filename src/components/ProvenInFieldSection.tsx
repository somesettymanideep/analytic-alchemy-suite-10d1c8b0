import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingUp, ArrowUpRight, CheckCircle2, Quote } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  category: string;
  platform: string;
  client: string;
  clientNote?: string;
  stats: Stat[];
  description: string;
  highlights: string[];
  accent: "blue" | "yellow";
}

const caseStudies: CaseStudy[] = [
  {
    id: "sap-bed",
    category: "DATA STRATEGY & MIGRATION",
    platform: "SAP",
    client: "European Bed Manufacturer",
    clientNote: "Manufacturing · EU",
    stats: [
      { value: "4", label: "Countries" },
      { value: "250+", label: "Dealers & studios" },
      { value: "40+", label: "Enterprise KPIs unified" },
    ],
    description:
      "Data strategy advisory (32 stakeholders, 39 workshops), S/4HANA Public Cloud migration, and SAP Datasphere analytics unifying 4 fragmented warehouses.",
    highlights: ["S/4HANA Public Cloud", "SAP Datasphere", "39 workshops", "4 warehouses unified"],
    accent: "blue",
  },
  {
    id: "microsoft-nash",
    category: "AMS & AUTOMATION",
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
    highlights: ["D365 F&O", "Azure Logic Apps", "E-invoice automation", "6 ISVs"],
    accent: "yellow",
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
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.08);
  const cardRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [cardVisible, setCardVisible] = useState<boolean[]>(() => new Array(caseStudies.length).fill(false));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    cardRefs.current.forEach((node, i) => {
      if (!node) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
            io.unobserve(node);
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
      );
      io.observe(node);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="proven-heading"
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)" }}
    >
      {/* Soft background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #0B1F8C18, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, #F59E0B18, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0B1F8C]/15 to-transparent"
      />

      <div className="container relative z-10">
        {/* Section header — editorial split */}
        <header className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-14 md:mb-20 items-end">
          <div className="lg:col-span-8">
            <div
              className={`inline-flex items-center gap-2.5 rounded-full border border-[#0B1F8C]/15 bg-white px-4 py-1.5 shadow-sm mb-6 ${
                sectionVisible ? "animate-reveal-up" : "opacity-0"
              }`}
            >
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
              <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#0B1F8C]">
                Case Studies
              </span>
            </div>

            <h2
              id="proven-heading"
              className={`font-[Space_Grotesk] text-[2.25rem] sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#0B1F8C] ${
                sectionVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              Proven in the{" "}
              <span className="relative inline-block">
                Field
                <span aria-hidden className="absolute -bottom-2 left-0 right-0 h-1.5 bg-[#F59E0B] rounded-full" />
              </span>
            </h2>

            <p
              className={`mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-xl ${
                sectionVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              Real engagements. Real outcomes. Two flagship transformations across SAP and Microsoft —
              delivered end-to-end by NGSIT teams.
            </p>
          </div>

          <dl
            className={`lg:col-span-4 grid grid-cols-3 gap-4 lg:gap-6 lg:border-l lg:border-slate-200 lg:pl-8 ${
              sectionVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "260ms" }}
            aria-label="Programme summary"
          >
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Studies</dt>
              <dd className="mt-1 text-3xl font-bold text-[#0B1F8C] font-[Space_Grotesk]">02</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Platforms</dt>
              <dd className="mt-1 text-3xl font-bold text-[#0B1F8C] font-[Space_Grotesk]">SAP · MS</dd>
            </div>
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Coverage</dt>
              <dd className="mt-1 text-3xl font-bold text-[#F59E0B] font-[Space_Grotesk]">EU+</dd>
            </div>
          </dl>
        </header>

        {/* Case study cards */}
        <ul role="list" className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <li
              key={study.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`group relative ${
                cardVisible[i] ? (i % 2 === 0 ? "animate-reveal-left" : "animate-reveal-right") : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 180}ms` }}
            >
              <article
                aria-labelledby={`cs-${study.id}-title`}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white p-6 sm:p-7 md:p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-20px_rgba(11,31,140,0.22)] focus-within:ring-2 focus-within:ring-[#0B1F8C]/40 focus-within:ring-offset-2 ${
                  study.accent === "blue"
                    ? "border-[#0B1F8C]/15 hover:border-[#0B1F8C]/45"
                    : "border-[#F59E0B]/25 hover:border-[#F59E0B]/65"
                }`}
              >
                {/* Top accent stripe */}
                <div
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background:
                      study.accent === "blue"
                        ? "linear-gradient(90deg, #0B1F8C, #1e3a8a, #0B1F8C)"
                        : "linear-gradient(90deg, #F59E0B, #fbbf24, #F59E0B)",
                  }}
                />

                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-bold tracking-[0.22em] uppercase ${
                        study.accent === "blue"
                          ? "bg-[#0B1F8C] text-white"
                          : "bg-[#F59E0B] text-[#0B1F8C]"
                      }`}
                    >
                      {study.platform}
                    </span>
                    <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-600">
                      {study.category}
                    </span>
                  </div>
                  <span aria-hidden className="font-[Space_Grotesk] text-xs font-bold tracking-[0.2em] text-slate-400">
                    0{i + 1} / 0{caseStudies.length}
                  </span>
                </div>

                {/* Client name */}
                <h3
                  id={`cs-${study.id}-title`}
                  className="font-[Space_Grotesk] text-2xl sm:text-3xl md:text-[2rem] font-bold text-[#0B1F8C] leading-[1.1] tracking-tight"
                >
                  {study.client}
                </h3>
                {study.clientNote && (
                  <p className="mt-1.5 text-sm font-medium text-slate-500">{study.clientNote}</p>
                )}

                {/* Stats grid */}
                <dl
                  className="mt-7 grid grid-cols-3 gap-3 sm:gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5"
                  aria-label={`Key metrics for ${study.client}`}
                >
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="relative px-1">
                      <dt className="sr-only">{stat.label}</dt>
                      <dd
                        className={`text-2xl sm:text-3xl md:text-4xl font-bold font-[Space_Grotesk] tabular-nums leading-none ${
                          study.accent === "blue" ? "text-[#0B1F8C]" : "text-[#F59E0B]"
                        }`}
                      >
                        <AnimatedCounter value={stat.value} active={cardVisible[i]} />
                      </dd>
                      <div aria-hidden className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </dl>

                {/* Description */}
                <p className="mt-6 text-slate-600 leading-relaxed text-[15px] md:text-base">
                  {study.description}
                </p>

                {/* Highlights */}
                <ul role="list" className="mt-6 flex flex-wrap gap-2">
                  {study.highlights.map((h) => (
                    <li key={h}>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-700 group-hover:border-[#0B1F8C]/25 group-hover:bg-[#0B1F8C]/5 transition-colors duration-300">
                        <CheckCircle2 aria-hidden className="w-3 h-3 text-[#F59E0B]" />
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer link */}
                <div className="mt-auto pt-7 flex items-center justify-between gap-4 border-t border-slate-100 mt-7">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Programme highlights
                  </span>
                  <a
                    href="/case-study"
                    aria-label={`Read the full ${study.client} case study`}
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 min-h-11 ${
                      study.accent === "blue"
                        ? "text-[#0B1F8C] hover:bg-[#0B1F8C] hover:text-white focus-visible:ring-[#0B1F8C]"
                        : "text-[#0B1F8C] hover:bg-[#F59E0B] focus-visible:ring-[#F59E0B]"
                    }`}
                  >
                    Read case
                    <ArrowUpRight aria-hidden className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                {/* Bottom hover bar */}
                <div
                  aria-hidden
                  className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      study.accent === "blue"
                        ? "linear-gradient(90deg, transparent, #0B1F8C, transparent)"
                        : "linear-gradient(90deg, transparent, #F59E0B, transparent)",
                  }}
                />

                {/* Corner decoration */}
                <div
                  aria-hidden
                  className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${
                      study.accent === "blue" ? "#0B1F8C10" : "#F59E0B12"
                    }, transparent 70%)`,
                  }}
                />
              </article>
            </li>
          ))}
        </ul>

        {/* Bottom CTA */}
        <div
          className={`mt-14 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 ${
            sectionVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="/case-study"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#0B1F8C] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#0B1F8C]/90 active:scale-[0.98] transition-all shadow-[0_12px_30px_-12px_rgba(11,31,140,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F8C] focus-visible:ring-offset-2 min-h-11"
          >
            Explore all case studies
            <ArrowUpRight aria-hidden className="w-4 h-4" />
          </a>
          <a
            href="/ams-services"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border-2 border-[#0B1F8C]/20 px-6 py-3.5 text-sm font-semibold text-[#0B1F8C] hover:border-[#0B1F8C]/40 hover:bg-[#0B1F8C]/5 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F8C] focus-visible:ring-offset-2 min-h-11"
          >
            <TrendingUp aria-hidden className="w-4 h-4" />
            AMS Services
          </a>
        </div>
      </div>
    </section>
  );
}

