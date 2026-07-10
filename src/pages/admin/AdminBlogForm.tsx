import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft } from "@phosphor-icons/react";
import { toast } from "@/hooks/use-toast";

type Form = {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  image_url: string;
  published: boolean;
};

const empty: Form = {
  title: "",
  excerpt: "",
  content: "",
  category: "",
  author: "",
  image_url: "",
  published: false,
};

export default function AdminBlogForm() {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();
  const [form, setForm] = useState<Form>(empty);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (isNew) return;
    (async () => {
      const { data, error } = await supabase.from("blogs").select("*").eq("id", id!).maybeSingle();
      if (error) toast({ title: "Load failed", description: error.message, variant: "destructive" });
      if (data) {
        setForm({
          title: data.title ?? "",
          excerpt: data.excerpt ?? "",
          content: data.content ?? "",
          category: data.category ?? "",
          author: data.author ?? "",
          image_url: data.image_url ?? "",
          published: !!data.published,
        });
      }
      setLoading(false);
    })();
  }, [id, isNew]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const payload = { ...form };
    const { error } = isNew
      ? await supabase.from("blogs").insert(payload)
      : await supabase.from("blogs").update(payload).eq("id", id!);
    setSaving(false);
    if (error) return toast({ title: "Save failed", description: error.message, variant: "destructive" });
    toast({ title: isNew ? "Blog created" : "Blog updated" });
    navigate("/admin/blogs");
  };

  if (loading) return <div className="text-muted-foreground">Loading…</div>;

  const field = "mt-1 w-full px-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary";

  return (
    <div className="max-w-3xl">
      <Link to="/admin/blogs" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary">
        <ArrowLeft size={14} /> Back to blogs
      </Link>
      <h1 className="mt-3 text-2xl md:text-3xl font-bold font-heading text-primary">
        {isNew ? "New blog post" : "Edit blog post"}
      </h1>

      <form onSubmit={submit} className="mt-6 bg-card border border-border/60 rounded-xl p-6 space-y-5">
        <div>
          <label className="text-sm font-medium">Title *</label>
          <input required className={field} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium">Category</label>
            <input className={field} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. SAP, AI & Data" />
          </div>
          <div>
            <label className="text-sm font-medium">Author</label>
            <input className={field} value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Image URL</label>
          <input className={field} value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="https://…" />
        </div>
        <div>
          <label className="text-sm font-medium">Excerpt</label>
          <textarea rows={3} className={field} value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium">Content (Markdown or HTML)</label>
          <textarea rows={14} className={field} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        </div>
        <label className="inline-flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
            className="h-4 w-4"
          />
          Published (visible on site)
        </label>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={saving}
            className="h-10 px-5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 disabled:opacity-60"
          >
            {saving ? "Saving…" : isNew ? "Create" : "Save changes"}
          </button>
          <Link
            to="/admin/blogs"
            className="h-10 px-5 grid place-items-center rounded-lg border border-border font-semibold hover:bg-muted"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}