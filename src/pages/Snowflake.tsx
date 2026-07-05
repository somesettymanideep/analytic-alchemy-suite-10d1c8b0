import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banner-snowflake.jpg";
import imgElastic from "@/assets/snowflake-elastic.jpg";
import imgSharing from "@/assets/snowflake-sharing.jpg";
import imgAi from "@/assets/snowflake-ai.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  Gauge,
  Settings,
  Share2,
  ShieldCheck,
  Brain,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  Layers,
  Network,
  Lock,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Gauge, value: "Elastic", label: "Storage / compute decoupled" },
    { Icon: Settings, value: "Zero-Ops", label: "Fully managed platform" },
    { Icon: Brain, value: "AI-Ready", label: "Powered by Snowflake Cortex" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Snowflake Data Platform
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            A cloud-native data platform that <span className="text-primary">scales with your business</span> — and powers your AI without the infrastructure headaches.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most organisations are sitting on enormous amounts of data that never gets fully used — because their
            data infrastructure can't keep up. <strong className="text-foreground">Snowflake</strong> is a cloud-native data
            platform built to change that. Its unique architecture separates storage from compute, meaning your data
            warehousing, analytics, and AI workloads can all run simultaneously without competing for resources.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics</strong> implements and optimises Snowflake so your teams spend less
            time managing infrastructure and more time extracting value from data.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgElastic} alt="Snowflake elastic cloud data platform" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Layers size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Architecture</p>
              <p className="text-sm font-bold text-foreground font-heading">Storage ⇆ Compute</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>

      <div className="mt-20 grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-7 flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <s.Icon size={22} />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground font-heading leading-none">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Delivers ---------------- */
