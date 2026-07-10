import { useEffect, useState, FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Plus, PencilSimple, Trash, ArrowLeft } from "@phosphor-icons/react";
import { toast } from "@/hooks/use-toast";

type FieldDef = { key: string; label: string; type: "text" | "textarea" | "checkbox"; required?: boolean; rows?: number; placeholder?: string };

type Config = {
  table: "whitepapers" | "research";
  title: string;
  listPath: string;
  fields: FieldDef[];
  columns: { key: string; label: string }[];
};

const CONFIGS: Record<string, Config> = {
  whitepapers: {
    table: "whitepapers",
    title: "Whitepapers",
    listPath: "/admin/whitepapers",
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "category", label: "Category", type: "text" },
      { key: "author", label: "Author", type: "text" },
      { key: "image_url", label: "Image URL", type: "text", placeholder: "https://…" },
      { key: "file_url", label: "File URL (PDF)", type: "text", placeholder: "https://…" },
      { key: "description", label: "Description", type: "textarea", rows: 6 },
      { key: "published", label: "Published (visible on site)", type: "checkbox" },
    ],
    columns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
      { key: "author", label: "Author" },
    ],
  },
  research: {
    table: "research",
    title: "Research",
    listPath: "/admin/research",
    fields: [
      { key: "title", label: "Title", type: "text", required: true },
      { key: "category", label: "Category", type: "text" },
      { key: "author", label: "Author", type: "text" },
      { key: "image_url", label: "Image URL", type: "text", placeholder: "https://…" },
      { key: "summary", label: "Summary", type: "textarea", rows: 4 },
      { key: "content", label: "Content (Markdown or HTML)", type: "textarea", rows: 14 },
      { key: "published", label: "Published (visible on site)", type: "checkbox" },
    ],
    columns: [
      { key: "title", label: "Title" },
      { key: "category", label: "Category" },
      { key: "author", label: "Author" },
    ],
  },
};

// ─── List component ───────────────────────────────────────────────────────
export function AdminResourceList({ resource }: { resource: keyof typeof CONFIGS }) {
  const cfg = CONFIGS[resource];
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase.from(cfg.table).select("*").order("created_at", { ascending: false });
    if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
    setRows(data ?? []);
    setLoading(false);
  };
  useEffect(() => { load(); }, [resource]);

  const remove = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    const { error } = await supabase.from(cfg.table).delete().eq("id", id);
    if (error) return toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    toast({ title: "Deleted" });
    load();
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-heading text-primary">{cfg.title}</h1>
          <p className="mt-1 text-muted-foreground">Manage {cfg.title.toLowerCase()} content.</p>
        </div>
        <Link
          to={`${cfg.listPath}/new`}
          className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90"
        >
          <Plus size={16} /> Add {resource.slice(0, -1)}
        </Link>
      </div>

      <div className="mt-6 bg-card border border-border/60 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left">
            <tr>
              {cfg.columns.map((c) => (
                <th key={c.key} className="px-4 py-3 font-semibold">{c.label}</th>
              ))}
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={cfg.columns.length + 2} className="px-4 py-8 text-center text-muted-foreground">Loading…</td></tr>
            ) : rows.length === 0 ? (
              <tr><td colSpan={cfg.columns.length + 2} className="px-4 py-8 text-center text-muted-foreground">No items yet.</td></tr>
            ) : rows.map((r) => (
              <tr key={r.id} className="border-t border-border/60">
                {cfg.columns.map((c) => (
                  <td key={c.key} className="px-4 py-3">{r[c.key] ?? "—"}</td>
                ))}
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                    r.published ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                  }`}>
                    {r.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link to={`${cfg.listPath}/${r.id}`} className="p-2 rounded hover:bg-muted text-primary" title="Edit">
                      <PencilSimple size={16} />
                    </Link>
                    <button onClick={() => remove(r.id)} className="p-2 rounded hover:bg-destructive/10 text-destructive" title="Delete">
                      <Trash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── Form component ───────────────────────────────────────────────────────
export function AdminResourceForm({ resource }: { resource: keyof typeof CONFIGS }) {
  const cfg = CONFIGS[resource];
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id || id === "new";
  const [form, setForm] = useState<Record<string, any>>(() =>
    Object.fromEntries(cfg.fields.map((f) => [f.key, f.type === "checkbox" ? false : ""]))
  );
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error } = await supabase.from(cfg.table).select("*").eq("id", id!).maybeSingle();
      if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
      if (data) {
        const next: Record<string, any> = {};
        for (const f of cfg.fields) next[f.key] = data[f.key] ?? (f.type === "checkbox" ? false : "");
        setForm(next);
      }
      setLoading(false);
    })();
  }, [id, isNew, cfg.table]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = isNew
      ? await supabase.from(cfg.table).insert(form as any)
      : await supabase.from(cfg.table).update(form as any).eq("id", id!);
    setSaving(false);
    if (error) return toast({ title: "Save failed", description: error.message, variant: "destructive" });
    toast({ title: isNew ? "Created" : "Updated" });
    navigate(cfg.listPath);
  };

  if (loading) return <div className="text-muted-foreground">Loading…</div>;

  const field = "mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary";

  return (
    <div className="max-w-3xl">
      <Link to={cfg.listPath} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft size={14} /> Back
      </Link>
      <h1 className="mt-3 text-2xl md:text-3xl font-bold font-heading text-primary">
        {isNew ? `New ${resource.slice(0, -1)}` : `Edit ${resource.slice(0, -1)}`}
      </h1>
      <form onSubmit={submit} className="mt-6 bg-card border border-border/60 rounded-xl p-6 space-y-5">
        {cfg.fields.map((f) => (
          <div key={f.key}>
            {f.type === "checkbox" ? (
              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={!!form[f.key]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.checked })}
                  className="h-4 w-4"
                />
                {f.label}
              </label>
            ) : (
              <>
                <label className="text-sm font-medium">{f.label}{f.required && " *"}</label>
                {f.type === "textarea" ? (
                  <textarea
                    rows={f.rows ?? 4}
                    className={field}
                    value={form[f.key] ?? ""}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  />
                ) : (
                  <input
                    required={f.required}
                    placeholder={f.placeholder}
                    className={field}
                    value={form[f.key] ?? ""}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  />
                )}
              </>
            )}
          </div>
        ))}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="h-10 px-5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-60"
          >
            {saving ? "Saving…" : isNew ? "Create" : "Save changes"}
          </button>
          <Link to={cfg.listPath} className="h-10 px-5 grid place-items-center rounded-lg border border-border font-semibold hover:bg-muted">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}