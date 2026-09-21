import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { CLINIC_INFO } from "@/lib/clinic-data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Team", href: "/team" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Patient Info", href: "/patient-info" },
  { label: "Contact", href: "/contact" },
];

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="md:hidden sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 safe-top">
      <div className="flex items-center justify-between px-4 h-14">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.webp" alt={CLINIC_INFO.shortName} className="h-8 w-auto shrink-0" />
          <span className="text-sm font-bold tracking-tight text-foreground leading-tight">
            Meridian Movement<br />Physical Therapy
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}
            className="p-2 text-primary"
          >
            <Phone className="h-5 w-5" />
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-6 pb-4 flex items-center gap-2.5">
                  <img src="/logo.webp" alt={CLINIC_INFO.shortName} className="h-10 w-auto" />
                  <span className="text-base font-bold tracking-tight text-foreground leading-tight">
                    Meridian Movement<br />Physical Therapy
                  </span>
                </div>
                <Separator />
                <nav className="flex-1 p-4">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-foreground rounded-lg hover:bg-muted transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Separator />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{CLINIC_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{CLINIC_INFO.fullAddress}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{CLINIC_INFO.hours.weekday}</span>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link to="/contact" onClick={() => setOpen(false)}>
                      Book Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
