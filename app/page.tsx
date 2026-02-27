import { sanityFetch } from "@/sanity/lib/live";
import AboutSection from "./home/about-section";
import ContactSection from "./home/contact-section";
import ExperienceSection from "./home/experience-section";
import HeroSection from "./home/hero-section";
import ServicesSection from "./home/services-section";
import ToolsSection from "./home/tools-section";
import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { Page } from "@/sanity/lib/types";

export default async function Home() {
  const pageData = (await sanityFetch({query: HOME_PAGE_QUERY, params: {}}))?.data as Page;
  
  return (
    <div className="flex flex-col"> 
      <HeroSection content={pageData.homeContent?.heroSection} />
      <ServicesSection content={pageData.homeContent?.servicesSection} />
      <AboutSection content={pageData.homeContent?.aboutSection} />
      <ToolsSection content={pageData.homeContent?.toolsSection} />
      <ExperienceSection content={pageData.homeContent?.experienceSection} />
      <ContactSection content={pageData.homeContent?.contactSection} />
    </div>
  );
}
