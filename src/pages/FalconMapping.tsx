import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import mascotAsset from "@/assets/falcon-mascot.png.asset.json";
import flyingAsset from "@/assets/falcon-flying.png.asset.json";
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Layers,
  Search,
  Lightbulb,
  CheckCircle2,
  Rocket,
  Plug,
  Building2,
  Database,
  Users,
  Boxes,
  GitMerge,
  FileCheck,
  Warehouse,
  BarChart3,
  Briefcase,
  Package,
  Cpu,
} from "lucide-react";

const highlights = [
  { Icon: Sparkles, title: "AI-Powered Mapping", body: "Auto-suggests mappings with high accuracy" },
  { Icon: Zap, title: "Accelerated Delivery", body: "Reduce mapping time by up to 60%" },
  { Icon: ShieldCheck, title: "End-to-End Governance", body: "Built-in standards, approvals & audit" },
  { Icon: Layers, title: "Scalable & Flexible", body: "Handle complex migrations at scale" },
];

const capabilities = [
  {
    Icon: Sparkles,
    title: "AI-Guided Mapping Suggestions",
    body: "Leverage machine learning to analyze metadata, identify relationships and recommend accurate mappings.",
  },
  {
    Icon: Database,
    title: "Centralized Mapping Repository",
    body: "Maintain a single source of truth for all mappings with versioning, reusability and lineage tracking.",
  },
  {
    Icon: ShieldCheck,
    title: "Governance & Compliance",
    body: "Enforce mapping standards, approvals and change controls to ensure consistency and compliance.",
  },
  {
    Icon: Users,
    title: "Collaboration & Productivity",
    body: "Enable business & technical teams to collaborate in real time with role-based access and workflows.",
  },
];

const steps = [
  { Icon: Plug, title: "Connect", body: "Connect to source and target systems" },
  { Icon: Search, title: "Discover", body: "Automatically discover metadata & structures" },
  { Icon: Lightbulb, title: "Suggest", body: "AI suggests mappings and transformations" },
  { Icon: CheckCircle2, title: "Validate", body: "Business review, validate & approve" },
  { Icon: Rocket, title: "Deploy", body: "Generate mappings for ETL / ELT pipelines" },
];

const benefits = [
  { value: "60%", label: "Reduction in Mapping Time" },
  { value: "50%", label: "Lower Integration Costs" },
  { value: "95%+", label: "Mapping Accuracy with AI" },
  { value: "100%", label: "End-to-End Traceability" },
  { value: "Scalable", label: "Supports Complex Migrations" },
];

const useCases = [
  { Icon: Boxes, title: "ERP & Cloud Migrations" },
  { Icon: GitMerge, title: "Application Integrations" },
  { Icon: FileCheck, title: "Regulatory Reporting" },
  { Icon: Warehouse, title: "Data Warehouse Onboarding" },
  { Icon: Briefcase, title: "Mergers & Acquisitions" },
  { Icon: Cpu, title: "Data Modernization" },
];

const sources = [
  { Icon: Package, label: "ERP" },
  { Icon: Users, label: "CRM" },
  { Icon: Briefcase, label: "HCM" },
  { Icon: Database, label: "Legacy" },
];

const targets = [
  { Icon: Warehouse, label: "Data Warehouse" },
  { Icon: Database, label: "Data Lake" },
  { Icon: BarChart3, label: "Analytics" },
  { Icon: Boxes, label: "Applications" },
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading inline-flex items-center gap-2">
        {title}
        <span className="block w-8 h-[3px] bg-accent rounded-full" aria-hidden />
      </h2>
    </div>
  );
}

