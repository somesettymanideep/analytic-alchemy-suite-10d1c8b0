import { useEffect, useRef, useState } from "react";
import { Globe2, Building2, Sparkles, Rocket, ArrowUpRight } from "lucide-react";

type Stat = {
  end: number;
  suffix: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  kicker: string;
};

const stats: Stat[] = [
  { end: 50, suffix: "%+", label: "Faster Migration Cycles", desc: "Versus traditional ERP delivery baselines.", icon: Rocket, kicker: "Velocity" },
  { end: 70, suffix: "+", label: "Legal Entities Supported", desc: "Across complex multi-entity global rollouts.", icon: Building2, kicker: "Scale" },
  { end: 9, suffix: "", label: "Countries Delivered", desc: "Active engagements across our delivery footprint.", icon: Globe2, kicker: "Reach" },
  { end: 4, suffix: "", label: "Years of AI & Data Delivery", desc: "Compounded enterprise transformation expertise.", icon: Sparkles, kicker: "Depth" },
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
      className="relative overflow-hidden bg-background py-24 md:py-32"
      aria-labelledby="proof-heading"
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
        }}
      />

      {/* Accent corner blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Editorial header — two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end border-b border-foreground/10 pb-12">
          <div className={`lg:col-span-7 ${visible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[11px] font-semibold tracking-[0.28em] uppercase text-primary">
                Proof / 2026 Index
              </span>
            </div>
            <h2
              id="proof-heading"
              className="font-heading text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.02] text-foreground tracking-tight text-balance"
            >
              The receipts behind every <span className="italic text-primary">enterprise</span> promise.
            </h2>
          </div>
          <div
            className={`lg:col-span-5 lg:pl-10 lg:border-l lg:border-foreground/10 ${
              visible ? "animate-reveal-up" : "opacity-0"
            }`}
            style={{ animationDelay: "180ms" }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Four metrics. Zero spin. A look at how NGSIT delivers complex data, AI, and ERP transformations — at scale, on time, and at enterprise grade.
            </p>
            <a
              href="/case-study"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group"
            >
              See the engagements
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Editorial number ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2">
          {stats.map((s, i) => (
            <StatItem key={s.label} stat={s} index={i} visible={visible} last={i === stats.length - 1} />
          ))}
        </div>

        {/* Footer caption row */}
        <div
          className={`mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-foreground/10 pt-8 ${
            visible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "700ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-background" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/40 ring-2 ring-background" />
            </div>
            <span className="text-xs tracking-widest uppercase text-muted-foreground font-medium">
              Verified across Fortune 500 engagements · EU + APAC + NA
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-mono">Updated Q2 / 2026</span>
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
      className={`group relative px-2 md:px-6 py-10 md:py-12 ${
        !last ? "md:border-r md:border-foreground/10" : ""
      } border-b md:border-b-0 border-foreground/10 last:border-b-0 ${
        visible ? "animate-reveal-up" : "opacity-0"
      }`}
    >
      {/* Index + kicker */}
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-xs text-muted-foreground">
          0{index + 1} / 04
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase text-primary">
          <Icon className="h-3 w-3" />
          {stat.kicker}
        </span>
      </div>

      {/* Giant number */}
      <div className="flex items-baseline gap-1 relative">
        <span className="font-heading text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-bold leading-[0.9] tracking-tight text-foreground tabular-nums">
          {count}
        </span>
        <span className="font-heading text-3xl md:text-4xl font-bold text-accent leading-none">
          {stat.suffix}
        </span>
        {/* Accent underline */}
        <span className="absolute -bottom-2 left-0 h-1 w-0 bg-accent transition-[width] duration-700 group-hover:w-16" />
      </div>

      {/* Label */}
      <p className="mt-8 font-heading text-lg md:text-xl font-semibold text-foreground leading-snug">
        {stat.label}
      </p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {stat.desc}
      </p>
    </div>
  );
}