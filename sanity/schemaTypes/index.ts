import { type SchemaTypeDefinition } from 'sanity'
import { pageType } from './page-type'
import { homeContent } from './home/home-content'
import { heroSection } from './home/hero-section'
import { servicesSection } from './home/services-section'
import { aboutSection } from './home/about-section'
import { toolsSection } from './home/tools-section'
import { experienceSection } from './home/experience-section'
import { contactSection } from './home/contact-section'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    pageType,
    homeContent,
    heroSection,
    servicesSection,
    aboutSection,
    toolsSection, 
    experienceSection,
    contactSection,
  ],
}
