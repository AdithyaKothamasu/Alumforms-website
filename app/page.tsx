import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import ClientsSection from "../components/ClientsSection";
import { FeaturesSectionDemo } from "../components/FeaturesSection";
import ComponentsCarousel from "../components/ComponentsCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import WhatsAppFloatingButton from "../components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Hero />
      <div id="after-hero-sentinel" className="h-1 w-full"></div>
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <FeaturesSectionDemo />
      <ComponentsCarousel />
      <WhyChooseUs />
      <WhatsAppFloatingButton />
    </>
  );
}
