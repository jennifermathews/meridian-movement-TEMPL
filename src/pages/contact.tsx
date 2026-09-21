import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CLINIC_INFO, SERVICE_AREAS } from "@/lib/clinic-data";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to take the first step? Reach out to schedule your evaluation or ask any questions about our services.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">Request an Appointment</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within one business day.
              </p>

              {submitted ? (
                <Card className="border-primary/30">
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within one business day.
                      If you need immediate assistance, please call us at{" "}
                      <a href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`} className="text-primary font-medium">
                        {CLINIC_INFO.phone}
                      </a>.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required placeholder="Your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required placeholder="Your last name" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" required placeholder="you@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" required placeholder="(239) 555-0123" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Reason for Visit</Label>
                    <select
                      id="reason"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select a reason...</option>
                      <option>New Injury / Pain</option>
                      <option>Post-Surgical Rehabilitation</option>
                      <option>Sports Injury</option>
                      <option>Chronic Pain</option>
                      <option>Balance / Dizziness</option>
                      <option>Pelvic Floor Therapy</option>
                      <option>Wellness / Prevention</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferred">Preferred Appointment Time</Label>
                    <select
                      id="preferred"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">No preference</option>
                      <option>Early Morning (7-9 AM)</option>
                      <option>Mid-Morning (9-11 AM)</option>
                      <option>Midday (11 AM-1 PM)</option>
                      <option>Afternoon (1-4 PM)</option>
                      <option>Late Afternoon (4-6 PM)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your condition, goals, or any questions you have..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Send Request
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <h3 className="font-semibold text-lg">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{CLINIC_INFO.phone}</p>
                        <p className="text-xs text-muted-foreground">Call or text</p>
                      </div>
                    </a>
                    <a
                      href={`mailto:${CLINIC_INFO.email}`}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{CLINIC_INFO.email}</p>
                        <p className="text-xs text-muted-foreground">Email us anytime</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{CLINIC_INFO.address}</p>
                        <p className="text-xs text-muted-foreground">{CLINIC_INFO.city}, {CLINIC_INFO.state} {CLINIC_INFO.zip}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">7:00 AM - 6:00 PM</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">8:00 AM - 12:00 PM</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold text-lg">Quick Contact</h3>
                  <p className="text-sm text-muted-foreground">
                    For urgent inquiries or to schedule by phone, call us directly.
                    We return all messages within one business day.
                  </p>
                  <Button asChild className="w-full">
                    <a href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Location</h2>
          </div>
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden relative">
            <img src="/naples-exterior.webp" alt="Meridian Movement Physical Therapy exterior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent flex items-end justify-center pb-8">
              <div className="text-center text-white space-y-1">
                <MapPin className="h-8 w-8 mx-auto mb-2 opacity-90" />
                <p className="font-semibold text-lg">{CLINIC_INFO.fullAddress}</p>
                <p className="text-sm opacity-80">Off Davis Blvd &middot; Free parking on-site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Areas Served</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">Proudly Serving Southwest Florida</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {SERVICE_AREAS.map((area) => (
              <span key={area} className="px-3 py-1.5 rounded-full border border-border bg-card text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
