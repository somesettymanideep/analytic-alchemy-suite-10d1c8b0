import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banners/banner-databricks-genie.jpg";
import introImg from "@/assets/solutions/databricks-genie-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Buildings, Chat, CheckCircle, Code, MagicWand, Minus, Plus, Question, ShieldCheck, Sparkle, TrendUp, Users } from "@phosphor-icons/react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkle size={14} /> Predictive &amp; Prescriptive Analytics
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Stop reporting the past. <span className="text-primary">Start shaping what happens next.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most analytics tells you what already happened. Nextgenlytics builds AI models that go further — anticipating
            risk, surfacing opportunity, and recommending the next best action in real time, so your teams make decisions
            before events force their hand.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            We build these models on your <strong className="text-foreground">governed ERP data</strong> — from SAP
            S/4HANA and Dynamics 365 — using enterprise platforms such as Azure, Databricks, and Snowflake, so every
            forecast is grounded in data you can trust.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="Predictive and prescriptive analytics dashboard forecasting risk and recommending action"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Chat size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Beyond dashboards</p>
              <p className="text-sm font-bold text-foreground font-heading">Predict · Recommend · Act</p>
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
      Icon: TrendUp,
      title: "Anticipate Risk Before It Hits",
      body: "We build predictive models that forecast demand swings, cash-flow gaps, supplier disruption, and churn — giving your teams the lead time to act while the outcome can still be changed.",
    },
    {
      Icon: Sparkle,
      title: "Surface Hidden Opportunity",
      body: "Our models detect the patterns and signals buried in your finance, operations, and supply-chain data — turning raw ERP records into opportunities your dashboards would never reveal.",
    },
    {
      Icon: MagicWand,
      title: "Recommend the Next Best Action",
      body: "Prescriptive analytics goes beyond prediction. Our models don't just tell you what will happen — they recommend the specific action to take, ranked by impact and confidence.",
    },
    {
      Icon: ShieldCheck,
      title: "Grounded in Governed ERP Data",
      body: "Every model is built on clean, governed data from SAP S/4HANA and Dynamics 365 — so your forecasts reflect your real business, not disconnected spreadsheets. Evidenced across 40+ enterprise KPIs.",
    },
    {
      Icon: Code,
      title: "Real-Time, on Enterprise Platforms",
      body: "We engineer and operate these models on Azure, Databricks, and Snowflake — delivering insight in real time and embedding it where your teams already work, not in a report they have to go find.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <MagicWand size={14} /> What Predictive &amp; Prescriptive Analytics Delivers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            From describing the past to deciding the future.
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
      Icon: ShieldCheck,
      title: "Predictions Built on Governed Data",
      body: "A forecast is only as good as the data beneath it. We build on governed ERP foundations — evidenced by unifying 40+ KPIs for a manufacturer and standardising analytics across Nash Squared's D365 estate.",
    },
    {
      Icon: Buildings,
      title: "ERP-Native Models",
      body: "We understand the business logic inside SAP and Dynamics 365 — so our models reason about cost centres, materials, and customers the way your business does, not as anonymous columns.",
    },
    {
      Icon: Users,
      title: "Your Stack, Not a Lock-In",
      body: "We are platform-agnostic across Azure, Databricks, and Snowflake — building on the tools you already run and choosing the right engine for each workload, never forcing a single vendor.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle size={14} /> Why Choose Nextgenlytics for Predictive Analytics?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              The best predictions come from the best data foundation — and we build both.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Data-first practitioners who ground every model in governed ERP data, understand your SAP and Dynamics
              landscape, and build on the enterprise platform that fits your stack.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkle size={12} /> The Nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  From descriptive dashboards to decisions.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Predictive forecasts and prescriptive recommendations, grounded in governed ERP data and delivered on
                  Azure, Databricks, or Snowflake.
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
              Talk to Our Data Team
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
    q: "What is the difference between predictive and prescriptive analytics?",
    a: "Predictive analytics forecasts what is likely to happen — such as demand, churn, or cash-flow risk — while prescriptive analytics goes a step further and recommends the specific action to take in response. Nextgenlytics builds both on your governed ERP data, so your teams move from insight to decision.",
  },
  {
    q: "How is this different from standard BI dashboards?",
    a: "Standard BI describes what already happened. Nextgenlytics builds AI models that anticipate risk, surface opportunity, and recommend action in real time — turning your data from a record of the past into a guide for the decisions ahead.",
  },
  {
    q: "What platforms do you build predictive analytics on?",
    a: "We are platform-agnostic and build on the enterprise tools you already run — including Microsoft Azure, Databricks, and Snowflake — always grounding the models in clean, governed data from your SAP S/4HANA and Dynamics 365 systems.",
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
  useDocumentTitle("Predictive & Prescriptive Analytics");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · Predictive & Prescriptive Analytics"
          title="Predictive & Prescriptive Analytics"
          description="AI models that go beyond descriptive dashboards — anticipating risk, surfacing opportunity, and recommending the next best action on your governed ERP data."
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