export interface SanityImage {
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
};

export interface SiteSettings {
  title: string;
  description: string;
  image?: SanityImage;
  contactEmail?: string;
  linkedInUrl?: string;
};

export interface HomePage {
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
  image?: SanityImage;
  connectButtonText?: string;
};

export interface ToolsSection {
  title: string;
  subtitle: string;
  tools: SanityImage[];
};

export interface ExperienceSection {
  title: string;
  experiences: {
    name: string;
    link?: string;
  } [];
};

export interface ContactSection {
  title: string;
  subtitle: string;
  submitButtonText: string;
};
