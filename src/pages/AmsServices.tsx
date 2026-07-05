import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Reveal from "@/components/Reveal";
import PageBanner from "@/components/PageBanner";
import banner from "@/assets/banner-d365.jpg";
import amsHero from "@/assets/ams-hero.webp.asset.json";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FileDown,
  Users,
  FileText,
  Globe2,
  ShieldCheck,
  Headphones,
  ChevronRight,
  Boxes,
  BarChart3,
  Zap,
  Package,
  Truck,
  Wrench,
  Landmark,
  UserCircle2,
  ShoppingCart,
  MessageSquare,
  Cpu,
  Layers,
  LineChart,
  Activity,
  Sliders,
  PieChart,
  Server,
  Clock,
  DollarSign,
  ClipboardCheck,
  Laptop,
  ChevronRight as Chev,
} from "lucide-react";

/* -------------------- Breadcrumb -------------------- */
function Breadcrumbs() {
  return (
    <div className="container pt-6">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Chev size={14} />
        <span>Services</span>
        <Chev size={14} />
        <span className="text-primary font-medium">Application Managed Services (AMS)</span>
      </nav>
    </div>
  );
}

/* -------------------- Hero Wheel Diagram -------------------- */
/* -------------------- Hero -------------------- */
function Hero() {
  return (
    <section className="container py-10 md:py-14">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <Reveal variant="left">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary leading-[1.1]">
            Application Managed <br /> Services (AMS)
          </h1>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold text-primary">
            Microsoft Dynamics 365 F&amp;O
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            End-to-end management and support for your Dynamics 365 Finance &amp; Operations
            environment—ensuring performance, reliability, and continuous improvement.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
            >
              Talk to Our Experts <ArrowRight size={16} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-card text-primary font-semibold hover:border-primary transition-colors"
            >
              Download Brochure <FileDown size={16} />
            </a>
          </div>
        </Reveal>

        <Reveal variant="right" className="relative">
          <img
            src={amsHero.url}
            alt="Application Managed Services for Microsoft Dynamics 365 F&O"
            className="w-full h-auto rounded-xl"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- Stats Bar -------------------- */
const stats = [
  { icon: Users, value: "6 ISVs", label: "Supported" },
  { icon: FileText, value: "70+", label: "Legal Entities" },
  { icon: Globe2, value: "9", label: "Countries" },
  { icon: ShieldCheck, value: "24/7", label: "Support Coverage" },
  { icon: Headphones, value: "Dedicated", label: "Support Team" },
];

function StatsBar() {
  return (
    <section className="container pb-10">
      <Reveal variant="scale">
        <div className="rounded-xl bg-card border border-border shadow-sm p-6 grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((s, i) => (
            <Reveal key={i} delay={100 + i * 80} className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center">
                <s.icon size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-primary leading-tight">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------- Three Column Details -------------------- */
const programBullets = [
  "Supporting 6 ISVs and 70+ Legal Entities across the UK, Ireland, Netherlands, Belgium, Poland, Germany, Americas, Canada, and India.",
  "Several entities operate with 3rd party software integrated into D365 for operations and financial data.",
  "Activities include system study, change management, process normalization, integration, and automation.",
];

const modules = [
  "Cash and bank management",
  "Consolidations",
  "Credit and collections",
  "Expense management",
  "Fixed assets",
  "General ledger",
  "Human Resources",
  "Purchase ledger",
  "Sales ledger",
  "Tax",
  "TAS (ISV)",
];

const analyticsBullets = [
  "Azure Synapse configuration and support for analytical report development for group-level and management reporting.",
  "Standardization of both analytical and operational reports across entities.",
];

function ThreeColumnDetails() {
  return (
    <section className="container pb-12">
      <div className="grid md:grid-cols-3 gap-6">
        <Reveal delay={0} className="group p-6 rounded-xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 will-change-transform">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Boxes size={18} className="text-accent" />
            </div>
            <div>
              <div className="text-xs font-semibold text-primary tracking-wide">Microsoft</div>
              <div className="text-base font-bold text-primary leading-tight">Dynamics 365</div>
            </div>
          </div>
          <h3 className="mt-5 text-lg font-bold text-foreground">
            Application Managed Services
            <br /> Program Details
          </h3>
          <ul className="mt-4 space-y-3">
            {programBullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                <ChevronRight size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="group p-6 rounded-xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 will-change-transform">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/15">
              <Layers size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold text-primary">Functional Modules</h3>
          </div>
          <div className="mt-5 text-sm font-semibold text-foreground">Supporting</div>
          <ul className="mt-3 space-y-2">
            {modules.map((m) => (
              <li key={m} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight size={14} className="text-accent shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="group p-6 rounded-xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 will-change-transform">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/15">
              <LineChart size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary leading-tight">
                Azure Synapse
                <br /> &amp; Power BI
              </h3>
            </div>
          </div>
          <h4 className="mt-5 text-base font-bold text-foreground">Reports &amp; Analytics</h4>
          <ul className="mt-4 space-y-3">
            {analyticsBullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                <ChevronRight size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------- Why Choose (Blue banner) -------------------- */
const whyItems = [
  {
    icon: Sliders,
    title: "Functional & Technical Expertise",
    desc: "Certified D365 F&O experts with deep functional and technical knowledge.",
  },
  {
    icon: Activity,
    title: "Proactive Monitoring & Support",
    desc: "24/7 monitoring, issue detection, and quick resolution to minimize downtime.",
  },
  {
    icon: Zap,
    title: "Process Optimization",
    desc: "Continuous improvement of processes, automation, and system performance.",
  },
  {
    icon: PieChart,
    title: "Reporting & Analytics Excellence",
    desc: "Data-driven insights with standardized reports using Azure Synapse & Power BI.",
  },
  {
    icon: Server,
    title: "Scalable & Reliable Support",
    desc: "Flexible engagement models aligned with your business needs and growth.",
  },
];

function WhyChoose() {
  return (
    <section className="container pb-12">
      <Reveal>
        <div className="rounded-xl bg-primary text-primary-foreground p-8 md:p-10">
          <Reveal className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading">
              Why Choose Nextgenlytics for AMS?
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-accent rounded-full" />
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyItems.map((w, i) => (
              <Reveal key={i} delay={150 + i * 100} className="text-primary-foreground">
                <w.icon size={26} className="text-primary-foreground/90" />
                <h3 className="mt-3 text-sm font-bold leading-snug">{w.title}</h3>
                <p className="mt-2 text-xs text-primary-foreground/75 leading-relaxed">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------- Benefits You Gain -------------------- */
const benefits = [
  { icon: BarChart3, title: "Improved System Stability & Performance" },
  { icon: Clock, title: "Faster Issue Resolution & Reduced Downtime" },
  { icon: DollarSign, title: "Optimized License Utilization & Cost Efficiency" },
  { icon: ClipboardCheck, title: "Standardized Reporting & Process Automation" },
  { icon: ShieldCheck, title: "Enhanced Compliance & Data Accuracy" },
];

function Benefits() {
  return (
    <section className="container pb-12">
      <Reveal>
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">Benefits You Gain</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent rounded-full" />
        </div>
      </Reveal>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {benefits.map((b, i) => (
          <Reveal key={i} delay={i * 80} className="group p-6 rounded-xl border border-border bg-card text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 will-change-transform">
            <div className="w-12 h-12 mx-auto rounded-full border border-primary/30 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:scale-110">
              <b.icon size={22} className="text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
            </div>
            <p className="mt-4 text-sm font-semibold text-primary leading-snug">{b.title}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Bottom CTA -------------------- */
function BottomCta() {
  return (
    <section className="container pb-16">
      <Reveal variant="scale">
        <div className="rounded-xl border border-accent/40 bg-accent/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
              <Laptop size={26} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-primary">
                Let's Optimize and Manage Your D365 F&amp;O Environment
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Partner with Nextgenlytics for reliable, secure, and efficient Application Managed Services.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shrink-0"
          >
            Talk to Our Experts <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

/* -------------------- Page -------------------- */
export default function AmsServices() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />
      <PageBanner
        image={banner}
        eyebrow="Services · AMS"
        title="Application Managed Services (AMS)"
        description="End-to-end management and support for your Dynamics 365 F&O environment — ensuring performance, reliability, and continuous improvement."
      />
      <div>
        <Breadcrumbs />
        <Hero />
        <StatsBar />
        <ThreeColumnDetails />
        <WhyChoose />
        <Benefits />
        <BottomCta />
      </div>
      <Footer />
    </div>
  );
}