function IntegrationDiagram() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-secondary via-background to-secondary/60 border border-border/60 p-5 md:p-7 shadow-xl overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />
      <div className="relative grid grid-cols-[1fr_auto_1fr] gap-3 md:gap-6 items-center">
        {/* Source */}
        <div>
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">
            Source Systems
          </p>
          <ul className="space-y-2.5">
            {sources.map((s, i) => (
              <li
                key={s.label}
                className="flex items-center gap-2 rounded-lg bg-card border border-border/70 px-2.5 py-2 shadow-sm animate-reveal-left"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="inline-flex w-7 h-7 rounded-md bg-primary/10 text-primary items-center justify-center">
                  <s.Icon size={14} />
                </span>
                <span className="text-xs md:text-sm font-semibold text-foreground">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Falcon core */}
        <div className="flex flex-col items-center relative">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <pattern id="dash" width="4" height="1" patternUnits="userSpaceOnUse">
                <rect width="2" height="1" fill="hsl(var(--primary))" opacity=".4" />
              </pattern>
            </defs>
          </svg>
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border-2 border-accent shadow-lg flex items-center justify-center animate-reveal-scale">
            <img
              src={mascotAsset.url}
              alt="Falcon Mapping mascot"
              width={96}
              height={96}
              className="w-14 h-14 md:w-16 md:h-16 object-contain"
            />
          </div>
        </div>

        {/* Target */}
        <div>
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">
            Target Systems
          </p>
          <ul className="space-y-2.5">
            {targets.map((t, i) => (
              <li
                key={t.label}
                className="flex items-center gap-2 rounded-lg bg-card border border-border/70 px-2.5 py-2 shadow-sm animate-reveal-right"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="inline-flex w-7 h-7 rounded-md bg-primary/10 text-primary items-center justify-center">
                  <t.Icon size={14} />
                </span>
                <span className="text-xs md:text-sm font-semibold text-foreground">{t.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function FalconMapping() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-secondary/60 via-background to-background">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          <div className="container relative py-6 md:py-10">
            <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">›</span>
              <span>Products</span>
              <span className="mx-2">›</span>
              <span className="text-primary font-semibold">Falcon Mapping</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
              <Reveal variant="left" className="lg:col-span-6">
                <div className="flex items-center gap-4">
                  <img
                    src={mascotAsset.url}
                    alt="Falcon Mapping"
                    width={96}
                    height={96}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                  />
                  <h1 className="text-4xl md:text-6xl font-bold text-primary font-heading leading-[0.95]">
                    Falcon<br />Mapping
                  </h1>
                </div>
                <p className="mt-6 text-xl md:text-2xl font-bold text-primary font-heading">
                  Intelligent Data Mapping for Smarter Integrations
                </p>
                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                  Falcon Mapping empowers enterprises to automate and accelerate data mapping
                  across systems with AI-driven suggestions, governance, and end-to-end traceability.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
                  >
                    Request a Demo <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#capabilities"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Explore Product
                  </a>
                </div>
              </Reveal>

              <Reveal variant="right" delay={120} className="lg:col-span-6">
                <IntegrationDiagram />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Highlight strip */}
        <section className="border-y border-border/60 bg-card">
          <div className="container py-8 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 80} className="flex items-start gap-3">
                  <span className="shrink-0 inline-flex w-10 h-10 rounded-lg bg-primary/10 text-primary items-center justify-center">
                    <h.Icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary font-heading">{h.title}</p>
                    <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">{h.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section id="capabilities" className="section-alt py-14 md:py-20">
          <div className="container">
            <Reveal>
              <SectionHeading title="Key Capabilities" />
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={i * 100}>
                  <article className="h-full bg-card rounded-2xl border border-border/60 p-6 text-center hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 transition-all">
                    <div className="mx-auto inline-flex w-14 h-14 rounded-full border-2 border-primary/20 text-primary items-center justify-center">
                      <c.Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-base font-bold text-primary font-heading">{c.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 md:py-20">
          <div className="container">
            <Reveal>
              <SectionHeading title="How Falcon Mapping Works" />
            </Reveal>

            <div className="relative mt-14">
              {/* Connector line (desktop) */}
              <div
                className="hidden md:block absolute left-[8%] right-[8%] top-8 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                aria-hidden
              />
              <ol className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {steps.map((s, i) => (
                  <Reveal key={s.title} delay={i * 120}>
                    <li className="relative text-center list-none">
                      <div className="mx-auto relative inline-flex w-16 h-16 rounded-full bg-card border-2 border-primary/30 text-primary items-center justify-center shadow-sm">
                        <s.Icon size={22} />
                        <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-[11px] font-bold flex items-center justify-center border-2 border-background">
                          {i + 1}
                        </span>
                      </div>
                      <p className="mt-5 text-sm font-bold text-primary font-heading">{s.title}</p>
                      <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Business Benefits */}
        <section className="section-alt py-14 md:py-20">
          <div className="container">
            <Reveal>
              <SectionHeading title="Business Benefits" />
            </Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
              {benefits.map((b, i) => (
                <Reveal key={b.label} delay={i * 90}>
                  <div className="h-full rounded-2xl border border-border/60 bg-card p-6 text-center hover:border-primary/40 hover:shadow-lg transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-primary font-heading">{b.value}</div>
                    <div className="mt-2 text-xs md:text-sm text-muted-foreground leading-snug">{b.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Use Cases */}
        <section className="py-14 md:py-20">
          <div className="container max-w-5xl">
            <Reveal>
              <SectionHeading title="Ideal Use Cases" />
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {useCases.map((u, i) => (
                <Reveal key={u.title} delay={i * 80}>
                  <div className="flex items-center gap-3 rounded-xl bg-card border border-border/60 px-4 py-4 hover:border-primary/40 hover:shadow-md transition-all">
                    <span className="inline-flex w-10 h-10 rounded-lg bg-primary/10 text-primary items-center justify-center">
                      <u.Icon size={18} />
                    </span>
                    <p className="text-sm font-semibold text-foreground">{u.title}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <Reveal variant="scale">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[hsl(230_85%_22%)] p-8 md:p-12 shadow-2xl">
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                  aria-hidden
                />
                <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-8 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground font-heading leading-tight">
                      Accelerate Integrations.<br />Eliminate Complexity.
                    </h2>
                    <p className="mt-4 text-sm md:text-base text-primary-foreground/85 max-w-lg">
                      Falcon Mapping helps you deliver trusted data faster, with confidence.
                    </p>
                    <Link
                      to="/contact"
                      className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      Request a Demo <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="relative flex justify-center md:justify-end">
                    <img
                      src={flyingAsset.url}
                      alt="Falcon in flight"
                      width={448}
                      height={320}
                      loading="lazy"
                      className="w-full max-w-[360px] h-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}