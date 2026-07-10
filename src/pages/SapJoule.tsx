import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banners/banner-ai-foundry.jpg";
import introImg from "@/assets/solutions/rise-ai-automation.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, Brain, CheckCircle, Graph, Minus, Plus, Question, Robot, ShieldCheck, Sparkle, TreeStructure, TrendDown, Warning, Wrench } from "@phosphor-icons/react";
import AiChipIcon from "@/components/icons/AiChipIcon";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <AiChipIcon size={14} /> Conversational AI for SAP &amp; D365
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Talk to your ERP. <span className="text-primary">It answers — and acts.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most of your ERP's power is locked behind complex screens and specialist knowledge. Nextgenlytics builds
            conversational AI on top of SAP S/4HANA and Dynamics 365 — so business users query data, trigger workflows,
            and get intelligent recommendations in plain language, without writing a single query.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            We build this capability on <strong className="text-foreground">BlueGecko AI Agents</strong> and your governed
            ERP data layer — and integrate native assistants such as SAP Joule or Microsoft Copilot where they already fit
            your landscape. The result works the same way across finance, operations, procurement, and supply chain.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="Conversational AI assistant querying SAP and Dynamics 365 ERP data in plain language"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Robot size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Plain language</p>
              <p className="text-sm font-bold text-foreground font-heading">Ask · Trigger · Act</p>
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
      Icon: TreeStructure,
      title: "Query Data in Plain Language",
      body: "Business users ask questions across finance, supply chain, procurement, and operations — 'show me overdue invoices for the DACH region' — and get accurate, governed answers from SAP S/4HANA and Dynamics 365, no query language required.",
    },
    {
      Icon: Graph,
      title: "Trigger Workflows, Not Just Answers",
      body: "Our conversational AI is agentic — built on BlueGecko AI Agents, it plans and executes multi-step processes end to end, so a single request can raise, route, and complete a workflow across your ERP without manual handoffs.",
    },
    {
      Icon: Brain,
      title: "Grounded in Your Governed ERP Data",
      body: "Every response reasons over your real business relationships — suppliers, cost centres, materials — because it runs on your governed ERP data layer, not generic assumptions. Answers you can act on with confidence.",
    },
    {
      Icon: Wrench,
      title: "Custom Skills for Your Processes",
      body: "We build conversational skills tailored to your specific business logic and third-party integrations — and where SAP Joule or Microsoft Copilot are already part of your landscape, we extend and integrate them rather than replace them.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Robot size={14} /> What Conversational AI Delivers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One conversational layer across SAP and Dynamics 365 — that takes real action.
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
      Icon: TrendDown,
      title: "Less Time on Process, More on Decisions",
      body: "By handling reconciliation, dispute management, status chasing, and routine setup through conversation, our AI frees your teams from repetitive process work so they can focus on the decisions that create real value.",
    },
    {
      Icon: Warning,
      title: "Proactive, Not Reactive",
      body: "Because it runs on your live ERP data, our conversational AI surfaces potential disruptions — supplier delays, cash-flow gaps — and suggests mitigation before they become business problems.",
    },
    {
      Icon: ShieldCheck,
      title: "Enterprise Security and Compliance",
      body: "Every interaction respects your existing role-based access controls and data-privacy standards, with human-in-the-loop approval on critical actions — built to enterprise-grade security and AI-ethics expectations.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle size={14} /> Why Choose Nextgenlytics for Conversational AI?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              The AI layer that ties SAP and Dynamics together — built on data you govern.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Built on BlueGecko AI Agents and your governed ERP data — implemented end to end, and integrated with SAP
              Joule or Microsoft Copilot where they fit.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkle size={12} /> The Nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  Conversational AI across SAP S/4HANA and Dynamics 365.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  Powered by BlueGecko AI Agents, grounded in your governed ERP data, and secured with human-in-the-loop
                  control.
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
              Talk to Our AI Team
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
    q: "What is conversational AI for SAP and Dynamics 365?",
    a: "It is a natural-language layer Nextgenlytics builds on top of your SAP S/4HANA and Dynamics 365 systems, allowing business users to query data, trigger workflows, and receive intelligent recommendations in plain language — without writing queries or navigating complex screens. It is built on BlueGecko AI Agents and your governed ERP data.",
  },
  {
    q: "Do you use SAP Joule or Microsoft Copilot?",
    a: "Where SAP Joule or Microsoft Copilot are already part of your landscape, Nextgenlytics integrates and extends them with custom skills for your specific processes. Where you need capability beyond the native assistants — or across both SAP and Dynamics — we build it on BlueGecko AI Agents, always grounded in your governed data.",
  },
  {
    q: "Is conversational AI safe to use on live ERP data?",
    a: "Yes. Every interaction respects your existing role-based access controls and data-privacy policies, and critical actions are gated with human-in-the-loop approval — so users only see and change what they are authorised to, with a full audit trail.",
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
export default function SapJoule() {
  useDocumentTitle("Conversational AI for SAP & D365");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · Conversational AI for SAP & D365"
          title="Conversational AI for SAP & D365"
          description="Natural-language interfaces on SAP S/4HANA and Dynamics 365 — your teams query ERP data, trigger workflows, and get intelligent recommendations without writing a single query."
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