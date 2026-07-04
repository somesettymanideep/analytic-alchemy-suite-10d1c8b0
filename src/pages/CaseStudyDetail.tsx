import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  Check,
  Users,
  Building2,
  Globe,
  Clock,
  ShieldCheck,
  TrendingUp,
  FileText,
  LayoutGrid,
  Cog,
  Cloud,
  DollarSign,
  Search,
  Map as MapIcon,
  Target as TargetIcon,
  Quote,
  ChevronRight,
} from "lucide-react";

const iconMap: Record<string, typeof Users> = {
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

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cs = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!cs) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground">Case study not found</h1>
          <Link to="/case-study" className="mt-4 inline-flex items-center gap-2 text-primary">
            <ArrowLeft size={16} /> Back to Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = caseStudies.filter((c) => c.slug !== cs.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />

      {/* Breadcrumbs */}
      <div className="mt-16 md:mt-20 border-b border-border">
        <div className="container py-4 text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/case-study" className="hover:text-primary">
            Case Studies
          </Link>
          <ChevronRight size={14} />
          <span className="text-foreground font-medium truncate">{cs.title}</span>
        </div>
      </div>

      {/* Header */}
      <section className="container grid md:grid-cols-2 items-center gap-10 py-10 md:py-14">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
            {cs.categoryLabel}
          </div>
          <h1 className="mt-3 text-3xl md:text-5xl font-bold text-primary font-heading leading-[1.1]">
            {cs.title}
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
            {cs.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition"
            >
              Talk to Our Experts <ArrowRight size={14} />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-card text-foreground px-5 py-2.5 text-sm font-semibold hover:border-primary hover:text-primary transition">
              Download PDF <Download size={14} />
            </button>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-primary shadow-xl">
          <img src={cs.image} alt={cs.title} className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Stats bar */}
      <section className="container">
        <div className="rounded-2xl border border-border bg-card p-6 grid grid-cols-2 md:grid-cols-5 gap-6">
          {cs.stats.map((s) => {
            const Icon = iconMap[s.icon] ?? Users;
            return (
              <div key={s.label} className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <div className="text-lg font-bold text-foreground leading-tight">{s.value}</div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Context & Impact */}
      <section className="container py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary font-heading mb-4">
            Business Context
          </h2>
          <div className="space-y-4 text-foreground/85 leading-relaxed">
            {cs.businessContext.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary font-heading mb-4">
            Key Impact
          </h2>
          <ul className="space-y-3">
            {cs.keyImpact.map((k) => (
              <li key={k} className="flex gap-3 text-foreground/85">
                <Check size={18} className="text-accent mt-0.5 shrink-0" />
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Challenges */}
      <section className="container pb-12">
        <div className="rounded-2xl bg-secondary border border-border p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-primary font-heading mb-6">
            Challenges
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.challenges.map((ch, i) => {
              const Icon = iconMap[ch.icon] ?? FileText;
              return (
                <div key={i} className="rounded-xl bg-card border border-border p-5">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                    <Icon size={18} />
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">{ch.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container pb-12 grid md:grid-cols-[1.3fr_1fr] gap-8 items-start">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary font-heading mb-4">
            Our Solution
          </h2>
          <ul className="space-y-3">
            {cs.solution.map((s) => (
              <li key={s} className="flex gap-3 text-foreground/85 leading-relaxed">
                <ArrowRight size={16} className="text-accent mt-1 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-primary shadow-lg">
          <img src={cs.image} alt="Solution" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* Approach + Technologies */}
      <section className="container pb-12 grid md:grid-cols-[1.5fr_1fr] gap-6">
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-bold text-primary font-heading mb-6">
            Our Approach
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {cs.approach.map((step, i) => {
              const Icon = iconMap[step.icon] ?? Search;
              return (
                <div key={step.title} className="text-center relative">
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                    <Icon size={20} />
                  </span>
                  <div className="text-sm font-bold text-foreground">{step.title}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">
                    {step.text}
                  </div>
                  {i < cs.approach.length - 1 && (
                    <ArrowRight
                      size={16}
                      className="hidden md:block text-accent absolute top-3 -right-2"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-bold text-primary font-heading mb-4">
            Technologies
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {cs.technologies.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 rounded-lg border border-border bg-background p-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-foreground/85 truncate">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="container pb-12">
        <h2 className="text-xl md:text-2xl font-bold text-primary font-heading mb-6">
          Key Results / Outcomes
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cs.results.map((r) => {
            const Icon = iconMap[r.icon] ?? TrendingUp;
            return (
              <div
                key={r.label}
                className="rounded-2xl border border-border bg-card p-5 hover:shadow-md transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Icon size={20} />
                </span>
                <div className="text-2xl font-bold text-primary font-heading">{r.value}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">{r.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial */}
      <section className="container pb-12">
        <div className="rounded-2xl bg-secondary border border-border p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
          <Quote size={40} className="text-primary/30 shrink-0" />
          <div className="flex-1">
            <p className="text-foreground/85 italic leading-relaxed">"{cs.testimonial.quote}"</p>
            <p className="mt-3 text-sm font-semibold text-primary">
              — {cs.testimonial.author}
            </p>
          </div>
          <div className="text-lg md:text-xl font-bold text-foreground font-heading whitespace-nowrap">
            {cs.testimonial.company}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-12">
        <div className="rounded-2xl bg-primary text-primary-foreground p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-heading">
              Let's Solve Your Challenges Together
            </h3>
            <p className="text-primary-foreground/80 mt-1 text-sm">
              Talk to our experts to learn how we can help you achieve more with D365 F&amp;O.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:brightness-105 transition"
          >
            Talk to Our Experts <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="container pb-20">
        <h3 className="text-xl md:text-2xl font-bold text-primary font-heading mb-5">
          Related Case Studies
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/case-study/${r.slug}`}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-primary">
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {r.categoryLabel}
                </div>
                <div className="mt-1 text-sm font-bold text-foreground leading-snug line-clamp-2">
                  {r.title}
                </div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Read More <ArrowRight size={12} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}