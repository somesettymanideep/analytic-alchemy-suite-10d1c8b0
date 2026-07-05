import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import owlReadingAsset from "@/assets/owl-reading.png.asset.json";
import owlFlyingAsset from "@/assets/owl-flying.png.asset.json";
import {
  ArrowRight, ChevronRight, Sparkles, LineChart, Lock, ShieldCheck,
  Cpu, ShieldAlert, ClipboardCheck, BarChart3,
  Plug, ScanSearch, CheckCircle2, Search, Zap,
  Database, GitBranch, FileCheck2, Users, AlertTriangle, ScrollText,
  AlertOctagon, CheckCircle,
} from "lucide-react";

const highlights = [
  { Icon: Sparkles, title: "AI-Powered Validations", body: "100+ intelligent checks across your data" },
  { Icon: LineChart, title: "Real-time Insights", body: "Interactive dashboards & alerts" },
  { Icon: Lock, title: "PII Detection & Compliance", body: "Automated classification & risk scoring" },
  { Icon: ShieldCheck, title: "Audit Ready Quality", body: "Full lineage & documentation" },
];

const capabilities = [
  { Icon: Cpu, title: "AI-Driven Data Validations", body: "Intelligent checks for accuracy, completeness, consistency, uniqueness and more." },
  { Icon: ShieldAlert, title: "PII Detection & Classification", body: "Automatically detects and classifies sensitive data to ensure GDPR compliance." },
  { Icon: ClipboardCheck, title: "Reconciliation & Monitoring", body: "End-to-end reconciliation with issue tracking and root cause analysis." },
  { Icon: BarChart3, title: "Dashboards & Reporting", body: "Real-time data quality scores, trends, and exception management." },
];

const steps = [
  { Icon: Plug, title: "Connect", body: "Connect to your data sources & systems" },
  { Icon: ScanSearch, title: "Profile", body: "Profile data and understand its health" },
  { Icon: CheckCircle2, title: "Validate", body: "Run AI-powered quality checks" },
  { Icon: Search, title: "Analyze", body: "Detect issues, anomalies & PII risks" },
  { Icon: Zap, title: "Act", body: "Resolve, monitor & improve continuously" },
];

const benefits = [
  { value: "5x", label: "Faster Data Accuracy" },
  { value: "3x", label: "Improvement in Data Quality" },
  { value: "90%", label: "Reduction in Data Issues" },
  { value: "100%", label: "Compliance Confidence" },
  { value: "Real-time", label: "Visibility & Monitoring" },
];

const useCases = [
  { Icon: Database, title: "Data Quality Monitoring" },
  { Icon: GitBranch, title: "Data Migration Validation" },
  { Icon: FileCheck2, title: "Analytics & Reporting Assurance" },
  { Icon: ScrollText, title: "Regulatory & Compliance Reporting" },
  { Icon: Users, title: "Customer 360 & MDM" },
  { Icon: AlertTriangle, title: "Risk & Fraud Detection" },
];

function DataQualityMock() {
  const size = 190;
  const stroke = 16;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = 0.96;
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Score card */}
      <div className="relative z-10 rounded-3xl bg-card border border-border/60 shadow-2xl shadow-primary/10 p-8 flex flex-col items-center">
        <div className="text-sm font-semibold text-primary flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" /> Data Quality Score
        </div>
        <div className="relative mt-4" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="-rotate-90">
            <defs>
              <linearGradient id="owl-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="hsl(var(--muted))" strokeWidth={stroke} />
            <circle
              cx={size / 2} cy={size / 2} r={r} fill="none"
              stroke="url(#owl-ring)" strokeWidth={stroke} strokeLinecap="round"
              strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-foreground font-heading">96%</div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-6 top-16 z-20 rounded-2xl bg-card border border-border/60 shadow-xl px-4 py-3 flex items-center gap-2 animate-float-slow">
        <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-accent/15 text-accent"><AlertOctagon size={16} /></span>
        <div>
          <div className="text-[11px] text-muted-foreground leading-none">Anomaly</div>
          <div className="text-xs font-bold text-accent leading-tight">Detected</div>
        </div>
      </div>
      <div className="absolute -right-6 top-20 z-20 rounded-2xl bg-card border border-border/60 shadow-xl px-4 py-3 flex items-center gap-2 animate-float">
        <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-destructive/10 text-destructive"><Lock size={16} /></span>
        <div>
          <div className="text-[11px] text-muted-foreground leading-none">PII</div>
          <div className="text-xs font-bold text-destructive leading-tight">Identified</div>
        </div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 z-20 rounded-2xl bg-card border border-border/60 shadow-xl px-4 py-3 flex items-center gap-2 animate-float-slow">
        <span className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600"><CheckCircle size={16} /></span>
        <div>
          <div className="text-[11px] text-muted-foreground leading-none">Rules</div>
          <div className="text-xs font-bold text-emerald-600 leading-tight">Passed</div>
        </div>
      </div>
    </div>
  );
}

