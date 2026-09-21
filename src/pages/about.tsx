import { Link } from "react-router-dom";
import {
  Heart,
  Award,
  Eye,
  Users,
  Lightbulb,
  HandHeart,
  Sparkles,
  TreePine,
  UserCheck,
  Clock,
  RefreshCw,
  Brain,
  Phone,
  CalendarCheck,
  ArrowRight,
  Building2,
  Dumbbell,
  FileCheck,
  Trophy,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CLINIC_INFO, TEAM_MEMBERS } from "@/lib/clinic-data";

const CORE_VALUES = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Every decision we make starts with one question: what's best for the patient? Your goals drive your treatment.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "We pursue advanced certifications, attend continuing education, and stay current with the latest research.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "No surprise bills, no hidden agendas. We explain your diagnosis, your plan, and your costs upfront.",
  },
  {
    icon: HandHeart,
    title: "Compassion",
    description:
      "Pain is personal. We listen without judgment and meet you where you are — physically and emotionally.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work alongside your physicians, coaches, and family to ensure coordinated, seamless care.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "From dry needling to blood flow restriction training, we invest in techniques and tools that deliver results.",
  },
  {
    icon: TreePine,
    title: "Community",
    description:
      "We're rooted in Naples. We sponsor local events, support athletes, and give back to the community that trusts us.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: UserCheck,
    ours: "One-on-One Care",
    oursDesc:
      "Your therapist works exclusively with you for the entire session — undivided attention, every visit.",
    theirs: "Shared Attention",
    theirsDesc:
      "Therapists juggle 2–3 patients at once, leaving you waiting or supervised by aides.",
  },
  {
    icon: Clock,
    ours: "60-Minute Evaluations",
    oursDesc:
      "Comprehensive assessments that uncover the root cause, not just the surface symptom.",
    theirs: "20-Minute Evals",
    theirsDesc:
      "Rushed evaluations that miss underlying issues and jump straight to generic protocols.",
  },
  {
    icon: RefreshCw,
    ours: "Same Therapist Every Visit",
    oursDesc:
      "Continuity of care means your therapist knows your progress, your body, and your goals intimately.",
    theirs: "Rotating Therapists",
    theirsDesc:
      "Different provider each visit — constantly re-explaining your history and preferences.",
  },
  {
    icon: Brain,
    ours: "Evidence-Based Programs",
    oursDesc:
      "Treatment plans built on current research, tailored to your body, your injury, and your life.",
    theirs: "Cookie-Cutter Protocols",
    theirsDesc:
      "Same exercise handout for every patient regardless of their specific needs or goals.",
  },
  {
    icon: Phone,
    ours: "Direct Communication",
    oursDesc:
      "Questions between visits? Reach your therapist directly. No phone trees, no assistants relaying messages.",
    theirs: "Through Assistants",
    theirsDesc:
      "Can't reach your therapist directly — messages get lost or delayed through front desk.",
  },
  {
    icon: CalendarCheck,
    ours: "Flexible Scheduling",
    oursDesc:
      "Early morning, lunch hour, and late afternoon slots designed to fit real life — not the other way around.",
    theirs: "Rigid Scheduling",
    theirsDesc:
      "Limited availability forces you to rearrange your life around their calendar.",
  },
];

const EQUIPMENT = [
  "AlterG Anti-Gravity Treadmill",
  "Blood Flow Restriction (BFR) Training",
  "Normatec Compression Recovery",
  "TENS / EMS Electrical Stimulation",
  "Pilates Reformer",
];

const CERTIFICATIONS = [
  "OCS",
  "SCS",
  "NCS",
  "WCS",
  "FAAOMPT",
  "CSCS",
  "PRPC",
  "ATC",
];

const COMMUNITY_ITEMS = [
  {
    icon: Trophy,
    title: "Naples Senior Games",
    description:
      "Proud sponsor and on-site PT coverage for Southwest Florida's premier senior athletic competition, keeping competitors healthy and performing their best.",
  },
  {
    icon: Stethoscope,
    title: "High School Athletic Partnerships",
    description:
      "We partner with three local high schools to provide injury prevention workshops, pre-season screenings, and sideline coverage for student athletes.",
  },
  {
    icon: Users,
    title: "Free Injury Screenings",
    description:
      "Every month you'll find us at the Third Street Farmers Market offering complimentary movement screenings and answering health questions for our neighbors.",
  },
];

