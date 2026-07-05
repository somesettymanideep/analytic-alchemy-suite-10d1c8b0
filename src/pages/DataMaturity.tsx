import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import banner from "@/assets/banner-data-maturity.jpg";
import roadmap from "@/assets/maturity-roadmap.jpg";
import { Compass, ShieldCheck, Gauge, Layers, Wrench, Brain, ArrowRight, CheckCircle2, Sparkles, MapPin } from "lucide-react";

const dimensions = [
  { Icon: ShieldCheck, title: "Governance", body: "Ownership, stewardship and policy maturity across the data estate." },
  { Icon: Gauge, title: "Quality", body: "Baseline accuracy, completeness, timeliness — and how they are measured today." },
  { Icon: Layers, title: "Architecture", body: "Lakehouse, warehouse and integration patterns benchmarked against target state." },
  { Icon: Wrench, title: "Tooling", body: "Platform coverage, redundancy and cost — what to keep, retire or consolidate." },
  { Icon: Brain, title: "AI-Readiness", body: "How prepared your data, people and controls are to support production AI." },
];

const steps = [
  { n: "01", title: "Stakeholder interviews", body: "Structured conversations across business and IT to capture real state — not aspirational state." },
  { n: "02", title: "C-level workshops", body: "Alignment sessions with senior leadership to define priorities, outcomes and success measures." },
  { n: "03", title: "Current landscape assessment", body: "Systems, data flows, governance controls and tooling mapped in one view." },
  { n: "04", title: "DAMA-based future state", body: "Target operating model designed against DAMA-DMBOK — not a bespoke opinion." },
  { n: "05", title: "Fit-gap, design & blueprint", body: "Prioritised roadmap with clear next steps, phased investment and expected value." },
];

function Intro() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-7" variant="up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Data Maturity Assessment & Advisory
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Before building, we assess — then deliver a <span className="text-primary">prioritised roadmap</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            We evaluate your current data estate across five dimensions — governance, quality, architecture, tooling,
            and AI-readiness — and deliver a prioritised roadmap with clear next steps.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            A proven <strong className="text-foreground">NGSIT capability</strong>, delivered against DAMA-DMBOK.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5" variant="scale" delay={120}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={roadmap} alt="Data maturity roadmap across five dimensions" width={1200} height={900} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Dimensions() {
  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Compass size={14} /> Five Dimensions
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One assessment, five lenses on your data estate
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {dimensions.map((d, i) => (
            <Reveal key={d.title} variant="up" delay={i * 100}>
              <article className="group h-full bg-card rounded-2xl border border-border/60 p-6 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 mb-4">
                  <d.Icon size={20} />
                </div>
                <h3 className="text-base font-bold text-foreground font-heading">{d.title}</h3>
                <div className="mt-3 h-1 w-8 bg-accent rounded-full" />
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section className="container py-12 md:py-16">
      <Reveal className="max-w-2xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <CheckCircle2 size={14} /> Evidenced Method
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
          Bed manufacturer engagement — 32 stakeholders, 39 C-level workshops, one blueprint.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Current landscape assessment, problem statement identification, DAMA-based future state, fit-gap analysis,
          design and blueprint phase — the same method we run on every assessment.
        </p>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.n} variant="up" delay={i * 100}>
            <article className="h-full bg-card rounded-2xl border border-border/60 p-6 shadow-md shadow-primary/5 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-accent font-heading leading-none">{s.n}</span>
                <MapPin size={16} className="text-primary" />
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground font-heading">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200} className="mt-10">
        <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
          Book a maturity assessment <ArrowRight size={16} />
        </a>
      </Reveal>
    </section>
  );
}

export default function DataMaturity() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Solutions · Data Engineering"
          title="Data Maturity Assessment & Advisory"
          description="Assess your data estate across five dimensions and receive a prioritised, DAMA-based roadmap with clear next steps."
        />
        <Intro />
        <Dimensions />
        <Method />
      </main>
      <Footer />
    </div>
  );
}