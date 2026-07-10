import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import mascotAsset from "@/assets/products/bluegecko-mascot.png";
import { ArrowRight, ChartBar, CheckCircle, CloudArrowUp, Cpu, Database, Faders, FileText, Handshake, Lightning, ShieldCheck, Stack, TrendUp, Users, Wrench } from "@phosphor-icons/react";
import AiChipIcon from "@/components/icons/AiChipIcon";

const mascot = mascotAsset;

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 md:pt-56 pb-16 md:pb-24 bg-gradient-to-br from-secondary via-background to-accent/20">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-primary/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-accent/30 blur-3xl"
      />
      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left copy */}
        <div className="animate-reveal-up">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
            BlueGecko
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold font-heading text-foreground leading-[1.05] tracking-tight">
            Simplifying Data <br />
            Migrations & <br />
            Data Management
          </h1>
          <p className="mt-5 text-lg md:text-xl font-semibold text-primary">
            AI-Powered. Automated. Reliable.
          </p>
          <span className="mt-3 block h-1 w-16 rounded-full bg-accent" />
          <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
            BlueGecko unifies migration, mapping, ETL and data quality into one
            intelligent platform — helping you deliver trusted, business-ready
            data faster.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link
              to="/products/falcon-mapping"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Explore Product
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Trusted by forward-thinking enterprises worldwide
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-muted-foreground/70 font-heading font-bold tracking-wider">
              <span>KOFAX</span>
              <span>NASH SQUARED</span>
              <span>TUNGSTEN</span>
              <span>LASERNET</span>
              <span>SKG</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="relative flex items-end justify-center">
            <img
              src={mascot}
              alt="BlueGecko mascot"
              width={520}
              height={520}
              className="relative z-10 w-[260px] md:w-[360px] lg:w-[420px] drop-shadow-2xl"
            />
            <div className="absolute right-0 bottom-6 z-0 select-none pointer-events-none">
              <div className="font-heading font-extrabold text-primary/90 leading-[0.85] text-[64px] md:text-[96px] lg:text-[120px] tracking-tight text-right">
                BLUE<br />GECKO
              </div>
              <div className="mt-2 text-right text-xs md:text-sm font-bold tracking-[0.2em] text-primary">
                AI · DATA MANAGEMENT PLATFORM
              </div>
            </div>
          </div>

          {/* Dashboard card */}
          <div className="relative lg:absolute lg:-bottom-10 lg:-left-10 mt-8 lg:mt-0 z-20 bg-card rounded-2xl border border-border shadow-2xl shadow-primary/20 p-5 w-full max-w-md">
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: Database, label: "Projects", value: "24", delta: "+18%" },
                { icon: Stack, label: "Mappings", value: "1,250", delta: "+24%" },
                { icon: TrendUp, label: "Pipelines", value: "68", delta: "+30%" },
                { icon: FileText, label: "Data Quality", value: "98.6%", delta: "+12%" },
              ].map((k) => (
                <div key={k.label} className="rounded-lg bg-secondary/60 p-2.5">
                  <div className="flex items-center gap-1 text-primary">
                    <k.icon size={12} />
                    <span className="text-[9px] font-semibold text-muted-foreground">
                      {k.label}
                    </span>
                  </div>
                  <div className="mt-1 text-base font-bold text-foreground font-heading">
                    {k.value}
                  </div>
                  <div className="text-[9px] font-semibold text-accent">↑ {k.delta}</div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-[11px] font-semibold text-foreground mb-2">
                Recent Activity
              </p>
              <div className="space-y-1.5 text-[11px]">
                {[
                  { n: "Customer_Orders Migration", s: "Completed", t: "2 min ago", c: "bg-accent/20 text-accent-foreground" },
                  { n: "Vendor_Master ETL Pipeline", s: "Running", t: "10 min ago", c: "bg-primary/10 text-primary" },
                  { n: "Product_Catalog Mapping", s: "Completed", t: "25 min ago", c: "bg-accent/20 text-accent-foreground" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center justify-between">
                    <span className="text-foreground/80 truncate">{r.n}</span>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full font-semibold ${r.c}`}>{r.s}</span>
                      <span className="text-muted-foreground">{r.t}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Feature strip ---------------- */
function FeatureStrip() {
  const feats = [
    { Icon: Users, title: "Unified Platform", body: "Four products seamlessly integrated in one powerful ecosystem." },
    { Icon: AiChipIcon, title: "AI Intelligence", body: "Automated mapping and ETL suggestions with Gen-AI." },
    { Icon: Lightning, title: "Faster Delivery", body: "Reduce delivery timelines by up to 70%." },
    { Icon: ShieldCheck, title: "Data Quality", body: "Proactive detection and resolution of data issues for trusted data." },
    { Icon: Handshake, title: "Collaboration-First", body: "Built for teams with transparency and shared ownership." },
  ];
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container -mt-8 md:-mt-14 relative z-30" ref={ref}>
      <div className={`bg-card rounded-3xl border border-border shadow-xl shadow-primary/10 p-6 md:p-8 grid grid-cols-2 md:grid-cols-5 gap-6 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        {feats.map((f) => (
          <div key={f.title} className="text-center px-2">
            <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <f.Icon size={22} />
            </div>
            <h3 className="mt-3 font-heading font-bold text-sm text-foreground">{f.title}</h3>
            <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    { Icon: Wrench, title: "Set Up", body: "Configure your environment and data sources." },
    { Icon: CloudArrowUp, title: "Upload", body: "Upload mapping files, schemas or documents." },
    { Icon: Cpu, title: "AI-Powered Mapping", body: "BlueGecko Gen-AI suggests mappings and transformations." },
    { Icon: Faders, title: "Automate & Execute", body: "Run ETL pipelines and automate workflows." },
    { Icon: ChartBar, title: "Monitor & Improve", body: "Track progress, data quality and optimize continuously." },
  ];
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-16 md:py-24" ref={ref}>
      <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
          How <span className="text-primary">BlueGecko</span> Works
        </h2>
        <span className="mt-3 inline-block h-1 w-16 rounded-full bg-accent" />
      </div>
      <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-y-0 relative">
        {steps.map((s, i) => (
          <div key={s.title} className="relative flex flex-col items-center text-center px-2">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/20 shadow-md flex items-center justify-center text-primary">
                <s.Icon size={30} />
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow">
                {i + 1}
              </span>
            </div>
            <h3 className="mt-6 font-heading font-bold text-foreground">{s.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed max-w-[180px]">
              {s.body}
            </p>
            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute top-10 left-full -translate-x-1/2 items-center text-accent">
                <div className="w-16 border-t-2 border-dashed border-accent/60" />
                <ArrowRight size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why enterprises choose ---------------- */
function WhyChoose() {
  const items = [
    "Pre-built templates & reusable components",
    "Enterprise-grade security & governance",
    "Scalable for any size, any complexity",
    "Cloud-ready & hybrid compatible",
    "Built for performance and reliability",
  ];
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-16 md:py-20" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Why Enterprises Choose <span className="text-primary">BlueGecko</span>
          </h2>
          <span className="mt-3 inline-block h-1 w-16 rounded-full bg-accent" />
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {items.map((it, i) => (
            <div
              key={it}
              className={`flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shrink-0">
                <CheckCircle size={18} />
              </span>
              <span className="text-sm font-semibold text-foreground text-balance max-w-[180px]">
                {it}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  const chips = [
    { Icon: AiChipIcon, label: "AI-Powered Automation" },
    { Icon: Lightning, label: "Faster Deliveries" },
    { Icon: Database, label: "End-to-End Data Management" },
    { Icon: ShieldCheck, label: "Trusted Data Quality" },
  ];
  return (
    <section className="container py-16">
      <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-14 shadow-2xl shadow-primary/40">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight">
            Transform Your Data Journey <br />
            with <span className="text-accent">BlueGecko</span>
          </h2>
          <p className="mt-4 text-primary-foreground/80 mx-auto">
            Unify migrations, mappings and data quality in one AI-powered platform.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:-translate-y-0.5 transition-all shadow-lg"
            >
              Request a Demo <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              Talk to an Expert
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {chips.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-xl px-3 py-2.5 backdrop-blur"
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary-foreground text-primary shrink-0">
                  <c.Icon size={16} />
                </span>
                <span className="text-xs md:text-sm font-semibold text-primary-foreground text-left">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
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
        <Hero />
        <FeatureStrip />
        <HowItWorks />
        <WhyChoose />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}