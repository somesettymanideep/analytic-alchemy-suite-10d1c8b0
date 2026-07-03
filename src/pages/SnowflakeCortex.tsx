import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-snowflake-cortex.jpg";
import introImg from "@/assets/snowflake-cortex-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  Snowflake,
  Terminal,
  MessageSquare,
  FileSearch,
  Image as ImageIcon,
  ShieldCheck,
  Lock,
  Zap,
  Eye,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Snowflake Cortex
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            AI that runs where your data already lives — <span className="text-primary">no movement, no risk, no complexity.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Moving data between systems to run AI on it is slow, expensive, and introduces security risk. Snowflake Cortex
            eliminates that problem by bringing state-of-the-art generative AI and machine learning directly to your
            governed data — inside Snowflake, where it already lives.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics</strong> implements Cortex to help you build, deploy, and
            scale AI applications that deliver real-time intelligence without ever taking your data outside the secure
            Snowflake perimeter.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="Snowflake Cortex AI running serverless inside the Snowflake data cloud"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Snowflake size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">In-Place AI</p>
              <p className="text-sm font-bold text-foreground font-heading">Zero Data Movement</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- What Cortex Enables ---------------- */
function Enables() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: Terminal,
      title: "Serverless AI on Your Existing Data",
      body: "Perform complex AI tasks — sentiment analysis, document summarisation, translation, and data extraction — using simple SQL commands on your existing Snowflake data, with no infrastructure setup required.",
    },
    {
      Icon: MessageSquare,
      title: "Conversational Analytics for Business Users",
      body: "Cortex Analyst lets your business users explore structured data through natural language questions — delivering precise, governed answers without writing a single line of code.",
    },
    {
      Icon: FileSearch,
      title: "Intelligent Search Across Documents",
      body: "We use Cortex Search to index your unstructured files — contracts, PDFs, reports — making them instantly queryable by AI and transforming static documents into dynamic knowledge assets.",
    },
    {
      Icon: ImageIcon,
      title: "Multimodal Intelligence",
      body: "Beyond text, Cortex processes images and audio files — extracting structured insights from diverse media formats directly within your Snowflake environment.",
    },
    {
      Icon: ShieldCheck,
      title: "Built-in AI Safety Guardrails",
      body: "Cortex AI Guardrails ensure every AI response is filtered for sensitive content and aligned with your enterprise standards — nothing leaves your Snowflake governance boundary.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Snowflake size={14} /> What Snowflake Cortex Enables for Your Business
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Generative AI, conversational analytics, and multimodal intelligence — all in SQL.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 mb-5">
                <it.Icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground font-heading">{it.title}</h3>
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
      Icon: Lock,
      title: "Zero Data Movement",
      body: "All AI inference and model activity stays within your Snowflake environment — your data never moves to an external service, maintaining full security and compliance at all times.",
    },
    {
      Icon: Zap,
      title: "Rapid Time to Value",
      body: "Snowflake's serverless infrastructure eliminates GPU management and complex infrastructure setup — we move your AI projects from pilot to production in weeks, not months.",
    },
    {
      Icon: Eye,
      title: "Fully Governed and Auditable",
      body: "All AI-driven insights are governed by Snowflake's native role-based access controls, column-level security, and Horizon governance policies — complete transparency on every query.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why Choose nextgenlytics for Snowflake Cortex?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              Your Snowflake data is already your most valuable asset. Cortex makes it intelligent.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Zero data movement, serverless scale, and full governance — implemented and tuned by nextgenlytics.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkles size={12} /> The nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  Production-grade AI — inside your Snowflake perimeter.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Cortex Analyst, Cortex Search, AI Guardrails, and multimodal pipelines — implemented end to end.
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
              Implement Snowflake Cortex
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
    q: "What is Snowflake Cortex?",
    a: "Snowflake Cortex is a fully managed AI service within the Snowflake Data Cloud that provides direct access to leading Large Language Models and specialised AI functions — enabling organisations to run generative AI and machine learning on their governed data using SQL and Python, without moving data outside Snowflake.",
  },
  {
    q: "How does Snowflake Cortex keep data secure?",
    a: "Snowflake Cortex keeps all AI inference and model activity within the Snowflake governance boundary — meaning your data is never sent to external AI services, and all outputs are controlled by your existing role-based access and column-level security policies.",
  },
  {
    q: "What types of AI tasks can Snowflake Cortex perform?",
    a: "Snowflake Cortex supports a wide range of AI tasks including document summarisation, sentiment analysis, translation, natural language data querying, unstructured document search, and multimodal analysis of images and audio — all executable directly from SQL within your Snowflake environment.",
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
export default function SnowflakeCortex() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · Snowflake Cortex"
          title="Snowflake Cortex"
          description="AI that runs where your data already lives — no movement, no risk, no complexity."
        />
        <Intro />
        <Enables />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}