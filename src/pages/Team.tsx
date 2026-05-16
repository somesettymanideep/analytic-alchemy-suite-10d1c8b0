import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import teamBanner from "@/assets/banner-team.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import hugoImg from "@/assets/hugo-cooijmans.jpg";
import dataAiFounderImg from "@/assets/founder-data-ai.jpg";
import deliveryFounderImg from "@/assets/founder-delivery.jpg";
import cofounderImg from "@/assets/team-cofounder.jpg";
import deliveryImg from "@/assets/team-delivery.jpg";
import microsoftImg from "@/assets/team-microsoft.jpg";
import aiImg from "@/assets/team-ai.jpg";
import cloudImg from "@/assets/team-cloud.jpg";
import sapImg from "@/assets/team-sap.jpg";
import { Linkedin, Mail, MapPin, Check } from "lucide-react";

const founders = [
  {
    name: "Hugo Cooijmans",
    role: "SAP Strategy & Architecture",
    location: "Amsterdam, NL",
    quote:
      "Bridging the gap between legacy enterprise systems and the speed of modern product engineering.",
    image: hugoImg,
    highlights: [
      "30+ yrs SAP programme leadership",
      "Dutch SAP SI ecosystem pioneer",
      "Tier-1 enterprise references",
    ],
  },
  {
    name: "Rajiv Menon",
    role: "Data & AI Engineering",
    location: "Amsterdam, NL",
    quote:
      "Turning abstract data lakes into concrete decision-making engines with LLMs and predictive analytics.",
    image: dataAiFounderImg,
    highlights: [
      "20+ yrs data & AI architecture",
      "BlueGecko product architect",
      "Lakehouse & agentic AI delivery",
    ],
  },
  {
    name: "Arjun Krishnan",
    role: "Global Delivery & Operations",
    location: "Hyderabad, IN",
    quote:
      "Scale is only successful when paired with meticulous quality engineering and cultural alignment.",
    image: deliveryFounderImg,
    highlights: [
      "35+ specialists across IN hubs",
      "European-grade governance offshore",
      "100% senior-led engagements",
    ],
  },
];

const team = [
  {
    name: "Co-Founder",
    role: "Co-Founder & Data / AI Lead",
    location: "Amsterdam, NL",
    bio: "Two decades architecting data platforms and AI systems at Tier-1 SIs. Drives the BlueGecko product vision and delivery model.",
    image: cofounderImg,
  },
  {
    name: "Delivery Lead",
    role: "Head of Delivery — India",
    location: "Hyderabad, IN",
    bio: "Runs onshore-offshore engagement orchestration. Ensures European delivery standards across Hyderabad and Lucknow specialist teams.",
    image: deliveryImg,
  },
  {
    name: "Microsoft Practice Lead",
    role: "D365 & Azure Lead",
    location: "Amsterdam, NL",
    bio: "Microsoft stack veteran across Dynamics 365, Power Platform, and Azure data services for enterprise transformations.",
    image: microsoftImg,
  },
  {
    name: "AI Practice Lead",
    role: "Applied AI & Agents Lead",
    location: "Amsterdam, NL",
    bio: "Leads our AI Agents portfolio — operationalising LLM and agentic systems for measurable enterprise outcomes.",
    image: aiImg,
  },
  {
    name: "Cloud Practice Lead",
    role: "Cloud & AMS Lead",
    location: "Hyderabad, IN",
    bio: "Hybrid cloud migration, modernisation, and 24/7 application managed services across SAP, Microsoft, and data platforms.",
    image: cloudImg,
  },
  {
    name: "SAP Architecture Lead",
    role: "S/4HANA Architect",
    location: "Lucknow, IN",
    bio: "End-to-end S/4HANA architecture, brownfield conversion, and clean-core delivery for regulated industries.",
    image: sapImg,
  },
];

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-accent/20 text-primary font-heading text-5xl font-bold">
      {initials}
    </div>
  );
}

