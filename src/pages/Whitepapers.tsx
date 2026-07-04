import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-ai-foundry.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Download,
  Eye,
  FileText,
  Filter,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Paper = {
  id: string;
  title: string;
  summary: string;
  industry: string;
  tech: string[];
  pages: number;
  featured?: boolean;
  image: string;
};

const PAPERS: Paper[] = [
  {
    id: "clean-core-playbook",
    title: "The Clean Core Playbook for European Enterprises",
    summary:
      "A 40-page architectural blueprint for moving heavily modified ECC estates to a Clean Core S/4HANA landscape without disrupting operations.",
    industry: "Manufacturing",
    tech: ["SAP S/4HANA", "BTP"],
    pages: 40,
    featured: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    id: "agentic-erp",
    title: "Agentic ERP: Reference Architecture for Production AI Agents",
    summary:
      "How to compose retrieval, orchestration, and evaluation layers into an agent programme your CIO will actually approve.",
    industry: "Cross-industry",
    tech: ["Azure AI Foundry", "SAP Joule"],
    pages: 32,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    id: "data-migration-benchmarks",
    title: "Data Migration Benchmarks: 24 European SAP Programmes",
    summary:
      "Field-level metrics on reconciliation accuracy, cycle time, and defect leakage across two years of BlueGecko rollouts.",
    industry: "Manufacturing",
    tech: ["BlueGecko", "SAP"],
    pages: 28,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "d365-finance-modernisation",
    title: "Modernising Finance on Dynamics 365 & Fabric",
    summary:
      "A reference stack for CFOs consolidating reporting, planning, and close on Microsoft's data platform.",
    industry: "Financial Services",
    tech: ["Dynamics 365", "Microsoft Fabric"],
    pages: 24,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  },
  {
    id: "healthcare-staffing-ai",
    title: "AI-Driven Talent Orchestration for Staffing Firms",
    summary:
      "Operating model for staffing firms embedding agentic matching into SAP BTP and Dynamics 365.",
    industry: "Healthcare",
    tech: ["SAP BTP", "Dynamics 365"],
    pages: 22,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    id: "snowflake-cortex-enterprise",
    title: "Enterprise Analytics with Snowflake Cortex",
    summary:
      "Governance-first patterns for shipping Cortex to production across regulated European enterprises.",
    industry: "Energy",
    tech: ["Snowflake", "Cortex"],
    pages: 26,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
];

const INDUSTRIES = ["All", "Manufacturing", "Financial Services", "Healthcare", "Energy", "Cross-industry"];
const TECHS = ["All", "SAP S/4HANA", "BTP", "Dynamics 365", "Microsoft Fabric", "BlueGecko", "Azure AI Foundry", "Snowflake", "SAP Joule", "Cortex", "SAP"];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
      }`}
    >
      {children}
    </button>
  );
}

function PaperCard({ paper }: { paper: Paper }) {
  return (
    <article className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={paper.image}
          alt={paper.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
        <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-background/95 backdrop-blur rounded-md px-2.5 py-1 shadow-md">
          <FileText size={12} className="text-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            {paper.pages} pages
          </span>
        </div>
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-background/90 backdrop-blur text-primary px-2 py-1 rounded-full">
          {paper.industry}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors">
          {paper.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 flex-1">{paper.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {paper.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted/60 rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold rounded-md bg-primary text-primary-foreground px-3 py-2 hover:bg-primary/90 transition">
            <Download size={13} /> Download
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold rounded-md border border-border/60 text-foreground px-3 py-2 hover:border-primary hover:text-primary transition">
            <Eye size={13} /> Preview
          </button>
        </div>
      </div>
    </article>
  );
}

export default function Whitepapers() {
  const [industry, setIndustry] = useState("All");
  const [tech, setTech] = useState("All");
  const filtered = useMemo(
    () =>
      PAPERS.filter(
        (p) =>
          (industry === "All" || p.industry === industry) &&
          (tech === "All" || p.tech.includes(tech))
      ),
    [industry, tech]
  );
  const featured = PAPERS.find((p) => p.featured)!;
  const reveal = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Whitepapers"
          title="Enterprise research, ready to ship"
          description="In-depth technical playbooks distilled from live SAP, Microsoft, and AI programmes across European enterprises."
        />

        {/* Featured */}
        <section className="container py-14 md:py-20" ref={reveal.ref}>
          <div
            className={`grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center ${
              reveal.isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <Sparkles size={14} /> Featured whitepaper
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold font-heading text-foreground text-balance leading-tight">
                {featured.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                {featured.summary}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {[
                  "Landscape scan template and prioritisation matrix",
                  "Target-state architecture with BTP extension patterns",
                  "12–18 month programme plan with named workstream owners",
                ].map((l) => (
                  <li key={l} className="flex gap-2">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" /> {l}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition">
                  <Download size={14} /> Download PDF
                </button>
                <button className="inline-flex items-center gap-2 rounded-md border border-border/60 px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition">
                  <Eye size={14} /> Preview
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-border/60 bg-card p-8 md:p-10 shadow-2xl">
                <div className="aspect-[3/4] rounded-xl bg-gradient-to-br from-primary via-primary/85 to-accent/70 overflow-hidden relative">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute inset-6 flex flex-col justify-between text-primary-foreground">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">nextgenlytics · Whitepaper</p>
                      <h3 className="mt-2 text-xl md:text-2xl font-bold font-heading leading-snug">
                        Clean Core Playbook
                      </h3>
                    </div>
                    <div>
                      <p className="text-xs opacity-80">40 pages · May 2025</p>
                      <p className="mt-2 text-[10px] font-bold uppercase tracking-widest opacity-80">nextgenlytics.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters + grid */}
        <section className="section-alt py-14">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={14} className="text-muted-foreground" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Industry</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {INDUSTRIES.map((i) => (
                <Chip key={i} active={industry === i} onClick={() => setIndustry(i)}>
                  {i}
                </Chip>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-6 mb-4">
              <Filter size={14} className="text-muted-foreground" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Technology</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {TECHS.map((t) => (
                <Chip key={t} active={tech === t} onClick={() => setTech(t)}>
                  {t}
                </Chip>
              ))}
            </div>

            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <PaperCard key={p.id} paper={p} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="mt-10 text-center text-muted-foreground text-sm">No whitepapers match those filters.</p>
            )}
          </div>
        </section>

        {/* Stats */}
        <section className="container py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "60+", l: "Research assets published" },
              { v: "12k+", l: "Enterprise downloads" },
              { v: "24", l: "European clients cited" },
              { v: "9", l: "Industries covered" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-card border border-border/60 p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold font-heading text-primary">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section-alt py-14">
          <div className="container max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground text-center">
              Frequently asked
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {[
                {
                  q: "Are these whitepapers free?",
                  a: "Yes. Every asset on this page is free to download. We may occasionally ask for your work email so we can send you follow-up research on the same topic.",
                },
                {
                  q: "Can I share them internally?",
                  a: "Yes — please do. Share links or the PDF freely within your organisation. Republishing externally requires attribution to nextgenlytics.",
                },
                {
                  q: "Do you write custom research?",
                  a: "For enterprise engagements, yes. Our practice leads regularly co-author internal research with client CIOs and architecture teams.",
                },
              ].map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="container py-16">
          <div className="rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-accent/80 p-10 md:p-14 text-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold font-heading text-primary-foreground">
                Need research shaped to your programme?
              </h3>
              <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">
                Our practice leads co-author diagnostic reports with your architecture team in under two weeks.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-background text-primary px-6 py-3 text-sm font-semibold hover:bg-background/90 transition"
              >
                Talk to a practice lead <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}