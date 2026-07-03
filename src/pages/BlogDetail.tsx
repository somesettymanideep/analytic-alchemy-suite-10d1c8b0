import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerBlog from "@/assets/banner-careers.jpg";
import blogSap from "@/assets/blog-sap-clean-core.jpg";
import blogAi from "@/assets/blog-ai-agents.jpg";
import blogData from "@/assets/blog-data-migration.jpg";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Linkedin,
  Link2,
  Facebook,
  Twitter,
  Search,
  ChevronRight,
  Database,
  Cloud,
  BarChart3,
  Users,
  Lightbulb,
  Home,
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

const CATEGORIES = [
  "All Categories",
  "Data & Analytics",
  "AI & Automation",
  "Cloud",
  "Digital Transformation",
  "Industry",
  "Company",
];

const TAGS = [
  "Data Strategy",
  "Analytics",
  "AI",
  "Cloud",
  "Digital Transformation",
  "Data Governance",
  "Machine Learning",
  "Business Intelligence",
];

const BUILDING_BLOCKS = [
  {
    icon: Database,
    title: "Modern Data Strategy",
    body: "Align data initiatives with business goals. Define your data vision, governance, and roadmap to create long-term value.",
  },
  {
    icon: Cloud,
    title: "Unified Data Platform",
    body: "Break down data silos with a unified platform that integrates, stores, and manages data securely at scale.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics & AI",
    body: "Use advanced analytics and AI/ML to uncover patterns, predict outcomes, and automate decisions.",
  },
  {
    icon: Users,
    title: "Data Culture & Governance",
    body: "Build a data-literate culture with clear ownership, policies, and quality standards to drive adoption and trust.",
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = useMemo(() => POSTS.find((p) => p.id === id) ?? POSTS[0], [id]);
  const [activeCat, setActiveCat] = useState("All Categories");
  const recent = POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [post.id]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />

      <main>
        <PageBanner
          image={bannerBlog}
          eyebrow={post.category}
          title={post.title}
          description={post.excerpt}
        />
        {/* Breadcrumb */}
        <div className="container pt-6 pb-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
              <Home size={14} /> Home
            </Link>
            <ChevronRight size={14} className="text-muted-foreground/60" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight size={14} className="text-muted-foreground/60" />
            <span className="text-foreground truncate max-w-[60vw]">{post.title}</span>
          </nav>
        </div>

        <section className="container pb-16">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10">
            {/* Article */}
            <article>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[11px] font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <CalendarDays size={14} /> {post.date}
                </span>
                <span className="text-muted-foreground/60">•</span>
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Clock size={14} /> {post.readingTime}
                </span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-bold font-heading text-foreground leading-tight text-balance">
                {post.title}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>

              {/* Cover */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border/60 shadow-lg aspect-[16/8]">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
              </div>

              {/* Body */}
              <div className="mt-10 space-y-8">
                {post.sections.map((s, i) => (
                  <div key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-primary mb-3">
                      {s.heading}
                    </h2>
                    {s.body.map((p, j) => (
                      <p key={j} className="text-[15px] md:text-base text-muted-foreground leading-relaxed mb-3">
                        {p}
                      </p>
                    ))}

                    {i === 0 && (
                      <ul className="mt-4 space-y-2.5">
                        {[
                          "Make faster, confident decisions",
                          "Identify new opportunities and mitigate risks",
                          "Improve operational efficiency",
                          "Drive innovation and competitive advantage",
                        ].map((li) => (
                          <li key={li} className="flex items-start gap-2.5 text-[15px] text-muted-foreground">
                            <span className="mt-1 inline-flex h-4 w-4 shrink-0 rounded-full bg-accent/20 items-center justify-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                            </span>
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}

                    {i === 1 && (
                      <div className="mt-6 grid sm:grid-cols-2 gap-5">
                        {BUILDING_BLOCKS.map((b) => (
                          <div key={b.title} className="flex gap-3">
                            <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary grid place-items-center">
                              <b.icon size={18} />
                            </div>
                            <div>
                              <h4 className="font-heading font-semibold text-primary text-[15px]">{b.title}</h4>
                              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                {/* Callout */}
                <div className="rounded-xl border border-primary/15 bg-primary/5 p-5 flex gap-4 items-start">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center">
                    <Lightbulb size={18} />
                  </div>
                  <p className="text-[15px] text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">At Nextgenlytics, we help organizations unlock the full potential of their data. </span>
                    <span className="text-muted-foreground">{post.pullQuote}</span>
                  </p>
                </div>
              </div>

              {/* Share */}
              <div className="mt-10 pt-6 border-t border-border/60 flex items-center gap-4">
                <span className="text-sm font-semibold text-foreground">Share this article:</span>
                <div className="flex items-center gap-2">
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin size={15} />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noreferrer" aria-label="Share on X" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter size={15} />
                  </a>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noreferrer" aria-label="Share on Facebook" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook size={15} />
                  </a>
                  <button onClick={() => navigator.clipboard?.writeText(shareUrl)} aria-label="Copy link" className="h-9 w-9 grid place-items-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Link2 size={15} />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              {/* Search */}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search articles..."
                  className="w-full h-11 pl-4 pr-11 rounded-full border border-border/70 bg-card text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button aria-label="Search" className="absolute right-1 top-1 h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  <Search size={14} />
                </button>
              </div>

              {/* Categories */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-heading font-bold text-primary mb-3">Categories</h3>
                <ul className="space-y-1">
                  {CATEGORIES.map((c) => {
                    const active = c === activeCat;
                    return (
                      <li key={c}>
                        <button
                          onClick={() => setActiveCat(c)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                            active
                              ? "bg-accent/15 text-primary font-semibold border border-accent/40"
                              : "text-muted-foreground hover:bg-muted"
                          }`}
                        >
                          <span>{c}</span>
                          <ChevronRight size={14} className={active ? "text-accent" : "text-muted-foreground/60"} />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-heading font-bold text-primary mb-4">Recent Posts</h3>
                <ul className="space-y-4">
                  {recent.map((r) => (
                    <li key={r.id}>
                      <Link to={`/blog/${r.id}`} className="group flex gap-3">
                        <div className="h-16 w-16 shrink-0 rounded-lg overflow-hidden">
                          <img src={r.cover} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {r.title}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {r.date} • {r.readingTime}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <h3 className="font-heading font-bold text-primary mb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((t) => (
                    <button
                      key={t}
                      className="px-3 py-1.5 rounded-full border border-primary/25 bg-primary/5 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-6">
                <div className="absolute -top-2 -right-2 grid grid-cols-6 gap-1.5 opacity-30">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span key={i} className="h-1 w-1 rounded-full bg-primary-foreground" />
                  ))}
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rotate-12 border-2 border-accent/60 rounded-lg" />
                <h4 className="relative font-heading text-xl font-bold leading-tight">
                  Ready to turn your<br />data into impact?
                </h4>
                <p className="relative mt-3 text-sm text-primary-foreground/85 leading-relaxed">
                  Let's build data solutions that drive real business outcomes.
                </p>
                <Link
                  to="/contact"
                  className="relative mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>

          {/* Newsletter */}
          <div className="mt-14 rounded-2xl border border-border/60 bg-muted/40 p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-2 right-4 grid grid-cols-10 gap-1.5 opacity-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-primary/40" />
              ))}
            </div>
            <div className="relative flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-14 w-14 shrink-0 rounded-full bg-primary text-primary-foreground grid place-items-center">
                <Mail size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-primary">Never Miss an Insight</h3>
                <p className="mt-1 text-sm text-muted-foreground max-w-lg">
                  Subscribe to our newsletter and get the latest insights on data, AI, cloud, and digital transformation—delivered to your inbox.
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex w-full md:w-auto items-center gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 h-11 px-4 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="h-11 px-5 rounded-lg bg-accent text-accent-foreground text-sm font-semibold hover:bg-accent/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
