import { useEffect, useRef, useState } from "react";

type Stat = {
  end: number;
  suffix: string;
  label: string;
  desc: string;
  barColor: string;
};

const stats: Stat[] = [
  { end: 70, suffix: "%", label: "Faster delivery", desc: "avg. across migration programmes", barColor: "bg-amber-400" },
  { end: 90, suffix: "%", label: "Data accuracy", desc: "vs manual validation baseline", barColor: "bg-emerald-500" },
  { end: 40, suffix: "%", label: "Cost reduction", desc: "estimate", barColor: "bg-primary" },
  { end: 6, suffix: "+", label: "Platform coverage", desc: "ERP systems supported", barColor: "bg-rose-500" },
];

function useCountOnView(end: number, duration = 1800) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
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
      },
      { threshold: 0.3 }
    );
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
      className="relative overflow-hidden bg-[#F4F6FB] py-24 md:py-32"
      aria-labelledby="proof-heading"
    >
      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--primary) / 0.18) 1.2px, transparent 1.2px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at top left, black 0%, transparent 35%), radial-gradient(ellipse at top right, black 0%, transparent 25%)",
          WebkitMaskImage: "radial-gradient(ellipse at top left, black 0%, transparent 35%), radial-gradient(ellipse at top right, black 0%, transparent 25%)",
        }}
      />

      {/* Floating dots */}
      <span className="pointer-events-none absolute top-16 right-24 h-3 w-3 rounded-full bg-amber-400/70" />
      <span className="pointer-events-none absolute bottom-24 left-16 h-2.5 w-2.5 rounded-full bg-primary/60" />
      <span className="pointer-events-none absolute top-1/2 right-10 h-2 w-2 rounded-full bg-rose-400/70" />

      <div className="container relative z-10">
        {/* Centered editorial header */}
        <div className={`mx-auto max-w-4xl text-center ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <h2
            id="proof-heading"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground tracking-tight text-balance"
          >
            Being the best by working with the best
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            NGSIT is a global provider of unique end-to-end consulting solutions in the{" "}
            <span className="text-primary font-semibold">enterprise applications</span>,{" "}
            <span className="text-primary font-semibold">AI</span>, and{" "}
            <span className="text-primary font-semibold">cloud</span> space.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  index,
  visible,
}: {
  stat: Stat;
  index: number;
  visible: boolean;
}) {
  const { ref, count } = useCountOnView(stat.end);

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${200 + index * 120}ms` }}
      className={`group relative bg-white rounded-2xl px-6 py-10 md:py-12 text-center shadow-[0_4px_24px_-8px_rgba(11,31,140,0.08)] ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(11,31,140,0.18)] ${
        visible ? "animate-reveal-up" : "opacity-0"
      }`}
    >
      {/* Top accent bar */}
      <span className={`absolute left-1/2 -translate-x-1/2 top-6 h-1 w-10 rounded-full ${stat.barColor}`} />

      {/* Giant number */}
      <div className="mt-6 flex items-baseline justify-center">
        <span className="font-heading text-6xl md:text-7xl font-bold leading-none tracking-tight text-primary tabular-nums">
          {count}
        </span>
        <span className="font-heading text-5xl md:text-6xl font-bold text-primary leading-none">
          {stat.suffix}
        </span>
      </div>

      <p className="mt-8 font-heading text-lg md:text-xl font-semibold text-foreground leading-snug">
        {stat.label}
      </p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {stat.desc}
      </p>
    </div>
  );
}