function TeamCard({ m }: { m: (typeof team)[number] }) {
  return (
    <article className="group relative h-full flex flex-col bg-card rounded-2xl border border-border/60 shadow-md shadow-primary/5 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40">
      {/* Image with gradient overlay & floating name plate */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        {m.image ? (
          <img
            src={m.image}
            alt={m.name}
            loading="lazy"
            width={768}
            height={768}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
          />
        ) : (
          <Initials name={m.name} />
        )}
        <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider text-primary border border-border/60 shadow-sm">
          <MapPin size={10} /> {m.location}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-foreground font-heading">{m.name}</h3>
        <p className="mt-0.5 text-sm font-semibold text-primary">{m.role}</p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{m.bio}</p>

        <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mt-4 flex items-center justify-between">
          <a
            href="mailto:Info@nextgenlytics.com"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors group/cta"
          >
            Connect
            <span className="transition-transform group-hover/cta:translate-x-0.5">→</span>
          </a>
          <div className="flex items-center gap-1.5">
            <a
              href="#"
              aria-label={`${m.name} on LinkedIn`}
              className="p-2 rounded-full bg-muted/60 text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="mailto:Info@nextgenlytics.com"
              aria-label={`Email ${m.name}`}
              className="p-2 rounded-full bg-muted/60 text-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
}

export default function Team() {
  const { ref: founderRef, isVisible: founderVisible } = useScrollReveal();
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal(0.1);
  const trackRef = useRef<HTMLDivElement>(null);

  // Pause animation on hover for accessibility
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onEnter = () => (el.style.animationPlayState = "paused");
    const onLeave = () => (el.style.animationPlayState = "running");
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Duplicate the team list for a seamless infinite marquee
  const marquee = [...team, ...team];

  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Navbar />
      <main>
        <PageBanner
          image={teamBanner}
          eyebrow="Our Team"
          title="The specialists behind Nextgenlytics"
          description="35+ practitioners across Amsterdam, Hyderabad, and Lucknow — combining Tier-1 SI experience with deep product engineering on BlueGecko."
        />

        {/* Founders — Magazine asymmetric editorial stack */}
        <section className="container pb-20 md:pb-28" ref={founderRef}>
          {/* Editorial header */}
          <div
            className={`mb-20 md:mb-28 border-l-4 border-accent pl-6 md:pl-8 max-w-4xl ${
              founderVisible ? "animate-reveal-up" : "opacity-0"
            }`}
          >
            <span className="text-accent font-bold tracking-[0.25em] text-xs uppercase block mb-4 font-heading">
              Founding Partners
            </span>
            <h2 className="text-primary text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] font-heading text-balance">
              Three operators.<br />One conviction.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed text-pretty">
              Nextgenlytics was built by three partners who spent careers running the kind of programmes our clients now hand to us — combining SAP heritage, AI engineering, and global delivery into a single accountable team.
            </p>
          </div>

          {/* Asymmetric editorial stack */}
          <div className="space-y-24 md:space-y-40">
            {founders.map((f, i) => {
              const num = String(i + 1).padStart(2, "0");
              const flipped = i === 1;
              const shadowClass = flipped
                ? "shadow-[-24px_24px_0_0_hsl(var(--accent)/0.12)] md:shadow-[-30px_30px_0_0_hsl(var(--accent)/0.12)]"
                : "shadow-[24px_24px_0_0_hsl(var(--primary)/0.08)] md:shadow-[30px_30px_0_0_hsl(var(--primary)/0.08)]";
              const quoteBorder = flipped
                ? "border-r-2 border-accent pr-6 md:text-right"
                : "border-l-2 border-accent pl-6";

              return (
                <article
                  key={f.name}
                  className={`flex flex-col gap-10 md:gap-16 items-start ${
                    flipped ? "md:flex-row-reverse" : "md:flex-row"
                  } ${founderVisible ? "animate-reveal-up" : "opacity-0"}`}
                  style={{ animationDelay: `${i * 160}ms` }}
                >
                  {/* Portrait column */}
                  <div className="w-full md:w-5/12">
                    <div className={`relative overflow-hidden rounded-sm bg-muted ${shadowClass}`}>
                      <img
                        src={f.image}
                        alt={f.name}
                        loading="lazy"
                        width={768}
                        height={960}
                        className="w-full aspect-[4/5] object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* Content column */}
                  <div className={`w-full md:w-7/12 ${flipped ? "md:text-right" : ""}`}>
                    {/* Numeral + divider + location */}
                    <div
                      className={`flex items-center gap-4 md:gap-6 mb-6 md:mb-8 ${
                        flipped ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-6xl md:text-8xl font-bold text-primary/10 leading-none font-heading">
                        {num}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                      <span className="inline-flex items-center gap-1 px-3 py-1 border border-border text-muted-foreground text-[10px] font-bold uppercase tracking-widest rounded">
                        <MapPin size={10} /> {f.location}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">
                      {f.name}
                    </h3>
                    <p className="text-accent font-semibold text-base md:text-lg mb-6 md:mb-8 uppercase tracking-wide">
                      {f.role}
                    </p>

                    <blockquote
                      className={`text-xl md:text-2xl text-foreground/80 leading-snug font-light italic mb-8 md:mb-10 ${quoteBorder}`}
                    >
                      "{f.quote}"
                    </blockquote>

                    {/* Highlights + actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                      <ul
                        className={`space-y-3 ${
                          flipped ? "md:order-2" : ""
                        }`}
                      >
                        {f.highlights.map((h) => (
                          <li
                            key={h}
                            className={`flex items-center gap-3 text-sm text-foreground/80 ${
                              flipped ? "md:justify-end md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span className="font-medium">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`flex items-center gap-4 ${
                          flipped ? "md:order-1 md:justify-start" : "md:justify-end"
                        }`}
                      >
                        <a
                          href="#"
                          aria-label={`${f.name} on LinkedIn`}
                          className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href="mailto:Info@nextgenlytics.com"
                          aria-label={`Email ${f.name}`}
                          className="w-12 h-12 border border-border text-primary flex items-center justify-center rounded-full hover:border-primary hover:bg-primary/5 transition-colors"
                        >
                          <Mail size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Rest of the team — slow infinite marquee */}
        <section className="pb-24 md:pb-32" ref={carouselRef}>
          <div className="container mb-10 flex items-end justify-between gap-6 flex-wrap">
            <div className={`max-w-xl ${carouselVisible ? "animate-reveal-up" : "opacity-0"}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Practice Leads
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-bold text-foreground font-heading">
                The team building and running it with us
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">Hover to pause →</p>
          </div>

          <div
            className={`relative overflow-hidden group ${
              carouselVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            {/* Edge fade masks */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />

            <div ref={trackRef} className="flex gap-6 md:gap-8 w-max animate-marquee will-change-transform py-4">
              {marquee.map((m, idx) => (
                <div key={m.name + idx} className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0">
                  <TeamCard m={m} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
