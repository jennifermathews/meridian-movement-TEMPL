import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TEAM_MEMBERS } from "@/lib/clinic-data";

export function TeamPreview() {
  const featured = TEAM_MEMBERS.filter((m) => m.role === "leadership" || m.role === "clinical").slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-center mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Expert Therapists Dedicated to Your Recovery
            </h2>
            <p className="mt-4 text-muted-foreground">
              Board-certified specialists with advanced training and a genuine passion for helping you move better.
            </p>
          </div>
          <div className="aspect-[16/9] rounded-2xl overflow-hidden">
            <img
              src="/team-group.webp"
              alt="The Meridian Movement Physical Therapy team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featured.map((member) => (
            <Card key={member.id} className="overflow-hidden group hover:shadow-md transition-all">
              <CardContent className="p-4 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary/15 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-primary">
                    {member.name.replace(/^Dr\.\s*/, "").split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-semibold text-sm">{member.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{member.credentials}</p>
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                  {member.specialties.slice(0, 2).map((s) => (
                    <Badge key={s} variant="secondary" className="text-[10px] px-1.5 py-0">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/team">
              Meet the Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
