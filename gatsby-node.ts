import { PageStub } from '@superrb/gatsby-addons/types'
import path from 'path'
import { linkResolver } from './src/utils/linkResolver'

export const onCreateWebpackConfig = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        ProjectRoot: path.resolve(__dirname, '.'),
      },
    },
  })
}

export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query NodeQuery {
      homepages: allPrismicHomepage {
        nodes {
          id
          uid
          lang
          type
        }
      }
      legalPages: allPrismicLegalPage {
        nodes {
          id
          uid
          lang
          type
        }
      }
      contactPages: allPrismicContactPage {
        nodes {
          id
          uid
          lang
          type
        }
      }
    }
  `)

  // create legal pages
  result.data.homepages.nodes.forEach((page: PageStub) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/homepage.tsx'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  // create legal pages
  result.data.legalPages.nodes.forEach((page: PageStub) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/legal.tsx'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })

  // create contact pages
  result.data.contactPages.nodes.forEach((page: PageStub) => {
    createPage({
      path: linkResolver(page),
      component: path.resolve(__dirname, 'src/templates/contact.tsx'),
      context: {
        id: page.id,
        lang: page.lang,
      },
    })
  })
}
