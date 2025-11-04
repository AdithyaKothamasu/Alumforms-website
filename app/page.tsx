import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import { FeaturesSectionDemo } from "../components/FeaturesSection";
import ComponentsCarousel from "../components/ComponentsCarousel";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <FeaturesSectionDemo />
      <ComponentsCarousel />
      <WhyChooseUs />
    </>
  );
}
