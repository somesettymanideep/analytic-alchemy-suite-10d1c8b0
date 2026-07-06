import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banner-sap-joule.jpg";
import introImg from "@/assets/sap-joule-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  Bot,
  Workflow,
  Network,
  Brain,
  Wrench,
  ShieldCheck,
  TrendingDown,
  AlertTriangle,
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
            <Sparkles size={14} /> SAP Joule
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            One AI assistant across your entire SAP landscape — <span className="text-primary">that actually gets things done.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            SAP Joule is the generative AI assistant embedded across SAP's cloud suite — including S/4HANA Cloud,
            SAP SuccessFactors, and SAP BTP. Unlike a basic chatbot, Joule plans, coordinates, and executes multi-step
            workflows across your entire SAP environment through a single conversational interface.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics</strong> helps enterprises unlock the full potential of
            Joule — from initial implementation to building custom AI skills that extend Joule's capabilities to your
            unique processes and third-party integrations.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="SAP Joule conversational AI assistant orchestrating SAP cloud workflows"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Bot size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Agentic AI</p>
              <p className="text-sm font-bold text-foreground font-heading">One Thread · Every Module</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- What Joule Does ---------------- */
function WhatJoule() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: Workflow,
      title: "Agentic Workflow Execution",
      body: "Joule goes beyond answering questions — it researches complex issues, plans multi-step resolutions, and executes workflows across finance, supply chain, and HR without manual intervention.",
    },
    {
      Icon: Network,
      title: "Cross-Application Orchestration",
      body: "A supply chain alert in S/4HANA can automatically trigger a workforce adjustment in SuccessFactors — different systems, one conversational thread, zero manual handoffs.",
    },
    {
      Icon: Brain,
      title: "Deep Business Reasoning via SAP Knowledge Graph",
      body: "Joule understands the intricate relationships between your business entities — suppliers, cost centres, material requirements — ensuring every insight is grounded in your actual SAP data, not generic assumptions.",
    },
    {
      Icon: Wrench,
      title: "Custom AI Skills with Joule Studio",
      body: "We use Joule Studio to build and deploy custom AI skills tailored to your unique business logic — including integrations with third-party systems and highly customised SAP configurations.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Bot size={14} /> What SAP Joule Does Across Your Organisation
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One conversational layer. Every SAP module. Real action.
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
      Icon: TrendingDown,
      title: "Up to 80% Reduction in Routine Task Time",
      body: "Automated reconciliation, dispute management, and project setup mean your teams spend less time on process and more time on decisions that create real value.",
    },
    {
      Icon: AlertTriangle,
      title: "Proactive, Not Reactive",
      body: "Joule identifies potential disruptions — like supplier delays or cash flow gaps — and suggests mitigation strategies before they become business problems.",
    },
    {
      Icon: ShieldCheck,
      title: "Enterprise Security and Compliance",
      body: "Joule respects your existing role-based access controls and adheres to global AI ethics and data privacy standards — built on SAP's enterprise-grade security foundation.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why Choose nextgenlytics for SAP Joule?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              If your business runs on SAP, Joule is the AI layer that ties everything together.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From implementation to Joule Studio custom skills — we make Joule work exactly the way your business needs.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkles size={12} /> The nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  Agentic AI across S/4HANA, SuccessFactors, and BTP.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Custom AI skills, knowledge graph reasoning, and orchestration — implemented end to end.
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
              Deploy SAP Joule
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
    q: "What is SAP Joule?",
    a: "SAP Joule is a generative AI assistant embedded natively across SAP's cloud applications — including S/4HANA Cloud and SAP SuccessFactors — that enables users to execute complex, multi-step workflows across finance, supply chain, and HR using natural language.",
  },
  {
    q: "How does SAP Joule differ from a standard chatbot?",
    a: "Unlike a standard chatbot that only responds to questions, SAP Joule is an agentic AI system that plans, coordinates, and executes multi-step workflows across multiple SAP applications — taking real action, not just providing information.",
  },
  {
    q: "Can SAP Joule be customised for specific business processes?",
    a: "Yes. Using Joule Studio, nextgenlytics builds custom AI skills that extend Joule's native capabilities to match your unique business workflows, custom SAP configurations, and third-party system integrations.",
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
export default function SapJoule() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · Conversational AI for SAP & D365"
          title="SAP Joule"
          description="One AI assistant across your entire SAP landscape — that actually gets things done."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="Conversational AI for SAP & D365"
          headline="Natural language interfaces on SAP S/4HANA and D365 — business users query ERP data, trigger workflows, and get intelligent recommendations without writing a single query."
          evidence="Built on BlueGecko AI Agents and your governed ERP data layer. Applicable across finance, operations, procurement, and supply chain teams."
        />
        <WhatJoule />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}