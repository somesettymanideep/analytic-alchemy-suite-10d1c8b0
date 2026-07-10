import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarCheck, Clock, Envelope, MapPin, MonitorPlay, Phone } from "@phosphor-icons/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import contactBanner from "@/assets/banners/banner-contact.jpg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { postForm, ApiError } from "@/lib/api";
import { supabase } from "@/integrations/supabase/client";

type Mode = "consultation" | "demo";

const COMPANY_EMAIL = "Info@nextgenlytics.com";
const COMPANY_LOCATION = "B. Amsterdam, Johan Huizingalaan 763A, 1066 VH, Amsterdam";
const COMPANY_PHONE = "+31 6 57 29 50 20";
const WORKING_HOURS = [
  { day: "Mon – Fri", hours: "8:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
];

const SOLUTION_OPTIONS = [
  "SAP Solutions",
  "Microsoft Solutions",
  "AI Solutions",
  "Data Engineering",
];

const PRODUCT_OPTIONS = [
  "BlueGecko Platform",
  "Falcon Mapping",
  "Code Cheetah",
  "Owl Sight",
];

export default function Contact() {
  const [mode, setMode] = useState<Mode>("consultation");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    solution: "",
    product: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.company.trim()) {
      toast({ title: "Missing details", description: "Please fill in name, email, and company." });
      return;
    }
    if (mode === "consultation" && !form.message.trim()) {
      toast({ title: "Missing details", description: "Please tell us what you'd like to discuss." });
      return;
    }
    if (mode === "demo" && !form.product) {
      toast({ title: "Missing details", description: "Please select a product for the demo." });
      return;
    }

    setSubmitting(true);
    try {
      // Always store submission in the admin database (best-effort, never blocks UX)
      const subject = mode === "consultation"
        ? (form.solution ? `Consultation: ${form.solution}` : "Consultation request")
        : `Demo request: ${form.product}`;
      supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        phone: form.phone || null,
        subject,
        message: form.message || `Demo request for ${form.product}`,
      }).then(({ error }) => { if (error) console.warn("contact_submissions:", error.message); });

      if (mode === "consultation") {
        await postForm("/api/forms/consultation", {
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company,
          message: form.solution ? `Solution of interest: ${form.solution}\n\n${form.message}` : form.message,
        });
      } else {
        await postForm("/api/forms/demo", {
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company,
          product: form.product,
          message: form.message || undefined,
        });
      }
      toast({
        title: mode === "consultation" ? "Consultation requested" : "Demo requested",
        description: "Thanks — we'll get back to you within one business day.",
      });
      setForm({ name: "", email: "", company: "", phone: "", message: "", solution: "", product: "" });
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: err instanceof ApiError ? err.message : "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pb-20">
        <PageBanner
          image={contactBanner}
          eyebrow="Get in touch"
          title="Let's talk about your next move."
          description="Whether you need a strategic consultation or want to see our products in action, we're here to help. Pick the option that fits, and our team will respond within one business day."
        />
        <div className="container max-w-6xl mt-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>

          <div className="mt-6 grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14">
            {/* Left: info */}
            <aside className="space-y-6">
              {/* Branded header card */}
              <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 shadow-xl shadow-primary/20">
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent/20 blur-2xl" aria-hidden />
                <div className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full bg-primary-foreground/5 blur-3xl" aria-hidden />
                <div className="relative">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider">
                    Get in touch
                  </span>
                  <h2 className="mt-4 text-2xl md:text-3xl font-bold font-heading leading-tight">
                    Reach the Nextgenlytics team
                  </h2>
                  <p className="mt-3 text-sm md:text-base text-primary-foreground/80 leading-relaxed">
                    Prefer email or a call? Use the details below — we typically respond within one business day.
                  </p>
                </div>
              </div>

              {/* Contact info cards */}
              <div className="space-y-3">
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Envelope className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email us</p>
                    <p className="mt-1 font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                      {COMPANY_EMAIL}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY_PHONE.replace(/[^+\d]/g, "")}`}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Call us</p>
                    <p className="mt-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                      {COMPANY_PHONE}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Visit our office</p>
                    <p className="mt-1 font-semibold text-foreground leading-relaxed">
                      {COMPANY_LOCATION}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Working hours</p>
                      <ul className="mt-2 space-y-1.5">
                        {WORKING_HOURS.map((w) => (
                          <li key={w.day} className="flex items-center justify-between gap-3 text-sm">
                            <span className="font-semibold text-foreground">{w.day}</span>
                            <span className="text-muted-foreground">{w.hours}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: form card */}
            <section className="rounded-3xl border border-border bg-card shadow-xl shadow-primary/5 p-6 md:p-10">
              {/* Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-full bg-muted">
                <button
                  type="button"
                  onClick={() => setMode("consultation")}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    mode === "consultation"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  Book Consultation
                </button>
                <button
                  type="button"
                  onClick={() => setMode("demo")}
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    mode === "demo"
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <MonitorPlay className="w-4 h-4" />
                  Request Demo
                </button>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-foreground">
                  {mode === "consultation" ? "Book a free consultation" : "Request a product demo"}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {mode === "consultation"
                    ? "Tell us about your goals and we'll set up a 30-minute discovery call."
                    : "See our platform in action with a tailored walkthrough by our solutions team."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name *</Label>
                    <Input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email *</Label>
                    <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" required value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+31 …" />
                  </div>
                </div>

                {mode === "consultation" && (
                  <div className="space-y-2">
                    <Label htmlFor="solution">Solution of interest</Label>
                    <Select value={form.solution} onValueChange={(v) => update("solution", v)}>
                      <SelectTrigger id="solution">
                        <SelectValue placeholder="Select a solution…" />
                      </SelectTrigger>
                      <SelectContent className="max-h-80">
                        {SOLUTION_OPTIONS.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {mode === "demo" && (
                  <div className="space-y-2">
                    <Label htmlFor="product">Select product</Label>
                    <Select value={form.product} onValueChange={(v) => update("product", v)}>
                      <SelectTrigger id="product">
                        <SelectValue placeholder="Select a product…" />
                      </SelectTrigger>
                      <SelectContent>
                        {PRODUCT_OPTIONS.map((p) => (
                          <SelectItem key={p} value={p}>
                            {p}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">
                    {mode === "consultation" ? "What would you like to discuss?" : "What would you like to see?"}
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder={
                      mode === "consultation"
                        ? "Briefly describe your challenge or goals…"
                        : "Tell us which use cases or features you'd like to explore…"
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-accent text-accent-foreground hover:shadow-xl hover:shadow-accent/30 active:scale-[0.97] transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none"
                >
                  {submitting ? "Sending…" : `${mode === "consultation" ? "Book Consultation" : "Request Demo"} →`}
                </button>

                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted by Nextgenlytics about your enquiry.
                </p>
              </form>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
