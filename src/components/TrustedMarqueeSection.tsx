const logos = ["SAP", "Microsoft", "Databricks", "Snowflake", "Oracle", "AWS", "Azure", "Google Cloud"];

export default function TrustedMarqueeSection() {
  const row = [...logos, ...logos];
  return (
    <section className="relative py-16 md:py-20 bg-[#F8FAFC] overflow-hidden border-y border-border/50">
      <div className="container mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground font-premium">
          Trusted by teams building on the world's leading platforms
        </p>
      </div>
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

        <div className="flex w-max animate-marquee-x">
          {row.map((name, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-14 shrink-0"
            >
              <span className="font-display text-2xl md:text-3xl font-bold text-[#0B1E66]/40 hover:text-[#0B1E66] transition-colors duration-300 tracking-tight whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}