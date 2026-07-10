import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Article, EnvelopeSimple, FileText, Flask } from "@phosphor-icons/react";

type Counts = { blogs: number; whitepapers: number; research: number; contacts: number };

export default function AdminDashboard() {
  const [c, setC] = useState<Counts>({ blogs: 0, whitepapers: 0, research: 0, contacts: 0 });

  useEffect(() => {
    (async () => {
      const [b, w, r, ct] = await Promise.all([
        supabase.from("blogs").select("*", { count: "exact", head: true }),
        supabase.from("whitepapers").select("*", { count: "exact", head: true }),
        supabase.from("research").select("*", { count: "exact", head: true }),
        supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      ]);
      setC({
        blogs: b.count ?? 0,
        whitepapers: w.count ?? 0,
        research: r.count ?? 0,
        contacts: ct.count ?? 0,
      });
    })();
  }, []);

  const cards = [
    { label: "Blogs", value: c.blogs, icon: Article, color: "bg-blue-500" },
    { label: "Whitepapers", value: c.whitepapers, icon: FileText, color: "bg-emerald-500" },
    { label: "Research", value: c.research, icon: Flask, color: "bg-violet-500" },
    { label: "Contact Submissions", value: c.contacts, icon: EnvelopeSimple, color: "bg-amber-500" },
  ];

  return (
    <div>
      <h1 className="font-heading font-bold text-3xl text-primary">Dashboard</h1>
      <p className="mt-1 text-muted-foreground">Overview of your content and inbound leads.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div key={card.label} className="bg-card border border-border/60 rounded-xl p-5 shadow-sm">
            <div className={`h-10 w-10 rounded-lg ${card.color} text-white grid place-items-center`}>
              <card.icon size={20} weight="bold" />
            </div>
            <div className="mt-4 text-3xl font-bold font-heading text-primary">{card.value}</div>
            <div className="text-sm text-muted-foreground">{card.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}