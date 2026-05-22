import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import IndustryCta from "@/components/IndustryCta";
import PageBanner from "@/components/PageBanner";
import bannerManufacturing from "@/assets/banner-manufacturing.jpg";
import intelligenceImg from "@/assets/manufacturing-intelligence.jpg";
import expertiseImg from "@/assets/manufacturing-expertise.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Factory,
  Cog,
  ShieldCheck,
  Activity,
  Boxes,
  Sparkles,
  Database,
  LineChart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* -------------------------------------------------------------- */
/*  Intro                                                          */
/* -------------------------------------------------------------- */
function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Factory size={14} /> Manufacturing
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Manufacturing Intelligence & Digital Transformation
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            Driving efficiency, cutting costs, and maintaining high-quality standards are the
            pillars of modern manufacturing. At <strong className="text-foreground">Nextgenlytics</strong>,
            we provide world-class technology. By combining strategic advisory, rapid project
            delivery, and end-to-end application management, we solve critical production
            challenges and empower companies to achieve sustainable, AI-driven growth.
          </p>
        </div>
        <div className={`relative ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={intelligenceImg}
            alt="Engineer using tablet on factory floor with production analytics"
            loading="lazy"
            width={1200}
            height={800}
            className="relative w-full h-auto rounded-2xl shadow-xl border border-border/60 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Key Challenges                                                 */
/* -------------------------------------------------------------- */
function KeyChallenges() {
  const { ref, isVisible } = useScrollReveal();
  const challenges = [
    {
      Icon: Activity,
      title: "Efficient Production Operations",
      body: "Managing complex, multi-site production cycles while battling unplanned machine downtime. Every minute of idle time impacts delivery reliability.",
    },
    {
      Icon: Boxes,
      title: "Fragile Global Supply Chains",
      body: "Increasing volatility in raw material sourcing creates uncertainty. Manufacturers must move from reactive to predictive supply chain models.",
    },
    {
      Icon: ShieldCheck,
      title: "Stringent Quality & Compliance",
      body: "Adhering to evolving global safety and ESG standards requires a level of precision that manual tracking cannot sustain.",
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
            Key challenges in modern manufacturing
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The pressures shaping every production line — and the impact they have on operations.
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

/* -------------------------------------------------------------- */
/*  Our Expertise                                                  */
/* -------------------------------------------------------------- */
function OurExpertise() {
  const { ref, isVisible } = useScrollReveal();
  const points = [
    "Specialized AI Agents & workflows for industrial operations",
    "Discrete manufacturing & continuous process expertise",
    "Operational data turned into competitive advantage",
    "Scalable manufacturing intelligence as your output grows",
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`relative order-2 lg:order-1 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={expertiseImg}
            alt="Autonomous factory with AI-powered conveyor systems"
            loading="lazy"
            width={1200}
            height={800}
            className="relative w-full h-auto rounded-2xl shadow-xl border border-border/60 object-cover"
          />
        </div>
        <div className={`order-1 lg:order-2 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Cog size={14} /> Our Expertise
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Building the foundation for the autonomous factory
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed text-pretty">
            At Nextgenlytics, we ensure that your manufacturing intelligence is as scalable as your output.
            We provide expert AI and ERP implementation for organizations utilizing complex production
            ecosystems. Whether you are managing discrete manufacturing or continuous process
            industries, we provide the specialized AI Agents and workflows to turn your operational
            data into a competitive advantage.
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

/* -------------------------------------------------------------- */
/*  Technology Practice Areas                                     */
/* -------------------------------------------------------------- */
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
          b: "Transition from legacy environments to a cloud-native “Clean Core” to enable real-time production visibility and global scalability.",
        },
        {
          h: "Optimize with BTP & BDC",
          b: "Leverage the SAP Business Technology Platform to build custom manufacturing extensions and use BDC for high-volume legacy data integration.",
        },
        {
          h: "Insight with Analytics Cloud (SAC)",
          b: "Centralize shop-floor and financial data into a single pane of glass for real-time OEE tracking and executive decision-making.",
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
          b: "Implement lean manufacturing workflows and automated scheduling tailored for mid-market and scaling distributors.",
        },
        {
          h: "Legacy AX Modernization",
          b: "Transform outdated Dynamics AX systems into modern, AI-ready ecosystems to eliminate technical debt and security risks.",
        },
        {
          h: "End-to-End Managed Services",
          b: "Ensure continuous uptime and performance optimization with dedicated support for your entire Microsoft ERP stack.",
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
            Specialized toolsets for industrial transformation
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
</div>
    </section>
  );
}

/* -------------------------------------------------------------- */
/*  Page                                                          */
/* -------------------------------------------------------------- */
export default function Manufacturing() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerManufacturing}
          eyebrow="Industries · Manufacturing"
          title="Manufacturing Intelligence & Digital Transformation"
          description="Strategic advisory, rapid project delivery, and end-to-end application management for AI-driven, sustainable production."
        />
        <Intro />
        <KeyChallenges />
        <OurExpertise />
        <PracticeAreas />
              <IndustryCta sector="manufacturing" />
      </main>
      <Footer />
    </div>
  );
}
