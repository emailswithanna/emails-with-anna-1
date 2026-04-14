import { sanityFetch } from "@/sanity/lib/live";
import AboutSection from "./home/about-section";
import ContactSection from "./home/contact-section";
import ExperienceSection from "./home/experience-section";
import HeroSection from "./home/hero-section";
import ServicesSection from "./home/services-section";
import ToolsSection from "./home/tools-section";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { HomePage } from "@/sanity/lib/types";

export default async function Home() {
  const pageData = (await sanityFetch({ query: HOME_PAGE_QUERY, params: {} }))?.data as HomePage | null;
  
  return (
    <div className="flex flex-col"> 
      <HeroSection content={pageData?.heroSection} />
      <ServicesSection content={pageData?.servicesSection} />
      <AboutSection content={pageData?.aboutSection} />
      <ToolsSection content={pageData?.toolsSection} />
      <ExperienceSection content={pageData?.experienceSection} />
      <ContactSection content={pageData?.contactSection} />
    </div>
  );
}
