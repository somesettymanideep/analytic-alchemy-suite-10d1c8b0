import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import bannerBlog from "@/assets/banner-careers.jpg";
import blogSap from "@/assets/blog-sap-clean-core.jpg";
import blogAi from "@/assets/blog-ai-agents.jpg";
import blogData from "@/assets/blog-data-migration.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CalendarDays, ArrowRight, User, BookOpen } from "lucide-react";

const posts = [
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
            <CalendarDays size={13} className="text-accent" />
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

function BlogGrid() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-10 md:py-14">
      <div className="container" ref={ref}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, i) => (
            <PostCard key={post.id} post={post} index={i} isVisible={isVisible} />
          ))}
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
