import AboutSection from "./home/about-section";
import ContactSection from "./home/contact-section";
import ExperienceSection from "./home/experience-section";
import HeroSection from "./home/hero-section";
import ServicesSection from "./home/services-section";
import ToolsSection from "./home/tools-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ToolsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
