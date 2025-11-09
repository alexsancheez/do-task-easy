import { HeroSection } from "@/components/landing/HeroSection";
import { WhoHowWhatSection } from "@/components/landing/WhoHowWhatSection";
import { ProblemSolutionSection } from "@/components/landing/ProblemSolutionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ComparisonSection } from "@/components/landing/ComparisonSection";
import { DemoSection } from "@/components/landing/DemoSection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <WhoHowWhatSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <ComparisonSection />
      <DemoSection />
      <Footer />
    </main>
  );
};

export default Index;
