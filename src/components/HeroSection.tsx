import { useEffect, useRef, useState } from "react";
import { Database, Cloud, Cpu, Network, BarChart3, Shield, Boxes, Sparkles, Star, Play, ArrowRight } from "lucide-react";

const nodes = [
  { label: "SAP", Icon: Boxes, angle: 0 },
  { label: "D365", Icon: Cpu, angle: 45 },
  { label: "Databricks", Icon: Database, angle: 90 },
  { label: "Snowflake", Icon: Cloud, angle: 135 },
  { label: "Lake", Icon: Network, angle: 180 },
  { label: "AI", Icon: BarChart3, angle: 225 },
  { label: "Govern", Icon: Shield, angle: 270 },
  { label: "Cloud", Icon: Cloud, angle: 315 },
];

export default function HeroSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setP({
        x: (e.clientX - r.left - r.width / 2) / r.width,
        y: (e.clientY - r.top - r.height / 2) / r.height,
      });
    };
    el.addEventListener("mousemove", move);
    return () => el.removeEventListener("mousemove", move);
  }, []);

  const radius = 170;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark-navy text-white noise-overlay">
      {/* radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-[#3B82F6]/20 blur-[160px] animate-mesh" />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full bg-[#FFB000]/10 blur-[180px] animate-mesh" style={{ animationDelay: "-6s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="particle absolute w-1 h-1 rounded-full bg-cyan-300/70"
          style={{
            left: `${(i * 137) % 100}%`,
            top: `${(i * 71) % 100}%`,
            animationDelay: `${(i * 0.6) % 8}s`,
            animationDuration: `${7 + (i % 5)}s`,
          }}
        />
      ))}

      <div className="container relative grid lg:grid-cols-2 gap-14 items-center pt-28 pb-20 md:pt-32">
        {/* LEFT */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-premium text-xs font-semibold tracking-wide mb-8 animate-pop-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Amsterdam · India · Global
          </div>

          <h1 className="font-display font-extrabold leading-[0.98] text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] animate-pop-in" style={{ animationDelay: "120ms" }}>
            Enterprise Data,<br />
            AI &amp; ERP<br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-[#3B82F6] bg-clip-text text-transparent">
              Transformation.
            </span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/70 font-premium leading-relaxed max-w-xl animate-pop-in" style={{ animationDelay: "260ms" }}>
            We migrate, modernize and govern your enterprise data{" "}
            <span className="text-white font-semibold">50% faster</span> with{" "}
            <span className="text-cyan-300 font-semibold">BlueGecko</span>.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 animate-pop-in" style={{ animationDelay: "400ms" }}>
            <a
              href="#contact"
              className="magnetic-btn group inline-flex items-center gap-2 px-7 py-4 rounded-btn font-semibold text-sm bg-gradient-to-r from-cyan-400 to-sky-500 text-[#081A45] shadow-[0_15px_50px_-10px_rgba(56,189,248,0.6)]"
            >
              Book Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#platform"
              className="magnetic-btn inline-flex items-center gap-2 px-7 py-4 rounded-btn font-semibold text-sm glass-premium hover:bg-white/10 text-white"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 animate-pop-in" style={{ animationDelay: "560ms" }}>
            <div className="flex gap-0.5">
              {[0,1,2,3,4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-[#FFB000] text-[#FFB000]" />
              ))}
            </div>
            <span className="text-sm text-white/60 font-premium">Trusted by Global Companies</span>
          </div>
        </div>

        {/* RIGHT — animated AI network */}
        <div ref={stageRef} className="relative h-[540px] md:h-[640px] animate-pop-in" style={{ animationDelay: "300ms", perspective: "1200px" }}>
          <div
            className="absolute inset-0"
            style={{
              transform: `rotateY(${p.x * 10}deg) rotateX(${-p.y * 10}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* orbit rings */}
            <div className="absolute inset-6 rounded-full border border-cyan-400/10" />
            <div className="absolute inset-16 rounded-full border border-cyan-400/20" style={{ animation: "spin 30s linear infinite" }} />
            <div className="absolute inset-28 rounded-full border border-dashed border-sky-400/30" style={{ animation: "spin 18s linear infinite reverse" }} />

            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="-260 -260 520 520">
              <defs>
                <radialGradient id="core">
                  <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#67E8F9" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="ln" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#67E8F9" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#67E8F9" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <circle cx="0" cy="0" r="240" fill="url(#core)" />
              {nodes.map((n) => {
                const rad = (n.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <g key={n.label}>
                    <line x1="0" y1="0" x2={x} y2={y} stroke="url(#ln)" strokeWidth="1" />
                    <circle r="3" fill="#a5f3fc">
                      <animateMotion dur={`${3 + (n.angle % 4)}s`} repeatCount="indefinite" path={`M0,0 L${x},${y}`} />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* nodes */}
            {nodes.map((n) => {
              const rad = (n.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <div key={n.label} className="absolute top-1/2 left-1/2 group" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
                  <div className="relative w-14 h-14 rounded-2xl glass-premium flex items-center justify-center hover:scale-110 hover:border-cyan-300/60 transition-all duration-300">
                    <n.Icon className="w-6 h-6 text-cyan-200" />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 text-[10px] font-semibold text-white/60 whitespace-nowrap">
                    {n.label}
                  </div>
                </div>
              );
            })}

            {/* AI core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-[#3B82F6] shadow-[0_0_80px_rgba(56,189,248,0.8)] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cyan-300/30 animate-ping" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/40 to-transparent backdrop-blur" />
                <div className="relative text-center">
                  <Sparkles className="w-8 h-8 mx-auto text-white drop-shadow" />
                  <div className="text-[10px] font-bold tracking-widest text-white mt-1">BLUEGECKO</div>
                  <div className="text-[8px] tracking-[0.2em] text-white/70">AI CORE</div>
                </div>
              </div>
            </div>
          </div>

          {/* floating glass KPI cards */}
          <div className="absolute top-4 -left-2 md:left-2 glass-premium rounded-2xl px-4 py-3 shadow-2xl"
            style={{ transform: `translate(${p.x * 18}px, ${p.y * 12}px)`, transition: "transform 0.3s ease-out" }}>
            <div className="text-[10px] uppercase tracking-widest text-white/50">Migration Speed</div>
            <div className="text-xl font-bold text-cyan-300 tabular-nums">+50%</div>
          </div>
          <div className="absolute bottom-8 -right-2 md:right-4 glass-premium rounded-2xl px-4 py-3 shadow-2xl"
            style={{ transform: `translate(${-p.x * 18}px, ${-p.y * 12}px)`, transition: "transform 0.3s ease-out" }}>
            <div className="text-[10px] uppercase tracking-widest text-white/50">Uptime</div>
            <div className="text-xl font-bold text-cyan-300 tabular-nums">99.99%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
