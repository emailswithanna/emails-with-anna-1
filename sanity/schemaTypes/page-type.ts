import {defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          {title: 'Home Page', value: 'home'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'pageType',
      },
    }),
    defineField({
      name: 'homeContent',
      title: 'Home Page Content',
      type: 'homeContent',
      hidden: ({document}) => document?.pageType !== 'home',
    }),
  ],
  preview: {
    select: {
      pageType: 'pageType',
    },
    prepare(selection) {
      const {pageType} = selection
      return {
        title: pageType ? pageType.charAt(0).toUpperCase() + pageType.slice(1) : 'Page',
        subtitle: 'Page Content'
      }
    },
  },
})
