import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import {
  Bone,
  Dumbbell,
  HeartPulse,
  Scale,
  Brain,
  Hand,
  Target,
  Shield,
  Footprints,
  Monitor,
  Flame,
  Leaf,
  Ear,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { SERVICES, CONDITIONS_TREATED, TECHNIQUES } from "@/lib/clinic-data";

const ICON_MAP: Record<string, React.ElementType> = {
  Bone, Dumbbell, HeartPulse, Scale, Brain, Hand, Target, Shield,
  Footprints, Monitor, Flame, Leaf, Ear,
};

const SERVICE_DETAILS = [
  {
    id: "orthopedic",
    description:
      "Our orthopedic physical therapy program addresses the full spectrum of musculoskeletal conditions, from acute injuries to chronic degenerative disorders. We use advanced manual techniques combined with progressive therapeutic exercise to restore optimal joint mechanics and soft tissue health. Whether you're recovering from a fracture, managing arthritis, or dealing with persistent back pain, our specialists develop individualized protocols to get you moving with confidence.",
    conditions: [
      "Total joint replacement recovery",
      "Spinal stenosis and disc disorders",
      "Rotator cuff tears and impingement",
      "Fracture and post-immobilization rehab",
      "Osteoarthritis management",
    ],
    benefits: [
      "Restore full range of motion and joint mobility",
      "Build functional strength for daily activities",
      "Reduce reliance on pain medication",
      "Prevent re-injury through movement education",
    ],
  },
  {
    id: "sports",
    description:
      "Our sports rehabilitation program is designed for athletes at every level—from weekend warriors to competitive professionals. We go beyond simple pain relief to address the root biomechanical causes of your injury and build resilience against future setbacks. Our evidence-based return-to-sport protocols include objective performance testing to ensure you're truly game-ready, not just pain-free.",
    conditions: [
      "ACL, MCL, and meniscus repairs",
      "Rotator cuff and labral injuries",
      "Ankle sprains and chronic instability",
      "Muscle strains and tendinopathies",
      "Overuse injuries and stress fractures",
    ],
    benefits: [
      "Sport-specific functional training",
      "Objective return-to-play criteria",
      "Performance optimization beyond baseline",
      "Injury prevention strategies for longevity",
    ],
  },
  {
    id: "post-surgical",
    description:
      "Recovery after surgery requires precision, patience, and expertise. Our post-surgical rehabilitation programs are developed in close collaboration with your surgeon to honor tissue healing timelines while progressively challenging your body toward full recovery. We specialize in protocols for joint replacements, arthroscopic procedures, spinal surgeries, and soft tissue repairs.",
    conditions: [
      "Total knee and hip replacements",
      "Arthroscopic shoulder and knee procedures",
      "Spinal fusion and decompression",
      "Tendon and ligament reconstructions",
      "Fracture fixation recovery",
    ],
    benefits: [
      "Accelerated healing through evidence-based protocols",
      "Close communication with your surgical team",
      "Milestone-based progression for safe recovery",
      "Reduced risk of post-operative complications",
    ],
  },
  {
    id: "balance",
    description:
      "Falls are a leading cause of serious injury, particularly for older adults. Our balance and fall prevention program uses comprehensive assessments to identify your specific risk factors—whether vestibular, musculoskeletal, or neurological—and builds a targeted intervention plan. We combine strength training, proprioceptive challenges, and real-world balance scenarios to restore your confidence and independence.",
    conditions: [
      "History of falls or near-falls",
      "Age-related balance decline",
      "Post-surgical balance deficits",
      "Peripheral neuropathy",
      "Fear of falling limiting activity",
    ],
    benefits: [
      "Significantly reduced fall risk",
      "Improved confidence in daily mobility",
      "Enhanced strength and reaction time",
      "Greater independence and quality of life",
    ],
  },
  {
    id: "vestibular",
    description:
      "Dizziness, vertigo, and imbalance can be debilitating and isolating. Our vestibular rehabilitation specialists use precise diagnostic techniques to identify the source of your symptoms—whether BPPV, vestibular neuritis, or central vestibular dysfunction. Treatment includes repositioning maneuvers, gaze stabilization exercises, and habituation training tailored to your specific diagnosis.",
    conditions: [
      "Benign Paroxysmal Positional Vertigo (BPPV)",
      "Vestibular neuritis and labyrinthitis",
      "Ménière's disease management",
      "Concussion-related dizziness",
      "Persistent postural-perceptual dizziness",
    ],
    benefits: [
      "Rapid resolution of positional vertigo",
      "Restored visual stability during movement",
      "Reduced nausea and motion sensitivity",
      "Return to driving and daily activities",
    ],
  },
  {
    id: "neurological",
    description:
      "Neurological conditions demand specialized knowledge and adaptive treatment strategies. Our neurological rehabilitation program serves patients with stroke, Parkinson's disease, multiple sclerosis, and other complex diagnoses. We leverage neuroplasticity principles—the brain's ability to rewire itself—through high-repetition, task-specific training to maximize functional recovery and maintain independence.",
    conditions: [
      "Stroke and TBI recovery",
      "Parkinson's disease (LSVT BIG certified)",
      "Multiple sclerosis management",
      "Peripheral neuropathy",
      "Spinal cord injury rehabilitation",
    ],
    benefits: [
      "Improved mobility and functional independence",
      "Neuroplasticity-driven recovery protocols",
      "Fall risk reduction and safety training",
      "Caregiver education and support",
    ],
  },
];

const EQUIPMENT = [
  {
    name: "AlterG Anti-Gravity Treadmill",
    description:
      "NASA-developed technology that allows patients to walk or run at a fraction of their body weight, enabling earlier weight-bearing exercise after surgery or injury while protecting healing tissues.",
  },
  {
    name: "Blood Flow Restriction Training System",
    description:
      "Specialized pneumatic cuffs that allow patients to build strength and muscle mass using significantly lighter loads—ideal for post-surgical patients and those with load-sensitive conditions.",
  },
  {
    name: "Normatec Compression Recovery",
    description:
      "Sequential pulse compression technology that enhances circulation, reduces inflammation, and accelerates recovery between training sessions or after intense rehabilitation workouts.",
  },
  {
    name: "Functional Movement Screening Tools",
    description:
      "Standardized assessment equipment for identifying movement asymmetries, mobility restrictions, and stability deficits before they lead to injury or limit performance.",
  },
  {
    name: "Reformer & Pilates Equipment",
    description:
      "Clinical-grade Pilates reformers and equipment used for core stabilization, spinal mobility, and low-impact strengthening in a controlled, progressive environment.",
  },
];

export function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/sports-rehab.webp" alt="Sports rehabilitation therapy" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-5 md:px-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Comprehensive Care
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From orthopedic recovery to neurological rehabilitation, we provide
            specialized physical therapy services tailored to your unique needs
            and goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Specialized Treatment Programs
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Every patient receives an individualized treatment plan developed by
            doctoral-level physical therapists with advanced certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base tracking-tight mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Detail Sections */}
      {SERVICE_DETAILS.map((detail, index) => {
        const service = SERVICES.find((s) => s.id === detail.id);
        if (!service) return null;
        const Icon = ICON_MAP[service.icon];
        const isAlt = index % 2 === 1;

        return (
          <section
            key={detail.id}
            className={isAlt ? "bg-muted/50" : "bg-background"}
          >
            <div className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
              <div className="mb-10 rounded-2xl overflow-hidden h-56 md:h-72">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      {Icon && (
                        <Icon className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {detail.description}
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Conditions & Use Cases
                    </h3>
                    <ul className="space-y-3">
                      {detail.conditions.map((condition) => (
                        <li
                          key={condition}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground">
                            {condition}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {detail.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Conditions Treated */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Conditions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Conditions We Treat
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Our team has extensive experience treating a wide range of
            musculoskeletal, neurological, and vestibular conditions.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {CONDITIONS_TREATED.map((condition) => (
            <Badge
              key={condition}
              variant="outline"
              className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/30 transition-colors cursor-default"
            >
              {condition}
            </Badge>
          ))}
        </div>
      </section>

      {/* Treatment Techniques */}
      <section className="bg-muted/50">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Methods
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Treatment Techniques
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We employ a comprehensive toolkit of evidence-based techniques,
              selecting the right combination for your specific condition and
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TECHNIQUES.map((technique, index) => (
              <Card
                key={technique.name}
                className="p-6 rounded-2xl border border-border hover:shadow-md hover:border-primary/30 transition-all"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {technique.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {technique.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Advanced Technology
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Equipment
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We invest in state-of-the-art rehabilitation technology to provide
            you with the most effective treatment options available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT.map((item) => (
            <Card
              key={item.name}
              className="p-6 rounded-2xl border border-border hover:shadow-md hover:border-primary/30 transition-all"
            >
              <CardContent className="p-0 space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our team is happy to discuss your condition and recommend the best
            treatment approach. Reach out for a complimentary phone consultation.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
