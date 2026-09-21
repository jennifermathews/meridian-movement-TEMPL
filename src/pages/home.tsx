import { HeroSection } from "./home-sections/hero";
import { StatsBar } from "./home-sections/stats-bar";
import { AboutPreview } from "./home-sections/about-preview";
import { ServicesOverview } from "./home-sections/services-overview";
import { WhyDifferent } from "./home-sections/why-different";
import { TeamPreview } from "./home-sections/team-preview";
import { ConditionsSection } from "./home-sections/conditions";
import { TechniquesSection } from "./home-sections/techniques";
import { TestimonialsPreview } from "./home-sections/testimonials-preview";
import { InsuranceSection } from "./home-sections/insurance";
import { ProcessSection } from "./home-sections/process";
import { FAQPreview } from "./home-sections/faq-preview";
import { ServiceAreasSection } from "./home-sections/service-areas";
import { FinalCTA } from "./home-sections/final-cta";

export function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsBar />
      <AboutPreview />
      <ServicesOverview />
      <WhyDifferent />
      <TeamPreview />
      <ConditionsSection />
      <TechniquesSection />
      <TestimonialsPreview />
      <InsuranceSection />
      <ProcessSection />
      <FAQPreview />
      <ServiceAreasSection />
      <FinalCTA />
    </div>
  );
}
