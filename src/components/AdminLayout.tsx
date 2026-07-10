import { NavLink, Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Article, ChartBar, EnvelopeSimple, FileText, Flask, House, SignOut } from "@phosphor-icons/react";

const nav = [
  { to: "/admin", icon: House, label: "Dashboard", end: true },
  { to: "/admin/blogs", icon: Article, label: "Blogs" },
  { to: "/admin/whitepapers", icon: FileText, label: "Whitepapers" },
  { to: "/admin/research", icon: Flask, label: "Research" },
  { to: "/admin/contacts", icon: EnvelopeSimple, label: "Contact Submissions" },
];

export default function AdminLayout() {
  const { session, isAdmin, loading, signOut, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="min-h-screen grid place-items-center text-muted-foreground">Loading…</div>;
  }
  if (!session) return <Navigate to="/admin/login" state={{ from: location }} replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center px-6">
        <div className="max-w-md text-center bg-card border border-border/60 rounded-2xl p-8 shadow-lg">
          <h1 className="font-heading font-bold text-2xl text-primary">Access denied</h1>
          <p className="mt-2 text-muted-foreground">
            Your account ({user?.email}) is signed in but has no admin role. Ask an existing admin to grant access.
          </p>
          <button onClick={signOut}
            className="mt-6 inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
            <SignOut size={16} /> Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ChartBar size={22} weight="bold" />
            <span className="font-heading font-bold">Admin Panel</span>
          </div>
          <p className="mt-1 text-xs text-primary-foreground/70 truncate">{user?.email}</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-primary-foreground/80 hover:bg-white/10 hover:text-white"
                }`
              }>
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10">
          <button onClick={signOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-primary-foreground/80 hover:bg-white/10 hover:text-white transition">
            <SignOut size={18} /> Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1 overflow-x-auto">
        <div className="p-6 md:p-10 max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}