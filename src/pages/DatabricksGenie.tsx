import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banner-databricks-genie.jpg";
import introImg from "@/assets/databricks-genie-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  MessageSquare,
  Languages,
  ShieldCheck,
  CheckCircle2,
  Code2,
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
  Users,
  TrendingUp,
  Building2,
  Wand2,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Databricks Genie
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Ask your data a question. <span className="text-primary">Get a real answer — no SQL, no analyst required.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most business intelligence tools are built for data analysts, not the executives and managers who actually need
            the insights. Databricks Genie changes that — a context-aware data assistant that lets anyone in your organisation
            ask complex business questions in plain English and receive accurate, visualised answers instantly.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics</strong> implements and customises Genie so it understands your
            specific business terminology, data relationships, and governance requirements.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="Databricks Genie conversational analytics dashboard with natural language queries"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <MessageSquare size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Ask in plain English</p>
              <p className="text-sm font-bold text-foreground font-heading">Answers · Visualised · Governed</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- What Genie Enables ---------------- */
function Enables() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: MessageSquare,
      title: "Conversational Access to Your Data",
      body: "Business users — from executives to operations managers — can ask questions like 'What was our North American churn last quarter?' and get a precise, visualised answer without waiting for a data team request.",
    },
    {
      Icon: Languages,
      title: "Semantic Tuning for Your Business Language",
      body: "We configure Genie Spaces with your company-specific terminology, common queries, and data relationships — so Genie understands your business language, not just standard SQL concepts.",
    },
    {
      Icon: ShieldCheck,
      title: "Governed and Secure by Default",
      body: "Every Genie response is governed by your existing Databricks Unity Catalog security policies — users only see data they are authorised to access, with full compliance baked in.",
    },
    {
      Icon: CheckCircle2,
      title: "Self-Correcting Query Logic",
      body: "Genie reviews its own SQL logic before responding — verifying date ranges, join conditions, and data accuracy — so your teams can trust every answer they receive.",
    },
    {
      Icon: Code2,
      title: "AI-Assisted Data Engineering",
      body: "For technical teams, Genie Code acts as an AI pair-programmer — helping build Lakeflow pipelines, optimise Spark queries, and automate ETL workflows through natural language.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Wand2 size={14} /> What Databricks Genie Enables
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Self-service intelligence — for every role in your organisation.
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
      Icon: Users,
      title: "Reduced Dependency on Data Teams",
      body: "Self-service analytics for business leaders means fewer ad-hoc requests to your data engineering team — freeing them for higher-value work.",
    },
    {
      Icon: TrendingUp,
      title: "Smarter Over Time",
      body: "We set up feedback loops so Genie learns from every interaction — continuously improving its accuracy and relevance to your specific business context.",
    },
    {
      Icon: Building2,
      title: "Works Across Industries",
      body: "Whether you are a retailer tracking inventory or a fintech firm analysing market volatility, we build the custom Genie Skills to make your data work for your specific use case.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why Choose nextgenlytics for Databricks Genie?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              Your data already has the answers. We make them accessible to everyone — not just your data team.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Implemented and tuned by nextgenlytics — governed by Unity Catalog, customised for your business, and continuously learning.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkles size={12} /> The nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  Conversational analytics. Real answers. Zero SQL.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Custom Genie Spaces, semantic tuning, and governance-first deployment — implemented end to end.
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
              Deploy Databricks Genie
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
    q: "What is Databricks Genie?",
    a: "Databricks Genie is a conversational AI data assistant within the Databricks AI/BI platform that allows business users to query complex datasets using plain English, receiving accurate, governed, and visualised answers without requiring SQL knowledge.",
  },
  {
    q: "How does Databricks Genie handle data security?",
    a: "Databricks Genie is natively integrated with Databricks Unity Catalog, meaning all responses respect your existing role-based access controls and data governance policies — users only see data they are authorised to access.",
  },
  {
    q: "Can Databricks Genie understand company-specific terminology?",
    a: "Yes. nextgenlytics configures custom Genie Spaces with your organisation's specific business terminology, example queries, and data relationships — ensuring Genie understands your business language, not just generic SQL patterns.",
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
export default function DatabricksGenie() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · Databricks Genie"
          title="Databricks Genie"
          description="Ask your data a question. Get a real answer — no SQL, no analyst required."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="Predictive & Prescriptive Analytics"
          headline="AI models that go beyond descriptive BI — anticipating risk, surfacing opportunity, and recommending action in real time. Built on your governed ERP data using Azure, Databricks, and Snowflake."
          evidence="Evidenced: Nash Squared analytics across D365 F&O — data validation, report standardisation, management reporting. Bed manufacturer: 40+ KPIs unified across enterprise."
        />
        <Enables />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}