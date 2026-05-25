import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-orca-migrate.jpg";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowLeftRight, Rocket, Gauge, ShieldCheck, Wallet, ArrowRight, X, CheckCircle2 } from "lucide-react";

const capabilities = [
  { Icon: Rocket, title: "Faster Provisioning", body: "PaaS-based setup accelerates environment readiness dramatically — environments stand up in hours, not weeks." },
  { Icon: Gauge, title: "Enterprise-Scale Performance", body: "Handles large, complex migrations with seamless scalability across systems and geographies." },
  { Icon: ShieldCheck, title: "Minimal Downtime & Risk", body: "Smart cutover processes reduce business disruption and protect continuity through go-live." },
  { Icon: Wallet, title: "Cost Optimization", body: "Automated workflows and efficient resource use lower overall migration costs." },
];

const compare = [
  { area: "Provisioning", traditional: "Weeks of manual setup", orca: "PaaS-based, 90% faster" },
  { area: "Scale", traditional: "Limited by infrastructure", orca: "Elastic to enterprise scale" },
  { area: "Cutover", traditional: "High-risk, extended downtime", orca: "Smart cutover, minimal disruption" },
  { area: "Cost", traditional: "Hidden overheads, manual effort", orca: "Automated workflows, optimised spend" },
];

export default function OrcaMigrate() {
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
          eyebrow="Products · Orca Migrate"
          title="Orca Migrate — Intelligent and Large-Scale Migrations"
          description="Faster, safer and cost-optimised enterprise migrations — at any scale, with minimal risk."
        />

        <section className="container py-12 md:py-16" ref={a.ref}>
          <div className={`max-w-4xl ${a.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <ArrowLeftRight size={14} /> Migration Platform
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.1]">
              Move enterprise data <span className="text-primary">at scale — without the chaos.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Orca Migrate combines PaaS-based provisioning, intelligent orchestration and smart cutover patterns so you can deliver
              large, complex migrations faster — with significantly lower cost and risk.
            </p>
          </div>
        </section>

        <section className="section-alt py-12 md:py-20" ref={b.ref}>
          <div className="container">
            <div className={`max-w-2xl ${b.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Key Capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading">Migration the way it should be.</h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {capabilities.map((c, i) => (
                <div key={c.title} className={`group bg-card rounded-2xl border border-border/60 p-6 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all ${b.isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${i * 90}ms` }}>
                  <div className="inline-flex w-12 h-12 rounded-xl bg-primary text-primary-foreground items-center justify-center shadow-lg shadow-primary/30"><c.Icon size={22} /></div>
                  <h3 className="mt-4 text-lg font-bold text-foreground font-heading">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-20" ref={c.ref}>
          <div className={`max-w-2xl ${c.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Traditional vs Orca Migrate</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading">Why teams switch to Orca.</h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card">
            <div className="grid grid-cols-3 bg-muted/40 text-xs font-bold uppercase tracking-widest text-foreground/70">
              <div className="p-4">Area</div>
              <div className="p-4 border-l border-border/60">Traditional approach</div>
              <div className="p-4 border-l border-border/60 text-primary">Orca Migrate</div>
            </div>
            {compare.map((row, i) => (
              <div key={row.area} className={`grid grid-cols-3 text-sm md:text-base ${i % 2 ? "bg-background" : "bg-card"}`}>
                <div className="p-4 font-semibold text-foreground">{row.area}</div>
                <div className="p-4 border-l border-border/60 text-muted-foreground flex items-start gap-2">
                  <X size={16} className="text-destructive mt-1 shrink-0" />
                  <span>{row.traditional}</span>
                </div>
                <div className="p-4 border-l border-border/60 text-foreground flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-primary mt-1 shrink-0" />
                  <span>{row.orca}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-3xl bg-primary text-primary-foreground p-8">
            <div className="max-w-xl">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">90% Faster Provisioning</div>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold font-heading">Plan your next migration with confidence.</h3>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Talk to a Migration Expert <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}