import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-data-led-ai.jpg";
import introImg from "@/assets/data-led-ai-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  Database,
  ShieldCheck,
  Layers,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Boxes,
  Workflow,
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
  Building2,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Data-Led AI Transformation
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Great AI starts with great data. <span className="text-primary">We build both — together.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            AI is only as good as the data that powers it. Most organisations struggling to scale AI are not failing because
            of the AI itself — they are failing because their data is fragmented, ungoverned, or simply not ready.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">NGSIT</strong> does not just connect AI tools to your existing
            systems. We fix the data foundation first, then build AI on top of it — ensuring every insight is accurate,
            every decision is grounded in reality, and every AI agent operates with full contextual awareness of your business.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="Data-led AI transformation architecture with lakehouse foundation and AI layer"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Boxes size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Foundation First</p>
              <p className="text-sm font-bold text-foreground font-heading">Data · Governance · AI</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Framework ---------------- */
function Framework() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: Database,
      title: "AI-Ready Data Modernisation",
      body: "We migrate legacy data into modern Lakehouse and Data Cloud architectures — cleaned, structured, and prepared for LLMs so your AI models start with a reliable foundation, not a messy one.",
    },
    {
      Icon: ShieldCheck,
      title: "Automated Data Governance",
      body: "Using Microsoft Purview or Databricks Unity Catalog, we implement governance frameworks that ensure your AI agents always respect data privacy, lineage, and compliance requirements — automatically.",
    },
    {
      Icon: Layers,
      title: "Semantic Layer Development",
      body: "We build the contextual bridge between your raw data and your AI — defining clear relationships between ERP entities like customers, suppliers, and cost centres so AI understands your business logic.",
    },
    {
      Icon: TrendingUp,
      title: "Predictive and Prescriptive Pipelines",
      body: "We move you beyond historical reporting. Your systems learn to forecast what will happen next and recommend the best course of action — turning data from a record of the past into a guide for the future.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Workflow size={14} /> Our Data-Led AI Transformation Framework
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Four foundations. One AI-ready enterprise.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((it, i) => (
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
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">{it.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const { ref, isVisible } = useScrollReveal();
  const pillars = [
    {
      Icon: Rocket,
      title: "Strategy Meets Execution",
      body: "We do not hand over a slide deck and wish you luck. We build the actual data pipelines, governance frameworks, and AI models that make your transformation real.",
    },
    {
      Icon: Building2,
      title: "ERP-Native Expertise",
      body: "We understand the specific complexities of Dynamics 365 and SAP environments — ensuring your AI transformation integrates seamlessly with your core business logic and existing workflows.",
    },
    {
      Icon: Layers,
      title: "Model-Agnostic Foundation",
      body: "The data foundation we build today is compatible with the AI models of tomorrow — so your investment is never locked to a single vendor or technology.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why Choose NGSIT for AI Transformation?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              The businesses that win with AI are the ones with the best data foundations.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Strategy plus execution, ERP-native expertise, and a model-agnostic foundation built to last.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkles size={12} /> The NGSIT Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  We build both the data foundation and the AI on top.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Pipelines, governance, semantic layers, and predictive models — delivered end to end.
                </p>
              </div>
            </article>
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

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Start Your AI Transformation
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "What is Data-Led AI Transformation?",
    a: "Data-Led AI Transformation is the process of modernising an organisation's data infrastructure — including governance, architecture, and semantic layers — to create a reliable, AI-ready foundation that powers accurate and scalable artificial intelligence applications.",
  },
  {
    q: "Why is data governance important for AI?",
    a: "Without proper data governance, AI models can produce inaccurate, biased, or non-compliant outputs. NGSIT implements governance frameworks that ensure AI agents always operate on clean, authorised, and lineage-tracked data.",
  },
  {
    q: "How does NGSIT approach AI transformation differently?",
    a: "Unlike consultancies that deliver strategy frameworks only, NGSIT builds the actual data pipelines, semantic layers, and AI models — providing both strategic direction and hands-on technical execution.",
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
            Common questions businesses ask about this service — with direct answers optimised for AI search engines and decision-makers.
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
export default function DataLedAi() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · Data-Led AI Transformation"
          title="Data-Led AI Transformation"
          description="Great AI starts with great data. We build both — together."
        />
        <Intro />
        <Framework />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}