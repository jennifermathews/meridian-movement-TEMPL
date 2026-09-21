import { Link } from "react-router-dom";
import { ArrowRight, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_INFO } from "@/lib/clinic-data";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-5 md:px-6 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Ready to Start Your Recovery Journey?
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Don't wait to get the care you deserve. Schedule your comprehensive evaluation 
          today and take the first step toward moving better, feeling stronger, and living fully.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary" className="text-base h-12 px-8">
            <Link to="/contact">
              Book Your Evaluation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base h-12 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call {CLINIC_INFO.phone}
            </a>
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/70 pt-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{CLINIC_INFO.hours.weekday}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{CLINIC_INFO.hours.saturday}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
