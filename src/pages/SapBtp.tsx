import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import bannerBtp from "@/assets/banner-btp.jpg";
import imgAppDev from "@/assets/btp-app-dev.jpg";
import imgIntegration from "@/assets/btp-integration.jpg";
import imgAiAutomation from "@/assets/btp-ai-automation.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Layers,
  Code2,
  Workflow,
  Database,
  BrainCircuit,
  Bot,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  ShieldCheck,
  Cloud,
  Gauge,
  Sparkles,
  Rocket,
  Network,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: ShieldCheck, value: "Clean Core", label: "Zero ERP modification" },
    { Icon: Cloud, value: "Multi-Cloud", label: "AWS · Azure · GCP" },
    { Icon: Rocket, value: "4–6 wks", label: "Prototype to production" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Layers size={14} /> SAP Business Technology Platform
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            The innovation layer that <span className="text-primary">extends your SAP core</span> — without ever touching it.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Every enterprise has processes that standard SAP cannot handle out of the box.
            <strong className="text-foreground"> SAP Business Technology Platform (BTP)</strong> is the answer — a unified,
            multi-cloud platform for application development, data integration, AI, and automation that sits alongside
            your clean SAP core.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics</strong> uses BTP to build the custom capabilities, integrations,
            and AI agents your business needs — without creating technical debt or making your ERP harder to upgrade.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgAppDev} alt="SAP BTP application development" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Code2 size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Build</p>
              <p className="text-sm font-bold text-foreground font-heading">Low-code & Pro-code</p>
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

/* ---------------- Enables ---------------- */
function Enables() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      Icon: Code2,
      title: "Custom Application Development",
      body: "We build scalable business applications using SAP Build (low-code) or pro-code tools like ABAP Cloud and CAP — creating specialised tools that fill the gaps in your standard ERP without modifying the core.",
    },
    {
      Icon: Network,
      title: "Seamless Third-Party Integration",
      body: "Using SAP Integration Suite, we connect your S/4HANA environment to Salesforce, ServiceNow, Workday, and other platforms — ensuring real-time, synchronised data flow across your entire technology landscape.",
    },
    {
      Icon: Database,
      title: "Data & Analytics Foundation",
      body: "We leverage SAP Datasphere and SAP Analytics Cloud within BTP to federate data, maintain business semantic context, and power real-time dashboards and AI models from a single governed layer.",
    },
    {
      Icon: BrainCircuit,
      title: "Built-in Generative AI & SAP Joule",
      body: "BTP is the home of SAP's AI Hub and SAP Joule. We embed intelligent capabilities — automated document processing, predictive maintenance, intelligent workflows — directly into your business processes.",
    },
    {
      Icon: Workflow,
      title: "Intelligent Process Automation",
      body: "We deploy SAP Build Process Automation to eliminate manual, repetitive tasks — combining RPA with AI to create self-learning workflows that continuously improve over time.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> What SAP BTP Enables
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One platform for extension, integration, data, and AI
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Build the custom capabilities your business needs — alongside, never inside, your SAP core.
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
            <img src={imgIntegration} alt="SAP BTP integration with third-party platforms" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Integration Suite
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Real-time data flow across SAP and non-SAP platforms.
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
      Icon: ShieldCheck,
      title: "Clean Core by Design",
      body: "Every extension we build lives on BTP — never inside your ERP core. Your S/4HANA stays standard, stable, and upgrade-ready at all times.",
    },
    {
      Icon: Cloud,
      title: "Multi-Cloud Expertise",
      body: "We optimise your BTP environment across AWS, Azure, and Google Cloud — ensuring high availability, resilient performance, and cost-efficient resource usage.",
    },
    {
      Icon: Rocket,
      title: "Prototype to Production in 4–6 Weeks",
      body: "Our pre-built BTP accelerators and industry-specific content packages let us move standard integration scenarios from proof of concept to production-ready deployment in as few as 4 to 6 weeks.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why nextgenlytics
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              From system of record to system of innovation — on a clean, scalable foundation.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              SAP BTP — implemented by nextgenlytics — turns your ERP into a platform for continuous innovation.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgAiAutomation} alt="Generative AI and process automation on SAP BTP" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">Extend · Integrate · Automate · Innovate</p>
                <p className="text-primary-foreground/80 text-xs mt-1">Built alongside your clean SAP core.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to a SAP BTP specialist
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
                <Bot size={12} /> The nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Where your ERP stops being a system of record — and becomes a system of innovation.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We pair BTP accelerators with disciplined clean-core architecture — so every extension we ship adds
                business value without adding upgrade risk.
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
    q: "What is SAP Business Technology Platform (BTP)?",
    a: "SAP Business Technology Platform (BTP) is SAP's unified multi-cloud platform that combines application development, data integration, analytics, AI, and automation. It enables enterprises to extend SAP S/4HANA with custom functionality, third-party integrations, and AI-powered workflows — all while keeping the core ERP clean and unmodified.",
  },
  {
    q: "What is the Clean Core principle in SAP BTP?",
    a: "The Clean Core principle means keeping SAP S/4HANA free of custom modifications by moving all extensions, integrations, and custom logic to SAP BTP. This ensures the ERP core remains standard and easy to upgrade, while custom business capabilities are maintained separately on BTP without accumulating technical debt.",
  },
  {
    q: "How does SAP BTP integrate with non-SAP systems?",
    a: "SAP BTP's Integration Suite provides pre-built connectors and API management that enable real-time data synchronisation between SAP S/4HANA and non-SAP platforms including Salesforce, ServiceNow, Workday, and Microsoft 365 — without requiring point-to-point integrations that become difficult to maintain at scale.",
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
export default function SapBtp() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerBtp}
          eyebrow="Solutions · SAP"
          title="SAP Business Technology Platform (BTP) Implementation"
          description="The innovation layer that extends your SAP core — without ever touching it."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="Integration & Extension"
          headline="Connect SAP S/4HANA to third-party systems, cloud platforms, and custom applications via SAP Business Technology Platform — API management, event mesh, and integration flows."
          evidence="Real capability: Integration Engineering is core to your delivery. BTP is the integration layer in every modern SAP landscape."
        />
        <Enables />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}