import { Link, useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_INFO } from "@/lib/clinic-data";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Patient Info", href: "/patient-info" },
  { label: "Contact", href: "/contact" },
];

export function DesktopHeader() {
  const { pathname } = useLocation();

  return (
    <header className="hidden md:block sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo.webp" alt={CLINIC_INFO.name} className="h-9 w-auto" />
          <span className="text-base font-bold tracking-tight text-foreground leading-tight">
            Meridian Movement {" "}<br className="hidden xl:inline" />Physical Therapy
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">{CLINIC_INFO.phone}</span>
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
