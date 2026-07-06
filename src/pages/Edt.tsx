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
import sapLogo from "@/assets/logos/sap-v3.png.asset.json";
import microsoftLogo from "@/assets/logos/microsoft-v3.png.asset.json";
import oracleLogo from "@/assets/logos/oracle-v3.png.asset.json";
import awsLogo from "@/assets/logos/aws-v3.png.asset.json";
import azureLogo from "@/assets/logos/azure-v3.png.asset.json";
import googleCloudLogo from "@/assets/logos/google-cloud-v3.png.asset.json";
import snowflakeLogo from "@/assets/logos/snowflake-v3.png.asset.json";
import databricksLogo from "@/assets/logos/databricks-v3.png.asset.json";
import harveyNashLogo from "@/assets/logos/harvey-nash-v3.png.asset.json";
import gbtecLogo from "@/assets/logos/gbtec-v3.png.asset.json";
import aupingLogo from "@/assets/logos/auping-v3.png.asset.json";
import cratedbLogo from "@/assets/logos/cratedb-v3.png.asset.json";
import adamiLogo from "@/assets/logos/adami-v3.png.asset.json";
import ctacLogo from "@/assets/logos/ctac-v3.png.asset.json";

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
    <div className={`glass-card gradient-border rounded-full px-3.5 py-2 shadow-lg inline-flex items-center gap-2 w-fit max-w-max whitespace-nowrap ${className ?? ""}`}>
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

  const trustBrands = [
    { name: "SAP", src: sapLogo.url },
    { name: "Microsoft", src: microsoftLogo.url },
    { name: "Snowflake", src: snowflakeLogo.url },
    { name: "Oracle", src: oracleLogo.url },
    { name: "AWS", src: awsLogo.url },
    { name: "Azure", src: azureLogo.url },
    { name: "Google Cloud", src: googleCloudLogo.url },
    { name: "Databricks", src: databricksLogo.url },
    { name: "Harvey Nash", src: harveyNashLogo.url },
    { name: "GBTEC", src: gbtecLogo.url },
    { name: "Auping", src: aupingLogo.url },
    { name: "CrateDB", src: cratedbLogo.url },
    { name: "AdamI", src: adamiLogo.url },
    { name: "CTAC", src: ctacLogo.url },
  ];

  const pillars = [
    { icon: Users, title: "Not outsourcing", body: "Your team. Your ways of working. Your outcomes. nextgenlytics operates inside your programme structure, not alongside it.", glow: "#2958FF" },
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
    <div className="space-y-20 md:space-y-24">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary mb-7 animate-reveal-up">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
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
        <div className="mt-16 md:mt-20 relative">
          <div className="text-center text-[11px] uppercase tracking-[0.3em] text-foreground/50 font-semibold mb-6">
            Delivered across the enterprise stack
          </div>
          <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex items-center gap-16 animate-marquee-slow whitespace-nowrap will-change-transform transform-gpu group-hover:[animation-play-state:paused] motion-reduce:animate-none" style={{ width: "max-content" }}>
              {[...trustBrands, ...trustBrands, ...trustBrands].map((b, i) => (
                <img
                  key={i}
                  src={b.src}
                  alt={b.name}
                  loading="lazy"
                  draggable={false}
                  className="h-10 md:h-12 w-auto max-w-none object-contain opacity-80 hover:opacity-100 transition duration-300 shrink-0 select-none rounded-[5px]"
                />
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
                    <div className="text-xs text-foreground/60">Co-Founder & CEO · nextgenlytics</div>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {bento.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className={`group relative h-full min-h-[220px] rounded-[28px] p-6 md:p-7 border border-border bg-gradient-to-br ${b.gradient} bg-card overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-2xl ${b.span}`}>
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
                <div className="absolute top-5 left-5 w-fit max-w-max glass-card gradient-border rounded-2xl px-4 py-2.5 animate-float-y">
                  <div className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Entities</div>
                  <div className="text-xl font-display font-bold text-primary">70+</div>
                </div>
                <div className="absolute bottom-5 left-5 w-fit max-w-max glass-card gradient-border rounded-2xl px-4 py-2.5 animate-float-y-slow">
                  <div className="text-[10px] uppercase tracking-wider text-foreground/60 font-semibold">Faster</div>
                  <div className="text-xl font-display font-bold text-primary">50%</div>
                </div>
                <div className="absolute top-5 right-5 w-fit max-w-max glass-card gradient-border rounded-2xl px-4 py-2.5 animate-float-y">
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
    { n: "01", tag: "Speed", icon: Rocket, title: "Time to Market", body: "In a competitive SI landscape, the firm that can staff a programme in weeks wins the renewal. nextgenlytics reduces your talent activation time from months to weeks.", highlight: "Team ready in 2–4 weeks" },
    { n: "02", tag: "Agility", icon: Gauge, title: "Flexibility", body: "Fixed headcount carries fixed cost. Your EDT scales up and down with your pipeline — team of 3 for discovery, team of 12 for migration, back to 4 for AMS.", highlight: "Scale up or down with your pipeline" },
    { n: "03", tag: "Delivery", icon: ShieldCheck, title: "Quality", body: "Every EDT member is senior, certified, and pre-vetted by nextgenlytics. You are extending your own delivery capability with professionals who operate to your standards.", highlight: "Senior, certified, pre-vetted professionals" },
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

  return <PartnersViewPremium valueProps={valueProps} streams={streams} engagements={engagements} matrix={matrix} />;
}

/* ---------------------- PREMIUM PARTNERS REDESIGN ---------------------- */

type PartnerVP = { n: string; tag: string; icon: any; title: string; body: string; highlight: string };
type PartnerStream = { icon: any; title: string; items: string[] };
type PartnerEng = { title: string; body: string; icon: any };

function PartnersViewPremium({
  valueProps,
  streams,
  engagements,
  matrix,
}: {
  valueProps: PartnerVP[];
  streams: PartnerStream[];
  engagements: PartnerEng[];
  matrix: string[][];
}) {
  const [selectedEng, setSelectedEng] = useState(2);
  const rootRef = useRef<HTMLDivElement>(null);

  // Scroll progress bar
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

  // Bento layout for streams
  const bentoSpan = [
    "md:col-span-2 md:row-span-2", // SAP large
    "md:col-span-2",                // Microsoft medium
    "md:col-span-2 md:row-span-2", // Data Engineering large
    "md:col-span-2",                // AI medium
    "md:col-span-2",                // AMS small/medium
  ];

  return (
    <div ref={rootRef} className="relative">
      <CursorGlow targetRef={rootRef} />

      {/* Scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-primary via-[#2958FF] to-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Global ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[55vw] h-[55vw] rounded-full bg-primary/[0.10] blur-[120px] animate-aurora" />
        <div className="absolute top-1/3 -right-40 w-[50vw] h-[50vw] rounded-full bg-accent/[0.10] blur-[120px] animate-aurora-2" />
        <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#6C63FF]/[0.08] blur-[120px] animate-aurora" />
      </div>

      {/* ============== HERO ============== */}
      <section className="relative pt-16 md:pt-24 pb-20 overflow-hidden">
        {/* Animated grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]">
          <div
            className="absolute inset-0 animate-grid-pan"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(22,54,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,54,184,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        {/* Floating particles */}
        <div className="pointer-events-none absolute inset-0">
          {[...Array(14)].map((_, i) => (
            <span
              key={i}
              className="absolute block w-1.5 h-1.5 rounded-full bg-primary/40 animate-float-y-slow"
              style={{
                top: `${(i * 53) % 90 + 5}%`,
                left: `${(i * 37) % 95 + 2}%`,
                animationDelay: `${(i % 7) * 0.6}s`,
                opacity: 0.4 + ((i % 5) / 10),
              }}
            />
          ))}
        </div>

        <div className="container relative grid lg:grid-cols-[45%_55%] gap-12 lg:gap-10 items-center">
          {/* LEFT */}
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-primary/15 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              <span className="relative inline-flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
                <span className="relative rounded-full w-1.5 h-1.5 bg-accent" />
              </span>
              Built for SI Partners
            </div>
            <h1 className="mt-7 font-display font-bold text-foreground leading-[0.98] tracking-[-0.02em] text-[clamp(2.6rem,6.4vw,5rem)]">
              Scale Your{" "}
              <span className="relative inline-block">
                <span className="text-gradient-flow">Delivery</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-primary via-[#2958FF] to-accent" />
              </span>
              .
              <br />
              Not Your{" "}
              <span className="relative inline-block">
                <span className="text-gradient-flow">Overhead</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-accent via-[#F5B51A] to-primary" />
              </span>
              .
            </h1>
            <p className="mt-7 text-lg md:text-xl text-foreground/75 leading-relaxed max-w-xl">
              Your pipeline grows faster than your team. nextgenlytics's EDT model gives you a pre-assembled{" "}
              <span className="relative inline-block font-semibold text-foreground">
                India Team
                <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent" />
              </span>{" "}
              — activated in weeks, not months. One contract. One invoice. One point of contact.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold shadow-[0_18px_50px_-15px_rgba(22,54,184,0.55)] hover:shadow-[0_22px_60px_-12px_rgba(22,54,184,0.7)] transition-all overflow-hidden hover:-translate-y-0.5 min-h-[48px]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Talk to Our Partner Team</span>
                <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#engagement"
                className="group inline-flex items-center gap-2 bg-white/70 backdrop-blur border border-primary/15 text-foreground px-7 py-4 rounded-full font-semibold hover:bg-white hover:border-primary/30 hover:-translate-y-0.5 transition-all min-h-[48px]"
              >
                <FileText size={16} className="text-primary" /> Download Partner Guide
              </a>
            </div>
            <p className="mt-8 text-sm font-display italic text-foreground/60">
              "Your brand. Your client relationship. nextgenlytics's delivery depth."
            </p>
          </Reveal>

          {/* RIGHT — DASHBOARD SCENE */}
          <Reveal delay={150}>
            <PartnerDashboardScene />
          </Reveal>
        </div>
      </section>

      {/* ============== FLOATING METRICS STRIP ============== */}
      <section className="container -mt-6 md:-mt-10 relative z-10">
        <Reveal>
          <div className="relative rounded-[28px] glass-card gradient-border shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)] p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2">
              {[
                { v: "2–4", suf: " Weeks", label: "Activation Time", Icon: Rocket },
                { v: "1", suf: " Contract", label: "Single Commercial Layer", Icon: FileText },
                { v: "100%", suf: "", label: "Amsterdam Governance", Icon: ShieldCheck },
                { v: "100%", suf: "", label: "Pre-Vetted Team", Icon: Users },
              ].map((m, i) => (
                <div
                  key={m.label}
                  className="group flex items-center gap-4 px-4 md:px-5 py-2 md:border-r md:last:border-r-0 border-primary/10 hover:-translate-y-0.5 transition-all"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="relative inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <m.Icon size={20} />
                    <span className="absolute inset-0 rounded-2xl ring-2 ring-accent/0 group-hover:ring-accent/40 transition-all" />
                  </span>
                  <div>
                    <div className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-tight">
                      {m.v}
                      <span className="text-foreground/60 text-base font-semibold">{m.suf}</span>
                    </div>
                    <div className="text-xs uppercase tracking-[0.16em] text-foreground/55 mt-0.5">{m.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      {/* ============== FEATURE CARDS ============== */}
      <section className="container">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] uppercase tracking-[0.22em] text-accent font-bold mb-3">Why Partners Choose nextgenlytics</div>
            <h2 className="text-4xl md:text-[3.4rem] font-display font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
              Three forces behind every partner win.
            </h2>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {valueProps.map((v, i) => (
            <Reveal key={v.n} delay={i * 120}>
              <article
                className="group relative h-full rounded-[28px] bg-white/70 backdrop-blur border border-white/60 p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:rotate-[1.2deg] hover:shadow-[0_40px_80px_-30px_rgba(22,54,184,0.4)]"
                style={{ boxShadow: "0 10px 40px -20px rgba(15,23,42,0.15)" }}
              >
                {/* gradient border on hover */}
                <span className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                  background: "linear-gradient(135deg, rgba(22,54,184,0.5), rgba(245,181,26,0.5))",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1.5px",
                }} />
                {/* moving glow */}
                <span className="absolute -top-24 -right-24 w-60 h-60 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                <span className="absolute -bottom-24 -left-24 w-60 h-60 rounded-full bg-accent/10 blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />

                <div className="relative flex items-start justify-between">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-[#2958FF] text-primary-foreground shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    <v.icon size={22} />
                  </span>
                  <span className="font-display font-bold text-[3.5rem] leading-none text-foreground/10 group-hover:text-primary/20 transition-colors">
                    {v.n}
                  </span>
                </div>
                <div className="relative mt-6">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-bold">{v.tag}</span>
                  <h3 className="mt-2 text-2xl font-display font-bold text-foreground tracking-tight">{v.title}</h3>
                  <p className="mt-4 text-[15px] text-foreground/70 leading-relaxed">{v.body}</p>
                </div>
                <div className="relative mt-7 pt-5 border-t border-foreground/10 flex items-center gap-2 text-sm font-semibold text-primary">
                  <CheckCircle2 size={16} className="text-accent" /> {v.highlight}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* ============== BENTO — DELIVERY STREAMS ============== */}
      <section className="relative py-20 md:py-28">
        <div className="container">
          <Reveal>
            <div className="max-w-3xl mb-14">
              <div className="text-[11px] uppercase tracking-[0.22em] text-accent font-bold mb-3">Delivery Streams</div>
              <h2 className="text-4xl md:text-[3.4rem] font-display font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
                One India layer. <span className="text-primary">Every stream you sell.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 md:auto-rows-fr gap-5">
            {streams.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div
                  className={`group relative h-full min-h-[260px] rounded-[28px] bg-white/75 backdrop-blur border border-white/60 p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(22,54,184,0.35)] ${bentoSpan[i] || ""}`}
                  style={{ boxShadow: "0 10px 35px -22px rgba(15,23,42,0.18)" }}
                >
                  {/* light sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  {/* corner gradient */}
                  <span className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-colors" />

                  <div className="relative flex items-start justify-between mb-5">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-bold">Stream · 0{i + 1}</div>
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary group-hover:rotate-6 group-hover:scale-110 transition-transform">
                      <s.icon size={20} />
                    </span>
                  </div>
                  <h3 className="relative text-2xl font-display font-bold text-foreground tracking-tight">{s.title}</h3>
                  <ul className="relative mt-4 space-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-[13.5px] text-foreground/75">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-1" />
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

      <SectionDivider />

      {/* ============== COMMERCIAL MODEL — PRICING SELECTOR ============== */}
      <section id="engagement" className="container">
        <div className="grid lg:grid-cols-[0.9fr_1.3fr] gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-accent font-bold mb-3">Commercial Model</div>
            <h2 className="text-4xl md:text-[3.4rem] font-display font-bold text-foreground leading-[1.02] tracking-[-0.02em]">
              No setup.
              <br />
              No overhead.
              <br />
              <span className="text-gradient-flow">Just delivery.</span>
            </h2>
            <p className="mt-7 text-lg text-foreground/70 leading-relaxed">
              Pick the engagement that matches your pipeline. Switch freely as your programme evolves. One contract handles all of them.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-primary/[0.05] border border-primary/10">
              <ShieldCheck size={18} className="text-primary" />
              <span className="text-sm font-semibold text-foreground/80">Amsterdam-governed · India-delivered</span>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {engagements.map((e, i) => {
              const selected = i === selectedEng;
              return (
                <Reveal key={e.title} delay={i * 120}>
                  <button
                    type="button"
                    onClick={() => setSelectedEng(i)}
                    className={`group relative w-full text-left rounded-[28px] p-7 transition-all duration-500 overflow-hidden min-h-[48px] ${
                      selected
                        ? "bg-white border-2 border-primary shadow-[0_30px_70px_-25px_rgba(22,54,184,0.45)] -translate-y-1"
                        : "bg-white/70 backdrop-blur border border-white/60 hover:-translate-y-1 hover:shadow-xl"
                    }`}
                  >
                    {selected && (
                      <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[#F5B51A] to-accent" />
                    )}
                    <div className="flex items-start gap-5">
                      <span className={`inline-flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl transition-all ${selected ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"}`}>
                        <e.icon size={22} />
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-display font-bold text-foreground tracking-tight">{e.title}</h3>
                          {selected && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                              <CheckCircle2 size={11} /> Most Chosen
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-[15px] text-foreground/70 leading-relaxed">{e.body}</p>
                      </div>
                      <ArrowRight size={18} className={`shrink-0 mt-2 transition-all ${selected ? "text-primary translate-x-1" : "text-foreground/30 group-hover:text-primary group-hover:translate-x-1"}`} />
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ============== COMPARISON BOARD ============== */}
      <section className="container">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] uppercase tracking-[0.22em] text-accent font-bold mb-3">Why nextgenlytics</div>
            <h2 className="text-4xl md:text-[3.4rem] font-display font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
              What you need. <span className="text-primary">What we deliver.</span>
            </h2>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="relative rounded-[28px] glass-card gradient-border overflow-hidden shadow-[0_30px_80px_-30px_rgba(15,23,42,0.2)]">
            <div className="sticky top-0 z-10 grid grid-cols-1 md:grid-cols-[1fr_1.5fr] bg-gradient-to-r from-primary to-[#1c2f8a] text-primary-foreground text-xs font-bold uppercase tracking-[0.18em]">
              <div className="px-7 py-5 border-b md:border-b-0 md:border-r border-primary-foreground/15">What you need</div>
              <div className="px-7 py-5">nextgenlytics delivers</div>
            </div>
            <div>
              {matrix.map(([k, v], i) => (
                <div
                  key={k}
                  className={`group grid grid-cols-1 md:grid-cols-[1fr_1.5fr] transition-colors duration-300 ${i % 2 ? "bg-white/40" : "bg-white/70"} hover:bg-primary/[0.06]`}
                >
                  <div className="px-7 py-5 font-semibold text-foreground border-b border-foreground/10 md:border-b md:border-r flex items-center gap-3">
                    <span className="w-7 h-7 inline-flex items-center justify-center rounded-lg bg-primary/10 text-primary text-xs font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {k}
                  </div>
                  <div className="px-7 py-5 text-foreground/80 border-b border-foreground/10 flex items-center gap-3">
                    <span className="relative inline-flex w-7 h-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckCircle2 size={16} className="transition-transform group-hover:scale-110" />
                    </span>
                    <span>{v}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============== CINEMATIC CTA ============== */}
      <section className="container py-24 md:py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] p-12 md:p-20 text-center" style={{ background: "linear-gradient(135deg, #050a26 0%, #0a1547 50%, #050a26 100%)" }}>
            {/* aurora layers */}
            <div className="absolute -top-32 -left-32 w-[36rem] h-[36rem] rounded-full bg-primary/40 blur-[120px] animate-aurora" />
            <div className="absolute -bottom-32 -right-32 w-[36rem] h-[36rem] rounded-full bg-accent/30 blur-[120px] animate-aurora-2" />
            <div className="absolute inset-0 bg-grid-soft opacity-40" />
            {/* particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(18)].map((_, i) => (
                <span
                  key={i}
                  className="absolute block w-1 h-1 rounded-full bg-white/60 animate-float-y-slow"
                  style={{
                    top: `${(i * 47) % 92 + 4}%`,
                    left: `${(i * 31) % 96 + 2}%`,
                    animationDelay: `${(i % 6) * 0.5}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 backdrop-blur px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 mb-8">
                <Handshake size={12} /> Partner Programme
              </div>
              <h2 className="text-4xl md:text-[4.5rem] font-display font-bold text-white leading-[1] tracking-[-0.02em]">
                Let's Build
                <br />
                Your Delivery Engine.
              </h2>
              <p className="mt-7 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                We'll tell you exactly what we can activate, who's on the team, and when they start.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold shadow-[0_20px_60px_-15px_rgba(245,181,26,0.6)] hover:shadow-[0_25px_70px_-12px_rgba(245,181,26,0.8)] hover:-translate-y-0.5 transition-all overflow-hidden min-h-[48px]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative">Start the Partner Conversation</span>
                  <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1.5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur text-white px-8 py-4 rounded-full font-bold hover:bg-white/15 hover:-translate-y-0.5 transition-all min-h-[48px]"
                >
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

function SectionDivider() {
  return (
    <div className="container py-2">
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_18px_4px_rgba(245,181,26,0.45)]" />
      </div>
    </div>
  );
}

function PartnerDashboardScene() {
  const ref = useRef<HTMLDivElement>(null);
  // 3D parallax on mouse move
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
      const y = ((e.clientY - r.top) / r.height - 0.5) * -12;
      el.style.transform = `perspective(1100px) rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const onLeave = () => { el.style.transform = "perspective(1100px) rotateY(0) rotateX(0)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);

  return (
    <div className="relative" style={{ perspective: "1100px" }}>
      <div className="absolute -inset-6 bg-gradient-to-tr from-primary/20 via-[#6C63FF]/15 to-accent/20 rounded-[36px] blur-3xl" />
      <div
        ref={ref}
        className="relative rounded-[28px] gradient-border bg-white/80 backdrop-blur-xl shadow-[0_40px_100px_-30px_rgba(15,23,42,0.35)] overflow-hidden animate-float-y-slow transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* dashboard header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-foreground/5 bg-white/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/60">nextgenlytics · Partner Console</span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
          </span>
        </div>

        <div className="p-6 grid grid-cols-6 gap-4">
          {/* Pipeline progress */}
          <div className="col-span-6 md:col-span-4 rounded-2xl bg-gradient-to-br from-primary to-[#2958FF] text-primary-foreground p-5 shadow-lg shadow-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-soft opacity-40" />
            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/70 font-bold">Active Pipeline</div>
                <div className="mt-2 text-3xl font-display font-bold tracking-tight">€ 4.8M</div>
                <div className="text-xs text-white/70 mt-1">Across 12 partner programmes</div>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/15 px-2 py-1 rounded-full">
                <TrendingUp size={12} /> +28%
              </span>
            </div>
            <div className="relative mt-5">
              <div className="flex justify-between text-[10px] text-white/70 mb-1.5 font-semibold uppercase tracking-wider">
                <span>Discovery</span><span>Build</span><span>Migrate</span><span>AMS</span>
              </div>
              <div className="h-2 rounded-full bg-white/15 overflow-hidden">
                <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-accent to-[#F5B51A] shadow-[0_0_18px_rgba(245,181,26,0.6)]" />
              </div>
            </div>
          </div>

          {/* AI assistant */}
          <div className="col-span-6 md:col-span-2 rounded-2xl bg-white border border-foreground/5 p-5 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-2">
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#6C63FF] to-primary text-primary-foreground">
                <Bot size={16} />
              </span>
              <div>
                <div className="text-xs font-bold text-foreground">AI Assistant</div>
                <div className="text-[10px] text-foreground/60">Pipeline insight</div>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-foreground/70 leading-snug">
              Staffing for <span className="font-semibold text-primary">Acme S/4HANA</span> is on track — team ready in <span className="font-semibold">11 days</span>.
            </p>
            <div className="mt-3 flex gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </div>

          {/* Contract card */}
          <div className="col-span-3 md:col-span-2 rounded-2xl border border-foreground/10 bg-white p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">Contract</div>
            <div className="mt-1 font-display font-bold text-foreground text-base">MSA · v3.2</div>
            <div className="mt-2 text-[11px] text-foreground/60">1 doc · 1 invoice · 1 POC</div>
            <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full">
              <CheckCircle2 size={11} /> Signed
            </div>
          </div>

          {/* Timeline */}
          <div className="col-span-3 md:col-span-2 rounded-2xl border border-foreground/10 bg-white p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">Activation</div>
            <div className="mt-1 font-display font-bold text-foreground text-base">Week 03 / 04</div>
            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4].map((w) => (
                <span key={w} className={`flex-1 h-1.5 rounded-full ${w <= 3 ? "bg-primary" : "bg-foreground/10"}`} />
              ))}
            </div>
            <div className="mt-2 text-[11px] text-foreground/60">Team handover Friday</div>
          </div>

          {/* Project status */}
          <div className="col-span-6 md:col-span-2 rounded-2xl border border-foreground/10 bg-white p-4 shadow-sm">
            <div className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold">Status</div>
            <div className="mt-2 space-y-2">
              {[
                { l: "Discovery", v: "On track", c: "emerald" },
                { l: "Build", v: "On track", c: "emerald" },
                { l: "Cutover", v: "Planning", c: "amber" },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between text-[11px]">
                  <span className="text-foreground/70">{r.l}</span>
                  <span className={`font-semibold ${r.c === "emerald" ? "text-emerald-600" : "text-amber-600"}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating tech pills */}
      <FloatPill className="absolute -top-4 -left-3 animate-float-y" label="SAP" color="#1636B8" />
      <FloatPill className="absolute -top-3 right-6 animate-float-y-slow" label="Microsoft" color="#2958FF" />
      <FloatPill className="absolute -bottom-3 left-8 animate-float-y-slow" label="Azure" color="#6C63FF" />
      <FloatPill className="absolute -bottom-5 -right-3 animate-float-y" label="Databricks" color="#F5B51A" />
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
      <div className="pt-28 md:pt-32 pb-8 md:pb-10 bg-[#f5f7fa]">
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