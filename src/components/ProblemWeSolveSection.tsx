import { Database, Network, ShieldAlert, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const painPoints = [
  {
    icon: Database,
    title: "Fragmented data",
    desc: "Siloed across SAP, Dynamics, cloud lakes, and legacy files.",
  },
  {
    icon: ShieldAlert,
    title: "Ungoverned estate",
    desc: "No single source of truth. Reports conflict. Trust erodes.",
  },
  {
    icon: Network,
    title: "The hidden gap",
    desc: "Software is live. The business process is not. Value leaks.",
  },
];

export default function ProblemWeSolveSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.15);
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollReveal(0.2);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F8FAFC] py-20 md:py-28"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0B1F8C 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              The real challenge
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-8">
              The Problem
              <br />
              <span className="text-accent">We Solve</span>
            </h2>

            <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed">
              <p className="font-medium text-foreground">
                The platform arrives. The data does not follow.
              </p>
              <p>
                Most technology investments fail quietly — not because the software
                was wrong, but because the data underneath it was fragmented,
                ungoverned, or simply never made the journey. SAP goes live. D365
                goes live. The AI pilot looks great in the demo. And six months
                later, the organisation is working exactly as it did before.
              </p>
            </div>

            {/* Pain points grid */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {painPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`group p-5 rounded-2xl bg-white border border-primary/10 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300 ${
                    sectionVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${300 + index * 120}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary text-sm mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs text-foreground/70 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quote card */}
          <div
            ref={quoteRef}
            className={`transition-all duration-1000 ease-out ${
              quoteVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-primary to-[#0a1858] p-8 md:p-10 text-white shadow-2xl shadow-primary/20">
              {/* Quote icon */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-accent/10 translate-y-1/3 -translate-x-1/3" />

              <div className="relative pt-4">
                <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                  “Every enterprise deserves Tier-1 thinking. We built nextgenlytics to make
                  that possible — for the Dutch and European SMB market that needed it
                  most and was served least.”
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center border-2 border-accent/50">
                    <span className="font-heading text-xl font-bold text-accent">
                      RD
                    </span>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white">
                      Raja Devarapu
                    </div>
                    <div className="text-sm text-white/70">
                      Co-Founder & CEO, nextgenlytics
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting stat */}
            <div className="mt-6 flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-primary/10 shadow-sm">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                60%+
              </div>
              <div className="text-sm text-foreground/70 leading-snug">
                of digital transformation value is lost when data migration and
                governance are treated as afterthoughts.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
