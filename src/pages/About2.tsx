import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";
import {
  ArrowRight,
  Rocket,
  Building2,
  Globe2,
  Cloud,
  Database,
  Cpu,
  Layers,
  ShieldCheck,
  Sparkles,
  MapPin,
  Factory,
  HeartPulse,
  Briefcase,
  ShoppingBag,
  Truck,
  Landmark,
  Bird,
  Eye,
  Zap,
  Waves,
  CheckCircle2,
} from "lucide-react";

/* ============ Design tokens (scoped, dark cinematic) ============ */
const palette = {
  bg: "#08111F",
  surface: "#101C30",
  card: "rgba(255,255,255,0.06)",
  border: "rgba(255,255,255,0.12)",
  primary: "#0A84FF",
  cyan: "#00C2FF",
  accent: "#5B5FFF",
};

/* ============ Cursor Glow ============ */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full opacity-30 blur-3xl z-0"
      style={{ background: "radial-gradient(circle, #0A84FF 0%, transparent 60%)" }}
    />
  );
}

/* ============ 1. Hero ============ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,132,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(10,132,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />
      {/* Moving glow */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ background: `radial-gradient(circle, ${palette.primary}, transparent 70%)` }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ background: `radial-gradient(circle, ${palette.accent}, transparent 70%)` }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
              <Sparkles size={14} /> About Nextgenlytics
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight text-white">
              Engineering<br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Tomorrow's
              </span><br />
              Enterprise.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-300/90 max-w-xl leading-relaxed">
              Helping organizations accelerate Digital Transformation through AI, Data,
              Cloud and Enterprise Applications.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#journey"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_40px_rgba(10,132,255,0.4)] hover:shadow-[0_0_60px_rgba(10,132,255,0.6)] transition-all"
              >
                <span className="flex items-center gap-2">Our Journey <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              </a>
              <a
                href="#industries"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* RIGHT: animated globe with orbiting nodes */}
          <div className="relative h-[500px] hidden lg:flex items-center justify-center">
            {/* Globe */}
            <div className="relative w-[420px] h-[420px]">
              <div className="absolute inset-0 rounded-full border border-cyan-400/20"
                style={{ boxShadow: "inset 0 0 100px rgba(10,132,255,0.2), 0 0 100px rgba(10,132,255,0.15)" }} />
              <div className="absolute inset-4 rounded-full border border-cyan-400/10" />
              <div className="absolute inset-8 rounded-full border border-cyan-400/10" />
              {/* SVG globe lines */}
              <svg className="absolute inset-0 w-full h-full animate-[spin_40s_linear_infinite]" viewBox="0 0 420 420">
                <ellipse cx="210" cy="210" rx="200" ry="80" fill="none" stroke="rgba(0,194,255,0.25)" />
                <ellipse cx="210" cy="210" rx="200" ry="140" fill="none" stroke="rgba(0,194,255,0.2)" />
                <ellipse cx="210" cy="210" rx="140" ry="200" fill="none" stroke="rgba(0,194,255,0.2)" />
                <ellipse cx="210" cy="210" rx="80" ry="200" fill="none" stroke="rgba(0,194,255,0.25)" />
                <circle cx="210" cy="210" r="200" fill="none" stroke="rgba(0,194,255,0.3)" />
              </svg>
              {/* Nodes */}
              {[
                { top: "10%", left: "48%", label: "AMS" },
                { top: "40%", left: "8%", label: "LON" },
                { top: "55%", left: "85%", label: "HYD" },
                { top: "80%", left: "50%", label: "LKO" },
              ].map((n) => (
                <div key={n.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: n.top, left: n.left }}>
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,194,255,0.9)] animate-pulse" />
                    <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] text-cyan-200 font-semibold tracking-wider">{n.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating chips */}
            {[
              { label: "SAP", pos: "top-4 left-0", delay: "0s" },
              { label: "Azure", pos: "top-16 right-4", delay: "1s" },
              { label: "Power BI", pos: "bottom-24 left-2", delay: "2s" },
              { label: "Dynamics", pos: "bottom-6 right-8", delay: "1.5s" },
            ].map((c) => (
              <div
                key={c.label}
                className={`absolute ${c.pos} px-4 py-2 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white text-sm font-semibold shadow-2xl`}
                style={{ animation: `float 4s ease-in-out infinite`, animationDelay: c.delay }}
              >
                {c.label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs">
          <span className="tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </section>
  );
}

/* ============ 2. Company Statistics ============ */
function StatCard({ value, suffix, label, i }: { value: number; suffix: string; label: string; i: number }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div
      ref={ref}
      className="group relative rounded-3xl p-8 backdrop-blur-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all hover:-translate-y-2 hover:border-cyan-400/40"
      style={{ animationDelay: `${i * 80}ms` }}
    >
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background: "radial-gradient(circle at top, rgba(10,132,255,0.2), transparent 70%)" }} />
      <div className="relative">
        <div className="text-5xl md:text-6xl font-black text-white tracking-tight">
          {value === 100 ? "100" : count}{suffix}
        </div>
        <div className="mt-3 text-sm font-medium text-slate-400 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: 2022, suffix: "", label: "Founded" },
    { value: 3, suffix: "+", label: "Global Markets" },
    { value: 250, suffix: "+", label: "Enterprise Projects" },
    { value: 2, suffix: "", label: "Offshore Centers" },
    { value: 40, suffix: "+", label: "Business KPIs" },
    { value: 100, suffix: "%", label: "AI Driven" },
  ];
  return (
    <section className="container py-24 md:py-32 relative">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {stats.map((s, i) => (
          <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} i={i} />
        ))}
      </div>
    </section>
  );
}

