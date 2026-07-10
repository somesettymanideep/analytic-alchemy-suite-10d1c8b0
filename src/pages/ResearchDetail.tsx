import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import banner from "@/assets/banners/banner-data-led-ai.jpg";
import { ArrowLeft, ArrowRight, ChatCircle, Clock, Download, Envelope, LinkedinLogo, Quotes, ShareNetwork } from "@phosphor-icons/react";

type Section = { id: string; heading: string; body: string[] };

type Report = {
  id: string;
  title: string;
  category: string;
  authors: string[];
  date: string;
  readingTime: string;
  cover: string;
  summary: string;
  keyFindings: string[];
  chart: { label: string; value: number }[];
  pullQuote: string;
  methodology: string[];
  caseStudies: { title: string; body: string }[];
  assets: { name: string; size: string }[];
  references: string[];
  sections: Section[];
};

const REPORTS: Report[] = [
  {
    id: "european-erp-outlook-2026",
    title: "European Enterprise ERP Outlook 2026",
    category: "SAP Research",
    authors: ["Rahul Vinnakota", "Bhargav Suggala"],
    date: "January 2026",
    readingTime: "18 min read",
    cover: "from-primary to-accent",
    summary:
      "A survey-driven view of S/4HANA adoption, Clean Core readiness, and Joule pilot maturity across 240 European enterprises.",
    keyFindings: [
      "Only 34% of ECC customers self-assess as Clean Core ready.",
      "Just 11% of surveyed enterprises have Joule in production; 46% are actively piloting.",
      "Programmes that adopted a formal Clean Core scan finished blueprint 41% faster.",
      "BTP extension adoption tripled year-over-year in DACH and Benelux.",
    ],
    chart: [
      { label: "Assessing", value: 28 },
      { label: "Planning", value: 22 },
      { label: "Migrating", value: 27 },
      { label: "Live on S/4", value: 23 },
    ],
    pullQuote:
      "Clean Core is no longer an architectural preference — it's the gating requirement for every AI initiative on our roadmap.",
    methodology: [
      "Online survey of 240 European enterprises, October–December 2025.",
      "Follow-up interviews with 32 SAP architecture leads.",
      "Programme telemetry from 18 Nextgenlytics live engagements, anonymised.",
    ],
    caseStudies: [
      {
        title: "DACH industrial manufacturer",
        body:
          "Cut blueprint cycle from 22 weeks to 13 by front-loading a Clean Core scan and moving 78 legacy extensions to BTP side-by-side.",
      },
      {
        title: "Benelux logistics operator",
        body:
          "Landed Joule in production in 9 weeks by scoping to two finance close use cases with observability from day one.",
      },
    ],
    assets: [
      { name: "Full report PDF", size: "6.4 MB" },
      { name: "Dataset (anonymised)", size: "1.1 MB" },
      { name: "Executive summary deck", size: "3.2 MB" },
    ],
    references: [
      "SAP 2027 maintenance timeline, SAP SE (2024)",
      "Nextgenlytics programme telemetry, 2024–2025",
      "European Digital Transformation Barometer, 2025",
    ],
    sections: [
      {
        id: "exec-summary",
        heading: "Executive summary",
        body: [
          "The 2027 ECC maintenance cliff is finally converting into board-level programme commitments across European enterprises. But the shape of the estate — decades of custom ABAP layered into the digital core — remains the single largest determinant of programme cost and duration.",
          "Enterprises with a formal Clean Core scan in place finished blueprint 41% faster than the median. Enterprises without one universally under-estimated custom-code volume by 2–3x.",
        ],
      },
      {
        id: "adoption",
        heading: "S/4HANA adoption curve",
        body: [
          "The 240 enterprises we surveyed distribute across four cohorts: assessing (28%), planning (22%), migrating (27%), and live on S/4HANA (23%). The cohort mix has shifted decisively toward migrating and live over the last 18 months.",
        ],
      },
      {
        id: "joule",
        heading: "Joule and embedded AI",
        body: [
          "Joule pilots have moved from novelty to line item on almost half of the enterprise CIO roadmaps we reviewed. Production deployment, however, remains rare — 11% — and clustered in finance close and procurement workflows where evaluation is straightforward.",
        ],
      },
      {
        id: "btp",
        heading: "BTP as the extension pattern",
        body: [
          "BTP is winning as the target for surviving extensions. Adoption tripled year-over-year in DACH and Benelux. Cost anxieties have softened as enterprises price it against the alternative — carrying modifications inside the digital core.",
        ],
      },
      {
        id: "outlook",
        heading: "Outlook for 2026",
        body: [
          "Expect the migrating cohort to swell throughout 2026 as programmes converted from planning enter build. Expect a meaningful minority — perhaps 8–12% — to slip past the maintenance cliff and pay for extended support.",
        ],
      },
    ],
  },
];

