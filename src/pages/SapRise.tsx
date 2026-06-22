import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerRise from "@/assets/banner-rise-sap.jpg";
import imgInfra from "@/assets/rise-cloud-infrastructure.jpg";
import imgProcess from "@/assets/rise-process-intelligence.jpg";
import imgAi from "@/assets/rise-ai-automation.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Cloud,
  Sparkles,
  CloudCog,
  Activity,
  Server,
  Layers,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  ShieldCheck,
  Target,
  Handshake,
  Gauge,
  Rocket,
  Package,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Package, value: "1", label: "Unified commercial agreement" },
    { Icon: Gauge, value: "99.9%", label: "Cloud availability SLA" },
    { Icon: Rocket, value: "6–12 mo", label: "Typical mid-market go-live" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Cloud size={14} /> RISE with SAP
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Your entire move to the cloud —{" "}
            <span className="text-primary">software, infrastructure, and transformation</span> under one strategy.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Business transformation used to mean a multi-year project, multiple vendors, and endless complexity.
            <strong className="text-foreground"> RISE with SAP</strong> bundles SAP S/4HANA Cloud, cloud infrastructure,
            process intelligence, and managed services into a single commercial agreement — simplifying the entire cloud journey.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">NGSIT</strong> implements the RISE framework to move you beyond
            simple cloud hosting toward genuinely autonomous, AI-powered enterprise operations.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgInfra} alt="Multi-cloud infrastructure for RISE with SAP" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Package size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Bundled</p>
              <p className="text-sm font-bold text-foreground font-heading">One Agreement</p>
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

/* ---------------- What RISE Includes ---------------- */
function Includes() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      Icon: CloudCog,
      title: "SAP S/4HANA Cloud Deployment",
      body: "Access SAP's intelligent ERP in a private or public cloud environment — always on the latest version, always powered by the newest AI innovations, with a 99.9% availability SLA built into the offering.",
    },
    {
      Icon: Activity,
      title: "Business Process Intelligence via SAP Signavio",
      body: "We use integrated process mining to analyse how your business actually runs today — identifying bottlenecks and benchmarking your operations against industry standards for rapid, evidence-based improvement.",
    },
    {
      Icon: Server,
      title: "Your Choice of Cloud Infrastructure",
      body: "Run on AWS, Azure, or Google Cloud — all managed by SAP, with enterprise-grade security and compliance standards built into the RISE offering by default.",
    },
    {
      Icon: Layers,
      title: "SAP BTP Credits for Custom Innovation",
      body: "Included BTP credits let us build custom AI extensions, integrate third-party applications, and manage data transitions — all outside the clean core, without creating technical debt.",
    },
    {
      Icon: BrainCircuit,
      title: "Embedded SAP Joule & Business AI",
      body: "RISE natively includes SAP Joule and Business AI capabilities — enabling intelligent automation of financial matching, supply chain forecasting, and HR workflows from day one.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> What RISE with SAP Includes
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Everything you need to run a cloud-native enterprise
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Software, infrastructure, intelligence, and AI — all under a single, simplified subscription.
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
            <img src={imgProcess} alt="SAP Signavio process intelligence analysis" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Process Intelligence
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Process mining that benchmarks your business in days, not months.
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

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const { ref, isVisible } = useScrollReveal();
  const pillars = [
    {
      Icon: Handshake,
      title: "Simplified Accountability",
      body: "We act as your strategic partner across the entire RISE ecosystem — coordinating between SAP, your infrastructure provider, and your internal teams so nothing falls through the cracks.",
    },
    {
      Icon: ShieldCheck,
      title: "Clean Core Discipline",
      body: "We enforce Clean Core methodology throughout your RISE journey — keeping your ERP standard, upgrade-friendly, and fully AI-ready at every stage of the programme.",
    },
    {
      Icon: Target,
      title: "Outcome-Driven Transformation",
      body: "We do not just move you to the cloud — we move you to a higher level of performance. Our focus is the 20% of process improvements that deliver 80% of your business value.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why NGSIT
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              The fastest path to a clean, intelligent, cloud-native enterprise.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              NGSIT makes sure you get there — with AI embedded from the very start, and a single partner accountable for the outcome.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgAi} alt="AI-powered enterprise automation" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">SAP Joule · Business AI · BTP Extensions</p>
                <p className="text-primary-foreground/80 text-xs mt-1">AI embedded from day one, not bolted on later.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to a RISE with SAP specialist
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
                <Rocket size={12} /> The NGSIT Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                One partner. One agreement. One intelligent enterprise.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We focus on the 20% of process improvements that deliver 80% of business value — so your RISE
                programme produces measurable outcomes, not just a successful cutover.
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
    q: "What is RISE with SAP?",
    a: "RISE with SAP is SAP's Business Transformation as a Service offering that bundles SAP S/4HANA Cloud, cloud infrastructure, process intelligence tools (SAP Signavio), SAP BTP access, and managed services into a single subscription agreement — simplifying the cloud migration journey for enterprises of all sizes.",
  },
  {
    q: "What is the difference between RISE with SAP and a standard S/4HANA implementation?",
    a: "A standard S/4HANA implementation requires separate procurement of software licences, cloud infrastructure, and support services. RISE with SAP consolidates all of these under one commercial agreement, including infrastructure management, guaranteed SLAs, and access to SAP Signavio process intelligence and BTP credits as part of the package.",
  },
  {
    q: "How long does a RISE with SAP implementation take?",
    a: "Implementation timelines vary based on business complexity and migration approach. NGSIT uses a phased delivery model that prioritises early business value, typically delivering core cloud operations within 6 to 12 months for mid-sized organisations, with AI enablement milestones built into each phase.",
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
export default function SapRise() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerRise}
          eyebrow="Solutions · SAP"
          title="RISE with SAP Implementation"
          description="Your entire move to the cloud — software, infrastructure, and transformation — under one strategy."
        />
        <Intro />
        <Includes />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
