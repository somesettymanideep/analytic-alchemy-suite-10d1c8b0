import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import imgTeamCollab from "@/assets/careers/team-collab.jpg";
import careersHeroAsset from "@/assets/careers/careers-hero.webp.asset.json";
import imgLifeInside from "@/assets/careers/life-inside.jpg";
import imgHiringHandshake from "@/assets/careers/hiring-handshake.jpg";
import bannerCareers from "@/assets/banner-careers.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Globe,
  TrendingUp,
  Heart,
  Send,
  Database,
  Layers,
  Cpu,
  Cloud,
  BarChart3,
  Search,
  X,
  Briefcase,
  CheckCircle2,
  Clock,
} from "lucide-react";

const whyItems = [
  { Icon: Users, title: "People First", body: "A culture built on respect, trust, and collaboration." },
  { Icon: Target, title: "Purpose Driven", body: "Work on meaningful projects that create real impact." },
  { Icon: Lightbulb, title: "Future Ready", body: "Learning, innovation and growth at the core of everything we do." },
  { Icon: Globe, title: "Global Impact", body: "Collaborate across borders and industries." },
  { Icon: TrendingUp, title: "Grow Together", body: "Continuous learning and clear career growth paths." },
  { Icon: Heart, title: "Well-being Matters", body: "We care for your well-being and work-life balance." },
];

