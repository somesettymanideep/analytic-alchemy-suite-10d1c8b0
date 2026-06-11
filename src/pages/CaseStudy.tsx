import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-bluegecko.jpg";
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
  sections: Section[];
};

const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    tag: "D365 F&O · Maintenance & Support",
    title: "D365 F&O Maintenance and Support for Nash Squared",
    summary:
      "Global managed services for a 70+ entity D365 F&O footprint — keeping finance and operations running across continents.",
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
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`max-w-4xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <FileText size={14} /> Case Studies
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.1]">
          Outcomes delivered across <span className="text-primary">D365 Finance &amp; Operations</span>.
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          Real engagements, measurable results — from multi-entity managed services to invoice automation
          and analytics enablement.
        </p>
      </div>
    </section>
  );
}

function CaseStudyCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState(false);
  const visibleSections = open ? cs.sections : cs.sections.slice(0, 2);
  return (
    <article
      ref={ref}
      className={`rounded-2xl border border-border bg-card shadow-sm overflow-hidden ${
        isVisible ? "animate-reveal-up" : "opacity-0"
      }`}
    >
      <header className="p-6 md:p-8 border-b border-border bg-gradient-to-br from-primary/5 to-transparent">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
            {index + 1}
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">{cs.tag}</span>
        </div>
        <h3 className="mt-3 text-2xl md:text-3xl font-bold font-heading text-foreground">{cs.title}</h3>
        <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">{cs.summary}</p>
      </header>
      <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
        {visibleSections.map(({ title, Icon, items }) => (
          <div key={title} className="rounded-xl border border-border bg-background p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/15 text-primary">
                <Icon size={18} />
              </span>
              <h4 className="text-base font-bold text-foreground font-heading">{title}</h4>
            </div>
            <ul className="mt-4 space-y-2.5">
              {items.map((it, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground/85 leading-relaxed">
                  <Check size={14} className="mt-1 shrink-0 text-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {cs.sections.length > 2 && (
        <div className="px-6 md:px-8 pb-6 md:pb-8">
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            {open ? "Show less" : `Show all ${cs.sections.length} sections`}
          </button>
        </div>
      )}
    </article>
  );
}

function CaseStudiesList() {
  return (
    <section className="section-alt py-12 md:py-20">
      <div className="container space-y-10">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={cs.id} cs={cs} index={i} />
        ))}
      </div>
    </section>
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
      <CaseStudiesList />
      <Footer />
    </div>
  );
}