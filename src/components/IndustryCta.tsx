import { Calendar, PlayCircle, Phone, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface IndustryCtaProps {
  sector: string;
}

export default function IndustryCta({ sector }: IndustryCtaProps) {
  const { ref, isVisible } = useScrollReveal();

  const actions = [
    {
      Icon: Calendar,
      title: "Book a 30-min consultation",
      desc: "Strategic assessment with a senior partner.",
      href: "mailto:info@nextgenlytics.com?subject=Consultation%20Request",
    },
    {
      Icon: PlayCircle,
      title: "Request a BlueGecko demo",
      desc: "See AI-driven mapping & migration in action.",
      href: "mailto:info@nextgenlytics.com?subject=BlueGecko%20Demo",
    },
    {
      Icon: Phone,
      title: "Talk to sales",
      desc: "+31 (0) 20 — Amsterdam HQ",
      href: "mailto:info@nextgenlytics.com?subject=Sales%20Inquiry",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container" ref={ref}>
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[hsl(var(--primary)/0.85)] p-8 md:p-14 lg:p-16 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
        >
          {/* Decorative orbs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
          {/* Subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden
          />
          {/* Accent bar */}
          <span className="absolute top-0 left-0 h-1 w-32 bg-accent" aria-hidden />

          <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: headline + buttons */}
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 backdrop-blur text-primary-foreground text-[10px] font-semibold uppercase tracking-widest border border-accent/40">
                Let's talk
              </span>
              <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-heading text-balance leading-tight">
                Ready to transform your {sector} operations?
              </h2>
              <p className="mt-5 text-primary-foreground/75 text-base md:text-lg leading-relaxed text-pretty max-w-md">
                Talk to a nextgenlytics specialist who understands your sector.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:info@nextgenlytics.com?subject=Consultation%20Request"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-primary-foreground text-primary hover:shadow-xl active:scale-[0.97] transition-all"
                >
                  <Calendar size={16} /> Book Consultation
                </a>
                <a
                  href="mailto:info@nextgenlytics.com?subject=Demo%20Request"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.97] transition-all"
                >
                  <PlayCircle size={16} /> Request Demo
                </a>
              </div>
            </div>

            {/* Right: action cards */}
            <div className="space-y-4">
              {actions.map((a, i) => (
                <a
                  key={a.title}
                  href={a.href}
                  className={`group flex items-center gap-4 p-4 md:p-5 rounded-2xl bg-primary-foreground/[0.07] backdrop-blur border border-primary-foreground/10 hover:bg-primary-foreground/[0.12] hover:border-accent/40 transition-all ${
                    isVisible ? "animate-reveal-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${150 + i * 100}ms` }}
                >
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <a.Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-semibold text-primary-foreground leading-tight">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-primary-foreground/65 leading-snug">
                      {a.desc}
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-primary-foreground/50 group-hover:text-accent group-hover:translate-x-1 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
