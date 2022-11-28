import React from 'react'
import { graphql } from 'gatsby'
import { SliceComponentProps } from '@prismicio/react'
import { Button, Image, RichText } from '@superrb/gatsby-addons/components'
import { Slice } from '@prismicio/types'
import {
  Image as ImageType,
  Link as LinkType,
  RichText as RichTextType,
} from '@superrb/gatsby-addons/types'

interface Props extends Record<string, any> {
  featured_image: ImageType
  title: string
  description: RichTextType
  link: LinkType
  link_label: string
}

export const ImageHighlight = ({
  slice,
}: SliceComponentProps<Slice<'image_highlight', Props>>) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <h2>{slice.primary.title}</h2>
      <RichText field={slice.primary.description.richText} />
      <p>
        <Button
          href={slice.primary.link.url}
          label={slice.primary.link_label}
        />
      </p>
    </div>
    <div className="highlight-right">
      <Image image={slice.primary.featured_image} />
    </div>
  </section>
)

export const query = graphql`
  fragment HomepageDataBodyImageHighlight on PrismicHomepageDataBodyImageHighlight {
    primary {
      featured_image {
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
      title
      description {
        ...RichText
      }
      link {
        ...Link
      }
      link_label
    }
  }
`
