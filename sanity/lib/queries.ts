import { groq } from 'next-sanity'

export const HOME_PAGE_QUERY = groq`
  *[_type == "page" && pageType == "home"][0] {
    _id,
    pageType,
    slug,
    homeContent {
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
        "image": image.asset->{
          url,
          alt
        },
        connectButtonText
      },
      toolsSection {
        title,
        subtitle,
        "tools": tools[].asset->{
          url,
          alt
        }
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
  }
`