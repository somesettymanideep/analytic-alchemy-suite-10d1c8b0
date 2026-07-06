import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageBanner from "@/components/PageBanner";
import teamBanner from "@/assets/banner-team.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import rajaAsset from "@/assets/team/raja.png.asset.json";
import hugoAsset from "@/assets/team/hugo.png.asset.json";
import emilioAsset from "@/assets/team/emilio.png.asset.json";
import remyAsset from "@/assets/team/remy.png.asset.json";
import lokeshAsset from "@/assets/team/lokesh.png.asset.json";
import manognyaAsset from "@/assets/team/manognya.jpg.asset.json";
import mohanReddyAsset from "@/assets/team/mohan_reddy.jpeg.asset.json";
import nitinAsset from "@/assets/team/nitin.png.asset.json";
import paragAsset from "@/assets/team/parag.png.asset.json";
import pujeshAsset from "@/assets/team/Pujesh-2.jpeg.asset.json";
import sridharAsset from "@/assets/team/sridhar.png.asset.json";
import raviAsset from "@/assets/team/Ravi.png.asset.json";
import richaAsset from "@/assets/team/Richa.jpeg.asset.json";
import santhoshAsset from "@/assets/team/santhosh.jpg.asset.json";
import saraswathiAsset from "@/assets/team/saraswathi.jpg.asset.json";
import saritaAsset from "@/assets/team/sarita.png.asset.json";
import sowbarnikaAsset from "@/assets/team/Sowbarnika.png.asset.json";
import sravaniAsset from "@/assets/team/sravani.jpg.asset.json";
import sravyaAsset from "@/assets/team/sravya.jpeg.asset.json";
import ankitaAsset from "@/assets/team/ankita.jpg.asset.json";
import anuradhaAsset from "@/assets/team/anuradha.png.asset.json";
import bhuvaneshAsset from "@/assets/team/bhuvanesh.png.asset.json";
import kavishAsset from "@/assets/team/Kavish.jpeg.asset.json";
import { Linkedin, Mail, MapPin, Check } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const founders = [
  {
    name: "Raja Devarapu",
    role: "Co-Founder & CEO · Data, AI & ERP Transformation",
    location: "01 · Amsterdam, NL",
    quote:
      "Every enterprise deserves Tier-1 thinking. We built nextgenlytics to make that possible.",
    image: rajaAsset.url,
    linkedin: "https://linkedin.com/in/raja-devarapu/",
    email: "raja.devarapu@nextgenlytics.com",
    highlights: [
      "17 years architecting enterprise data and AI programmes for global organisations — ManpowerGroup, Nationwide Building Society, ANZ Bank, and beyond",
      "Visionary architect of BlueGecko — the Data and AI platform that delivers SAP, Microsoft, and any ERP transformation at a fraction of Tier-1 cost and twice the speed",
      "Founded nextgenlytics to give Dutch and European SMBs what was previously reserved for the Fortune 500 — world-class data, analytics, AI, and ERP capability, without the enterprise price tag",
    ],
  },
  {
    name: "Hugo Cooijmans",
    role: "CRO · Advisor",
    location: "North Brabant, NL",
    quote:
      "Bridging the gap between legacy enterprise systems and the speed of modern product engineering.",
    image: hugoAsset.url,
    linkedin: "https://www.linkedin.com/in/hugocooymans/",
    email: "Hugo.Cooijmans@nextgenlytics.com",
    highlights: [
      "30+ yrs building and leading SAP programmes across the Dutch enterprise market",
      "Pioneer of the Dutch SAP SI ecosystem — Tier-1 relationships built over three decades",
      "Advises nextgenlytics because focused, AI-native teams deliver what large consultancies no longer can",
    ],
  },
  {
    name: "Emilio Piers",
    role: "SVP Sales · Enterprise Technology & Transformation",
    location: "North Brabant, NL",
    quote:
      "The best technology never sells itself. The right conversation does.",
    image: emilioAsset.url,
    linkedin: "https://www.linkedin.com/in/emiliopiers/",
    email: "Emilio.Piers@nextgenlytics.com",
    highlights: [
      "Enterprise tech sales leadership across TCS, Tata Communications, EDS, and KPN Netherlands",
      "Drives new business across SAP, Microsoft, Data Engineering, and AI portfolios",
      "The commercial engine connecting world-class delivery with the organisations that need it",
    ],
  },
  {
    name: "Remy Gillet",
    role: "Business Development · CIO, CTO & PE Advisory",
    location: "Amsterdam, NL",
    quote:
      "Technology leaders trust people who have stood where they stand. That is why I joined nextgenlytics.",
    image: remyAsset.url,
    linkedin: "https://www.linkedin.com/in/remygillet/",
    email: "remy.gillet@nextgenlytics.com",
    highlights: [
      "Former CIO, CTO, and PE Operating Partner — 30+ yrs of board-level transformation",
      "Opens doors in the Dutch and European C-suite — peer to peer, executive to executive",
      "Joined nextgenlytics having seen first-hand what great data & AI transformation looks like",
    ],
  },
];

