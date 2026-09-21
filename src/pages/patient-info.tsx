import { Link } from "react-router-dom";
import { CheckCircle, Clock, FileText, ShieldCheck, CreditCard, ArrowRight, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CLINIC_INFO, FAQ_ITEMS, INSURANCE_PROVIDERS } from "@/lib/clinic-data";

const PROCESS_STEPS = [
  { title: "Book Your Appointment", description: "Call us or use our online form to schedule your initial evaluation at a time that works for you." },
  { title: "Insurance Verification", description: "Our team verifies your benefits and contacts you with coverage details before your visit — at no charge." },
  { title: "Complete Paperwork", description: "Fill out intake forms online or arrive 15 minutes early to complete them in the office." },
  { title: "Initial Evaluation", description: "A comprehensive 60-minute assessment with your therapist to identify the root cause of your condition." },
  { title: "Treatment Plan Review", description: "Your therapist presents a personalized plan with goals, timeline, and expected outcomes." },
  { title: "Begin Treatment", description: "One-on-one sessions focused on manual therapy, exercise, and education to achieve your goals." },
  { title: "Progress Check-ins", description: "Regular reassessments ensure your plan stays on track and adjusts as you improve." },
  { title: "Discharge & Prevention", description: "Graduate with a home program and strategies to maintain your gains and prevent recurrence." },
];

const WHAT_TO_BRING = [
  "Photo ID (driver's license or state ID)",
  "Insurance card(s) — front and back",
  "Referral or prescription (if your plan requires one)",
  "List of current medications",
  "Imaging results (X-rays, MRI reports, if available)",
  "Comfortable clothing for movement",
  "Your questions and goals for therapy",
];

const APPOINTMENT_TYPES = [
  { title: "Initial Evaluation", duration: "60 minutes", description: "Comprehensive assessment, diagnosis, and treatment plan development." },
  { title: "Follow-up Session", duration: "45-60 minutes", description: "One-on-one treatment combining manual therapy and therapeutic exercise." },
  { title: "Dry Needling Session", duration: "30-45 minutes", description: "Targeted trigger point release as a standalone or add-on treatment." },
  { title: "Telehealth Consultation", duration: "30 minutes", description: "Virtual visit for exercise progression, home program updates, or initial consultation." },
];

const PAYMENT_METHODS = [
  "All major credit and debit cards (Visa, Mastercard, Amex, Discover)",
  "Health Savings Account (HSA)",
  "Flexible Spending Account (FSA)",
  "Insurance co-pay at time of service",
  "Self-pay packages available",
  "Payment plans for qualifying patients",
];

export function PatientInfoPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">New Patients</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Patient Information</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before your first visit. We've made the process as simple and stress-free as possible.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Your Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">From First Call to Full Recovery</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className="flex gap-4 md:gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Be Prepared</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What to Bring</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To make the most of your first visit, please bring the following items. 
                If you're missing anything, don't worry — just let us know and we'll work with you.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {WHAT_TO_BRING.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Types */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Appointment Types</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Session Options</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {APPOINTMENT_TYPES.map((type) => (
              <Card key={type.title} className="hover:shadow-md hover:border-primary/30 transition-all">
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{type.title}</h3>
                  <Badge variant="secondary">{type.duration}</Badge>
                  <p className="text-sm text-muted-foreground leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Insurance We Accept</h2>
            <p className="mt-4 text-muted-foreground">
              We work with most major insurance carriers. Our team will verify your benefits before your first visit.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
            {INSURANCE_PROVIDERS.map((provider) => (
              <div key={provider} className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border bg-card text-center">
                <ShieldCheck className="h-5 w-5 text-primary/60" />
                <span className="text-xs font-medium leading-tight">{provider}</span>
              </div>
            ))}
          </div>

          <Card className="max-w-2xl mx-auto mt-10">
            <CardContent className="p-6">
              <h3 className="font-semibold flex items-center gap-2 mb-3">
                <CreditCard className="h-5 w-5 text-primary" />
                Self-Pay Options
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                No insurance? No problem. We offer competitive self-pay rates:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-muted">
                  <p className="font-semibold">Initial Evaluation</p>
                  <p className="text-sm text-muted-foreground">$150</p>
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <p className="font-semibold">Follow-up Session</p>
                  <p className="text-sm text-muted-foreground">$100</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Payment</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Payment Options</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We believe finances shouldn't be a barrier to quality care. We offer multiple payment options 
                and will work with you to find a solution.
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {PAYMENT_METHODS.map((method) => (
                    <li key={method} className="flex items-start gap-3">
                      <CreditCard className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Access */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">No Referral Needed</h2>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Florida law grants you <strong>Direct Access</strong> to physical therapy. This means you 
              can begin treatment without a physician referral. You can see us first, get evaluated, and 
              start treatment right away. If we determine your condition requires physician involvement, 
              we'll coordinate that referral for you.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <AlertCircle className="h-4 w-4" />
              <span>Some insurance plans may still require a referral for coverage. We'll verify this for you.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg text-primary-foreground/80">
            Schedule your initial evaluation today and take the first step toward recovery.
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
        </div>
      </section>
    </div>
  );
}
