import { useState, FormEvent } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { Lock } from "@phosphor-icons/react";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/brand/logo.gif";
import { toast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const { user, isAdmin, loading, signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [submitting, setSubmitting] = useState(false);

  if (!loading && user && isAdmin) return <Navigate to="/admin" replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const fn = mode === "signin" ? signIn : signUp;
    const { error } = await fn(email, password);
    setSubmitting(false);
    if (error) {
      toast({ title: "Authentication failed", description: error.message, variant: "destructive" });
      return;
    }
    if (mode === "signup") {
      toast({ title: "Account created", description: "Ask an administrator to grant you admin access." });
    } else {
      navigate("/admin");
    }
  };

  return (
    <div className="min-h-screen grid place-items-center bg-muted/40 p-6">
      <div className="w-full max-w-md bg-card border border-border/60 rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center text-center gap-3 mb-6">
          <img src={logo} alt="Nextgenlytics" className="h-16 md:h-20 rounded" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Nextgenlytics Content Management</p>
          <h1 className="text-2xl font-bold font-heading text-foreground inline-flex items-center gap-2">
            <Lock size={20} className="text-accent" /> Admin Portal
          </h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full h-11 px-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full h-11 px-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
          >
            {submitting ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-4 text-sm text-primary hover:text-accent w-full text-center"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </div>
  );
}