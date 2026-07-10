import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import bannerBdc from "@/assets/banners/banner-bdc.jpg";
import imgFabric from "@/assets/solutions/bdc-data-fabric.jpg";
import imgFederation from "@/assets/solutions/bdc-federation.jpg";
import imgGovernance from "@/assets/solutions/bdc-governance.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Brain, CheckCircle, Compass, CursorClick, Database, FileMagnifyingGlass, GitBranch, Graph, Lightning, Minus, Plus, Question, RocketLaunch, Sparkle, Stack, TreeStructure } from "@phosphor-icons/react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Stack, value: "4", label: "Warehouses unified into one platform" },
    { Icon: Lightning, value: "40+", label: "Business KPIs, one source of truth" },
    { Icon: Brain, value: "AI-ready", label: "With business context" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Database size={14} /> SAP Datasphere &amp; Business Data Cloud
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            One governed data layer across your entire{" "}
            <span className="text-primary">SAP and non-SAP landscape</span> — with business context intact.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Fragmented data loses its meaning when it loses its context. <strong className="text-foreground">Nextgenlytics
            implements SAP Datasphere</strong> to create a unified Data Fabric across your organisation — integrating SAP
            and non-SAP data sources into a single governed environment where AI can understand not just the numbers, but
            the business logic behind them.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            We deliver this today on Datasphere — evidenced by unifying 4 fragmented data warehouses into a single
            platform for a manufacturing client. <strong className="text-foreground">SAP Business Data Cloud</strong> is
            the natural next step on this same foundation, and we plan and roadmap it alongside your Datasphere programme.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgFabric} alt="Unified data fabric visualization" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Compass size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Delivered on</p>
              <p className="text-sm font-bold text-foreground font-heading">SAP Datasphere</p>
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
      Icon: Graph,
      title: "Business-Centric Data Fabric",
      body: "We build a semantic integration layer that preserves the relationships and meaning within your SAP data — so when your AI queries a Profit Centre or Material Group, it understands the business logic, not just the field value.",
    },
    {
      Icon: TreeStructure,
      title: "Live Multi-Cloud Data Federation",
      body: "Connect and federate data across SAP S/4HANA, Salesforce, AWS, and Azure without moving or duplicating records — ensuring your AI and analytics always work from the most current, live data available.",
    },
    {
      Icon: CursorClick,
      title: "Self-Service Semantic Modelling",
      body: "Built-in graphical modelling tools let business users build their own analytical views without IT involvement — democratising data access while maintaining central governance and control.",
    },
    {
      Icon: FileMagnifyingGlass,
      title: "End-to-End Data Lineage & Governance",
      body: "Integrated with SAP BTP, Datasphere tracks exactly where your data originated, who accessed it, and how it was transformed — providing complete compliance auditability across your entire data estate.",
    },
    {
      Icon: RocketLaunch,
      title: "AI & Analytics Launchpad",
      body: "Datasphere acts as the clean, governed data foundation for your AI initiatives — powering machine learning models and real-time SAP Analytics Cloud dashboards with high-fidelity, trustworthy data.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkle size={14} /> What SAP Datasphere Delivers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            A trustworthy data foundation for enterprise AI
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Live federation, preserved business semantics, and governance — all in one platform, with Business Data
            Cloud as the roadmap for what comes next.
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
            <img src={imgFederation} alt="Live multi-cloud data federation" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Live Federation
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Connect SAP, Salesforce, AWS and Azure — without moving a row.
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
      Icon: GitBranch,
      title: "Context-First Integration",
      body: "We do not just move data tables — we move meaning. Our experts ensure your SAP business logic is preserved during integration, preventing the data quality issues that silently undermine AI accuracy.",
    },
    {
      Icon: Stack,
      title: "Future-Proof Architecture",
      body: "We design your Datasphere environment to be extensible — allowing new AI models, third-party data sources, and additional SAP modules to be connected as your enterprise evolves, including Business Data Cloud as SAP's platform matures.",
    },
    {
      Icon: Lightning,
      title: "Weeks, Not Months to First Insight",
      body: "Using SAP's pre-built business content and our proprietary deployment accelerators, we dramatically reduce time-to-insight for standard SAP-to-SAP integration scenarios.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle size={14} /> Why Nextgenlytics
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              AI without business context is just pattern matching.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              SAP Business Data Cloud gives your AI the meaning behind the numbers — and Nextgenlytics makes it real.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgGovernance} alt="Data lineage and governance dashboard" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">Lineage · Governance · Auditability</p>
                <p className="text-primary-foreground/80 text-xs mt-1">Know where every metric came from — instantly.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to Our SAP Data Platform Team
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
                Meaning preserved. Insight accelerated.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                Pre-built SAP business content plus our deployment accelerators get you from raw data to trusted insight
                in weeks — without sacrificing semantic depth or governance.
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
    q: "What is the difference between SAP Datasphere and SAP Business Data Cloud?",
    a: "SAP Datasphere is SAP's established data fabric platform — the technology Nextgenlytics implements today to unify SAP and non-SAP data with business context preserved. SAP Business Data Cloud is a newer SAP product built on the same Datasphere foundation, still maturing with limited live implementations globally. Nextgenlytics delivers on Datasphere now and roadmaps Business Data Cloud as the natural next step as the product matures.",
  },
  {
    q: "How does Nextgenlytics connect SAP and non-SAP data without duplicating it?",
    a: "We implement Datasphere's data-fabric approach to connect SAP S/4HANA alongside sources like Salesforce, AWS, and Azure — giving you a unified, governed view of enterprise data with full business context, without physically moving or duplicating it.",
  },
  {
    q: "How does SAP Datasphere support enterprise AI?",
    a: "SAP Datasphere provides the clean, governed, semantically rich data foundation that enterprise AI models require to produce accurate outputs. By preserving business context and enabling live data federation, it ensures AI agents and machine learning models work from trusted, current data rather than stale or fragmented sources.",
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
export default function SapBdc() {
  useDocumentTitle("SAP Datasphere & Business Data Cloud");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerBdc}
          eyebrow="Solutions · SAP"
          title="SAP Datasphere & Business Data Cloud"
          description="Unified data and analytics platform on SAP Datasphere — consolidating fragmented warehouses, enabling 40+ KPIs, and integrating with enterprise systems. Business Data Cloud is the natural next step on this same foundation."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="Unified Data & Analytics"
          headline="Unified data and analytics platform on SAP Datasphere — consolidating fragmented warehouses, enabling 40+ KPIs, and integrating with enterprise systems."
          evidence="Delivered for a manufacturing client — 4 fragmented warehouses unified into one Datasphere platform, integrated with S/4HANA and marketing systems. Business Data Cloud is the natural next step."
        />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
