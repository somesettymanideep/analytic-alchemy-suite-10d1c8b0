import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerBlog from "@/assets/banners/banner-careers.jpg";
import blogSap from "@/assets/blog/blog-sap-clean-core.jpg";
import blogAi from "@/assets/blog/blog-ai-agents.jpg";
import blogData from "@/assets/blog/blog-data-migration.jpg";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, BookOpen, Calendar, CaretRight, MagnifyingGlass, User } from "@phosphor-icons/react";
import blogCeoPlaybook1 from "@/assets/blog/ai-product-mgmt-workflow.avif";
import blogUnifyingMinds from "@/assets/blog/blog-unifying-minds.webp";
import blogCultivating from "@/assets/blog/blog-cultivating-connections.avif";
import blogD365 from "@/assets/blog/blog-d365.avif";

const posts = [
  {
    id: "unifying-minds-with-ai-staycation",
    image: blogUnifyingMinds,
    title: "Unifying Minds with AI: A Staycation to Remember for the Nextgenlytics Offshore Team",
    excerpt:
      "In the fast-paced world of data and AI, the Nextgenlytics team operates remotely across different time zones. This AI-centric staycation in Bangalore was a perfect mix of AI knowledge sharing, skill-building, and an unforgettable team experience.",
    author: "Raja Deverapu",
    date: "July 7, 2026",
    category: "Company",
  },
  {
    id: "cultivating-connections-netherlands",
    image: blogCultivating,
    title: "Cultivating Connections: Offshore Data Engineers' Enriching Visit to the Netherlands",
    excerpt:
      "Our offshore data engineers embarked on an immersive journey to the Netherlands — bridging cultural differences, enhancing collaboration, and fostering camaraderie across borders.",
    author: "Raja Deverapu",
    date: "July 7, 2026",
    category: "Company",
  },
  {
    id: "isv-supercharge-dynamics-365-fo",
    image: blogD365,
    title: "Beyond the Core: How ISVs Supercharge Dynamics 365 Finance & Operations",
    excerpt:
      "D365 F&O is one of today's most comprehensive ERP platforms. But no ERP is truly plug-and-play. Discover how ISVs like Lasernet, Atlas, and CMOS fill the gaps for a future-ready ecosystem.",
    author: "Raja Deverapu",
    date: "July 7, 2026",
    category: "ERP",
  },
  {
    id: "ai-enabled-product-management-ceo-playbook",
    image: blogCeoPlaybook1,
    title: "AI-Enabled Product Management: The CEO Playbook Series",
    excerpt:
      "The Rise of AI-Product Companies — And Why Every CEO Must Think Like a Product Leader. Over the past few decades, digital transformation has been driven by technology adoption.",
    author: "Raja Deverapu",
    date: "July 6, 2026",
    category: "Digital Transformation",
  },
  {
    id: "sap-clean-core-2025",
    image: blogSap,
    title: "SAP Clean Core in 2025: What European Enterprises Must Know",
    excerpt:
      "As SAP tightens its certification roadmap, enterprises running heavily modified ECC systems face a critical decision window. Here's how to plan a Clean Core transition without disrupting operations.",
    author: "Rahul Vinnakota",
    date: "May 15, 2025",
    category: "SAP",
  },
  {
    id: "production-ai-agents",
    image: blogAi,
    title: "From PoC to Production: Building Enterprise AI Agents That Ship",
    excerpt:
      "Most AI pilots never reach production. We share the architecture patterns, governance guardrails, and observability stacks that helped our clients move from demo to live deployment in under 12 weeks.",
    author: "Bhargav Suggala",
    date: "April 28, 2025",
    category: "AI & Data",
  },
  {
    id: "bluegecko-migration",
    image: blogData,
    title: "Why European Manufacturers Are Choosing BlueGecko for SAP Migration",
    excerpt:
      "Data migration is where most SAP programmes stall. BlueGecko's automated mapping, validation, and reconciliation engine is cutting migration timelines by 40% across manufacturing clients.",
    author: "Rahul Vinnakota",
    date: "April 10, 2025",
    category: "Data Engineering",
  },
];

function Intro() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-12 md:py-16" ref={ref}>
      <div className={`max-w-3xl mx-auto text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
          <BookOpen size={14} /> Insights
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
          Perspectives from the field
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
          Practical takes on SAP transformation, enterprise AI, and data engineering — written by the people shipping it.
        </p>
      </div>
    </section>
  );
}

function PostCard({
  post,
  index,
  isVisible,
}: {
  post: (typeof posts)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <article
      className={`group bg-card rounded-2xl border border-border/60 overflow-hidden shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-primary/30 ${
        isVisible ? "animate-reveal-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        {/* Meta row: date left, author right */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} className="text-accent" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User size={13} className="text-primary" />
            {post.author}
          </span>
        </div>

        <h3 className="mt-3 text-lg md:text-xl font-bold text-foreground font-heading leading-snug group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <a
          href={`/blog/${post.id}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          Read more
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </article>
  );
}

const CATEGORIES = [
  "All Categories",
  "Data & Analytics",
  "AI & Automation",
  "Cloud",
  "Digital Transformation",
  "Industry",
  "Company",
  "ERP",
  "SAP",
];

function BlogGrid() {
  const { ref, isVisible } = useScrollReveal();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCat = searchParams.get("category") || "All Categories";
  const searchQuery = searchParams.get("search") || "";

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = activeCat === "All Categories" || p.category === activeCat;
      const matchSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCat, searchQuery]);

  const setCategory = (c: string) => {
    setSearchParams(
      (prev) => {
        if (c === "All Categories") prev.delete("category");
        else prev.set("category", c);
        return prev;
      },
      { replace: true }
    );
  };

  const setSearch = (s: string) => {
    setSearchParams(
      (prev) => {
        if (!s) prev.delete("search");
        else prev.set("search", s);
        return prev;
      },
      { replace: true }
    );
  };

  return (
    <section className="section-alt py-10 md:py-14">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main content */}
          <div>
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 bg-card rounded-2xl border border-border/60">
                <h3 className="text-xl font-bold font-heading">No articles found</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your search or category filter.</p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {filteredPosts.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} isVisible={isVisible} />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            {/* MagnifyingGlass */}
            <div className="relative">
              <input
                type="search"
                placeholder="MagnifyingGlass articles..."
                value={searchQuery}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-11 pl-4 pr-11 rounded-full border border-border/70 bg-card text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button
                aria-label="MagnifyingGlass"
                className="absolute right-1 top-1 h-9 w-9 grid place-items-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MagnifyingGlass size={14} />
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
                        onClick={() => setCategory(c)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                          active
                            ? "bg-accent text-accent-foreground font-semibold border border-accent"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <span>{c}</span>
                        <CaretRight
                          size={14}
                          className={active ? "text-accent-foreground" : "text-muted-foreground/60"}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={bannerBlog}
          eyebrow="Blog"
          title="Enterprise insights from the people building it"
          description="Deep dives into SAP transformation, AI implementation, and data engineering for European enterprises."
        />
        <Intro />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
}
