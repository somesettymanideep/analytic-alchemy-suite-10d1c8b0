import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-falcon-mapping.jpg";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Map, Sparkles, Database, ShieldCheck, Users, ArrowRight, CheckCircle2, Gauge, FileCheck, Wallet } from "lucide-react";

const capabilities = [
  { Icon: Sparkles, title: "AI-Guided Mapping Suggestions", body: "Accelerate mapping creation with AI that learns from existing rules, identifies relationships, and reduces manual dependency across waves." },
  { Icon: Database, title: "Centralized Mapping Repository", body: "Maintain a single, governed source of truth for all mappings, transformations and lineage — ensuring transparency across IT and business." },
  { Icon: ShieldCheck, title: "Governance & Control", body: "Enforce mapping standards, approvals and change controls — ensuring compliance across every wave, project and environment." },
  { Icon: Users, title: "Task Assignment & Collaboration", body: "Enable real-time collaboration between Data Stewards, Business Owners and Developers — with clear ownership and accountability." },
];

const outcomes = [
  { Icon: Gauge, value: "60%", label: "Reduction in mapping time" },
  { Icon: Sparkles, value: "10x", label: "Faster mapping cycle" },
  { Icon: Wallet, value: "↓", label: "Lower migration costs" },
  { Icon: FileCheck, value: "100%", label: "Audit-ready documentation" },
];

export default function FalconMapping() {
  const intro = useScrollReveal();
  const caps = useScrollReveal();
  const out = useScrollReveal();
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Products · Falcon Mapping"
          title="Falcon Mapping — 10x Faster Mapping. Zero Bottlenecks."
          description="AI-driven accuracy, scalable governance and seamless collaboration for a successful migration."
        />

        <section className="container py-12 md:py-16" ref={intro.ref}>
          <div className={`grid lg:grid-cols-12 gap-10 items-center ${intro.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <Map size={14} /> AI Data Steward Agent
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.1]">
                Replace ungoverned spreadsheets with <span className="text-primary">AI-driven mapping intelligence.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Falcon Mapping eliminates the Excel-based, ungoverned processes that slow enterprise migrations. It centralises every rule,
                aligns business and technical teams, and uses AI to suggest mappings that get smarter with every wave.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Talk to a Mapping Expert <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl">
                <img src={banner} alt="Falcon Mapping" width={960} height={720} loading="lazy" className="w-full h-[380px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-card/95 backdrop-blur p-4 border border-border/60">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex w-10 h-10 rounded-xl bg-accent/15 text-accent items-center justify-center"><CheckCircle2 size={20} /></span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Single source of truth</p>
                      <p className="text-sm font-bold text-foreground font-heading">Governed mappings, every wave.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-alt py-12 md:py-20" ref={caps.ref}>
          <div className="container">
            <div className={`max-w-2xl ${caps.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Key Capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading">Everything mapping should be.</h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {capabilities.map((c, i) => (
                <article
                  key={c.title}
                  className={`group relative bg-card rounded-2xl border border-border/60 p-7 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all ${caps.isVisible ? "animate-reveal-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 inline-flex w-12 h-12 rounded-xl bg-primary text-primary-foreground items-center justify-center shadow-lg shadow-primary/30">
                      <c.Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground font-heading">{c.title}</h3>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-14" ref={out.ref}>
          <div className={`text-center max-w-2xl mx-auto ${out.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Outcomes</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading">Business impact you can measure.</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.map((o, i) => (
              <div key={o.label} className={`rounded-2xl border border-border/60 bg-card p-6 text-center hover:border-primary/30 hover:shadow-lg transition-all ${out.isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${i * 80}ms` }}>
                <div className="inline-flex w-11 h-11 rounded-xl bg-accent/15 text-accent items-center justify-center mx-auto"><o.Icon size={20} /></div>
                <div className="mt-3 text-3xl md:text-4xl font-bold text-primary font-heading">{o.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{o.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}