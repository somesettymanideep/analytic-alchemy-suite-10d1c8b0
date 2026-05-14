import { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

/**
 * Branded scroll-to-top: circular progress ring tracking page scroll,
 * gradient stroke (primary → accent), pulsing glow, and a rocket icon —
 * a small nod to "lift-off" enterprise transformation.
 */
export default function ScrollToTop() {
  const [progress, setProgress] = useState(0);
  const visible = progress > 0.04;

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const size = 56;
  const stroke = 3;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const dash = c * (1 - progress);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`group fixed bottom-6 right-6 z-50 transition-all duration-500 focus-visible:outline-none ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-6 scale-90 pointer-events-none"
      }`}
      style={{ width: size, height: size }}
    >
      {/* Pulsing glow */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-60 group-hover:opacity-90 transition-opacity animate-pulse"
      />

      {/* Progress ring */}
      <svg
        width={size}
        height={size}
        className="absolute inset-0 -rotate-90"
        aria-hidden
      >
        <defs>
          <linearGradient id="scroll-top-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth={stroke}
          opacity={0.6}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#scroll-top-grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={dash}
          className="transition-[stroke-dashoffset] duration-150"
        />
      </svg>

      {/* Inner pill */}
      <span
        className="absolute inset-1.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center border border-primary-foreground/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-[hsl(var(--accent))] group-hover:text-primary-foreground transition-all group-active:scale-95"
      >
        <Rocket className="w-5 h-5 -rotate-45 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
      </span>

      {/* Hover label */}
      <span
        aria-hidden
        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap rounded-full bg-foreground text-background text-[11px] font-semibold tracking-wide px-3 py-1.5 shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
      >
        Back to top · {Math.round(progress * 100)}%
      </span>
    </button>
  );
}
