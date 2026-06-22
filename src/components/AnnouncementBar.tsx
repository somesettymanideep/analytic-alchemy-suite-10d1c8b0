import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Megaphone } from "lucide-react";

const announcements = [
  "🚀 New: BlueGecko Platform v2 — accelerate SAP & D365 migrations by up to 50%",
  "📅 Upcoming Webinar: Agentic AI for Enterprise Data — Register now",
  "🏆 NGSIT named Top Data & AI Consulting Partner 2026",
  "🌍 Now operating across Amsterdam · Hyderabad · Lucknow — let's talk",
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
        <Megaphone size={14} className="shrink-0 text-accent" />
        <div className="flex-1 overflow-hidden relative h-5">
          {announcements.map((msg, i) => (
            <p
              key={i}
              className={`absolute inset-0 flex items-center justify-center text-center font-medium transition-all duration-500 ${
                i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              {msg}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous announcement"
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={next}
            aria-label="Next announcement"
            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}