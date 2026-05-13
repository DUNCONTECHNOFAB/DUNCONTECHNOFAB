import { Separator } from "@/components/ui/separator";
import { companyInfo, navItems } from "@/data/sampleData";
import { Link } from "@tanstack/react-router";
import { FlaskConical, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const caffeineSrc = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  const productLinks = [
    { label: "Polymer Resins", id: "polymer-resins" },
    { label: "Specialty Catalysts", id: "specialty-catalysts" },
    { label: "Protective Coatings", id: "protective-coatings" },
    { label: "Industrial Solvents", id: "industrial-solvents" },
    { label: "Water Treatment", id: "water-treatment" },
  ];

  return (
    <footer className="bg-card border-t border-border" data-ocid="footer">
      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-sm gradient-primary flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-sm tracking-tight text-foreground block">
                  DUNCANTECHNOFAB
                </span>
                <span className="text-[10px] font-body font-semibold tracking-widest text-accent uppercase">
                  CAMICALS
                </span>
              </div>
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed mb-5">
              High-quality chemical manufacturing services with trust, safety,
              and professional business management.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  {companyInfo.address}, {companyInfo.city}, {companyInfo.state}{" "}
                  {companyInfo.pincode}, {companyInfo.country}
                </span>
              </div>
              {companyInfo.hrContacts.map((c) => (
                <div
                  key={c.phone}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                  <a
                    href={`tel:${c.phone}`}
                    className="hover:text-foreground transition-smooth"
                  >
                    +91 {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm font-body text-muted-foreground hover:text-foreground transition-smooth"
                    data-ocid={`footer.nav.${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-4">
              Our Products
            </h4>
            <ul className="space-y-2">
              {productLinks.map((p) => (
                <li key={p.id}>
                  <Link
                    to="/products/$id"
                    params={{ id: p.id }}
                    className="text-sm font-body text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company info */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-body text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground block">
                  Founded
                </span>
                {companyInfo.founded}
              </li>
              <li>
                <span className="font-semibold text-foreground block">
                  Team Size
                </span>
                {companyInfo.employees} professionals
              </li>
              <li>
                <span className="font-semibold text-foreground block">
                  Industry
                </span>
                Chemical Manufacturing
              </li>
              <li>
                <span className="font-semibold text-foreground block">
                  Location
                </span>
                Sonipat, Haryana, India
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-border" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs font-body text-muted-foreground">
          &copy; {year} DUNCANTECHNOFAB CAMICALS Manufacturing Company. All
          rights reserved.
        </p>
        <p className="text-xs font-body text-muted-foreground">
          Built with love using{" "}
          <a
            href={caffeineSrc}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
