import { defineQuery } from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`
  *[_id == "homePage" && _type == "homePage"][0] {
    heroSection {
      tagline,
      description,
      contactButtonText,
      servicesButtonText
    },
    servicesSection {
      title,
      services[] {
        title,
        description,
        icon
      },
      contactButtonText
    },
    aboutSection {
      title,
      text,
      image,
      connectButtonText
    },
    toolsSection {
      title,
      subtitle,
      tools
    },
    experienceSection {
      title,
      experiences[] {
        name,
        link
      }
    },
    contactSection {
      title,
      subtitle,
      submitButtonText
    }
  }
`)