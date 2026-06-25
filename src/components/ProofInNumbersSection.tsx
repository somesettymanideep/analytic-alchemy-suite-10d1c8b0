import { useEffect, useRef, useState } from "react";

type Stat = {
  value: string;
  num: number;
  suffix: string;
  label: string;
  sub: string;
  bar: string; // hex
};

const stats: Stat[] = [
  { value: "70%", num: 70, suffix: "%", label: "Faster delivery", sub: "avg. across migration programmes", bar: "#faae14" },
  { value: "90%", num: 90, suffix: "%", label: "Data accuracy", sub: "vs manual validation baseline", bar: "#22c55e" },
  { value: "40%", num: 40, suffix: "%", label: "Cost reduction", sub: "estimate", bar: "#0B1F8C" },
  { value: "6+", num: 6, suffix: "+", label: "Platform coverage", sub: "ERP systems supported", bar: "#ef4444" },
];

function useCountOnView(end: number, duration = 1600) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);
  return { ref, count };
}

export default function ProofInNumbersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="proof-heading"
      className="relative overflow-hidden bg-[#f4f6fb] py-24 md:py-32"
    >
      {/* Decorative dot clusters */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 left-10 h-24 w-24 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-16 right-8 h-28 w-28 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)",
          backgroundSize: "14px 14px",
        }}
      />
      {/* Floating accent dots */}
      <span aria-hidden className="absolute top-16 right-24 h-3 w-3 rounded-full bg-[#faae14]" />
      <span aria-hidden className="absolute bottom-24 left-1/3 h-2.5 w-2.5 rounded-full bg-[#faae14]/80" />
      <span aria-hidden className="absolute top-1/2 left-8 h-2 w-2 rounded-full bg-[#0B1F8C]/40" />

      <div className="container relative z-10">
        {/* Heading */}
        <div className={`text-center max-w-4xl mx-auto ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2
            id="proof-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-[#0f172a] text-balance"
          >
            Being the best by working with the best
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-500 max-w-3xl mx-auto">
            NGSIT is a global provider of unique end-to-end consulting solutions in the{" "}
            <span className="font-semibold text-[#0B1F8C]">enterprise applications</span>,{" "}
            <span className="font-semibold text-[#0B1F8C]">AI</span>, and{" "}
            <span className="font-semibold text-[#0B1F8C]">cloud</span> space.
          </p>

          {/* tiny dot row */}
          <div className="mt-10 flex items-center justify-center gap-1.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-slate-300" />
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, visible }: { stat: Stat; index: number; visible: boolean }) {
  const { ref, count } = useCountOnView(stat.num);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${200 + index * 130}ms` }}
      className={`group relative rounded-2xl bg-white px-8 py-12 text-center shadow-[0_4px_24px_-12px_rgba(15,23,42,0.18)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_22px_50px_-22px_rgba(11,31,140,0.35)] ${
        visible ? "animate-reveal-up" : "opacity-0"
      }`}
    >
      {/* Top color bar */}
      <div className="mx-auto mb-8 h-[3px] w-12 rounded-full transition-all duration-500 group-hover:w-20" style={{ backgroundColor: stat.bar }} />

      {/* Number */}
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="font-heading text-6xl md:text-7xl font-bold tabular-nums text-[#0B1F8C] leading-none tracking-tight">
          {count}
        </span>
        <span className="font-heading text-4xl md:text-5xl font-bold text-[#0B1F8C] leading-none">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-8 font-heading text-lg font-semibold text-[#0f172a]">{stat.label}</p>
      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{stat.sub}</p>
    </div>
  );
}