function Toc({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");
  useEffect(() => {
    const onScroll = () => {
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top < 220) setActive(s.id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);
  return (
    <nav className="text-sm">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Contents</p>
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

export default function ResearchDetail() {
  const { id } = useParams();
  const report = useMemo(() => REPORTS.find((r) => r.id === id) ?? REPORTS[0], [id]);
  const hero = useScrollReveal();
  const maxChart = Math.max(...report.chart.map((c) => c.value));

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden mt-16 md:mt-20">
          <div className="absolute inset-0">
            <img src={banner} alt="" aria-hidden className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/95" />
          </div>
          <div className="relative container py-14 md:py-20" ref={hero.ref}>
            <Link
              to="/research"
              className="inline-flex items-center gap-1.5 text-primary-foreground/80 hover:text-primary-foreground text-sm font-semibold"
            >
              <ArrowLeft size={14} /> Research hub
            </Link>
            <div className={`mt-6 max-w-3xl ${hero.isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest">
                {report.category}
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-primary-foreground font-heading leading-tight text-balance">
                {report.title}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">{report.summary}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
                <span>{report.authors.join(" · ")}</span>
                <span>{report.date}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={14} className="text-accent" /> {report.readingTime}
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download={`${report.id}.pdf`}
                  className="inline-flex items-center gap-2 rounded-md bg-background text-primary px-5 py-2.5 text-sm font-semibold hover:bg-background/90 transition"
                >
                  <Download size={14} /> Download PDF
                </a>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: report.title, text: report.summary, url: window.location.href }).catch(() => {});
                    } else {
                      navigator.clipboard?.writeText(window.location.href);
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary-foreground/10 transition"
                >
                  <ShareNetwork size={14} /> Share
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="container py-14">
          <div className="grid lg:grid-cols-[220px_1fr_260px] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <Toc sections={report.sections} />
              </div>
            </aside>

            <article>
              {/* Key findings */}
              <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 mb-10">
                <h2 className="text-xl font-heading font-bold text-foreground">Key findings</h2>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {report.keyFindings.map((k, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="grid place-items-center h-6 w-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {report.sections.map((s, i) => (
                <div key={s.id} id={s.id} className="scroll-mt-28 mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
                    {s.heading}
                  </h2>
                  {s.body.map((p, j) => (
                    <p key={j} className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                      {p}
                    </p>
                  ))}

                  {/* Interactive chart under 'adoption' */}
                  {s.id === "adoption" && (
                    <div className="mt-6 rounded-2xl border border-border/60 bg-card p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        S/4HANA adoption cohort · % of respondents
                      </p>
                      <div className="mt-5 space-y-3">
                        {report.chart.map((c) => (
                          <div key={c.label}>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="font-medium text-foreground">{c.label}</span>
                              <span className="text-muted-foreground">{c.value}%</span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                                style={{ width: `${(c.value / maxChart) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {i === 1 && (
                    <blockquote className="my-8 relative rounded-xl border-l-4 border-accent bg-accent/5 p-6">
                      <Quotes className="absolute -top-3 -left-3 text-accent bg-background rounded-full p-1" size={28} />
                      <p className="text-lg md:text-xl font-heading font-semibold text-foreground leading-snug">
                        {report.pullQuote}
                      </p>
                      <footer className="mt-3 text-sm text-muted-foreground">
                        — CIO, DACH industrial manufacturer (surveyed 2025)
                      </footer>
                    </blockquote>
                  )}
                </div>
              ))}

              {/* Methodology */}
              <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8 mb-10">
                <h2 className="text-xl font-heading font-bold text-foreground">Research methodology</h2>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  {report.methodology.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Case studies */}
              <div className="mb-10">
                <h2 className="text-xl font-heading font-bold text-foreground mb-4">Anonymised case studies</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {report.caseStudies.map((c) => (
                    <div key={c.title} className="rounded-2xl border border-border/60 bg-card p-6">
                      <h3 className="font-heading font-bold text-foreground">{c.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* References */}
              <div className="mb-10">
                <h2 className="text-xl font-heading font-bold text-foreground mb-3">References</h2>
                <ol className="text-sm text-muted-foreground list-decimal pl-5 space-y-1">
                  {report.references.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ol>
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-4">
                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                    Download assets
                  </p>
                  <ul className="space-y-2">
                    {report.assets.map((a) => (
                      <li key={a.name}>
                        <a
                          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          download={a.name}
                          className="w-full flex items-center justify-between text-left text-sm text-foreground hover:text-primary transition-colors"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Download size={13} className="text-primary" /> {a.name}
                          </span>
                          <span className="text-xs text-muted-foreground">{a.size}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Share</p>
                  <div className="flex gap-2">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      className="h-9 w-9 grid place-items-center rounded-full border border-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <LinkedinLogo size={14} />
                    </a>
                    <a
                      href={`mailto:?subject=${encodeURIComponent(report.title)}&body=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                      aria-label="Share by email"
                      className="h-9 w-9 grid place-items-center rounded-full border border-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <Envelope size={14} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(report.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                      className="h-9 w-9 grid place-items-center rounded-full border border-border/60 text-primary hover:bg-primary hover:text-primary-foreground transition"
                    >
                      <ShareNetwork size={14} />
                    </a>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block rounded-2xl bg-gradient-to-br from-primary to-accent p-5 text-primary-foreground"
                >
                  <p className="text-xs font-bold uppercase tracking-widest opacity-90">Contact an expert</p>
                  <p className="mt-2 font-heading font-bold text-lg">Talk to the research team</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                    <ChatCircle size={13} /> Start a conversation
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}