export interface Page {
  pageType: 'home';
  slug?: string;
  homeContent?: HomeContent;
}

export interface HomeContent {
  heroSection: HeroSection;
  servicesSection: ServicesSection;
  aboutSection: AboutSection;
  toolsSection: ToolsSection;
  experienceSection: ExperienceSection;
  contactSection: ContactSection;
}
export interface HeroSection {
  tagline: string;
  description: string;
  contactButtonText: string;
  servicesButtonText: string;
};
export interface ServicesSection {
  title: string;
  services: {
    title: string;
    description: string;
    icon: string;
  } [];
  contactButtonText: string;
};
export interface AboutSection {
  title: string;
  text: string;
  image: {
    url: string;
    alt: string;
  };
  connectButtonText?: string;
};
export interface ToolsSection {
  title: string;
  subtitle: string;
  tools: {
    url: string;
    alt: string;
  } [];
};
export interface ExperienceSection {
  title: string;
  experiences: {
    name: string;
    link: string;
  } [];
};
export interface ContactSection {
  title: string;
  subtitle: string;
  submitButtonText: string;
};
