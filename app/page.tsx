import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import { FeaturesSectionDemo } from "../components/FeaturesSection";
import ComponentsCarousel from "../components/ComponentsCarousel";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturesSectionDemo />
      <ComponentsCarousel />
      <WhyChooseUs />
    </>
  );
}
