import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banners/banner-ai-foundry.jpg";
import introImg from "@/assets/solutions/ai-foundry-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Brain, CheckCircle, Database, Factory, Lock, Minus, Plug, Plus, Question, ShieldCheck, Stack, TreeStructure } from "@phosphor-icons/react";
import AiChipIcon from "@/components/icons/AiChipIcon";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <AiChipIcon size={14} /> AI Strategy &amp; Readiness Assessment
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Before you invest in AI, <span className="text-primary">know exactly where it will pay off.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most AI programmes stall not because the technology fails, but because they start in the wrong place — on data
            that is fragmented, ungoverned, or simply not ready. Nextgenlytics starts every engagement with a structured
            assessment, so your first euro of AI spend lands where it creates real impact.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            We map your data estate, score your AI-readiness, and rank your highest-value use cases — then hand you a
            prioritised, costed roadmap. A data-first AI practitioner since 2021, Nextgenlytics assesses foundations
            first, because that is what determines whether your AI investment succeeds.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="AI readiness assessment mapping a data estate and prioritised use-case roadmap"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Factory size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Output</p>
              <p className="text-sm font-bold text-foreground font-heading">90-Day Roadmap</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- What Foundry Delivers ---------------- */
function Delivers() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: Database,
      title: "Data Estate Mapping",
      body: "We map where your data lives, how it flows, and how healthy it is across SAP, Dynamics 365, and your wider landscape — surfacing the gaps that quietly undermine AI accuracy before a single model is built.",
    },
    {
      Icon: Stack,
      title: "Prioritised AI Use-Case Backlog",
      body: "We identify and rank your highest-value AI opportunities by business impact and feasibility — so you invest in the use cases that pay back first, not the ones that simply sound impressive.",
    },
    {
      Icon: ShieldCheck,
      title: "Data Readiness Score",
      body: "We score your organisation across governance, quality, architecture, tooling, and AI-readiness — giving leadership an objective, evidence-based baseline instead of a subjective opinion.",
    },
    {
      Icon: TreeStructure,
      title: "90-Day Execution Plan",
      body: "You leave with a concrete, sequenced roadmap — the next steps, owners, and milestones to move from assessment to production AI. A plan you can act on, not a slide deck that gathers dust.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Brain size={14} /> What the Assessment Delivers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            A clear, evidence-based path from data to production AI.
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
      Icon: Database,
      title: "Data-First AI Practitioners Since 2021",
      body: "Every AI programme we run starts with data governance, not model selection. We assess foundations first because that is what actually determines whether AI delivers — a discipline we have applied since 2021.",
    },
    {
      Icon: Plug,
      title: "Assessment That Leads Straight to Execution",
      body: "We are the team that delivers what the assessment recommends — from governance to migration to production AI. The roadmap you receive is one we can build, not a hand-off to someone else.",
    },
    {
      Icon: Lock,
      title: "Built for Business Leaders, Not Data Scientists",
      body: "A focused, structured assessment designed for decision-makers — a ranked use-case backlog, a readiness score, and a 90-day plan in plain business language, not a technical audit no one reads.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle size={14} /> Why Assess with Nextgenlytics?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              The best AI outcomes start with the best data foundation — and knowing where you stand.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A structured, business-led assessment from a team that has been putting data first since 2021 — and that
              delivers the roadmap it recommends.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Brain size={12} /> The Nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  Assess first. Then build what actually pays back.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  A ranked use-case backlog, an objective data-readiness score, and a 90-day execution plan — grounded in
                  your data, ready to act on.
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
              Book Your Assessment
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
    q: "What is an AI Strategy & Readiness Assessment?",
    a: "It is a structured Nextgenlytics engagement that evaluates your organisation's readiness for AI across five dimensions — governance, quality, architecture, tooling, and AI-readiness. You receive a ranked, high-value AI use-case backlog, an objective data-readiness score, and a prioritised 90-day execution plan.",
  },
  {
    q: "Who is the assessment designed for, and how long does it take?",
    a: "It is designed for business leaders, not data scientists. The core is a focused, structured assessment — typically run as a short, intensive engagement — that produces clear, decision-ready outputs in plain business language rather than a lengthy technical audit.",
  },
  {
    q: "What do we get at the end of the assessment?",
    a: "You leave with three concrete deliverables: a prioritised AI use-case backlog ranked by value and feasibility, a data-readiness score that baselines your current state, and a costed 90-day roadmap with clear next steps — a plan Nextgenlytics can then help you execute.",
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
export default function AiFoundry() {
  useDocumentTitle("AI Strategy & Readiness Assessment");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · AI Strategy & Readiness Assessment"
          title="AI Strategy & Readiness Assessment"
          description="Before we build any AI, we assess. We map your data estate, score your AI-readiness, and hand you a prioritised roadmap — so your investment lands where it creates real impact."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="AI Strategy & Readiness Assessment"
          headline="Before building, we assess. We map your data estate, identify your highest-value AI use cases, and deliver a prioritised roadmap — so your AI investment lands where it creates real impact."
          evidence="2-hour structured assessment. Output: ranked use case backlog, data readiness score, and a 90-day execution plan. Designed for business leaders, not data scientists."
        />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}