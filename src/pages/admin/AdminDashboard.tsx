import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Newspaper, FileText, Flask, Envelope } from "@phosphor-icons/react";

export default function AdminDashboard() {
  const [counts, setCounts] = useState({ blogs: 0, whitepapers: 0, research: 0, contacts: 0 });

  useEffect(() => {
    (async () => {
      const [b, w, r, c] = await Promise.all([
        supabase.from("blogs").select("*", { count: "exact", head: true }),
        supabase.from("whitepapers").select("*", { count: "exact", head: true }),
        supabase.from("research").select("*", { count: "exact", head: true }),
        supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
      ]);
      setCounts({
        blogs: b.count ?? 0,
        whitepapers: w.count ?? 0,
        research: r.count ?? 0,
        contacts: c.count ?? 0,
      });
    })();
  }, []);

  const stats = [
    { label: "Blogs", value: counts.blogs, icon: Newspaper, color: "text-blue-600 bg-blue-50" },
    { label: "Whitepapers", value: counts.whitepapers, icon: FileText, color: "text-purple-600 bg-purple-50" },
    { label: "Research", value: counts.research, icon: Flask, color: "text-emerald-600 bg-emerald-50" },
    { label: "Contact Messages", value: counts.contacts, icon: Envelope, color: "text-amber-600 bg-amber-50" },
  ];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold font-heading text-primary">Dashboard</h1>
      <p className="mt-1 text-muted-foreground">Overview of content and inbound messages.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border/60 rounded-xl p-5">
            <div className={`h-10 w-10 rounded-lg grid place-items-center ${s.color}`}>
              <s.icon size={20} />
            </div>
            <div className="mt-4 text-3xl font-bold font-heading">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}