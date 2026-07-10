import { useRef, useState } from "react";
import logoAsset from "@/assets/brand/logo.gif";
const logo = logoAsset;
import footerBg from "@/assets/brand/footer-bg.jpg";
import { Link } from "react-router-dom";
import { CaretDown, Envelope, LinkedinLogo, MapPin, Phone, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

const productLinks = [
  { label: "BlueGecko", to: "/products/bluegecko" },
  { label: "Falcon Mapping", to: "/products/falcon-mapping" },
  { label: "Code Cheetah", to: "/products/code-cheetah" },
  { label: "Owlsight", to: "/products/owlsight" },
  { label: "Orca Migrate", to: "/products/orca-migrate" },
];

const solutionsMenu = [
  {
    key: "sap",
    label: "SAP Solutions",
    items: [
      { label: "SAP S/4HANA Data Migration & Implementation", to: "/solutions/sap-s4hana" },
      { label: "SAP ECC Support, Optimisation & Migration", to: "/solutions/sap-ecc" },
      { label: "RISE with SAP — Data Readiness & Migration", to: "/solutions/rise-with-sap" },
      { label: "SAP Datasphere & Business Data Cloud", to: "/solutions/sap-business-data-cloud" },
      { label: "SAP BTP Integration & Extension Services", to: "/solutions/sap-btp" },
    ],
  },
  {
    key: "microsoft",
    label: "Microsoft Solutions",
    items: [
      { label: "D365 Finance & Operations — Implementation & AMS", to: "/solutions/microsoft-dynamics-365" },
      { label: "Dynamics 365 Business Central — Migration & Implementation", to: "/solutions/business-central" },
      { label: "Dynamics AX Migration & Modernisation to D365", to: "/solutions/dynamics-ax-migration" },
      { label: "Microsoft Fabric Data Engineering & Analytics", to: "/solutions/microsoft-fabric-data-engineering" },
    ],
  },
  {
    key: "ai",
    label: "AI Solutions",
    items: [
      { label: "ERP AI Agents — Powered by BlueGecko", to: "/solutions/erp-ai-agents-powered-by-blue-gecko" },
      { label: "AI Strategy & Readiness Assessment", to: "/solutions/ai-strategy-and-readiness-assessment" },
      { label: "Predictive & Prescriptive Analytics", to: "/solutions/predictive-and-prescriptive-analytics" },
      { label: "Data-Led AI Transformation", to: "/solutions/data-led-ai-transformation" },
      { label: "Conversational AI for SAP & D365", to: "/solutions/conversational-ai" },
      { label: "AI-Powered Data Insights", to: "/solutions/ai-powered-data-insights" },
      { label: "AI Testing & Validation", to: "/solutions/ai-testing-validation" },
    ],
  },
  {
    key: "data",
    label: "Data Platform & Engineering",
    items: [
      { label: "Snowflake Data Platform Services", to: "/solutions/snowflake" },
      { label: "Databricks Lakehouse Engineering", to: "/solutions/databricks" },
      { label: "Microsoft Fabric Data Engineering", to: "/solutions/microsoft-fabric-data-engineering" },
      { label: "SAP Analytics Cloud — Reporting & Insights", to: "/solutions/sap-analytics-cloud" },
      { label: "Data Governance", to: "/solutions/data-governance" },
      { label: "AI-Driven Organisation Training", to: "/solutions/ai-organisation-training" },
      { label: "Data Maturity Assessment & Advisory", to: "/solutions/data-maturity-assessment" },
    ],
  },
];

const industriesLinks = [
  { label: "Manufacturing", to: "/industries/manufacturing" },
  { label: "Logistics & Supply Chain", to: "/industries/logistics" },
  { label: "Retail & Wholesale", to: "/industries/retail" },
  { label: "Healthcare", to: "/industries/healthcare" },
  { label: "Financial Services", to: "/industries/financial-services" },
  { label: "Staffing", to: "/industries/staffing" },
  { label: "Energy & Utilities", to: "/industries/energy" },
];

const clientWorkLinks = [
  { label: "Client Work", to: "/client-work" },
];

const edtLinks = [
  { label: "Extended Delivery Team", to: "/edt" },
];

const aboutLinks = [
  { label: "About Nextgenlytics", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Careers", to: "/careers" },
];

const contactItems = [
  {
    Icon: MapPin,
    label: "B. Amsterdam, Johan Huizingalaan 763A, 1066 VH, Amsterdam",
    href: "https://maps.google.com/?q=B.+Amsterdam+Johan+Huizingalaan+763A",
  },
  { Icon: Phone, label: "+31 6 57 29 50 20", href: "tel:+31657295020" },
  { Icon: Envelope, label: "Info@nextgenlytics.com", href: "mailto:Info@nextgenlytics.com" },
];

function FooterSolutionsMenu() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openCategory = (key: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenKey(key);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 150);
  };

  return (
    <div>
      <h4 className="text-primary-foreground font-semibold mb-4">Solutions</h4>
      <ul className="space-y-1">
        {solutionsMenu.map((cat) => {
          const isOpen = openKey === cat.key;
          return (
            <li key={cat.key} onMouseEnter={() => openCategory(cat.key)} onMouseLeave={scheduleClose}>
              <button
                type="button"
                onClick={() => setOpenKey((k) => (k === cat.key ? null : cat.key))}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-2 text-sm py-1.5 text-left hover:text-accent transition-colors"
              >
                <span>{cat.label}</span>
                <CaretDown
                  size={14}
                  className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <ul className="pl-3 mb-2 space-y-1.5 border-l border-primary-foreground/10 animate-fade-in">
                  {cat.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="text-xs text-primary-foreground/60 inline-block hover:text-accent hover:translate-x-1 transition-all duration-300"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function FooterLinkColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-primary-foreground font-semibold mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="text-sm inline-block hover:text-accent hover:translate-x-1 transition-all duration-300"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-foreground text-primary-foreground/70 pt-16 pb-8"
      style={{
        backgroundImage: `linear-gradient(rgba(8,12,28,0.92), rgba(8,12,28,0.96)), url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Animated decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-pulse" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl animate-pulse"
        style={{ animationDelay: "1.2s" }}
        aria-hidden
      />

      <div className="container relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Nextgenlytics" className="h-20 rounded-lg mb-4 bg-white p-3 shadow-md" />
            <p className="text-sm leading-relaxed">
              AI-native data and transformation partner for mid-market enterprises.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: LinkedinLogo, href: "https://www.linkedin.com/company/nextgenlytics1/", label: "LinkedIn" },
                { Icon: TwitterLogo, href: "https://twitter.com", label: "TwitterLogo" },
                { Icon: YoutubeLogo, href: "https://www.youtube.com/@Nextgenlytics", label: "YouTube" },
                { Icon: Envelope, href: "mailto:hello@nextgenlytics.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300 active:scale-95"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterSolutionsMenu />
          <FooterLinkColumn title="Our Products" links={productLinks} />
          <FooterLinkColumn title="Industries" links={industriesLinks} />
          {/* Contact */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3.5">
              {contactItems.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-start gap-3 text-sm hover:text-primary-foreground transition-colors"
                  >
                    <span className="mt-0.5 w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="leading-relaxed">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterLinkColumn title="About" links={aboutLinks} />

          <FooterLinkColumn title="Client Work" links={clientWorkLinks} />

          {/* Extended Delivery Team — a standalone offering, kept separate from Client Work */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Extended Delivery Team</h4>
            <ul className="space-y-2.5">
              {edtLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm inline-block hover:text-accent hover:translate-x-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-primary-foreground/50 leading-relaxed">
              Dedicated India delivery, governed from Amsterdam.
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs text-primary-foreground/40 text-center">
          <span>© {new Date().getFullYear()} Nextgenlytics. All rights reserved.</span>
          <span className="hidden sm:inline text-primary-foreground/20">·</span>
          <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden sm:inline text-primary-foreground/20">·</span>
          <Link to="/terms-and-conditions" className="hover:text-primary-foreground transition-colors">
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
