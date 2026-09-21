import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/clinic-data";

export function FAQPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Common Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Find quick answers to the most frequently asked questions about our services, 
              insurance, and what to expect.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <Link to="/patient-info">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.slice(0, 5).map((faq, i) => (
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
  );
}
