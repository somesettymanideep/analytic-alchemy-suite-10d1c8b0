import { useEffect, useRef, useState } from "react";
import { Globe2, Building2, Sparkles, Rocket } from "lucide-react";

type Stat = {
  end: number;
  suffix: string;
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

const stats: Stat[] = [
  { end: 50, suffix: "%+", label: "Faster Migration Cycles", desc: "vs traditional delivery baselines", icon: Rocket },
  { end: 70, suffix: "+", label: "Legal Entities Supported", desc: "across complex multi-entity rollouts", icon: Building2, featured: true },
  { end: 9, suffix: "", label: "Countries Delivered", desc: "global delivery footprint", icon: Globe2 },
  { end: 4, suffix: "", label: "Years of AI & Data Delivery", desc: "enterprise transformation expertise", icon: Sparkles },
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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);
  return { ref, count };
}

export default function ProofInNumbersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    setCursor({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, #142bb0 0%, #0b218e 40%, #060f4a 100%)",
      }}
      aria-labelledby="proof-heading"
    >
      {/* Mesh gradient layers */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(250,174,20,0.25), transparent 45%), radial-gradient(circle at 10% 80%, rgba(99,102,241,0.35), transparent 50%), radial-gradient(circle at 60% 90%, rgba(250,174,20,0.18), transparent 40%)",
        }}
      />

      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-[background] duration-300"
        style={{
          background: `radial-gradient(600px circle at ${cursor.x}% ${cursor.y}%, rgba(250,174,20,0.12), transparent 60%)`,
        }}
      />

      {/* World-map dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Floating orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#faae14]/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#3b5bff]/25 blur-3xl animate-float-slower" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#faae14]/10 blur-3xl animate-float-slow" />

      {/* Light streaks */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute left-[55%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#faae14]/30 to-transparent" />
        <div className="absolute left-[85%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-white/50 animate-particle"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 6) * 0.8}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className={`max-w-3xl ${visible ? "animate-reveal-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#faae14] shadow-[0_0_12px_#faae14]" />
            <span className="text-xs font-medium tracking-[0.2em] text-white/80 uppercase">Proof in Numbers</span>
          </div>
          <h2
            id="proof-heading"
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white text-balance"
          >
            Outcomes Fortune 500 leaders{" "}
            <span className="bg-gradient-to-r from-[#faae14] via-[#ffd27a] to-[#faae14] bg-clip-text text-transparent">
              measure us by.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
            Trusted across continents to deliver complex data, AI, and ERP transformations — at scale, on time, and at enterprise grade.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {stats.map((s, i) => (
            <StatCard
              key={s.label}
              stat={s}
              index={i}
              visible={visible}
            />
          ))}
        </div>
      </div>

      {/* Local styles for animations */}
      <style>{`
        @keyframes float-slow { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-30px)} }
        @keyframes float-slower { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-30px,25px)} }
        .animate-float-slow { animation: float-slow 14s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 22s ease-in-out infinite; }
        @keyframes particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-120px) scale(0.4); opacity: 0; }
        }
        .animate-particle { animation: particle linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,.animate-float-slower,.animate-particle{animation:none}
        }
      `}</style>
    </section>
  );
}

function StatCard({ stat, index, visible }: { stat: Stat; index: number; visible: boolean }) {
  const { ref, count } = useCountOnView(stat.end);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const Icon = stat.icon;

  const onMove = (e: React.MouseEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 6, ry: x * 8 });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        animationDelay: `${200 + index * 140}ms`,
      }}
      className={`group relative rounded-2xl transition-transform duration-300 will-change-transform ${
        stat.featured ? "lg:row-span-2 lg:-mt-4 lg:mb-0" : ""
      } ${visible ? "animate-reveal-up" : "opacity-0"}`}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-white/5 to-[#faae14]/30 opacity-80 group-hover:opacity-100 transition-opacity" />
      <div className="relative m-[1px] rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-7 md:p-8 h-full overflow-hidden shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        {/* Hover glow */}
        <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "radial-gradient(circle at 50% 0%, rgba(250,174,20,0.25), transparent 60%)" }}
        />

        {/* Accent line */}
        <div className="absolute top-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#faae14]/70 to-transparent" />

        <div className="relative flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
            <Icon className="h-5 w-5 text-[#faae14]" />
          </div>
          {stat.featured && (
            <span className="text-[10px] tracking-[0.18em] font-semibold uppercase text-[#faae14]/90 px-2.5 py-1 rounded-full border border-[#faae14]/40 bg-[#faae14]/10">
              Flagship
            </span>
          )}
        </div>

        <div ref={ref} className={`relative ${stat.featured ? "mt-10 md:mt-16" : "mt-8"}`}>
          <div className="flex items-baseline gap-1">
            <span
              className={`font-heading font-bold tabular-nums leading-none bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent ${
                stat.featured ? "text-7xl md:text-8xl lg:text-[8.5rem]" : "text-6xl md:text-7xl"
              }`}
            >
              {count}
            </span>
            <span
              className={`font-heading font-bold text-[#faae14] ${
                stat.featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
              }`}
            >
              {stat.suffix}
            </span>
          </div>
          <p className="mt-5 text-white font-semibold text-lg md:text-xl">{stat.label}</p>
          <p className="mt-2 text-sm text-white/60 leading-relaxed">{stat.desc}</p>
        </div>

        {/* Bottom shimmer */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </div>
  );
}