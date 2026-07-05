import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import logoAsset from "@/assets/logo.png.asset.json";
const logo = logoAsset.url;
import { Menu, X, ChevronDown, ArrowRight, Factory, Cog, FileText, Database, BarChart3, LifeBuoy, Truck, ShoppingBag, HeartPulse, Landmark, Users, Zap, Boxes, Cloud, Sparkles, Server, Building2, UsersRound, PenLine, ScrollText, Video, RefreshCw, Microscope, LayoutGrid, Map, Code2, Eye, ArrowLeftRight, Mail } from "lucide-react";
import AnnouncementBar from "./AnnouncementBar";

type SolutionCategory = {
  key: string;
  label: string;
  Icon: typeof Boxes;
  items: { label: string; href: string }[];
};

const solutionsMenu: SolutionCategory[] = [
  {
    key: "sap",
    label: "SAP Solutions",
    Icon: Boxes,
    items: [
      { label: "SAP S/4HANA Data Migration & Implementation", href: "/solutions/sap-s4hana" },
      { label: "SAP ECC Support, Optimisation & Migration", href: "/solutions/sap-ecc" },
      { label: "RISE with SAP — Data Readiness & Migration", href: "/solutions/rise-with-sap" },
      { label: "SAP Datasphere & Business Data Cloud", href: "/solutions/sap-business-data-cloud" },
      { label: "SAP BTP Integration & Extension Services", href: "/solutions/sap-btp" },
    ],
  },
  {
    key: "microsoft",
    label: "Microsoft Solutions",
    Icon: Cloud,
    items: [
      { label: "D365 Finance & Operations — Implementation & AMS", href: "/solutions/microsoft-dynamics-365" },
      { label: "Dynamics 365 Business Central — Migration & Implementation", href: "/solutions/business-central" },
      { label: "Dynamics AX Migration & Modernisation to D365", href: "/solutions/dynamics-ax-migration" },
      { label: "Microsoft Fabric Data Engineering & Analytics", href: "/solutions/microsoft-fabric" },
    ],
  },
  {
    key: "ai",
    label: "AI Solutions",
    Icon: Sparkles,
    items: [
      { label: "ERP AI Agents", href: "/solutions/erp-ai-agents" },
      { label: "AI Foundry", href: "/solutions/ai-foundry" },
      { label: "Databricks Genie", href: "/solutions/databricks-genie" },
      { label: "Data-Led AI Transformation", href: "/solutions/data-led-ai-transformation" },
      { label: "SAP Joule", href: "/solutions/sap-joule" },
      { label: "Snowflake Cortex", href: "/solutions/snowflake-cortex" },
      { label: "AI Testing & Validation", href: "/solutions/ai-testing-validation" },
    ],
  },
  {
    key: "data",
    label: "Data Engineering",
    Icon: Server,
    items: [
      { label: "Snowflake Data Platform Services", href: "/solutions/snowflake" },
      { label: "Databricks Lakehouse Engineering", href: "/solutions/databricks" },
      { label: "Microsoft Fabric Data Engineering", href: "/solutions/microsoft-fabric" },
      { label: "SAP Analytics Cloud — Reporting & Insights", href: "/solutions/sap-analytics-cloud" },
      { label: "Data Governance", href: "/solutions/data-governance" },
      { label: "AI-Driven Organisation Training", href: "/solutions/ai-organisation-training" },
      { label: "Data Maturity Assessment & Advisory", href: "/solutions/data-maturity-assessment" },
    ],
  },
];


const insightsMenu: { label: string; Icon: typeof Boxes; href: string }[] = [
  { label: "Blogs", Icon: PenLine, href: "/blog" },
  { label: "Whitepapers", Icon: ScrollText, href: "/whitepapers" },
  { label: "Research", Icon: Microscope, href: "/research" },
];

const aboutMenu: { label: string; Icon: typeof Boxes; href: string }[] = [
  { label: "About nextgenlytics", Icon: Building2, href: "/about" },
  { label: "Our Team", Icon: UsersRound, href: "/team" },
  { label: "Contact", Icon: Mail, href: "/contact" },
];

const productsMenu: { label: string; Icon: typeof Boxes; href: string; subItems?: { label: string; Icon: typeof Boxes; href: string }[] }[] = [
  {
    label: "BlueGecko Platform",
    Icon: LayoutGrid,
    href: "/products/bluegecko",
    subItems: [
      { label: "Falcon Mapping", Icon: Map, href: "/products/falcon-mapping" },
      { label: "Code Cheetah", Icon: Code2, href: "/products/code-cheetah" },
      { label: "Owl Sight", Icon: Eye, href: "/products/owl-sight" },
      { label: "Orca Migrate", Icon: ArrowLeftRight, href: "/products/orca-migrate" },
    ],
  },
];

