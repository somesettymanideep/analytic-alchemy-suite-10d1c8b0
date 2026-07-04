import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
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
      className={`grid md:grid-cols-[minmax(0,340px)_1fr] gap-0 rounded-2xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-md transition-all ${
        isVisible ? "animate-reveal-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="relative bg-primary aspect-[4/3] md:aspect-auto overflow-hidden">
        <img src={cs.image} alt={cs.title} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="p-6 md:p-8 flex flex-col">
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
          <div>
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
          </div>
          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-xl">
              <img
                src={caseStudies[1].image}
                alt="Analytics dashboard"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="container py-8 md:py-10">
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
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
        </div>
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
        <div className="rounded-2xl bg-secondary border border-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
          <p className="mt-5 text-primary-foreground/85 leading-relaxed max-w-2xl">
            {cs.summary}
          </p>
          <div className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/60">
            {cs.tag}
          </div>
          <ul className="mt-4 space-y-3">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-primary-foreground/90 leading-relaxed">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
            Read the full story <ArrowRight size={16} />
          </span>
          </div>
        </div>
      </div>
    </a>
    </div>
  );
}

function MagazineCard({ cs, index, anchor }: { cs: CaseStudy; index: number; anchor: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={isVisible ? "animate-reveal-up" : "opacity-0"}>
    <a
      href={`#${anchor}`}
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-card border border-border transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <img
          src={cs.image}
          alt={cs.imageAlt}
          loading="lazy"
          width={1280}
          height={832}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/95 backdrop-blur text-accent text-[10px] font-semibold uppercase tracking-wider border border-border">
          {cs.tag}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6 md:p-7">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold font-heading text-primary/20 group-hover:text-primary/40 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
        <ArrowUpRight
          size={18}
          className="text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
        />
      </div>
      <h3 className="mt-3 text-lg md:text-xl font-bold font-heading text-foreground leading-snug">
        {cs.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {cs.summary}
      </p>
      <span className="mt-auto pt-4 border-t border-border text-xs font-semibold uppercase tracking-wider text-primary inline-flex items-center gap-2">
        Read case study <ArrowRight size={12} />
      </span>
      </div>
    </a>
    </div>
  );
}

function CaseStudiesLayout() {
  const items = caseStudies.map((c, i) => ({ ...c, anchor: `case-${i + 1}` }));
  const [featured, ...rest] = items;
  const [activeTab, setActiveTab] = useState(featured.anchor);
  const activeArticle = items.find((i) => i.anchor === activeTab) ?? featured;

  return (
    <>
      {/* Magazine grid */}
      <section className="section-alt py-14 md:py-20">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                The Portfolio
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold font-heading text-foreground">
                Selected engagements
              </h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Tap any case to jump into the full editorial breakdown — context, challenges, solution and outcomes.
            </p>
          </div>

          <FeaturedCard cs={featured} anchor={featured.anchor} />

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((cs, i) => (
              <MagazineCard key={cs.id} cs={cs} index={i + 1} anchor={cs.anchor} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial detail */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
              Inside the Work
            </span>
            <h3 className="mt-2 text-3xl md:text-4xl font-bold font-heading text-foreground leading-tight">
              The full editorial — pick a case to read.
            </h3>
          </div>

          {/* Tab bar */}
          <div className="mt-8 -mx-4 px-4 overflow-x-auto">
            <div className="inline-flex gap-2 p-1.5 bg-muted rounded-full border border-border">
              {items.map((cs, i) => {
                const isActive = activeTab === cs.anchor;
                return (
                  <button
                    key={cs.id}
                    onClick={() => setActiveTab(cs.anchor)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span className="opacity-60 mr-2">{String(i + 1).padStart(2, "0")}</span>
                    Case {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-10">
            <CaseStudyArticle
              key={activeArticle.anchor}
              cs={activeArticle}
              index={items.findIndex((i) => i.anchor === activeArticle.anchor)}
              anchor={activeArticle.anchor}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default function CaseStudy() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ScrollToTop />
      <PageBanner
        image={banner}
        eyebrow="Client Work · Case Studies"
        title="Case Studies — D365 F&O Engagements"
        description="A closer look at programs delivering measurable financial, operational and automation outcomes."
      />
      <Intro />
      <CaseStudiesLayout />
      <Footer />
    </div>
  );
}