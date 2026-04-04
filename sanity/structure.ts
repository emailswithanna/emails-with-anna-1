import type { StructureResolver } from 'sanity/structure'
import { DocumentIcon } from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Home Page').icon(DocumentIcon)
        .child(S.document().schemaType('homePage').documentId('homePage')),

      S.divider()
      
    ])
