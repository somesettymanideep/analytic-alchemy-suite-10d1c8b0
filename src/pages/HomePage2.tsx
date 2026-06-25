import Navbar from "@/components/Navbar";
import Hero2Section from "@/components/Hero2Section";
import ProofInNumbersSection from "@/components/ProofInNumbersSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyNgsitSection from "@/components/WhyNgsitSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import MigrationPathSection from "@/components/MigrationPathSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import DualCtaSection from "@/components/DualCtaSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const HomePage2 = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero2Section />
      <ProofInNumbersSection />
      <HowWeWorkSection />
      <SolutionsSection />
      <WhyNgsitSection />
      <VideoShowcaseSection />
      <MigrationPathSection />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TestimonialsSection />
      <DualCtaSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage2;
