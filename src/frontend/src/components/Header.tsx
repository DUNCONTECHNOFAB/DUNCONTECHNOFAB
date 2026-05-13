import { Button } from "@/components/ui/button";
import { navItems } from "@/data/sampleData";
import { Link, useLocation } from "@tanstack/react-router";
import { FlaskConical, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className="sticky top-0 z-50 bg-card border-b border-border shadow-subtle"
      data-ocid="header"
    >
      {/* Top announcement bar */}
      <div className="gradient-primary py-1.5 px-4 text-center">
        <p className="text-xs font-body text-primary-foreground tracking-wide">
          Trusted Chemical Manufacturing from Sonipat, Haryana, India
          &nbsp;·&nbsp;
          <a
            href="tel:7988463330"
            className="underline underline-offset-2 opacity-90 hover:opacity-100 transition-smooth"
          >
            +91 79884 63330
          </a>
        </p>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group"
          data-ocid="header.logo"
        >
          <div className="w-9 h-9 rounded-sm gradient-primary flex items-center justify-center flex-shrink-0">
            <FlaskConical className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-base tracking-tight text-foreground block">
              DUNCANTECHNOFAB
            </span>
            <span className="text-[10px] font-body font-semibold tracking-widest text-accent uppercase">
              CAMICALS
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-body font-medium transition-smooth ${
                isActive(item.href)
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted"
              }`}
              data-ocid={`header.nav.${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:block"
            data-ocid="header.cta"
          >
            <Button
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-sm"
            >
              Get a Quote
            </Button>
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-smooth"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="header.mobile_menu_toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border bg-card"
          data-ocid="header.mobile_menu"
        >
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2.5 rounded-md text-sm font-body font-medium transition-smooth ${
                  isActive(item.href)
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground/70 hover:text-foreground hover:bg-muted"
                }`}
                onClick={() => setMobileOpen(false)}
                data-ocid={`header.mobile_nav.${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
