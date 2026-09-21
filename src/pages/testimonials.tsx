import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/clinic-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < Math.round(rating)
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Patient Stories
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            What Our Patients Say
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients whose lives were transformed through dedicated,
            one-on-one physical therapy care.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-foreground">4.9</span>
                <span className="text-lg text-muted-foreground">/5</span>
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-foreground">98</span>
                <span className="text-lg text-muted-foreground">%</span>
              </div>
              <p className="text-sm text-muted-foreground">Patient Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-foreground">14,000</span>
                <span className="text-lg text-muted-foreground">+</span>
              </div>
              <p className="text-sm text-muted-foreground">Patients Served</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="text-3xl md:text-4xl font-bold text-foreground">200</span>
                <span className="text-lg text-muted-foreground">+</span>
              </div>
              <p className="text-sm text-muted-foreground">Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Stories of Recovery
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every patient has a unique journey. Here are a few who trusted us with theirs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-md transition-all">
                <CardContent className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <Quote className="h-8 w-8 text-primary/30 flex-shrink-0 mt-1" />
                    <StarRating rating={testimonial.rating} />
                  </div>

                  <blockquote className="text-foreground italic leading-relaxed text-base md:text-lg">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Badge */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <Card className="max-w-2xl mx-auto overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Star className="h-8 w-8 fill-accent text-accent" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                See Us on Google
              </h3>

              <div className="flex items-center justify-center gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-7 w-7 ${
                      i < 5 ? "fill-accent text-accent" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>

              <div className="mt-3">
                <span className="text-4xl font-bold text-foreground">4.9</span>
                <span className="text-lg text-muted-foreground ml-1">out of 5</span>
              </div>

              <p className="text-muted-foreground mt-2">Based on 200+ verified reviews</p>

              <div className="mt-6">
                <Button asChild variant="outline" size="lg">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Read Our Google Reviews
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience the Meridian Difference
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Join thousands of patients who chose expert, one-on-one care and found their way
            back to the life they love.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="text-base h-12 px-8">
              <Link to="/contact">
                Book Your Evaluation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
