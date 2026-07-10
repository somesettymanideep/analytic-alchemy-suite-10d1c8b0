import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Trash } from "@phosphor-icons/react";
import { toast } from "@/hooks/use-toast";

type Row = {
  id: string;
  name: string | null;
  email: string | null;
  company: string | null;
  phone: string | null;
  subject: string | null;
  message: string | null;
  created_at: string;
};

export default function AdminContacts() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<Row | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setRows(data ?? []);
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const remove = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    toast({ title: "Deleted" });
    load();
  };

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold font-heading text-primary">Contact Messages</h1>
      <p className="mt-1 text-muted-foreground">Inbound submissions from the contact form.</p>

      <div className="mt-6 bg-card border border-border/60 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              <th className="px-4 py-3 font-semibold">Received</th>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Company</th>
              <th className="px-4 py-3 font-semibold">Subject</th>
              <th className="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">Loading…</td></tr>
            ) : rows.length === 0 ? (
              <tr><td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">No messages yet.</td></tr>
            ) : rows.map((r) => (
              <tr key={r.id} className="border-t border-border/60 cursor-pointer hover:bg-muted/40" onClick={() => setOpen(r)}>
                <td className="px-4 py-3 text-muted-foreground">{new Date(r.created_at).toLocaleString()}</td>
                <td className="px-4 py-3 font-medium">{r.name ?? "—"}</td>
                <td className="px-4 py-3">{r.email ?? "—"}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.company ?? "—"}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.subject ?? "—"}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end">
                    <button
                      onClick={(e) => { e.stopPropagation(); remove(r.id); }}
                      className="p-2 rounded hover:bg-destructive/10 text-destructive"
                      title="Delete"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" onClick={() => setOpen(null)}>
          <div className="bg-card w-full max-w-lg rounded-xl border border-border/60 p-6" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold font-heading">{open.subject || "Message"}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{new Date(open.created_at).toLocaleString()}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div><dt className="text-muted-foreground inline">From: </dt><dd className="inline font-medium">{open.name} &lt;{open.email}&gt;</dd></div>
              {open.company && <div><dt className="text-muted-foreground inline">Company: </dt><dd className="inline">{open.company}</dd></div>}
              {open.phone && <div><dt className="text-muted-foreground inline">Phone: </dt><dd className="inline">{open.phone}</dd></div>}
            </dl>
            <div className="mt-4 whitespace-pre-wrap text-sm border-t border-border/60 pt-4">{open.message}</div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setOpen(null)} className="h-10 px-4 rounded-lg border border-border font-semibold hover:bg-muted">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}