import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Globe, Heart } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { CLINIC_INFO, SERVICE_AREAS } from "@/lib/clinic-data";

export function Footer() {
  return (
    <footer className="hidden md:block bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src="/logo.webp" alt={CLINIC_INFO.name} className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm text-background/70 leading-relaxed">
              {CLINIC_INFO.tagline} Providing expert, one-on-one physical therapy care
              to Southwest Florida since {CLINIC_INFO.foundingYear}.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors">
                <Heart className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Our Team", href: "/team" },
                { label: "Patient Information", href: "/patient-info" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Contact Info</h4>
            <div className="space-y-3">
              <a href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`} className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                {CLINIC_INFO.phone}
              </a>
              <a href={`mailto:${CLINIC_INFO.email}`} className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                {CLINIC_INFO.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                {CLINIC_INFO.fullAddress}
              </div>
              <div className="flex items-start gap-2 text-sm text-background/70">
                <Clock className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p>{CLINIC_INFO.hours.weekday}</p>
                  <p>{CLINIC_INFO.hours.saturday}</p>
                  <p>{CLINIC_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wider">Service Areas</h4>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_AREAS.map((area) => (
                <span key={area} className="text-xs px-2 py-1 rounded-full bg-background/10 text-background/70">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/50">
          <p>&copy; {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-background/70 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-background/70 cursor-pointer">Terms of Service</span>
            <span className="hover:text-background/70 cursor-pointer">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
