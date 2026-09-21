import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONDITIONS_TREATED } from "@/lib/clinic-data";

export function ConditionsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Conditions We Treat</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Specialized Treatment for a Wide Range of Conditions
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {CONDITIONS_TREATED.map((condition) => (
            <Badge
              key={condition}
              variant="outline"
              className="text-sm px-3 py-1.5 hover:bg-primary/5 hover:border-primary/30 transition-colors cursor-default"
            >
              {condition}
            </Badge>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/services">
              View All Conditions & Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