type TeamMember = {
  name: string;
  role: string;
  location: string;
  bio: string;
  image?: string;
  email?: string;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    name: "Sravya Syamala",
    role: "SAP Data Migration Expert | SQL/ETL Developer | Certified Scrum Master | Power BI",
    location: "7+ yrs · FTE",
    bio: "SAP Data Migration Expert with strong SQL Server/ETL development background, Certified Scrum Master, and Power BI practitioner.",
    email: "sravya.syamala@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/sravya-syamala-587649108/",
    image: sravyaAsset.url,
  },
  {
    name: "Sravani Vanukuri",
    role: "AI Engineer | Power BI | Certified Azure AI Engineer Associate",
    location: "2+ yrs · FTE",
    bio: "AI Engineer building intelligent solutions with Power BI and Azure AI services. Certified Azure AI Engineer Associate.",
    email: "sravani.vanukuri@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/sravani-vanukuri-42b59a267/",
    image: sravaniAsset.url,
  },
  {
    name: "Ankitha Sondhiya",
    role: "SAP Data Migration Expert | SQL/ETL Developer | SAP DataSphere",
    location: "5+ yrs · FTE",
    bio: "SAP Data Migration specialist with deep SQL Server/ETL experience and SAP DataSphere delivery expertise.",
    email: "ankita.sondhiya@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/ankita-sondhiya-244700233/",
    image: ankitaAsset.url,
  },
  {
    name: "Nitin Mandge",
    role: "SAP Data Migration Expert | SQL/ETL Developer | SAP DataSphere",
    location: "3+ yrs · FTE",
    bio: "SAP Data Migration engineer working across SQL Server/ETL pipelines and SAP DataSphere implementations.",
    email: "nitin.mandge@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/nitinmandge1/",
    image: nitinAsset.url,
  },
  {
    name: "Parag Agrawal",
    role: "UI Developer",
    location: "2+ yrs · FTE",
    bio: "UI Developer crafting responsive, performant front-end experiences for enterprise data products.",
    email: "parag.agrawal@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/parag-agrawal-b7b72a233/",
    image: paragAsset.url,
  },
  {
    name: "Manogya Kamarapu",
    role: "SAP Data Migration Expert | SQL/ETL Developer | AI Engineer",
    location: "8+ yrs · FTE",
    bio: "Senior practitioner blending SAP Data Migration, SQL Server/ETL development, and AI engineering across complex enterprise programmes.",
    linkedin: "https://www.linkedin.com/in/manogya-k-b8890a250/",
    image: manognyaAsset.url,
  },
  {
    name: "Bhuvanesh Mohan",
    role: "Jr AI / Data Engineer",
    location: "1.5 yrs · FTE",
    bio: "Junior AI and Data Engineer contributing to data pipelines and machine learning workflows.",
    email: "bhuvanesh.m@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/bhuvi-webdev/",
    image: bhuvaneshAsset.url,
  },
  {
    name: "Santhosh Vemula",
    role: "Jr Full Stack Developer",
    location: "Fresher · FTE",
    bio: "Full Stack Developer building modern web applications across the front-end and back-end stack.",
    email: "santhosh.vemula@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/vemula17",
    image: santhoshAsset.url,
  },
  {
    name: "Lokesh Pulakandam",
    role: "Infra Engineer | Certified Azure Administrator Associate",
    location: "3+ yrs · FTE",
    bio: "Infrastructure Engineer managing cloud and on-prem environments. Certified Azure Administrator Associate.",
    email: "lokesh.pulakandam@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/lokesh-reddy-pulakandam-961b33263/",
    image: lokeshAsset.url,
  },
  {
    name: "Saraswathi Mathala",
    role: "Jr DevOps Engineer | AWS Certified Cloud Practitioner",
    location: "Fresher · FTE",
    bio: "DevOps Engineer supporting CI/CD, cloud automation, and platform reliability. AWS Certified Cloud Practitioner.",
    email: "saraswathi.mathala@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/saraswathi-mathala-443701285/",
    image: saraswathiAsset.url,
  },
  {
    name: "Mohan Reddy Dhanireddy",
    role: "AI / Security Engineer",
    location: "2+ yrs · FTE",
    bio: "AI and Security Engineer hardening data and AI systems across the enterprise stack.",
    email: "nagamohan.dhanireddy@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/dhani-reddy/",
    image: mohanReddyAsset.url,
  },
  {
    name: "Sridhar Akula",
    role: "Senior Consultant",
    location: "20+ yrs · FTE",
    bio: "Veteran consultant bringing two decades of enterprise delivery experience across data and SAP programmes.",
    linkedin: "https://www.linkedin.com/in/sridhar-aakula",
    image: sridharAsset.url,
  },
  {
    name: "Kavish Srivastava",
    role: "Functional Analyst",
    location: "6+ yrs · FTE",
    bio: "Functional Analyst translating business requirements into clear, deliverable solutions for enterprise teams.",
    email: "kavish.srivastava@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/kavish-srivastava-967639372/",
    image: kavishAsset.url,
  },
  {
    name: "Anuradha Pasupuleti",
    role: "Functional Analyst",
    location: "1+ yrs · FTE",
    bio: "Functional Analyst supporting requirements gathering, process mapping, and stakeholder alignment.",
    email: "anuradha.pasupuleti@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/anuradha-pasupuleti-2399333b/",
    image: anuradhaAsset.url,
  },
  {
    name: "Sowbarnika Saravanan",
    role: "Technical Analyst",
    location: "5+ yrs · FTE",
    bio: "Technical Analyst bridging engineering and business teams to deliver data-driven solutions.",
    email: "sowbarnika.saravanan@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/sowbarnikas/",
    image: sowbarnikaAsset.url,
  },
  {
    name: "Ravi Jell",
    role: "Functional Analyst",
    location: "10+ yrs · FTE",
    bio: "Senior Functional Analyst with a decade of experience leading requirements and solution design.",
    email: "ravi.j@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/ravi-j-0164792a6/",
    image: raviAsset.url,
  },
  {
    name: "Saritha Reddy",
    role: "Functional Analyst",
    location: "1+ yrs · FTE",
    bio: "Functional Analyst contributing to enterprise solution delivery and stakeholder engagement.",
    email: "saritha.s@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/somanagurthy-saritha-0a3a032b9/",
    image: saritaAsset.url,
  },
  {
    name: "Richa Kathpalia",
    role: "IT Operations Analyst",
    location: "FTE",
    bio: "IT Operations Analyst ensuring smooth day-to-day operations across enterprise IT systems.",
    email: "richa.k@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/richa-kathpalia-883a86a5/",
    image: richaAsset.url,
  },
  {
    name: "Pujesh Yadav",
    role: "IT Database Analyst",
    location: "3+ yrs · FTE",
    bio: "Database Analyst maintaining performance, integrity, and reliability across enterprise data stores.",
    email: "pujesh.y@nextgenlytics.com",
    linkedin: "https://www.linkedin.com/in/pujeshkumaryadav",
    image: pujeshAsset.url,
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
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-primary/10 via-muted to-primary/5">
        {m.image ? (
          <>
            {/* Blurred backdrop unifies inconsistent passport-photo backgrounds */}
            <img
              src={m.image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60 saturate-150"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/30" />
            {/* Foreground portrait */}
            <img
              src={m.image}
              alt={m.name}
              loading="lazy"
              width={768}
              height={960}
              className="relative w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </>
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
            href={`mailto:${m.email ?? "Info@nextgenlytics.com"}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors group/cta"
          >
            Connect
            <span className="transition-transform group-hover/cta:translate-x-0.5">→</span>
          </a>
          <div className="flex items-center gap-1.5">
            {m.linkedin && (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="p-2 rounded-full bg-muted/60 text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Linkedin size={14} />
              </a>
            )}
            <a
              href={`mailto:${m.email ?? "Info@nextgenlytics.com"}`}
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
  const { ref: founderRef, isVisible: founderVisible } = useScrollReveal(0.05);
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal(0.1);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

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

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    const track = trackRef.current;
    if (!el) return;
    if (track) track.style.animationPlayState = "paused";
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

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
          title="The specialists behind nextgenlytics"
          description="35+ practitioners across Amsterdam, Hyderabad, and Lucknow — combining Tier-1 SI experience with deep product engineering on BlueGecko."
        />

        {/* Founders — Magazine asymmetric editorial stack */}
        <section className="container pt-20 md:pt-28 pb-20 md:pb-28" ref={founderRef}>
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
              Four operators.<br />One conviction.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed text-pretty">
              nextgenlytics is led by four partners who spent careers running the kind of programmes our clients now hand to us — combining SAP heritage, AI engineering, enterprise sales, and C-suite advisory into a single accountable team.
            </p>
          </div>

          {/* Asymmetric editorial stack */}
          <div className="space-y-24 md:space-y-40">
            {founders.map((f, i) => {
              const num = String(i + 1).padStart(2, "0");
              const flipped = i % 2 === 1;
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
                  <div className="w-full md:w-4/12 max-w-sm mx-auto md:mx-0">
                    <div className={`relative overflow-hidden rounded-sm bg-gradient-to-br from-primary/15 via-muted to-primary/5 ${shadowClass}`}>
                      {f.image ? (
                        <div className="relative w-full aspect-[4/5]">
                          <img
                            src={f.image}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60 saturate-150"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-primary/25" />
                          <img
                            src={f.image}
                            alt={f.name}
                            loading="lazy"
                            width={768}
                            height={960}
                            className="relative w-full h-full object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-[4/5]">
                          <Initials name={f.name} />
                        </div>
                      )}
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
                    <div className="space-y-6">
                      <ul className="space-y-3">
                        {f.highlights.map((h) => (
                          <li
                            key={h}
                            className={`flex items-start gap-3 text-sm text-foreground/80 ${
                              flipped ? "md:justify-end md:flex-row-reverse" : ""
                            }`}
                          >
                            <span className="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0 mt-0.5">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span className="font-medium">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`flex items-center gap-4 ${
                          flipped ? "md:justify-end" : ""
                        }`}
                      >
                        <a
                          href={f.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${f.name} on LinkedIn`}
                          className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href={`mailto:${f.email}`}
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
            <div className="flex items-center gap-3">
              <p className="text-sm text-muted-foreground hidden sm:block">Hover to pause</p>
              <button
                onClick={() => scrollByCards(-1)}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all shadow-md"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollByCards(1)}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all shadow-md"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div
            className={`relative group ${
              carouselVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div
              ref={scrollerRef}
              className="overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div ref={trackRef} className="flex gap-6 md:gap-8 w-max animate-marquee will-change-transform py-4">
                {marquee.map((m, idx) => (
                  <div key={m.name + idx} className="w-[280px] sm:w-[320px] md:w-[340px] shrink-0">
                    <TeamCard m={m} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
