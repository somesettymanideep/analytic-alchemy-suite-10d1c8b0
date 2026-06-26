import { useEffect, useRef, useState } from "react";
import { Compass, ShieldCheck, ArrowRightLeft, Cpu, Infinity as InfinityIcon } from "lucide-react";

type Step = {
  num: string;
  tag: string;
  title: string;
  body: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  cardBg: string;
};

const steps: Step[] = [
  {
    num: "01",
    tag: "Discover",
    title: "Assess",
    body: "We sit next to you. Data & AI maturity across People, Processes, Technology, and Data.",
    icon: Compass,
    accent: "#faae14",
    cardBg: "linear-gradient(135deg, rgba(250,174,20,0.18) 0%, rgba(11,31,140,0.25) 100%)",
  },
  {
    num: "02",
    tag: "Govern",
    title: "Govern",
    body: "A governance framework on four pillars — the foundation every migration and AI build needs.",
    icon: ShieldCheck,
    accent: "#3b5bff",
    cardBg: "linear-gradient(135deg, rgba(59,91,255,0.22) 0%, rgba(11,31,140,0.30) 100%)",
  },
  {
    num: "03",
    tag: "Migrate",
    title: "Migrate",
    body: "Any application to any application — 50%+ faster with BlueGecko, our AI migration platform.",
    icon: ArrowRightLeft,
    accent: "#faae14",
    cardBg: "linear-gradient(135deg, rgba(250,174,20,0.15) 0%, rgba(59,91,255,0.20) 100%)",
  },
  {
    num: "04",
    tag: "Build",
    title: "Build",
    body: "Custom AI applications on your data — LLMs, SLMs, React, APIs. Built for purpose, not off-the-shelf.",
    icon: Cpu,
    accent: "#5b7dff",
    cardBg: "linear-gradient(135deg, rgba(91,125,255,0.22) 0%, rgba(11,31,140,0.28) 100%)",
  },
  {
    num: "05",
    tag: "Scale",
    title: "Scale",
    body: "Managed Services that stay after go-live. We do not hand over and leave.",
    icon: InfinityIcon,
    accent: "#faae14",
    cardBg: "linear-gradient(135deg, rgba(11,31,140,0.35) 0%, rgba(250,174,20,0.18) 100%)",
  },
];

