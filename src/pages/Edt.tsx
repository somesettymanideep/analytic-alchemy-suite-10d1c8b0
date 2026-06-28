import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import {
  ArrowRight,
  Users,
  Handshake,
  CheckCircle2,
  Rocket,
  Layers,
  ShieldCheck,
  Clock,
  Sparkles,
  Database,
  Cloud,
  Cpu,
  LifeBuoy,
  Building2,
  Workflow,
  Gauge,
  TrendingUp,
  FileText,
  Play,
  Star,
  Bot,
  Activity,
  Zap,
} from "lucide-react";
import partnersHero from "@/assets/edt/partners-hero.jpg";

type Audience = "customers" | "partners";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
}

/* ------------------------------ CUSTOMERS VIEW ------------------------------ */

function CustomersView() {
  const capabilities = [
    {
      n: "01",
      icon: Database,
      title: "SAP Data & Migration",
      desc: "S/4HANA data migration, ECC support, SAP Datasphere analytics, BTP integration — specialists ready in weeks, not months.",
      tag: "Powered by Falcon Mapping · OrcaMigrate",
    },
    {
      n: "02",
      icon: Cloud,
      title: "Microsoft Dynamics",
      desc: "D365 F&O AMS, Business Central, Power BI, Azure Data Factory — across single and multi-country landscapes.",
      tag: "Powered by OrcaMigrate · Owl Sight",
    },
    {
      n: "03",
      icon: Workflow,
      title: "Data Engineering",
      desc: "Metadata-driven pipelines, Snowflake, Databricks, Microsoft Fabric — designed, built, and operated at enterprise scale.",
      tag: "Powered by Falcon Mapping · Code Cheetah",
    },
    {
      n: "04",
      icon: Sparkles,
      title: "AI & Automation",
      desc: "BlueGecko AI agents, process automation, workflow engineering — production-ready, not proof-of-concept.",
      tag: "Powered by BlueGecko Platform",
    },
    {
      n: "05",
      icon: LifeBuoy,
      title: "Application Managed Services",
      desc: "BAU support, ISV management, incident resolution, change management — shift-based coverage aligned to your time zone.",
      tag: "Evidenced: Nash Squared · 70+ entities · 9 countries",
    },
  ];

  const timeline = [
    { week: "Week 1", title: "Discovery", body: "We map your requirements, systems, and context. You tell us what you need. We tell you exactly who we are putting on your team." },
    { week: "Weeks 2–3", title: "Assembly", body: "Your EDT is identified, briefed, and onboarded. Senior professionals. Certified. Experienced in your technology stack." },
    { week: "Week 4", title: "Activation", body: "Delivery begins. Sprint one, BAU operations, or migration workstream — whatever your priority is." },
    { week: "Ongoing", title: "Steady State", body: "Monthly governance reviews. Amsterdam-based oversight. Continuous improvement. The team grows with you." },
  ];

  const pillars = [
    { icon: Users, title: "Not outsourcing", body: "Your team. Your ways of working. Your outcomes. NGSIT operates inside your programme structure, not alongside it." },
    { icon: ShieldCheck, title: "Not a subcontractor", body: "Embedded, dedicated, and accountable directly to you. No middlemen, no management layers." },
    { icon: Layers, title: "Not a rotating pool", body: "The same people. Building knowledge that stays with your programme instead of leaving at the end of every engagement." },
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/[0.06] via-background to-accent/[0.08]" />
        <div className="absolute top-20 -right-20 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl -z-10" />

        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold mb-6">
              <Users size={14} /> For Customers
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.05]">
              Extended Delivery Team
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/80 font-display">
              Your dedicated technology capability.
              <br />
              <span className="text-primary">On demand. Fully governed.</span>
            </p>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              Stop hiring for every project. Stop paying Tier-1 rates for every sprint. Start operating with a dedicated team that knows your systems, your data, and your business — and shows up every day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Talk to Us About Your EDT <ArrowRight size={16} />
              </a>
              <a href="#capabilities" className="inline-flex items-center gap-2 bg-card text-primary border border-border px-6 py-3 rounded-full font-semibold hover:border-primary/40 transition-all">
                See Our Delivery Capabilities
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src={customersHero}
                alt="Extended Delivery Team collaborating in Amsterdam office"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                width={1536}
                height={1024}
              />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-xl p-4 max-w-[220px]">
                <div className="text-xs text-muted-foreground">Activation time</div>
                <div className="text-2xl font-bold text-primary">≤ 4 weeks</div>
                <div className="text-xs text-foreground/70">From brief to first sprint</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE CHALLENGE */}
      <section className="container">
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">The Challenge</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">The choice you should not have to make</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Growing organisations face an impossible choice. Hire permanent headcount for every technology capability — and carry the cost when priorities shift. Or engage large consultancies — and pay enterprise rates for a team that rotates every six months and never truly learns your business.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <blockquote className="mt-10 relative bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="absolute top-6 right-8 text-6xl font-display text-accent leading-none">"</div>
            <p className="text-xl md:text-2xl font-display leading-relaxed max-w-3xl">
              Think of it the way EY, Deloitte, or Accenture clients think of their dedicated client service teams — except built for the Dutch and European SMB market, without the Big Four price tag.
            </p>
          </blockquote>
        </Reveal>
      </section>

      {/* WHAT IT IS — pillars */}
      <section className="container">
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">What It Is</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Not outsourcing. Not a subcontractor. <span className="text-primary">Your team.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Your EDT is a dedicated team of NGSIT specialists — based in India, governed from Amsterdam — that operates as an embedded extension of your organisation. They work your sprints, attend your standups, and learn your systems. And they stay — building institutional knowledge that compounds over time.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-display font-bold text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">Delivery Capabilities</div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">What Your EDT Delivers</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c, i) => (
              <Reveal key={c.n} delay={i * 80}>
                <div className="group relative h-full bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-2xl hover:border-primary/40 transition-all overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <c.icon size={22} />
                    </span>
                    <span className="text-3xl font-display font-bold text-accent/40">{c.n}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-display font-bold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  <div className="mt-5 pt-4 border-t border-border/60 text-xs font-semibold text-primary">{c.tag}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — timeline */}
      <section className="container">
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">How It Works</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">From brief to delivery in 4 weeks.</h2>
          </div>
        </Reveal>
        <div className="relative mt-14">
          <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((t, i) => (
              <Reveal key={t.week} delay={i * 120}>
                <div className="relative">
                  <div className="relative z-10 mx-auto md:mx-0 w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-lg">
                    <span className="text-primary font-display font-bold">{i + 1}</span>
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.18em] text-accent font-bold">{t.week}</div>
                  <h3 className="mt-2 text-xl font-display font-bold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NGSIT */}
      <section className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">Why NGSIT</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Your account is one of hundreds to them. <span className="text-primary">It is everything to us.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every large consultancy will tell you they have a delivery centre in India. What they will not tell you is that your team rotates every quarter, and the partner you met in the pitch call will not be on your programme.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              NGSIT is different by design. Your EDT is yours — dedicated, managed, and accountable to one Amsterdam-based leadership team that you can call directly.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-bold mb-5">
                <Building2 size={14} /> Proven
              </div>
              <p className="text-lg md:text-xl leading-relaxed">
                <strong>Nash Squared</strong> — 70+ legal entities, 9 countries, 6 ISVs. BAU operations, financial process automation, and analytics managed as one dedicated programme.
              </p>
              <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-xl font-display italic">
                "Tier-1 capability. SMB accountability. Built to last."
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <Reveal>
          <div className="relative overflow-hidden bg-foreground text-primary-foreground rounded-3xl p-10 md:p-16 text-center">
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Tell us what you need.</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">We can have your team ready in under 4 weeks.</p>
              <a href="/contact" className="mt-8 inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold shadow-xl hover:-translate-y-0.5 transition-all">
                Start the Conversation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* ------------------------------ PARTNERS VIEW ------------------------------ */

function PartnersView() {
  const valueProps = [
    { n: "01", tag: "Speed", icon: Rocket, title: "Time to Market", body: "In a competitive SI landscape, the firm that can staff a programme in weeks wins the renewal. NGSIT reduces your talent activation time from months to weeks.", highlight: "Team ready in 2–4 weeks" },
    { n: "02", tag: "Agility", icon: Gauge, title: "Flexibility", body: "Fixed headcount carries fixed cost. Your EDT scales up and down with your pipeline — team of 3 for discovery, team of 12 for migration, back to 4 for AMS.", highlight: "Scale up or down with your pipeline" },
    { n: "03", tag: "Delivery", icon: ShieldCheck, title: "Quality", body: "Every EDT member is senior, certified, and pre-vetted by NGSIT. You are extending your own delivery capability with professionals who operate to your standards.", highlight: "Senior, certified, pre-vetted professionals" },
  ];

  const streams = [
    { icon: Database, title: "SAP", items: ["S/4HANA data migration", "SAP ECC support & optimisation", "SAP Datasphere & analytics", "SAP BTP integration", "SAP Basis"] },
    { icon: Cloud, title: "Microsoft", items: ["D365 Finance & Operations", "Dynamics 365 Business Central", "Power BI & Azure Synapse", "Microsoft Fabric", "Azure Data Factory"] },
    { icon: Workflow, title: "Data Engineering", items: ["Snowflake data platform", "Databricks Lakehouse", "dbt & SQL transformation", "Kafka & Event Hub", "Metadata-driven pipelines"] },
    { icon: Sparkles, title: "AI & Automation", items: ["BlueGecko AI agents", "Power Automate & Logic Apps", "Process automation engineering", "AI testing & validation"] },
    { icon: LifeBuoy, title: "AMS & Support", items: ["BAU D365 & SAP support", "ISV management", "Incident management", "Change management", "Shift-based GMT coverage"] },
  ];

  const engagements = [
    { title: "Time & Material", body: "Scale with your sprint. Pay for what you use. No fixed commitment — ideal for project-based delivery.", icon: Clock },
    { title: "Dedicated Capacity", body: "Fixed team, fixed monthly rate. Predictable cost and continuous availability for ongoing programmes.", icon: ShieldCheck },
    { title: "Hybrid", body: "Core team on retainer, flex capacity on demand. The most common model for active SI partnerships.", icon: Layers },
  ];

  const matrix = [
    ["Speed to activation", "Team ready in 2–4 weeks"],
    ["Flexibility", "Scale up or down with your pipeline"],
    ["Quality assurance", "Senior, certified, pre-vetted professionals"],
    ["Governance", "Amsterdam-based oversight, your programme standards"],
    ["Commercial simplicity", "One contract, one invoice, one point of contact"],
    ["No overhead", "No India entity, no HR, no compliance burden"],
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/[0.08] via-background to-primary/[0.06]" />
        <div className="absolute top-20 -left-20 w-[420px] h-[420px] rounded-full bg-accent/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 -right-20 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl -z-10" />

        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent-foreground px-3 py-1 text-xs font-semibold mb-6">
              <Handshake size={14} /> For SI Partners
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground leading-[1.05]">
              EDT for SI Partners
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-foreground/80 font-display">
              Scale your India delivery.
              <br />
              <span className="text-primary">Fast. Flexible. No overhead.</span>
            </p>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl">
              Your clients need delivery. Your pipeline is growing faster than your team. NGSIT's EDT model gives you a pre-assembled India delivery layer — activated in weeks, not months.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Talk to Us About Your Pipeline <ArrowRight size={16} />
              </a>
              <a href="#engagement" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 transition-all">
                <FileText size={16} /> Download Partner Overview
              </a>
            </div>
            <p className="mt-8 text-base font-display italic text-primary">
              "Your brand. Your client relationship. NGSIT's delivery depth."
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-accent/30 via-primary/20 to-transparent rounded-3xl blur-2xl" />
              <img
                src={partnersHero}
                alt="SI partner handshake with NGSIT delivery operations"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                width={1536}
                height={1024}
              />
              <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl shadow-xl p-4 max-w-[240px]">
                <div className="text-xs text-muted-foreground">One simple model</div>
                <div className="text-lg font-bold text-primary">1 contract · 1 invoice</div>
                <div className="text-xs text-foreground/70">One point of contact</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {valueProps.map((v, i) => (
            <Reveal key={v.n} delay={i * 120}>
              <div className="group h-full relative bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-2xl hover:border-accent/50 transition-all overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl group-hover:bg-accent/20 transition-colors" />
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">{v.n} · {v.tag}</span>
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <v.icon size={20} />
                  </span>
                </div>
                <h3 className="mt-5 text-2xl font-display font-bold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary bg-accent/15 px-3 py-1.5 rounded-full">
                  <CheckCircle2 size={14} /> {v.highlight}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DELIVERY STREAMS */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">Delivery Streams</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">What Your EDT Covers</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streams.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary">
                      <s.icon size={20} />
                    </span>
                    <h3 className="text-xl font-display font-bold text-foreground">{s.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-foreground/80">
                        <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL MODEL */}
      <section id="engagement" className="container">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">Commercial Model</div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
                No setup cost. <br />
                <span className="text-primary">No overhead.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                No long-term commitment before you know the team works. One contract. One invoice. One point of contact. We handle the India entity, the HR, the compliance. You focus on delivering for your client.
              </p>
            </div>
            <div className="grid gap-4">
              {engagements.map((e, i) => (
                <Reveal key={e.title} delay={i * 100}>
                  <div className="group flex gap-5 bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all">
                    <span className="inline-flex items-center justify-center w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <e.icon size={22} />
                    </span>
                    <div>
                      <h3 className="text-lg font-display font-bold text-foreground">{e.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{e.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* MATRIX */}
      <section className="container">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3">Why NGSIT</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">What You Need. What We Deliver.</h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg bg-card">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wide">
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-primary-foreground/15">What you need</div>
              <div className="px-6 py-4">NGSIT delivers</div>
            </div>
            {matrix.map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-1 md:grid-cols-[1fr_1.4fr] ${i % 2 ? "bg-muted/30" : "bg-card"}`}>
                <div className="px-6 py-5 font-semibold text-foreground border-b border-border md:border-b md:border-r">{k}</div>
                <div className="px-6 py-5 text-foreground/80 border-b border-border flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span>{v}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <Reveal>
          <div className="relative overflow-hidden bg-foreground text-primary-foreground rounded-3xl p-10 md:p-16 text-center">
            <div className="absolute top-0 left-0 w-72 h-72 bg-accent/25 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display font-bold">Let us talk about your pipeline.</h2>
              <p className="mt-4 text-lg text-primary-foreground/80">We will tell you exactly what we can activate and when.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold shadow-xl hover:-translate-y-0.5 transition-all">
                  Start the Partner Conversation <ArrowRight size={16} />
                </a>
                <a href="/contact" className="inline-flex items-center gap-2 bg-card/10 border border-primary-foreground/20 text-primary-foreground px-7 py-3.5 rounded-full font-bold hover:bg-card/20 transition-all">
                  <FileText size={16} /> Download Partner Programme
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

/* ------------------------------ PAGE SHELL ------------------------------ */

export default function Edt() {
  const [audience, setAudience] = useState<Audience>("customers");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Sticky audience toggle */}
      <div className="pt-28 md:pt-32">
        <div className="container">
          <div className="flex justify-center">
            <div
              role="tablist"
              aria-label="Audience"
              className="inline-flex items-center gap-1 p-1.5 bg-card border border-border rounded-full shadow-md"
            >
              <button
                role="tab"
                aria-selected={audience === "customers"}
                onClick={() => setAudience("customers")}
                className={`inline-flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  audience === "customers"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                <Users size={16} />
                For Customers
              </button>
              <button
                role="tab"
                aria-selected={audience === "partners"}
                onClick={() => setAudience("partners")}
                className={`inline-flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  audience === "partners"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                <Handshake size={16} />
                For SI Partners
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-12 md:pt-16">
        <div key={audience} className="animate-fade-in">
          {audience === "customers" ? <CustomersView /> : <PartnersView />}
        </div>
      </main>

      <Footer />
    </div>
  );
}