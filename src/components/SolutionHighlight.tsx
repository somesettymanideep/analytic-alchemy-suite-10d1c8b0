import { Sparkles, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type Props = {
  eyebrow: string;
  headline: string;
  evidence: string;
};

export default function SolutionHighlight({ eyebrow, headline, evidence }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="section-alt py-12 md:py-16" ref={ref}>
      <div className="container">
        <div
          className={`relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl shadow-primary/5 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent">
                <Sparkles size={14} /> {eyebrow}
              </span>
              <p className="mt-5 text-xl md:text-2xl font-bold text-foreground font-heading leading-snug text-balance">
                {headline}
              </p>
              <div className="mt-4 h-1 w-12 bg-accent rounded-full" />
            </div>
            <div className="lg:col-span-5">
              <div className="h-full flex items-start gap-4 rounded-2xl bg-primary/[0.04] border border-primary/10 p-6">
                <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <CheckCircle2 size={20} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">
                    Real capability
                  </p>
                  <p className="mt-2 text-sm md:text-base text-foreground leading-relaxed">
                    {evidence}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}