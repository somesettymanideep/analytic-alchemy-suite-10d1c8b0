import logo from "@/assets/logo.jpeg";
import footerBg from "@/assets/footer-bg.jpg";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const productLinks = [
  { label: "BlueGecko", to: "/products/bluegecko" },
  { label: "Falcon Mapping", to: "/products/falcon-mapping" },
  { label: "Code Cheetah", to: "/products/code-cheetah" },
  { label: "Owl Sight", to: "/products/owl-sight" },
  { label: "Orca Migrate", to: "/products/orca-migrate" },
];

const companyLinks = [
  { label: "About nextgenlytics", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Case Study", to: "/case-study" },
  { label: "Careers", to: "/careers" },
];

const contactItems = [
  {
    Icon: MapPin,
    label: "B. Amsterdam, Johan Huizingalaan 763A, 1066 VH, Amsterdam",
    href: "https://maps.google.com/?q=B.+Amsterdam+Johan+Huizingalaan+763A",
  },
  { Icon: Phone, label: "+31 (0) 20 123 4567", href: "tel:+31201234567" },
  { Icon: Mail, label: "Info@nextgenlytics.com", href: "mailto:Info@nextgenlytics.com" },
];

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
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="nextgenlytics" className="h-16 rounded mb-4" />
            <p className="text-sm leading-relaxed">
              AI-native data and transformation partner for mid-market enterprises.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
                { Icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { Icon: Mail, href: "mailto:hello@nextgenlytics.com", label: "Email" },
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

          {/* Our Products */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
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

          {/* Company */}
          <div>
            <h4 className="text-primary-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
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
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} nextgenlytics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
