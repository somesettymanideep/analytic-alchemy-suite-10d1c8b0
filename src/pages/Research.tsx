import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-data-led-ai.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Clock, Download, Filter, Share2, Sparkles } from "lucide-react";

type Report = {
  id: string;
  title: string;
  summary: string;
  category: string;
  industry: string;
  country: string;
  tech: string;
  year: number;
  readingTime: string;
  metrics: { label: string; value: string }[];
  cover: string;
};

const REPORTS: Report[] = [
  {
    id: "european-erp-outlook-2026",
    title: "European Enterprise ERP Outlook 2026",
    summary:
      "State of S/4HANA adoption, Clean Core readiness, and Joule pilot maturity across 240 European enterprises.",
    category: "SAP Research",
    industry: "Cross-industry",
    country: "Europe",
    tech: "SAP",
    year: 2026,
    readingTime: "18 min",
    metrics: [
      { label: "Enterprises surveyed", value: "240" },
      { label: "Clean Core ready", value: "34%" },
      { label: "Joule in production", value: "11%" },
    ],
    cover: "from-primary to-accent",
  },
  {
    id: "agentic-ai-benchmarks",
    title: "Agentic AI Benchmarks: What's Actually in Production",
    summary:
      "Measured latency, cost, and evaluation scores across 42 production agent deployments on Azure and Databricks.",
    category: "AI Insights",
    industry: "Cross-industry",
    country: "Europe",
    tech: "Azure AI Foundry",
    year: 2026,
    readingTime: "14 min",
    metrics: [
      { label: "Agents benchmarked", value: "42" },
      { label: "Median p95 latency", value: "1.4s" },
      { label: "Eval pass rate", value: "87%" },
    ],
    cover: "from-primary/90 to-primary/60",
  },
  {
    id: "manufacturing-digital-thread",
    title: "The Digital Thread in European Manufacturing",
    summary:
      "How discrete manufacturers are unifying MES, ERP, and IoT telemetry into a single planning-ready fabric.",
    category: "Industry Reports",
    industry: "Manufacturing",
    country: "DACH",
    tech: "SAP",
    year: 2025,
    readingTime: "12 min",
    metrics: [
      { label: "Plants studied", value: "58" },
      { label: "Downtime reduction", value: "22%" },
      { label: "OEE uplift", value: "9pt" },
    ],
    cover: "from-accent to-primary",
  },
  {
    id: "fabric-vs-databricks",
    title: "Microsoft Fabric vs Databricks: A Decision Framework",
    summary:
      "A workload-by-workload framework for enterprises choosing between Fabric and Databricks in 2026.",
    category: "Microsoft Research",
    industry: "Financial Services",
    country: "Netherlands",
    tech: "Microsoft Fabric",
    year: 2026,
    readingTime: "16 min",
    metrics: [
      { label: "Workloads mapped", value: "18" },
      { label: "Cost delta observed", value: "±34%" },
      { label: "Reference clients", value: "9" },
    ],
    cover: "from-primary to-primary/70",
  },
  {
    id: "data-engineering-maturity",
    title: "Data Engineering Maturity in European Enterprises",
    summary:
      "A five-stage maturity model with self-assessment benchmarks against 180 European data organisations.",
    category: "Data Engineering",
    industry: "Cross-industry",
    country: "Europe",
    tech: "Snowflake",
    year: 2025,
    readingTime: "11 min",
    metrics: [
      { label: "Organisations", value: "180" },
      { label: "At Stage 4+", value: "27%" },
      { label: "AI-ready", value: "18%" },
    ],
    cover: "from-accent/90 to-primary/80",
  },
  {
    id: "digital-transformation-index",
    title: "The nextgenlytics Digital Transformation Index",
    summary:
      "An annual index tracking transformation velocity across seven industries and four European regions.",
    category: "Digital Transformation",
    industry: "Cross-industry",
    country: "Europe",
    tech: "SAP",
    year: 2026,
    readingTime: "20 min",
    metrics: [
      { label: "Programmes tracked", value: "310" },
      { label: "On-time delivery", value: "58%" },
      { label: "Business KPI hit", value: "44%" },
    ],
    cover: "from-primary to-accent/80",
  },
];

const CATEGORIES = [
  "All",
  "Featured Research",
  "Industry Reports",
  "AI Insights",
  "SAP Research",
  "Microsoft Research",
  "Data Engineering",
  "Digital Transformation",
];

