import { defineField, defineType } from 'sanity'

export const servicesSection = defineType({
  name: 'servicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'service',
          title: 'Service',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'text',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Enter the icon name from https://lucide.dev/icons/',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contactButtonText',
      title: 'Contact Button Text',
      type: 'string',
    }),
  ],
})