type Job = {
  Icon: typeof Database;
  title: string;
  dept: string;
  location: string;
  exp: string;
  type: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

const openJobs: Job[] = [
  {
    Icon: Database,
    title: "Data Engineer",
    dept: "Data & Analytics",
    location: "Hyderabad, India",
    exp: "3-6 Years",
    type: "Full-time",
    posted: "2 days ago",
    summary:
      "Design, build and maintain scalable data pipelines that power analytics and AI products across enterprise clients.",
    responsibilities: [
      "Build and orchestrate ETL/ELT pipelines on modern lakehouse platforms.",
      "Model data for analytics and machine learning workloads.",
      "Optimize query performance and cost across cloud data warehouses.",
      "Collaborate with analysts and data scientists to deliver reliable datasets.",
    ],
    requirements: [
      "Strong SQL and Python skills.",
      "Hands-on experience with Databricks, Snowflake or Fabric.",
      "Familiarity with Airflow, dbt or similar orchestration tools.",
      "Cloud experience (Azure preferred).",
    ],
  },
  {
    Icon: Layers,
    title: "Solution Architect (D365)",
    dept: "Business Applications",
    location: "Hyderabad, India",
    exp: "6-10 Years",
    type: "Full-time",
    posted: "1 week ago",
    summary:
      "Own the end-to-end solution design for Microsoft Dynamics 365 implementations across F&O and BC engagements.",
    responsibilities: [
      "Lead solution blueprints, integrations and data migrations.",
      "Guide functional and technical teams through delivery.",
      "Partner with clients on roadmap and governance decisions.",
    ],
    requirements: [
      "6+ years across D365 F&O or Business Central.",
      "Strong grasp of integration patterns and Power Platform.",
      "Excellent client-facing communication.",
    ],
  },
  {
    Icon: Cpu,
    title: "AI/ML Engineer",
    dept: "AI & Automation",
    location: "Lucknow, India",
    exp: "3-6 Years",
    type: "Full-time",
    posted: "4 days ago",
    summary:
      "Ship production-grade ML and GenAI solutions — from experimentation to deployment — for enterprise use cases.",
    responsibilities: [
      "Prototype and productionize ML and LLM-based systems.",
      "Build RAG pipelines, evaluation harnesses and guardrails.",
      "Deploy models with robust MLOps practices.",
    ],
    requirements: [
      "Strong Python and PyTorch/TensorFlow.",
      "Experience with LangChain, vector stores and LLM APIs.",
      "MLOps exposure (MLflow, Docker, Kubernetes).",
    ],
  },
  {
    Icon: Cloud,
    title: "Cloud DevOps Engineer",
    dept: "Cloud Services",
    location: "Hyderabad, India",
    exp: "4-7 Years",
    type: "Full-time",
    posted: "3 days ago",
    summary:
      "Automate cloud infrastructure and CI/CD pipelines for mission-critical customer platforms.",
    responsibilities: [
      "Design and maintain IaC using Terraform or Bicep.",
      "Own CI/CD, observability and incident response.",
      "Harden cloud security and cost posture.",
    ],
    requirements: [
      "Deep Azure or AWS experience.",
      "Kubernetes, Helm and GitOps.",
      "Scripting in Python or Bash.",
    ],
  },
  {
    Icon: BarChart3,
    title: "Business Analyst",
    dept: "Consulting",
    location: "Amsterdam, Netherlands",
    exp: "2-5 Years",
    type: "Full-time",
    posted: "5 days ago",
    summary:
      "Translate client business goals into crisp requirements and measurable outcomes for data and AI programs.",
    responsibilities: [
      "Run discovery workshops and document requirements.",
      "Define KPIs and success metrics with stakeholders.",
      "Bridge business and engineering throughout delivery.",
    ],
    requirements: [
      "Consulting or product analyst background.",
      "Strong stakeholder management and storytelling.",
      "Comfort with SQL and BI tools.",
    ],
  },
];

const ALL = "all";

function useDebounced<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

const lifeGallery = [
  { img: imgTeamCollab, label: "Collaborate" },
  { img: imgLifeInside, label: "Innovate" },
  { img: imgHiringHandshake, label: "Celebrate" },
  { img: bannerCareers, label: "Give Back" },
];

function Hero() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="relative overflow-hidden bg-background pt-16 md:pt-20" ref={ref}>
      {/* Dotted decoration */}
      <div
        className="absolute top-8 left-8 w-40 h-40 opacity-30"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
        aria-hidden
      />
      <div className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left copy */}
          <div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] text-foreground ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              Build Your Future.
              <br />
              <span className="text-accent">Make an Impact.</span>
            </h1>
            <p
              className={`mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: "260ms" }}
            >
              At Nextgenlytics, we combine data, technology, and human potential to solve
              real-world challenges and create lasting impact for our clients and communities.
            </p>
          </div>

          {/* Right image with curved accent */}
          <div
            className={`relative ${isVisible ? "animate-reveal-right" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl shadow-primary/15 ring-1 ring-border/60 animate-float-y-slow">
              <img
                src={careersHeroAsset.url}
                alt="Careers at Nextgenlytics"
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyWork() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-14 md:py-20" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Why Work With Us?
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {whyItems.map((w, i) => (
            <div
              key={w.title}
              className={`group bg-card rounded-xl border border-border/60 p-5 text-center hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 transition-all duration-500 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${120 + i * 80}ms` }}
            >
              <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <w.Icon size={26} />
              </div>
              <h3 className="mt-4 text-sm font-heading font-bold text-primary">{w.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenOpportunities() {
  const { ref, isVisible } = useScrollReveal();
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState<string>(ALL);
  const [loc, setLoc] = useState<string>(ALL);
  const [expLevel, setExpLevel] = useState<string>(ALL);
  const [activeJob, setActiveJob] = useState<Job | null>(null);
  const debouncedSearch = useDebounced(search, 300);

  const departments = useMemo(
    () => Array.from(new Set(openJobs.map((j) => j.dept))),
    [],
  );
  const locations = useMemo(
    () => Array.from(new Set(openJobs.map((j) => j.location))),
    [],
  );
  const experiences = useMemo(
    () => Array.from(new Set(openJobs.map((j) => j.exp))),
    [],
  );

  const filtered = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    return openJobs.filter((j) => {
      if (dept !== ALL && j.dept !== dept) return false;
      if (loc !== ALL && j.location !== loc) return false;
      if (expLevel !== ALL && j.exp !== expLevel) return false;
      if (!q) return true;
      return (
        j.title.toLowerCase().includes(q) ||
        j.dept.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q) ||
        j.summary.toLowerCase().includes(q)
      );
    });
  }, [debouncedSearch, dept, loc, expLevel]);

  const hasFilters =
    search !== "" || dept !== ALL || loc !== ALL || expLevel !== ALL;

  const clearAll = () => {
    setSearch("");
    setDept(ALL);
    setLoc(ALL);
    setExpLevel(ALL);
  };

  return (
    <section id="openings" className="py-14 md:py-20" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 lg:gap-8">
          {/* Left dark panel */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-8 md:p-10 ${
              isVisible ? "animate-reveal-left" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
                Open Opportunities
              </h2>
              <div className="mt-3 h-1 w-14 rounded-full bg-accent" />
              <p className="mt-5 text-sm text-primary-foreground/80 leading-relaxed">
                Explore exciting career opportunities and be part of our mission to drive
                transformation for a better tomorrow.
              </p>
            </div>
          </div>

          {/* Right jobs panel */}
          <div
            className={`rounded-2xl border border-border/60 bg-card p-6 md:p-8 ${
              isVisible ? "animate-reveal-right" : "opacity-0"
            }`}
          >
            {/* Filters */}
            <div className="flex flex-col gap-3">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by title, department, location…"
                  className="pl-9 pr-9 h-10"
                  aria-label="Search jobs"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Select value={dept} onValueChange={setDept}>
                  <SelectTrigger className="h-10 w-auto min-w-[170px] text-xs md:text-sm">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL}>All Departments</SelectItem>
                    {departments.map((d) => (
                      <SelectItem key={d} value={d}>{d}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={loc} onValueChange={setLoc}>
                  <SelectTrigger className="h-10 w-auto min-w-[170px] text-xs md:text-sm">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL}>All Locations</SelectItem>
                    {locations.map((l) => (
                      <SelectItem key={l} value={l}>{l}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={expLevel} onValueChange={setExpLevel}>
                  <SelectTrigger className="h-10 w-auto min-w-[170px] text-xs md:text-sm">
                    <SelectValue placeholder="Experience Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={ALL}>All Experience</SelectItem>
                    {experiences.map((e) => (
                      <SelectItem key={e} value={e}>{e}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    <X size={14} /> Clear all
                  </button>
                )}
                <span className="ml-auto text-xs text-muted-foreground">
                  {filtered.length} of {openJobs.length} roles
                </span>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="mt-8 rounded-xl border border-dashed border-border/70 bg-muted/30 p-10 text-center">
                <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-full bg-background text-muted-foreground">
                  <Briefcase size={22} />
                </div>
                <p className="mt-4 text-sm font-heading font-bold text-primary">
                  No matching roles
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Try different keywords or clear the filters to see all openings.
                </p>
                {hasFilters && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <X size={14} /> Clear all filters
                  </button>
                )}
              </div>
            ) : (
            <ul className="mt-6 divide-y divide-border/60">
              {filtered.map((j, i) => (
                <li
                  key={j.title}
                  className={`group flex flex-col md:flex-row md:items-center gap-4 py-4 ${
                    isVisible ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${150 + i * 90}ms` }}
                >
                  <div className="flex items-center gap-3 md:min-w-[240px]">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <j.Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm md:text-[15px] font-heading font-bold text-primary leading-tight">
                        {j.title}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground truncate">{j.dept}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground md:flex-1">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-accent" /> {j.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} className="text-accent" /> {j.exp}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveJob(j)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-primary/30 text-primary text-xs md:text-sm font-semibold hover:bg-primary/5 transition-all"
                    >
                      View More <ArrowRight size={14} />
                    </button>
                    <a
                      href={`mailto:careers@nextgenlytics.com?subject=Application: ${encodeURIComponent(j.title)}`}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs md:text-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
                    >
                      Apply Now
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            )}
          </div>
        </div>
      </div>

      <Dialog open={!!activeJob} onOpenChange={(o) => !o && setActiveJob(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {activeJob && (
            <>
              <DialogHeader>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0">
                    <activeJob.Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <DialogTitle className="text-xl font-heading font-bold text-primary leading-tight">
                      {activeJob.title}
                    </DialogTitle>
                    <DialogDescription className="mt-1 text-xs text-muted-foreground">
                      {activeJob.dept}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground border-y border-border/60 py-3">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={13} className="text-accent" /> {activeJob.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} className="text-accent" /> {activeJob.exp}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Briefcase size={13} className="text-accent" /> {activeJob.type}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-accent" /> Posted {activeJob.posted}
                </span>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed">
                {activeJob.summary}
              </p>

              <div>
                <h4 className="text-sm font-heading font-bold text-primary">
                  Key Responsibilities
                </h4>
                <ul className="mt-2 space-y-2">
                  {activeJob.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-heading font-bold text-primary">
                  What We're Looking For
                </h4>
                <ul className="mt-2 space-y-2">
                  {activeJob.requirements.map((r) => (
                    <li key={r} className="flex gap-2 text-sm text-foreground/80">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end pt-2">
                <a
                  href={`mailto:careers@nextgenlytics.com?subject=Application: ${encodeURIComponent(activeJob.title)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all"
                >
                  Apply Now <ArrowRight size={16} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function LifeGallery() {
  const { ref, isVisible } = useScrollReveal();
  const [start, setStart] = useState(0);
  const visibleCount = 4;
  const canPrev = start > 0;
  const canNext = start + visibleCount < lifeGallery.length + 4; // decorative

  return (
    <section className="section-alt py-14 md:py-20" ref={ref}>
      <div className="container">
        <div className={`max-w-xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
            Life at Nextgenlytics
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-accent" />
          <p className="mt-4 text-sm text-muted-foreground">
            A glimpse of our vibrant culture and people.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setStart((s) => Math.max(0, s - 1))}
            disabled={!canPrev}
            aria-label="Previous"
            className="hidden md:inline-flex shrink-0 h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card text-primary hover:border-primary/40 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 flex-1">
            {lifeGallery.map((g, i) => (
              <figure
                key={g.label}
                className={`group ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
                style={{ animationDelay: `${150 + i * 100}ms` }}
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/60 shadow-md">
                  <img
                    src={g.img}
                    alt={g.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="mt-3 text-center text-sm font-heading font-semibold text-foreground">
                  {g.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setStart((s) => s + 1)}
            disabled={!canNext}
            aria-label="Next"
            className="hidden md:inline-flex shrink-0 h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card text-primary hover:border-primary/40 hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function ImpactCta() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-10 md:py-14" ref={ref}>
      <div
        className={`relative overflow-hidden rounded-2xl bg-primary text-primary-foreground p-6 md:p-10 ${
          isVisible ? "animate-reveal-up" : "opacity-0"
        }`}
      >
        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          <div className="inline-flex items-center justify-center w-14 h-14 shrink-0 rounded-full border-2 border-accent text-accent">
            <Send size={22} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-heading font-bold leading-tight">
              Ready to Make an Impact?
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/80 max-w-xl leading-relaxed">
              Join a team that's shaping the future with data, AI and digital transformation.
            </p>
          </div>
          <a
            href="#openings"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground text-sm font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
          >
            View All Openings <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <WhyWork />
        <OpenOpportunities />
        <LifeGallery />
        <ImpactCta />
      </main>
      <Footer />
    </div>
  );
}
