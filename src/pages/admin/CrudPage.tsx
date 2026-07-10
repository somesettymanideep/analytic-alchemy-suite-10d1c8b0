import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Pencil, Plus, Trash, X } from "@phosphor-icons/react";

type Field = {
  key: string;
  label: string;
  type: "text" | "textarea" | "boolean";
  required?: boolean;
};

type Props = {
  table: "blogs" | "whitepapers" | "research";
  title: string;
  fields: Field[];
  listColumns: string[];
};

type Row = Record<string, any> & { id: string; created_at?: string };

export default function CrudPage({ table, title, fields, listColumns }: Props) {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Row | null>(null);
  const [open, setOpen] = useState(false);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false });
    if (error) toast({ title: "Load failed", description: error.message });
    setRows((data as Row[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [table]);

  const openNew = () => {
    const blank: Row = { id: "" };
    fields.forEach((f) => (blank[f.key] = f.type === "boolean" ? true : ""));
    setEditing(blank);
    setOpen(true);
  };

  const openEdit = (r: Row) => {
    setEditing({ ...r });
    setOpen(true);
  };

  const save = async () => {
    if (!editing) return;
    const payload: any = {};
    fields.forEach((f) => (payload[f.key] = editing[f.key] ?? (f.type === "boolean" ? false : null)));
    for (const f of fields) {
      if (f.required && !payload[f.key]) {
        toast({ title: "Missing field", description: `${f.label} is required` });
        return;
      }
    }
    const q = editing.id
      ? await supabase.from(table).update(payload).eq("id", editing.id)
      : await supabase.from(table).insert(payload);
    if (q.error) return toast({ title: "Save failed", description: q.error.message });
    toast({ title: "Saved" });
    setOpen(false);
    setEditing(null);
    load();
  };

  const remove = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message });
    toast({ title: "Deleted" });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-bold text-3xl text-primary">{title}</h1>
          <p className="mt-1 text-muted-foreground">Manage {title.toLowerCase()}.</p>
        </div>
        <button onClick={openNew}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
          <Plus size={16} weight="bold" /> New
        </button>
      </div>

      <div className="mt-6 bg-card border border-border/60 rounded-xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="p-8 text-center text-muted-foreground">Loading…</div>
        ) : rows.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">No entries yet. Click "New" to add one.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 text-left">
                <tr>
                  {listColumns.map((c) => (
                    <th key={c} className="px-4 py-3 font-semibold text-primary capitalize">{c.replace("_", " ")}</th>
                  ))}
                  <th className="px-4 py-3 w-32 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-muted/30">
                    {listColumns.map((c) => (
                      <td key={c} className="px-4 py-3 max-w-xs truncate">
                        {typeof r[c] === "boolean" ? (
                          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                            r[c] ? "bg-emerald-100 text-emerald-700" : "bg-muted text-muted-foreground"
                          }`}>
                            {r[c] ? "Yes" : "No"}
                          </span>
                        ) : (
                          r[c] ?? <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button onClick={() => openEdit(r)} className="p-2 rounded hover:bg-muted" aria-label="Edit">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => remove(r.id)} className="p-2 rounded hover:bg-destructive/10 text-destructive" aria-label="Delete">
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

      {open && editing && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={() => setOpen(false)}>
          <div className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-border/60 sticky top-0 bg-card">
              <h2 className="font-heading font-bold text-xl text-primary">
                {editing.id ? "Edit" : "New"} {title.slice(0, -1)}
              </h2>
              <button onClick={() => setOpen(false)} className="p-2 rounded hover:bg-muted">
                <X size={18} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {fields.map((f) => (
                <div key={f.key}>
                  <Label htmlFor={f.key}>{f.label}{f.required && " *"}</Label>
                  {f.type === "textarea" ? (
                    <Textarea id={f.key} rows={4} value={editing[f.key] ?? ""}
                      onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })} />
                  ) : f.type === "boolean" ? (
                    <div className="mt-2 flex items-center gap-2">
                      <input id={f.key} type="checkbox" checked={!!editing[f.key]}
                        onChange={(e) => setEditing({ ...editing, [f.key]: e.target.checked })}
                        className="h-4 w-4 rounded border-border" />
                      <span className="text-sm text-muted-foreground">Visible on public site</span>
                    </div>
                  ) : (
                    <Input id={f.key} value={editing[f.key] ?? ""}
                      onChange={(e) => setEditing({ ...editing, [f.key]: e.target.value })} />
                  )}
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-border/60 flex justify-end gap-3 sticky bottom-0 bg-card">
              <button onClick={() => setOpen(false)}
                className="h-10 px-4 rounded-lg border border-border font-semibold hover:bg-muted">Cancel</button>
              <button onClick={save}
                className="h-10 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">Save</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}