import { Play, ArrowRight, Cpu, Database, Star } from "lucide-react";

// Network graph nodes (positions in a -100..100 viewBox coordinate system)
const NODES = [
  { x: -55, y: -55 },
  { x: -5, y: -70 },
  { x: 55, y: -45 },
  { x: -40, y: -5 },
  { x: 20, y: 5 },
  { x: 70, y: 15 },
  { x: -25, y: 45 },
  { x: 30, y: 55 },
  { x: 65, y: 60 },
];

const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
  [3, 4], [4, 5], [3, 6], [4, 7], [5, 7],
  [6, 7], [7, 8], [5, 8], [2, 4], [1, 3],
];

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden bg-[#0A1B4D] text-white">
      {/* Background gradient + starfield */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1B4D] via-[#0D2360] to-[#081538]" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, rgba(245,158,11,0.08), transparent 40%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.15), transparent 45%)",
      }} />
      {/* subtle stars */}
      <div className="absolute inset-0 opacity-60 pointer-events-none" style={{
        backgroundImage: "radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 78% 32%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 45% 82%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 88% 88%, rgba(255,255,255,0.4), transparent), radial-gradient(1px 1px at 22% 66%, rgba(255,255,255,0.35), transparent)",
      }} />

      <div className="container relative grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
        {/* LEFT */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur border border-white/10 text-xs font-semibold mb-8 animate-reveal-up">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Enterprise Data Platform · 2026
          </div>

          <h1 className="font-heading font-bold leading-[1.02] tracking-tight text-5xl md:text-6xl lg:text-[4.25rem] animate-reveal-up delay-100">
            Enterprise Data,{" "}
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-accent bg-clip-text text-transparent">
              AI &amp; ERP
            </span>{" "}
            Transformation.
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-md animate-reveal-up delay-200">
            We migrate, modernize and govern your enterprise data{" "}
            <span className="text-white font-semibold">50% faster</span> with BlueGecko.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 animate-reveal-up delay-300">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-accent text-[#0A1B4D] shadow-[0_10px_40px_-10px_rgba(245,158,11,0.6)] hover:shadow-[0_15px_50px_-8px_rgba(245,158,11,0.85)] active:scale-[0.97] transition-all duration-200"
            >
              Book Assessment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 animate-reveal-up delay-500">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-sm text-white/70">Trusted by Global Companies</div>
          </div>
        </div>

        {/* RIGHT — network graph */}
        <div className="relative h-[480px] md:h-[560px] animate-reveal-scale delay-300">
          <svg viewBox="-100 -100 200 200" className="absolute inset-0 w-full h-full">
            <defs>
              <radialGradient id="nodeGlow">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="edgeGrad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {EDGES.map(([a, b], i) => (
              <line
                key={i}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke="url(#edgeGrad)"
                strokeWidth="0.4"
              />
            ))}

            {NODES.map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r="6" fill="url(#nodeGlow)" />
                <circle cx={n.x} cy={n.y} r="2.6" fill="#F59E0B" />
                <circle cx={n.x} cy={n.y} r="1.4" fill="#FEF3C7">
                  <animate
                    attributeName="opacity"
                    values="0.6;1;0.6"
                    dur={`${2 + (i % 3)}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}
          </svg>

          {/* Floating card: BlueGecko AI */}
          <div className="absolute top-2 right-0 md:right-2 w-[240px] rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 p-4 shadow-2xl shadow-black/40 animate-reveal-up delay-500">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                <Cpu className="w-3.5 h-3.5 text-sky-300" />
              </div>
              BlueGecko AI
            </div>
            <div className="mt-2 text-3xl font-bold font-heading tabular-nums">98.7%</div>
            <div className="text-xs text-white/60 mt-0.5">Data quality score</div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-[98.7%] rounded-full bg-gradient-to-r from-sky-400 via-blue-300 to-accent" />
            </div>
          </div>

          {/* Floating card: ERP Migration */}
          <div className="absolute bottom-4 left-0 md:left-4 w-[220px] rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 p-4 shadow-2xl shadow-black/40 animate-reveal-up delay-700">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                <Database className="w-3.5 h-3.5 text-accent" />
              </div>
              ERP Migration
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold font-heading tabular-nums">50%</span>
              <span className="text-xs text-white/60">faster</span>
            </div>
            <div className="mt-3 flex items-end gap-1 h-8">
              {[30, 40, 35, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-sky-500/50 to-accent"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
