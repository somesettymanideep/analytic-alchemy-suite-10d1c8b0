import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-datasphere.jpg";
import imgFabric from "@/assets/datasphere-fabric.jpg";
import imgVirt from "@/assets/datasphere-virtualisation.jpg";
import imgCross from "@/assets/datasphere-crosscloud.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Sparkles,
  Network,
  Layers,
  Workflow,
  BookOpen,
  LineChart,
  Brain,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Plus,
  Minus,
  Cloud,
  ShieldCheck,
} from "lucide-react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Network, value: "Unified", label: "Business data fabric" },
    { Icon: Layers, value: "Semantic", label: "SAP context preserved" },
    { Icon: Cloud, value: "Hybrid", label: "Cross-cloud interoperability" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> SAP DataSphere
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Connect your entire data estate — <span className="text-primary">without losing the business context</span> that makes SAP data valuable.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Most data integration tools move your data but lose what makes it meaningful — the business logic, the
            organisational hierarchies, the relationships between cost centres, customers, and materials that only exist
            inside SAP. <strong className="text-foreground">SAP DataSphere</strong> is different. It creates a business
            data fabric that preserves the full semantic context of your SAP data while connecting it to external clouds,
            non-SAP systems, and analytics platforms.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">nextgenlytics</strong> implements DataSphere so your AI models and
            analytics always work from data that is not just accurate — but contextually correct.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgFabric} alt="SAP DataSphere unified business data fabric" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Network size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Architecture</p>
              <p className="text-sm font-bold text-foreground font-heading">Business Data Fabric</p>
            </div>
          </div>
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-accent/20 blur-3xl -z-10" />
        </div>
      </div>

      <div className="mt-20 grid sm:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {stats.map((s) => (
          <div key={s.label} className="bg-card p-7 flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
              <s.Icon size={22} />
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-foreground font-heading leading-none">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Delivers ---------------- */
function Delivers() {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    {
      Icon: Network,
      title: "Unified Business Data Fabric",
      body: "We implement DataSphere as a single entry point for all your enterprise data — connecting SAP S/4HANA, SAP ECC, and non-SAP sources without complex manual data movement or duplication.",
    },
    {
      Icon: Layers,
      title: "Preservation of SAP Business Context",
      body: "Unlike generic data lakes, DataSphere retains the semantic definitions and entity relationships from your SAP core. Financial logic, material groupings, and organisational structures remain intact from source system to final dashboard.",
    },
    {
      Icon: Workflow,
      title: "Data Virtualisation Without Duplication",
      body: "We leverage DataSphere's virtualisation capabilities to provide real-time access to distributed datasets where they live — eliminating unnecessary data copying, reducing storage costs, and ensuring analysts always work with fresh data.",
    },
    {
      Icon: BookOpen,
      title: "Integrated Data Cataloguing & Lineage",
      body: "We configure DataSphere's built-in catalogue to give your teams full visibility into what data exists, where it came from, and how it has been transformed — supporting compliance, governance, and self-service analytics.",
    },
    {
      Icon: LineChart,
      title: "Direct Integration with SAP Analytics Cloud",
      body: "We optimise the connection between DataSphere and SAP Analytics Cloud (SAC) — enabling your leadership team to run complex simulations and predictive planning on a governed, semantically rich data foundation.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> What nextgenlytics Delivers with SAP DataSphere
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            One semantic data layer — for every cloud, every team, every model
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From fabric design to SAC integration — every DataSphere environment we deliver preserves business context
            and accelerates trusted analytics.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 3).map((it, i) => (
            <article
              key={it.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-8 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 mb-6">
                <it.Icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-foreground font-heading">{it.title}</h3>
              <div className="mt-3 h-1 w-12 bg-accent rounded-full" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>

        <div className="mt-8 grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div
            className={`lg:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-border/60 ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "360ms" }}
          >
            <img src={imgVirt} alt="SAP DataSphere data virtualisation, catalogue and lineage" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Catalogue & Lineage
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Full visibility — from source table to final dashboard.
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {services.slice(3).map((it, i) => (
              <article
                key={it.title}
                className={`group relative bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 flex-1 flex flex-col justify-center ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i + 4) * 120}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <it.Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground font-heading">{it.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
                  </div>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WhyUs ---------------- */
function WhyUs() {
  const { ref, isVisible } = useScrollReveal();
  const pillars = [
    {
      Icon: Layers,
      title: "Deep SAP Functional Knowledge",
      body: "Our team understands the underlying table structures and business process logic of SAP S/4HANA and ECC — ensuring your DataSphere models are accurate, performant, and meaningful from day one.",
    },
    {
      Icon: Cloud,
      title: "Cross-Cloud Interoperability",
      body: "We build hybrid data ecosystems that connect SAP DataSphere with Microsoft Fabric, Snowflake, and Databricks — giving you a unified data layer that spans your entire technology landscape.",
    },
    {
      Icon: Brain,
      title: "AI-Ready Data Foundation",
      body: "We prepare your DataSphere environment for advanced analytics and AI use cases — ensuring the data your models consume is governed, contextually correct, and consistently structured.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle2 size={14} /> Why nextgenlytics for SAP DataSphere
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              SAP data is only as valuable as the context around it.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              DataSphere — implemented by nextgenlytics — ensures that context is never lost, no matter where your data
              travels.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgCross} alt="Cross-cloud hybrid data ecosystem with SAP DataSphere" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">SAP · Fabric · Snowflake · Databricks</p>
                <p className="text-primary-foreground/80 text-xs mt-1">One semantic layer spanning your entire landscape.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to a DataSphere specialist
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-7 md:p-8 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 140}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="shrink-0 flex flex-col items-center">
                  <span className="text-3xl font-bold text-accent font-heading leading-none">0{i + 1}</span>
                  <span className="mt-2 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <p.Icon size={20} />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground font-heading">{p.title}</h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            </article>
          ))}

          <article
            className={`relative overflow-hidden rounded-2xl border border-border/60 shadow-lg bg-primary ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${pillars.length * 140}ms` }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
            <div className="relative p-7 md:p-8 text-primary-foreground">
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-accent">
                <ShieldCheck size={12} /> The nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Semantic fidelity. Hybrid by design. AI-ready by default.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We pair SAP-certified data architects with cross-cloud engineering depth — so every model, every share,
                and every pipeline you ship carries SAP business meaning all the way to the dashboard.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "What is SAP DataSphere?",
    a: "SAP DataSphere (formerly SAP Data Warehouse Cloud) is a comprehensive cloud-based data integration and management service that creates a unified business data fabric across SAP and non-SAP environments. It preserves the semantic business context of SAP data — including organisational structures, financial logic, and entity relationships — while enabling seamless integration with external analytics platforms and cloud data lakes.",
  },
  {
    q: "What is the difference between SAP DataSphere and SAP BW/4HANA?",
    a: "SAP BW/4HANA is a traditional data warehouse optimised for complex SAP data transformations and historical reporting. SAP DataSphere is a newer, cloud-native data fabric platform focused on data virtualisation, semantic modelling, and real-time integration across hybrid multi-cloud environments — with less emphasis on physical data movement and more on preserving business context across connected systems.",
  },
  {
    q: "How does SAP DataSphere integrate with non-SAP systems?",
    a: "SAP DataSphere connects to non-SAP cloud platforms — including Microsoft Azure, AWS, Snowflake, and Databricks — through built-in connectors and open APIs. Data can be federated in real time without physical replication, allowing organisations to build a unified analytical view across their entire data estate while keeping source systems unchanged.",
  },
];

function Faq() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container max-w-4xl" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <HelpCircle size={14} /> FAQ
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Common questions businesses ask about this service — with clear, direct answers.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <article
                key={f.q}
                className={`bg-card rounded-2xl border border-border/60 shadow-sm transition-all ${
                  isOpen ? "shadow-lg border-primary/30" : "hover:border-primary/20"
                } ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-lg font-semibold text-foreground font-heading">{f.q}</span>
                  <span
                    className={`shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page ---------------- */
export default function SapDataSphere() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Solutions · SAP"
          title="SAP DataSphere Implementation"
          description="Connect your entire data estate — without losing the business context that makes SAP data valuable."
        />
        <Intro />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
