import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import banner from "@/assets/banner-sac.jpg";
import imgInsights from "@/assets/sac-smart-insights.jpg";
import imgPlanning from "@/assets/sac-planning.jpg";
import imgStorytelling from "@/assets/sac-storytelling.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  BarChart3,
  LineChart,
  PieChart,
  Presentation,
  Brain,
  Layers,
  Network,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  Gauge,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Layers, value: "Unified", label: "SAP + non-SAP data sources" },
    { Icon: Brain, value: "Smart", label: "Augmented, AI-driven insights" },
    { Icon: Presentation, value: "Boardroom", label: "Executive-ready storytelling" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> SAP Analytics Cloud
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            One <span className="text-primary">reporting layer</span> for finance, operations, and executive teams — powered by SAP Analytics Cloud.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most enterprises run their business on SAP — but their reports live in silos. Spreadsheets, disconnected BI
            tools, and manual consolidation slow down every decision. <strong className="text-foreground">SAP Analytics Cloud (SAC)</strong>
            unifies planning, business intelligence, and predictive analytics in one cloud service — natively
            integrated with SAP S/4HANA, SAP BW, Datasphere, and any non-SAP source.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics</strong> delivers SAC end-to-end — connecting SAP and non-SAP data
            sources into a unified reporting layer for finance, operations, and executive teams.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgInsights} alt="SAP Analytics Cloud smart insights dashboard" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <BarChart3 size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Reporting Layer</p>
              <p className="text-sm font-bold text-foreground font-heading">BI + Planning + AI</p>
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

/* ---------------- Delivers ---------------- */
function Delivers() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      Icon: Network,
      title: "Unified Data Connectivity",
      body: "We connect SAP S/4HANA, SAP BW/4HANA, Datasphere, Snowflake, Databricks, and non-SAP sources into a single semantic layer — so finance and operations report from one version of the truth.",
    },
    {
      Icon: LineChart,
      title: "Finance & Operations Dashboards",
      body: "Pre-built and custom stories for P&L, cash flow, working capital, supply chain KPIs, and operational metrics — designed with the CFO and COO offices, not just IT.",
    },
    {
      Icon: Gauge,
      title: "Integrated Planning (SAC Planning)",
      body: "Move beyond static spreadsheets — driver-based planning, rolling forecasts, and what-if scenario modelling directly on live SAP data, with write-back to S/4HANA.",
    },
    {
      Icon: Brain,
      title: "Smart Insights & Predictive",
      body: "SAC's built-in augmented analytics — Smart Insights, Smart Predict, and Search-to-Insight — surface anomalies and drivers automatically, so users get answers in natural language.",
    },
    {
      Icon: Presentation,
      title: "Executive Storytelling",
      body: "Boardroom-ready digital boardroom experiences and mobile-optimised stories that let executives explore KPIs interactively — replacing static PowerPoint reporting cycles.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> What nextgenlytics Delivers with SAC
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One reporting layer for BI, planning, and predictive
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From connectivity to storytelling — every SAC deployment we deliver is built around the decisions finance,
            operations, and executive teams actually need to make.
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
            <img src={imgPlanning} alt="SAC integrated planning and forecasting" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Planning & Predictive
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Driver-based planning and augmented insights — on live SAP data.
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

/* ---------------- WhyUs ---------------- */
function WhyUs() {
  const { ref, isVisible } = useScrollReveal();
  const pillars = [
    {
      Icon: Layers,
      title: "SAP-Native, Non-SAP Ready",
      body: "We design SAC deployments that go live-connected to S/4HANA and BW while blending in Snowflake, Databricks, Fabric, or flat files — so reporting reflects the whole business, not just the ERP.",
    },
    {
      Icon: PieChart,
      title: "Finance-Led Delivery",
      body: "Our consultants speak the language of the CFO — chart of accounts, cost centres, IFRS, consolidation. We deliver SAC stories that actually match how finance teams close the month.",
    },
    {
      Icon: ShieldCheck,
      title: "Governed & Secure by Design",
      body: "Row-level security, data access controls, and lifecycle management built in from day one — so the same platform serves executives, controllers, and analysts without compromising governance.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why nextgenlytics for SAC
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              SAP-native depth, finance-led delivery, governed from day one.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              SAP Analytics Cloud — implemented by nextgenlytics — turns your SAP landscape into a decision engine for
              finance, operations, and the boardroom.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgStorytelling} alt="SAC storytelling and digital boardroom" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">S/4HANA · BW · Datasphere · Snowflake · Databricks</p>
                <p className="text-primary-foreground/80 text-xs mt-1">One unified reporting layer, governed end to end.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to an SAC specialist
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
                <Brain size={12} /> The nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Finance-fluent consultants. SAP-native stories. Boardroom-ready insights.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We pair SAC-certified consultants with finance and operations domain experts — so every dashboard,
                every plan, and every predictive model ships with real business context, not just charts.
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
    q: "What is SAP Analytics Cloud and what is it used for?",
    a: "SAP Analytics Cloud (SAC) is SAP's cloud-based analytics platform that combines business intelligence, planning, and predictive analytics in a single service. Organisations use it to build interactive dashboards, run driver-based financial planning, perform what-if scenario modelling, and surface AI-driven insights — all natively integrated with SAP S/4HANA, SAP BW/4HANA, Datasphere, and non-SAP data sources.",
  },
  {
    q: "How does SAP Analytics Cloud connect to non-SAP data?",
    a: "SAC connects to non-SAP sources — Snowflake, Databricks, Microsoft Fabric, SQL databases, flat files, and cloud APIs — using live connections or scheduled data imports. We typically model non-SAP data through SAP Datasphere or a semantic layer so that reports and plans reflect a single, governed version of the truth across the whole business.",
  },
  {
    q: "What's the difference between SAC BI and SAC Planning?",
    a: "SAC BI focuses on reporting, dashboards, and augmented analytics — helping teams understand what's happening and why. SAC Planning adds write-back capability, driver-based models, rolling forecasts, and workflow — so the same platform used to analyse performance can also be used to plan and forecast, with data flowing back into SAP S/4HANA where appropriate.",
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
export default function SapAnalyticsCloud() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Solutions · Data Engineering"
          title="SAP Analytics Cloud — Reporting & Insights"
          description="SAP Analytics Cloud delivery — connecting SAP and non-SAP data sources into a unified reporting layer for finance, operations, and executive teams."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="SAP Analytics Cloud — Reporting & Insights"
          headline="SAP Analytics Cloud delivery — connecting SAP and non-SAP data sources into a unified reporting layer for finance, operations, and executive teams."
          evidence="One cloud service for BI, planning, and predictive analytics — natively integrated with SAP S/4HANA, BW, and Datasphere, and extensible to Snowflake, Databricks, and Microsoft Fabric."
        />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}