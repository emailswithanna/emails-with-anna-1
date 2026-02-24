import { defineField, defineType } from 'sanity'

export const toolsSection = defineType({
  name: 'toolsSection',
  title: 'Tools Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'image',
          name: 'tool',
          title: 'Tool Image',
        },
      ],
    }),
  ],
})