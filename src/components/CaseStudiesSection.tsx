import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight } from "lucide-react";
import caseManufacturing from "@/assets/case-manufacturing.jpg";
import caseProfessional from "@/assets/case-professional-services.jpg";
import caseGovernance from "@/assets/case-data-governance.jpg";

const cases = [
  {
    image: caseManufacturing,
    industry: "Manufacturing · AX 2012 → SAP S/4HANA",
    title: "Enterprise ERP Migration",
    desc: "Multi-country programme across 250+ locations. BlueGecko-driven migration reduced timeline by half.",
    stat: "50%",
    statLabel: "Timeline Reduction",
  },
  {
    image: caseProfessional,
    industry: "Professional Services · D365 F&O AMS",
    title: "Global AMS Transition",
    desc: "70+ legal entities across 9 countries. Zero-incident go-live under a named offshore delivery team.",
    stat: "0",
    statLabel: "Go-Live Incidents",
  },
  {
    image: caseGovernance,
    industry: "Data Governance · BlueGecko",
    title: "Enterprise AI Governance",
    desc: "Multi-system governance architecture with full audit trail, PII detection, and human-in-the-loop AI.",
    stat: "100%",
    statLabel: "Human-Approved AI",
  },
];

export default function CaseStudiesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="cases" ref={ref} className="relative py-24 md:py-36 bg-[#F8FAFC] overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E66]/5 text-[#0B1E66] text-xs font-semibold tracking-widest uppercase mb-6">
            Case studies
          </div>
          <h2 className={`font-display font-extrabold text-[#081A45] leading-[1.02] text-4xl md:text-5xl lg:text-[3.5rem] text-balance ${isVisible ? "animate-pop-in" : "opacity-0"}`}>
            Enterprise programmes,<br />
            <span className="bg-gradient-to-r from-[#0B1E66] to-[#3B82F6] bg-clip-text text-transparent">shipped.</span>
          </h2>
        </div>

        <div className="space-y-8">
          {cases.map((c, i) => (
            <a
              href="#"
              key={c.title}
              className={`group relative block rounded-card overflow-hidden bg-dark-navy text-white premium-shadow hover:-translate-y-1 hover:premium-glow transition-all duration-500 ${isVisible ? "animate-pop-in" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="relative h-64 md:h-auto overflow-hidden" style={{ direction: "ltr" }}>
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081A45] via-[#081A45]/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#081A45]" />
                </div>
                <div className="relative p-8 md:p-14 flex flex-col justify-center" style={{ direction: "ltr" }}>
                  <div className="text-xs font-semibold tracking-widest uppercase text-cyan-300 mb-4">
                    {c.industry}
                  </div>
                  <h3 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">{c.title}</h3>
                  <p className="text-white/70 font-premium leading-relaxed mb-8 max-w-md">{c.desc}</p>

                  <div className="flex items-end gap-6 mb-8">
                    <div className="font-display font-extrabold text-6xl md:text-7xl leading-none bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-transparent">
                      {c.stat}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-white/60 pb-3">
                      {c.statLabel}
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 group-hover:gap-4 transition-all">
                    Read Story <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
