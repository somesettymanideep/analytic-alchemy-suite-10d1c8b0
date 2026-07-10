import { useDocumentTitle } from "@/hooks/use-document-title";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import banner from "@/assets/banners/banner-data-governance.jpg";
import framework from "@/assets/solutions/governance-framework.jpg";
import { ArrowRight, CheckCircle, Eye, Gauge, GitBranch, Scroll, ShieldCheck, Sparkle, Users } from "@phosphor-icons/react";

const pillars = [
  { Icon: Users, title: "Data Ownership", body: "Clear accountability for every domain — owners, stewards, and decision rights defined and adopted across the business." },
  { Icon: Gauge, title: "Quality Standards", body: "Measurable quality rules for accuracy, completeness and timeliness — enforced through automated controls." },
  { Icon: GitBranch, title: "Lineage Tracking", body: "End-to-end visibility of how data moves and transforms — from source system through every downstream AI model." },
  { Icon: Scroll, title: "Compliance Controls", body: "Policy-driven controls aligned to GDPR, industry regulation, and internal audit — built into the platform, not bolted on." },
];

function Intro() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-7" variant="up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkle size={14} /> Data Governance
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            The foundation of every AI programme — <span className="text-primary">governance first</span>, models second.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Data Governance is the foundation of every AI programme. We design and implement governance frameworks —
            data ownership, quality standards, lineage tracking, and compliance controls — that make your data AI-ready.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Powered by <strong className="text-foreground">Owlsight</strong> for continuous quality monitoring and anomaly detection.
            Data Governance is the entry point to AI — organisations that skip it fail.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5" variant="scale" delay={120}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={framework} alt="Data governance framework layers" width={1200} height={900} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <CheckCircle size={14} /> Four Pillars of AI-Ready Data
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            A governance framework built for AI outcomes
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} variant="up" delay={i * 120}>
              <article className="group h-full bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 mb-5">
                  <p.Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading">{p.title}</h3>
                <div className="mt-3 h-1 w-10 bg-accent rounded-full" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-6" variant="left">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Eye size={14} /> Evidenced in Delivery
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Proven with a DAMA-based data strategy engagement
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Bed manufacturer engagement — DAMA-based data strategy, 32 stakeholder interviews, blueprint phase.
            The programme delivered clear ownership, quality baselines, and a governance operating model the business could adopt.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "DAMA-DMBOK aligned framework",
              "32 stakeholder interviews across business & IT",
              "Blueprint phase with prioritised control roadmap",
              "Continuous quality monitoring via Owlsight",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm md:text-base text-foreground">
                <ShieldCheck size={18} className="text-accent mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Start with governance <ArrowRight size={16} />
          </a>
        </Reveal>
        <Reveal className="lg:col-span-6" variant="right" delay={140}>
          <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="relative p-8 text-primary-foreground">
              <p className="text-[10px] uppercase tracking-widest text-accent font-semibold">The Nextgenlytics View</p>
              <h3 className="mt-3 text-2xl font-bold font-heading">Governance is the entry point to AI.</h3>
              <p className="mt-3 text-primary-foreground/85 leading-relaxed">
                Every AI programme we deliver starts with governance — because organisations that skip it fail.
                We design the framework, embed the controls, and monitor quality continuously with Owlsight.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function DataGovernance() {
  useDocumentTitle("Data Governance");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Solutions · Data Engineering"
          title="Data Governance"
          description="Design and implement governance frameworks — ownership, quality, lineage and compliance — that make your data AI-ready."
        />
        <Intro />
        <Pillars />
        <Evidence />
      </main>
      <Footer />
    </div>
  );
}