function Delivers() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      Icon: Gauge,
      title: "Elastic Performance at Any Scale",
      body: "Snowflake's decoupled storage and compute architecture means your BI dashboards, data engineering pipelines, and AI model training all run in parallel — no queuing, no resource contention, no performance degradation at peak times.",
    },
    {
      Icon: Settings,
      title: "Zero-Maintenance Infrastructure",
      body: "We configure Snowflake's fully managed environment to automate data partitioning, indexing, and performance tuning — eliminating the operational overhead that drains your data team's time and inflates your total cost of ownership.",
    },
    {
      Icon: Share2,
      title: "Secure Real-Time Data Sharing",
      body: "Share live datasets with partners, suppliers, or internal teams instantly — without building slow, expensive ETL pipelines. Snowflake's Secure Data Sharing lets data move in real time while staying fully governed and access-controlled.",
    },
    {
      Icon: ShieldCheck,
      title: "Built-in Data Resilience",
      body: "Snowflake's Time Travel and Fail-safe features let you query or restore data from any point in history — giving your business a robust safety net for mission-critical pipelines and accidental data loss scenarios.",
    },
    {
      Icon: Brain,
      title: "AI-Ready Data Pipelines",
      body: "We build Snowflake environments optimised for Snowflake Cortex AI — so your data is structured, governed, and immediately available for LLM-powered analytics, document intelligence, and real-time AI applications.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> What nextgenlytics Delivers with Snowflake
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One platform for analytics, sharing, and AI — at any scale
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From elastic compute to AI-ready pipelines — every Snowflake environment we deliver is engineered for cost,
            performance, and governance from day one.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 3).map((it, i) => (
            <article
              key={it.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-8 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 mb-6">
                <it.Icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">{it.title}</h3>
              <div className="mt-3 h-1 w-12 bg-accent rounded-full" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div
            className={`lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-border/60 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "360ms" }}
          >
            <img src={imgSharing} alt="Secure real-time data sharing on Snowflake" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Resilience & Sharing
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Time Travel, Fail-safe, and Secure Data Sharing — built in.
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {services.slice(3).map((it, i) => (
              <article
                key={it.title}
                className={`group relative bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 flex-1 flex flex-col justify-center ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 4) * 120}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <it.Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-heading">{it.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
                  </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WhyUs ---------------- */
function WhyUs() {
  const { ref, isVisible } = useScrollReveal();
  const pillars = [
    {
      Icon: Layers,
      title: "Architectural Excellence",
      body: "We design your Snowflake environment for cost-efficiency from the start — preventing cloud sprawl and ensuring every credit spent delivers measurable business value.",
    },
    {
      Icon: Network,
      title: "Full Ecosystem Integration",
      body: "We connect Snowflake seamlessly with SAP S/4HANA, Microsoft Fabric, Databricks, and your existing BI tools — creating one unified data fabric where information flows without friction.",
    },
    {
      Icon: Lock,
      title: "Governance by Default",
      body: "We implement role-based access controls (RBAC), dynamic data masking, and Snowflake Horizon governance policies — so your data is accessible to the right people and protected from everyone else.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why nextgenlytics for Snowflake
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              Architected for cost, integrated by design, governed from day one.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Your data is already there. Snowflake — implemented by nextgenlytics — turns it into a scalable, AI-ready
              competitive advantage without the infrastructure burden.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgAi} alt="AI-ready data pipelines with Snowflake Cortex" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">SAP · Fabric · Databricks · BI</p>
                <p className="text-primary-foreground/80 text-xs mt-1">One unified data fabric, governed end to end.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to a Snowflake specialist
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-7 md:p-8 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-3xl font-bold text-accent font-heading leading-none">0{i + 1}</span>
                  <span className="mt-2 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <p.Icon size={20} />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-heading">{p.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            </article>
          ))}

          <article
            className={`relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${pillars.length * 140}ms` }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative p-7 md:p-8 text-primary-foreground">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                <Brain size={12} /> The nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Cost-aware architecture. Cortex-ready data. Governance you can audit.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We pair Snowflake-certified architects with FinOps discipline — so every warehouse, every share, and every
                pipeline you ship is right-sized, secure, and ready for AI from day one.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "What is Snowflake and what is it used for?",
    a: "Snowflake is a cloud-native data platform that provides data warehousing, data lake, and data sharing capabilities in a single managed service. Organisations use it to store and query large volumes of structured and semi-structured data, run real-time analytics, share data securely with external partners, and power AI and machine learning workloads — all without managing physical infrastructure.",
  },
  {
    q: "What makes Snowflake different from traditional data warehouses?",
    a: "Traditional data warehouses couple storage and compute together, meaning expensive hardware must be provisioned for peak load even when not in use. Snowflake's architecture separates storage from compute, allowing organisations to scale each independently — running multiple workloads simultaneously at different performance tiers without resource contention or performance degradation.",
  },
  {
    q: "How does Snowflake support AI and machine learning?",
    a: "Snowflake supports AI through Snowflake Cortex, its built-in generative AI service that allows organisations to run LLM-powered tasks — including document summarisation, sentiment analysis, and natural language data querying — directly on their Snowflake data using SQL. This eliminates the need to move data to external AI platforms, keeping all processing secure within the Snowflake environment.",
  },
];

function Faq() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container max-w-4xl" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <HelpCircle size={14} /> FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Common questions businesses ask about this service — with clear, direct answers.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <article
                key={f.q}
                className={`bg-card rounded-2xl border border-border/60 shadow-sm transition-all ${
                  isOpen ? "shadow-lg border-primary/30" : "hover:border-primary/20"
                } ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-foreground font-heading">{f.q}</span>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function Snowflake() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Solutions · Data Engineering"
          title="Snowflake Data Platform Implementation"
          description="A cloud-native data platform that scales with your business — and powers your AI without the infrastructure headaches."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="Snowflake Data Platform Services"
          headline="Design, build, and operate enterprise data platforms on Snowflake — ingestion, transformation pipelines, semantic layers, and performance optimisation."
          evidence="Snowflake Cortex (AI/ML layer) is now embedded here as a capability within the platform — not a standalone offering. Powered by Falcon Mapping and Code Cheetah for 50–60% less engineering effort."
        />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}