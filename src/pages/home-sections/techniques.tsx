import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TECHNIQUES } from "@/lib/clinic-data";

export function TechniquesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Methods</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Evidence-Based Treatment Techniques
          </h2>
          <p className="mt-4 text-muted-foreground">
            We combine the latest research with proven hands-on methods to deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECHNIQUES.slice(0, 9).map((technique, i) => (
            <div
              key={technique.name}
              className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold shrink-0">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-sm">{technique.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{technique.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/services">
              Learn About All Techniques
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
