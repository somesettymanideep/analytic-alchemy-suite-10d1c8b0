import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerCareers from "@/assets/banner-careers.jpg";
import imgTeamCollab from "@/assets/careers/team-collab.jpg";
import imgLifeInside from "@/assets/careers/life-inside.jpg";
import imgHiringHandshake from "@/assets/careers/hiring-handshake.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Users,
  Heart,
  Rocket,
  GraduationCap,
  Globe2,
  Code2,
  Database,
  Compass,
  MessageSquare,
  FileSearch,
  HandshakeIcon,
  Quote,
  Eye,
} from "lucide-react";

const jobs = [
  {
    id: "sap-s4-consultant",
    title: "Senior SAP S/4HANA Consultant",
    department: "SAP Practice",
    location: "Amsterdam, NL · Hybrid",
    type: "Full-time",
    experience: "6+ years",
    Icon: Database,
    summary:
      "Lead end-to-end S/4HANA transformations for tier-1 European enterprises. Translate business outcomes into clean-core architectures across Finance, Supply Chain, and Manufacturing modules.",
    responsibilities: [
      "Own functional & technical design across S/4HANA core modules",
      "Run discovery workshops with C-suite and process owners",
      "Define migration roadmaps (Brownfield, Greenfield, Selective)",
      "Mentor offshore delivery pods on SAP BTP & Fiori extensions",
    ],
    requirements: [
      "6+ years implementing SAP ECC or S/4HANA in production",
      "Deep expertise in at least two modules (FI/CO, MM, SD, PP)",
      "Hands-on with SAP BTP, CAP, or Fiori extensibility patterns",
      "Excellent client-facing communication in English (Dutch a plus)",
    ],
  },
  {
    id: "ai-data-engineer",
    title: "AI & Data Engineering Lead",
    department: "Data & AI Practice",
    location: "Hyderabad, IN · Hybrid",
    type: "Full-time",
    experience: "5+ years",
    Icon: Code2,
    summary:
      "Architect production-grade AI agents and lakehouse pipelines on our BlueGecko platform. Ship measurable business value through LLM-powered workflows for SAP & Microsoft customers.",
    responsibilities: [
      "Design agentic AI workflows on Azure OpenAI, Databricks, and LangGraph",
      "Build ELT/streaming pipelines on Delta Lake & Fabric",
      "Embed governance, evals, and observability into every release",
      "Partner with SAP & MS practices on data product roadmaps",
    ],
    requirements: [
      "5+ years building data platforms in Python & SQL at scale",
      "Production experience with LLMs, RAG, and vector stores",
      "Strong grasp of Azure Data Services or Databricks",
      "Track record shipping ML/AI to enterprise customers",
    ],
  },
];

const benefits = [
  {
    Icon: Rocket,
    title: "Senior-led work",
    body: "Every engagement is led by senior operators — no learning on the client's dime.",
  },
  {
    Icon: GraduationCap,
    title: "Continuous learning",
    body: "Annual certification budget across SAP, Microsoft, Databricks, and AWS.",
  },
  {
    Icon: Globe2,
    title: "Global exposure",
    body: "Work across Dutch, EU, and North American tier-1 enterprise programmes.",
  },
  {
    Icon: Heart,
    title: "People-first culture",
    body: "Flexible hybrid model, generous leave, and family-first scheduling.",
  },
];

const chapters = [
  { id: "why", num: "01", label: "Why NGSIT", Icon: Sparkles },
  { id: "life", num: "02", label: "Life on the inside", Icon: Users },
  { id: "roles", num: "03", label: "Open roles", Icon: Briefcase },
  { id: "process", num: "04", label: "Hiring process", Icon: Compass },
];

const lifeStats = [
  { value: "92%", label: "Team retention, last 3 years" },
  { value: "40+", label: "Senior consultants across 4 hubs" },
  { value: "100%", label: "Projects led by named partners" },
  { value: "€2.4k", label: "Avg. annual learning budget" },
];

const processSteps = [
  {
    Icon: FileSearch,
    title: "Apply",
    body: "Send a CV and a short note about a project you're proud of. We read every word.",
  },
  {
    Icon: MessageSquare,
    title: "Intro call",
    body: "30 minutes with a partner. We talk craft, fit, and what you want to build next.",
  },
  {
    Icon: Compass,
    title: "Working session",
    body: "A focused, paid working session on a realistic scenario from our pipeline.",
  },
  {
    Icon: HandshakeIcon,
    title: "Offer",
    body: "Decision and offer within 10 business days. No ghosting, ever.",
  },
];

