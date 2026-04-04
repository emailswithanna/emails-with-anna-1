import {defineField, defineType} from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroSection',
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'servicesSection',
    }),
    defineField({
      name: 'aboutSection',
      title: 'About Section',
      type: 'aboutSection',
    }),
    defineField({
      name: 'toolsSection',
      title: 'Tools Section',
      type: 'toolsSection',
    }),
    defineField({
      name: 'experienceSection',
      title: 'Experience Section',
      type: 'experienceSection',
    }),
    defineField({
      name: 'contactSection',
      title: 'Contact Section',
      type: 'contactSection',
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    }
  }
})