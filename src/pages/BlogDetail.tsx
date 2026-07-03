import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import bannerBlog from "@/assets/banner-careers.jpg";
import blogSap from "@/assets/blog-sap-clean-core.jpg";
import blogAi from "@/assets/blog-ai-agents.jpg";
import blogData from "@/assets/blog-data-migration.jpg";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Linkedin,
  Link2,
  Mail,
  Quote,
  User,
  TrendingUp,
} from "lucide-react";

type Section = { id: string; heading: string; body: string[] };

type Post = {
  id: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  cover: string;
  excerpt: string;
  pullQuote: string;
  stats: { value: string; label: string }[];
  sections: Section[];
};

const POSTS: Post[] = [
  {
    id: "sap-clean-core-2025",
    title: "SAP Clean Core in 2025: What European Enterprises Must Know",
    category: "SAP",
    author: "Rahul Vinnakota",
    authorRole: "Co-Founder · SAP Transformation Lead",
    date: "May 15, 2025",
    readingTime: "8 min read",
    cover: blogSap,
    excerpt:
      "As SAP tightens its certification roadmap, enterprises running heavily modified ECC systems face a critical decision window.",
    pullQuote:
      "Clean Core isn't a technical clean-up. It's the operating model that decides whether AI ever ships in your ERP.",
    stats: [
      { value: "68%", label: "of ECC systems carry critical custom code" },
      { value: "12–18mo", label: "average Clean Core transition window" },
      { value: "3x", label: "faster release cycles post-migration" },
    ],
    sections: [
      {
        id: "why-now",
        heading: "Why 2025 is the decision year",
        body: [
          "SAP's 2027 mainstream maintenance deadline for ECC is finally forcing conversations that were comfortably postponed for a decade. The problem isn't the deadline — it's the shape of the estate that has to move.",
          "Most European enterprises we assess still carry 15–20 years of custom ABAP layered directly into the digital core. Every one of those modifications is a blocker for standard S/4HANA capabilities, and a tax on every future upgrade.",
        ],
      },
      {
        id: "what-clean-core-means",
        heading: "What Clean Core actually means",
        body: [
          "Clean Core is SAP's contract with the enterprise: keep the standard object model untouched, and SAP guarantees a stable path to innovation — Joule, BDC, embedded AI, quarterly release trains.",
          "The corollary is uncomfortable: every extension has to move out of the digital core and onto BTP. This is not lift-and-shift. It's a rethink of what your custom logic is actually doing.",
        ],
      },
      {
        id: "how-to-plan",
        heading: "How to plan the transition without disrupting operations",
        body: [
          "The teams that succeed treat Clean Core as a two-track programme. Track one is discovery: an automated scan of every custom object, ranked by business criticality and reuse across processes.",
          "Track two is architecture: a target-state map that assigns every surviving extension to BTP, side-by-side apps, or standard configuration. The scans without the map produce a backlog no one owns.",
        ],
      },
      {
        id: "closing",
        heading: "The one-week starting point",
        body: [
          "You don't need a six-month assessment to start. A focused one-week diagnostic — landscape scan, custom code heat-map, target architecture sketch — is enough to size the programme and secure the budget conversation.",
        ],
      },
    ],
  },
  {
    id: "production-ai-agents",
    title: "From PoC to Production: Building Enterprise AI Agents That Ship",
    category: "AI & Data",
    author: "Bhargav Suggala",
    authorRole: "Principal Consultant · AI Engineering",
    date: "April 28, 2025",
    readingTime: "10 min read",
    cover: blogAi,
    excerpt:
      "Most AI pilots never reach production. We share the architecture, governance, and observability that gets agents live in under 12 weeks.",
    pullQuote:
      "The PoC-to-production gap is rarely a model problem. It's an integration, governance, and trust problem.",
    stats: [
      { value: "82%", label: "of AI pilots stall before production" },
      { value: "12wk", label: "typical nextgenlytics PoC-to-live timeline" },
      { value: "4x", label: "ROI on agent programmes with observability" },
    ],
    sections: [
      {
        id: "why-pilots-stall",
        heading: "Why AI pilots stall",
        body: [
          "The failure mode is almost never the model. It's the eight surrounding decisions no one owned: data contracts, permissions, audit trails, human-in-the-loop, fallback logic, evaluation, cost ceilings, and lifecycle.",
          "A pilot that ignores these ships a demo. A programme that names owners for each ships a production system.",
        ],
      },
      {
        id: "architecture",
        heading: "The reference architecture we ship",
        body: [
          "Three layers: a governed retrieval layer that treats your ERP and data platform as the source of truth, an orchestration layer that composes tools with explicit permissions, and an evaluation layer that scores every response before it reaches the user.",
          "The orchestration layer is where most teams over-engineer. Start with two tools and one agent. Add capability only when observability tells you the current agent is at ceiling.",
        ],
      },
      {
        id: "governance",
        heading: "Governance that doesn't slow you down",
        body: [
          "Governance fails when it's a review board. It works when it's a contract encoded in the platform: every agent action logged, every prompt versioned, every tool call scoped to the caller's identity.",
          "Do this on day one and audit becomes a report, not a project.",
        ],
      },
      {
        id: "shipping",
        heading: "Shipping in 12 weeks",
        body: [
          "Weeks 1–2: one use case, one team, hard scope. Weeks 3–6: reference architecture deployed against real data. Weeks 7–10: evaluation harness, human-in-the-loop, cost ceilings. Weeks 11–12: production cutover with observability wired in from the first request.",
        ],
      },
    ],
  },
  {
    id: "bluegecko-migration",
    title: "Why European Manufacturers Are Choosing BlueGecko for SAP Migration",
    category: "Data Engineering",
    author: "Rahul Vinnakota",
    authorRole: "Co-Founder · SAP Transformation Lead",
    date: "April 10, 2025",
    readingTime: "7 min read",
    cover: blogData,
    excerpt:
      "Data migration is where most SAP programmes stall. BlueGecko is cutting timelines by 40% across European manufacturing clients.",
    pullQuote:
      "You don't win an SAP programme in blueprint. You win it — or lose it — in the data.",
    stats: [
      { value: "40%", label: "reduction in migration timelines" },
      { value: "99.6%", label: "field-level reconciliation accuracy" },
      { value: "6+", label: "manufacturing rollouts on BlueGecko" },
    ],
    sections: [
      {
        id: "the-real-cost",
        heading: "The real cost of migration failures",
        body: [
          "In every SAP programme post-mortem we've run, the same finding surfaces: the go-live slip was a data slip. Mapping ambiguity, silent field truncation, reconciliation gaps found in UAT — the compounding cost is measured in months, not weeks.",
        ],
      },
      {
        id: "what-bluegecko-does",
        heading: "What BlueGecko does differently",
        body: [
          "BlueGecko replaces the spreadsheet-and-scripts approach with an engine: automated source-to-target mapping, rule-based transformations with lineage, and reconciliation that runs continuously instead of at the end.",
          "The unlock isn't the tool. It's that data teams and functional teams work off the same live picture, every day of the programme.",
        ],
      },
      {
        id: "why-manufacturing",
        heading: "Why manufacturing is leading adoption",
        body: [
          "Manufacturing carries the messiest master data in the enterprise: materials, BOMs, routings, vendors, plants — often replicated across a dozen legacy systems. BlueGecko's dedupe and harmonisation model was designed against exactly this shape of estate.",
        ],
      },
    ],
  },
];

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 h-1 z-40 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function ShareBar({ title }: { title: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <div className="flex md:flex-col gap-2">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share on LinkedIn"
        className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <Linkedin size={16} />
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`}
        aria-label="Share by email"
        className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <Mail size={16} />
      </a>
      <button
        onClick={() => navigator.clipboard?.writeText(url)}
        aria-label="Copy link"
        className="h-10 w-10 grid place-items-center rounded-full bg-card border border-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <Link2 size={16} />
      </button>
    </div>
  );
}

function Toc({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  useEffect(() => {
    const onScroll = () => {
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < 200) setActive(s.id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);
  return (
    <nav aria-label="Table of contents" className="text-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border/60">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block pl-3 -ml-px border-l-2 transition-colors ${
                active === s.id
                  ? "border-primary text-primary font-semibold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function BlogDetail() {
  const { id } = useParams();
  const post = useMemo(() => POSTS.find((p) => p.id === id) ?? POSTS[0], [id]);
  const currentIdx = POSTS.findIndex((p) => p.id === post.id);
  const prev = currentIdx > 0 ? POSTS[currentIdx - 1] : null;
  const next = currentIdx < POSTS.length - 1 ? POSTS[currentIdx + 1] : null;
  const related = POSTS.filter((p) => p.id !== post.id).slice(0, 2);
  const hero = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <ReadingProgress />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden mt-16 md:mt-20">
          <div className="absolute inset-0">
            <img src={bannerBlog} alt="" aria-hidden className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/95" />
          </div>
          <div className="relative container py-14 md:py-20" ref={hero.ref}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground text-sm font-semibold"
            >
              <ArrowLeft size={14} /> All articles
            </Link>
            <div className={`mt-6 max-w-3xl ${hero.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-primary-foreground font-heading leading-tight text-balance">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                <span className="inline-flex items-center gap-1.5">
                  <User size={14} className="text-accent" /> {post.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} className="text-accent" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-accent" /> {post.readingTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cover */}
        <div className="container -mt-6 md:-mt-10 relative z-10">
          <div className="rounded-2xl overflow-hidden border border-border/60 shadow-2xl aspect-[21/9]">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Body */}
        <section className="container py-12 md:py-16">
          <div className="grid lg:grid-cols-[220px_1fr_80px] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <Toc sections={post.sections} />
              </div>
            </aside>

            <article className="max-w-none">
              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {post.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border/60 bg-card p-5 shadow-sm"
                  >
                    <div className="text-3xl font-bold text-primary font-heading">{s.value}</div>
                    <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>

              {post.sections.map((s, i) => (
                <div key={s.id} id={s.id} className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                    {s.heading}
                  </h2>
                  {s.body.map((p, j) => (
                    <p key={j} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}
                  {i === 1 && (
                    <blockquote className="my-8 relative rounded-xl border-l-4 border-accent bg-accent/5 p-6">
                      <Quote className="absolute -top-3 -left-3 text-accent bg-background rounded-full p-1" size={28} />
                      <p className="text-lg md:text-xl font-heading font-semibold text-foreground leading-snug">
                        {post.pullQuote}
                      </p>
                      <footer className="mt-3 text-sm text-muted-foreground">
                        — {post.author}, {post.authorRole}
                      </footer>
                    </blockquote>
                  )}
                </div>
              ))}

              {/* Author card */}
              <div className="mt-12 rounded-2xl border border-border/60 bg-card p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground font-heading font-bold text-xl shrink-0">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">Written by</p>
                  <h3 className="mt-1 text-lg font-heading font-bold text-foreground">{post.author}</h3>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Practitioner at nextgenlytics, working directly with European enterprises to ship SAP, Microsoft, and AI programmes that reach production.
                  </p>
                </div>
              </div>

              {/* Prev / Next */}
              <nav className="mt-12 grid sm:grid-cols-2 gap-4">
                {prev ? (
                  <Link
                    to={`/blog/${prev.id}`}
                    className="group rounded-xl border border-border/60 bg-card p-5 hover:border-primary transition-colors"
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      <ArrowLeft size={12} /> Previous
                    </span>
                    <p className="mt-2 font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {prev.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    to={`/blog/${next.id}`}
                    className="group rounded-xl border border-border/60 bg-card p-5 text-right hover:border-primary transition-colors"
                  >
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground justify-end w-full">
                      Next <ArrowRight size={12} />
                    </span>
                    <p className="mt-2 font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {next.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <ShareBar title={post.title} />
              </div>
            </aside>
          </div>
        </section>

        {/* Related */}
        <section className="section-alt py-14">
          <div className="container">
            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  <TrendingUp size={14} /> Keep reading
                </span>
                <h2 className="mt-2 text-2xl md:text-3xl font-bold font-heading text-foreground">
                  Related articles
                </h2>
              </div>
              <Link to="/blog" className="text-sm font-semibold text-primary hover:text-accent">
                All articles →
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.id}`}
                  className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={r.cover}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                      {r.category}
                    </span>
                    <h3 className="mt-2 font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{r.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}