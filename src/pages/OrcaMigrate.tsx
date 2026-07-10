import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import orcaJump from "@/assets/products/orca-jump.png";
import { ArrowRight, ChartLine, CheckCircle, ClipboardText, Database, Eye, Faders, HardDrives, MagnifyingGlass, MapTrifold, PlayCircle, Pulse, RocketLaunch, ShieldCheck, Stack, TreeStructure } from "@phosphor-icons/react";

const highlights = [
  { Icon: TreeStructure, title: "End-to-End\nMigration", body: "Complete migration lifecycle in one platform" },
  { Icon: ShieldCheck, title: "Low Risk\n& Reliable", body: "Built-in validations, rollback & audit" },
  { Icon: RocketLaunch, title: "Faster\nTime to Value", body: "Accelerate migrations by up to 90%" },
  { Icon: HardDrives, title: "Broad Platform\nSupport", body: "Migrate to D365, Azure, and beyond" },
  { Icon: Stack, title: "Enterprise\nScale", body: "Handle large, complex migrations seamlessly" },
];

const capabilities = [
  { Icon: ClipboardText, title: "Assessment &\nPlanning", body: "Auto-discover, analyze dependencies and create migration plans." },
  { Icon: Database, title: "Data & Config\nMigration", body: "Migrate master data, transactions, configs, and customizations." },
  { Icon: CheckCircle, title: "Validation &\nReconciliation", body: "Advanced validation and reconciliation for data integrity." },
  { Icon: Faders, title: "Automation &\nOrchestration", body: "Automate workflows with intelligent orchestration engine." },
  { Icon: ChartLine, title: "Monitoring &\nReporting", body: "Real-time monitoring, dashboards, and audit-ready reports." },
];

const steps = [
  { Icon: MagnifyingGlass, title: "Assess", body: "Analyze systems, data & dependencies" },
  { Icon: MapTrifold, title: "Plan", body: "Define strategy, scope & timelines" },
  { Icon: PlayCircle, title: "Migrate", body: "Execute migration with automation & control" },
  { Icon: CheckCircle, title: "Validate", body: "Validate & reconcile for accuracy" },
  { Icon: Pulse, title: "Go Live", body: "Cutover with confidence & post-migration support" },
];

const benefits = [
  { value: "90%", label: "Faster Migration\nTime" },
  { value: "80%", label: "Lower Migration\nEffort" },
  { value: "99.9%", label: "Data Accuracy\nAchieved" },
  { value: "Zero", label: "Data Loss with Built-in\nSafeguards" },
  { value: "Scalable", label: "For Any Size &\nComplexity" },
];

const CY = "text-cyan-300";

