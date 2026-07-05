import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";
import { Link } from "react-router-dom";
import cheetahRun from "@/assets/cheetah-running.png.asset.json";
import cheetahSprint from "@/assets/cheetah-sprint.png.asset.json";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Rocket,
  Layers,
  FileCode2,
  Languages,
  CheckCircle2,
  GitBranch,
  AlertTriangle,
  Database,
  BrainCircuit,
  Wand2,
  PlayCircle,
  UploadCloud,
} from "lucide-react";

const highlights = [
  { Icon: Sparkles, title: "AI-Powered\nCode Generation", body: "Auto-generate clean, optimized SQL/Python/ETL code" },
  { Icon: ShieldCheck, title: "Consistent &\nCompliant", body: "Ensure standards, governance and best practices" },
  { Icon: Rocket, title: "Faster Delivery\nCycles", body: "Reduce manual coding effort by up to 70%" },
  { Icon: Layers, title: "Scalable &\nReliable", body: "Built for enterprise scale and complex logic" },
];

const capabilities = [
  { Icon: FileCode2, title: "Rule to Code\nAutomation", body: "Convert business rules and mappings into executable code automatically." },
  { Icon: Languages, title: "Multi-Language\nSupport", body: "Generate SQL, Python, ETL, and stored procedures with ease." },
  { Icon: CheckCircle2, title: "Built-in\nValidations", body: "Validate logic, data types, relationships, and dependencies before deployment." },
  { Icon: GitBranch, title: "Version Control\n& Traceability", body: "Maintain full traceability from business rule to deployed code." },
  { Icon: AlertTriangle, title: "Error Handling\n& Logging", body: "Auto-generate robust error handling and logging framework." },
];

const steps = [
  { Icon: UploadCloud, title: "Ingest", body: "Import rules, mappings and metadata" },
  { Icon: BrainCircuit, title: "Analyze", body: "AI analyzes logic, relationships & patterns" },
  { Icon: Wand2, title: "Generate", body: "Auto-generate optimized, production-ready code" },
  { Icon: ShieldCheck, title: "Validate", body: "Run validations & quality checks" },
  { Icon: PlayCircle, title: "Deploy", body: "Deploy with confidence to any environment" },
];

const benefits = [
  { value: "50-70%", label: "Reduction in\nManual Coding" },
  { value: "3x", label: "Faster Development\nCycles" },
  { value: "95%+", label: "Code Accuracy\nwith AI" },
  { value: "100%", label: "Standard Compliance\n& Governance" },
  { value: "Scalable", label: "Supports Complex\nBusiness Logic" },
];

