import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import IndustryCta from "@/components/IndustryCta";
import PageBanner from "@/components/PageBanner";
import bannerEnergy from "@/assets/banner-energy.jpg";
import intelligenceImg from "@/assets/energy-intelligence.jpg";
import expertiseImg from "@/assets/energy-expertise.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Zap,
  Cog,
  Sparkles,
  Database,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Wrench,
  Leaf,
  Activity,
} from "lucide-react";

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Zap size={14} /> Energy & Utilities
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Powering the Future with Intelligent Energy Operations
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            In an era of rapid transition toward sustainability and smart grids, your energy
            enterprise needs a digital infrastructure that balances reliability with innovation.
            The energy sector is evolving from traditional resource management to a data-intensive
            landscape focused on efficiency and decarbonization. At{" "}
            <strong className="text-foreground">Nextgenlytics</strong>, we provide specialized
            technology consulting for oil and gas, renewables, and utility providers. We help you
            modernize legacy assets into agile, AI-driven ecosystems that optimize production and
            ensure long-term energy security.
          </p>
        </div>
        <div className={`relative ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={intelligenceImg}
            alt="Energy operations intelligence dashboard"
            loading="lazy"
            width={1280}
            height={896}
            className="relative w-full h-auto rounded-2xl shadow-xl border border-border/60 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function KeyChallenges() {
  const { ref, isVisible } = useScrollReveal();
  const challenges = [
    {
      Icon: Wrench,
      title: "Aging Infrastructure & Downtime",
      body: "Legacy grid systems and aging extraction equipment lead to unexpected failures and high maintenance costs, impacting overall supply reliability.",
    },
    {
      Icon: Leaf,
      title: "Sustainability & Regulatory Compliance",
      body: "Stricter environmental mandates require precise tracking of carbon footprints and emissions, demanding transparent and automated reporting systems.",
    },
    {
      Icon: Activity,
      title: "Massive Data Volatility",
      body: "Managing vast amounts of sensor data from remote sites and smart meters makes it difficult to extract real-time insights for load balancing and production.",
    },
  ];
  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles size={14} /> Key Challenges
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Key challenges in the energy sector
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The pressures shaping every energy and utility provider — and the impact they have on operations.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((c, i) => (
            <article
              key={c.title}
              className={`group relative bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <c.Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground font-heading">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurExpertise() {
  const { ref, isVisible } = useScrollReveal();
  const points = [
    "Specialized AI Agents & workflows for oil & gas, renewables, and utilities",
    "Asset performance optimization and smart grid enablement",
    "Improved energy forecasting and load balancing intelligence",
    "Intelligent, efficient, and sustainable energy operations",
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`relative order-2 lg:order-1 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={expertiseImg}
            alt="Energy engineers reviewing data on site"
            loading="lazy"
            width={1280}
            height={896}
            className="relative w-full h-auto rounded-2xl shadow-xl border border-border/60 object-cover"
          />
        </div>
        <div className={`order-1 lg:order-2 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Cog size={14} /> Our Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Building the foundation for sustainable, high-efficiency power
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed text-pretty">
            At Nextgenlytics, we ensure your energy operations are intelligent, efficient, and
            sustainable. Nextgenlytics provides expert AI, ERP, and data platform solutions for
            energy and utility organizations including oil & gas, renewable energy providers, and
            power distribution companies. Whether you are optimizing asset performance, enabling
            smart grids, or improving energy forecasting, we deliver specialized AI Agents and
            data-driven workflows to transform operational data into strategic insights.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function PracticeAreas() {
  const { ref, isVisible } = useScrollReveal();
  const practices = [
    {
      Icon: Database,
      tag: "SAP Practice",
      title: "Industrial-grade ERP, modernised",
      items: [
        {
          h: "Modernize with SAP S/4HANA & RISE",
          b: "Transition legacy plant maintenance and asset modules to a cloud-native environment for unified operations, finance, and sustainability visibility.",
        },
        {
          h: "Optimize with BTP & BDC",
          b: "Leverage SAP Business Technology Platform to build IoT-driven asset portals and use BDC for high-volume migration of meter, sensor, and equipment data.",
        },
        {
          h: "Insight with Analytics Cloud (SAC)",
          b: "Centralize generation, distribution, and emissions data into a single pane of glass for real-time load analysis and executive decision-making.",
        },
      ],
    },
    {
      Icon: LineChart,
      tag: "Microsoft Dynamics 365",
      title: "Agile, AI-ready operations",
      items: [
        {
          h: "Agile Operations with Business Central",
          b: "Implement streamlined field service and automated work-order workflows tailored for mid-market utilities and renewable energy operators.",
        },
        {
          h: "Legacy AX Modernization",
          b: "Transform outdated Dynamics AX asset and maintenance modules into modern, AI-ready ecosystems to eliminate technical debt across your grid.",
        },
        {
          h: "End-to-End Managed Services",
          b: "Ensure continuous uptime and performance optimization with dedicated support for your entire Microsoft ERP and operations stack.",
        },
      ],
    },
  ];
  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container" ref={ref}>
        <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Cog size={14} /> Technology Practice Areas
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Specialized toolsets for energy transformation
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Modernization and managed services across the SAP and Microsoft ecosystems.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {practices.map((p, i) => (
            <article
              key={p.tag}
              className={`group relative bg-card rounded-2xl border border-border/60 p-8 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.Icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">{p.tag}</p>
                  <h3 className="text-xl font-bold text-foreground font-heading">{p.title}</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-5">
                {p.items.map((it) => (
                  <li key={it.h} className="border-l-2 border-accent/60 pl-4">
                    <h4 className="text-sm font-semibold text-foreground">{it.h}</h4>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{it.b}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Talk to an energy specialist
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Energy() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerEnergy}
          eyebrow="Industries · Energy & Utilities"
          title="Powering the Future with Intelligent Energy Operations"
          description="Specialized AI, ERP, and data platform solutions for oil & gas, renewables, and utility providers."
        />
        <Intro />
        <KeyChallenges />
        <OurExpertise />
        <PracticeAreas />
              <IndustryCta sector="energy" />
      </main>
      <Footer />
    </div>
  );
}
