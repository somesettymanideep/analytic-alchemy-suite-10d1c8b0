import { ArrowUpRight, CheckCircle, Sparkle } from "@phosphor-icons/react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Props = {
  eyebrow: string;
  headline: string;
  evidence: string;
};

export default function SolutionHighlight({ eyebrow, headline, evidence }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      className="section-alt py-14 md:py-20"
      ref={ref}
      aria-labelledby="solution-highlight-heading"
    >
      <div className="container">
        <article
          className={`group relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-border/60 bg-card shadow-[0_20px_60px_-30px_hsl(var(--primary)/0.35)] transition-all duration-500 hover:shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.45)] ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          {/* Decorative background layers */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--foreground) / 0.06) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/15 blur-3xl transition-transform duration-700 group-hover:scale-110"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl transition-transform duration-700 group-hover:scale-110"
          />
          {/* Left accent bar */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-primary via-accent to-primary"
          />

          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-14 p-6 sm:p-8 md:p-12 lg:p-14">
            {/* Headline column */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent ring-1 ring-inset ring-accent/20">
                <Sparkle size={14} aria-hidden="true" />
                <span>{eyebrow}</span>
              </span>
              <h2
                id="solution-highlight-heading"
                className="mt-5 text-2xl sm:text-3xl md:text-[2.15rem] lg:text-4xl font-bold text-foreground font-heading leading-[1.15] tracking-tight text-balance"
              >
                {headline}
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-1 w-12 bg-accent rounded-full" aria-hidden="true" />
                <span className="h-1 w-6 bg-primary/40 rounded-full" aria-hidden="true" />
                <span className="h-1 w-3 bg-primary/20 rounded-full" aria-hidden="true" />
              </div>
            </div>

            {/* Evidence column */}
            <div className="lg:col-span-5">
              <div className="h-full flex flex-col gap-5 rounded-2xl bg-gradient-to-br from-primary/[0.06] via-card to-accent/[0.05] border border-primary/15 p-6 md:p-7 shadow-inner">
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 inline-flex items-center justify-center w-11 h-11 min-w-11 min-h-11 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-4 ring-primary/10"
                  >
                    <CheckCircle size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      Real capability
                    </p>
                    <p className="mt-2 text-sm md:text-[0.95rem] text-foreground/90 leading-relaxed text-pretty">
                      {evidence}
                    </p>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="mt-auto inline-flex items-center justify-between gap-2 rounded-xl border border-primary/20 bg-background/60 px-4 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background min-h-11"
                  aria-label={`Discuss ${eyebrow} with our team`}
                >
                  <span>Discuss this capability</span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}