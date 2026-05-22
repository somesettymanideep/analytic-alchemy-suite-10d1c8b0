import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import IndustryCta from "@/components/IndustryCta";
import PageBanner from "@/components/PageBanner";
import bannerFinance from "@/assets/banner-finance.jpg";
import intelligenceImg from "@/assets/finance-intelligence.jpg";
import expertiseImg from "@/assets/finance-expertise.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Landmark,
  Cog,
  Sparkles,
  Database,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Server,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <Landmark size={14} /> Financial Services
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Modernizing Capital Markets and Banking with Intelligent Finance
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            In a sector where speed, security, and precision are the benchmarks of success, your
            institution needs a digital core that outpaces the market. The financial services
            landscape is shifting from traditional transaction processing to real-time,
            data-driven intelligence. At{" "}
            <strong className="text-foreground">Nextgenlytics</strong>, we provide expert
            technology consulting for banks, NBFCs, and insurance firms. We help you navigate
            complex regulatory environments while transforming legacy systems into agile,
            AI-powered platforms that drive sustainable growth.
          </p>
        </div>
        <div className={`relative ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={intelligenceImg}
            alt="Financial intelligence dashboard"
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
      Icon: Server,
      title: "Legacy System Rigidity",
      body: "Outdated core banking and insurance systems hinder the ability to launch new digital products quickly, leading to lost market share to fintech competitors.",
    },
    {
      Icon: ShieldCheck,
      title: "Regulatory & Compliance Pressure",
      body: "Increasing global and local (RBI/SEBI) mandates for reporting and data residency require automated, high-precision audit trails and governance.",
    },
    {
      Icon: AlertTriangle,
      title: "Sophisticated Cyber & Fraud Risks",
      body: "As transactions move to real-time, traditional fraud detection methods fail to catch modern threats, risking both capital and customer trust.",
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
            Key challenges in financial services
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The pressures shaping every financial institution — and the impact they have on operations.
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
    "Specialized AI Agents & workflows for banks, insurance, and fintech",
    "Core banking modernization and fraud detection enhancement",
    "Improved customer engagement through intelligent data insights",
    "Secure, intelligent, and future-ready financial systems",
  ];
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`relative order-2 lg:order-1 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" aria-hidden />
          <img
            src={expertiseImg}
            alt="Banking professionals collaborating"
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
            Building the foundation for secure, high-velocity finance
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed text-pretty">
            At Nextgenlytics, we ensure that your financial systems are secure, intelligent, and
            future-ready. Nextgenlytics provides expert AI, ERP, and data platform implementation
            for financial institutions including banks, insurance companies, and fintech
            organizations. Whether you are modernizing core banking systems, enhancing fraud
            detection, or improving customer engagement, we deliver specialized AI Agents and
            intelligent workflows to transform financial data into actionable insights.
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
          b: "Transition legacy finance and treasury modules to a cloud-native environment for unified ledger, risk, and compliance visibility.",
        },
        {
          h: "Optimize with BTP & BDC",
          b: "Leverage SAP Business Technology Platform to build customer portals and use BDC for high-volume migration of account, policy, and transaction data.",
        },
        {
          h: "Insight with Analytics Cloud (SAC)",
          b: "Centralize risk, regulatory, and performance data into a single pane of glass for real-time decisioning and executive reporting.",
        },
      ],
    },
    {
      Icon: LineChart,
      tag: "Microsoft Dynamics 365",
      title: "Agile, AI-ready operations",
      items: [
        {
          h: "Agile Finance with Business Central",
          b: "Implement streamlined accounting and automated reconciliation workflows tailored for mid-market NBFCs and fintech firms.",
        },
        {
          h: "Legacy AX Modernization",
          b: "Transform outdated Dynamics AX finance modules into modern, AI-ready ecosystems to eliminate technical debt and security risks.",
        },
        {
          h: "End-to-End Managed Services",
          b: "Ensure continuous uptime and performance optimization with dedicated support for your entire Microsoft ERP and finance stack.",
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
            Specialized toolsets for financial transformation
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

export default function Finance() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerFinance}
          eyebrow="Industries · Financial Services"
          title="Modernizing Capital Markets and Banking with Intelligent Finance"
          description="Expert AI, ERP, and data platform implementation for banks, NBFCs, insurance, and fintech firms."
        />
        <Intro />
        <KeyChallenges />
        <OurExpertise />
        <PracticeAreas />
              <IndustryCta sector="financial services" />
      </main>
      <Footer />
    </div>
  );
}
