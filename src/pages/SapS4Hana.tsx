import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerSap from "@/assets/banner-sap-s4hana.jpg";
import imgFinance from "@/assets/sap-finance-realtime.jpg";
import imgSupply from "@/assets/sap-supply-chain.jpg";
import imgManufacturing from "@/assets/sap-manufacturing.jpg";
import imgCleanCore from "@/assets/sap-clean-core.jpg";
import imgMigration from "@/assets/sap-migration-team.jpg";
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
  Zap,
  Gauge,
  LineChart,
} from "lucide-react";

/* -------------------------------------------------------------- */
/*  Intro — split layout with stat strip                           */
/* -------------------------------------------------------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Gauge, value: "10×", label: "Faster financial close" },
    { Icon: LineChart, value: "Real-time", label: "Universal Journal" },
    { Icon: Zap, value: "2027", label: "ECC end of maintenance" },
  ];
  return (
    <section className="container py-20 md:py-28" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        {/* Left text */}
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Boxes size={14} /> SAP S/4HANA Implementation
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            The intelligent ERP that runs your business in real time —{" "}
            <span className="text-primary">and powers your AI strategy</span> from the core.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Legacy ERP systems were built for a world of batch processing and end-of-day reports.
            <strong className="text-foreground"> SAP S/4HANA</strong> is built for now — an in-memory, cloud-native ERP
            that gives your business real-time financial visibility, AI-driven supply chain intelligence, and a clean
            foundation for autonomous agents.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">Nextgenlytics</strong> specialises in implementing S/4HANA with a Clean
            Core approach, so your system is fast today and AI-ready for tomorrow.
          </p>
        </div>

        {/* Right image stack */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img
              src={imgFinance}
              alt="Finance team analysing real-time data"
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
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Clean Core</p>
              <p className="text-sm font-bold text-foreground font-heading">AI-Ready Foundation</p>
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
/*  Capabilities — alternating image rows (zigzag)                 */
/* -------------------------------------------------------------- */
function Capabilities() {
  const { ref, isVisible } = useScrollReveal();
  const items = [
    {
      Icon: Wallet,
      title: "Real-Time Financial Closing",
      body: "S/4HANA's Universal Journal eliminates batch processing entirely — giving your finance team instant profitability analysis, real-time cash flow forecasting, and the ability to close books faster than ever.",
      image: imgFinance,
      tag: "Finance",
    },
    {
      Icon: Truck,
      title: "Intelligent Supply Chain",
      body: "Get 360-degree visibility across your global supply chain. AI-driven insights flag disruptions before they happen, while automated demand planning keeps inventory lean and responsive.",
      image: imgSupply,
      tag: "Supply Chain",
    },
    {
      Icon: Factory,
      title: "Industry 4.0 Manufacturing",
      body: "Integrate IoT sensors and AI directly into your production lines. Predictive maintenance and real-time scheduling minimise downtime and maximise throughput across your facilities.",
      image: imgManufacturing,
      tag: "Manufacturing",
    },
  ];
  const compact = [
    {
      Icon: ShoppingCart,
      title: "Smarter Procurement & Sourcing",
      body: "Automated invoice processing and intelligent spend analysis streamline vendor management — reducing costs and ensuring compliance without adding headcount.",
    },
    {
      Icon: Bot,
      title: "Native SAP Joule & AI Agents",
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

        {/* Zigzag rows */}
        <div className="mt-16 space-y-20 md:space-y-28">
          {items.map((it, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={it.title}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className={`lg:col-span-7 relative ${reverse ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
                    <img
                      src={it.image}
                      alt={it.title}
                      width={1280}
                      height={896}
                      loading="lazy"
                      className="w-full h-[280px] md:h-[380px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                      {it.tag}
                    </div>
                  </div>
                  <div
                    className={`absolute -z-10 w-48 h-48 rounded-full bg-primary/15 blur-3xl ${
                      reverse ? "-left-10 -top-10" : "-right-10 -bottom-10"
                    }`}
                  />
                </div>

                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                    <it.Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-2xl md:text-3xl font-bold text-foreground font-heading leading-tight">
                    {it.title}
                  </h3>
                  <div className="mt-3 h-1 w-12 bg-accent rounded-full" />
                  <p className="mt-5 text-base text-muted-foreground leading-relaxed">{it.body}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Two compact cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-6 lg:gap-8">
          {compact.map((it, i) => (
            <article
              key={it.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-8 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(items.length + i) * 120}ms` }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <it.Icon size={22} />
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
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Why Nextgenlytics — split image + stacked pillars              */
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
      body: "Whether Greenfield, Brownfield, or Selective Data Transition, we choose the migration approach that delivers maximum ROI with minimum disruption.",
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
              Your foundation for an AI-native enterprise.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              SAP S/4HANA is not just a new ERP — it is the foundation your AI strategy is built on.
              We make sure that foundation is solid.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img
                src={imgMigration}
                alt="Consulting team reviewing migration roadmap"
                width={1280}
                height={896}
                loading="lazy"
                className="w-full h-[320px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">Greenfield · Brownfield · Selective</p>
                <p className="text-primary-foreground/80 text-xs mt-1">Migration paths tailored to your business.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to an SAP S/4HANA specialist
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

          {/* Clean Core feature card */}
          <article
            className={`relative overflow-hidden rounded-2xl border border-border/60 shadow-lg ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${pillars.length * 140}ms` }}
          >
            <img
              src={imgCleanCore}
              alt="Clean Core architecture visualisation"
              width={1280}
              height={1280}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            <div className="relative p-7 md:p-8 text-primary-foreground">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                <Sparkles size={12} /> The Nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Clean Core means upgrade-ready for life.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                Custom logic lives on SAP BTP, never in the core. Your S/4HANA system stays standard,
                fast, and AI-ready — release after release.
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
        <Capabilities />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
