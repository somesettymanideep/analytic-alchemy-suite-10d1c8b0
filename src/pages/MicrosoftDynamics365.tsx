import { useDocumentTitle } from "@/hooks/use-document-title";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import SolutionHighlight from "@/components/SolutionHighlight";
import bannerD365 from "@/assets/banners/banner-d365.jpg";
import imgInsights from "@/assets/solutions/d365-customer-insights.jpg";
import imgFinance from "@/assets/solutions/d365-finance-ops.jpg";
import imgSupply from "@/assets/solutions/d365-supply-chain.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, CheckCircle, Cloud, Database, Minus, Plus, Question, Robot, Sparkle, Stack, TreeStructure, Truck, Users, Wallet, Wrench } from "@phosphor-icons/react";

/* ---------------- Intro ---------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { Icon: Stack, value: "70+", label: "Legal entities supported" },
    { Icon: Cloud, value: "9", label: "Countries live" },
    { Icon: TreeStructure, value: "6", label: "ISVs integrated" },
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkle size={14} /> D365 Finance & Operations — Implementation & AMS
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Implementation gets you live. <span className="text-primary">AMS keeps you running.</span> We do both.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            <strong className="text-foreground">Nextgenlytics delivers full-lifecycle Dynamics 365 Finance & Operations</strong> —
            data migration, implementation, ISV integration, and ongoing Application Managed Services — across
            multi-country, multi-entity landscapes.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            This is our most evidenced Microsoft engagement: Nash Squared, 70+ legal entities across 9 countries, running
            on 6 ISVs, supported end to end.
          </p>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={imgInsights} alt="AI-powered customer insights in Dynamics 365" width={1280} height={896} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:flex items-center gap-3 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border/60">
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
              <Robot size={20} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Built-in</p>
              <p className="text-sm font-bold text-foreground font-heading">Copilot AI</p>
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
      Icon: Wrench,
      title: "Application Managed Services",
      body: "Our strongest Microsoft proof point: 70+ legal entities across 9 countries, 6 ISVs (Kofax, TAS/SKG, Lasernet, CMS, Nétive) — supported end to end across UK, Ireland, Netherlands, Belgium, Poland, Germany, the Americas, Canada, and India.",
    },
    {
      Icon: Wallet,
      title: "Agile Finance & Operations",
      body: "Real-time financial visibility, automated global tax compliance, and AI-driven cash flow forecasting — all configured to reduce manual work and improve profitability.",
    },
    {
      Icon: Truck,
      title: "Resilient Supply Chain Management",
      body: "End-to-end visibility across your value chain. We configure predictive analytics to flag disruptions before they happen, and automation to keep warehouse and procurement running smoothly.",
    },
    {
      Icon: Users,
      title: "AI-Powered Customer Insights",
      body: "We connect Dynamics 365 Sales and Marketing to give your team AI-driven lead scoring, customer behaviour predictions, and automated campaign journeys — so every interaction moves the needle.",
    },
    {
      Icon: Robot,
      title: "Microsoft Copilot Integration",
      body: "Dynamics 365 is built for Copilot. We enable your teams to draft emails, summarise cases, and generate reports using natural language — directly inside the tools they already use.",
    },
  ];

  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkle size={14} /> What Nextgenlytics Delivers with D365 F&O
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Implementation, integration, and the AMS that keeps it all running
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Live across multi-country, multi-entity landscapes — evidenced in production, not a slide deck.
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
            <img src={imgSupply} alt="Dynamics 365 supply chain visibility" width={1280} height={896} loading="lazy" className="w-full h-[300px] md:h-[360px] object-cover transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/95 backdrop-blur text-[10px] font-semibold uppercase tracking-widest text-primary border border-border">
                Supply Chain
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold text-primary-foreground font-heading">
                Predictive visibility across procurement, warehouse, and logistics.
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
      Icon: Stack,
      title: "Full Microsoft Stack Expertise",
      body: "We synchronise Dynamics 365 with Microsoft 365, Azure, and the Power Platform — so data flows freely across your entire Microsoft environment without friction.",
    },
    {
      Icon: TreeStructure,
      title: "Low-Code Extensibility",
      body: "Using the Power Platform, we build custom apps and automations on top of your Dynamics setup — solving unique business problems without heavy custom development costs.",
    },
    {
      Icon: Database,
      title: "Data-First Approach",
      body: "We structure your Dataverse environment from the ground up, ensuring your AI models are always grounded in clean, accurate, real-time business data.",
    },
  ];

  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className={`lg:sticky lg:top-24 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
              <CheckCircle size={14} /> Why Nextgenlytics
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
              We stay after go-live. That's the difference.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Implementation, ISV integration, and AMS run by the same team — one accountable partner from
              go-live through years of operation.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-xl border border-border/60">
              <img src={imgFinance} alt="Dynamics 365 finance and operations dashboards" width={1280} height={896} loading="lazy" className="w-full h-[320px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-primary-foreground text-sm font-semibold">Finance · Sales · Supply Chain · Service</p>
                <p className="text-primary-foreground/80 text-xs mt-1">One platform. One source of truth.</p>
              </div>
            </div>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Talk to Our D365 F&O Team
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
                <Robot size={12} /> The Nextgenlytics Difference
              </span>
              <h3 className="mt-3 text-xl md:text-2xl font-bold font-heading">
                Where Dynamics 365 stops being software — and becomes your operating system for growth.
              </h3>
              <p className="mt-3 text-sm md:text-base text-primary-foreground/85 leading-relaxed max-w-xl">
                We combine deep Microsoft stack expertise with Dataverse-first architecture — so every Copilot prompt,
                every automation, every dashboard works from trusted data.
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
    q: "Do you support D365 F&O after go-live, or just implementation?",
    a: "Both, run by the same team. Our Application Managed Services cover 70+ legal entities across 9 countries for Nash Squared, integrating 6 ISVs (Kofax, TAS/SKG, Lasernet, CMS, Nétive) into daily operations — one accountable partner from implementation through years of ongoing support.",
  },
  {
    q: "What is Microsoft Dynamics 365 used for?",
    a: "Microsoft Dynamics 365 is a cloud-based ERP and CRM platform used by enterprises to manage finance, supply chain, sales, customer service, and field operations in one connected system.",
  },
  {
    q: "How long does a Dynamics 365 implementation take?",
    a: "A standard Dynamics 365 implementation with Nextgenlytics typically ranges from 12 to 24 weeks depending on the scope, existing systems, and level of customisation required.",
  },
  {
    q: "Does Dynamics 365 work with Microsoft Copilot?",
    a: "Yes. Dynamics 365 is natively integrated with Microsoft Copilot, enabling users to generate insights, draft communications, and automate tasks using natural language within the platform.",
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
            <Question size={14} /> FAQ
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
export default function MicrosoftDynamics365() {
  useDocumentTitle("D365 Finance & Operations — Implementation & AMS");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerD365}
          eyebrow="Solutions · Microsoft"
          title="D365 Finance & Operations — Implementation & AMS"
          description="Full D365 F&O delivery — data migration, implementation, ISV integration, and ongoing Application Managed Services across multi-country, multi-entity landscapes."
        />
        <Intro />
        <SolutionHighlight
          eyebrow="Implementation & AMS"
          headline="Full D365 F&O delivery — data migration, implementation, ISV integration, and ongoing Application Managed Services across multi-country, multi-entity landscapes."
          evidence="Delivered for Nash Squared — 70+ legal entities, 9 countries, 6 ISVs (Kofax, TAS/SKG, Lasernet, CMS, Nétive). AMS running across UK, Ireland, Netherlands, Belgium, Poland, Germany, the Americas, Canada, and India."
        />
        <Delivers />
        <WhyUs />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}