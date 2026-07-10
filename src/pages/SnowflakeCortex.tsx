import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banners/banner-snowflake-cortex.jpg";
import introImg from "@/assets/solutions/snowflake-cortex-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Chat, CheckCircle, Eye, FileMagnifyingGlass, Lightning, Lock, Minus, Plus, Question, ShieldCheck, Snowflake, Sparkle, TerminalWindow } from "@phosphor-icons/react";
import AiChipIcon from "@/components/icons/AiChipIcon";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <AiChipIcon size={14} /> AI-Powered Data Insights
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Turn your governed data into insight — <span className="text-primary">automatically.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Your data platform holds the answers, but the insights sit locked inside it — waiting for someone to go
            looking. Nextgenlytics builds an intelligent analytics layer on top of your governed Snowflake or Databricks
            platform: AI-driven anomaly detection, pattern recognition, and automated insight delivery that reaches your
            business teams without a data-team request.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            The service is <strong className="text-foreground">powered by Owlsight</strong> for data quality and
            governance, and runs AI in place on your platform — using each vendor's native engine, such as Snowflake
            Cortex or Databricks ML, so your data never leaves its secure perimeter.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="AI-powered data insights surfacing anomalies and patterns on a governed data platform"
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
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Powered by Owlsight</p>
              <p className="text-sm font-bold text-foreground font-heading">Quality-Assured Insight</p>
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
      Icon: Eye,
      title: "Automated Anomaly Detection",
      body: "We deploy models that continuously scan your data for outliers, errors, and emerging risks — surfacing the problems and opportunities that matter before they show up in a month-end report. Powered by Owlsight's detection engine.",
    },
    {
      Icon: FileMagnifyingGlass,
      title: "Pattern Recognition at Scale",
      body: "Our models find the trends, correlations, and signals buried across your finance, operations, and supply-chain data — relationships far too subtle and numerous for manual analysis to catch.",
    },
    {
      Icon: Chat,
      title: "Insight Delivered to Business Teams",
      body: "Insights are pushed to the people who act on them — in plain language, in the tools they already use — instead of waiting in a data-team backlog. Analytics becomes something everyone consumes, not just specialists.",
    },
    {
      Icon: TerminalWindow,
      title: "Runs Where Your Data Lives",
      body: "AI executes in place on your governed Snowflake or Databricks platform, using each vendor's native engine — so there is no slow, risky, or costly movement of data to an external service.",
    },
    {
      Icon: ShieldCheck,
      title: "Quality & Governance Built In",
      body: "Owlsight underpins the service with continuous data-quality monitoring and governance — so every insight is grounded in clean, verified, access-controlled data, never a dirty or unauthorised source.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Snowflake size={14} /> What AI-Powered Data Insights Delivers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Anomaly detection, pattern recognition, and automated insight — on data you can trust.
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
      title: "Powered by Owlsight",
      body: "Insight is only trustworthy when the data beneath it is. Owlsight, our data-quality and governance engine, ensures every insight rests on clean, verified, continuously monitored data — not a silent data-quality problem.",
    },
    {
      Icon: Lock,
      title: "In-Place and Secure",
      body: "AI runs inside your governed Snowflake or Databricks perimeter using native engines — no data movement to external services, full role-based access control, and complete auditability on every query.",
    },
    {
      Icon: Lightning,
      title: "Built for Business Teams",
      body: "We deliver insight to decision-makers in plain language, embedded where they work — turning analytics from a specialist function into something the whole organisation can act on, fast.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle size={14} /> Why Choose Nextgenlytics for AI-Powered Insights?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              Insight is only trustworthy when the data beneath it is — and that is where we start.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A quality-first insights layer, powered by Owlsight, running securely in place on your governed Snowflake or
              Databricks platform.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkle size={12} /> The Nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  AI-powered insight on a governed foundation.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Anomaly detection, pattern recognition, and automated delivery — powered by Owlsight, running in place
                  on Snowflake or Databricks.
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
    q: "What are AI-Powered Data Insights?",
    a: "It is a Nextgenlytics service that adds an intelligent analytics layer on top of your governed data platform — automating anomaly detection, pattern recognition, and insight delivery so business teams receive relevant findings without commissioning bespoke analysis. It is powered by Owlsight for data quality and governance.",
  },
  {
    q: "Which platforms does the service run on?",
    a: "It runs in place on your governed Snowflake or Databricks platform, using each vendor's native AI and machine-learning engine — such as Snowflake Cortex or Databricks ML — as the underlying compute. Your data never leaves its secure perimeter, and Owlsight ensures the quality of everything the models consume.",
  },
  {
    q: "How do you make sure the insights are trustworthy?",
    a: "Trust starts with the data. Owlsight continuously monitors quality, detects anomalies, and enforces governance, while all AI activity respects your existing role-based access and column-level security — so every insight is grounded in clean, authorised data with a full audit trail.",
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
export default function SnowflakeCortex() {
  useDocumentTitle("AI-Powered Data Insights");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · AI-Powered Data Insights"
          title="AI-Powered Data Insights"
          description="Intelligent analytics on your governed Snowflake or Databricks platform — AI-driven anomaly detection, pattern recognition, and automated insight delivery for business teams."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="AI-Powered Data Insights"
          headline="Intelligent analytics built on your governed Snowflake or Databricks data platform — AI-driven anomaly detection, pattern recognition, and automated insight delivery for business teams."
          evidence="Powered by Owlsight for data quality and governance. Connects to Snowflake Cortex and Databricks ML capabilities as the underlying engine — positioned as your service layer on top."
        />
        <Enables />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}