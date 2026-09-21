import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INSURANCE_PROVIDERS } from "@/lib/clinic-data";

export function InsuranceSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Insurance & Payment</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            We Work With Your Insurance
          </h2>
          <p className="mt-4 text-muted-foreground">
            We accept most major insurance plans and verify your benefits before your first visit — at no charge to you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
          {INSURANCE_PROVIDERS.map((provider) => (
            <div
              key={provider}
              className="flex items-center justify-center p-3 rounded-xl border border-border bg-card text-center"
            >
              <div className="flex flex-col items-center gap-1.5">
                <ShieldCheck className="h-5 w-5 text-primary/60" />
                <span className="text-xs font-medium text-foreground leading-tight">{provider}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/patient-info">
              Check Your Coverage
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
