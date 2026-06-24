import { useEffect, useRef, useState } from "react";
import { Database, Cloud, Shield, BarChart3, Sparkles, Cpu, Network, Boxes } from "lucide-react";

const nodes = [
  { label: "SAP ERP", Icon: Boxes, angle: 0 },
  { label: "Dynamics 365", Icon: Cpu, angle: 45 },
  { label: "Databricks", Icon: Database, angle: 90 },
  { label: "Snowflake", Icon: Cloud, angle: 135 },
  { label: "Data Lake", Icon: Network, angle: 180 },
  { label: "AI Analytics", Icon: BarChart3, angle: 225 },
  { label: "Governance", Icon: Shield, angle: 270 },
  { label: "Cloud Infra", Icon: Cloud, angle: 315 },
];

const floatingCards = [
  { label: "Data Migration", value: "98%", top: "8%", left: "-4%" },
  { label: "AI Governance", value: "SOC 2", top: "12%", right: "-2%" },
  { label: "ERP Modernization", value: "2.4x", bottom: "14%", left: "-6%" },
  { label: "Real-Time Analytics", value: "12ms", bottom: "6%", right: "-4%" },
];

export default function Hero2Section() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [kpi, setKpi] = useState({ migrated: 0, governed: 0, uptime: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setParallax({ x, y });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1800, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setKpi({
        migrated: Math.round(eased * 2400),
        governed: Math.round(eased * 156),
        uptime: +(99 + eased * 0.99).toFixed(2),
      });
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const radius = 160;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-br from-[hsl(230,60%,8%)] via-[hsl(220,60%,10%)] to-[hsl(200,80%,12%)] text-white">
      {/* grid bg */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(190 100% 70%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 100% 70%) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* glow blobs */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-blue-500/30 blur-[140px]" />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        {/* LEFT */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-xs font-semibold mb-7 animate-reveal-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Amsterdam · India · Global
          </div>

          <h1 className="font-heading font-bold leading-[0.95] tracking-tight text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {["MOST", "TRANSFORMATIONS", "FAIL", "AT", "THE"].map((w, i) => (
              <span
                key={w}
                className="block animate-reveal-up"
                style={{ animationDelay: `${100 + i * 80}ms` }}
              >
                {w}
              </span>
            ))}
            <span
              className="block animate-reveal-up bg-gradient-to-r from-cyan-300 via-sky-400 to-teal-300 bg-clip-text text-transparent"
              style={{ animationDelay: "540ms" }}
            >
              DATA LAYER.
            </span>
          </h1>

          <p className="mt-7 text-base md:text-lg text-white/70 leading-relaxed max-w-lg animate-reveal-up delay-500">
            We make sure yours does not. A Dutch–Indian Data, AI & ERP transformation company. We migrate, govern, and build on top of your data —{" "}
            <span className="text-white font-semibold">50%+ faster</span> with{" "}
            <span className="text-cyan-300 font-semibold">BlueGecko</span>, our AI-native platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 animate-reveal-up delay-600">
            <a
              href="#contact"
              className="group relative px-6 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan-400 to-sky-500 text-[hsl(230,80%,12%)] shadow-[0_10px_40px_-10px_rgba(56,189,248,0.6)] hover:shadow-[0_15px_50px_-10px_rgba(56,189,248,0.85)] active:scale-[0.97] transition-all duration-200"
            >
              Book a Data Maturity Assessment
            </a>
            <a
              href="/bluegecko"
              className="px-6 py-3.5 rounded-full font-semibold text-sm border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
            >
              See BlueGecko in Action
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-reveal-up delay-700">
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/40">Trusted on</div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold tracking-widest text-white/60">
              <span>SAP</span>
              <span className="text-white/20">·</span>
              <span>MICROSOFT</span>
              <span className="text-white/20">·</span>
              <span>DATABRICKS</span>
              <span className="text-white/20">·</span>
              <span>SNOWFLAKE</span>
            </div>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] font-semibold tracking-[0.25em] text-white/50">
            <Sparkles className="w-3 h-3 text-cyan-300" /> EST. 2022
          </div>
        </div>

        {/* RIGHT */}
        <div
          ref={containerRef}
          className="relative h-[520px] md:h-[600px] animate-reveal-scale delay-300"
          style={{ perspective: "1200px" }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `rotateY(${parallax.x * 8}deg) rotateX(${-parallax.y * 8}deg)`,
              transition: "transform 0.2s ease-out",
            }}
          >
            {/* outer glow ring */}
            <div className="absolute inset-8 rounded-full border border-cyan-400/10" />
            <div
              className="absolute inset-16 rounded-full border border-cyan-400/20"
              style={{ animation: "spin 30s linear infinite" }}
            />
            <div
              className="absolute inset-24 rounded-full border border-dashed border-sky-400/30"
              style={{ animation: "spin 18s linear infinite reverse" }}
            />

            {/* connection lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="-250 -250 500 500">
              <defs>
                <radialGradient id="coreGlow">
                  <stop offset="0%" stopColor="hsl(190 100% 70%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(190 100% 70%)" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(190 100% 70%)" stopOpacity="0.05" />
                  <stop offset="50%" stopColor="hsl(190 100% 70%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(190 100% 70%)" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <circle cx="0" cy="0" r="220" fill="url(#coreGlow)" />
              {nodes.map((n) => {
                const rad = (n.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <g key={n.label}>
                    <line
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke="url(#lineGrad)"
                      strokeWidth="1"
                    />
                    <circle r="2.5" fill="hsl(190 100% 80%)">
                      <animateMotion
                        dur={`${3 + (n.angle % 4)}s`}
                        repeatCount="indefinite"
                        path={`M0,0 L${x},${y}`}
                      />
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
                <div
                  key={n.label}
                  className="absolute top-1/2 left-1/2 group"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                >
                  <div className="relative w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg shadow-cyan-500/10 hover:scale-110 hover:bg-white/20 hover:border-cyan-300/60 transition-all duration-300">
                    <n.Icon className="w-6 h-6 text-cyan-200" />
                    <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 group-hover:bg-cyan-400/10 transition" />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] font-semibold tracking-wide text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
                    {n.label}
                  </div>
                </div>
              );
            })}

            {/* AI Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-cyan-300 via-sky-400 to-blue-600 shadow-[0_0_60px_rgba(56,189,248,0.7)] flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-cyan-300/30 animate-ping" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/30 to-transparent backdrop-blur" />
                <div className="relative text-center">
                  <Sparkles className="w-7 h-7 mx-auto text-white drop-shadow" />
                  <div className="text-[9px] font-bold tracking-widest text-white/90 mt-0.5">BLUEGECKO</div>
                  <div className="text-[8px] tracking-[0.2em] text-white/70">AI CORE</div>
                </div>
              </div>
            </div>
          </div>

          {/* floating glass cards */}
          {floatingCards.map((c, i) => (
            <div
              key={c.label}
              className="absolute rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 px-4 py-3 shadow-2xl shadow-black/40 animate-reveal-up"
              style={{
                top: c.top,
                left: c.left,
                right: c.right,
                bottom: c.bottom,
                animationDelay: `${600 + i * 120}ms`,
                transform: `translate(${parallax.x * (i % 2 ? 14 : -14)}px, ${parallax.y * (i % 2 ? -10 : 10)}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              <div className="text-[10px] uppercase tracking-widest text-white/50">{c.label}</div>
              <div className="text-lg font-bold text-white mt-0.5">{c.value}</div>
            </div>
          ))}

          {/* KPI ticker */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-3 px-4 py-2.5 rounded-2xl bg-white/8 backdrop-blur-xl border border-white/15 shadow-xl">
            <div className="text-center px-2">
              <div className="text-base font-bold text-cyan-300 tabular-nums">{kpi.migrated.toLocaleString()}</div>
              <div className="text-[9px] uppercase tracking-wider text-white/50">Tables migrated</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center px-2">
              <div className="text-base font-bold text-cyan-300 tabular-nums">{kpi.governed}</div>
              <div className="text-[9px] uppercase tracking-wider text-white/50">Policies live</div>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center px-2">
              <div className="text-base font-bold text-cyan-300 tabular-nums">{kpi.uptime}%</div>
              <div className="text-[9px] uppercase tracking-wider text-white/50">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