export function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Our Story
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            About {CLINIC_INFO.shortName}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Born from a commitment to do physical therapy differently — with more
            time, more attention, and more heart.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mb-12">
            <img src="/therapy-session.webp" alt="One-on-one physical therapy session" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              How It Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              A Better Way to Heal
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                In 2016, Dr. Alaric Voss made a decision that would change the
                landscape of physical therapy in Naples, Florida. After eight years
                working in high-volume orthopedic clinics across the Southeast, he'd
                seen enough: patients rushed through 15-minute sessions, therapists
                double- and triple-booked, and outcomes that suffered because nobody
                had the time to truly listen.
              </p>
              <p>
                He'd watched skilled colleagues burn out trying to provide quality
                care within systems that prioritized volume over value. He'd seen
                patients leave appointments feeling unheard, undertreated, and
                uncertain about their recovery. And he knew there had to be a better
                way.
              </p>
              <p>
                So he opened {CLINIC_INFO.name} with a simple but radical promise:
                one patient, one therapist, one full hour. No double-booking. No
                rotating providers. No rushing you out the door so the next person
                can take your spot.
              </p>
              <p>
                What started as a solo practice in a single treatment room has grown
                into a team of {TEAM_MEMBERS.length} dedicated professionals serving
                over 14,000 patients. But the founding principle hasn't changed.
                Every patient who walks through our door receives the same unhurried,
                individualized attention that Dr. Voss envisioned from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="hover:shadow-md hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To restore movement, relieve pain, and empower every patient with
                  the knowledge and confidence to live an active, fulfilling life.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md hover:border-primary/30 transition-all">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be Southwest Florida's most trusted physical therapy practice —
                  where exceptional outcomes meet genuine human connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground">
              These principles guide every interaction, every treatment plan, and
              every decision we make.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {CORE_VALUES.map((value) => (
              <Card
                key={value.title}
                className="hover:shadow-md hover:border-primary/30 transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              The Meridian Difference
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Choose Us
            </h2>
            <p className="mt-4 text-muted-foreground">
              See how our approach compares to the typical high-volume clinic
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <Card
                key={item.ours}
                className="hover:shadow-md hover:border-primary/30 transition-all overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400 shrink-0" />
                        <h3 className="font-semibold text-sm">{item.ours}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-6">
                        {item.oursDesc}
                      </p>
                    </div>
                    <Separator />
                    <div className="opacity-60">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="h-4 w-4 flex items-center justify-center shrink-0 text-muted-foreground text-xs">
                          ✕
                        </span>
                        <p className="font-medium text-sm text-muted-foreground">
                          {item.theirs}
                        </p>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                        {item.theirsDesc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility & Equipment */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Our Space
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Facility & Equipment
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our 3,200 square foot modern facility was designed with your
                  comfort and recovery in mind. Private treatment rooms ensure
                  confidentiality for sensitive conditions, while our open exercise
                  area provides space for functional training and progressive
                  strengthening.
                </p>
                <p>
                  We invest in state-of-the-art equipment that allows us to treat a
                  wider range of conditions and accelerate your recovery timeline.
                  Every tool in our clinic was chosen because it delivers measurable
                  results.
                </p>
              </div>
            </div>
            <div>
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <img src="/facility-equipment.webp" alt="Our modern therapy facility and equipment" className="w-full h-full object-cover" />
              </div>
              <Card className="hover:shadow-md hover:border-primary/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Dumbbell className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">Key Equipment</h3>
                  </div>
                  <ul className="space-y-3">
                    {EQUIPMENT.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl border bg-card">
                  <p className="text-2xl font-bold text-primary">3,200</p>
                  <p className="text-xs text-muted-foreground mt-1">Sq. Ft.</p>
                </div>
                <div className="p-4 rounded-xl border bg-card">
                  <p className="text-2xl font-bold text-primary">4</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Private Rooms
                  </p>
                </div>
                <div className="p-4 rounded-xl border bg-card">
                  <p className="text-2xl font-bold text-primary">1</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Open Gym Area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Access */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              No Referral Needed
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Florida Direct Access
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under Florida law, you have the right to begin physical therapy
              without a physician's referral. This means you can schedule your
              first appointment directly with us — no waiting for a doctor's
              visit, no unnecessary delays in starting your recovery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Direct access allows us to evaluate you sooner, begin treatment
              faster, and get you back to your life with fewer barriers. If your
              insurance plan requires a referral for coverage, our team will
              coordinate with your physician to obtain one — but you can start
              care immediately.
            </p>
          </div>
        </div>
      </section>

      <Separator className="max-w-7xl mx-auto" />

      {/* Certifications */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Credentials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Team Certifications
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our therapists hold advanced board certifications and specialty
              credentials — proof of hundreds of hours of additional training
              beyond their doctorate degrees.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CERTIFICATIONS.map((cert) => (
              <Badge
                key={cert}
                variant="secondary"
                className="text-sm px-4 py-2 font-semibold"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Giving Back
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Community Involvement
            </h2>
            <p className="mt-4 text-muted-foreground">
              We believe great healthcare extends beyond the clinic walls. Here's
              how we show up for our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_ITEMS.map((item) => (
              <Card
                key={item.title}
                className="hover:shadow-md hover:border-primary/30 transition-all"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="aspect-[21/9] rounded-2xl overflow-hidden mt-12">
            <img src="/community-event.webp" alt="Meridian Movement community health event" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-5 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Schedule Your First Visit
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Experience the Meridian Movement difference for yourself. Your
            60-minute comprehensive evaluation is the first step toward moving
            better and living fully.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base h-12 px-8"
            >
              <Link to="/contact">
                Book Your Evaluation
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base h-12 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^\d]/g, "")}`}
              >
                <Building2 data-icon="inline-start" />
                Call {CLINIC_INFO.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
