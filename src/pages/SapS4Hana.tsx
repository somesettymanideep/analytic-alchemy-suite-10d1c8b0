import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerSap from "@/assets/banner-sap-s4hana.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Boxes,
  Sparkles,
  Wallet,
  Truck,
  ShoppingCart,
  Factory,
  Bot,
  ShieldCheck,
  Database,
  Route,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";

/* -------------------------------------------------------------- */
/*  Intro                                                          */
/* -------------------------------------------------------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Boxes size={14} /> SAP S/4HANA Implementation
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
          The intelligent ERP that runs your business in real time — and powers your AI strategy from the core.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
          Legacy ERP systems were built for a world of batch processing and end-of-day reports.
          <strong className="text-foreground"> SAP S/4HANA</strong> is built for now — an in-memory, cloud-native ERP
          that gives your business real-time financial visibility, AI-driven supply chain intelligence, and a clean
          foundation for autonomous agents. <strong className="text-foreground">Nextgenlytics</strong> specialises in
          implementing S/4HANA with a Clean Core approach, so your system is fast today and AI-ready for tomorrow.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  What S/4HANA Delivers                                          */
/* -------------------------------------------------------------- */
function WhatItDelivers() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: Wallet,
      title: "Real-Time Financial Closing",
      body: "S/4HANA's Universal Journal eliminates batch processing entirely — giving your finance team instant profitability analysis, real-time cash flow forecasting, and the ability to close books faster than ever.",
    },
    {
      Icon: Truck,
      title: "Intelligent Supply Chain Management",
      body: "Get 360-degree visibility across your global supply chain. AI-driven insights flag disruptions before they happen, while automated demand planning keeps inventory lean and responsive.",
    },
    {
      Icon: ShoppingCart,
      title: "Smarter Procurement & Sourcing",
      body: "Automated invoice processing and intelligent spend analysis streamline vendor management — reducing costs and ensuring compliance without adding headcount.",
    },
    {
      Icon: Factory,
      title: "Industry 4.0 Manufacturing",
      body: "Integrate IoT sensors and AI directly into your production lines. Predictive maintenance and real-time scheduling minimise downtime and maximise throughput across your facilities.",
    },
    {
      Icon: Bot,
      title: "Native SAP Joule & AI Agent Integration",
      body: "S/4HANA's Clean Core architecture is designed to work directly with SAP Joule and custom AI agents — making it the ideal foundation for autonomous enterprise operations.",
    },
  ];
  return (
    <section className="section-alt py-20 md:py-28">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Capabilities
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            What SAP S/4HANA delivers for your business
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real-time intelligence across every line of business — built on a Clean Core, ready for AI.
          </p>
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <it.Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground font-heading">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Why Nextgenlytics                                              */
/* -------------------------------------------------------------- */
function WhyUs() {
  const { ref, isVisible } = useScrollReveal();
  const pillars = [
    {
      Icon: ShieldCheck,
      title: "Clean Core Strategy",
      body: "We build on standard SAP processes and modular extensions — keeping your system agile, upgrade-friendly, and ready for whatever AI innovation comes next.",
    },
    {
      Icon: Database,
      title: "Data-Led Migration",
      body: "We cleanse, govern, and optimise your data during the move — ensuring your AI models are grounded in high-fidelity, trustworthy information from day one.",
    },
    {
      Icon: Route,
      title: "Proven Transition Paths",
      body: "Whether Greenfield, Brownfield, or Selective Data Transition, we choose the migration approach that delivers maximum ROI with minimum disruption to your operations.",
    },
  ];
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <CheckCircle2 size={14} /> Why Nextgenlytics
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
          Why choose Nextgenlytics for SAP S/4HANA?
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          SAP S/4HANA is not just a new ERP — it is the foundation your AI strategy is built on.
          We make sure that foundation is solid.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((p, i) => (
          <article
            key={p.title}
            className={`group relative bg-card rounded-2xl border border-border/60 p-8 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 120}ms` }}
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent">
              <p.Icon size={22} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-foreground font-heading">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 text-center">
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
        >
          Talk to an SAP S/4HANA specialist
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  FAQ                                                            */
/* -------------------------------------------------------------- */
const faqs = [
  {
    q: "What is SAP S/4HANA?",
    a: "SAP S/4HANA is SAP's next-generation ERP suite, built on an in-memory database (SAP HANA) that enables real-time data processing, AI integration, and cloud deployment. It replaces traditional SAP ECC with a simplified data model, modern UI (SAP Fiori), and native AI capabilities including SAP Joule.",
  },
  {
    q: "What is the difference between SAP ECC and SAP S/4HANA?",
    a: "SAP ECC runs on a traditional relational database with batch processing, while SAP S/4HANA uses an in-memory HANA database for real-time processing, a simplified data model, and built-in AI capabilities. SAP will end mainstream maintenance for ECC in 2027, making S/4HANA migration a strategic priority for every ECC customer.",
  },
  {
    q: "What does Clean Core mean in SAP S/4HANA?",
    a: "Clean Core is a SAP methodology that keeps the S/4HANA system standard and unmodified by moving all customisations to the SAP Business Technology Platform (BTP). This ensures the core ERP remains easy to upgrade and AI-ready, while custom business logic is maintained separately without accumulating technical debt.",
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
export default function SapS4Hana() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerSap}
          eyebrow="Solutions · SAP"
          title="SAP S/4HANA Implementation"
          description="The intelligent ERP that runs your business in real time — and powers your AI strategy from the core."
        />
        <Intro />
        <WhatItDelivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
