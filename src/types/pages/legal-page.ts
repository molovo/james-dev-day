import { Page, RichText } from '@superrb/gatsby-addons/types'
import { graphql } from 'gatsby'

interface LegalPage extends Page {
  last_publication_date: string
  data: Page['data'] & {
    content: RichText
  }
}

export const query = graphql`
  fragment LegalPage on PrismicLegalPage {
    _previewable
    uid
    id
    lang
    tags
    type
    first_publication_date(formatString: "Y-m-d")
    last_publication_date(formatString: "Y-m-d")
    alternate_languages {
      ...AlternateLanguage
    }

    data {
      page_title

      # Content Tab
      content {
        ...RichText
      }

      # Meta Tab
      meta_description
      meta_navigation_title
      meta_robots
      meta_title
      meta_image {
        alt
        fluid(
          imgixParams: { q: 75, auto: "compress", fm: "webp" }
          srcSetBreakpoints: [25, 750, 1080, 1366, 1920, 2560, 3840, 4096, 5120]
        ) {
          base64
          src
          srcSet
        }
      }
    }
  }
`

export default LegalPage
