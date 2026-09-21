import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_INFO } from "@/lib/clinic-data";

export function FloatingCTA() {
  return (
    <div className="md:hidden fixed bottom-20 right-4 z-40">
      <Button
        asChild
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg shadow-primary/25 p-0"
      >
        <a href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}>
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}
