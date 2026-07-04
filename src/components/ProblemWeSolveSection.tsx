import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const problems = [
  {
    title: "Poor governance",
    desc: "No single source of truth. Reports conflict. Compliance risk grows silently.",
  },
  {
    title: "Broken ERP migration",
    desc: "Legacy data doesn't map. Go-live slips. Costs spiral. Value evaporates.",
  },
  {
    title: "AI without quality data",
    desc: "Models trained on fragmented, dirty data — hallucinations, not insight.",
  },
];

export default function ProblemWeSolveSection() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section ref={ref} className="relative bg-[#F8FAFC] py-24 md:py-36 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/8 blur-[140px]" />
      <div className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full bg-[#FFB000]/8 blur-[140px]" />

      <div className="container relative grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT — huge title */}
        <div className={isVisible ? "animate-pop-in" : "opacity-0"}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E66]/5 text-[#0B1E66] text-xs font-semibold tracking-widest uppercase mb-8">
            The reality
          </div>
          <h2 className="font-display font-extrabold text-[#081A45] leading-[0.95] text-4xl md:text-5xl lg:text-[4.25rem] text-balance">
            Most<br />
            Transformations<br />
            Fail at<br />
            <span className="bg-gradient-to-r from-[#0B1E66] to-[#3B82F6] bg-clip-text text-transparent">The Data Layer.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground font-premium leading-relaxed max-w-md">
            Software goes live. Value doesn't. We fix what breaks between the ERP and the business.
          </p>
        </div>

        {/* RIGHT — floating glass cards */}
        <div className="relative space-y-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-card p-7 bg-white premium-shadow border border-[#0B1E66]/8 hover:-translate-y-1 hover:shadow-[0_25px_90px_-15px_rgba(11,30,102,0.18)] transition-all duration-500 ${
                isVisible ? "animate-pop-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${300 + i * 200}ms`,
                marginLeft: i === 1 ? "2.5rem" : i === 2 ? "1.25rem" : "0",
              }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <X className="w-6 h-6 text-red-500" strokeWidth={3} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-[#081A45] text-xl mb-2">{p.title}</h3>
                  <p className="text-muted-foreground font-premium leading-relaxed">{p.desc}</p>
                </div>
              </div>
              <div className="absolute inset-x-7 -bottom-px h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
