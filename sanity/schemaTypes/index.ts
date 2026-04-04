import { type SchemaTypeDefinition } from 'sanity'
import { heroSection } from './home/hero-section'
import { servicesSection } from './home/services-section'
import { aboutSection } from './home/about-section'
import { toolsSection } from './home/tools-section'
import { experienceSection } from './home/experience-section'
import { contactSection } from './home/contact-section'
import { homePage } from './home-page'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homePage,
    heroSection,
    servicesSection,
    aboutSection,
    toolsSection, 
    experienceSection,
    contactSection,
  ],
}
