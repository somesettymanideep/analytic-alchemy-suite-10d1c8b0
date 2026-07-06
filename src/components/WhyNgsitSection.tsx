import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { MapPin, Sparkles, Network, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Extended Delivery Team",
    body:
      "A dedicated India-based team, governed from Amsterdam — not a rotating pool. They learn your systems and stay. Onsite for KT, discovery, UAT, and go-live, wherever you are in Europe.",
    icon: MapPin,
    stats: [
      { value: 2, suffix: "", label: "Hubs · AMS + IND" },
      { value: 48, suffix: "h", label: "Onsite mobilisation" },
      { value: 100, suffix: "%", label: "Dedicated, not pooled" },
    ],
  },
  {
    num: "02",
    title: "Founded 2022. Still Evolving.",
    body:
      "We started as a data consultancy. Four years of real delivery later, we are an AI-native platform company — built from the field, not a pitch deck. We are not finished. That is deliberate.",
    icon: Sparkles,
    stats: [
      { value: 2022, suffix: "", label: "Founded" },
      { value: 4, suffix: "+ yrs", label: "Field delivery" },
      { value: 1, suffix: "", label: "BlueGecko platform" },
    ],
  },
  {
    num: "03",
    title: "One Accountable Vendor",
    body:
      "Manage your entire data and ERP landscape with one partner — onsite when the programme demands it, offshore when efficiency matters, with India's talent depth available within days.",
    icon: Network,
    stats: [
      { value: 5, suffix: "", label: "Practices · 1 partner" },
      { value: 360, suffix: "°", label: "Data + ERP coverage" },
      { value: 7, suffix: " days", label: "Talent depth on tap" },
    ],
  },
];

const STEP_SCROLL_VH = 120;

const orbitNodes = ["SAP", "Microsoft", "Databricks", "AI", "Governance"];

