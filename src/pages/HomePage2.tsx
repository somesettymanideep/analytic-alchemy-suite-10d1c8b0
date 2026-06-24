import Navbar from "@/components/Navbar";
import Hero2Section from "@/components/Hero2Section";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
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
      <VideoShowcaseSection />
      <MigrationPathSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
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
