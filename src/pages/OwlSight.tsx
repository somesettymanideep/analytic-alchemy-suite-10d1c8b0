import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-owl-sight.jpg";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Eye, ShieldCheck, ClipboardCheck, Activity, Lock, ArrowRight, Sparkles } from "lucide-react";

const capabilities = [
  { Icon: Sparkles, title: "AI-Driven Data Validations", body: "Runs 100+ intelligent checks across master and transactional data — detecting duplicates, missing values, format mismatches and referential errors before migration." },
  { Icon: Lock, title: "PII Detection & Compliance Governance", body: "Identifies and protects personal and sensitive data automatically — supporting GDPR and enterprise governance standards." },
  { Icon: ClipboardCheck, title: "Reconciliation & Audit Dashboard", body: "End-to-end visibility into source-to-target reconciliation, ensuring every record is traceable, complete and verifiable with audit-ready proof." },
  { Icon: Activity, title: "Real-Time Data Quality Insights", body: "Interactive dashboards highlight data health, quality scores and compliance risks — so teams act on anomalies before they hit go-live." },
];

const stats = [
  { value: "5x", label: "Faster data accuracy" },
  { value: "3x", label: "Improvement in data quality" },
  { value: "100+", label: "AI quality checks" },
  { value: "Audit-ready", label: "Built-in compliance" },
];

export default function OwlSight() {
  const a = useScrollReveal();
  const b = useScrollReveal();
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Products · Owl Sight"
          title="Owl Sight — Confidence That Every Dataset is Migration-Ready"
          description="AI-driven validations, PII compliance and reconciliation dashboards in one observability layer."
        />

        <section className="container py-12 md:py-16" ref={a.ref}>
          <div className={`grid lg:grid-cols-12 gap-10 items-center ${a.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <Eye size={14} /> AI DQ Analyst Agent
              </span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.1]">
                Catch dirty data <span className="text-primary">before it catches you.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                Owl Sight gives enterprises proactive detection of data issues — across master and transactional data, across every wave —
                so go-live is never a guessing game.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Improve Your Data Quality <ArrowRight size={16} />
              </Link>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="text-3xl md:text-4xl font-bold text-primary font-heading">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-alt py-12 md:py-20" ref={b.ref}>
          <div className="container">
            <div className={`max-w-2xl ${b.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">Key Capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground font-heading">A complete data quality command centre.</h2>
            </div>
            <div className="mt-10 grid md:grid-cols-2 gap-6">
              {capabilities.map((c, i) => (
                <article key={c.title} className={`group relative bg-card rounded-2xl border border-border/60 p-7 hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 transition-all ${b.isVisible ? "animate-reveal-up" : "opacity-0"}`} style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 inline-flex w-12 h-12 rounded-xl bg-primary text-primary-foreground items-center justify-center shadow-lg shadow-primary/30"><c.Icon size={22} /></div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground font-heading">{c.title}</h3>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed">{c.body}</p>
                    </div>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-14">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <ShieldCheck size={14} /> Proactive error detection
              </div>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold font-heading">Built-in audit & compliance checks for every record.</h3>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Book a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}