import { useDocumentTitle } from "@/hooks/use-document-title";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import banner from "@/assets/banners/banner-ai-training.jpg";
import classroom from "@/assets/solutions/training-classroom.jpg";
import { ArrowRight, Brain, CheckCircle, GraduationCap, Stack, Users, Wrench } from "@phosphor-icons/react";
import AiChipIcon from "@/components/icons/AiChipIcon";

const modules = [
  { Icon: Brain, title: "AI Literacy", body: "From foundational concepts to hands-on prompt engineering — everyone in your organisation speaks the same AI language." },
  { Icon: Stack, title: "Data Governance Responsibilities", body: "Owners, stewards, and consumers understand their day-to-day accountability for AI-grade data." },
  { Icon: Wrench, title: "Tool Adoption", body: "Practical enablement on Copilot, SAP Joule, Databricks Genie and Snowflake Cortex — the tools your teams will use." },
  { Icon: Users, title: "Data-First Culture", body: "Change habits, not just tools. We embed decision-making rituals that make data the default input, not the afterthought." },
];

const audiences = [
  { role: "C-Suite", focus: "AI strategy, value cases, governance oversight" },
  { role: "Business Leaders", focus: "Data-driven decision-making, KPIs, adoption" },
  { role: "Operations & Analysts", focus: "Copilot workflows, self-service analytics" },
  { role: "Engineering & IT", focus: "Platform patterns, MLOps, integration" },
];

function Intro() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <Reveal className="lg:col-span-7" variant="up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <AiChipIcon size={14} /> AI-Driven Organisation Training
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground font-heading text-balance leading-[1.1]">
            Not a one-day workshop. A programme that <span className="text-primary">changes how your teams decide</span>.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            We train your entire organisation — from C-suite to operations — to work with data and AI effectively.
            A structured programme that changes how your teams use data to make decisions, faster.
          </p>
          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Delivered by <strong className="text-foreground">Nextgenlytics practitioners</strong> — people who have built the platforms your teams will use.
          </p>
        </Reveal>
        <Reveal className="lg:col-span-5" variant="scale" delay={120}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border border-border/60">
            <img src={classroom} alt="AI training programme in progress" width={1200} height={900} loading="lazy" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section className="section-alt py-12 md:py-16">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <GraduationCap size={14} /> What we cover
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance">
            Four modules that build a data-first organisation
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <Reveal key={m.title} variant="up" delay={i * 120}>
              <article className="group h-full bg-card rounded-2xl border border-border/60 p-7 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 mb-5">
                  <m.Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading">{m.title}</h3>
                <div className="mt-3 h-1 w-10 bg-accent rounded-full" />
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Audiences() {
  return (
    <section className="container py-12 md:py-16">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <Reveal className="lg:col-span-5" variant="left">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
            <CheckCircle size={14} /> Every level, every role
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground font-heading text-balance leading-tight">
            Tailored tracks — from boardroom to shop floor.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Each track is delivered by Nextgenlytics practitioners who build these platforms in production — not classroom trainers.
          </p>
          <a href="/contact" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Design your programme <ArrowRight size={16} />
          </a>
        </Reveal>
        <div className="lg:col-span-7 space-y-4">
          {audiences.map((a, i) => (
            <Reveal key={a.role} variant="right" delay={i * 100}>
              <article className="group bg-card rounded-2xl border border-border/60 p-6 shadow-md shadow-primary/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-primary/30 flex items-start gap-5">
                <span className="text-3xl font-bold text-accent font-heading leading-none shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-foreground font-heading">{a.role}</h3>
                  <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed">{a.focus}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AiTraining() {
  useDocumentTitle("AI-Driven Organisation Training");
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={banner}
          eyebrow="Data Engineering · AI-Driven Organisation Training"
          title="AI-Driven Organisation Training"
          description="A structured programme — not a one-day workshop — that changes how your teams use data and AI to decide, faster."
        />
        <Intro />
        <Modules />
        <Audiences />
      </main>
      <Footer />
    </div>
  );
}