const clientWorkMenu: { label: string; Icon: typeof Boxes; href: string }[] = [
  { label: "AMS Services", Icon: LifeBuoy, href: "/ams-services" },
  { label: "Case Study", Icon: FileText, href: "/case-study" },
];

const industriesMenu = [
  { label: "Manufacturing", desc: "Smart factories and connected operations.", Icon: Factory, href: "/industries/manufacturing" },
  { label: "Logistics & Supply Chain", desc: "End-to-end visibility and resilience.", Icon: Truck, href: "/industries/logistics" },
  { label: "Retail & Wholesale", desc: "Omnichannel commerce and demand insight.", Icon: ShoppingBag, href: "/industries/retail" },
  { label: "Healthcare", desc: "Patient-centric data and compliance.", Icon: HeartPulse, href: "/industries/healthcare" },
  { label: "Financial Services", desc: "Secure, real-time financial intelligence.", Icon: Landmark, href: "/industries/financial-services" },
  { label: "Staffing", desc: "Workforce analytics and talent operations.", Icon: Users, href: "/industries/staffing" },
  { label: "Energy & Utilities", desc: "Sustainable, data-driven grid operations.", Icon: Zap, href: "/industries/energy" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "#solutions", hasMenu: "solutions" as const },
  { label: "Products", href: "#products", hasMenu: "products" as const },
  { label: "Industries", href: "#industries", hasMenu: "industries" as const },
  { label: "Extended Delivery Team", href: "/edt" },
  { label: "Client Work", href: "#cases", hasMenu: "clientWork" as const },
  { label: "Insights", href: "#insights", hasMenu: "insights" as const },
  { label: "About", href: "#about", hasMenu: "about" as const },
  { label: "Careers", href: "/careers" },
];

