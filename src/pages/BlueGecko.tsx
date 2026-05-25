import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-bluegecko.jpg";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Map, Code2, Eye, ArrowLeftRight, Sparkles, Cpu, Layers, Workflow, ShieldCheck, Users, RefreshCw, ArrowRight } from "lucide-react";

const modules = [
  { Icon: Map, name: "Falcon Mapping", tag: "AI-driven mapping", desc: "AI-guided mapping, governed repository, real-time collaboration across business and IT.", href: "/products/falcon-mapping" },
  { Icon: Code2, name: "Code Cheetah", tag: "Automated pipelines", desc: "Turn business rules and mappings into production-grade SQL, Python and ETL pipelines.", href: "/products/code-cheetah" },
  { Icon: Eye, name: "Owl Sight", tag: "Proactive DQ", desc: "100+ AI-driven checks, PII detection and reconciliation dashboards before go-live.", href: "/products/owl-sight" },
  { Icon: ArrowLeftRight, name: "Orca Migrate", tag: "Large-scale migration", desc: "PaaS-based provisioning and smart cutover for faster, safer enterprise migrations.", href: "/products/orca-migrate" },
];

const differentiators = [
  { Icon: Cpu, title: "AI Intelligence at Core", body: "Automated mapping and ETL logic suggestions learn from your existing rules." },
  { Icon: Layers, title: "Unified Modular Platform", body: "Four products seamlessly integrated into one governed ecosystem." },
  { Icon: Workflow, title: "Speed & Efficiency", body: "Reduce delivery timelines by up to 70% across migrations and mappings." },
  { Icon: ShieldCheck, title: "Enterprise-Grade Trust", body: "Detect and resolve data issues long before they reach production." },
  { Icon: Users, title: "Collaboration-First", body: "Business and technical teams aligned with full transparency." },
  { Icon: RefreshCw, title: "Reusability & Standards", body: "Prebuilt templates and components eliminate redundancy." },
];

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`max-w-4xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Sparkles size={14} /> The Intelligent Data Management Platform
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading leading-[1.1]">
          One AI-powered platform. <span className="text-primary">Four products that simplify your entire data journey.</span>
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          BlueGecko unifies Migration, Mapping, ETL and Quality into a single governed ecosystem — delivering trusted,
          business-ready data faster, with AI doing the heavy lifting.
        </p>
      </div>
    </section>
  );
}

function Modules() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-12 md:py-20">
      <div className="container" ref={ref}>
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Layers size={14} /> The BlueGecko Suite
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading">
            Explore the four modules
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {modules.map((m, i) => (
            <Link
              key={m.name}
              to={m.href}
              className={`group relative bg-card rounded-3xl border border-border/60 p-8 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <m.Icon size={26} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">{m.tag}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-foreground font-heading">{m.name}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{m.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                Explore module <ArrowRight size={16} />
              </span>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-20" ref={ref}>
      <div className={`max-w-2xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <Sparkles size={14} /> Our Unique Value Proposition
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading">
          Built for the way enterprise data really works.
        </h2>
      </div>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {differentiators.map((d, i) => (
          <div
            key={d.title}
            className={`group bg-card rounded-2xl border border-border/60 p-6 hover:border-primary/30 hover:shadow-lg transition-all ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <d.Icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-bold text-foreground font-heading">{d.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { value: "30-50%", label: "Faster Delivery", body: "Accelerated migrations, mappings and ETL builds." },
    { value: "20-40%", label: "Lower Operational Costs", body: "AI automation removes redundant manual effort." },
    { value: "50-70%", label: "Less Reconciliation", body: "Proactive quality checks ensure trusted data." },
  ];
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Business Impact</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold font-heading">Measurable outcomes, not promises.</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 backdrop-blur">
              <div className="text-4xl md:text-5xl font-bold font-heading text-accent">{s.value}</div>
              <div className="mt-2 text-lg font-semibold">{s.label}</div>
              <p className="mt-2 text-sm text-primary-foreground/80">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold hover:-translate-y-0.5 transition-all">
            Book a BlueGecko Demo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function BlueGecko() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Products · BlueGecko Platform"
          title="BlueGecko — The AI Data Management Platform"
          description="AI-driven mapping, automated pipelines, proactive data quality and large-scale migration — unified in one platform."
        />
        <Intro />
        <Modules />
        <Differentiators />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}