import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
  GraduationCap,
  Globe2,
  Heart,
  Users,
  Coffee,
  Code2,
  BookOpen,
  CheckCircle2,
  Quote,
  Briefcase,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useCountUp } from "@/hooks/use-count-up";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string; }) {
  const { ref, isVisible } = useScrollReveal(0.12);
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

function MagneticButton({ children, primary = false, onClick, href }: { children: React.ReactNode; primary?: boolean; onClick?: () => void; href?: string; }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ x: (e.clientX - (r.left + r.width / 2)) * 0.25, y: (e.clientY - (r.top + r.height / 2)) * 0.25 });
  };
  const body = (
    <button ref={ref} onMouseMove={handleMove} onMouseLeave={() => setPos({ x: 0, y: 0 })} onClick={onClick}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`group relative inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
        primary
          ? "bg-gradient-to-r from-[#2D7FF9] to-[#5EDFFF] text-[#071A2F] shadow-[0_10px_40px_-10px_rgba(45,127,249,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(94,223,255,0.7)]"
          : "border border-white/15 text-white/90 backdrop-blur-sm bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25"
      }`}>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </button>
  );
  return href ? <a href={href}>{body}</a> : body;
}

function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-[1]"
      style={{ background: `radial-gradient(400px at ${pos.x}px ${pos.y}px, rgba(45,127,249,0.15), transparent 70%)` }} />
  );
}

