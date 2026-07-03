import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import imgTeamCollab from "@/assets/careers/team-collab.jpg";
import imgLifeInside from "@/assets/careers/life-inside.jpg";
import imgHiringHandshake from "@/assets/careers/hiring-handshake.jpg";
import bannerCareers from "@/assets/banner-careers.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
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
  ChevronDown,
  Send,
  Database,
  Layers,
  Cpu,
  Cloud,
  BarChart3,
} from "lucide-react";

const whyItems = [
  { Icon: Users, title: "People First", body: "A culture built on respect, trust, and collaboration." },
  { Icon: Target, title: "Purpose Driven", body: "Work on meaningful projects that create real impact." },
  { Icon: Lightbulb, title: "Future Ready", body: "Learning, innovation and growth at the core of everything we do." },
  { Icon: Globe, title: "Global Impact", body: "Collaborate across borders and industries." },
  { Icon: TrendingUp, title: "Grow Together", body: "Continuous learning and clear career growth paths." },
  { Icon: Heart, title: "Well-being Matters", body: "We care for your well-being and work-life balance." },
];

const openJobs = [
  { Icon: Database, title: "Data Engineer", dept: "Data & Analytics", location: "Hyderabad, India", exp: "3-6 Years" },
  { Icon: Layers, title: "Solution Architect (D365)", dept: "Business Applications", location: "Hyderabad, India", exp: "6-10 Years" },
  { Icon: Cpu, title: "AI/ML Engineer", dept: "AI & Automation", location: "Lucknow, India", exp: "3-6 Years" },
  { Icon: Cloud, title: "Cloud DevOps Engineer", dept: "Cloud Services", location: "Hyderabad, India", exp: "4-7 Years" },
  { Icon: BarChart3, title: "Business Analyst", dept: "Consulting", location: "Amsterdam, Netherlands", exp: "2-5 Years" },
];

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
          <div className={isVisible ? "animate-reveal-left" : "opacity-0"}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.05] text-foreground">
              Build Your Future.
              <br />
              <span className="text-accent">Make an Impact.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed">
              At Nextgenlytics, we combine data, technology, and human potential to solve
              real-world challenges and create lasting impact for our clients and communities.
            </p>
            <a
              href="#openings"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/25 hover:-translate-y-0.5 transition-all"
            >
              Explore Opportunities <ArrowRight size={16} />
            </a>
          </div>

          {/* Right image with curved accent */}
          <div className={`relative ${isVisible ? "animate-reveal-right" : "opacity-0"}`}>
            <div className="relative aspect-[5/4] rounded-[46%_54%_38%_62%/58%_42%_58%_42%] overflow-hidden shadow-2xl shadow-primary/10 ring-1 ring-border/60">
              <img
                src={imgTeamCollab}
                alt="Nextgenlytics team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Yellow arc */}
            <svg
              className="absolute -inset-3 -z-10 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)]"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M 50 2 A 48 48 0 1 1 6 60"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="0.6"
              />
            </svg>
            <span className="absolute left-6 bottom-6 h-3 w-3 rounded-full bg-primary shadow-md" />
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
            <div className="flex flex-wrap items-center gap-3">
              {["All Departments", "All Locations", "Experience Level"].map((f) => (
                <button
                  key={f}
                  type="button"
                  className="inline-flex items-center gap-2 text-xs md:text-sm text-foreground/80 border border-border rounded-lg px-3 py-2 hover:border-primary/40 transition-colors"
                >
                  {f} <ChevronDown size={14} className="text-muted-foreground" />
                </button>
              ))}
              <a
                href="#"
                className="ml-auto text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors"
              >
                View All Jobs <ArrowRight size={14} />
              </a>
            </div>

            <ul className="mt-6 divide-y divide-border/60">
              {openJobs.map((j) => (
                <li
                  key={j.title}
                  className="group flex flex-col md:flex-row md:items-center gap-4 py-4"
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

                  <a
                    href={`mailto:careers@nextgenlytics.com?subject=Application: ${encodeURIComponent(j.title)}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs md:text-sm font-semibold hover:bg-primary/90 hover:-translate-y-0.5 transition-all shrink-0"
                  >
                    Apply Now
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
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
