import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, CalendarBlank, CaretLeft, CaretRight, PuzzlePiece, RocketLaunch, type Icon as LucideIcon } from "@phosphor-icons/react";
import AiChipIcon from "@/components/icons/AiChipIcon";

type Announcement = {
  Icon: LucideIcon | typeof AiChipIcon;
  message: string;
  cta: string;
  href: string;
};

const announcements: Announcement[] = [
  {
    Icon: RocketLaunch,
    message: "New: BlueGecko Platform v2 — accelerate SAP & D365 migrations by up to 50%",
    cta: "Explore BlueGecko",
    href: "/products/bluegecko",
  },
  {
    Icon: AiChipIcon,
    message: "Discover our AI Solutions — from AI Foundry to Databricks Genie & SAP Joule",
    cta: "See AI Solutions",
    href: "/solutions/ai-strategy-and-readiness-assessment",
  },
  {
    Icon: PuzzlePiece,
    message: "Meet your Extended Delivery Team — embedded engineers governed from Amsterdam",
    cta: "Visit EDT",
    href: "/edt",
  },
  {
    Icon: BookOpen,
    message: "New on the blog: SAP Clean Core in 2025 — what European enterprises must know",
    cta: "Read more",
    href: "/blog",
  },
  {
    Icon: CalendarBlank,
    message: "Ready to see it in action? Book a personalised demo with our team",
    cta: "Request a demo",
    href: "/contact",
  },
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % announcements.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + announcements.length) % announcements.length);
  const next = () => setIndex((i) => (i + 1) % announcements.length);

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container flex items-center gap-3 h-9 text-xs md:text-sm">
        <div className="flex-1 overflow-hidden relative h-5">
          {announcements.map((item, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex items-center justify-center gap-2 md:gap-3 text-center font-medium transition-all duration-500 ${
                i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <item.Icon size={14} className="shrink-0 text-accent" />
              <span className="truncate">{item.message}</span>
              <Link
                to={item.href}
                className="hidden sm:inline-flex items-center gap-1 shrink-0 rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] md:text-xs font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {item.cta}
                <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <Link
            to={announcements[index].href}
            aria-label={announcements[index].cta}
            className="sm:hidden inline-flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[11px] font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ArrowRight size={12} />
          </Link>
          <button
            onClick={prev}
            aria-label="Previous announcement"
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <CaretLeft size={14} />
          </button>
          <button
            onClick={next}
            aria-label="Next announcement"
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <CaretRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}