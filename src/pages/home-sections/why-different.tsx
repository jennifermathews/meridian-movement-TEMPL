import { Link } from "react-router-dom";
import { ArrowRight, Clock, UserCheck, ClipboardList, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const DIFFERENTIATORS = [
  {
    icon: UserCheck,
    title: "True One-on-One Care",
    description: "Your therapist works exclusively with you for your entire session. No shared attention, no switching between patients.",
  },
  {
    icon: Clock,
    title: "60-Minute Evaluations",
    description: "Thorough assessments that uncover the root cause — not just the symptom. We take the time to understand your full picture.",
  },
  {
    icon: ClipboardList,
    title: "Same Therapist, Every Visit",
    description: "Continuity of care means your therapist knows your progress, your goals, and your body. No repeating your story.",
  },
  {
    icon: ShieldCheck,
    title: "No Double-Booking",
    description: "Our scheduling ensures your therapist is never pulled in multiple directions. Your time is protected and respected.",
  },
];

export function WhyDifferent() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">The Meridian Difference</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Physical Therapy the Way It Should Be
          </h2>
          <p className="mt-4 text-muted-foreground">
            We do things differently because you deserve better than assembly-line healthcare.
          </p>
        </div>

        <div className="mb-10 rounded-2xl overflow-hidden h-48 md:h-64">
          <img
            src="/svc-orthopedic.webp"
            alt="One-on-one physical therapy session at Meridian Movement"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="relative p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors group"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/about">
              See Our Full Approach
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
