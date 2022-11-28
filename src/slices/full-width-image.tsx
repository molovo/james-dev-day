import React from 'react'
import { graphql } from 'gatsby'
import { Image } from '@superrb/gatsby-addons/components'
import { SliceComponentProps } from '@prismicio/react'
import { Slice } from '@prismicio/types'
import { Image as ImageType } from '@superrb/gatsby-addons/types'

interface Props extends Record<string, any> {
  image: ImageType
}

export const FullWidthImage = ({
  slice,
}: SliceComponentProps<Slice<'full_width_image', Props>>) => (
  <section className="full-width-image content-section">
    <Image image={slice.primary.image} />
  </section>
)

export const query = graphql`
  fragment HomepageDataBodyFullWidthImage on PrismicHomepageDataBodyFullWidthImage {
    primary {
      image {
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