function StatCounter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);
  useEffect(() => {
    if (!active || hasRun.current) return;
    hasRun.current = true;
    const duration = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);
  return (
    <div className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold text-[#000A5C] tabular-nums">
      {count.toLocaleString()}
      <span className="text-[#0060F0]">{suffix}</span>
    </div>
  );
}

const WhyNgsitSection = () => {
  const { ref: revealRef, isVisible } = useScrollReveal(0.05);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(Math.max(-rect.top / total, 0), 0.9999);
      const idx = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      setActive(idx);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = stickyRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const StepIcon = steps[active].icon;

  return (
    <div
      ref={(el) => {
        (sectionRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (revealRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      data-section="why-ngsit"
      className="relative bg-[#070B14] text-white"
      style={{ height: `calc(100vh + ${steps.length * STEP_SCROLL_VH}vh)` }}
    >
      {/* Sticky viewport */}
      <div ref={stickyRef} className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11,31,140,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(11,31,140,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          }}
        />

        {/* Ambient orbs reacting to mouse */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(11,31,140,0.55), transparent 70%)",
            transform: `translate(${mouse.x * 40}px, ${mouse.y * 40}px)`,
          }}
        />
        <div
          className="absolute -bottom-52 -right-32 w-[700px] h-[700px] rounded-full blur-3xl transition-transform duration-700 ease-out"
          style={{
            background: "radial-gradient(circle, rgba(245,158,11,0.18), transparent 70%)",
            transform: `translate(${mouse.x * -50}px, ${mouse.y * -50}px)`,
          }}
        />

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 pt-10 md:pt-14 [@media(max-height:700px)]:pt-5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className={isVisible ? "animate-reveal-up" : "opacity-0"}>
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-white/50">
                <span className="w-8 h-px bg-[#0060F0]" />
                Chapter · Why nextgenlytics
              </div>
              <h2 className="mt-4 font-[Space_Grotesk] text-4xl md:text-6xl font-bold leading-[1.05] [@media(max-height:700px)]:mt-2 [@media(max-height:700px)]:text-4xl">
                Why <span className="text-[#0060F0]">nextgenlytics</span>
              </h2>
              <p className="mt-2 text-white/60 text-base md:text-lg max-w-xl [@media(max-height:700px)]:text-sm">
                Tier-1 capability. SMB accountability.
              </p>
            </div>

            {/* Progress rail */}
            <div className="flex md:flex-col items-start md:items-end gap-2 md:gap-3">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center gap-3 text-xs font-mono">
                  <span className={`tabular-nums transition-colors ${i === active ? "text-white" : "text-white/30"}`}>
                    {s.num}
                  </span>
                  <span
                    className={`block h-px transition-all duration-500 ${
                      i === active ? "w-16 bg-[#0060F0]" : "w-8 bg-white/20"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content grid */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid lg:grid-cols-2 gap-10 md:gap-16 items-center pt-32 md:pt-40 [@media(max-height:700px)]:pt-20">
            {/* LEFT — Stepped narrative */}
            <div className="relative min-h-[390px] md:min-h-[420px] [@media(max-height:700px)]:min-h-[340px]">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                return (
                  <div
                    key={s.num}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : i < active
                        ? "opacity-0 -translate-y-8 pointer-events-none"
                        : "opacity-0 translate-y-8 pointer-events-none"
                    }`}
                  >
                    <div
                      className="rounded-2xl p-8 md:p-10 backdrop-blur-xl border border-[#000A5C]/15 bg-white shadow-[0_20px_80px_-20px_rgba(11,31,140,0.25)] [@media(max-height:700px)]:p-5"
                      style={{
                        transform: `perspective(1200px) rotateY(${mouse.x * 4}deg) rotateX(${mouse.y * -4}deg)`,
                      }}
                    >
                      <div className="flex items-center gap-4 mb-6 [@media(max-height:700px)]:mb-3">
                        <div className="w-12 h-12 rounded-xl bg-[#000A5C]/10 border border-[#000A5C]/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#000A5C]" />
                        </div>
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#000A5C]/60">
                          Step {s.num}
                        </div>
                      </div>
                      <h3 className="font-[Space_Grotesk] text-3xl md:text-4xl font-bold leading-tight text-[#000A5C] [@media(max-height:700px)]:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-5 text-[#000A5C]/70 text-base md:text-lg leading-relaxed [@media(max-height:700px)]:mt-3 [@media(max-height:700px)]:text-sm">
                        {s.body}
                      </p>

                      <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-[#000A5C]/10 [@media(max-height:700px)]:mt-4 [@media(max-height:700px)]:pt-4">
                        {s.stats.map((st) => (
                          <div key={st.label}>
                            <StatCounter value={st.value} suffix={st.suffix} active={isActive} />
                            <div className="mt-1 text-[11px] uppercase tracking-wider text-[#000A5C]/50">
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT — Visual canvas */}
            <div className="relative hidden lg:block h-[420px] md:h-[520px]">
              {/* Orbital rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[1, 1.4, 1.8].map((s, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-white/10"
                    style={{
                      width: `${260 * s}px`,
                      height: `${260 * s}px`,
                      animation: `spin ${30 + i * 15}s linear infinite ${i % 2 ? "reverse" : ""}`,
                    }}
                  />
                ))}
              </div>

              {/* SVG visual swaps per step */}
              <div className="absolute inset-0">
                {active === 0 && <MapVisual mouse={mouse} />}
                {active === 1 && <TimelineVisual mouse={mouse} />}
                {active === 2 && <HubVisual mouse={mouse} />}
              </div>

              {/* Center glyph */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)` }}
              >
                <div className="relative w-24 h-24 rounded-2xl bg-[#000A5C] border border-white/15 flex items-center justify-center shadow-[0_0_60px_rgba(11,31,140,0.8)]">
                  <StepIcon className="w-10 h-10 text-[#0060F0]" />
                  <div className="absolute inset-0 rounded-2xl border border-[#0060F0]/30 animate-ping" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="absolute bottom-6 left-0 right-0 z-20 px-6 md:px-12 [@media(max-height:700px)]:hidden">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-mono text-white/40">
            <span>nextgenlytics · Amsterdam ⇄ India · Est. 2022</span>
            <a href="/about" className="group inline-flex items-center gap-2 text-white/70 hover:text-[#0060F0] transition-colors">
              Discover the operating model
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============ Visual sub-components ============ */

function MapVisual({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <svg viewBox="0 0 500 500" className="w-full h-full" style={{ transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)` }}>
      <defs>
        <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000A5C" />
          <stop offset="100%" stopColor="#0060F0" />
        </linearGradient>
      </defs>
      <path d="M120 180 Q 250 60 380 320" stroke="url(#route)" strokeWidth="1.5" fill="none" strokeDasharray="4 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-100" dur="6s" repeatCount="indefinite" />
      </path>
      {/* Amsterdam */}
      <g transform="translate(120 180)">
        <circle r="20" fill="#000A5C" opacity="0.3">
          <animate attributeName="r" values="18;28;18" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#0060F0" />
        <text y="-28" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">AMSTERDAM</text>
      </g>
      {/* India */}
      <g transform="translate(380 320)">
        <circle r="20" fill="#0060F0" opacity="0.25">
          <animate attributeName="r" values="18;28;18" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#0060F0" />
        <text y="34" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="monospace">INDIA</text>
      </g>
      {/* Data packet */}
      <circle r="4" fill="#fff">
        <animateMotion dur="4s" repeatCount="indefinite" path="M120 180 Q 250 60 380 320" />
      </circle>
      <circle r="3" fill="#0060F0">
        <animateMotion dur="4s" begin="1.3s" repeatCount="indefinite" path="M120 180 Q 250 60 380 320" />
      </circle>
    </svg>
  );
}

function TimelineVisual({ mouse }: { mouse: { x: number; y: number } }) {
  const years = ["2022", "2023", "2024", "2025", "2026"];
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ transform: `translate(${mouse.x * 6}px, ${mouse.y * 6}px)` }}>
      <div className="relative w-full max-w-sm">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0060F0]/50 to-transparent" />
        {years.map((y, i) => (
          <div key={y} className="relative flex items-center gap-4 py-3" style={{ animation: `reveal-up 0.6s ${i * 0.15}s both` }}>
            <div className="flex-1 text-right font-mono text-xs text-white/40">{y}</div>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#0060F0]" />
              <div className="absolute inset-0 rounded-full bg-[#0060F0] animate-ping opacity-30" />
            </div>
            <div className="flex-1 text-xs text-white/70">
              {i === 0 && "Data consultancy"}
              {i === 1 && "ERP delivery"}
              {i === 2 && "AI engineering"}
              {i === 3 && "BlueGecko launch"}
              {i === 4 && "AI-native platform"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HubVisual({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <div className="absolute inset-0" style={{ transform: `translate(${mouse.x * 8}px, ${mouse.y * 8}px)` }}>
      {orbitNodes.map((n, i) => {
        const angle = (i / orbitNodes.length) * Math.PI * 2;
        const r = 170;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        return (
          <div
            key={n}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <div className="px-3 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-sm border border-white/15 text-xs font-mono text-white/80 hover:border-[#0060F0]/60 hover:text-[#0060F0] transition-colors">
              {n}
            </div>
          </div>
        );
      })}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-200 -200 400 400">
        {orbitNodes.map((_, i) => {
          const angle = (i / orbitNodes.length) * Math.PI * 2;
          const r = 170;
          return (
            <line
              key={i}
              x1="0"
              y1="0"
              x2={Math.cos(angle) * r}
              y2={Math.sin(angle) * r}
              stroke="rgba(245,158,11,0.25)"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
          );
        })}
      </svg>
    </div>
  );
}

export default WhyNgsitSection;