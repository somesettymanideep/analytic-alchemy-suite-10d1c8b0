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
  return <CustomersViewPremium />;
}

/* ----- Animated Dashboard Mockup (hero right) ----- */
function HeroDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 5, y: px * 5 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative h-[460px] md:h-[560px]"
      style={{ perspective: "1400px" }}
    >
      {/* aurora behind */}
      <div className="absolute inset-0 -z-10 overflow-hidden rounded-[28px]">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#2958FF]/30 blur-3xl animate-aurora" />
        <div className="absolute -bottom-32 -right-16 w-[460px] h-[460px] rounded-full bg-[#6C63FF]/30 blur-3xl animate-aurora-2" />
        <div className="absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full bg-[#00C6FF]/20 blur-3xl animate-aurora" />
      </div>

      <div
        className="relative w-full h-full rounded-[28px] transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`, transformStyle: "preserve-3d" }}
      >
        {/* Main dashboard card */}
        <div className="absolute inset-0 glass-card gradient-border rounded-[28px] shadow-2xl shadow-primary/10 overflow-hidden">
          {/* faint grid */}
          <div className="absolute inset-0 opacity-[0.4]"
               style={{ backgroundImage: "linear-gradient(to right, rgba(11,18,32,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,18,32,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

          {/* Window chrome */}
          <div className="relative flex items-center gap-2 px-5 py-4 border-b border-foreground/5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
            <div className="ml-3 text-[11px] font-mono text-foreground/50">edt.ngsit.io / overview</div>
            <div className="ml-auto text-[11px] text-emerald-600 font-semibold flex items-center gap-1.5">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring" />
                <span className="rounded-full w-1.5 h-1.5 bg-emerald-500" />
              </span>
              Live
            </div>
          </div>

          {/* Body */}
          <div className="relative p-5 grid grid-cols-6 gap-3 text-[#0B1220]">
            {/* Team avatars */}
            <div className="col-span-3 rounded-2xl bg-white/60 border border-white/70 p-3 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">Your EDT</div>
                <div className="text-[10px] text-emerald-600 font-semibold">12 online</div>
              </div>
              <div className="mt-2 flex -space-x-2">
                {["#2958FF","#6C63FF","#00C6FF","#F6B91A","#10B981","#EF4444"].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full ring-2 ring-white text-[10px] font-bold flex items-center justify-center text-white"
                    style={{ background: c }}>
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
                <div className="w-7 h-7 rounded-full ring-2 ring-white bg-foreground/10 text-foreground/70 text-[10px] font-bold flex items-center justify-center">+6</div>
              </div>
            </div>

            {/* Progress */}
            <div className="col-span-3 rounded-2xl bg-white/60 border border-white/70 p-3 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-foreground/60">S/4HANA Migration</div>
              <div className="mt-2 flex items-baseline gap-2">
                <div className="text-2xl font-display font-bold text-primary">78%</div>
                <div className="text-[10px] text-emerald-600 font-semibold">+4.2%</div>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#2958FF] to-[#00C6FF] rounded-full" style={{ width: "78%" }} />
              </div>
            </div>

            {/* Sparkline */}
            <div className="col-span-4 rounded-2xl bg-gradient-to-br from-[#0B1220] to-[#1a2545] text-white p-3 shadow-sm overflow-hidden relative">
              <div className="absolute inset-0 opacity-30 pointer-events-none"
                   style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative flex items-center justify-between">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/70">Throughput · 24h</div>
                <Activity size={12} className="text-[#00C6FF]" />
              </div>
              <svg viewBox="0 0 200 60" className="relative mt-2 w-full h-16">
                <defs>
                  <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00C6FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#00C6FF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,45 L20,38 L40,42 L60,28 L80,32 L100,20 L120,26 L140,14 L160,22 L180,10 L200,16 L200,60 L0,60 Z" fill="url(#spark)" />
                <path d="M0,45 L20,38 L40,42 L60,28 L80,32 L100,20 L120,26 L140,14 L160,22 L180,10 L200,16" fill="none" stroke="#00C6FF" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>

            {/* AI assistant */}
            <div className="col-span-2 rounded-2xl bg-gradient-to-br from-[#2958FF] to-[#6C63FF] text-white p-3 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="relative flex items-center gap-2">
                <Bot size={14} />
                <div className="text-[11px] font-semibold uppercase tracking-wider">AI Co-pilot</div>
              </div>
              <div className="relative mt-2 text-[10px] leading-snug text-white/90">
                "3 mappings ready for review."
              </div>
            </div>
          </div>
        </div>

        {/* Floating tech pills */}
        <FloatPill className="absolute -top-5 -left-4 animate-float-y" label="SAP" color="#0FAAFF" />
        <FloatPill className="absolute top-10 -right-6 animate-float-y-slow" label="Microsoft" color="#5E5BFF" />
        <FloatPill className="absolute -bottom-4 left-12 animate-float-y-slow" label="Azure" color="#0078D4" />
        <FloatPill className="absolute bottom-16 -right-8 animate-float-y" label="Databricks" color="#FF3621" />

        {/* Timeline ribbon */}
        <div className="absolute -bottom-6 -left-2 glass-card gradient-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 animate-float-y-slow">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="w-2 h-2 rounded-full bg-[#F6B91A]" />
            <span className="w-2 h-2 rounded-full bg-foreground/20" />
          </div>
          <div className="text-[11px] font-semibold text-foreground/70">Sprint 14 · On track</div>
        </div>
      </div>
    </div>
  );
}

function FloatPill({ className, label, color }: { className?: string; label: string; color: string }) {
  return (
    <div className={`glass-card gradient-border rounded-full px-3.5 py-2 shadow-lg flex items-center gap-2 ${className ?? ""}`}>
      <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 12px ${color}` }} />
      <span className="text-xs font-semibold text-foreground">{label}</span>
    </div>
  );
}

/* ----- Animated counter card ----- */
function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-gradient-flow inline-block">
        {count}{suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/60 font-semibold">{label}</div>
    </div>
  );
}

/* ----- Cursor glow ----- */
function CursorGlow({ targetRef }: { targetRef: React.RefObject<HTMLElement> }) {
  const dotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const t = targetRef.current;
    const d = dotRef.current;
    if (!t || !d) return;
    const move = (e: MouseEvent) => {
      const r = t.getBoundingClientRect();
      d.style.transform = `translate(${e.clientX - r.left - 120}px, ${e.clientY - r.top - 120}px)`;
    };
    t.addEventListener("mousemove", move);
    return () => t.removeEventListener("mousemove", move);
  }, [targetRef]);
  return (
    <div ref={dotRef} className="pointer-events-none absolute top-0 left-0 w-60 h-60 rounded-full bg-[#2958FF]/15 blur-3xl transition-transform duration-200 ease-out" />
  );
}

function CustomersViewPremium() {
  const heroRef = useRef<HTMLElement>(null);

  const trustBrands = ["SAP", "Microsoft", "Databricks", "Azure", "Snowflake", "Oracle", "Fabric", "BlueGecko"];

  const pillars = [
    { icon: Users, title: "Not outsourcing", body: "Your team. Your ways of working. Your outcomes. NGSIT operates inside your programme structure, not alongside it.", glow: "#2958FF" },
    { icon: ShieldCheck, title: "Not a subcontractor", body: "Embedded, dedicated, and accountable directly to you. No middlemen, no management layers.", glow: "#6C63FF" },
    { icon: Layers, title: "Not a rotating pool", body: "The same people. Building knowledge that stays with your programme instead of leaving at the end of every engagement.", glow: "#F6B91A" },
  ];

  const bento = [
    { span: "md:col-span-2", icon: Database, title: "SAP", desc: "S/4HANA migration, ECC support, Datasphere, BTP — specialists ready in weeks.", tag: "Falcon · Orca", gradient: "from-[#2958FF]/10 to-[#6C63FF]/10" },
    { span: "", icon: Cloud, title: "Microsoft Dynamics", desc: "D365 F&O AMS, Business Central, Power BI, Azure Data Factory.", tag: "Orca · Owl Sight", gradient: "from-[#00C6FF]/10 to-[#2958FF]/10" },
    { span: "md:col-span-2 md:row-span-2", icon: Sparkles, title: "AI & Automation", desc: "BlueGecko AI agents, process automation, workflow engineering — production-ready, not proof-of-concept.", tag: "BlueGecko Platform", gradient: "from-[#F6B91A]/15 to-[#2958FF]/10", large: true },
    { span: "", icon: Workflow, title: "Data Engineering", desc: "Metadata-driven pipelines on Snowflake, Databricks, Fabric.", tag: "Falcon · Cheetah", gradient: "from-[#6C63FF]/10 to-[#00C6FF]/10" },
    { span: "md:col-span-2", icon: LifeBuoy, title: "Application Managed Services", desc: "BAU support, ISV management, incident resolution, change management — shift-based coverage aligned to your time zone.", tag: "Nash Squared · 70+ entities · 9 countries", gradient: "from-[#2958FF]/10 to-[#F6B91A]/10" },
  ];

  const timeline = [
    { week: "Week 1", title: "Discovery", body: "We map your requirements, systems, and context.", icon: Sparkles },
    { week: "Weeks 2–3", title: "Architecture", body: "EDT identified, briefed, and onboarded.", icon: Layers },
    { week: "Week 4", title: "Migration", body: "Delivery begins — sprint one or BAU.", icon: Zap },
    { week: "Ongoing", title: "Go Live", body: "Amsterdam governance and continuous growth.", icon: Rocket },
  ];

  return (
    <div className="space-y-28 md:space-y-36">
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative overflow-hidden">
        <CursorGlow targetRef={heroRef} />
        {/* aurora */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full bg-[#2958FF]/15 blur-3xl animate-aurora" />
          <div className="absolute top-20 right-0 w-[520px] h-[520px] rounded-full bg-[#6C63FF]/15 blur-3xl animate-aurora-2" />
          <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full bg-[#00C6FF]/10 blur-3xl animate-aurora" />
        </div>

        <div className="container grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass-card gradient-border px-3 py-1.5 text-xs font-semibold text-primary mb-7 animate-reveal-up">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              For Customers · Extended Delivery Team
            </div>

            <h1 className="font-display font-bold tracking-tight leading-[1.02] text-[44px] sm:text-[58px] md:text-[72px]">
              <span className="block animate-reveal-up text-foreground">Your Extended</span>
              <span className="block animate-reveal-up delay-100 text-foreground">Delivery Team</span>
              <span className="block animate-reveal-up delay-200 text-foreground">That Actually</span>
              <span className="block animate-reveal-up delay-300 relative w-fit">
                <span className="text-gradient-flow">Feels Like Yours.</span>
                <span className="absolute -bottom-2 left-0 h-1.5 w-full origin-left rounded-full bg-gradient-to-r from-[#2958FF] via-[#6C63FF] to-[#F6B91A]" style={{ animation: "line-grow 1.2s 0.6s cubic-bezier(0.16,1,0.3,1) both" }} />
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/70 font-display max-w-xl animate-reveal-up delay-400">
              Dedicated engineers. Governed from Amsterdam.
              <br />
              <span className="text-foreground/90">Working like your internal team.</span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3 animate-reveal-up delay-500">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all overflow-hidden"
                style={{ background: "linear-gradient(135deg, #2958FF, #6C63FF)" }}
              >
                <span className="absolute inset-0 animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative">Book Assessment</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold glass-card gradient-border text-foreground hover:-translate-y-0.5 transition-all"
              >
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Play size={12} className="ml-0.5" fill="currentColor" />
                </span>
                Watch How EDT Works
              </a>
            </div>

            {/* Inline counters */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md animate-reveal-up delay-600">
              <StatCounter value={70} suffix="+" label="Entities" />
              <StatCounter value={50} suffix="%" label="Faster" />
              <StatCounter value={4} suffix="wk" label="Activation" />
            </div>
          </div>

          {/* Right — dashboard */}
          <div className="animate-reveal-scale delay-300">
            <HeroDashboard />
          </div>
        </div>

        {/* Trust marquee */}
        <div className="mt-24 md:mt-32 relative">
          <div className="text-center text-[11px] uppercase tracking-[0.3em] text-foreground/50 font-semibold mb-6">
            Delivered across the enterprise stack
          </div>
          <div className="relative overflow-hidden">
            <div className="flex gap-3 animate-marquee-slow whitespace-nowrap" style={{ width: "max-content" }}>
              {[...trustBrands, ...trustBrands, ...trustBrands].map((b, i) => (
                <div key={i} className="glass-card gradient-border rounded-full px-6 py-3 text-sm font-display font-semibold text-foreground/80 shadow-sm">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHALLENGE — dark storytelling ============ */}
      <section className="relative overflow-hidden rounded-[28px] mx-4 md:mx-8 bg-[#0B1220] text-white">
        <div className="absolute inset-0 bg-grid-soft animate-grid-pan opacity-60" />
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#2958FF]/25 blur-3xl animate-aurora" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-[#6C63FF]/25 blur-3xl animate-aurora-2" />
        {/* particles */}
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/40 animate-float-y"
            style={{
              top: `${(i * 53) % 90 + 5}%`,
              left: `${(i * 67) % 95 + 2}%`,
              animationDelay: `${(i % 6) * 0.4}s`,
              animationDuration: `${4 + (i % 5)}s`,
            }}
          />
        ))}

        <div className="relative container py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.3em] text-[#F6B91A] font-bold mb-4">The Challenge</div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05]">
                Most companies <span className="text-white/40">hire resources.</span>
                <br />
                <span className="text-gradient-flow">We build teams.</span>
              </h2>
            </Reveal>
          </div>

          {/* connecting nodes */}
          <div className="mt-16 relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#2958FF" strokeWidth="1" className="animate-orbit-dash" />
              <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#6C63FF" strokeWidth="1" className="animate-orbit-dash" />
            </svg>
            {[
              { t: "Hire", b: "Permanent headcount carries fixed cost when priorities shift." },
              { t: "Outsource", b: "Big Four rates. Rotating teams. Never learn your business." },
              { t: "EDT", b: "Dedicated. Embedded. Amsterdam-governed. Built to last.", primary: true },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 150}>
                <div className={`relative rounded-3xl p-6 backdrop-blur-xl border ${c.primary ? "bg-gradient-to-br from-[#2958FF] to-[#6C63FF] border-white/20" : "bg-white/5 border-white/10"}`}>
                  <div className={`text-xs uppercase tracking-[0.2em] font-bold ${c.primary ? "text-[#F6B91A]" : "text-white/50"}`}>0{i+1}</div>
                  <div className="mt-2 text-2xl font-display font-bold">{c.t}</div>
                  <div className="mt-2 text-sm text-white/70 leading-relaxed">{c.b}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GLASS QUOTE ============ */}
      <section className="container">
        <Reveal>
          <div className="relative glass-card gradient-border rounded-[28px] p-8 md:p-14 overflow-hidden shadow-2xl">
            <div className="absolute -top-16 -left-16 w-72 h-72 bg-[#2958FF]/20 rounded-full blur-3xl animate-aurora" />
            <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#6C63FF]/20 rounded-full blur-3xl animate-aurora-2" />
            <div className="absolute inset-0 animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
            <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-3xl font-display font-bold text-white shrink-0"
                   style={{ background: "linear-gradient(135deg, #2958FF, #6C63FF)" }}>
                RD
                <span className="absolute -inset-1 rounded-full border border-white/40 animate-pulse-ring" />
              </div>
              <div>
                <div className="text-[#F6B91A] text-5xl font-display leading-none">"</div>
                <p className="mt-2 text-xl md:text-2xl font-display text-foreground leading-snug">
                  Think of it the way EY, Deloitte, or Accenture clients think of their dedicated client service teams — except built for the Dutch and European SMB market, <span className="text-gradient-flow">without the Big Four price tag.</span>
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <div>
                    <div className="text-sm font-semibold text-foreground">Raja Devarapu</div>
                    <div className="text-xs text-foreground/60">Co-Founder & CEO · NGSIT</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1 text-[#F6B91A]">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ NOT OUTSOURCING — 3D feature cards ============ */}
      <section className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-3">What it is</div>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Not outsourcing. Not a subcontractor. <span className="text-gradient-flow">Your team.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <TiltCard key={p.title} delay={i * 120} glow={p.glow}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${p.glow}, #6C63FF)` }}>
                <p.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-display font-bold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.body}</p>
            </TiltCard>
          ))}
        </div>
      </section>

      {/* ============ BENTO CAPABILITIES ============ */}
      <section id="capabilities" className="container">
        <div className="max-w-2xl mb-12">
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-3">Delivery Capabilities</div>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">What your EDT delivers.</h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[180px] gap-4">
          {bento.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className={`group relative h-full rounded-[28px] p-6 md:p-7 border border-border bg-gradient-to-br ${b.gradient} bg-card overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl ${b.span}`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/40 to-transparent" />
                <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 gradient-border" />
                <div className="relative h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-white text-primary shadow-md group-hover:rotate-6 transition-transform duration-500">
                      <b.icon size={20} />
                    </span>
                    <span className="text-xs font-display font-bold text-foreground/40">0{i+1}</span>
                  </div>
                  <h3 className={`mt-4 font-display font-bold text-foreground ${b.large ? "text-2xl md:text-3xl" : "text-lg"}`}>{b.title}</h3>
                  <p className={`mt-2 text-foreground/70 leading-relaxed ${b.large ? "text-base" : "text-sm"}`}>{b.desc}</p>
                  <div className="mt-auto pt-4 text-[11px] font-semibold text-primary uppercase tracking-wider">{b.tag}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ HORIZONTAL TIMELINE ============ */}
      <section id="how-it-works" className="container">
        <div className="max-w-3xl mb-14">
          <div className="text-[11px] uppercase tracking-[0.3em] text-primary font-bold mb-3">Process</div>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">From brief to delivery in 4 weeks.</h2>
          </Reveal>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-7 left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-[#2958FF] via-[#6C63FF] to-[#F6B91A] rounded-full origin-left"
               style={{ animation: "line-grow 1.6s cubic-bezier(0.16,1,0.3,1) forwards" }} />
          <div className="grid md:grid-cols-4 gap-8">
            {timeline.map((t, i) => (
              <Reveal key={t.week} delay={i * 150}>
                <div className="relative text-center md:text-left">
                  <div className="relative z-10 mx-auto md:mx-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl"
                    style={{ background: "linear-gradient(135deg, #2958FF, #6C63FF)" }}>
                    <t.icon size={22} />
                    <span className="absolute -inset-1 rounded-2xl border-2 border-[#2958FF]/30 animate-pulse-ring" />
                  </div>
                  <div className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[#F6B91A] font-bold">{t.week}</div>
                  <h3 className="mt-1.5 text-xl font-display font-bold text-foreground">{t.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL — dark premium ============ */}
      <section className="container">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0B1220] text-white p-8 md:p-14">
          <div className="absolute inset-0 bg-grid-soft opacity-40" />
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#2958FF]/30 blur-3xl animate-aurora" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#6C63FF]/30 blur-3xl animate-aurora-2" />

          <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
            {/* Left — photo + play */}
            <Reveal>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden gradient-border"
                   style={{ background: "linear-gradient(135deg, #1a2545, #0B1220)" }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <button className="relative w-20 h-20 rounded-full bg-white/95 text-[#2958FF] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                      <Play size={26} className="ml-1" fill="currentColor" />
                      <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-pulse-ring" />
                    </button>
                  </div>
                </div>
                {/* Floating metric chips */}
                <div className="absolute top-5 left-5 glass-card gradient-border rounded-2xl px-4 py-2.5 animate-float-y">
                  <div className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Entities</div>
                  <div className="text-xl font-display font-bold text-primary">70+</div>
                </div>
                <div className="absolute bottom-5 left-5 glass-card gradient-border rounded-2xl px-4 py-2.5 animate-float-y-slow">
                  <div className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Faster</div>
                  <div className="text-xl font-display font-bold text-primary">50%</div>
                </div>
                <div className="absolute top-5 right-5 glass-card gradient-border rounded-2xl px-4 py-2.5 animate-float-y">
                  <div className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Support</div>
                  <div className="text-xl font-display font-bold text-primary">24/7</div>
                </div>
              </div>
            </Reveal>

            {/* Right — review */}
            <Reveal delay={150}>
              <div className="relative glass-card gradient-border rounded-3xl p-7 text-foreground">
                <div className="flex items-center gap-1 text-[#F6B91A] mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg md:text-xl font-display leading-snug">
                  "Nash Squared — 70+ legal entities, 9 countries, 6 ISVs. BAU operations, financial process automation, and analytics — managed as one dedicated programme."
                </p>
                <div className="mt-5 pt-5 border-t border-foreground/10 text-sm text-foreground/70 italic">
                  Tier-1 capability. SMB accountability. Built to last.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CINEMATIC CTA ============ */}
      <section className="container pb-20">
        <div className="relative overflow-hidden rounded-[28px] p-12 md:p-20 text-center text-white"
             style={{ background: "linear-gradient(135deg, #0B1220 0%, #1a2545 60%, #2958FF 130%)" }}>
          <div className="absolute -top-40 -left-20 w-[600px] h-[600px] rounded-full bg-[#2958FF]/40 blur-3xl animate-aurora" />
          <div className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-[#6C63FF]/40 blur-3xl animate-aurora-2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#F6B91A]/15 blur-3xl animate-aurora" />
          <div className="absolute inset-0 bg-grid-soft opacity-30" />

          <div className="relative">
            <Reveal>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
                Let's build
                <br />
                <span className="text-gradient-flow">your team.</span>
              </h2>
              <p className="mt-6 text-lg md:text-xl text-white/70 max-w-xl mx-auto">
                Tell us what you need. We can have your team ready in under 4 weeks.
              </p>
              <a
                href="/contact"
                className="group relative mt-10 inline-flex items-center gap-2 px-9 py-4 rounded-full font-bold text-[#0B1220] shadow-2xl hover:-translate-y-1 transition-all overflow-hidden"
                style={{ background: "linear-gradient(135deg, #F6B91A, #FFD466)" }}
              >
                <span className="absolute inset-0 animate-shimmer-sweep bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                <span className="relative">Start the Conversation</span>
                <ArrowRight size={18} className="relative group-hover:translate-x-1.5 transition-transform" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----- 3D tilt feature card ----- */
function TiltCard({ children, delay = 0, glow = "#2958FF" }: { children: React.ReactNode; delay?: number; glow?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setT({ x: -py * 5, y: px * 5 });
  };
  return (
    <Reveal delay={delay}>
      <div style={{ perspective: "1000px" }}>
        <div
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={() => setT({ x: 0, y: 0 })}
          className="group relative h-full bg-card border border-border rounded-[28px] p-7 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
          style={{
            transform: `rotateX(${t.x}deg) rotateY(${t.y}deg)`,
            transformStyle: "preserve-3d",
            boxShadow: `0 20px 40px -20px ${glow}40`,
          }}
        >
          <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               style={{ background: `radial-gradient(400px circle at 50% 0%, ${glow}15, transparent 60%)` }} />
          <div className="relative">{children}</div>
        </div>
      </div>
    </Reveal>
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