type MenuKey = "insights" | "about" | "products" | "clientWork" | "industries" | "solutions" | null;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenuKey, setOpenMenuKey] = useState<MenuKey>(null);
  const [mobileMenuKey, setMobileMenuKey] = useState<MenuKey>(null);
  const [activeSolution, setActiveSolution] = useState<string>(solutionsMenu[0].key);
  const [mobileSolution, setMobileSolution] = useState<string>(solutionsMenu[0].key);
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isSubPage = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (key: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenuKey(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenuKey(null), 120);
  };
  const closeNow = () => {
    setOpenMenuKey(null);
    setExpandedProduct(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_hsl(var(--border))]"
          : "bg-white shadow-[0_1px_3px_hsl(var(--border))]"
      }`}
    >
      <AnnouncementBar />
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="nextgenlytics" className="h-14 md:h-16 rounded" />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) =>
            l.hasMenu ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => openMenu(l.hasMenu as MenuKey)}
                onMouseLeave={scheduleClose}
              >
                <button
                  onClick={() =>
                    setOpenMenuKey((v) => (v === l.hasMenu ? null : (l.hasMenu as MenuKey)))
                  }
                  className="flex items-center gap-1 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
                  aria-expanded={openMenuKey === l.hasMenu}
                >
                  {l.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${openMenuKey === l.hasMenu ? "rotate-180" : ""}`}
                  />
                </button>

                {openMenuKey === "insights" && l.hasMenu === "insights" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(720px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("insights")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-2 gap-2">
                      {insightsMenu.map((i) => (
                        <a
                          key={i.label}
                          href={i.href}
                          onClick={closeNow}
                          className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <i.Icon size={18} />
                          </span>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1">
                            {i.label}
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "solutions" && l.hasMenu === "solutions" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(1040px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-0 animate-fade-in overflow-hidden"
                    onMouseEnter={() => openMenu("solutions")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-[260px_1fr]">
                      <div className="bg-muted/40 border-r border-border/60 p-3 flex flex-col gap-1">
                        {solutionsMenu.map((cat) => {
                          const Icon = cat.Icon;
                          const active = activeSolution === cat.key;
                          return (
                            <button
                              key={cat.key}
                              type="button"
                              onMouseEnter={() => setActiveSolution(cat.key)}
                              onFocus={() => setActiveSolution(cat.key)}
                              onClick={() => setActiveSolution(cat.key)}
                              className={`w-full flex items-center gap-3 rounded-xl p-3 text-left transition-all duration-200 ${
                                active
                                  ? "bg-primary text-primary-foreground shadow-md"
                                  : "text-foreground/80 hover:bg-background"
                              }`}
                            >
                              <span
                                className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors ${
                                  active ? "bg-primary-foreground/15 text-primary-foreground" : "bg-primary/10 text-primary"
                                }`}
                              >
                                <Icon size={18} />
                              </span>
                              <span className="text-sm font-semibold flex-1">{cat.label}</span>
                              <ArrowRight
                                size={14}
                                className={active ? "opacity-100" : "opacity-50"}
                              />
                            </button>
                          );
                        })}
                      </div>
                      <div className="p-5">
                        {(() => {
                          const cat = solutionsMenu.find((c) => c.key === activeSolution) ?? solutionsMenu[0];
                          return (
                            <>
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
                                  {cat.label}
                                </h4>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {cat.items.map((it) => (
                                  <a
                                    key={it.label}
                                    href={it.href}
                                    onClick={closeNow}
                                    className="flex items-center gap-2 rounded-lg border border-border/60 p-2.5 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                                  >
                                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                                     <span className="text-sm font-medium text-foreground group-hover:text-primary flex-1 leading-snug">
                                      {it.label}
                                    </span>
                                    <ArrowRight size={12} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                  </a>
                                ))}
                              </div>
                            </>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                )}



                {openMenuKey === "about" && l.hasMenu === "about" && (
                  <div
                    className="absolute right-0 top-full mt-2 w-[min(360px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("about")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {aboutMenu.map((i) => (
                        <a
                          key={i.label}
                          href={i.href}
                          onClick={closeNow}
                          className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <i.Icon size={18} />
                          </span>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1">
                            {i.label}
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "products" && l.hasMenu === "products" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(720px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("products")}
                    onMouseLeave={scheduleClose}
                  >
                    {productsMenu.map((parent) => (
                      <div
                        key={parent.label}
                        onMouseEnter={() => setExpandedProduct(parent.label)}
                        onMouseLeave={() => setExpandedProduct(null)}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedProduct((v) => (v === parent.label ? null : parent.label))
                          }
                          className="w-full flex items-center gap-4 rounded-2xl border border-border/60 p-4 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group mb-3 text-left"
                        >
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                            <parent.Icon size={24} />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-base font-bold text-foreground group-hover:text-primary">
                              {parent.label}
                            </span>
                            <span className="block text-xs text-muted-foreground mt-0.5">
                              AI-powered data management platform — migration, mapping, ETL and quality unified in one place.
                            </span>
                          </span>
                          <ChevronDown
                            size={18}
                            className={`text-accent shrink-0 transition-transform duration-200 ${expandedProduct === parent.label ? "rotate-180" : ""}`}
                          />
                        </button>
                        {expandedProduct === parent.label && (
                          <div className="grid grid-cols-2 gap-2 animate-fade-in">
                            <a
                              href={parent.href}
                              onClick={closeNow}
                              className="col-span-2 flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-3 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 group"
                            >
                              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <parent.Icon size={18} />
                              </span>
                              <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1">
                                View {parent.label}
                              </span>
                              <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            {parent.subItems?.map((i) => (
                              <a
                                key={i.label}
                                href={i.href}
                                onClick={closeNow}
                                className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                              >
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                  <i.Icon size={18} />
                                </span>
                                <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1">
                                  {i.label}
                                </span>
                                <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {openMenuKey === "clientWork" && l.hasMenu === "clientWork" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(440px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("clientWork")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {clientWorkMenu.map(({ label, Icon, href }) => (
                        <a
                          key={label}
                          href={href}
                          onClick={closeNow}
                          className="flex items-center gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon size={18} />
                          </span>
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary flex-1 whitespace-nowrap">
                            {label}
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {openMenuKey === "industries" && l.hasMenu === "industries" && (
                  <div
                    className="fixed left-1/2 -translate-x-1/2 top-16 md:top-20 w-[min(880px,95vw)] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-fade-in"
                    onMouseEnter={() => openMenu("industries")}
                    onMouseLeave={scheduleClose}
                  >
                    <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-2">
                      {industriesMenu.map(({ label, desc, Icon, href }) => (
                        <a
                          key={label}
                          href={href ?? "#industries"}
                          onClick={closeNow}
                          className="flex items-start gap-3 rounded-xl border border-border/60 p-3 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-background group"
                        >
                          <span className="flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon size={18} />
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="block text-sm font-semibold text-foreground group-hover:text-primary whitespace-nowrap">
                              {label}
                            </span>
                            <span className="block text-xs text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                              {desc}
                            </span>
                          </span>
                          <ArrowRight size={14} className="text-accent opacity-70 mt-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) =>
              l.hasMenu ? (
                <div key={l.label}>
                  <button
                    onClick={() =>
                      setMobileMenuKey((v) => (v === l.hasMenu ? null : (l.hasMenu as MenuKey)))
                    }
                    className="w-full flex items-center justify-between text-sm font-medium text-foreground/80 py-2"
                  >
                    {l.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileMenuKey === l.hasMenu ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileMenuKey === "insights" && l.hasMenu === "insights" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {insightsMenu.map((i) => (
                          <li key={i.label}>
                            <a
                              href={i.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                            >
                              <i.Icon size={16} className="text-primary" />
                              <span>{i.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "solutions" && l.hasMenu === "solutions" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {solutionsMenu.map((cat) => {
                          const Icon = cat.Icon;
                          const active = mobileSolution === cat.key;
                          return (
                            <button
                              key={cat.key}
                              type="button"
                              onClick={() => setMobileSolution(cat.key)}
                              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                                active
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted text-foreground/80"
                              }`}
                            >
                              <Icon size={12} />
                              {cat.label}
                            </button>
                          );
                        })}
                      </div>
                      <ul className="grid grid-cols-2 gap-x-3">
                        {(solutionsMenu.find((c) => c.key === mobileSolution) ?? solutionsMenu[0]).items.map((it) => (
                          <li key={it.label}>
                            <a
                              href={it.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-1.5 text-sm text-foreground/80"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                              <span className="leading-snug">{it.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "about" && l.hasMenu === "about" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {aboutMenu.map((i) => (
                          <li key={i.label}>
                            <a
                              href={i.href}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                            >
                              <i.Icon size={16} className="text-primary" />
                              <span>{i.label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "products" && l.hasMenu === "products" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {productsMenu.map((parent) => (
                          <li key={parent.label}>
                            <button
                              type="button"
                              onClick={() =>
                                setExpandedProduct((v) => (v === parent.label ? null : parent.label))
                              }
                              className="w-full flex items-center justify-between py-2 text-sm font-semibold text-foreground/90"
                            >
                              <span className="flex items-center gap-2">
                                <parent.Icon size={18} className="text-primary" />
                                <span>{parent.label}</span>
                              </span>
                              <ChevronDown
                                size={16}
                                className={`text-accent transition-transform ${expandedProduct === parent.label ? "rotate-180" : ""}`}
                              />
                            </button>
                            {expandedProduct === parent.label && (
                              <ul className="pl-5 border-l border-border/40 ml-1 mt-1 mb-2 space-y-1 animate-fade-in">
                                <li>
                                  <a
                                    href={parent.href}
                                    onClick={() => {
                                      setOpen(false);
                                      setMobileMenuKey(null);
                                      setExpandedProduct(null);
                                    }}
                                    className="flex items-center gap-2 py-1.5 text-sm font-medium text-foreground/90"
                                  >
                                    <parent.Icon size={14} className="text-primary" />
                                    <span>View {parent.label}</span>
                                  </a>
                                </li>
                                {parent.subItems?.map((i) => (
                                  <li key={i.label}>
                                    <a
                                      href={i.href}
                                      onClick={() => {
                                        setOpen(false);
                                        setMobileMenuKey(null);
                                        setExpandedProduct(null);
                                      }}
                                      className="flex items-center gap-2 py-1.5 text-sm text-foreground/80"
                                    >
                                      <i.Icon size={14} className="text-accent" />
                                      <span>{i.label}</span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "clientWork" && l.hasMenu === "clientWork" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {clientWorkMenu.map(({ label, Icon, href }) => (
                          <li key={label}>
                            <a
                              href={href}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-center gap-2 py-2 text-sm text-foreground/80"
                            >
                              <Icon size={16} className="text-primary" />
                              <span>{label}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {mobileMenuKey === "industries" && l.hasMenu === "industries" && (
                    <div className="pl-3 border-l border-border/60 ml-1 mb-2">
                      <ul>
                        {industriesMenu.map(({ label, desc, Icon, href }) => (
                          <li key={label}>
                            <a
                              href={href ?? "#industries"}
                              onClick={() => {
                                setOpen(false);
                                setMobileMenuKey(null);
                              }}
                              className="flex items-start gap-2 py-2 text-sm text-foreground/80"
                            >
                              <Icon size={16} className="text-primary mt-0.5" />
                              <span className="flex-1">
                                <span className="block font-medium">{label}</span>
                                <span className="block text-xs text-muted-foreground">{desc}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground/70 py-2"
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
