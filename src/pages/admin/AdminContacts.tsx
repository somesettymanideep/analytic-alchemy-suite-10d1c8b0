import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Trash } from "@phosphor-icons/react";

type Row = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  subject: string | null;
  message: string;
  created_at: string;
};

export default function AdminContacts() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Row | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast({ title: "Load failed", description: error.message });
    setRows((data as Row[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const remove = async (id: string) => {
    if (!confirm("Delete this submission?")) return;
    const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message });
    toast({ title: "Deleted" });
    if (selected?.id === id) setSelected(null);
    load();
  };

  return (
    <div>
      <h1 className="font-heading font-bold text-3xl text-primary">Contact Submissions</h1>
      <p className="mt-1 text-muted-foreground">Inbound messages from the public contact form.</p>

      <div className="mt-6 bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">Loading…</div>
        ) : rows.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">No submissions yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold text-primary">Date</th>
                  <th className="px-4 py-3 font-semibold text-primary">Name</th>
                  <th className="px-4 py-3 font-semibold text-primary">Email</th>
                  <th className="px-4 py-3 font-semibold text-primary">Company</th>
                  <th className="px-4 py-3 font-semibold text-primary">Subject</th>
                  <th className="px-4 py-3 w-24 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-muted/30 cursor-pointer" onClick={() => setSelected(r)}>
                    <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                      {new Date(r.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 font-medium">{r.name}</td>
                    <td className="px-4 py-3 text-accent">{r.email}</td>
                    <td className="px-4 py-3">{r.company ?? "—"}</td>
                    <td className="px-4 py-3 max-w-xs truncate">{r.subject ?? "—"}</td>
                    <td className="px-4 py-3 text-right" onClick={(e) => e.stopPropagation()}>
                      <button onClick={() => remove(r.id)}
                        className="p-2 rounded hover:bg-destructive/10 text-destructive" aria-label="Delete">
                        <Trash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={() => setSelected(null)}>
          <div className="w-full max-w-lg bg-card rounded-2xl shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="font-heading font-bold text-xl text-primary">{selected.name}</h2>
            <p className="text-sm text-muted-foreground">
              {new Date(selected.created_at).toLocaleString()}
            </p>
            <dl className="mt-4 space-y-2 text-sm">
              <div><dt className="font-semibold inline">Email: </dt><dd className="inline text-accent">{selected.email}</dd></div>
              {selected.company && <div><dt className="font-semibold inline">Company: </dt><dd className="inline">{selected.company}</dd></div>}
              {selected.phone && <div><dt className="font-semibold inline">Phone: </dt><dd className="inline">{selected.phone}</dd></div>}
              {selected.subject && <div><dt className="font-semibold inline">Subject: </dt><dd className="inline">{selected.subject}</dd></div>}
            </dl>
            <div className="mt-4">
              <div className="font-semibold text-sm mb-1">Message</div>
              <div className="p-3 bg-muted rounded-lg text-sm whitespace-pre-wrap">{selected.message}</div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setSelected(null)}
                className="h-10 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}