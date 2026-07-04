import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedMarqueeSection from "@/components/TrustedMarqueeSection";
import ProblemWeSolveSection from "@/components/ProblemWeSolveSection";
import WhyUsSection from "@/components/WhyUsSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import PlatformShowcaseSection from "@/components/PlatformShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DualCtaSection from "@/components/DualCtaSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustedMarqueeSection />
      <ProblemWeSolveSection />
      <WhyUsSection />
      <StatsSection />
      <ProcessSection />
      <CaseStudiesSection />
      <PlatformShowcaseSection />
      <TestimonialsSection />
      <DualCtaSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