export default function HowWeWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 fill of rail
  const [active, setActive] = useState(0);
  const [parallax, setParallax] = useState(0);

  // Reveal trigger
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.1,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Scroll-driven rail progress + active step + parallax
  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height + vh * 0.4;
      const passed = Math.min(Math.max(vh - r.top, 0), total);
      const p = Math.min(passed / total, 1);
      setProgress(p);
      setParallax(p);

      // active step = whichever step center is closest to middle of viewport
      const mid = vh / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      stepRefs.current.forEach((node, i) => {
        if (!node) return;
        const nr = node.getBoundingClientRect();
        const c = nr.top + nr.height / 2;
        const d = Math.abs(c - mid);
        if (d < bestDist) {
          bestDist = d;
          bestIdx = i;
        }
      });
      setActive(bestIdx);
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
    <section
      ref={sectionRef}
      aria-labelledby="how-we-work"
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, #142bb0 0%, #0b1f8c 50%, #050d3f 100%)",
      }}
    >
      {/* grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* Mesh / orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 18%, rgba(250,174,20,0.22), transparent 45%), radial-gradient(circle at 10% 75%, rgba(59,91,255,0.28), transparent 50%), radial-gradient(circle at 55% 95%, rgba(250,174,20,0.14), transparent 45%)",
          transform: `translate3d(0, ${parallax * -40}px, 0)`,
          transition: "transform 200ms linear",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full bg-[#faae14]/20 blur-3xl"
        style={{ transform: `translate3d(${parallax * 30}px, ${parallax * 20}px, 0)` }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#3b5bff]/25 blur-3xl"
        style={{ transform: `translate3d(${parallax * -40}px, ${parallax * -30}px, 0)` }}
      />
      {/* grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 80%)",
        }}
      />

      <div className="container relative z-10">
        {/* Heading */}
        <div
          className={`max-w-4xl ${visible ? "animate-reveal-up" : "opacity-0"}`}
          style={{ filter: visible ? "blur(0)" : "blur(8px)", transition: "filter 900ms ease" }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#faae14] shadow-[0_0_14px_#faae14]" />
            <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/80">
              Operating Model
            </span>
          </div>
          <h2
            id="how-we-work"
            className="mt-6 font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight text-white text-balance"
          >
            How we{" "}
            <span className="italic bg-gradient-to-r from-[#faae14] via-white to-[#faae14] bg-clip-text text-transparent">
              work
            </span>
            .
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/65">
            Discover first. Govern what you find. Migrate with confidence. Build intelligently.
            Scale deliberately.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sticky narrative rail */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-7 overflow-hidden relative">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-60 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(250,174,20,0.22), transparent 55%)",
                  }}
                />
                <div className="relative">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#faae14]/90">
                    Stage 0{active + 1} / 05
                  </span>
                  <h3
                    key={steps[active].title}
                    className="mt-4 font-heading text-3xl font-bold text-white leading-tight animate-fade-in"
                  >
                    {steps[active].title}
                  </h3>
                  <p
                    key={steps[active].body}
                    className="mt-3 text-sm leading-relaxed text-white/65 animate-fade-in"
                  >
                    {steps[active].body}
                  </p>

                  {/* Mini step indicators */}
                  <div className="mt-8 space-y-3">
                    {steps.map((s, i) => {
                      const state = i < active ? "done" : i === active ? "active" : "pending";
                      return (
                        <div key={s.num} className="flex items-center gap-3">
                          <span
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                              state === "active"
                                ? "w-10 bg-[#faae14] shadow-[0_0_12px_#faae14]"
                                : state === "done"
                                ? "w-6 bg-white/60"
                                : "w-3 bg-white/15"
                            }`}
                          />
                          <span
                            className={`text-xs tracking-[0.22em] uppercase font-semibold transition-colors ${
                              state === "active"
                                ? "text-white"
                                : state === "done"
                                ? "text-white/55"
                                : "text-white/30"
                            }`}
                          >
                            {s.num} · {s.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* progress bar */}
              <div className="mt-6 px-1">
                <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#faae14] via-white to-[#faae14] transition-[width] duration-300 shadow-[0_0_12px_rgba(250,174,20,0.6)]"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-mono tracking-widest text-white/40 uppercase">
                  <span>Discover</span>
                  <span>Scale</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Steps column */}
          <div className="lg:col-span-8 relative">
            {/* vertical line */}
            <div className="pointer-events-none absolute left-[22px] md:left-[28px] top-2 bottom-2 w-px bg-white/10" />
            <div
              ref={railRef}
              className="pointer-events-none absolute left-[22px] md:left-[28px] top-2 w-px bg-gradient-to-b from-[#faae14] via-[#3b5bff] to-transparent shadow-[0_0_14px_rgba(250,174,20,0.5)] transition-[height] duration-300"
              style={{ height: `${progress * 100}%` }}
            />

            <ol className="space-y-8 md:space-y-10">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <li
                    key={s.num}
                    ref={(el) => (stepRefs.current[i] = el)}
                    style={{ animationDelay: `${250 + i * 140}ms` }}
                    className={`relative pl-16 md:pl-24 ${
                      visible ? "animate-reveal-up" : "opacity-0"
                    }`}
                  >
                    {/* Badge on rail */}
                    <div className="absolute left-0 top-1">
                      <div
                        className={`relative h-12 w-12 md:h-14 md:w-14 rounded-2xl border backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
                          isActive
                            ? "border-white/40 bg-white/10 scale-110"
                            : isDone
                            ? "border-white/20 bg-white/[0.04]"
                            : "border-white/10 bg-white/[0.02]"
                        }`}
                        style={{
                          boxShadow: isActive
                            ? `0 0 28px ${s.accent}55, inset 0 0 18px ${s.accent}22`
                            : "none",
                        }}
                      >
                        <span style={{ color: isActive ? s.accent : "rgba(255,255,255,0.55)" }}>
                          <Icon className="h-5 w-5 md:h-6 md:w-6 transition-colors" />
                        </span>
                        {isActive && (
                          <span
                            aria-hidden
                            className="absolute inset-0 rounded-2xl animate-ping"
                            style={{ boxShadow: `0 0 0 2px ${s.accent}44` }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Card */}
                    <article
                      className={`group relative rounded-2xl border backdrop-blur-xl p-7 md:p-9 transition-all duration-500 overflow-hidden ${
                        isActive
                          ? "border-white/30 bg-white/[0.04] -translate-y-0.5"
                          : "border-white/10 bg-white/[0.02] hover:border-white/25 hover:-translate-y-0.5"
                      }`}
                      style={{
                        background: s.cardBg,
                        boxShadow: isActive
                          ? `0 24px 60px -30px ${s.accent}66`
                          : "0 18px 40px -30px rgba(0,0,0,0.6)",
                      }}
                    >
                      {/* corner glow */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(450px circle at 0% 0%, ${s.accent}22, transparent 60%)`,
                        }}
                      />
                      {/* edge accent */}
                      <span
                        aria-hidden
                        className="absolute left-0 top-6 bottom-6 w-px"
                        style={{
                          background: `linear-gradient(to bottom, transparent, ${s.accent}, transparent)`,
                          opacity: isActive ? 1 : 0.25,
                          transition: "opacity 400ms",
                        }}
                      />

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-baseline gap-3">
                          <span
                            className="font-heading text-4xl md:text-5xl font-bold tracking-tight tabular-nums"
                            style={{
                              color: isActive ? s.accent : "rgba(255,255,255,0.85)",
                              textShadow: isActive ? `0 0 24px ${s.accent}55` : "none",
                            }}
                          >
                            {s.num}
                          </span>
                          <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/55">
                            · {s.tag}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono tracking-widest uppercase transition-colors ${
                            isDone ? "text-[#faae14]/80" : isActive ? "text-[#faae14]" : "text-white/30"
                          }`}
                        >
                          {isDone ? "Completed" : isActive ? "In Progress" : "Upcoming"}
                        </span>
                      </div>

                      <h3 className="relative mt-6 font-heading text-2xl md:text-3xl font-bold text-white leading-tight">
                        {s.title}
                      </h3>
                      <p className="relative mt-3 text-sm md:text-base leading-relaxed text-white/65 max-w-2xl">
                        {s.body}
                      </p>

                      {/* bottom shimmer */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
                        style={{
                          background: `linear-gradient(to right, transparent, ${s.accent}88, transparent)`,
                          opacity: isActive ? 0.9 : 0.2,
                          transition: "opacity 400ms",
                        }}
                      />
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}