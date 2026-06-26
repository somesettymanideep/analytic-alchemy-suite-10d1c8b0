import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react";

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
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
      className="relative overflow-hidden py-24 md:py-32"
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

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div
            className={`inline-flex items-center gap-2.5 rounded-full border border-[#0B1F8C]/15 bg-white px-4 py-1.5 shadow-sm mb-6 ${
              sectionVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#0B1F8C]">
              Case Studies
            </span>
          </div>

          <h2
            className={`font-[Space_Grotesk] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#0B1F8C] ${
              sectionVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Proven in the{" "}
            <span className="relative inline-block">
              Field
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-[#F59E0B] rounded-full" />
            </span>
          </h2>

          <p
            className={`mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl ${
              sectionVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Real engagements. Real outcomes.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`group relative ${
                cardVisible[i] ? (i % 2 === 0 ? "animate-reveal-left" : "animate-reveal-right") : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 180}ms` }}
            >
              <article
                className={`relative h-full rounded-2xl border bg-white p-7 md:p-9 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-20px_rgba(11,31,140,0.18)] ${
                  study.accent === "blue"
                    ? "border-[#0B1F8C]/15 hover:border-[#0B1F8C]/40"
                    : "border-[#F59E0B]/25 hover:border-[#F59E0B]/60"
                }`}
              >
                {/* Top accent stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background:
                      study.accent === "blue"
                        ? "linear-gradient(90deg, #0B1F8C, #1e3a8a, #0B1F8C)"
                        : "linear-gradient(90deg, #F59E0B, #fbbf24, #F59E0B)",
                  }}
                />

                {/* Platform tag */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase ${
                      study.accent === "blue"
                        ? "bg-[#0B1F8C]/10 text-[#0B1F8C]"
                        : "bg-[#F59E0B]/15 text-[#0B1F8C]"
                    }`}
                  >
                    {study.platform}
                    <span className="text-slate-400">·</span>
                    {study.category}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 ${
                      study.accent === "blue" ? "bg-[#0B1F8C]/10" : "bg-[#F59E0B]/15"
                    }`}
                  >
                    <ArrowUpRight
                      className={`w-5 h-5 ${
                        study.accent === "blue" ? "text-[#0B1F8C]" : "text-[#F59E0B]"
                      }`}
                    />
                  </div>
                </div>

                {/* Client name */}
                <h3 className="font-[Space_Grotesk] text-2xl md:text-3xl font-bold text-[#0B1F8C] leading-tight">
                  {study.client}
                </h3>
                {study.clientNote && (
                  <p className="mt-1 text-sm font-medium text-slate-500">{study.clientNote}</p>
                )}

                {/* Stats grid */}
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="relative">
                      <div
                        className={`text-3xl md:text-4xl font-bold font-[Space_Grotesk] tabular-nums ${
                          study.accent === "blue" ? "text-[#0B1F8C]" : "text-[#F59E0B]"
                        }`}
                      >
                        <AnimatedCounter value={stat.value} active={cardVisible[i]} />
                      </div>
                      <div className="mt-1.5 text-[11px] uppercase tracking-wider text-slate-500 leading-tight">
                        {stat.label}
                      </div>
                      {/* Vertical divider */}
                      <div className="absolute right-0 top-1 bottom-1 w-px bg-slate-200 last:hidden" />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="mt-8 text-slate-600 leading-relaxed text-[15px] md:text-base">
                  {study.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-600 group-hover:border-[#0B1F8C]/20 group-hover:bg-[#0B1F8C]/5 transition-colors duration-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#F59E0B]" />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Bottom hover bar */}
                <div
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
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-14 md:mt-18 flex flex-col sm:flex-row items-center justify-center gap-4 ${
            sectionVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "500ms" }}
        >
          <a
            href="/case-study"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0B1F8C] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#0B1F8C]/90 transition-colors shadow-[0_12px_30px_-12px_rgba(11,31,140,0.4)]"
          >
            Explore all case studies
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="/ams-services"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#0B1F8C]/20 px-6 py-3.5 text-sm font-semibold text-[#0B1F8C] hover:border-[#0B1F8C]/40 hover:bg-[#0B1F8C]/5 transition-colors"
          >
            <TrendingUp className="w-4 h-4" />
            AMS Services
          </a>
        </div>
      </div>
    </section>
  );
}

