import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the website, used in the header and search engines.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the website, used in search engines.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Image used for social media sharing and search engine previews.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Email address to send contact form submissions to.',
    }),
    defineField({
      name: 'linkedInUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    }
  }
});