function ChapterIndex() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-10 md:py-14" ref={ref}>
      <div
        className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 border-y border-border/60 py-5 ${
          isVisible ? "animate-reveal-up" : "opacity-0"
        }`}
      >
        {chapters.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className={`group flex items-center gap-3 rounded-lg border border-border/60 bg-card px-4 py-3 hover:border-primary/60 hover:shadow-sm transition-all ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${120 + i * 80}ms` }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <c.Icon size={16} />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Chapter {c.num}
              </span>
              <span className="text-sm font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                {c.label}
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function WhySection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="why" className="container py-14 md:py-20" ref={ref}>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span
            className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent ${
              isVisible ? "animate-reveal-left" : "opacity-0"
            }`}
          >
            <Sparkles size={14} /> Chapter 01
          </span>
          <h2
            className={`mt-4 text-4xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.05] ${
              isVisible ? "animate-reveal-left delay-100" : "opacity-0"
            }`}
          >
            Build the next generation of enterprise intelligence.
          </h2>
          <div
            className={`mt-6 h-1 w-20 bg-accent rounded-full ${
              isVisible ? "animate-reveal-left delay-200" : "opacity-0"
            }`}
          />
          <div
            className={`mt-8 relative rounded-2xl overflow-hidden border border-border/60 shadow-xl shadow-primary/10 ${
              isVisible ? "animate-reveal-left delay-300" : "opacity-0"
            }`}
          >
            <img
              src={imgTeamCollab}
              alt="Senior consultants collaborating in Amsterdam office"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground bg-primary/70 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit">
              <Sparkles size={12} /> Founder-led delivery
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-10">
          <p
            className={`text-lg md:text-xl text-foreground/85 leading-relaxed text-pretty font-heading ${
              isVisible ? "animate-reveal-right delay-100" : "opacity-0"
            }`}
          >
            We're a founder-led consultancy of SAP, Microsoft, and AI specialists shipping outcomes
            for European and global enterprises. If you love clean architecture, sharp delivery,
            and working alongside operators who've done it before — we'd like to meet you.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className={`group rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${250 + i * 120}ms` }}
              >
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <b.Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground font-heading">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LifeSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="life" className="section-alt py-16 md:py-24 overflow-hidden">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <span
              className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
            >
              <Users size={14} /> Chapter 02
            </span>
            <h2
              className={`mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1] ${
                isVisible ? "animate-reveal-up delay-100" : "opacity-0"
              }`}
            >
              Life on the inside.
            </h2>
          </div>
          <p
            className={`lg:col-span-5 text-muted-foreground leading-relaxed text-pretty ${
              isVisible ? "animate-reveal-up delay-200" : "opacity-0"
            }`}
          >
            Small teams. Real ownership. The people who started NGSIT still write code,
            shape architecture, and sit in the room with you on hard days.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60 rounded-2xl overflow-hidden">
          {lifeStats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-card p-6 md:p-8 ${
                isVisible ? "animate-reveal-scale" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 120}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary font-heading tracking-tight">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-muted-foreground leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <figure
          className={`mt-14 max-w-3xl ${isVisible ? "animate-reveal-up delay-500" : "opacity-0"}`}
        >
          <Quote size={32} className="text-accent" />
          <blockquote className="mt-4 text-xl md:text-2xl font-heading text-foreground/90 leading-snug text-balance">
            "I joined to ship outcomes, not slides. Two years in, I still review every architecture
            with a partner — and we still argue about the right answer."
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Sridhar</span> · Principal Consultant,
            SAP Practice
          </figcaption>
        </figure>

        <div
          className={`mt-14 grid lg:grid-cols-12 gap-8 items-center ${
            isVisible ? "animate-reveal-up delay-500" : "opacity-0"
          }`}
        >
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-border/60 shadow-xl shadow-primary/10">
            <img
              src={imgLifeInside}
              alt="Consultant analysing dashboards in a calm modern workspace"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              A day with us
            </p>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-foreground font-heading leading-tight text-balance">
              Deep work, sharp reviews, real ownership.
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Long uninterrupted focus blocks, weekly architecture reviews with a partner, and the
              autonomy to ship what the client actually needs — not what looks good on a slide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenRoles() {
  const { ref, isVisible } = useScrollReveal();
  const [activeJob, setActiveJob] = useState<(typeof jobs)[number] | null>(null);
  return (
    <section id="roles" className="container py-16 md:py-24">
      <div ref={ref}>
        <div className="max-w-3xl">
          <span
            className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <Briefcase size={14} /> Chapter 03
          </span>
          <h2
            className={`mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1] ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            Two seats. Both senior. Both shipping from day one.
          </h2>
          <p
            className={`mt-4 text-muted-foreground leading-relaxed ${
              isVisible ? "animate-reveal-up delay-200" : "opacity-0"
            }`}
          >
            Hand-picked openings across our SAP and Data & AI practices.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {jobs.map((job, i) => (
            <article
              key={job.id}
              className={`group relative flex flex-col bg-card rounded-2xl border border-border/60 overflow-hidden shadow-md shadow-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + i * 180}ms` }}
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              <span className="absolute top-5 right-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70 font-heading">
                Role 0{i + 1}
              </span>

              <div className="flex flex-col h-full p-7 md:p-8 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.05]">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <job.Icon size={26} />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-accent">
                  {job.department}
                </p>
                <h3 className="mt-1.5 text-xl md:text-2xl font-bold text-foreground font-heading leading-tight">
                  {job.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-card border border-border px-3 py-1.5 rounded-full">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-card border border-border px-3 py-1.5 rounded-full">
                    <Clock size={12} /> {job.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-card border border-border px-3 py-1.5 rounded-full">
                    <Users size={12} /> {job.experience}
                  </span>
                </div>

                <p className="mt-5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {job.summary}
                </p>

                <div className="mt-auto pt-6 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveJob(job)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <Eye size={15} /> View more
                  </button>
                  <a
                    href={`mailto:careers@NGSIT.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    Apply now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Don't see your role?{" "}
            <a
              href="mailto:careers@NGSIT.com?subject=Open Application"
              className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              Send us an open application <ArrowUpRight size={14} />
            </a>
          </p>
        </div>
      </div>

      <Dialog open={!!activeJob} onOpenChange={(o) => !o && setActiveJob(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {activeJob && (
            <>
              <DialogHeader className="text-left">
                <div className="flex items-start gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 shrink-0">
                    <activeJob.Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                      {activeJob.department}
                    </p>
                    <DialogTitle className="mt-1 text-2xl md:text-3xl font-heading font-bold text-foreground leading-tight">
                      {activeJob.title}
                    </DialogTitle>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-muted border border-border px-3 py-1 rounded-full">
                        <MapPin size={12} /> {activeJob.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-muted border border-border px-3 py-1 rounded-full">
                        <Clock size={12} /> {activeJob.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-muted border border-border px-3 py-1 rounded-full">
                        <Users size={12} /> {activeJob.experience}
                      </span>
                    </div>
                  </div>
                </div>
                <DialogDescription className="mt-5 text-base text-foreground/80 leading-relaxed">
                  {activeJob.summary}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-2 grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <h4 className="text-sm font-bold text-foreground font-heading flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent rounded-full" />
                    What you'll do
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {activeJob.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <h4 className="text-sm font-bold text-foreground font-heading flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary rounded-full" />
                    What we're looking for
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {activeJob.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                        <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border/60">
                <p className="text-xs text-muted-foreground">
                  Send your CV to{" "}
                  <span className="font-semibold text-foreground">careers@NGSIT.com</span>
                </p>
                <a
                  href={`mailto:careers@NGSIT.com?subject=Application: ${encodeURIComponent(activeJob.title)}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all"
                >
                  Apply now <ArrowRight size={16} />
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="process" className="section-alt py-16 md:py-24">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 max-w-3xl">
          <span
            className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent ${
              isVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <Compass size={14} /> Chapter 04
          </span>
          <h2
            className={`mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1] ${
              isVisible ? "animate-reveal-up delay-100" : "opacity-0"
            }`}
          >
            A short, honest hiring process.
          </h2>
          <p
            className={`mt-4 text-muted-foreground leading-relaxed ${
              isVisible ? "animate-reveal-up delay-200" : "opacity-0"
            }`}
          >
            Four steps. No panels. No riddles. Just conversations with the people you'd actually
            work with.
          </p>
          </div>
          <div
            className={`lg:col-span-5 relative rounded-2xl overflow-hidden border border-border/60 shadow-xl shadow-primary/10 ${
              isVisible ? "animate-reveal-right delay-200" : "opacity-0"
            }`}
          >
            <img
              src={imgHiringHandshake}
              alt="Welcoming new team member with a handshake"
              loading="lazy"
              width={1280}
              height={896}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((s, i) => (
            <li
              key={s.title}
              className={`relative rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${250 + i * 130}ms` }}
            >
              <span className="absolute -top-3 left-6 text-[11px] font-semibold tracking-[0.2em] uppercase bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                Step {i + 1}
              </span>
              <div className="mt-2 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent">
                <s.Icon size={20} />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground font-heading">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-6 items-center">
            <h3 className="md:col-span-2 text-2xl md:text-3xl font-bold font-heading text-balance leading-tight">
              Ready when you are. Tell us about the work you want to do next.
            </h3>
            <a
              href="mailto:careers@NGSIT.com?subject=Open Application"
              className="justify-self-start md:justify-self-end inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-semibold shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Start a conversation <ArrowRight size={16} />
            </a>
          </div>
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
        <PageBanner
          image={bannerCareers}
          eyebrow="Careers"
          title="Build your career with NGSIT"
          description="A senior-led consultancy delivering enterprise transformation across Europe and beyond. Read the issue."
        />
        <ChapterIndex />
        <WhySection />
        <LifeSection />
        <OpenRoles />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}