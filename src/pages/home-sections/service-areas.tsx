import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SERVICE_AREAS, CLINIC_INFO } from "@/lib/clinic-data";

export function ServiceAreasSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Service Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Serving Southwest Florida
          </h2>
          <p className="mt-4 text-muted-foreground">
            Located in Naples, we proudly serve patients throughout Collier and southern Lee County.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 p-3 rounded-lg border border-border bg-card"
            >
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium">{area}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-muted/50 border border-border max-w-2xl mx-auto text-center">
          <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
          <p className="font-semibold">{CLINIC_INFO.fullAddress}</p>
          <p className="text-sm text-muted-foreground mt-1">Conveniently located off Davis Blvd with ample free parking</p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <Link to="/contact">
              Get Directions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
