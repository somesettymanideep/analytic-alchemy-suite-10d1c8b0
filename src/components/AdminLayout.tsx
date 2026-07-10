import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/brand/logo.gif";
import {
  ChartBar,
  Newspaper,
  FileText,
  Flask,
  Envelope,
  SignOut,
  House,
} from "@phosphor-icons/react";

const items = [
  { to: "/admin", label: "Dashboard", icon: ChartBar, end: true },
  { to: "/admin/blogs", label: "Blogs", icon: Newspaper },
  { to: "/admin/whitepapers", label: "Whitepapers", icon: FileText },
  { to: "/admin/research", label: "Research", icon: Flask },
  { to: "/admin/contacts", label: "Contact Messages", icon: Envelope },
];

export default function AdminLayout() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div className="min-h-screen grid place-items-center text-muted-foreground">Loading…</div>;
  }
  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen grid place-items-center p-6 text-center">
        <div>
          <h1 className="text-2xl font-bold font-heading">Access denied</h1>
          <p className="mt-2 text-muted-foreground">
            Your account does not have admin privileges.
          </p>
          <button
            onClick={async () => {
              await signOut();
              navigate("/admin/login");
            }}
            className="mt-4 h-10 px-4 rounded-lg bg-primary text-primary-foreground font-semibold"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-muted/30">
      <aside className="w-64 shrink-0 bg-card border-r border-border/60 flex flex-col">
        <div className="p-5 border-b border-border/60 flex items-center gap-3">
          <img src={logo} alt="Nextgenlytics" className="h-10 rounded" />
          <div>
            <div className="font-heading font-bold text-primary text-sm leading-tight">Admin</div>
            <div className="text-[11px] text-muted-foreground">Content Management</div>
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold"
                    : "text-foreground hover:bg-muted"
                }`
              }
            >
              <it.icon size={18} />
              {it.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-3 border-t border-border/60 space-y-1">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-muted"
          >
            <House size={18} /> View site
          </NavLink>
          <button
            onClick={async () => {
              await signOut();
              navigate("/admin/login");
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-destructive hover:bg-destructive/10"
          >
            <SignOut size={18} /> Sign out
          </button>
        </div>
      </aside>
      <main className="flex-1 min-w-0">
        <div className="p-6 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}