import AboutSection from "./home/about-section";
import HeroSection from "./home/hero-section";
import ServicesSection from "./home/services-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
    </div>
  );
}
