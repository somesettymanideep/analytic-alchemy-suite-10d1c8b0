import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Database, ShieldCheck, Building2, LineChart } from "lucide-react";
import capabilitiesHub from "@/assets/capabilities-hub.jpg";

const capabilities = [
  {
    icon: Database,
    title: "Data Migration",
    desc: "Move legacy, SAP, Dynamics, and cloud data with zero-loss assurance and parallel-run validation.",
  },
  {
    icon: ShieldCheck,
    title: "AI Governance",
    desc: "Policy, lineage, and quality controls that keep human and automated decisions trustworthy.",
  },
  {
    icon: Building2,
    title: "ERP Modernization",
    desc: "S/4HANA, D365, and clean-core roadmaps that close the gap between go-live and real value.",
  },
  {
    icon: LineChart,
    title: "Real Time Analytics",
    desc: "Live dashboards, predictive models, and decision-ready data products for every function.",
  },
];

export default function CapabilitiesHubSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.12);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      {/* Subtle background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #0B1F8C 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Brand glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ease-out ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-primary text-xs font-semibold tracking-wider uppercase mb-5">
            What we deliver
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-5">
            Four Disciplines.
            <br />
            <span className="text-accent">One Integrated Engine.</span>
          </h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed">
            Every engagement ties data migration, governance, ERP modernization, and
            real-time analytics into a single coherent outcome.
          </p>
        </div>

        {/* Hub layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left boxes */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <CapabilityCard
              data={capabilities[0]}
              visible={sectionVisible}
              delay={150}
            />
            <CapabilityCard
              data={capabilities[1]}
              visible={sectionVisible}
              delay={300}
            />
          </div>

          {/* Center image */}
          <div
            className={`lg:col-span-6 relative transition-all duration-1000 ease-out ${
              sectionVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border-2 border-primary/10 shadow-2xl shadow-primary/10 bg-[#0B1F8C]">
              <img
                src={capabilitiesHub}
                alt="NGSIT integrated data, AI, and ERP capabilities hub"
                className="w-full h-full object-cover"
                width={1024}
                height={1024}
                loading="lazy"
              />
              {/* Center badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-5 py-3 rounded-full bg-white/95 backdrop-blur-sm shadow-xl border border-primary/10">
                <span className="font-heading font-bold text-primary text-sm md:text-base tracking-tight">
                  NGSIT Engine
                </span>
              </div>
            </div>

            {/* Decorative orbit rings */}
            <div className="absolute inset-0 -m-6 lg:-m-10 rounded-[3rem] border border-primary/10 pointer-events-none" />
            <div className="absolute inset-0 -m-12 lg:-m-16 rounded-[3.5rem] border border-dashed border-primary/10 pointer-events-none" />
          </div>

          {/* Right boxes */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <CapabilityCard
              data={capabilities[2]}
              visible={sectionVisible}
              delay={450}
            />
            <CapabilityCard
              data={capabilities[3]}
              visible={sectionVisible}
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  data,
  visible,
  delay,
}: {
  data: (typeof capabilities)[0];
  visible: boolean;
  delay: number;
}) {
  const Icon = data.icon;

  return (
    <div
      className={`group relative p-6 rounded-2xl bg-[#F8FAFC] border-2 border-primary/10 hover:border-primary hover:bg-primary transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-primary text-lg mb-2 group-hover:text-white transition-colors">
            {data.title}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-white/90 transition-colors">
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
