import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-bluegecko.jpg";
import cs1Asset from "@/assets/case-studies/cs1.jpg.asset.json";
import cs2Asset from "@/assets/case-studies/cs2.jpg.asset.json";
import cs3Asset from "@/assets/case-studies/cs3.jpg.asset.json";
import cs4Asset from "@/assets/case-studies/cs4.jpg.asset.json";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  FileText,
  Building2,
  Target,
  AlertTriangle,
  Lightbulb,
  Settings,
  Check,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

type Section = {
  title: string;
  Icon: typeof Building2;
  items: string[];
};

type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  sections: Section[];
};


const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    tag: "D365 F&O · Maintenance & Support",
    title: "D365 F&O Maintenance and Support for Nash Squared",
    summary:
      "Global managed services for a 70+ entity D365 F&O footprint — keeping finance and operations running across continents.",
    image: cs1Asset.url,
    imageAlt: "Global team reviewing finance dashboards across multiple monitors",
    sections: [
      {
        title: "Client",
        Icon: Building2,
        items: [
          "Nash Squared — a global provider of technology and talent solutions.",
          "Formerly known as Harvey Nash, founded in 1988.",
          "3,000+ employees across 36 locations in the USA, Europe and Asia-Pacific.",
        ],
      },
      {
        title: "Program Details",
        Icon: Settings,
        items: [
          "Supporting 6 ISVs and 70+ Legal Entities across the UK, Ireland, Netherlands, Belgium, Poland, Germany, Americas, Canada and India.",
          "Integrations with 3rd party software including CMS, Nétive, Tungsten AP Essential (Kofax), TAS (SKG), Lasernet and more.",
          "Standardisation of analytical and operational reports across entities — system study, change management, normalization, integration and automation.",
          "Azure Synapse configuration and support for analytical report development for group-level and management reporting.",
        ],
      },
      {
        title: "Modules Supported",
        Icon: FileText,
        items: [
          "Cash and bank management",
          "Consolidations",
          "Credit and collections",
          "Expense management",
          "Fixed assets",
          "General ledger",
          "Human Resources",
          "Organisation administration",
          "Purchase ledger · Sales ledger · Tax",
          "TAS (ISV)",
        ],
      },
      {
        title: "Team",
        Icon: Target,
        items: ["Technical Analyst — 2", "Functional Analyst — 4"],
      },
      {
        title: "Solution",
        Icon: Lightbulb,
        items: [
          "Seamless BAU operations with two dedicated teams — one running ongoing activities, one driving diagnostics and improvements.",
          "Shift-based support structure aligned with GMT for effective BAU coverage.",
          "Ongoing evaluation of ISVs and license utilisation to optimise operational costs.",
        ],
      },
    ],
  },
  {
    id: "cs-2",
    tag: "Analytics · D365 F&O",
    title: "Analytics for D365 F&O Process",
    summary:
      "Lifting service quality, operational efficiency and skill development across a global recruitment platform powered by D365 F&O and Power BI.",
    image: cs2Asset.url,
    imageAlt: "Analyst exploring Power BI style data visualizations",
    sections: [
      {
        title: "Client",
        Icon: Building2,
        items: [
          "Harvey Nash delivers permanent and contractor recruitment, direct sourcing, MSP & VMS partnership and NextGen Hire-Train-Deploy solutions to clients of every size.",
        ],
      },
      {
        title: "System Details",
        Icon: Settings,
        items: ["D365 F&O, X++, SQL", "Power BI"],
      },
      {
        title: "Business Objectives",
        Icon: Target,
        items: [
          "Client Retention — maintain high retention through quality service and support.",
          "Service Quality — deliver IT services with minimal defects and downtime.",
          "Operational Efficiency — reduce costs, improve turnaround and increase productivity.",
          "Employee Skill Development — continuous upskilling in AI, cloud and cybersecurity.",
        ],
      },
      {
        title: "Challenges",
        Icon: AlertTriangle,
        items: [
          "D365 F&O support combines technical, functional and business complexity.",
          "Complex business processes, frequent production issues and limited documentation.",
          "High user expectations and intermittent system performance problems.",
        ],
      },
      {
        title: "Solution",
        Icon: Lightbulb,
        items: [
          "Regular monitoring & proactive support.",
          "Sync calls between business and technical teams.",
          "Data validation & controls.",
          "User training & support.",
          "Strengthened security & access control.",
        ],
      },
    ],
  },
  {
    id: "cs-3",
    tag: "Finance Operations · D365 F&O",
    title: "Streamlining Financial Operations with D365 F&O",
    summary:
      "License optimisation, workflow automation and end-to-end financial process improvements across a 9-country D365 F&O estate.",
    image: cs3Asset.url,
    imageAlt: "Finance professionals collaborating around a laptop",
    sections: [
      {
        title: "Client",
        Icon: Building2,
        items: [
          "Nash Squared delivers global tech and talent solutions in recruitment, outsourcing and managed services.",
          "3,300 staff across 9 countries — builds digital capability and manages technology talent.",
        ],
      },
      {
        title: "Business Objectives",
        Icon: Target,
        items: [
          "Provide dedicated D365 F&O support services.",
          "Handle BAU queries — user issues, troubleshooting, reporting fixes.",
          "Proactively optimise workflows and processes.",
          "Ensure compliance and smooth financial operations.",
        ],
      },
      {
        title: "Challenges",
        Icon: AlertTriangle,
        items: [
          "License allocation was not optimised — driving up cost and misaligning user access.",
          "Reporting errors, workflow bottlenecks and onboarding delays impacted daily operations.",
          "Critical financial processes — consolidation, year-end close, fiscal period management — required meticulous handling.",
        ],
      },
      {
        title: "System Details",
        Icon: Settings,
        items: [
          "MS D365 F&O · X++ / SQL",
          "SSRS and ER for reporting",
          "Azure cloud services",
          "Power BI · Microsoft Dataverse",
          "Power Automate / Logic Apps",
        ],
      },
      {
        title: "Solution",
        Icon: Lightbulb,
        items: [
          "Automated the invoice workflow from Pagero to Kofax for Belgian entities.",
          "Optimised Finance and Team Members license allocation in D365 F&O — role and task-based licensing reducing cost.",
          "Resolved reporting errors, fixed workflow bottlenecks and streamlined the D365 onboarding process.",
          "Process optimisation across consolidation, year-end close, fiscal period management, main account and financial dimensions.",
          "Continuous advisory support for best practices.",
        ],
      },
    ],
  },
  {
    id: "cs-4",
    tag: "Automation · D365 F&O",
    title: "E-Invoice Processing Automation for D365 F&O",
    summary:
      "Touchless, 24/7 invoice processing using Azure Logic Apps and OneSource API — the foundation for Agent 365 in AP.",
    image: cs4Asset.url,
    imageAlt: "Abstract automation flow with invoice documents in a data center",
    sections: [
      {
        title: "System Details",
        Icon: Settings,
        items: ["D365 F&O", "Azure Logic Apps", "Power Automate", "OneSource API", "Pagero / Kofax"],
      },
      {
        title: "Challenges",
        Icon: AlertTriangle,
        items: [
          "Finance users manually downloaded invoice PDFs from OneSource (Pagero) and emailed them to Kofax — time-consuming, error-prone and unscalable.",
          "Different invoice types (AP, self-billed, credit notes) required routing to different addresses, adding complexity.",
          "Duplicate invoices occurred due to unreliable status update steps in earlier workflows.",
        ],
      },
      {
        title: "Solution",
        Icon: Lightbulb,
        items: [
          "Automated end-to-end flow with Azure Logic Apps — authenticates to OneSource API via bearer token every 15 minutes.",
          "Loops through all legal entity company IDs, retrieves invoices and routes AP / self-billed invoices to the correct mailboxes.",
          "Status update on each invoice prevents duplicates; debug flow enables manual reprocessing by date range.",
          "Full error logging with red/green indicators; separated Prod / Debug / UAT flows for easy support.",
          "Entity management — new companies added via array config; removals handled cleanly to prevent failures.",
        ],
      },
      {
        title: "Benefits Gained",
        Icon: TrendingUp,
        items: [
          "Manual efforts — eliminated; entities fully automated.",
          "Processing — every 15 minutes, 24/7.",
          "Invoice types — Self-bill, AP, Credit Notes.",
          "Duplicates — resolved via status fix.",
        ],
      },
      {
        title: "Agent 365 Opportunity",
        Icon: Sparkles,
        items: [
          "This automation is the existing foundation. Microsoft's Payflow Agent and Account Reconciliation Agent in D365 Finance are the natural next step — extending from invoice delivery to fully touchless AP processing and GL reconciliation, without custom Logic App flows.",
        ],
      },
    ],
  },
];

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { value: "70+", label: "Legal entities supported" },
    { value: "9", label: "Countries" },
    { value: "24/7", label: "BAU coverage" },
    { value: "15min", label: "Invoice cycle" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 items-end ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <FileText size={14} /> Case Studies
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.05]">
            Outcomes delivered across{" "}
            <span className="text-primary">D365 Finance &amp; Operations</span>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Real engagements, measurable results — multi-entity managed services, invoice automation,
            license optimisation and analytics enablement.
          </p>
        </div>
        <div className="lg:col-span-5 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-4">
              <div className="text-2xl md:text-3xl font-bold font-heading text-primary">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionBlock({ section, index }: { section: Section; index: number }) {
  const { Icon, title, items } = section;
  return (
    <div className="grid md:grid-cols-12 gap-6 py-8 border-t border-border first:border-t-0 first:pt-0">
      <div className="md:col-span-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Icon size={18} />
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h4 className="mt-3 text-xl md:text-2xl font-bold font-heading text-foreground">{title}</h4>
      </div>
      <ul className="md:col-span-8 space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-[15px] text-foreground/85 leading-relaxed">
            <Check size={16} className="mt-1 shrink-0 text-accent" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CaseStudyArticle({ cs, index, anchor }: { cs: CaseStudy; index: number; anchor: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <article
      id={anchor}
      ref={ref}
      className={`scroll-mt-28 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
    >
      <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm">
        {/* Cover image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-muted">
          <img
            src={cs.image}
            alt={cs.imageAlt}
            loading="lazy"
            width={1280}
            height={832}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" aria-hidden />
        </div>
        {/* Hero header */}
        <header className="relative bg-primary text-primary-foreground p-8 md:p-12 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col md:flex-row md:items-start gap-6">
            <div className="text-5xl md:text-7xl font-bold font-heading text-accent leading-none">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent/20 backdrop-blur text-primary-foreground text-[10px] font-semibold uppercase tracking-widest border border-accent/40">
                {cs.tag}
              </span>
              <h3 className="mt-3 text-2xl md:text-4xl font-bold font-heading leading-tight">
                {cs.title}
              </h3>
              <p className="mt-3 text-primary-foreground/85 leading-relaxed max-w-3xl">
                {cs.summary}
              </p>
            </div>
          </div>
        </header>
        {/* Body */}
        <div className="p-6 md:p-12">
          {cs.sections.map((s, i) => (
            <SectionBlock key={s.title} section={s} index={i} />
          ))}
        </div>
      </div>
    </article>
  );
}

function FeaturedCard({ cs, anchor }: { cs: CaseStudy; anchor: string }) {
  const { ref, isVisible } = useScrollReveal();
  const highlights = cs.sections
    .find((s) => /solution|benefits/i.test(s.title))
    ?.items.slice(0, 3) ?? cs.sections[0].items.slice(0, 3);
  return (
    <div ref={ref} className={isVisible ? "animate-reveal-up" : "opacity-0"}>
    <a
      href={`#${anchor}`}
      className="group relative block overflow-hidden rounded-3xl bg-primary text-primary-foreground shadow-xl shadow-primary/20 transition-transform hover:-translate-y-1"
    >
      <div className="grid md:grid-cols-12">
        <div className="relative md:col-span-6 aspect-[4/3] md:aspect-auto overflow-hidden">
          <img
            src={cs.image}
            alt={cs.imageAlt}
            loading="lazy"
            width={1280}
            height={832}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-primary/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-primary/40" aria-hidden />
        </div>
        <div className="relative md:col-span-6 p-8 md:p-12">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl pointer-events-none" aria-hidden />
          <div className="relative">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={12} /> Featured Case Study
          </span>
          <h3 className="mt-4 text-3xl md:text-5xl font-bold font-heading leading-[1.05]">
            {cs.title}
          </h3>
          <p className="mt-5 text-primary-foreground/85 leading-relaxed max-w-2xl">
            {cs.summary}
          </p>
          <div className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/60">
            {cs.tag}
          </div>
          <ul className="mt-4 space-y-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-primary-foreground/90 leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
            Read the full story <ArrowRight size={16} />
          </span>
          </div>
        </div>
      </div>
    </a>
    </div>
  );
}

function MagazineCard({ cs, index, anchor }: { cs: CaseStudy; index: number; anchor: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={isVisible ? "animate-reveal-up" : "opacity-0"}>
    <a
      href={`#${anchor}`}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <img
          src={cs.image}
          alt={cs.imageAlt}
          loading="lazy"
          width={1280}
          height={832}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/95 backdrop-blur text-accent text-[10px] font-semibold uppercase tracking-wider border border-border">
          {cs.tag}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold font-heading text-primary/20 group-hover:text-primary/40 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
        />
      </div>
      <h3 className="mt-3 text-lg md:text-xl font-bold font-heading text-foreground leading-snug">
        {cs.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {cs.summary}
      </p>
      <span className="mt-auto pt-4 border-t border-border text-xs font-semibold uppercase tracking-wider text-primary inline-flex items-center gap-2">
        Read case study <ArrowRight size={12} />
      </span>
      </div>
    </a>
    </div>
  );
}

function CaseStudiesLayout() {
  const items = caseStudies.map((c, i) => ({ ...c, anchor: `case-${i + 1}` }));
  const [featured, ...rest] = items;
  const [activeTab, setActiveTab] = useState(featured.anchor);
  const activeArticle = items.find((i) => i.anchor === activeTab) ?? featured;

  return (
    <>
      {/* Magazine grid */}
      <section className="section-alt py-14 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                The Portfolio
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold font-heading text-foreground">
                Selected engagements
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Tap any case to jump into the full editorial breakdown — context, challenges, solution and outcomes.
            </p>
          </div>

          <FeaturedCard cs={featured} anchor={featured.anchor} />

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((cs, i) => (
              <MagazineCard key={cs.id} cs={cs} index={i + 1} anchor={cs.anchor} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial detail */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
              Inside the Work
            </span>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold font-heading text-foreground leading-tight">
              The full editorial — pick a case to read.
            </h3>
          </div>

          {/* Tab bar */}
          <div className="mt-8 -mx-4 px-4 overflow-x-auto">
            <div className="inline-flex gap-2 p-1.5 bg-muted rounded-full border border-border">
              {items.map((cs, i) => {
                const isActive = activeTab === cs.anchor;
                return (
                  <button
                    key={cs.id}
                    onClick={() => setActiveTab(cs.anchor)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="opacity-60 mr-2">{String(i + 1).padStart(2, "0")}</span>
                    Case {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <CaseStudyArticle
              key={activeArticle.anchor}
              cs={activeArticle}
              index={items.findIndex((i) => i.anchor === activeArticle.anchor)}
              anchor={activeArticle.anchor}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default function CaseStudy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      <PageBanner
        image={banner}
        eyebrow="Client Work · Case Studies"
        title="Case Studies — D365 F&O Engagements"
        description="A closer look at programs delivering measurable financial, operational and automation outcomes."
      />
      <Intro />
      <CaseStudiesLayout />
      <Footer />
    </div>
  );
}