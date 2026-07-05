import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import Reveal from "@/components/Reveal";
import { caseStudies, caseCategories } from "@/data/caseStudies";
import {
  BarChart3,
  LineChart,
  Cog,
  DollarSign,
  LifeBuoy,
  ArrowRight,
  Users,
  Building2,
  Globe,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileText,
  LayoutGrid,
  Check,
  Search,
  Map as MapIcon,
  Target as TargetIcon,
  Cloud,
} from "lucide-react";

const statIconMap: Record<string, typeof Users> = {
  users: Users,
  building: Building2,
  globe: Globe,
  clock: Clock,
  shield: ShieldCheck,
  trend: TrendingUp,
  file: FileText,
  grid: LayoutGrid,
  cog: Cog,
  cloud: Cloud,
  dollar: DollarSign,
  search: Search,
  map: MapIcon,
  target: TargetIcon,
};

const categoryIconMap: Record<string, typeof LifeBuoy> = {
  all: LayoutGrid,
  support: LifeBuoy,
  analytics: LineChart,
  automation: Cog,
  finance: DollarSign,
  "support-services": LifeBuoy,
};

function CaseCard({ cs, index }: { cs: (typeof caseStudies)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <article
      ref={ref}
      className={`grid md:grid-cols-12 gap-0 rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-md transition-all ${
        isVisible ? "animate-reveal-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative bg-primary aspect-[16/9] md:aspect-auto md:col-span-5 overflow-hidden">
        <img src={cs.image} alt={cs.title} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="md:col-span-7 p-6 md:p-8 flex flex-col">
        <div className="flex items-start gap-3 mb-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0 mt-0.5">
            <BarChart3 size={18} />
          </span>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-accent">
              {cs.categoryLabel}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground font-heading leading-snug mt-1">
              {cs.title}
            </h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cs.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-border/60 mb-5">
          {cs.stats.slice(0, 4).map((s) => {
            const Icon = statIconMap[s.icon] ?? Users;
            return (
              <div key={s.label} className="flex items-center gap-2 min-w-0">
                <Icon size={20} className="text-primary shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-foreground leading-tight">{s.value}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wide truncate">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mb-5">
          <div className="text-sm font-bold text-primary mb-2">Key Impact</div>
          <ul className="space-y-1.5">
            {cs.keyImpact.slice(0, 3).map((k) => (
              <li key={k} className="flex gap-2 text-sm text-foreground/80">
                <Check size={16} className="text-accent shrink-0 mt-0.5" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex justify-end">
          <Link
            to={`/case-study/${cs.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-primary text-primary px-5 py-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudy() {
  const [filter, setFilter] = useState<string>("all");
  const filtered =
    filter === "all" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />

      {/* Hero */}
      <section className="relative overflow-hidden mt-16 md:mt-20 bg-gradient-to-br from-secondary via-background to-secondary">
        <div className="container grid md:grid-cols-2 items-center gap-8 py-14 md:py-20">
          <Reveal variant="left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Case Studies
            </span>
            <h1 className="mt-3 text-3xl md:text-5xl font-bold text-primary font-heading leading-[1.05]">
              Real Challenges.
              <br />
              Practical Solutions.
              <br />
              <span className="text-accent">Measurable Impact.</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Explore how we help businesses overcome complex challenges and achieve impactful
              outcomes.
            </p>
          </Reveal>
          <Reveal variant="right" delay={150} className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl">
              <img
                src={caseStudies[1].image}
                alt="Analytics dashboard"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-8 md:py-10">
        <Reveal className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {caseCategories.map((cat) => {
            const Icon = categoryIconMap[cat.key] ?? LayoutGrid;
            const active = filter === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key)}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold border transition-all ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-card text-foreground/70 border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                <Icon size={16} /> {cat.label}
              </button>
            );
          })}
        </Reveal>
      </section>

      {/* Case list */}
      <section className="container pb-16 space-y-6">
        {filtered.map((cs, i) => (
          <CaseCard key={cs.id} cs={cs} index={i} />
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No case studies in this category yet.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="container pb-16">
        <Reveal variant="scale" className="rounded-2xl bg-secondary border border-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
              <FileText size={20} />
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground font-heading">
                Have a Challenge Similar to These?
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Let's build the right solution for your business.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition"
          >
            Talk to Our Experts <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
