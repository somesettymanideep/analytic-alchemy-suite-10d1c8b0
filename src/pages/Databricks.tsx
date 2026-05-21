import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-databricks.jpg";
import imgLakehouse from "@/assets/databricks-lakehouse.jpg";
import imgCollab from "@/assets/databricks-collab.jpg";
import imgAi from "@/assets/databricks-ai.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  Layers,
  Workflow,
  Users,
  Gauge,
  ShieldCheck,
  Brain,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  Network,
  Cpu,
  Database,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Layers, value: "Lakehouse", label: "One platform, lake + warehouse" },
    { Icon: Workflow, value: "Delta Live", label: "Self-healing ETL pipelines" },
    { Icon: Brain, value: "AI-Native", label: "MLflow, Mosaic AI & Genie" },
  ];
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Databricks Lakehouse Platform
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            One unified platform for data engineering, data science, and AI — built on an <span className="text-primary">open, scalable Lakehouse</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            For years, organisations had to choose between a data warehouse (fast and structured, but rigid) and a data
            lake (flexible and scalable, but messy). <strong className="text-foreground">Databricks</strong> invented the
            Lakehouse — a single platform that delivers the best of both. Built on Apache Spark and Delta Lake, it gives
            your data engineers, scientists, and analysts one collaborative environment for ETL pipelines, machine
            learning, and real-time analytics.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">Nextgenlytics</strong> implements and optimises Databricks Lakehouse
            environments so your data team can move faster, at lower cost, with production-grade reliability.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgLakehouse} alt="Databricks Lakehouse unified architecture" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Database size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Foundation</p>
              <p className="text-sm font-bold text-foreground font-heading">Spark · Delta Lake</p>
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
      Icon: Layers,
      title: "Unified Lakehouse Architecture",
      body: "We implement Delta Lake on Databricks to combine your data lake and warehouse into one — giving you ACID transactions, scalable metadata handling, and unified batch and streaming data processing on a single open platform.",
    },
    {
      Icon: Workflow,
      title: "Production-Grade ETL with Delta Live Tables",
      body: "We use Delta Live Tables (DLT) to build declarative data pipelines with automated testing, built-in data quality checks, and full lineage visibility — replacing brittle, hand-crafted ETL scripts with reliable, self-healing pipelines.",
    },
    {
      Icon: Users,
      title: "Collaborative Data Workspace",
      body: "Data engineers, data scientists, and analysts work together in Databricks notebooks — writing SQL, Python, Scala, or R in a single version-controlled environment. No more siloed tools, no more duplicated effort.",
    },
    {
      Icon: Gauge,
      title: "High-Performance SQL Analytics",
      body: "We configure Databricks SQL with serverless compute for lightning-fast query performance — giving your BI tools and executive dashboards real-time operational visibility without dedicated warehouse overhead.",
    },
    {
      Icon: ShieldCheck,
      title: "Unified Governance with Unity Catalog",
      body: "We implement Unity Catalog to provide centralised access control, comprehensive data lineage, and consistent governance across your entire Lakehouse — so compliance is managed in one place, not patched across multiple tools.",
    },
  ];

  return (
    <section className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> What Nextgenlytics Delivers with Databricks
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One Lakehouse for engineering, analytics, and AI
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From Delta Lake foundations to Unity Catalog governance — every Databricks environment we deliver is engineered
            for reliability, performance, and AI from day one.
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
            <img src={imgCollab} alt="Collaborative Databricks workspace with notebooks" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                SQL Analytics & Governance
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Serverless SQL performance — governed by Unity Catalog.
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
      Icon: Cpu,
      title: "Spark Optimisation Expertise",
      body: "We fine-tune Apache Spark configurations to run your jobs faster and at lower cost — eliminating idle cluster expenses and maximising ROI on every workload.",
    },
    {
      Icon: Network,
      title: "Cross-Platform Integration",
      body: "We connect your Databricks environment to Azure, AWS, SAP S/4HANA, Microsoft Fabric, and SAP DataSphere — creating a fluid, cross-cloud data ecosystem with no blind spots.",
    },
    {
      Icon: Brain,
      title: "AI Acceleration",
      body: "Databricks is built for AI. We configure your Lakehouse as the data foundation for MLflow model tracking, Mosaic AI, and Databricks Genie — so your AI initiatives start on solid, governed ground.",
    },
  ];

  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why Nextgenlytics for Databricks
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              Spark-tuned, cross-cloud integrated, AI-ready from day one.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Data engineering is the foundation every AI initiative is built on. Nextgenlytics builds that foundation on
              Databricks — open, scalable, and production-ready from day one.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgAi} alt="AI acceleration on Databricks with MLflow and Mosaic AI" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">MLflow · Mosaic AI · Genie</p>
                <p className="text-primary-foreground/80 text-xs mt-1">A governed data foundation for every AI initiative.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to a Databricks specialist
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
                <Brain size={12} /> The Nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Tuned Spark. Connected clouds. Governed AI foundations.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We pair Databricks-certified engineers with FinOps discipline — so every cluster, every pipeline, and every
                model you ship is right-sized, secure, and ready for production AI.
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
    q: "What is a Databricks Lakehouse?",
    a: "A Databricks Lakehouse is a unified data platform architecture that combines the flexibility and low-cost storage of a data lake with the performance, ACID transactions, and governance of a data warehouse. Built on Apache Spark and Delta Lake, it provides a single environment for data engineering, data science, machine learning, and real-time analytics — eliminating the need for separate warehouse and lake infrastructure.",
  },
  {
    q: "What is Delta Lake in Databricks?",
    a: "Delta Lake is an open-source storage layer in Databricks that brings ACID (Atomicity, Consistency, Isolation, Durability) transactions to big data workloads. It enables reliable data pipelines by supporting upserts, deletes, schema enforcement, and time travel — making data lakes as reliable and queryable as traditional data warehouses.",
  },
  {
    q: "What is Databricks Unity Catalog?",
    a: "Databricks Unity Catalog is a unified governance solution for the Databricks Lakehouse that provides centralised access control, data lineage tracking, and audit logging across all data assets — including tables, files, machine learning models, and dashboards. It allows organisations to manage who can access what data from a single interface, ensuring consistent compliance across all workloads.",
  },
];

function Faq() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-alt py-20 md:py-28">
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
export default function Databricks() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Solutions · Data Engineering"
          title="Databricks Lakehouse Implementation"
          description="One unified platform for data engineering, data science, and AI — built on an open, scalable Lakehouse."
        />
        <Intro />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
