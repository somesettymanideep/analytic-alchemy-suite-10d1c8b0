import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
import RevealOnScroll from "@/components/RevealOnScroll";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <RevealOnScroll><VideoShowcaseSection /></RevealOnScroll>
      <RevealOnScroll><MigrationPathSection /></RevealOnScroll>
      <RevealOnScroll><StatsSection /></RevealOnScroll>
      <RevealOnScroll><ServicesSection /></RevealOnScroll>
      <RevealOnScroll><AboutSection /></RevealOnScroll>
      <RevealOnScroll><WhyUsSection /></RevealOnScroll>
      <RevealOnScroll><CaseStudiesSection /></RevealOnScroll>
      <RevealOnScroll><ProcessSection /></RevealOnScroll>
      <RevealOnScroll><TestimonialsSection /></RevealOnScroll>
      <RevealOnScroll><DualCtaSection /></RevealOnScroll>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
