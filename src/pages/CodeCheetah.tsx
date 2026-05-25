import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-code-cheetah.jpg";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Code2, Zap, GitBranch, Repeat, ShieldCheck, ArrowRight, TerminalSquare } from "lucide-react";

const pillars = [
  { Icon: Zap, title: "Automation", body: "Transforms business rules and mapping logic into production-grade SQL / Python / ETL pipelines — eliminating manual coding and accelerating every developer." },
  { Icon: GitBranch, title: "Consistency", body: "Standardised code generation enforces patterns and quality across teams, projects and environments." },
  { Icon: Repeat, title: "Flexibility", body: "Supports one-time migration loads and recurring refresh cycles — built to adapt to your evolving data architecture." },
  { Icon: ShieldCheck, title: "Reliability", body: "Delivers resilient, audit-ready pipelines with robust error handling and self-diagnostics across releases." },
];

const flow = [
  { step: "01", title: "Ingest mappings", body: "Falcon Mapping rules and business logic feed directly into Code Cheetah." },
  { step: "02", title: "Generate code", body: "AI produces SQL, Python and ETL pipelines tuned to your target platform." },
  { step: "03", title: "Validate & deploy", body: "Self-diagnostics and standards checks before promoting to production." },
  { step: "04", title: "Operate & evolve", body: "Reuse, refresh and extend pipelines as architecture changes." },
];

export default function CodeCheetah() {
  const a = useScrollReveal();
  const b = useScrollReveal();
  const c = useScrollReveal();
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Products · Code Cheetah"
          title="Code Cheetah — Intelligent Automation for Scalable Engineering"
          description="Turn business rules into reliable SQL and Python pipelines that run flawlessly, every time."
        />

        <section className="container py-12 md:py-16" ref={a.ref}>
          <div className={`max-w-4xl ${a.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <Code2 size={14} /> AI DM Engineer Agent
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.1]">
              Stop hand-coding the same pipelines. <span className="text-primary">Generate them.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Code Cheetah converts mapping logic and business rules into production-grade pipelines — consistent, resilient and ready
              for both one-time migrations and recurring refresh cycles.
            </p>
          </div>
        </section>

        <section className="section-alt py-12 md:py-20" ref={b.ref}>
          <div className="container">
            <div className={`max-w-2xl ${b.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Key Capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading">Four pillars of automated engineering.</h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((p, i) => (
                <div key={p.title} className={`group relative bg-card rounded-2xl border border-border/60 p-6 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all ${b.isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${i * 90}ms` }}>
                  <div className="inline-flex w-12 h-12 rounded-xl bg-primary text-primary-foreground items-center justify-center shadow-lg shadow-primary/30"><p.Icon size={22} /></div>
                  <h3 className="mt-4 text-lg font-bold text-foreground font-heading">{p.title}</h3>
                  <div className="mt-2 h-1 w-10 bg-accent rounded-full" />
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20" ref={c.ref}>
          <div className={`grid lg:grid-cols-12 gap-12 ${c.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">How it works</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading leading-tight">From mapping to running pipeline in four steps.</h2>
              <p className="mt-4 text-muted-foreground">Cut engineering cost by up to 50%, accelerate ETL delivery and scale without adding headcount.</p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                See Code Cheetah in action <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-8">
              <ol className="relative border-l-2 border-primary/20 pl-8 space-y-8">
                {flow.map((f) => (
                  <li key={f.step} className="relative">
                    <span className="absolute -left-[42px] flex items-center justify-center w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold font-heading shadow-lg shadow-primary/30">{f.step}</span>
                    <div className="bg-card rounded-2xl border border-border/60 p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                      <div className="flex items-center gap-2 text-primary">
                        <TerminalSquare size={18} />
                        <h3 className="text-lg font-bold text-foreground font-heading">{f.title}</h3>
                      </div>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{f.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}