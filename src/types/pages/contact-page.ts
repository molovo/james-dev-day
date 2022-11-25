import { graphql } from 'gatsby'
import { Page } from '@superrb/gatsby-addons/types'

interface ContactPage extends Page {
  data: Page['data']
}

export const query = graphql`
  fragment ContactPage on PrismicContactPage {
    _previewable
    uid
    id
    lang
    type
    tags
    first_publication_date
    last_publication_date
    alternate_languages {
      ...AlternateLanguage
    }

    data {
      page_title

      meta_description
      meta_navigation_title
      meta_robots
      meta_title
      meta_image {
        fluid {
          base64
          src
        }
        gatsbyImageData(
          layout: CONSTRAINED
          imgixParams: { q: 65 }
          placeholder: BLURRED
          breakpoints: [750, 1080, 1366, 1920, 2048, 2560, 3840, 4096, 5120]
        )
      }
    }
  }
`

export default ContactPage
