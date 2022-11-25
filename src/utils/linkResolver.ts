import { Link, Page } from '@superrb/gatsby-addons/types'

/**
 * The Link Resolver used for the Prismic repository. This function converts a
 * Prismic document to a URL within your app. It is used throughout your app to
 * resolve document links and support editor previews.
 *
 * {@link https://prismic.io/docs/technologies/link-resolver-gatsby}
 *
 * @param doc Prismic document to resolve to a URL within your app.
 *
 * @returns URL for the provided Prismic document.
 */
export const linkResolver = (doc: Page | Link) => {
  switch (doc.type) {
    default:
      return '/'
  }
}
