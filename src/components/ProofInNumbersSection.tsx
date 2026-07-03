import { useEffect, useRef, useState } from "react";
import { Globe2, Building2, Sparkles, Rocket, ArrowUpRight } from "lucide-react";

type Stat = {
  end: number;
  suffix: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
  /** progress bar fill, 0-100 */
  fill: number;
};

const stats: Stat[] = [
  { end: 50, suffix: "%+", label: "Faster Migration Cycles", desc: "Versus traditional ERP delivery baselines.", icon: Rocket, kicker: "Velocity", fill: 78 },
  { end: 70, suffix: "+", label: "Legal Entities Supported", desc: "Across complex multi-entity global rollouts.", icon: Building2, kicker: "Scale", fill: 88 },
  { end: 9, suffix: "", label: "Countries Delivered", desc: "Active engagements across our delivery footprint.", icon: Globe2, kicker: "Reach", fill: 64 },
  { end: 4, suffix: "", label: "Years of AI & Data Delivery", desc: "Compounded enterprise transformation expertise.", icon: Sparkles, kicker: "Depth", fill: 52 },
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
      className="relative overflow-hidden bg-[#F9FAFB] py-24 md:py-32"
      aria-labelledby="proof-heading"
    >
      {/* Soft brand blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="container relative z-10 max-w-7xl">
        {/* Masthead */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 border-b border-foreground/15 pb-14 mb-14">
          <div className={`space-y-5 ${visible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="flex items-center gap-3">
              <span className="px-2 py-1 bg-primary text-primary-foreground text-[10px] font-bold tracking-[0.22em] uppercase rounded-sm">
                Proof
              </span>
              <span className="text-muted-foreground font-mono text-xs tracking-tight">
                / 2026.INDEX.V3
              </span>
            </div>
            <h2
              id="proof-heading"
              className="font-heading text-5xl lg:text-[4.5rem] font-extrabold leading-[1.02] tracking-tight text-foreground"
            >
              The Index <span className="text-foreground/40">Report.</span>
            </h2>
          </div>
          <div
            className={`flex flex-col justify-end ${visible ? "animate-reveal-up" : "opacity-0"}`}
            style={{ animationDelay: "180ms" }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              Four metrics. Zero spin. How nextgenlytics delivers complex data, AI, and ERP transformations — at scale, on time, and at enterprise grade.
            </p>
            <a
              href="/case-study"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group w-fit"
            >
              See the engagements
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Treasury ledger grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-foreground/15">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              stat={s}
              index={i}
              visible={visible}
              last={i === stats.length - 1}
            />
          ))}
        </div>

        {/* Report footnote */}
        <div
          className={`mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground ${
            visible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "700ms" }}
        >
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <span>Ref: IDX-2026-Q2</span>
            <span className="text-primary">Sts: Verified</span>
            <span>Fortune 500 · EU + APAC + NA</span>
          </div>
          <div className="hidden md:block flex-1 mx-8 h-px bg-foreground/15" />
          <span>Last Update: Q2 / 2026</span>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  stat,
  index,
  visible,
  last,
}: {
  stat: Stat;
  index: number;
  visible: boolean;
  last: boolean;
}) {
  const { ref, count } = useCountOnView(stat.end);
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${300 + index * 140}ms` }}
      className={`group relative p-8 lg:p-10 border-r border-foreground/15 border-b lg:border-b-0 last:border-b-0 bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 ${
        visible ? "animate-reveal-up" : "opacity-0"
      }`}
    >
      {/* Icon mark — top right */}
      <div className="absolute top-5 right-5 opacity-15 group-hover:opacity-100 transition-opacity duration-300 text-primary">
        <Icon className="h-5 w-5" />
      </div>

      {/* Kicker / index */}
      <div className="flex items-center justify-between mb-10">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          {stat.kicker}
        </span>
        <span className="font-mono text-[10px] text-foreground/40">
          0{index + 1}/04
        </span>
      </div>

      {/* Giant number */}
      <div className="flex items-baseline gap-1">
        <span className="font-heading text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground tabular-nums group-hover:text-primary transition-colors duration-300">
          {count}
        </span>
        <span className="font-heading text-2xl lg:text-3xl font-bold text-accent leading-none">
          {stat.suffix}
        </span>
      </div>

      {/* Label + description */}
      <p className="mt-5 font-heading text-base lg:text-lg font-semibold text-foreground leading-snug">
        {stat.label}
      </p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {stat.desc}
      </p>

      {/* Progress bar */}
      <div className="mt-10 h-1 w-full bg-foreground/10 overflow-hidden">
        <div
          className="h-full bg-foreground/80 group-hover:bg-accent transition-all duration-1000 ease-out"
          style={{ width: visible ? `${stat.fill}%` : "0%" }}
        />
      </div>
    </div>
  );
}