/* ============ 3. Interactive Timeline ============ */
function Timeline() {
  const [active, setActive] = useState(0);
  const milestones = [
    {
      year: "2022",
      title: "Founded in Amsterdam",
      points: ["Data Advisory", "Cloud Consulting", "Enterprise Analytics"],
      chip: "Amsterdam Skyline",
      icon: Building2,
    },
    {
      year: "2023",
      title: "First Netherlands Customer",
      points: ["Hyderabad Delivery Center", "Data Strategy", "Digital Transformation", "Analytics"],
      chip: "Delivery Scale",
      icon: Globe2,
    },
    {
      year: "2024",
      title: "Expanded into AI",
      points: ["SAP", "Dynamics 365", "Salesforce", "Business Applications"],
      chip: "AI Ready",
      icon: Cpu,
    },
    {
      year: "2025",
      title: "UK Customer & BlueGecko Launch",
      points: ["Application Managed Services", "Cloud Infra", "Lucknow Delivery Center", "BlueGecko Launch"],
      chip: "Platform Era",
      icon: Rocket,
    },
  ];
  return (
    <section id="journey" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Our Journey</span>
          <h2 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
            From startup to <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">enterprise platform</span>.
          </h2>
        </div>

        {/* Roadmap */}
        <div className="relative">
          {/* Line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="grid grid-cols-4 gap-4 relative">
            {milestones.map((m, i) => (
              <button
                key={m.year}
                onClick={() => setActive(i)}
                className="flex flex-col items-center group"
              >
                <div className={`relative w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                  active === i
                    ? "bg-gradient-to-br from-cyan-400 to-blue-500 border-cyan-300 shadow-[0_0_30px_rgba(0,194,255,0.6)] scale-110"
                    : "bg-white/5 border-white/20 group-hover:border-cyan-400/50"
                }`}>
                  <m.icon size={18} className="text-white" />
                </div>
                <span className={`mt-4 font-bold text-lg transition-colors ${active === i ? "text-white" : "text-slate-400 group-hover:text-white"}`}>
                  {m.year}
                </span>
              </button>
            ))}
          </div>

          {/* Active card */}
          <div key={active} className="mt-12 animate-fade-in">
            <div className="max-w-4xl mx-auto rounded-3xl p-10 md:p-12 backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/15 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    {milestones[active].chip}
                  </span>
                  <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white">{milestones[active].title}</h3>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {milestones[active].points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:w-48 shrink-0">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/10 border border-white/10 flex items-center justify-center">
                    {(() => { const Icon = milestones[active].icon; return <Icon size={64} className="text-cyan-300" />; })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 4. Who We Are ============ */
function WhoWeAre() {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="container py-24 md:py-32" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-600/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_60px_rgba(0,194,255,0.5)]">
                  <Sparkles size={56} className="text-white" />
                </div>
                <p className="mt-6 text-white/80 text-sm tracking-widest uppercase">Nextgenlytics</p>
              </div>
            </div>
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
          </div>
        </div>
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Who We Are</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            A partner for <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">global enterprises</span>.
          </h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Nextgenlytics partners with global enterprises to modernize data, applications and
            cloud platforms through AI-powered transformation.
          </p>
          <p className="mt-4 text-lg text-slate-300 leading-relaxed">
            From advisory to implementation, we help businesses unlock operational excellence,
            intelligent automation and enterprise-scale innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============ 5. Industries We Transform ============ */
function Industries() {
  const items = [
    { icon: Factory, label: "Manufacturing" },
    { icon: HeartPulse, label: "Healthcare" },
    { icon: Briefcase, label: "Professional Services" },
    { icon: ShoppingBag, label: "Retail" },
    { icon: Truck, label: "Logistics" },
    { icon: Landmark, label: "Finance" },
  ];
  return (
    <section id="industries" className="container py-24 md:py-32">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Industries</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
          Industries we transform.
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {items.map((it) => (
          <div
            key={it.label}
            className="group relative rounded-3xl p-8 backdrop-blur-xl bg-white/[0.04] border border-white/10 hover:-translate-y-2 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, rgba(10,132,255,0.15), transparent)" }} />
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg, rgba(0,194,255,0.5), transparent, rgba(91,95,255,0.5))", padding: 1, WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 border border-white/10 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                <it.icon size={24} className="text-cyan-300" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{it.label}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ 6. Manufacturing Case Study ============ */
function ManufacturingCase() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[2.5rem] p-6 md:p-10 backdrop-blur-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10">
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "linear-gradient(rgba(10,132,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10,132,255,0.5) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 p-8 w-full max-w-sm">
              {[
                { l: "Dealers", v: "250+" },
                { l: "Countries", v: "4" },
                { l: "Months", v: "20" },
                { l: "KPIs", v: "40+" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl p-4 backdrop-blur-xl bg-white/10 border border-white/20">
                  <div className="text-2xl font-black text-white">{s.v}</div>
                  <div className="text-xs text-slate-300 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
            Manufacturing · Digital Transformation
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-black text-white leading-tight">
            Brownfield SAP Migration across 4 countries.
          </h2>
          <p className="mt-6 text-slate-300 leading-relaxed">
            Modern data platform, legacy migration and unified analytics for 250+ dealers over a 20-month program.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Modern Data Platform", "Legacy Migration", "S/4HANA"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300">{t}</span>
            ))}
          </div>
          <Link to="/case-study" className="mt-8 inline-flex items-center gap-2 text-cyan-300 font-semibold hover:gap-3 transition-all">
            Read Case Study <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============ 7. Engagement Journey ============ */
function Engagements() {
  const engagements = [
    {
      n: "01",
      title: "Data Advisory",
      stats: [["32", "Stakeholders"], ["39", "Workshops"], ["1", "Blueprint"]],
      points: ["Current Assessment", "Future Strategy", "Gap Analysis"],
      icon: Layers,
    },
    {
      n: "02",
      title: "SAP S/4HANA Migration",
      stats: [["250+", "Dealers"], ["4", "Countries"], ["20", "Months"]],
      points: ["Data Engineering", "Validation", "Migration"],
      icon: Database,
    },
    {
      n: "03",
      title: "SAP Datasphere",
      stats: [["40+", "KPIs"], ["1", "Unified Layer"], ["∞", "Integrations"]],
      points: ["Marketing", "S/4", "Enterprise Systems"],
      icon: Cloud,
    },
  ];
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Engagement Journey</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
          Advisory → Migration → Analytics.
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 relative">
        {engagements.map((e, i) => (
          <div key={e.n} className="group relative rounded-3xl p-8 backdrop-blur-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-300">ENGAGEMENT {e.n}</span>
              <e.icon size={20} className="text-cyan-300/70" />
            </div>
            <h3 className="mt-4 text-2xl font-bold text-white">{e.title}</h3>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {e.stats.map(([v, l]) => (
                <div key={l} className="rounded-xl p-3 bg-white/5 border border-white/10 text-center">
                  <div className="text-lg font-black text-white">{v}</div>
                  <div className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {e.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
                  {p}
                </li>
              ))}
            </ul>
            {i < engagements.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 text-cyan-400/50">
                <ArrowRight size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ 8. Professional Services Case Study ============ */
function ProfServicesCase() {
  return (
    <section className="container py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 backdrop-blur-2xl bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-indigo-900/40 border border-white/10">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: `radial-gradient(circle, ${palette.cyan}, transparent 70%)` }} />
        <div className="relative">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
            Professional Services · Global Technology Services
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight max-w-3xl">
            Supporting <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">70+ legal entities</span> across 8 countries.
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ["70+", "Legal Entities"],
              ["8", "Countries"],
              ["6", "ISVs"],
              ["4", "MS Platforms"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-2xl p-5 backdrop-blur-xl bg-white/5 border border-white/10">
                <div className="text-3xl md:text-4xl font-black text-white">{v}</div>
                <div className="mt-2 text-sm text-slate-300">{l}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Azure", "Dynamics 365", "Power BI", "Microsoft Fabric"].map((t) => (
              <span key={t} className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-slate-200">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ 9. AMS Services ============ */
function AmsSection() {
  const cards = [
    {
      title: "Application Managed Services",
      subtitle: "Dynamics 365",
      points: ["Business Processes", "Automation", "Support", "Enhancements", "Integration"],
      icon: Zap,
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "Azure",
      points: ["SQL", "Power BI", "Fabric", "Backup", "Disaster Recovery", "Automation"],
      icon: Cloud,
    },
  ];
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">AMS & Cloud</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
          Run, secure, evolve.
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="group relative rounded-3xl p-10 backdrop-blur-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-all overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
              style={{ background: `radial-gradient(circle, ${palette.primary}, transparent)` }} />
            <div className="relative">
              <c.icon size={32} className="text-cyan-300" />
              <p className="mt-4 text-xs uppercase tracking-widest text-cyan-300/70">{c.subtitle}</p>
              <h3 className="mt-2 text-3xl font-bold text-white">{c.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {c.points.map((p) => (
                  <span key={p} className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-slate-300">{p}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ 10. BlueGecko Platform ============ */
function BlueGeckoSection() {
  const products = [
    { name: "Falcon Mapping", desc: "Automated · Governed · Intelligent Mapping", icon: Bird },
    { name: "OwlSight", desc: "AI Data Quality · Detection · Monitoring", icon: Eye },
    { name: "CodeCheetah", desc: "Metadata-Driven ETL · Automation · Pipelines", icon: Zap },
    { name: "OrcaMigrate", desc: "Migration Platform · ETL · Storage · Cloud", icon: Waves },
  ];
  return (
    <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: "linear-gradient(180deg, transparent, rgba(10,132,255,0.08), transparent)" }}>
      <div className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at center, rgba(10,132,255,0.3), transparent 60%)" }} />
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Product Suite</span>
          <h2 className="mt-4 text-5xl md:text-7xl font-black text-white leading-tight">
            Meet <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">BlueGecko</span>
          </h2>
          <p className="mt-6 text-lg text-slate-300">AI-powered data management platform, engineered for the modern enterprise.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div key={p.name} className="group relative rounded-3xl p-8 backdrop-blur-2xl bg-white/[0.05] border border-white/10 hover:border-cyan-400/50 hover:-translate-y-3 transition-all overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "radial-gradient(circle at top, rgba(0,194,255,0.2), transparent 60%)" }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-blue-600/30 border border-cyan-300/30 flex items-center justify-center shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                  <p.icon size={26} className="text-cyan-200" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{p.name}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ 11. Global Presence ============ */
function GlobalPresence() {
  const cities = [
    { name: "Amsterdam", top: "28%", left: "48%" },
    { name: "London", top: "30%", left: "45%" },
    { name: "Hyderabad", top: "55%", left: "68%" },
    { name: "Lucknow", top: "48%", left: "70%" },
  ];
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Global Presence</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
          Four hubs. One network.
        </h2>
      </div>
      <div className="relative rounded-[2rem] p-10 backdrop-blur-xl bg-white/[0.03] border border-white/10 overflow-hidden">
        <div className="relative aspect-[16/8] w-full">
          {/* Faux world map dots grid */}
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(0,194,255,0.5) 1px, transparent 1.5px)",
              backgroundSize: "20px 20px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 90%)",
            }} />
          {cities.map((c) => (
            <div key={c.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: c.top, left: c.left }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-40" style={{ width: 16, height: 16, left: -4, top: -4 }} />
                <div className="w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(0,194,255,0.8)]" />
                <span className="absolute top-3 left-3 text-xs font-semibold text-cyan-100 whitespace-nowrap flex items-center gap-1">
                  <MapPin size={10} /> {c.name}
                </span>
              </div>
            </div>
          ))}
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 50">
            <path d="M48 14 Q56 30 68 27.5" stroke="rgba(0,194,255,0.4)" strokeWidth="0.2" fill="none" strokeDasharray="1" />
            <path d="M45 15 Q60 32 70 24" stroke="rgba(91,95,255,0.4)" strokeWidth="0.2" fill="none" strokeDasharray="1" />
            <path d="M48 14 Q46 20 45 15" stroke="rgba(0,194,255,0.4)" strokeWidth="0.2" fill="none" strokeDasharray="1" />
            <path d="M68 27.5 Q69 26 70 24" stroke="rgba(0,194,255,0.4)" strokeWidth="0.2" fill="none" strokeDasharray="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ============ 12. Why Nextgenlytics ============ */
function WhyNgs() {
  const items = [
    { title: "AI First", desc: "Native intelligence across every engagement.", icon: Cpu },
    { title: "Enterprise Experts", desc: "Two decades of Tier-1 SI heritage.", icon: ShieldCheck },
    { title: "SAP Specialists", desc: "S/4HANA, Datasphere, BTP, Joule.", icon: Database },
    { title: "Cloud Native", desc: "Azure, AWS, Snowflake, Databricks.", icon: Cloud },
    { title: "Business Driven", desc: "Outcomes over deliverables, always.", icon: Sparkles },
    { title: "Global Delivery", desc: "AMS · UK · IN — one operating model.", icon: Globe2 },
  ];
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-2xl mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">Why Nextgenlytics</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-black text-white leading-tight">
          Six reasons that scale.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it) => (
          <div key={it.title} className="group relative rounded-3xl p-8 backdrop-blur-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:-translate-y-1 transition-all">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 border border-white/10 flex items-center justify-center">
              <it.icon size={22} className="text-cyan-300" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">{it.title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============ 13. Client Success Metrics ============ */
function SuccessMetrics() {
  const metrics = [
    { v: 250, s: "+", l: "Dealers" },
    { v: 4, s: "", l: "Countries" },
    { v: 70, s: "+", l: "Legal Entities" },
    { v: 40, s: "+", l: "Enterprise KPIs" },
    { v: 39, s: "", l: "Executive Workshops" },
  ];
  return (
    <section className="container py-24 md:py-32">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
        {metrics.map((m) => {
          const { count, ref } = useCountUp(m.v, 2000);
          return (
            <div key={m.l} ref={ref} className="text-center rounded-3xl p-8 backdrop-blur-xl bg-white/[0.04] border border-white/10">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-transparent">
                {count}{m.s}
              </div>
              <div className="mt-3 text-xs uppercase tracking-widest text-slate-400">{m.l}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ============ 14. CTA ============ */
function CtaBlock() {
  return (
    <section className="container py-24 md:py-32">
      <div className="relative overflow-hidden rounded-[2.5rem] p-12 md:p-20 text-center backdrop-blur-2xl border border-white/10"
        style={{ background: "radial-gradient(ellipse at top, rgba(10,132,255,0.25), rgba(8,17,31,0.9))" }}>
        {/* Particles */}
        <div className="absolute inset-0 opacity-40">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-cyan-300"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: "0 0 8px rgba(0,194,255,0.8)",
              }}
            />
          ))}
        </div>
        <div className="relative">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">
            Ready to Accelerate Your<br />
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">Digital Transformation?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-300">Let's Build What's Next.</p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_40px_rgba(10,132,255,0.4)] hover:shadow-[0_0_60px_rgba(10,132,255,0.7)] transition-all">
              Book Consultation
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Page ============ */
export default function About2() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden" style={{ background: palette.bg }}>
      {/* Ambient gradient mesh */}
      <div className="fixed inset-0 pointer-events-none opacity-60 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${palette.primary}, transparent 70%)` }} />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: `radial-gradient(circle, ${palette.accent}, transparent 70%)` }} />
      </div>
      <CursorGlow />
      <ScrollToTop />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Timeline />
          <WhoWeAre />
          <Industries />
          <ManufacturingCase />
          <Engagements />
          <ProfServicesCase />
          <AmsSection />
          <BlueGeckoSection />
          <GlobalPresence />
          <WhyNgs />
          <SuccessMetrics />
          <CtaBlock />
        </main>
        <Footer />
      </div>
    </div>
  );
}