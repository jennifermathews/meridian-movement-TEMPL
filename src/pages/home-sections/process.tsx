import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const STEPS = [
  { step: "1", title: "Schedule", description: "Book your initial evaluation online or by phone" },
  { step: "2", title: "Verify", description: "We check your insurance benefits at no charge" },
  { step: "3", title: "Evaluate", description: "60-minute comprehensive assessment with your therapist" },
  { step: "4", title: "Plan", description: "Personalized treatment plan tailored to your goals" },
  { step: "5", title: "Treat", description: "One-on-one sessions focused on your recovery" },
  { step: "6", title: "Thrive", description: "Return to the activities and life you love" },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Your Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Getting Started is Simple
          </h2>
          <p className="mt-4 text-muted-foreground">
            From your first call to your final session, we make the process straightforward and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STEPS.map((step, i) => (
            <div key={step.step} className="relative text-center group">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-3">
                {step.step}
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-border" />
              )}
              <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/patient-info">
              View Complete Patient Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
