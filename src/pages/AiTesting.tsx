import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banner-ai-testing.jpg";
import introImg from "@/assets/ai-testing-intro.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  ShieldCheck,
  Gauge,
  Scale,
  Bug,
  RefreshCcw,
  Activity,
  ClipboardCheck,
  Layers,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  ArrowRight,
  ScanSearch,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> AI Testing & Validation
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Trust your AI <span className="text-primary">before it touches your customers or your critical business processes.</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Deploying AI without rigorous testing is a business risk that most organisations underestimate. Unlike traditional
            software, AI outputs are probabilistic — the same input can produce different results, and failure modes are not
            always obvious until it is too late.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics AI Testing</strong> provides a comprehensive validation framework
            that ensures every AI agent, model, and LLM-powered workflow you deploy is accurate, safe, fair, and ready for
            enterprise-scale use — before it ever reaches a live environment.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={introImg}
              alt="AI testing and validation dashboard showing accuracy scores, bias audits and compliance checks"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Validate · Audit · Deploy</p>
              <p className="text-sm font-bold text-foreground font-heading">Trust Before Production</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- What Framework Covers ---------------- */
function Framework() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: ScanSearch,
      title: "LLM Output Evaluation",
      body: "We use automated LLM-as-a-judge frameworks to score AI responses for relevance, coherence, and factual accuracy — systematically catching hallucinations before they reach users or critical systems.",
    },
    {
      Icon: Bug,
      title: "Adversarial Testing and Red Teaming",
      body: "We simulate prompt injection attacks and edge-case scenarios to verify that your AI cannot be manipulated into bypassing security protocols or surfacing sensitive information.",
    },
    {
      Icon: Scale,
      title: "Bias and Fairness Auditing",
      body: "We test models against diverse datasets to identify and mitigate algorithmic bias — ensuring your AI remains ethical and compliant with global regulations including the EU AI Act.",
    },
    {
      Icon: RefreshCcw,
      title: "RAG Regression Testing",
      body: "When your internal data changes, we verify that your Retrieval-Augmented Generation systems continue to provide the correct context and accurate answers — without quality degradation.",
    },
    {
      Icon: Gauge,
      title: "Performance and Latency Benchmarking",
      body: "We measure how your AI performs under high-concurrency load — ensuring ERP-integrated agents respond in real time without becoming a bottleneck to your operations.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <ClipboardCheck size={14} /> What Our AI Testing Framework Covers
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Accuracy, safety, fairness, and resilience — validated end to end.
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
      Icon: Activity,
      title: "Continuous Drift Monitoring",
      body: "AI models degrade over time as your data changes. We build ongoing monitoring frameworks that ensure your AI performs just as well on day 300 as it did on day one.",
    },
    {
      Icon: ClipboardCheck,
      title: "Compliance-Ready Audit Trails",
      body: "Every test generates a detailed, traceable audit trail — giving you the documentation required for regulated industries and the confidence to go live with board-level accountability.",
    },
    {
      Icon: Layers,
      title: "From Experimental to Enterprise-Ready",
      body: "Whether you are deploying a small internal tool or a global consumer-facing agent, our testing frameworks scale to match the risk level and complexity of your AI application.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why Choose nextgenlytics for AI Testing?
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              AI you cannot trust is AI you cannot use. We make sure your AI earns that trust — before it goes live.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Continuous drift monitoring, audit-ready evidence, and frameworks that scale with your risk profile.
            </p>

            <article className="mt-8 relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="relative p-7 md:p-8 text-primary-foreground">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                  <Sparkles size={12} /> The nextgenlytics Difference
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                  Validation engineered for enterprise-grade AI.
                </h3>
                <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed">
                  LLM evals, red teaming, bias audits, RAG regression, and performance benchmarking — delivered end to end.
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
              Validate Your AI
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
    q: "Why is AI testing different from traditional software testing?",
    a: "Unlike traditional software with predictable, deterministic outputs, AI systems produce probabilistic results that can vary between runs. AI testing requires specialised evaluation frameworks to assess accuracy, fairness, safety, and robustness against adversarial inputs — which standard QA methodologies do not cover.",
  },
  {
    q: "What is LLM output evaluation?",
    a: "LLM output evaluation is an automated testing process that uses AI models to score the responses of other AI models for relevance, factual accuracy, coherence, and safety — providing a scalable method to validate AI quality without relying solely on manual human review.",
  },
  {
    q: "What regulations does AI testing help with?",
    a: "nextgenlytics AI Testing generates audit trails and bias assessments that support compliance with key AI regulations including the EU AI Act, GDPR, and industry-specific frameworks in financial services, healthcare, and other regulated sectors.",
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
export default function AiTesting() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="AI Solutions · AI Testing & Validation"
          title="AI Testing & Validation"
          description="Trust your AI before it touches your customers or your critical business processes."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="AI Testing & Validation"
          headline="Structured testing frameworks for AI model outputs — accuracy benchmarking, bias detection, compliance checks, and production readiness validation before go-live."
          evidence="Powered by Owl Sight's anomaly detection and reconciliation engine. Applicable to any AI implementation including BlueGecko agents, Conversational AI, and third-party models."
        />
        <Framework />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}