function FlowDiagram() {
  const rows = [
    { Icon: FileCode2, label: "Business\nRules" },
    { Icon: GitBranch, label: "Mappings" },
    { Icon: CheckCircle2, label: "Validations" },
    { Icon: Database, label: "Generated\nCode" },
  ];
  return (
    <div className="relative flex items-center gap-4 md:gap-6">
      <div className="flex flex-col gap-3">
        {rows.map((r, i) => (
          <div key={r.label} className="flex flex-col items-center">
            <div className="flex items-center gap-2 bg-white rounded-xl border border-border shadow-sm px-3 py-2 min-w-[130px]">
              <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <r.Icon size={16} />
              </div>
              <div className="text-xs font-semibold text-primary whitespace-pre-line leading-tight font-heading">{r.label}</div>
            </div>
            {i < rows.length - 1 && <div className="w-px h-3 bg-accent/50 my-1" />}
          </div>
        ))}
      </div>
      {/* dotted connector */}
      <svg className="hidden md:block" width="60" height="220" viewBox="0 0 60 220" fill="none" aria-hidden>
        <path d="M0 110 C 30 110, 30 110, 60 30" stroke="hsl(var(--primary))" strokeDasharray="4 4" strokeWidth="1.5" fill="none" />
      </svg>
      {/* code window */}
      <div className="relative">
        <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 border border-primary/20 bg-[#0B1330] text-left w-[280px] md:w-[340px]">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0F1A3D] border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <pre className="px-4 py-3 text-[11px] md:text-xs leading-relaxed font-mono">
<span className="text-sky-300">SELECT</span> <span className="text-white">c.CustomerID,</span>{"\n"}       <span className="text-white">c.CustomerName,</span>{"\n"}       <span className="text-white">o.OrderID,</span>{"\n"}       <span className="text-white">o.OrderDate</span>{"\n"}<span className="text-sky-300">FROM</span> <span className="text-white">Customers c</span>{"\n"}<span className="text-sky-300">JOIN</span> <span className="text-white">Orders o</span>{"\n"}  <span className="text-sky-300">ON</span> <span className="text-white">c.CustomerID = o.CustomerID</span>{"\n"}<span className="text-sky-300">WHERE</span> <span className="text-white">o.Status = </span><span className="text-emerald-300">'Active'</span><span className="text-white">;</span>
          </pre>
        </div>
        <div className="absolute -top-4 -right-4 w-12 h-12 rounded-xl bg-white shadow-lg border border-accent/30 flex items-center justify-center text-accent">
          <span className="font-mono text-sm font-bold">&lt;/&gt;</span>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="inline-block text-2xl md:text-3xl font-bold text-primary font-heading relative">
        {children}
        <span className="block mx-auto mt-2 h-1 w-16 rounded-full bg-accent" />
      </h2>
    </div>
  );
}

export default function CodeCheetah() {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 md:pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-orange-50/40 to-background">
          <div className="absolute -right-24 -bottom-24 w-[520px] h-[520px] rounded-full bg-accent/10 blur-3xl" aria-hidden />
          <div className="container relative py-14 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-start gap-4 md:gap-6">
                  <Reveal variant="left">
                    <img
                      src={cheetahRun.url}
                      alt="Code Cheetah mascot running"
                      width={220}
                      height={220}
                      className="w-32 md:w-44 h-auto drop-shadow-xl"
                    />
                  </Reveal>
                  <Reveal variant="up" delay={120}>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-primary font-heading leading-[0.95]">
                      Code<br />Cheetah
                    </h1>
                  </Reveal>
                </div>
                <Reveal variant="up" delay={240}>
                  <p className="mt-6 text-lg md:text-xl font-bold text-accent leading-snug">
                    Automated. Consistent. Reliable.<br />
                    Business Rules to Production-Ready Code.
                  </p>
                </Reveal>
                <Reveal variant="up" delay={340}>
                  <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
                    Code Cheetah transforms business rules and mapping logic into high-quality, production-grade SQL, Python,
                    ETL pipelines—automating every step, every time.
                  </p>
                </Reveal>
                <Reveal variant="up" delay={440}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
                    >
                      Request a Demo <ArrowRight size={16} />
                    </Link>
                    <a
                      href="#capabilities"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all"
                    >
                      Explore Product
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal variant="right" delay={200} className="flex justify-center lg:justify-end">
                <FlowDiagram />
              </Reveal>
            </div>
          </div>
        </section>

        {/* HIGHLIGHT STRIP */}
        <section className="container -mt-6 md:-mt-10 relative z-10">
          <Reveal variant="up">
            <div className="bg-white rounded-2xl shadow-xl border border-border/60 grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/60 overflow-hidden">
              {highlights.map((h, i) => (
                <Reveal key={h.title} variant="up" delay={i * 90} className="p-5 md:p-6 flex gap-3 items-start">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <h.Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary font-heading whitespace-pre-line leading-tight">{h.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{h.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* KEY CAPABILITIES */}
        <section id="capabilities" className="container py-16 md:py-24">
          <Reveal variant="up"><SectionHeading>Key Capabilities</SectionHeading></Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} variant="up" delay={i * 100}>
                <div className="group h-full bg-amber-50/60 rounded-2xl border border-accent/15 p-5 text-center hover:-translate-y-1 hover:shadow-xl hover:border-accent/40 transition-all">
                  <div className="mx-auto w-14 h-14 rounded-xl bg-white shadow-sm border border-accent/20 text-accent flex items-center justify-center group-hover:scale-110 transition-transform">
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
            <Reveal variant="up"><SectionHeading>How Code Cheetah Works</SectionHeading></Reveal>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-2 relative">
              {steps.map((s, i) => (
                <Reveal key={s.title} variant="scale" delay={i * 120} className="relative flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-accent/40 text-accent flex items-center justify-center shadow-md">
                      <s.Icon size={26} />
                    </div>
                  </div>
                  <h3 className="mt-4 text-sm font-bold text-primary font-heading">{i + 1}. {s.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground max-w-[160px] leading-relaxed">{s.body}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight
                      size={20}
                      className="hidden md:block absolute top-6 -right-3 text-accent/60"
                      aria-hidden
                    />
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
                <div className="h-full bg-amber-50/60 rounded-2xl border border-accent/15 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="text-3xl md:text-4xl font-extrabold text-accent font-heading">{b.value}</div>
                  <div className="mt-2 text-sm font-semibold text-primary whitespace-pre-line leading-tight">{b.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="container pb-20">
          <Reveal variant="scale">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-[hsl(230_85%_22%)] p-6 md:p-8 shadow-2xl shadow-primary/30">
              <div className="absolute inset-y-0 right-0 w-1/3 bg-accent/10 blur-3xl" aria-hidden />
              <div className="relative flex flex-col md:flex-row items-center gap-6">
                <img
                  src={cheetahSprint.url}
                  alt="Cheetah sprinting"
                  width={180}
                  height={120}
                  loading="lazy"
                  className="w-32 md:w-40 h-auto drop-shadow-xl"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-white font-heading">
                    From Business Rules to Production Code—Automatically.
                  </h3>
                  <p className="mt-1 text-sm md:text-base text-white/80">
                    Accelerate delivery. Improve quality. Reduce costs.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:-translate-y-0.5 transition-all shadow-lg"
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