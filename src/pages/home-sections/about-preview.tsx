import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/therapy-session.webp"
                alt="Physical therapist working one-on-one with a patient"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
              10 Years of Excellence
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">About Our Clinic</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Your Recovery is Personal. Your Care Should Be Too.
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              At Meridian Movement, we believe that exceptional physical therapy requires 
              undivided attention. Founded in 2016 by Dr. Alaric Voss, our clinic was built 
              on a simple principle: every patient deserves a therapist who is fully present, 
              fully engaged, and fully committed to their recovery.
            </p>
            <ul className="space-y-3">
              {[
                "One-on-one care — your therapist works only with you",
                "60-minute comprehensive evaluations",
                "Same therapist throughout your plan of care",
                "Evidence-based, individualized treatment plans",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="outline">
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
