import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_INFO } from "@/lib/clinic-data";

export function HeroSection() {
  return (
    <section className="relative min-h-[85dvh] md:min-h-[75dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-clinic.webp"
          alt="Meridian Movement Physical Therapy clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent md:hidden" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24 w-full">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now Accepting New Patients
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            {CLINIC_INFO.tagline.split(".")[0]}.
            <span className="block text-primary mt-1">
              {CLINIC_INFO.tagline.split(".")[1]?.trim() || "Renewing Life."}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Expert one-on-one physical therapy in Naples, Florida. No double-booking,
            no rushed visits — just dedicated care focused on getting you back to the life you love.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild size="lg" className="text-base h-12 px-8">
              <Link to="/contact">
                Book Your Evaluation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base h-12 px-8 bg-background/80 backdrop-blur-sm">
              <a href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call {CLINIC_INFO.phone}
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-foreground">14,000+</span>
              <span>Patients Helped</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
