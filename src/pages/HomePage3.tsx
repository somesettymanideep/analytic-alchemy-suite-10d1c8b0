import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import sapLogo from "@/assets/logos/sap-v3.png";
import microsoftLogo from "@/assets/logos/microsoft-v3.png";
import oracleLogo from "@/assets/logos/oracle-v3.png";
import awsLogo from "@/assets/logos/aws-v3.png";
import azureLogo from "@/assets/logos/azure-v3.png";
import googleCloudLogo from "@/assets/logos/google-cloud-v3.png";
import snowflakeLogo from "@/assets/logos/snowflake-v3.png";
import harveyNashLogo from "@/assets/logos/harvey-nash-v3.png";
import gbtecLogo from "@/assets/logos/gbtec-v3.png";
import aupingLogo from "@/assets/logos/auping-v3.png";
import databricksLogo from "@/assets/logos/databricks-v3.png";
import cratedbLogo from "@/assets/logos/cratedb-v3.png";
import adamiLogo from "@/assets/logos/adami-v3.png";
import ctacLogo from "@/assets/logos/ctac-v3.png";
import migrationSapImg from "@/assets/banners/banner-sap-s4hana.jpg";
import migrationAxImg from "@/assets/solutions/ax-data-migration.jpg";
import migrationDataImg from "@/assets/solutions/snowflake-elastic.jpg";
import migrationBcImg from "@/assets/solutions/bc-finance.jpg";
import migrationEdtImg from "@/assets/edt/partners-hero.jpg";
import { ArrowRight, ArrowsClockwise, ChartLine, CheckCircle, ClipboardText, CloudArrowUp, Compass, Cpu, Database, Download, Gauge, Globe, Handshake, Lock, Play, Robot, ShieldCheck, SquaresFour, Stack, Star, Users, Wallet } from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// ============ HERO ============
function Hero() {
  // network graph nodes (in a -100..100 viewBox space)
  const nodes = [
    { x: -55, y: -40 },
    { x: -10, y: -55 },
    { x: 30, y: -30 },
    { x: 65, y: -10 },
    { x: 55, y: 30 },
    { x: 15, y: 15 },
    { x: -30, y: 25 },
    { x: 5, y: 50 },
    { x: -60, y: 55 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 2], [5, 6], [6, 0], [6, 7], [7, 4], [7, 8], [8, 6], [1, 5], [2, 5],
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#000A5C] via-[#001A80] to-[#000733] text-white">
      {/* stars */}
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute -left-40 top-40 w-[420px] h-[420px] rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute right-0 bottom-0 w-[520px] h-[520px] rounded-full bg-[#0060F0]/10 blur-[160px]" />

      <div className="container relative pt-24 pb-28 md:pt-32 md:pb-36 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0060F0] animate-pulse" />
            Enterprise AI Data Management Platform
          </span>
          <h1 className="mt-8 font-heading font-bold leading-[1.05] tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            MOST TRANSFORMATIONS
            <br />
            FAIL AT THE{" "}
            <span className="bg-gradient-to-r from-[#3B7EFF] via-[#0060F0] to-[#0050D0] bg-clip-text text-transparent">
              DATA LAYER.
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-lg">
            We make sure yours does not. A Dutch–Indian Data, AI &amp; ERP transformation company. We migrate, govern, and build on top of your data —{" "}
            <span className="text-white font-semibold">50%+ faster</span> with{" "}
            <span className="text-[#3B7EFF] font-semibold">BlueGecko</span>, our AI-native platform.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full btn-cta font-semibold px-6 py-3.5 shadow-[0_10px_30px_-8px_rgba(0,96,240,0.6)] transition">
              Book Assessment <ArrowRight className="w-4 h-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link to="/bluegecko" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3.5 font-semibold hover:bg-white/10 transition">
              <Play className="w-4 h-4" /> Watch Demo
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#0060F0] text-[#0060F0]" />
              ))}
            </div>
            Trusted by Global Companies
          </div>
        </div>

        {/* Right: network graph */}
        <div className="relative h-[500px] lg:h-[560px]">
          <svg viewBox="-100 -80 200 160" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="hg-node">
                <stop offset="0%" stopColor="#0060F0" />
                <stop offset="60%" stopColor="#0060F0" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0060F0" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="hg-edge" x1="0" x2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {edges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a].x} y1={nodes[a].y}
                x2={nodes[b].x} y2={nodes[b].y}
                stroke="url(#hg-edge)"
                strokeWidth="0.4"
              />
            ))}
            {nodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="6" fill="url(#hg-node)" opacity="0.5">
                  <animate attributeName="r" values="5;9;5" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
                </circle>
                <circle cx={n.x} cy={n.y} r="1.8" fill="#0060F0" />
              </g>
            ))}
          </svg>

          {/* Floating cards */}
          <div className="absolute top-4 left-2 md:left-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/15 px-5 py-4 shadow-2xl w-[220px] animate-float-y-slow hover-scale">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Cpu className="w-4 h-4 text-[#3B7EFF]" /> BlueGecko AI
            </div>
            <div className="mt-2 text-3xl font-bold">98.7%</div>
            <div className="text-xs text-white/60">Data quality score</div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[98%] bg-gradient-to-r from-[#3B7EFF] to-[#0050D0]" />
            </div>
          </div>

          <div className="absolute top-4 right-2 md:right-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/15 px-5 py-4 shadow-2xl w-[230px] animate-float-y hover-scale">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <ShieldCheck className="w-4 h-4 text-[#3B7EFF]" /> Data Governance
            </div>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-3xl font-bold">50%</span>
              <span className="text-xs text-white/60 pb-1">faster adoption</span>
            </div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#3B7EFF] to-[#0050D0] transition-all duration-[1500ms]" style={{ width: "50%" }} />
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:right-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/15 px-5 py-4 shadow-2xl w-[210px] animate-float-y-slow hover-scale">
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Cpu className="w-4 h-4 text-[#3B7EFF]" /> ERP
            </div>
            <div className="mt-2 text-2xl font-bold">S/4HANA · D365</div>
            <div className="mt-3 flex items-end gap-1 h-8">
              {[4, 6, 5, 8, 7, 10, 9, 12].map((h, i) => (
                <div key={i} className="w-2 rounded-sm bg-gradient-to-t from-blue-400 to-blue-200 animate-pulse" style={{ height: `${h * 7}%`, animationDelay: `${i * 120}ms` }} />
              ))}
            </div>
          </div>

          <div className="absolute bottom-6 left-2 md:left-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/15 px-5 py-4 shadow-2xl w-[220px] animate-float-y hover-scale" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Database className="w-4 h-4 text-[#3B7EFF]" /> DWH
            </div>
            <div className="mt-2 text-2xl font-bold">Snowflake · Databricks</div>
            <div className="mt-3 flex gap-1.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-[#3B7EFF] to-[#0050D0] animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ LOGO MARQUEE ============
function LogoStrip() {
  const logos = [
    { name: "SAP", src: sapLogo },
    { name: "Microsoft", src: microsoftLogo },
    { name: "Snowflake", src: snowflakeLogo },
    { name: "Oracle", src: oracleLogo },
    { name: "AWS", src: awsLogo },
    { name: "Azure", src: azureLogo },
    { name: "Google Cloud", src: googleCloudLogo },
    { name: "Harvey Nash", src: harveyNashLogo },
    { name: "GBTEC", src: gbtecLogo },
    { name: "Auping", src: aupingLogo },
    { name: "Databricks", src: databricksLogo },
    { name: "CrateDB", src: cratedbLogo },
    { name: "AdamI", src: adamiLogo },
    { name: "CTAC", src: ctacLogo },
  ];
  const list = [...logos, ...logos, ...logos];
  return (
    <section className="bg-[#000733] text-white py-14 border-y border-white/5">
      <div className="text-center text-xs uppercase tracking-[0.28em] text-white/50">
        Trusted across the modern data stack
      </div>
      <div className="group mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap will-change-transform transform-gpu group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {list.map((l, i) => (
            <img
              key={i}
              src={l.src}
              alt={l.name}
              loading="lazy"
              draggable={false}
              className="h-10 md:h-12 w-auto max-w-none object-contain opacity-80 hover:opacity-100 transition duration-300 shrink-0 select-none rounded-[5px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROBLEM SECTION ============
function ProblemSection() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Poor governance",
      desc: "Untracked lineage and inconsistent ownership stall every initiative.",
    },
    {
      icon: Database,
      title: "Broken ERP migration",
      desc: "Cutovers slip, master data drifts, the business loses trust.",
    },
    {
      icon: Robot,
      title: "AI without quality data",
      desc: "Models hallucinate when fed unreliable, ungoverned sources.",
    },
  ];
  return (
    <section className="bg-[#000A5C] text-white py-24">
      <div className="container grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#3B7EFF]">The Pattern</div>
          <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl leading-[1.05]">
            Three failure modes.
            <br />
            <span className="bg-gradient-to-r from-[#3B7EFF] to-[#0050D0] bg-clip-text text-transparent">
              One root cause.
            </span>
          </h2>
          <p className="mt-6 text-white/70 max-w-md">
            Every failed programme we&apos;ve diagnosed traces back to the same place. Different symptoms, same foundation gap.
          </p>
        </div>
        <div className="space-y-4">
          {items.map((it, i) => (
            <RevealOnScroll key={i} delay={i * 140}>
              <div className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-[#3B7EFF]/30 transition p-5 flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#0060F0]/10 border border-[#0060F0]/30 flex items-center justify-center">
                <it.icon className="w-5 h-5 text-[#3B7EFF]" />
              </div>
              <div>
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-white/60 mt-1">{it.desc}</div>
              </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ENGINEERING PARTNER ============
function EngineeringPartner() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="container">
        <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#0050D0]">Why Nextgenlytics</div>
        <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl text-slate-900 max-w-3xl">
          An engineering partner built for the data layer.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {/* Big card */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1A70] to-[#000A5C] text-white p-8 min-h-[280px]">
            <div className="absolute top-6 right-6 text-xs uppercase tracking-widest text-white/50">Flagship</div>
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#3B7EFF]" />
            </div>
            <h3 className="mt-8 font-heading font-bold text-3xl">Extended Delivery Team</h3>
            <p className="mt-3 text-white/70 max-w-md">
              Senior architects and engineers embedded with your team — onsite in Europe, follow-the-sun delivery from Asia.
            </p>
            <Link to="/edt" className="mt-6 inline-flex items-center gap-2 text-[#3B7EFF] font-medium hover:text-[#5A9AFF]">
              Learn more <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#0060F0]/10 blur-3xl" />
          </div>

          <div className="rounded-3xl bg-white p-6 border border-slate-200">
            <div className="text-xs uppercase tracking-widest text-slate-500">Founded</div>
            <div className="mt-4 font-heading font-bold text-4xl text-slate-900">2022</div>
            <div className="mt-3 text-sm text-slate-600">Built specifically for the modern data stack era.</div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#3B7EFF] to-[#0050D0] p-6 text-[#000A5C]">
            <div className="w-11 h-11 rounded-xl bg-white/25 flex items-center justify-center">
              <Gauge className="w-5 h-5" />
            </div>
            <div className="mt-6 font-heading font-bold text-4xl">50%</div>
            <div className="mt-1 text-sm font-medium">Faster Delivery</div>
          </div>

          <div className="rounded-3xl bg-white p-6 border border-slate-200">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-blue-600" />
            </div>
            <div className="mt-4 font-heading font-semibold text-slate-900">BlueGecko AI Platform</div>
            <div className="mt-2 text-sm text-slate-600">
              Proprietary accelerators for lineage, quality, and migration automation across SAP and Databricks.
            </div>
            <div className="mt-4 flex items-end gap-1 h-8">
              {[4, 6, 5, 8, 7, 10, 8, 12].map((h, i) => (
                <div key={i} className="w-2 rounded-sm bg-gradient-to-t from-blue-500 to-blue-300" style={{ height: `${h * 8}%` }} />
              ))}
            </div>
          </div>

          <div className="md:col-span-2 rounded-3xl bg-slate-900 text-white p-6 flex items-start gap-4">
            <div className="shrink-0 w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
              <Globe className="w-5 h-5 text-[#3B7EFF]" />
            </div>
            <div>
              <div className="font-heading font-semibold text-lg">Onsite Europe Support</div>
              <div className="text-sm text-white/60 mt-1">
                Local presence across DACH and Nordics with delivery hubs in India for 24/7 throughput.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FOUR PRACTICES ============
function FourPractices() {
  const items = [
    {
      icon: SquaresFour,
      count: "5 OFFERINGS",
      title: "SAP Solutions",
      desc: "Data migration, ECC support, Datasphere, BTP integration — partner-enabled implementation.",
      tint: "from-blue-50 to-white",
      ring: "ring-blue-200",
      dot: "bg-blue-600",
      href: "/solutions/sap-s4hana",
    },
    {
      icon: Stack,
      count: "4 OFFERINGS",
      title: "Microsoft Solutions",
      desc: "D365 F&O implementation & AMS, Business Central, AX migration, Fabric engineering.",
      tint: "from-sky-50 to-white",
      ring: "ring-sky-200",
      dot: "bg-sky-600",
      href: "/solutions/microsoft-dynamics-365",
    },
    {
      icon: Robot,
      count: "7 OFFERINGS",
      title: "AI Solutions",
      desc: "BlueGecko AI agents, governance AI, predictive analytics, custom applications, AI testing.",
      tint: "from-[#E6F0FF] to-white",
      ring: "ring-[#5A9AFF]",
      dot: "bg-[#0050D0]",
      href: "/solutions/ai-strategy-and-readiness-assessment",
    },
    {
      icon: Database,
      count: "6 OFFERINGS",
      title: "Data & AI Foundation",
      desc: "Data governance, maturity assessment, organisation training, platform engineering.",
      tint: "from-teal-50 to-white",
      ring: "ring-teal-200",
      dot: "bg-teal-600",
      href: "/solutions/data-governance",
    },
  ];
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="text-center">
          <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#0050D0]">Solutions</div>
          <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl text-slate-900">
            Four practices.
            <br />
            <span className="text-blue-700">One data-first foundation.</span>
          </h2>
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Each solution stands on its own — and each is strengthened by{" "}
            <span className="font-semibold text-slate-900">BlueGecko</span>, our AI-native platform built from real delivery.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <RevealOnScroll key={i} delay={i * 120}>
              <Link to={it.href} className={`group relative block h-full rounded-3xl bg-gradient-to-br ${it.tint} border border-slate-200 p-7 hover:shadow-xl hover:-translate-y-0.5 transition`}>
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-2xl ${it.dot} text-white flex items-center justify-center shadow-lg`}>
                  <it.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] tracking-widest font-semibold text-slate-500 bg-white/70 px-2.5 py-1 rounded-full">
                  {it.count}
                </span>
              </div>
              <h3 className="mt-6 font-heading font-bold text-2xl text-slate-900">{it.title}</h3>
              <p className="mt-3 text-slate-600 text-sm">{it.desc}</p>
              <div className="mt-6 flex items-center justify-end text-sm">
                <span className="inline-flex items-center gap-1 text-blue-700 font-semibold group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        <Link to="/products/bluegecko" className="mt-8 rounded-2xl bg-[#000A5C] border border-white/10 hover:border-[#3B7EFF]/40 transition text-white p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-[0_20px_50px_-25px_rgba(0,96,240,0.5)]">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#5A9AFF]">BlueGecko · AI-native delivery platform</div>
            <div className="mt-2 font-heading font-semibold text-lg text-white">
              One data-first foundation, four practices that compound.
            </div>
          </div>
          <span className="shrink-0 inline-flex items-center gap-2 rounded-full btn-cta font-semibold px-5 py-2.5">
            See the platform <ArrowRight className="w-4 h-4" />
          </span>
        </Link>
      </div>
    </section>
  );
}

// ============ MIGRATION PATHS ============
function MigrationPathsSection() {
  const paths = [
    {
      tag: "ERP · SAP",
      from: "SAP ECC",
      to: "S/4HANA",
      desc: "Clean-core migration with automated data validation, zero-downtime cutover, and lineage you can audit end to end.",
      icon: Database,
      accent: "#3B7EFF",
      href: "/solutions/sap-s4hana",
      image: migrationSapImg,
    },
    {
      tag: "ERP · Microsoft",
      from: "Dynamics AX",
      to: "D365 F&O",
      desc: "Parallel-run migration to the cloud — zero business disruption, lower total cost of ownership, built-in GDPR compliance.",
      icon: ArrowsClockwise,
      accent: "#5A9AFF",
      href: "/solutions/dynamics-ax-migration",
      image: migrationAxImg,
    },
    {
      tag: "Data Platform",
      from: "On-Premise Warehouses",
      to: "Databricks · Snowflake",
      desc: "Consolidate siloed data warehouses into one governed lakehouse — metadata-driven pipelines built and operated at scale.",
      icon: CloudArrowUp,
      accent: "#00C6FF",
      href: "/solutions/databricks",
      image: migrationDataImg,
    },
    {
      tag: "ERP · SMB",
      from: "Legacy Finance Systems",
      to: "Business Central",
      desc: "Our Quick-Start methodology gets General Ledger, AP/AR, and Bank Reconciliation live in as few as 8 to 12 weeks.",
      icon: Wallet,
      accent: "#6C63FF",
      href: "/solutions/business-central",
      image: migrationBcImg,
    },
    {
      tag: "Delivery Model",
      from: "Rotating SI Teams",
      to: "Extended Delivery Team",
      desc: "Trade Big Four rates and rotating consultants for a dedicated, Amsterdam-governed team activated in 2–4 weeks.",
      icon: Handshake,
      accent: "#0060F0",
      href: "/edt",
      image: migrationEdtImg,
    },
  ];
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#000A5C] to-[#000733] text-white py-24">
      <div className="absolute inset-0 bg-grid-soft opacity-30" />
      <div className="container relative">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] uppercase text-[#3B7EFF]">
          <span className="h-px w-6 bg-[#3B7EFF]" />
          Migration Paths
        </div>
        <h2 className="mt-4 font-heading font-bold text-4xl sm:text-5xl leading-[1.05] max-w-2xl">
          Find your migration path — where are you today?
        </h2>

        {/* Desktop: hover-expand strip */}
        <div className="hidden md:flex mt-14 gap-3 h-[420px]">
          {paths.map((p, i) => {
            const isActive = active === i;
            return (
              <Link
                key={p.from}
                to={p.href}
                onMouseEnter={() => setActive(i)}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 ease-out ${
                  isActive ? "flex-[3.4]" : "flex-1"
                }`}
              >
                <div className="absolute inset-0 bg-[#0B1220]" />
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isActive ? "opacity-100 scale-105" : "opacity-35 grayscale-[30%]"
                  }`}
                />
                <div
                  className="absolute inset-0 mix-blend-multiply transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(160deg, ${p.accent}66, transparent 55%)`,
                    opacity: isActive ? 0.18 : 0.55,
                  }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: isActive
                      ? "linear-gradient(to top, #000733 0%, rgba(0,7,51,0.88) 18%, rgba(0,7,51,0.4) 42%, rgba(0,7,51,0.06) 62%, transparent 78%)"
                      : "linear-gradient(to top, #000733 0%, rgba(0,7,51,0.7) 60%, rgba(0,7,51,0.1) 100%)",
                  }}
                />

                {/* collapsed label */}
                <div
                  className={`absolute inset-0 flex items-end p-5 transition-opacity duration-300 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span
                    className="text-sm font-semibold text-white/80 whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {p.from} → {p.to}
                  </span>
                </div>

                {/* expanded content */}
                <div
                  className={`absolute inset-0 p-7 flex flex-col justify-end transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${p.accent}22`, border: `1px solid ${p.accent}55` }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: p.accent }} />
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/50">{p.tag}</div>
                  <div className="mt-2 font-heading font-bold text-xl leading-snug">
                    {p.from}
                    <ArrowRight className="inline w-4 h-4 mx-1.5 -translate-y-0.5" style={{ color: p.accent }} />
                    {p.to}
                  </div>
                  <p className="mt-3 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: p.accent }}>
                    See the path <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden mt-10 space-y-3">
          {paths.map((p, i) => {
            const isOpen = active === i;
            return (
              <div key={p.from} className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03]">
                <button
                  type="button"
                  onClick={() => setActive(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div
                    className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                    style={{ background: `${p.accent}22`, border: `1px solid ${p.accent}55` }}
                  >
                    <p.icon className="w-5 h-5" style={{ color: p.accent }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-widest text-white/50">{p.tag}</div>
                    <div className="font-heading font-semibold">
                      {p.from} → {p.to}
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
                      <Link
                        to={p.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
                        style={{ color: p.accent }}
                      >
                        See the path <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============ NUMBERS ============
function useCountUp(end: number, start: boolean, duration = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(eased * end));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);
  return v;
}

function StatNumber({ end, suffix, delay = 0 }: { end: number; suffix: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal(0.4);
  const [armed, setArmed] = useState(false);
  useEffect(() => {
    if (isVisible) {
      const id = setTimeout(() => setArmed(true), delay);
      return () => clearTimeout(id);
    }
  }, [isVisible, delay]);
  const v = useCountUp(end, armed);
  return (
    <div
      ref={ref}
      className={`font-heading font-bold text-5xl sm:text-6xl tabular-nums transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {v}
      <span className="text-[#3B7EFF]">{suffix}</span>
    </div>
  );
}

function NumbersSection() {
  const stats = [
    { v: 12, s: "", label: "Countries" },
    { v: 17, s: "", label: "Legal Entities" },
    { v: 70, s: "+", label: "Projects" },
    { v: 99, s: "%", label: "Client Satisfaction" },
  ];
  return (
    <section className="bg-[#000733] text-white py-24 relative overflow-hidden">
      <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#3B7EFF]">Index Report</div>
            <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl leading-[1.05]">
              The numbers behind
              <br />
              our delivery.
            </h2>
          </div>
          <a className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <Download className="w-4 h-4" /> Download full report
          </a>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i}>
              <StatNumber end={s.v} suffix={s.s} delay={i * 140} />
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
              <div className="mt-4 h-px bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ INTERACTIVE CHARTS ============
function InteractiveChartsSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  // Bar chart data — delivery speed by quarter (weeks saved)
  const bars = [
    { label: "Q1", value: 32 },
    { label: "Q2", value: 48 },
    { label: "Q3", value: 61 },
    { label: "Q4", value: 74 },
    { label: "Q1+", value: 86 },
  ];
  const maxBar = 100;

  // Line chart data — data quality score climb
  const line = [62, 68, 71, 78, 84, 89, 93, 96, 98];
  const w = 400;
  const h = 140;
  const step = w / (line.length - 1);
  const points = line.map((v, i) => ({
    x: i * step,
    y: h - ((v - 55) / 45) * (h - 20) - 10,
    v,
    label: `M${i + 1}`,
  }));
  const pathD = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaD = `${pathD} L${w},${h} L0,${h} Z`;

  const [barHover, setBarHover] = useState<number | null>(null);
  const [lineHover, setLineHover] = useState<number | null>(null);

  // Line stroke draw-in
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(0);
  useEffect(() => {
    if (pathRef.current) setPathLen(pathRef.current.getTotalLength());
  }, []);

  return (
    <section ref={ref} className="bg-white py-24 border-t border-slate-100">
      <div className="container">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#0050D0]">Live outcomes</div>
          <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl text-slate-900 leading-[1.05]">
            Delivery velocity you can{" "}
            <span className="text-blue-700">measure.</span>
          </h2>
          <p className="mt-5 text-slate-600">
            Hover the chart to inspect quarter-over-quarter gains from BlueGecko-accelerated engagements.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* Bar chart card */}
          <div
            className={`rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-7 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500">Weeks saved</div>
                <div className="mt-1 font-heading font-bold text-2xl text-slate-900">Migration acceleration</div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold">+168% YoY</span>
            </div>

            <div className="mt-8 relative h-56">
              {/* gridlines */}
              <div className="absolute inset-x-0 top-0 bottom-6 flex flex-col justify-between">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="border-t border-dashed border-slate-200" />
                ))}
              </div>
              <div className="absolute inset-0 flex items-end gap-3 pb-6">
                {bars.map((b, i) => {
                  const heightPct = isVisible ? (b.value / maxBar) * 100 : 0;
                  const active = barHover === i;
                  return (
                    <div
                      key={b.label}
                      className="relative flex-1 h-full flex items-end"
                      onMouseEnter={() => setBarHover(i)}
                      onMouseLeave={() => setBarHover(null)}
                    >
                      {active && (
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-lg bg-slate-900 text-white text-xs font-semibold px-2.5 py-1.5 shadow-lg animate-fade-in">
                          {b.value} weeks
                          <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rotate-45 bg-slate-900" />
                        </div>
                      )}
                      <div
                        className={`w-full rounded-t-lg transition-all duration-[900ms] ease-out ${
                          active
                            ? "bg-gradient-to-t from-[#0050D0] to-[#3B7EFF]"
                            : "bg-gradient-to-t from-blue-700 to-blue-400"
                        }`}
                        style={{
                          height: `${heightPct}%`,
                          transitionDelay: `${i * 120}ms`,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              {/* labels */}
              <div className="absolute inset-x-0 bottom-0 flex gap-3">
                {bars.map((b) => (
                  <div key={b.label} className="flex-1 text-center text-xs text-slate-500 font-medium">
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Line chart card */}
          <div
            className={`rounded-3xl border border-slate-200 bg-gradient-to-br from-[#000A5C] to-[#000733] text-white p-7 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/50">Data quality score</div>
                <div className="mt-1 font-heading font-bold text-2xl">9-month uplift</div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[#0060F0]/20 text-[#3B7EFF] font-semibold">98% peak</span>
            </div>

            <div className="mt-8 relative">
              <svg
                viewBox={`0 0 ${w} ${h}`}
                className="w-full h-56"
                onMouseLeave={() => setLineHover(null)}
              >
                <defs>
                  <linearGradient id="ic-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0060F0" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0060F0" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {/* gridlines */}
                {[0.25, 0.5, 0.75].map((f) => (
                  <line key={f} x1={0} x2={w} y1={h * f} y2={h * f} stroke="#ffffff10" strokeDasharray="3 4" />
                ))}

                <path
                  d={areaD}
                  fill="url(#ic-area)"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 900ms ease-out 500ms",
                  }}
                />
                <path
                  ref={pathRef}
                  d={pathD}
                  fill="none"
                  stroke="#0060F0"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: pathLen,
                    strokeDashoffset: isVisible ? 0 : pathLen,
                    transition: "stroke-dashoffset 1600ms ease-out",
                  }}
                />

                {points.map((p, i) => (
                  <g key={i}>
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={lineHover === i ? 5 : 3}
                      fill={lineHover === i ? "#0060F0" : "#000A5C"}
                      stroke="#0060F0"
                      strokeWidth={2}
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: `opacity 400ms ease-out ${800 + i * 90}ms, r 150ms ease-out`,
                      }}
                    />
                    {/* hover hit-area */}
                    <rect
                      x={p.x - step / 2}
                      y={0}
                      width={step}
                      height={h}
                      fill="transparent"
                      onMouseEnter={() => setLineHover(i)}
                    />
                  </g>
                ))}

                {lineHover !== null && (
                  <g>
                    <line
                      x1={points[lineHover].x}
                      x2={points[lineHover].x}
                      y1={0}
                      y2={h}
                      stroke="#0060F0"
                      strokeDasharray="3 4"
                      strokeOpacity={0.5}
                    />
                  </g>
                )}
              </svg>

              {lineHover !== null && (
                <div
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-full rounded-lg bg-[#0060F0] text-[#000A5C] text-xs font-bold px-2.5 py-1.5 shadow-lg animate-fade-in"
                  style={{
                    left: `${(points[lineHover].x / w) * 100}%`,
                    top: `${(points[lineHover].y / h) * 100}%`,
                  }}
                >
                  {points[lineHover].label} · {points[lineHover].v}%
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS ============
function ProcessSection() {
  const stages = [
    { n: "01", title: "Discover", icon: Compass, desc: "Audit data estate, ERP landscape, and target outcomes.", tags: ["Stakeholder interviews", "Source-system inventory", "Outcome mapping"] },
    { n: "02", title: "Assess", icon: ClipboardText, desc: "Score readiness across governance, quality, and architecture.", tags: ["Maturity scoring", "Risk register", "Costed roadmap"] },
    { n: "03", title: "Migrate", icon: ArrowRight, desc: "Execute cutovers with BlueGecko-automated lineage and validation.", tags: ["Automated lineage", "Zero-downtime cutover", "Reconciliation"] },
    { n: "04", title: "Optimize", icon: Gauge, desc: "Tune cost, performance, and AI workloads on the new stack.", tags: ["FinOps tuning", "Query acceleration", "Model evaluation"] },
    { n: "05", title: "Govern", icon: Lock, desc: "Operationalize policies, observability, and ongoing stewardship.", tags: ["Policy as code", "Observability", "Stewardship model"] },
  ];
  const [activeStage, setActiveStage] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-spy: the card whose center is closest to the viewport center becomes active.
  useEffect(() => {
    const onScroll = () => {
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dist = Math.abs(r.top + r.height / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActiveStage(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="bg-[#000733] text-white py-24 border-t border-white/5">
      <div className="container grid lg:grid-cols-[380px_1fr] gap-12 items-start">
        {/* Sticky left rail — stays in view while the stages scroll past */}
        <div className="lg:sticky lg:top-28 self-start">
          <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#3B7EFF]">Process</div>
          <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl leading-[1.05]">
            Five stages.
            <br />
            <span className="text-[#3B7EFF]">Zero surprises.</span>
          </h2>
          <p className="mt-5 text-white/70 max-w-sm">
            A delivery method engineered for enterprise scale — predictable outcomes, measured at every gate.
          </p>

          {/* Progress rail — active step highlights as you scroll */}
          <ul className="mt-8 space-y-1">
            {stages.map((s, i) => {
              const active = activeStage === i;
              return (
                <li key={s.n}>
                  <div
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-300 ${
                      active ? "bg-white/[0.06]" : ""
                    }`}
                  >
                    <span
                      className={`grid place-items-center w-7 h-7 rounded-lg text-xs font-bold shrink-0 transition-all duration-300 ${
                        active
                          ? "bg-[#0060F0] text-white shadow-[0_0_16px_rgba(0,96,240,0.6)]"
                          : "bg-white/5 text-white/50"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span
                      className={`text-sm font-semibold transition-colors duration-300 ${
                        active ? "text-white" : "text-white/50"
                      }`}
                    >
                      {s.title}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — the stage cards */}
        <div className="relative">
          <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10" />
          <div
            className="absolute left-6 top-4 w-px bg-gradient-to-b from-[#3B7EFF] to-[#0060F0] transition-all duration-500 ease-out"
            style={{ height: `${(activeStage / (stages.length - 1)) * 100}%` }}
          />
          <div className="space-y-5">
            {stages.map((s, i) => {
              const active = activeStage === i;
              return (
                <div
                  key={s.n}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="relative pl-16"
                >
                  <div
                    className={`absolute left-0 top-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      active
                        ? "bg-[#0060F0] border-2 border-[#3B7EFF] shadow-[0_0_24px_rgba(0,96,240,0.7)] scale-110"
                        : "bg-[#000A5C] border-2 border-[#0060F0]/50 shadow-[0_0_20px_rgba(0,96,240,0.3)]"
                    }`}
                  >
                    <s.icon className={`w-5 h-5 transition-colors ${active ? "text-white" : "text-[#3B7EFF]"}`} />
                  </div>
                  <div
                    className={`rounded-2xl border p-6 transition-all duration-500 ${
                      active
                        ? "border-[#3B7EFF]/50 bg-white/[0.07] shadow-[0_20px_50px_-25px_rgba(0,96,240,0.5)]"
                        : "border-white/10 bg-white/[0.03]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-widest text-white/50">Stage / {s.n}</div>
                        <h3 className={`mt-1 font-heading font-bold text-2xl transition-colors ${active ? "text-[#5A9AFF]" : ""}`}>{s.title}</h3>
                      </div>
                      <div className={`font-heading font-bold text-4xl transition-colors ${active ? "text-[#3B7EFF]/70" : "text-white/10"}`}>{s.n}</div>
                    </div>

                    {/* One-line preview so collapsed cards don't read as empty */}
                    {!active && (
                      <p className="mt-2 text-sm text-white/45 line-clamp-1">{s.desc}</p>
                    )}

                    {/* Full details reveal for the active (in-view) stage */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        active ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-white/70 text-sm max-w-xl">{s.desc}</p>
                        <div className="mt-4">
                          <div className="text-[10px] font-semibold tracking-[0.24em] uppercase text-[#3B7EFF]/90 mb-2">Key deliverables</div>
                          <div className="flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <span key={t} className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#0060F0]/10 border border-[#3B7EFF]/25 text-[#B8D2FF]">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ CASE STUDIES ============
function CaseStudiesSection() {
  const cases = [
    { stat: "50%", title: "Enterprise ERP Migration", sub: "Reduction in cutover time", desc: "Global manufacturer modernized SAP ECC to S/4HANA across 17 legal entities." },
    { stat: "3.2×", title: "Data Platform Rebuild", sub: "Faster analytics workloads", desc: "European bank consolidated 11 warehouses onto a unified Databricks lakehouse." },
  ];
  return (
    <section className="bg-[#000733] text-white py-24 border-t border-white/5">
      <div className="container">
        <div className="flex items-end justify-between">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl">Case studies.</h2>
          <Link to="/client-work" className="text-sm text-white/70 hover:text-white inline-flex items-center gap-1">All stories <ArrowRight className="w-4 h-4" /></Link>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {cases.map((c, i) => (
            <RevealOnScroll key={i} delay={i * 160}>
              <Link to="/client-work" className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A1A70] to-[#000A5C] border border-white/10 p-8 min-h-[260px] hover:border-[#3B7EFF]/40 transition group h-full block">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[#0060F0]/10 blur-3xl group-hover:bg-[#0060F0]/20 transition" />
              <div className="text-xs uppercase tracking-widest text-[#3B7EFF]">Case Study</div>
              <div className="mt-6 font-heading font-bold text-6xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {c.stat}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-white/50">{c.title}</div>
                  <div className="mt-1 font-semibold">{c.sub}</div>
                  <div className="mt-2 text-sm text-white/60 max-w-md">{c.desc}</div>
                </div>
                <div className="shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#0060F0] group-hover:border-[#0060F0] transition">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ BLUEGECKO PLATFORM ============
function BlueGeckoPlatform() {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <div>
            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-[#0050D0]">Platform</div>
            <h2 className="mt-3 font-heading font-bold text-4xl sm:text-5xl text-slate-900">
              The BlueGecko platform.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md">
            Lineage, observability, and AI-driven migration automation — orchestrated from a single control plane.
          </p>
        </div>

        {/* Browser mockup */}
        <div className="mt-12 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
          <div className="bg-[#000A5C] text-white">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#0060F0]" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <div className="ml-4 text-xs px-3 py-1 rounded-md bg-white/10 text-white/70">bluegecko.ai</div>
            </div>
            <div className="grid grid-cols-[220px_1fr]">
              <div className="border-r border-white/10 p-5 space-y-2 text-sm">
                {["Overview", "Lineage", "Quality", "Migrations", "Models", "Pipelines"].map((it, i) => (
                  <div key={it} className={`px-3 py-2 rounded-lg ${i === 0 ? "bg-[#0060F0]/20 text-[#5A9AFF]" : "text-white/60 hover:bg-white/5"}`}>
                    {it}
                  </div>
                ))}
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { k: "Pipelines", v: "1,284" },
                    { k: "Quality", v: "98.7%" },
                    { k: "Cutovers", v: "12 / 17" },
                  ].map((m) => (
                    <div key={m.k} className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                      <div className="text-[10px] uppercase tracking-widest text-white/50">{m.k}</div>
                      <div className="mt-1 font-heading font-bold text-2xl">{m.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-white/[0.03] border border-white/10 p-4">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Throughput</span>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-white/10">24h</span>
                      <span className="px-2 py-0.5 rounded">7d</span>
                      <span className="px-2 py-0.5 rounded">30d</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 400 120" className="mt-3 w-full h-32">
                    <defs>
                      <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,90 C40,80 80,85 120,70 C160,55 200,60 240,45 C280,30 320,25 360,15 L400,10 L400,120 L0,120 Z" fill="url(#area)" />
                    <path d="M0,90 C40,80 80,85 120,70 C160,55 200,60 240,45 C280,30 320,25 360,15 L400,10" stroke="#60a5fa" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div className="mt-5 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">
                    <CheckCircle className="w-3 h-3" /> Policy enforced
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-400/10 text-blue-300 border border-blue-400/20">
                    <ChartLine className="w-3 h-3" /> AI lineage detected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIAL ============
function Testimonial() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container max-w-3xl">
        <div className="flex gap-0.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#0060F0] text-[#0060F0]" />
          ))}
        </div>
        <blockquote className="font-heading font-semibold text-2xl sm:text-3xl text-slate-900 leading-snug">
          &ldquo;NGSIT transformed our SAP migration. We cut cutover risk in half and shipped governed data products from day one.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 text-white flex items-center justify-center font-semibold">
            C
          </div>
          <div>
            <div className="font-semibold text-slate-900 text-sm">CTO</div>
            <div className="text-xs text-slate-500">Fortune 500 Company</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ FINAL CTA ============
function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#000A5C] to-[#000733] text-white py-24">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#0060F0]/10 blur-[160px]" />
      <div className="container relative text-center">
        <h2 className="font-heading font-bold text-5xl sm:text-6xl leading-[1.05]">
          Ready to Modernize
          <br />
          <span className="bg-gradient-to-r from-[#3B7EFF] to-[#0050D0] bg-clip-text text-transparent">
            Your Enterprise?
          </span>
        </h2>
        <p className="mt-6 text-white/70 max-w-xl mx-auto">
          Book a 45-minute assessment with our principal architects. Walk away with a costed roadmap.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full btn-cta font-semibold px-6 py-3.5">
            Book Assessment <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3.5 font-semibold hover:bg-white/10">
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ PAGE ============
const HomePage3 = () => {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <Navbar />
      <Hero />
      <RevealOnScroll delay={0}><LogoStrip /></RevealOnScroll>
      <RevealOnScroll delay={80}><ProblemSection /></RevealOnScroll>
      <RevealOnScroll delay={120}><EngineeringPartner /></RevealOnScroll>
      <RevealOnScroll delay={80}><FourPractices /></RevealOnScroll>
      <RevealOnScroll delay={120}><MigrationPathsSection /></RevealOnScroll>
      <RevealOnScroll delay={120}><NumbersSection /></RevealOnScroll>
      <RevealOnScroll delay={80}><InteractiveChartsSection /></RevealOnScroll>
      <RevealOnScroll delay={120}><ProcessSection /></RevealOnScroll>
      <RevealOnScroll delay={80}><CaseStudiesSection /></RevealOnScroll>
      <RevealOnScroll delay={120}><BlueGeckoPlatform /></RevealOnScroll>
      <RevealOnScroll delay={80}><Testimonial /></RevealOnScroll>
      <RevealOnScroll delay={120}><FinalCta /></RevealOnScroll>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage3;