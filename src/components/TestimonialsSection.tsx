import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NGSIT transformed our SAP migration. Timeline cut from 18 to 9 months, and BlueGecko caught data issues we'd have missed entirely.",
    role: "CTO",
    company: "Fortune 500 Manufacturer",
  },
  {
    quote: "AI-native delivery isn't marketing here — it's embedded in every phase. We saved 35% on our S/4HANA programme.",
    role: "VP Operations",
    company: "Global Logistics Leader",
  },
  {
    quote: "Amsterdam leadership, India delivery, enterprise quality. The governance model gave our board real confidence.",
    role: "Head of Data",
    company: "European Financial Group",
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[active];

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-[#F8FAFC] overflow-hidden">
      <div className="container max-w-5xl">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1E66]/5 text-[#0B1E66] text-xs font-semibold tracking-widest uppercase mb-6">
            Testimonials
          </div>
          <h2 className={`font-display font-extrabold text-[#081A45] leading-[1.02] text-4xl md:text-5xl lg:text-[3.25rem] text-balance ${isVisible ? "animate-pop-in" : "opacity-0"}`}>
            Trusted by teams making <span className="bg-gradient-to-r from-[#0B1E66] to-[#3B82F6] bg-clip-text text-transparent">bet-the-company</span> moves.
          </h2>
        </div>

        <div className={`relative rounded-card bg-white premium-shadow p-8 md:p-14 border border-[#0B1E66]/8 ${isVisible ? "animate-pop-in" : "opacity-0"}`} style={{ animationDelay: "200ms" }}>
          <Quote className="absolute top-8 right-8 w-16 h-16 text-[#3B82F6]/10" />

          <div className="flex gap-1 mb-6">
            {[0,1,2,3,4].map((i) => (
              <Star key={i} className="w-5 h-5 fill-[#FFB000] text-[#FFB000]" />
            ))}
          </div>

          <blockquote key={active} className="font-display font-semibold text-2xl md:text-3xl lg:text-[2.25rem] text-[#081A45] leading-[1.25] animate-pop-in text-pretty">
            "{t.quote}"
          </blockquote>

          <div className="mt-10 flex items-center justify-between">
            <div>
              <div className="font-display font-bold text-[#0B1E66]">{t.role}</div>
              <div className="text-sm text-muted-foreground font-premium">{t.company}</div>
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-[#0B1E66]" : "w-2 bg-[#0B1E66]/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
