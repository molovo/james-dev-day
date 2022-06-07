import { graphql } from 'gatsby'
import { Page } from '@superrb/gatsby-addons/types'
import { SliceLike, SliceZoneLike } from '@prismicio/react'

interface Homepage extends Page {
  data: Page['data']
  body: SliceZoneLike<SliceLike<string>>
}

export const query = graphql`
  fragment Homepage on PrismicHomepage {
    _previewable
    uid
    id
    type
    tags
    data {
      page_title

      body {
        ... on PrismicSliceType {
          slice_type
        }
        ...HomepageDataBodyText
        ...HomepageDataBodyQuote
        ...HomepageDataBodyFullWidthImage
        ...HomepageDataBodyImageGallery
        ...HomepageDataBodyImageHighlight
      }

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

export default Homepage