const INDUSTRIES = ["All", "Cross-industry", "Manufacturing", "Financial Services"];
const COUNTRIES = ["All", "Europe", "DACH", "Netherlands"];
const YEARS = ["All", 2026, 2025];

function ReportCard({ r }: { r: Report }) {
  return (
    <Link
      to={`/research/${r.id}`}
      className="group rounded-2xl border border-border/60 bg-card overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all flex flex-col"
    >
      <div className={`aspect-[16/10] relative bg-gradient-to-br ${r.cover} overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-6 flex flex-col justify-between text-primary-foreground">
          <span className="inline-flex w-fit text-[10px] font-bold uppercase tracking-widest bg-background/20 backdrop-blur px-2 py-1 rounded-full">
            {r.category}
          </span>
          <h3 className="text-lg md:text-xl font-heading font-bold leading-snug line-clamp-3">
            {r.title}
          </h3>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-sm text-muted-foreground line-clamp-3">{r.summary}</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {r.metrics.map((m) => (
            <div key={m.label} className="rounded-lg bg-muted/50 p-2 text-center">
              <div className="text-sm font-bold text-primary font-heading">{m.value}</div>
              <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {r.readingTime}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-primary"
              aria-label="Download"
            >
              <Download size={13} />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="hover:text-primary"
              aria-label="Share"
            >
              <Share2 size={13} />
            </button>
          </div>
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
          Read report <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function Research() {
  const [cat, setCat] = useState("All");
  const [industry, setIndustry] = useState("All");
  const [country, setCountry] = useState("All");
  const [year, setYear] = useState<string | number>("All");
  const reveal = useScrollReveal();

  const filtered = useMemo(
    () =>
      REPORTS.filter(
        (r) =>
          (cat === "All" || r.category === cat) &&
          (industry === "All" || r.industry === industry) &&
          (country === "All" || r.country === country) &&
          (year === "All" || r.year === year)
      ),
    [cat, industry, country, year]
  );

  const featured = REPORTS[0];

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Research Hub"
          title="Original enterprise research from the field"
          description="Benchmarks, indices, and industry reports built on live European transformation programmes."
        />

        {/* Featured */}
        <section className="container py-14" ref={reveal.ref}>
          <div
            className={`grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch ${
              reveal.isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <Link
              to={`/research/${featured.id}`}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${featured.cover} p-8 md:p-12 text-primary-foreground min-h-[360px] flex flex-col justify-between group`}
            >
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-background/20 backdrop-blur px-3 py-1 rounded-full">
                  <Sparkles size={12} /> Featured research
                </span>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold font-heading leading-tight max-w-xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-lg opacity-90">{featured.summary}</p>
              </div>
              <div className="relative flex items-center justify-between">
                <div className="flex gap-6">
                  {featured.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-2xl font-bold font-heading">{m.value}</div>
                      <div className="text-[10px] uppercase tracking-widest opacity-80">{m.label}</div>
                    </div>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold">
                  Open report <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            <div className="grid gap-4">
              {REPORTS.slice(1, 3).map((r) => (
                <Link
                  key={r.id}
                  to={`/research/${r.id}`}
                  className="group rounded-2xl border border-border/60 bg-card p-5 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{r.category}</span>
                  <h3 className="mt-2 font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.summary}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{r.year} · {r.readingTime}</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform text-primary" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="section-alt py-12">
          <div className="container">
            <div className="flex items-center gap-2 mb-4">
              <Filter size={14} className="text-muted-foreground" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Filter research</p>
            </div>
            <div className="grid md:grid-cols-4 gap-3">
              <select
                value={cat}
                onChange={(e) => setCat(e.target.value)}
                className="rounded-md border border-border/60 bg-card px-3 py-2 text-sm"
              >
                {CATEGORIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="rounded-md border border-border/60 bg-card px-3 py-2 text-sm"
              >
                {INDUSTRIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="rounded-md border border-border/60 bg-card px-3 py-2 text-sm"
              >
                {COUNTRIES.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <select
                value={String(year)}
                onChange={(e) => setYear(e.target.value === "All" ? "All" : Number(e.target.value))}
                className="rounded-md border border-border/60 bg-card px-3 py-2 text-sm"
              >
                {YEARS.map((y) => (
                  <option key={String(y)}>{y}</option>
                ))}
              </select>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((r) => (
                <ReportCard key={r.id} r={r} />
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="mt-10 text-center text-muted-foreground text-sm">
                No research matches those filters yet.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}