function OrbitDiagram() {
  const nodes = [
    { Icon: MagnifyingGlass, label: "Assess", pos: "top-0 left-1/2 -translate-x-1/2" },
    { Icon: PlayCircle, label: "Migrate", pos: "top-[22%] right-0" },
    { Icon: CheckCircle, label: "Validate", pos: "bottom-[10%] right-[8%]" },
    { Icon: Faders, label: "Optimise", pos: "bottom-[10%] left-[8%]" },
    { Icon: Eye, label: "Monitor", pos: "top-[22%] left-0" },
  ];
  return (
    <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] mx-auto">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 380 380" fill="none" aria-hidden>
        <circle cx="190" cy="190" r="140" stroke="rgba(0,96,240,0.45)" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="190" cy="190" r="90" stroke="rgba(0,10,92,0.25)" strokeWidth="1" />
      </svg>
      {/* center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-accent/15 border border-accent/40 shadow-[0_0_40px_rgba(0,96,240,0.35)] flex items-center justify-center">
        <img src={orcaJump} alt="" className="w-16 h-16 object-contain" />
      </div>
      {nodes.map((n, i) => (
        <Reveal key={n.label} variant="scale" delay={i * 100} className={`absolute ${n.pos}`}>
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-white border-2 border-accent text-primary flex items-center justify-center shadow-lg shadow-primary/15">
              <n.Icon size={22} />
            </div>
            <span className="mt-1 text-xs font-semibold text-primary">{n.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="inline-block text-2xl md:text-3xl font-bold text-primary font-heading relative">
        {children}
        <span className="block mx-auto mt-2 h-1 w-16 rounded-full bg-cyan-500" />
      </h2>
    </div>
  );
}

export default function OrcaMigrate() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-secondary via-background to-accent/10 text-foreground">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_30%,rgba(0,96,240,0.10),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(16,217,196,0.10),transparent_50%)]" aria-hidden />
          <div className="container relative py-14 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-start gap-4 md:gap-6">
                  <Reveal variant="left">
                    <img
                      src={orcaJump}
                      alt="Orca Migrate mascot"
                      width={260}
                      height={260}
                      className="w-44 md:w-60 h-auto drop-shadow-[0_10px_30px_rgba(34,211,238,0.4)]"
                    />
                  </Reveal>
                  <h1 className="sr-only">Orca Migrate</h1>
                </div>
                <Reveal variant="up" delay={240}>
                  <p className="mt-6 text-lg md:text-2xl font-bold leading-snug text-accent">
                    Migrate Smarter. Faster. Safer.
                  </p>
                </Reveal>
                <Reveal variant="up" delay={340}>
                  <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
                    Orca Migrate is the enterprise-grade migration platform that accelerates data, configuration, and workload
                    migrations to Microsoft ecosystems with minimal risk and maximum efficiency.
                  </p>
                </Reveal>
                <Reveal variant="up" delay={440}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="btn-cta inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      Request a Demo <ArrowRight size={16} />
                    </Link>
                    <a
                      href="#capabilities"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-transparent border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all"
                    >
                      Explore Product
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal variant="right" delay={200}>
                <OrbitDiagram />
              </Reveal>
            </div>

            {/* Highlight strip inside dark hero */}
            <Reveal variant="up" delay={200}>
              <div className="mt-12 rounded-2xl bg-card border border-border shadow-sm grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border">
                {highlights.map((h) => (
                  <div key={h.title} className="p-5 flex gap-3 items-start">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                      <h.Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-primary font-heading whitespace-pre-line leading-tight">{h.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{h.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section id="capabilities" className="container py-16 md:py-24">
          <Reveal variant="up"><SectionHeading>Key Capabilities</SectionHeading></Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 100}>
                <div className="group h-full bg-white rounded-2xl border border-border/70 p-5 text-center hover:-translate-y-1 hover:shadow-xl hover:border-cyan-400/60 transition-all">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-cyan-50 border border-cyan-200/60 text-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <c.Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-primary font-heading whitespace-pre-line leading-tight">{c.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-alt py-16 md:py-24">
          <div className="container">
            <Reveal variant="up"><SectionHeading>How Orca Migrate Works</SectionHeading></Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2 relative">
              {steps.map((s, i) => (
                <Reveal key={s.title} variant="scale" delay={i * 120} className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-cyan-400/60 text-cyan-600 flex items-center justify-center shadow-md">
                    <s.Icon size={26} />
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-primary font-heading">{i + 1}. {s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground max-w-[160px] leading-relaxed">{s.body}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight size={20} className="hidden md:block absolute top-6 -right-3 text-cyan-500/70" aria-hidden />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BUSINESS BENEFITS */}
        <section className="container py-16 md:py-24">
          <Reveal variant="up"><SectionHeading>Business Benefits</SectionHeading></Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b.label} variant="up" delay={i * 100}>
                <div className="h-full bg-white rounded-2xl border border-cyan-200/60 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="text-3xl md:text-4xl font-extrabold text-cyan-600 font-heading">{b.value}</div>
                  <div className="mt-2 text-sm font-semibold text-primary whitespace-pre-line leading-tight">{b.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="container pb-20">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-[hsl(220_70%_18%)] p-6 md:p-8 shadow-2xl shadow-primary/30">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-cyan-400/10 blur-3xl" aria-hidden />
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                    Migrate with Confidence. Deliver Value Faster.
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-white/80">
                    Orca Migrate ensures a smooth migration journey every time.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-400 text-primary font-semibold hover:-translate-y-0.5 transition-all shadow-lg"
                >
                  Request a Demo <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}