export default function OwlSight() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <ScrollToTop />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background">
          <div aria-hidden className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(hsl(var(--primary))_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="container relative pt-8 pb-16 md:pt-10 md:pb-24">
            <nav className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight size={12} />
              <span>Products</span>
              <ChevronRight size={12} />
              <span className="text-primary font-medium">Owl Sight</span>
            </nav>

            <div className="mt-8 grid lg:grid-cols-12 gap-10 items-center">
              <Reveal variant="left" className="lg:col-span-6">
                <div className="flex items-center gap-4">
                  <img src={owlReadingAsset.url} alt="Owl Sight mascot" width={120} height={120} className="w-24 md:w-28 h-auto drop-shadow-xl" />
                  <h1 className="text-5xl md:text-6xl font-bold font-heading text-foreground leading-[0.95]">
                    Owl<br />Sight
                  </h1>
                </div>
                <p className="mt-6 text-2xl md:text-3xl font-bold text-primary font-heading leading-tight">
                  AI-Powered Data Quality<br />You Can Trust
                </p>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  Owl Sight ensures your data is accurate, compliant, and reliable with intelligent validations, automated PII detection, and real-time quality insights.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all">
                    Request a Demo <ArrowRight size={16} />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all">
                    Explore Product
                  </Link>
                </div>
              </Reveal>

              <Reveal variant="right" delay={120} className="lg:col-span-6">
                <DataQualityMock />
              </Reveal>
            </div>

            {/* Highlight strip */}
            <Reveal variant="up" delay={200} className="mt-14 md:mt-20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 border-t border-border/60 pt-8">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-3">
                    <span className="inline-flex w-10 h-10 rounded-lg bg-primary/10 text-primary items-center justify-center shrink-0">
                      <h.Icon size={18} />
                    </span>
                    <div>
                      <div className="text-sm md:text-base font-bold text-foreground font-heading">{h.title}</div>
                      <div className="text-xs md:text-sm text-muted-foreground mt-1">{h.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <Reveal variant="up" className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground inline-block relative">
                Key Capabilities
                <span className="block mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
              </h2>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} variant="up" delay={i * 100}>
                  <article className="group h-full bg-card rounded-2xl border border-border/60 p-7 text-center hover:-translate-y-1.5 hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                    <div className="mx-auto inline-flex w-14 h-14 rounded-2xl bg-primary/10 text-primary items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all">
                      <c.Icon size={26} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-foreground font-heading">{c.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Reveal variant="up" className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                How Owl Sight Works
              </h2>
              <span className="block mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            </Reveal>

            <div className="relative mt-16">
              <div aria-hidden className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px border-t-2 border-dashed border-primary/30" />
              <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-4 relative">
                {steps.map((s, i) => (
                  <Reveal key={s.title} variant="up" delay={i * 120} className="flex flex-col items-center text-center px-2">
                    <div className="relative">
                      <span className="inline-flex w-16 h-16 rounded-full bg-card border-2 border-primary/30 items-center justify-center text-primary shadow-lg">
                        <s.Icon size={24} />
                      </span>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-base font-bold text-foreground font-heading">{s.title}</h3>
                    <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed max-w-[180px]">{s.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BUSINESS BENEFITS */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <Reveal variant="up" className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Business Benefits</h2>
              <span className="block mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            </Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {benefits.map((b, i) => (
                <Reveal key={b.label} variant="scale" delay={i * 90}>
                  <div className="h-full rounded-2xl bg-card border border-border/60 p-6 text-center hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="text-3xl md:text-4xl font-bold text-primary font-heading">{b.value}</div>
                    <div className="mt-2 text-xs md:text-sm text-muted-foreground font-medium">{b.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* IDEAL USE CASES */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Reveal variant="up" className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Ideal Use Cases</h2>
              <span className="block mx-auto mt-3 h-1 w-16 rounded-full bg-accent" />
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {useCases.map((u, i) => (
                <Reveal key={u.title} variant="up" delay={i * 80}>
                  <div className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card px-5 py-4 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <span className="inline-flex w-10 h-10 rounded-lg bg-primary/10 text-primary items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <u.Icon size={18} />
                    </span>
                    <span className="text-sm md:text-base font-semibold text-foreground">{u.title}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="container">
            <Reveal variant="up">
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary)/0.85)] text-primary-foreground p-8 md:p-12">
                <div aria-hidden className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading leading-tight">
                      See Your Data Clearly.<br />Trust It Completely.
                    </h3>
                    <p className="mt-4 text-base md:text-lg text-primary-foreground/80 max-w-lg">
                      Owl Sight helps you uncover issues, ensure compliance and deliver trusted data every time.
                    </p>
                    <Link to="/contact" className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:-translate-y-0.5 transition-all shadow-lg">
                      Request a Demo <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="hidden md:flex justify-end">
                    <img src={owlFlyingAsset.url} alt="Owl Sight flying" width={320} height={320} loading="lazy" className="w-72 h-auto drop-shadow-2xl animate-float-slow" />
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