import { Link } from "react-router-dom";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { TEAM_MEMBERS } from "@/lib/clinic-data";

const CREDENTIALS_LIST = [
  { abbr: "OCS", name: "Orthopedic Clinical Specialist", description: "Board certification in advanced orthopedic physical therapy, requiring 2,000+ hours of clinical practice and rigorous examination." },
  { abbr: "SCS", name: "Sports Clinical Specialist", description: "Board certification in sports physical therapy, demonstrating expertise in athletic injury prevention, treatment, and return-to-sport protocols." },
  { abbr: "NCS", name: "Neurologic Clinical Specialist", description: "Board certification in neurological physical therapy for conditions including stroke, Parkinson's, and multiple sclerosis." },
  { abbr: "WCS", name: "Women's Health Clinical Specialist", description: "Board certification in women's health physical therapy, including pelvic floor rehabilitation and pre/postnatal care." },
  { abbr: "FAAOMPT", name: "Fellow, American Academy of Orthopaedic Manual Physical Therapists", description: "The highest credential in manual therapy, requiring extensive post-doctoral training and demonstrated mastery of hands-on techniques." },
  { abbr: "CSCS", name: "Certified Strength & Conditioning Specialist", description: "National certification demonstrating competence in designing and implementing strength training and conditioning programs." },
  { abbr: "PRPC", name: "Pelvic Rehabilitation Practitioner Certification", description: "Advanced certification in pelvic floor rehabilitation, covering assessment and treatment of pelvic health conditions." },
  { abbr: "ATC", name: "Athletic Trainer, Certified", description: "National certification in athletic training, covering injury prevention, clinical evaluation, and emergency care for athletes." },
];

function getInitials(name: string) {
  const parts = name.replace(/^Dr\.\s*/, "").split(" ");
  return parts.map((n) => n[0]).join("").slice(0, 2);
}

export function TeamPage() {
  const leader = TEAM_MEMBERS.find((m) => m.role === "leadership");
  const clinicalStaff = TEAM_MEMBERS.filter((m) => m.role === "clinical");
  const supportTeam = TEAM_MEMBERS.filter((m) => m.role === "support");

  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/team-group.webp" alt="The Meridian Movement care team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our People
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Meet Your Care Team
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Board-certified specialists with advanced training, genuine compassion, and a
            shared commitment to helping you move and live better.
          </p>
        </div>
      </section>

      {/* Leadership */}
      {leader && (
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="max-w-7xl mx-auto px-5 md:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Leadership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Clinic Founder & Director
              </h2>
            </div>

            <Card className="max-w-4xl mx-auto overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">
                        {getInitials(leader.name)}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold">{leader.name}</h3>
                    <p className="text-lg text-muted-foreground mt-1">{leader.title}</p>
                    <p className="text-sm font-medium text-primary mt-1">{leader.credentials}</p>

                    <Separator className="my-6" />

                    <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>

                    <div className="flex flex-wrap gap-2 mt-6">
                      {leader.specialties.map((s) => (
                        <Badge key={s} variant="secondary">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Clinical Staff */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Clinical Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Your Treating Therapists
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Each of our therapists holds advanced certifications and specializes in
              distinct areas, ensuring you're matched with the right expert for your condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalStaff.map((member) => (
              <Card key={member.id} className="overflow-hidden group hover:shadow-md transition-all">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {getInitials(member.name)}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                  <p className="text-sm font-medium text-primary mt-1">{member.credentials}</p>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {member.specialties.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Support Staff
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              The Team Behind the Team
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From your first phone call to your final visit, our support team ensures
              every part of your experience is seamless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportTeam.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {getInitials(member.name)}
                    </span>
                  </div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{member.title}</p>
                  {member.credentials && (
                    <p className="text-xs font-medium text-primary mt-1">{member.credentials}</p>
                  )}
                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {member.specialties.slice(0, 3).map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Credentials & Certifications
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our team collectively holds some of the most advanced credentials in physical
              therapy — here's what they mean for your care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CREDENTIALS_LIST.map((cred) => (
              <Card key={cred.abbr} className="hover:shadow-sm transition-all">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{cred.abbr}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{cred.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {cred.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to Start Your Recovery?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Schedule with our team and experience the Meridian Movement difference — one-on-one
            care from therapists who truly listen.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="text-base h-12 px-8">
              <Link to="/contact">
                Schedule with Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