function GridBg() {
  return (
    <div className="absolute inset-0 opacity-[0.15] pointer-events-none"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
      }} />
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#2D7FF9]/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#5EDFFF]/15 blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>
      <GridBg />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-[#5EDFFF]/40"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, animation: `float-particle ${8 + (i % 6)}s ease-in-out infinite`, animationDelay: `${i * 0.3}s` }} />
        ))}
      </div>
      <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#5EDFFF] animate-pulse" />
              <span className="text-xs font-medium tracking-widest text-white/80 uppercase">nextgenlytics · Careers</span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-heading font-bold text-white leading-[1.02] tracking-tight text-5xl md:text-6xl lg:text-7xl">
              Build the next generation<br />
              <span className="bg-gradient-to-r from-[#5EDFFF] via-[#2D7FF9] to-white bg-clip-text text-transparent">of Enterprise Intelligence.</span>
            </h1>
          </Reveal>
          <Reveal delay={250}>
            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              Founder-led SAP, Microsoft & AI consultancy delivering Tier-1 transformation across Europe.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton primary href="#open-roles">View Open Roles</MagneticButton>
              <MagneticButton href="#culture">Our Culture</MagneticButton>
            </div>
          </Reveal>
        </div>
        <div className="relative h-[520px] hidden lg:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[380px] h-[380px]">
              <div className="absolute inset-0 rounded-full border border-[#2D7FF9]/30" style={{ animation: "spin-slow 40s linear infinite" }}>
                <div className="absolute inset-6 rounded-full border border-[#5EDFFF]/20" />
                <div className="absolute inset-12 rounded-full border border-white/10" />
              </div>
              <div className="absolute inset-0 rounded-full"
                style={{ background: "radial-gradient(circle at 30% 30%, rgba(45,127,249,0.4), transparent 60%), radial-gradient(circle at 70% 70%, rgba(94,223,255,0.3), transparent 60%)", animation: "spin-slow 60s linear infinite reverse" }} />
              {[
                { name: "Amsterdam", x: "20%", y: "25%" },
                { name: "Berlin", x: "75%", y: "20%" },
                { name: "London", x: "10%", y: "55%" },
                { name: "Hyderabad", x: "80%", y: "70%" },
              ].map((c) => (
                <div key={c.name} className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2" style={{ left: c.x, top: c.y }}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#5EDFFF] opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5EDFFF]" />
                  </span>
                  <span className="text-xs font-medium text-white/80 whitespace-nowrap px-2 py-1 rounded-md bg-white/[0.04] backdrop-blur-sm border border-white/10">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
          {[
            { label: "SAP", style: { top: "5%", left: "5%" }, delay: "0s" },
            { label: "Microsoft", style: { top: "12%", right: "0%" }, delay: "0.6s" },
            { label: "Azure", style: { bottom: "20%", left: "0%" }, delay: "1.2s" },
            { label: "Databricks", style: { top: "45%", right: "-4%" }, delay: "1.8s" },
            { label: "AI", style: { bottom: "8%", left: "40%" }, delay: "2.4s" },
            { label: "AWS", style: { bottom: "5%", right: "10%" }, delay: "3s" },
          ].map((p) => (
            <div key={p.label}
              className="absolute px-4 py-2 rounded-full text-xs font-semibold text-white/90 border border-white/10 bg-white/[0.05] backdrop-blur-md shadow-lg"
              style={{ ...p.style, animation: "float-slow 6s ease-in-out infinite", animationDelay: p.delay }}>
              {p.label}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes float-particle { 0%,100%{transform:translate(0,0);opacity:.3} 50%{transform:translate(20px,-30px);opacity:.8} }
        @keyframes float-slow { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes spin-slow { from{transform:rotate(0)} to{transform:rotate(360deg)} }
      `}</style>
    </section>
  );
}

function WhyBento() {
  const certs = [{ name: "AWS", pct: 90 }, { name: "Azure", pct: 85 }, { name: "SAP", pct: 95 }, { name: "Databricks", pct: 80 }];
  return (
    <section id="culture" className="relative py-32 overflow-hidden">
      <div className="container relative">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] text-[#5EDFFF] uppercase mb-4">Chapter 02 · Why nextgenlytics</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.05] tracking-tight">A place engineered for people who care about the craft.</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(220px,auto)] gap-5">
          <Reveal className="md:col-span-4 md:row-span-2">
            <div className="group relative h-full p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0E2A47]/60 to-[#071A2F]/60 backdrop-blur-xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:border-[#2D7FF9]/30 hover:shadow-[0_20px_60px_-20px_rgba(45,127,249,0.5)]">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#2D7FF9]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2D7FF9] to-[#5EDFFF] flex items-center justify-center mb-6 shadow-lg shadow-[#2D7FF9]/30">
                  <Sparkles className="w-7 h-7 text-[#071A2F]" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Senior-led work.</h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-md">Every engagement is architected and shipped by senior practitioners. No pyramid. No handoffs. Just outcomes.</p>
                <div className="mt-8 flex gap-2 items-end">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-4 rounded-full bg-gradient-to-t from-[#2D7FF9]/40 to-[#5EDFFF]/60"
                      style={{ height: `${30 + ((i * 13) % 60)}px`, animation: `bar-pulse 3s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100} className="md:col-span-2">
            <div className="h-full p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-1 transition-all duration-500 hover:border-[#5EDFFF]/30">
              <GraduationCap className="w-8 h-8 text-[#5EDFFF] mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
              <p className="text-white/50 text-sm">Time, budget and mentorship built into the week.</p>
            </div>
          </Reveal>
          <Reveal delay={150} className="md:col-span-2">
            <div className="h-full p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:-translate-y-1 transition-all duration-500">
              <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Certification Roadmap</p>
              <div className="space-y-3">
                {certs.map((c) => (
                  <div key={c.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-white/80 font-medium">{c.name}</span>
                      <span className="text-[#5EDFFF]">{c.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#2D7FF9] to-[#5EDFFF] rounded-full" style={{ width: `${c.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-3">
            <div className="h-full p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:-translate-y-1 transition-all duration-500">
              <Globe2 className="w-8 h-8 text-[#2D7FF9] mb-3" />
              <h3 className="text-xl font-bold text-white mb-4">Global Exposure</h3>
              <div className="flex items-center gap-6 text-white/70">
                {["Europe", "India", "USA"].map((r, i) => (
                  <div key={r} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#5EDFFF]" />
                    <span className="text-sm">{r}</span>
                    {i < 2 && <div className="w-8 h-px bg-gradient-to-r from-[#5EDFFF]/60 to-transparent" />}
                  </div>
                ))}
              </div>
              <svg className="mt-4 w-full h-16" viewBox="0 0 300 60" fill="none">
                <path d="M 20 40 Q 80 5, 150 30 T 280 20" stroke="url(#g1)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                <defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0" stopColor="#2D7FF9" /><stop offset="1" stopColor="#5EDFFF" /></linearGradient></defs>
              </svg>
            </div>
          </Reveal>
          <Reveal delay={250} className="md:col-span-3">
            <div className="h-full p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl hover:-translate-y-1 transition-all duration-500">
              <Heart className="w-8 h-8 text-[#5EDFFF] mb-3" />
              <h3 className="text-xl font-bold text-white mb-4">People First</h3>
              <div className="grid grid-cols-2 gap-3">
                {[{ label: "Vacation", Icon: Coffee }, { label: "Hybrid", Icon: Globe2 }, { label: "Family", Icon: Users }, { label: "Health", Icon: Heart }].map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 bg-white/[0.03]">
                    <Icon className="w-4 h-4 text-[#5EDFFF]" />
                    <span className="text-sm text-white/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@keyframes bar-pulse{0%,100%{transform:scaleY(1);opacity:.7}50%{transform:scaleY(1.2);opacity:1}}`}</style>
    </section>
  );
}

function Stats() {
  const stats = [
    { end: 92, suffix: "%", label: "Retention" },
    { end: 40, suffix: "+", label: "Consultants" },
    { end: 100, suffix: "%", label: "Partner-led" },
    { end: 2400, prefix: "€", label: "Learning budget" },
  ];
  const counters = stats.map((s) => useCountUp(s.end, 2000));
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:border-[#2D7FF9]/30 hover:shadow-[0_20px_50px_-15px_rgba(45,127,249,0.3)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#2D7FF9]/10 to-transparent" />
                <div ref={counters[i].ref} className="relative">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent tabular-nums">
                    {s.prefix}{counters[i].count}{s.suffix}
                  </div>
                  <p className="mt-3 text-sm text-white/60 tracking-wide">{s.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmployeeStory() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0"><div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#2D7FF9]/10 blur-[140px]" /></div>
      <div className="container relative grid lg:grid-cols-5 gap-16 items-center">
        <Reveal className="lg:col-span-2">
          <div className="relative aspect-[4/5] max-w-sm mx-auto">
            <div className="absolute -inset-2 rounded-3xl opacity-70 blur-xl" style={{ background: "linear-gradient(135deg, #2D7FF9, #5EDFFF, #2D7FF9)" }} />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0E2A47] to-[#071A2F] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-gradient-to-br from-[#2D7FF9] to-[#5EDFFF] flex items-center justify-center text-4xl font-bold text-[#071A2F]">E</div>
                <p className="text-white/80 font-semibold">Elena V.</p>
                <p className="text-white/40 text-sm">Principal Consultant</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-3">
          <Quote className="w-12 h-12 text-[#5EDFFF]/40 mb-6" />
          <blockquote className="font-heading text-3xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight">
            I joined to ship outcomes —<br /><span className="text-white/50">not slides.</span>
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-[#5EDFFF] to-transparent" />
            <div>
              <p className="text-white font-semibold">Elena Vasquez</p>
              <p className="text-white/50 text-sm">Principal Consultant, nextgenlytics</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function DayWithUs() {
  const steps = [
    { time: "08:30", label: "Coffee & standup", Icon: Coffee },
    { time: "09:30", label: "Architecture review", Icon: Sparkles },
    { time: "10:30", label: "Deep work", Icon: Code2 },
    { time: "12:30", label: "Lunch", Icon: Heart },
    { time: "13:30", label: "Client workshop", Icon: Users },
    { time: "15:30", label: "Code review", Icon: CheckCircle2 },
    { time: "16:30", label: "Learning hour", Icon: BookOpen },
    { time: "17:30", label: "Done", Icon: ArrowRight },
  ];
  return (
    <section className="relative py-32">
      <div className="container">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <p className="text-xs tracking-[0.3em] text-[#5EDFFF] uppercase mb-4">A day with us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.05]">Rhythm over chaos.</h2>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3 relative">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-[#2D7FF9] via-[#5EDFFF]/40 to-transparent" />
            <div className="space-y-5">
              {steps.map((s, i) => (
                <Reveal key={s.time} delay={i * 60}>
                  <div className="group flex items-center gap-5 pl-1">
                    <div className="relative flex-shrink-0 w-12 h-12 rounded-full border border-white/10 bg-[#0E2A47] backdrop-blur-xl flex items-center justify-center group-hover:border-[#5EDFFF] group-hover:shadow-[0_0_20px_rgba(94,223,255,0.5)] transition-all">
                      <s.Icon className="w-5 h-5 text-[#5EDFFF]" />
                    </div>
                    <div className="flex items-baseline gap-4 flex-1 border-b border-white/5 pb-4">
                      <span className="font-mono text-sm text-white/40 tabular-nums">{s.time}</span>
                      <span className="text-lg text-white/90 font-medium group-hover:text-white transition-colors">{s.label}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 relative h-[500px] hidden lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-[#0E2A47] to-[#071A2F] overflow-hidden">
                <GridBg />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-56 h-56" style={{ perspective: "800px" }}>
                    <div className="absolute inset-0 rounded-2xl border border-[#2D7FF9]/40 bg-[#2D7FF9]/10" style={{ transform: "rotateX(60deg) rotateZ(45deg)", animation: "float-slow 6s ease-in-out infinite" }} />
                    <div className="absolute inset-6 rounded-2xl border border-[#5EDFFF]/40 bg-[#5EDFFF]/10" style={{ transform: "rotateX(60deg) rotateZ(45deg) translateZ(20px)", animation: "float-slow 6s ease-in-out infinite 0.6s" }} />
                    <div className="absolute inset-12 rounded-2xl border border-white/30 bg-white/5" style={{ transform: "rotateX(60deg) rotateZ(45deg) translateZ(40px)", animation: "float-slow 6s ease-in-out infinite 1.2s" }} />
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

const ROLES = [
  { practice: "SAP Practice", title: "Senior SAP Consultant", location: "Amsterdam", mode: "Hybrid", exp: "6+ Years", salary: "€90k – €130k", stack: ["SAP", "S/4HANA", "Fiori", "ECC"], benefits: ["Flexible", "Bonus", "Training", "Insurance"] },
  { practice: "Microsoft Practice", title: "Dynamics 365 Architect", location: "Berlin · Amsterdam", mode: "Hybrid", exp: "8+ Years", salary: "€100k – €140k", stack: ["D365", "Power Platform", "Azure", "BC"], benefits: ["Flexible", "Bonus", "Certifications", "Insurance"] },
  { practice: "AI & Data Practice", title: "Lead AI / Databricks Engineer", location: "Amsterdam", mode: "Hybrid", exp: "5+ Years", salary: "€95k – €135k", stack: ["Databricks", "Azure", "Python", "LLMs"], benefits: ["Flexible", "Learning €2.4k", "Bonus", "Health"] },
];

function RoleCard({ role, i }: { role: (typeof ROLES)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 100}>
      <div className="group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#2D7FF9]/40 hover:shadow-[0_30px_80px_-20px_rgba(45,127,249,0.5)] hover:-translate-y-2">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#2D7FF9]/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative">
          <p className="text-xs tracking-widest text-[#5EDFFF] uppercase mb-3">{role.practice}</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight">{role.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {role.location}</span>
            <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {role.mode}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {role.exp}</span>
          </div>
          <div className="border-t border-white/10 pt-5 mb-5">
            <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Salary</p>
            <p className="text-white font-semibold">{role.salary}</p>
          </div>
          <div className="mb-5">
            <p className="text-xs uppercase tracking-wider text-white/40 mb-3">Technology</p>
            <div className="flex flex-wrap gap-2">
              {role.stack.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-white/80">{t}</span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <p className="text-xs uppercase tracking-wider text-white/40 mb-3">Benefits</p>
            <div className="flex flex-wrap gap-2">
              {role.benefits.map((b) => (
                <span key={b} className="px-3 py-1 rounded-full text-xs font-medium bg-[#2D7FF9]/10 border border-[#2D7FF9]/20 text-[#5EDFFF]">{b}</span>
              ))}
            </div>
          </div>
          <button onClick={() => setOpen(true)} className="w-full group/btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#071A2F] font-semibold text-sm transition-all hover:bg-[#5EDFFF]">
            <span>Apply</span><ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl bg-[#0E2A47] border-white/10 text-white">
          <DialogHeader><DialogTitle className="text-2xl">{role.title}</DialogTitle></DialogHeader>
          <div className="space-y-4 text-white/70 text-sm">
            <p>Join our {role.practice} to lead senior-led, outcome-first work with mid-market and enterprise clients across Europe.</p>
            <p>Send your application to <a href="mailto:careers@ngsit.com" className="text-[#5EDFFF] underline">careers@ngsit.com</a>.</p>
          </div>
        </DialogContent>
      </Dialog>
    </Reveal>
  );
}

function OpenRoles() {
  return (
    <section id="open-roles" className="relative py-32 overflow-hidden">
      <div className="absolute -top-20 -left-40 w-[600px] h-[600px] rounded-full bg-[#2D7FF9]/10 blur-[140px]" />
      <div className="absolute -bottom-20 -right-40 w-[600px] h-[600px] rounded-full bg-[#5EDFFF]/10 blur-[140px]" />
      <div className="container relative">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] text-[#5EDFFF] uppercase mb-4">Chapter 03 · Open Roles</p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-[1.05]">Now hiring.</h2>
            </div>
            <p className="text-white/50 max-w-sm">Selective by design. We hire slowly and mentor deeply.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((r, i) => <RoleCard key={r.title} role={r} i={i} />)}
        </div>
        <Reveal>
          <div className="mt-16 relative p-10 md:p-16 rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br from-[#0E2A47] to-[#071A2F]">
            <div className="absolute -top-32 -right-20 w-96 h-96 rounded-full bg-[#2D7FF9]/25 blur-3xl" />
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight">
                Didn't find your role?<br /><span className="text-[#5EDFFF]">We'll build one.</span>
              </h3>
              <div className="md:justify-self-end">
                <MagneticButton primary href="mailto:careers@ngsit.com">Send Open Application</MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HiringProcess() {
  const steps = [
    { label: "Apply", desc: "Send a short intro & CV." },
    { label: "Intro Call", desc: "30 min with a partner." },
    { label: "Working Session", desc: "Real problem, together." },
    { label: "Offer", desc: "Fast, clear, transparent." },
  ];
  return (
    <section className="relative py-32">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-xs tracking-[0.3em] text-[#5EDFFF] uppercase mb-4">Hiring Process</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.05]">Four steps. No theatre.</h2>
          </div>
        </Reveal>
        <div className="relative">
          <svg className="absolute top-8 left-0 right-0 w-full h-4 hidden md:block" viewBox="0 0 1000 20" preserveAspectRatio="none">
            <path d="M 50 10 L 950 10" stroke="url(#gp)" strokeWidth="1.5" strokeDasharray="6 8" fill="none" />
            <defs><linearGradient id="gp" x1="0" x2="1"><stop offset="0" stopColor="#2D7FF9" stopOpacity="0.1" /><stop offset="0.5" stopColor="#5EDFFF" /><stop offset="1" stopColor="#2D7FF9" stopOpacity="0.1" /></linearGradient></defs>
          </svg>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="group text-center">
                  <div className="mx-auto w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center mb-5 text-white font-bold text-lg group-hover:border-[#5EDFFF] group-hover:shadow-[0_0_30px_rgba(94,223,255,0.5)] group-hover:scale-110 transition-all duration-500">0{i + 1}</div>
                  <h4 className="text-white font-semibold text-lg mb-2">{s.label}</h4>
                  <p className="text-white/50 text-sm opacity-70 group-hover:opacity-100 transition-opacity">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D7FF9]/10 to-transparent" />
        <GridBg />
        <div className="absolute inset-0 opacity-40" style={{ background: "conic-gradient(from 90deg at 50% 60%, transparent, rgba(94,223,255,0.15), transparent 20%, transparent 80%, rgba(45,127,249,0.15), transparent)" }} />
      </div>
      <div className="container relative text-center">
        <Reveal>
          <h2 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.02] tracking-tight">
            Ready to build<br />
            <span className="bg-gradient-to-r from-[#5EDFFF] to-[#2D7FF9] bg-clip-text text-transparent">what matters?</span>
          </h2>
        </Reveal>
        <Reveal delay={200}><p className="mt-8 text-xl text-white/60">Let's talk.</p></Reveal>
        <Reveal delay={350}>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <MagneticButton primary href="#open-roles">Apply Now</MagneticButton>
            <MagneticButton href="/contact">Start a Conversation</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function CareersPage2() {
  return (
    <div className="min-h-screen bg-[#071A2F] text-white overflow-x-hidden">
      <div className="relative z-20"><Navbar /></div>
      <CursorGlow />
      <main className="relative z-[2]">
        <Hero />
        <WhyBento />
        <Stats />
        <EmployeeStory />
        <DayWithUs />
        <OpenRoles />
        <HiringProcess />
        <FinalCta />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
