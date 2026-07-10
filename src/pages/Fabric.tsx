import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banners/banner-fabric.jpg";
import imgOneLake from "@/assets/solutions/fabric-onelake.jpg";
import imgRealtime from "@/assets/solutions/fabric-realtime.jpg";
import imgCopilot from "@/assets/solutions/fabric-copilot.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Brain, CheckCircle, Cloud, Cpu, Database, Gauge, Graph, Minus, Plus, Pulse, Question, ShieldCheck, Sparkle, Stack, TreeStructure } from "@phosphor-icons/react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Database, value: "OneLake", label: "Single org-wide data lake" },
    { Icon: Stack, value: "All-in-One", label: "Engineering, BI & AI unified" },
    { Icon: Brain, value: "Copilot", label: "Natural-language analytics" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkle size={14} /> Microsoft Fabric Data Engineering & Analytics
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            One platform, one data lake, one team — from raw data to <span className="text-primary">AI-driven insight</span> without the complexity.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Managing multiple disconnected data tools — Azure Data Factory, Azure Synapse, Power BI, separate data lakes — creates overhead,
            inconsistency, and friction between teams. <strong className="text-foreground">Microsoft Fabric</strong> eliminates that complexity
            by unifying data engineering, data science, real-time analytics, and business intelligence into a single SaaS platform built on OneLake.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">Nextgenlytics</strong> implements Fabric so your organisation moves from fragmented data
            infrastructure to a governed, AI-ready analytics environment — faster and at lower total cost.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgOneLake} alt="Microsoft Fabric OneLake unified data lake" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Cloud size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Foundation</p>
              <p className="text-sm font-bold text-foreground font-heading">OneLake · SaaS</p>
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
      Icon: Database,
      title: "OneLake: One Source of Truth",
      body: "We implement OneLake — Fabric's unified logical data lake — as the single storage layer for all your data. Every team, tool, and AI model works from the same governed source, eliminating duplication, silos, and version conflicts across departments.",
    },
    {
      Icon: TreeStructure,
      title: "Modern Data Pipelines with Data Factory",
      body: "We use Fabric's next-generation Data Factory to orchestrate complex, multi-cloud data ingestion pipelines through a low-code visual interface — reducing pipeline build time and making data integration accessible beyond specialist engineering teams.",
    },
    {
      Icon: Cpu,
      title: "High-Performance Spark Engineering",
      body: "We build and scale resilient Lakehouses using Fabric's optimised Spark environment — processing and transforming large, complex datasets for heavy-duty engineering workloads and machine learning feature preparation.",
    },
    {
      Icon: Pulse,
      title: "Real-Time Intelligence",
      body: "We configure Fabric's Real-Time Intelligence to ingest and process high-frequency streaming data from IoT devices, ERP events, and operational systems — giving your business immediate visibility into what is happening right now.",
    },
    {
      Icon: Brain,
      title: "Copilot-Powered Development",
      body: "We enable Microsoft Copilot within Fabric so your engineering and analytics teams can write Spark code, build pipelines, and generate data insights using natural language — dramatically reducing the technical barrier to advanced analytics.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkle size={14} /> What Nextgenlytics Delivers with Microsoft Fabric
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One unified platform — engineering, BI, and AI
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From OneLake foundations to Copilot-powered analytics — every Fabric environment we deliver is engineered for governance, performance, and AI from day one.
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
            <img src={imgRealtime} alt="Microsoft Fabric real-time analytics dashboard" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Real-Time Intelligence & Copilot
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Operational visibility, now — with AI built in.
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
      Icon: Graph,
      title: "Full Microsoft Ecosystem Integration",
      body: "We synchronise Fabric with Dynamics 365, the Power Platform, and Microsoft 365 — creating a fluid workspace where data flows freely across your entire Microsoft environment without friction.",
    },
    {
      Icon: Stack,
      title: "SAP & Cross-Platform Connectivity",
      body: "We connect Fabric to your SAP landscape using SAP DataSphere or direct connectors — ensuring your operational and financial data is integrated without losing its business context or semantic meaning.",
    },
    {
      Icon: Gauge,
      title: "Optimised for Cost and Performance",
      body: "We right-size your Fabric capacity and configure workload isolation — ensuring you get maximum performance from your investment without over-provisioning or unexpected cost spikes.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle size={14} /> Why Nextgenlytics for Microsoft Fabric
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              Microsoft-aligned, SAP-connected, cost-optimised from day one.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Fragmented data tools slow everyone down. Microsoft Fabric — implemented by Nextgenlytics — gives your entire data team one platform, one lake, and one path to AI.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgCopilot} alt="Microsoft Copilot inside Fabric" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">OneLake · Data Factory · Copilot</p>
                <p className="text-primary-foreground/80 text-xs mt-1">A governed, AI-ready foundation across the Microsoft stack.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to Our Fabric Data Engineering Team
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
                One platform. One lake. One path to AI.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We pair Fabric-certified engineers with FinOps discipline — so every capacity unit, every pipeline, and every Copilot interaction you ship is right-sized, governed, and production-ready.
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
    q: "What is Microsoft Fabric?",
    a: "Microsoft Fabric is an all-in-one cloud analytics platform that unifies data engineering, data science, real-time analytics, and business intelligence into a single SaaS environment built on OneLake — Microsoft's unified data lake. It integrates the capabilities of Azure Data Factory, Azure Synapse Analytics, and Power BI, eliminating the need to manage and synchronise multiple separate data services.",
  },
  {
    q: "What is OneLake in Microsoft Fabric?",
    a: "OneLake is the unified, organisation-wide data lake at the core of Microsoft Fabric. It functions similarly to OneDrive but for enterprise data — providing a single logical storage location for all data assets across an organisation, regardless of which Fabric workload created or consumes them. All Fabric services read from and write to OneLake, eliminating data duplication and ensuring consistency.",
  },
  {
    q: "How does Microsoft Fabric compare to Azure Synapse Analytics?",
    a: "Azure Synapse Analytics is an individual Azure service requiring separate management of storage, compute, and integration components. Microsoft Fabric supersedes Synapse by combining its data engineering capabilities with Azure Data Factory and Power BI into one unified SaaS platform with a shared OneLake storage layer — reducing management overhead, simplifying governance, and providing a more integrated experience for data teams.",
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
            <Question size={14} /> FAQ
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
export default function Fabric() {
  useDocumentTitle("Microsoft Fabric Data Engineering & Analytics");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Solutions · Data Engineering"
          title="Microsoft Fabric Data Engineering & Analytics"
          description="Design, implement, and operate data platforms on Microsoft Fabric — lakehouses, pipelines, Power BI semantic models, and real-time analytics for enterprise reporting."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="Data Engineering & Analytics"
          headline="Design, implement, and operate data platforms on Microsoft Fabric — lakehouses, pipelines, Power BI semantic models, and real-time analytics for enterprise reporting."
          evidence="Delivered for Nash Squared — Azure, SQL DBA, Microsoft Fabric housekeeping, ADF pipeline monitoring, and Power BI report management across 9 countries."
        />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
