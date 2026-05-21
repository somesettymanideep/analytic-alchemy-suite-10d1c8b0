import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerEcc from "@/assets/banner-sap-ecc.jpg";
import imgPerformance from "@/assets/ecc-performance.jpg";
import imgRoadmap from "@/assets/ecc-migration-roadmap.jpg";
import imgApi from "@/assets/ecc-api-connectivity.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Boxes,
  Sparkles,
  Gauge,
  Globe,
  BrainCircuit,
  Map,
  Plug,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  Zap,
  TrendingUp,
  ShieldCheck,
  Target,
  Clock,
  AlertTriangle,
  Cpu,
  Code2,
} from "lucide-react";

/* -------------------------------------------------------------- */
/*  Intro — split layout with stat strip                           */
/* -------------------------------------------------------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Clock, value: "2027", label: "ECC maintenance ends" },
    { Icon: TrendingUp, value: "30–40%", label: "Performance gains typical" },
    { Icon: ShieldCheck, value: "100%", label: "Audit-ready compliance" },
  ];
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        {/* Left text */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Boxes size={14} /> SAP ECC Services
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Protect your ECC investment today —{" "}
            <span className="text-primary">and build a clear, confident path</span> to S/4HANA.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">SAP ECC</strong> has been the backbone of global enterprise operations for decades.
            It is stable, deeply customised, and business-critical — and it still has a role to play.
            But with SAP mainstream maintenance ending in 2027, every ECC customer needs a strategy.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">Nextgenlytics</strong> provides expert ECC optimisation and strategic migration
            planning: keeping your core stable today while building a confident, well-prepared path to S/4HANA and AI.
          </p>
        </div>

        {/* Right image stack */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={imgPerformance}
              alt="Enterprise IT team optimising SAP ECC performance"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          {/* Floating accent badge */}
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <AlertTriangle size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Deadline</p>
              <p className="text-sm font-bold text-foreground font-heading">2027 Support End</p>
            </div>
          </div>
          {/* Decorative blob */}
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>

      {/* Stat strip */}
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

/* -------------------------------------------------------------- */
/*  Capabilities — 5 service cards + image row                     */
/* -------------------------------------------------------------- */
function Capabilities() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      Icon: Gauge,
      title: "Performance Optimisation",
      body: "We do not just maintain your ECC system — we improve it. Our team identifies performance bottlenecks, streamlines custom ABAP code, and reduces technical debt to keep your core running at peak efficiency.",
    },
    {
      Icon: Globe,
      title: "Global Compliance Management",
      body: "Decades of built-in regulatory support across finance (FI), controlling (CO), sales (SD), and materials management (MM) keep multi-country compliance and reporting solid and fully auditable.",
    },
    {
      Icon: BrainCircuit,
      title: "Sidecar AI Solutions",
      body: "We deploy AI agents that sit alongside your ECC core — extracting deep business value from your stable environment without disrupting transaction processing or requiring core modifications.",
    },
    {
      Icon: Map,
      title: "Strategic Migration Roadmap",
      body: "We help you navigate the 2027 and 2030 support deadlines with a clear, data-led migration plan that preserves your business logic and protects your investment throughout the transition.",
    },
    {
      Icon: Plug,
      title: "Modern API Connectivity",
      body: "We build specialised connectors and API layers that allow your ECC core to communicate with modern cloud platforms, AI Foundry solutions, and third-party SaaS tools — without touching the core.",
    },
  ];

  return (
    <section className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> What We Deliver
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            What Nextgenlytics Delivers for SAP ECC
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Optimise today. Migrate confidently tomorrow. Every engagement targets measurable outcomes.
          </p>
        </div>

        {/* Service cards — top 3 */}
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

        {/* Bottom row — image + 2 cards */}
        <div className="mt-8 grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div
            className={`lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-border/60 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "360ms" }}
          >
            <img
              src={imgRoadmap}
              alt="Strategic migration roadmap planning session"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Migration Strategy
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Data-led roadmaps that protect your investment.
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

/* -------------------------------------------------------------- */
/*  Why Choose Us — split image + stacked pillars                */
/* -------------------------------------------------------------- */
function WhyUs() {
  const { ref, isVisible } = useScrollReveal();
  const pillars = [
    {
      Icon: Target,
      title: "Optimise, Not Just Maintain",
      body: "We actively improve your ECC environment — every engagement targets measurable performance and efficiency gains, not just keeping the lights on.",
    },
    {
      Icon: Map,
      title: "Clear Path to S/4HANA",
      body: "Our migration planning preserves years of business logic and customisation, ensuring nothing is lost and everything is ready when the time comes to move.",
    },
    {
      Icon: Cpu,
      title: "Hybrid AI Without Disruption",
      body: "Our sidecar AI approach lets you benefit from modern AI capabilities today — without waiting for a full S/4HANA migration to be complete first.",
    },
  ];

  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left: sticky image card */}
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why Nextgenlytics
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              Your ECC system holds years of intelligence. We help you carry it forward.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From optimisation to migration — we protect your operational legacy and prepare
              your enterprise for what comes next.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img
                src={imgApi}
                alt="Modern API connectivity and cloud integration"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">Sidecar AI · API Layers · Cloud Connectors</p>
                <p className="text-primary-foreground/80 text-xs mt-1">Modern capabilities without core disruption.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to an SAP ECC specialist
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right: numbered pillars */}
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
                  <span className="text-3xl font-bold text-accent font-heading leading-none">
                    0{i + 1}
                  </span>
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

          {/* Feature card */}
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
                <Code2 size={12} /> The Nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Business logic preserved. Technical debt removed.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We map every customisation, cleanse your data, and document your business rules —
                so when you are ready for S/4HANA, nothing is lost and everything runs better than before.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  FAQ                                                            */
/* -------------------------------------------------------------- */
const faqs = [
  {
    q: "When does SAP ECC support end?",
    a: "SAP mainstream maintenance for SAP ECC ends in 2027, with extended maintenance available until 2030 for customers who require additional transition time. Organisations still running ECC should have an active S/4HANA migration strategy in place now to avoid risk and rising support costs.",
  },
  {
    q: "Can AI be applied to SAP ECC without migrating to S/4HANA?",
    a: "Yes. Nextgenlytics deploys sidecar AI solutions that extract and process data from your SAP ECC environment using API layers and integration connectors — enabling AI-driven automation and analytics without modifying your stable ECC core or requiring an immediate migration.",
  },
  {
    q: "What is the difference between Greenfield and Brownfield SAP migration?",
    a: "A Greenfield migration is a fresh S/4HANA implementation starting with clean processes and minimal legacy customisation. A Brownfield migration converts your existing ECC system to S/4HANA, preserving historical data and custom configurations. Nextgenlytics evaluates both approaches and recommends the right path based on your business complexity and timelines.",
  },
];

function Faq() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-alt py-20 md:py-28">
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
                  <span className="text-base md:text-lg font-semibold text-foreground font-heading">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {f.a}
                    </p>
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

/* -------------------------------------------------------------- */
/*  Page                                                          */
/* -------------------------------------------------------------- */
export default function SapEcc() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerEcc}
          eyebrow="Solutions · SAP"
          title="SAP ECC Support, Optimisation & Migration Planning"
          description="Protect your ECC investment today — and build a clear, confident path to S/4HANA."
        />
        <Intro />
        <Capabilities />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
