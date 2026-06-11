import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-d365.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { LifeBuoy, Globe2, Layers, BarChart3, Check, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const programDetails = [
  "Supporting 6 ISVs and 70+ Legal Entities across the UK, Ireland, Netherlands, Belgium, Poland, Germany, Americas, Canada, and India.",
  "Several entities operate with 3rd party software integrated into D365 for operations and financial data.",
  "Activities include system study, change management, process normalization, integration, and automation.",
];

const modules = [
  "Cash and bank management",
  "Consolidations",
  "Credit and collections",
  "Expense management",
  "Fixed assets",
  "General ledger",
  "Human Resources",
  "Purchase ledger",
  "Sales ledger",
  "Tax",
  "TAS (ISV)",
];

const analytics = [
  "Azure Synapse configuration and support for analytical report development for group-level and management reporting.",
  "Standardization of both analytical and operational reports across entities.",
];

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`max-w-4xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <LifeBuoy size={14} /> Application Managed Services
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.1]">
          Our F&amp;O AMS with a <span className="text-primary">UK Professional Services</span> leader.
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          A multi-entity Dynamics 365 Finance &amp; Operations managed service spanning continents,
          ISVs and reporting platforms — engineered for reliability, optimisation and continuous improvement.
        </p>
      </div>
    </section>
  );
}

function ProgramDetails() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-12 md:py-20">
      <div className="container" ref={ref}>
        <div className={`grid lg:grid-cols-12 gap-10 items-start ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Globe2 size={14} /> Program Details
            </span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold font-heading text-foreground">
              Global coverage. Single accountable team.
            </h3>
          </div>
          <ul className="lg:col-span-7 space-y-4">
            {programDetails.map((d, i) => (
              <li key={i} className="flex gap-4 p-5 rounded-xl bg-card border border-border shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={16} />
                </span>
                <p className="text-foreground/85 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FunctionalModules() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-20" ref={ref}>
      <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Layers size={14} /> Functional Modules
        </span>
        <h3 className="mt-4 text-3xl md:text-4xl font-bold font-heading text-foreground">
          Supporting the full F&amp;O footprint
        </h3>
        <p className="mt-4 text-muted-foreground">
          End-to-end functional ownership across finance, HR, procurement and ISV add-ons.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {modules.map((m) => (
          <div
            key={m}
            className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent/15 text-primary">
              <Building2 size={16} />
            </span>
            <span className="text-sm font-medium text-foreground">{m}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Analytics() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-12 md:py-20">
      <div className="container" ref={ref}>
        <div className={`grid lg:grid-cols-12 gap-10 items-start ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <BarChart3 size={14} /> Azure Synapse &amp; Power BI
            </span>
            <h3 className="mt-4 text-3xl md:text-4xl font-bold font-heading text-foreground">
              Reports &amp; analytics, standardised across entities
            </h3>
          </div>
          <ul className="lg:col-span-7 space-y-4">
            {analytics.map((d, i) => (
              <li key={i} className="flex gap-4 p-5 rounded-xl bg-card border border-border shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary">
                  <Check size={16} />
                </span>
                <p className="text-foreground/85 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CtaBlock() {
  return (
    <section className="container py-12 md:py-16">
      <div className="rounded-2xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold font-heading">Explore our case studies</h3>
          <p className="mt-2 text-primary-foreground/85">See how we deliver measurable outcomes across D365 F&amp;O programs.</p>
        </div>
        <Link
          to="/case-study"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
        >
          View Case Studies <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export default function AmsServices() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      <PageBanner
        image={banner}
        eyebrow="Client Work · AMS"
        title="Application Managed Services for Dynamics 365 F&O"
        description="Multi-region, multi-entity managed services keeping enterprise finance running 24/7."
      />
      <Intro />
      <ProgramDetails />
      <FunctionalModules />
      <Analytics />
      <CtaBlock />
      <Footer />
    </div>
  );
}