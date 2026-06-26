import { useEffect, useRef, useState } from "react";
import { Sparkles, Map, Code2, Eye, Database, ArrowRight } from "lucide-react";

const modules = [
  { name: "Falcon Mapping", short: "Falcon", Icon: Map, desc: "AI-driven schema & data mapping", angle: -135 },
  { name: "Owl Sight", short: "Owl Sight", Icon: Eye, desc: "Observability for data pipelines", angle: -45 },
  { name: "Code Cheetah", short: "Code Cheetah", Icon: Code2, desc: "AI code generation & refactor", angle: 135 },
  { name: "Orca Migrate", short: "Orca", Icon: Database, desc: "End-to-end ERP & data migration", angle: 45 },
];

const chips = [
  { value: "70%", label: "Less Mapping", top: "6%", left: "4%" },
  { value: "3X", label: "Better Quality", top: "10%", right: "2%" },
  { value: "90%", label: "Faster Setup", bottom: "10%", left: "2%" },
  { value: "50%", label: "Engineering Saved", bottom: "6%", right: "4%" },
];

export default function BlueGeckoPlatformSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [autoIdx, setAutoIdx] = useState(0);
  const [radius, setRadius] = useState(170);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      setParallax({
        x: ((e.clientX - r.left) / r.width - 0.5) * 24,
        y: ((e.clientY - r.top) / r.height - 0.5) * 24,
      });
    };
    const onLeave = () => setParallax({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setAutoIdx((i) => (i + 1) % modules.length), 2400);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const compute = () => {
      const r = el.getBoundingClientRect();
      // leave ~70px padding for node card width
      const max = Math.min(r.width, r.height) / 2 - 80;
      setRadius(Math.max(110, Math.min(180, max)));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const highlight = activeIdx ?? autoIdx;

  return (
    <section className="relative overflow-hidden text-white py-24 md:py-32"
      style={{ background: "linear-gradient(160deg,#0B4BFF 0%,#062F92 45%,#031C58 100%)" }}>
      {/* gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full blur-[130px] opacity-50"
        style={{ background: "radial-gradient(circle, #57A6FF, transparent 70%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full blur-[140px] opacity-40"
        style={{ background: "radial-gradient(circle, #0B4BFF, transparent 70%)" }} />
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
      {/* particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <span key={i}
            className="absolute w-1 h-1 rounded-full bg-white/50"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              animation: `bg-float ${6 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
              opacity: 0.4 + ((i % 4) * 0.1),
            }}
          />
        ))}
      </div>

      <div className="container relative grid lg:grid-cols-[55%_45%] gap-12 items-center">
        {/* LEFT */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-semibold mb-7">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
            BLUEGECKO · AI-NATIVE PLATFORM
          </div>
          <h2 className="font-heading font-bold leading-[1.05] tracking-tight text-4xl md:text-5xl lg:text-[3.25rem]">
            One platform.{" "}
            <span className="bg-gradient-to-r from-[#57A6FF] via-white to-[#FFC72C] bg-clip-text text-transparent">
              Every layer of your data journey.
            </span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">
            BlueGecko is the AI engine that powers our migrations, mappings, code generation and
            observability. Four specialized agents, one accountable platform — engineered to make
            enterprise transformation <span className="text-white font-semibold">50%+ faster</span>
            {" "}with <span className="text-[#FFC72C] font-semibold">3X</span> the delivery quality.
          </p>

          <div className="mt-9 grid grid-cols-2 gap-4 max-w-md">
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur px-5 py-4">
              <div className="text-3xl font-bold text-[#57A6FF]">50%+</div>
              <div className="text-[11px] uppercase tracking-widest text-white/60 mt-1">Faster delivery</div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur px-5 py-4">
              <div className="text-3xl font-bold text-[#FFC72C]">3X</div>
              <div className="text-[11px] uppercase tracking-widest text-white/60 mt-1">Better quality</div>
            </div>
          </div>

          <a href="/bluegecko"
            className="group mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFC72C] text-[#031C58] font-semibold text-sm hover:bg-white transition-colors">
            Explore the BlueGecko Platform
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* RIGHT — AI Command Center */}
        <div ref={wrapRef} className="relative h-[420px] sm:h-[520px] md:h-[600px] min-w-0" style={{ perspective: "1400px" }}>
          {/* metric chips */}
          {chips.map((c, i) => (
            <div key={c.label}
              className="absolute z-20 rounded-2xl border border-white/15 bg-white/[0.08] backdrop-blur-xl px-3.5 py-2 shadow-2xl shadow-black/30"
              style={{
                top: c.top, left: c.left, right: c.right, bottom: c.bottom,
                animation: `bg-float ${7 + i}s ease-in-out ${i * 0.4}s infinite`,
                transform: `translate(${parallax.x * (i % 2 ? 0.4 : -0.4)}px, ${parallax.y * (i % 2 ? -0.3 : 0.3)}px)`,
              }}>
              <div className="text-lg font-bold text-white leading-none">{c.value}</div>
              <div className="text-[9px] uppercase tracking-widest text-white/60 mt-1">{c.label}</div>
            </div>
          ))}

          <div className="absolute inset-0"
            style={{
              transform: `rotateY(${parallax.x * 0.4}deg) rotateX(${-parallax.y * 0.4}deg)`,
              transition: "transform .25s ease-out",
            }}>
            {/* orbit rings */}
            <div className="absolute inset-10 rounded-full border border-white/10" />
            <div className="absolute inset-20 rounded-full border border-white/15"
              style={{ animation: "spin 30s linear infinite" }} />
            <div className="absolute inset-28 rounded-full border border-dashed border-[#57A6FF]/30"
              style={{ animation: "spin 18s linear infinite reverse" }} />

            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="-260 -260 520 520">
              <defs>
                <radialGradient id="bg-core-glow">
                  <stop offset="0%" stopColor="#57A6FF" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#57A6FF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="bg-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#57A6FF" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#57A6FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#57A6FF" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <circle cx="0" cy="0" r="220" fill="url(#bg-core-glow)" />
              {modules.map((m, idx) => {
                const rad = (m.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const active = highlight === idx;
                return (
                  <g key={m.name}>
                    <line x1="0" y1="0" x2={x} y2={y}
                      stroke={active ? "#FFC72C" : "url(#bg-line)"}
                      strokeWidth={active ? 1.8 : 1.1}
                      strokeDasharray="6 6"
                      opacity={active ? 1 : 0.85}
                      style={{ animation: "dash-flow 3s linear infinite" }} />
                    <circle r="3" fill={active ? "#FFC72C" : "#57A6FF"}>
                      <animateMotion dur={`${2.4 + (idx % 3) * 0.6}s`} repeatCount="indefinite"
                        path={`M0,0 L${x},${y}`} />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* nodes */}
            {modules.map((m, idx) => {
              const rad = (m.angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const active = highlight === idx;
              return (
                <div key={m.name}
                  className="absolute top-1/2 left-1/2 z-30"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onMouseLeave={() => setActiveIdx(null)}>
                  <div
                    className={`group relative flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                    active
                      ? "scale-[1.08] border-[#FFC72C]/70 bg-white/[0.14] shadow-[0_0_40px_rgba(87,166,255,0.5)]"
                      : "border-white/15 bg-white/[0.08] hover:scale-[1.06]"
                  }`}
                    style={{ animation: `bg-float ${6 + idx}s ease-in-out ${idx * 0.5}s infinite` }}
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      active ? "bg-[#FFC72C] text-[#031C58]" : "bg-white/10 text-[#57A6FF]"
                    }`}>
                      <m.Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] font-semibold tracking-wide text-white whitespace-nowrap">
                      {m.short}
                    </div>
                  </div>
                  {/* tooltip */}
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1.5 rounded-lg bg-[#031C58]/95 border border-white/15 text-[10px] text-white/90 whitespace-nowrap transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}>
                    {m.desc}
                  </div>
                </div>
              );
            })}

            {/* Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-36 h-36 rounded-full flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #57A6FF, #0B4BFF 55%, #031C58)",
                  boxShadow: "0 0 80px rgba(87,166,255,0.6), inset 0 0 40px rgba(255,255,255,0.15)",
                  animation: "core-pulse 3s ease-in-out infinite",
                }}>
                <div className="absolute inset-0 rounded-full border border-white/20" />
                <div className="absolute inset-0 rounded-full bg-[#57A6FF]/20 animate-ping" />
                <div className="relative text-center">
                  <Sparkles className="w-7 h-7 mx-auto text-white drop-shadow" />
                  <div className="text-[10px] font-bold tracking-[0.2em] text-white mt-1">BLUEGECKO</div>
                  <div className="text-[8px] tracking-[0.25em] text-white/70">AI ENGINE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bg-float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -48; }
        }
        @keyframes core-pulse {
          0%,100% { transform: scale(1); box-shadow: 0 0 60px rgba(87,166,255,0.5), inset 0 0 40px rgba(255,255,255,0.15); }
          50% { transform: scale(1.08); box-shadow: 0 0 100px rgba(87,166,255,0.85), inset 0 0 50px rgba(255,255,255,0.2); }
        }
      `}</style>
    </section>
  );
}