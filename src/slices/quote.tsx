import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from '@superrb/gatsby-addons/components'
import { RichText as RichTextType } from '@superrb/gatsby-addons/types'
import { SliceComponentProps } from '@prismicio/react'
import { Slice } from '@prismicio/types'

interface Props extends Record<string, any> {
  quote: RichTextType
}

export const Quote = ({
  slice,
}: SliceComponentProps<Slice<'quote', Props>>) => (
  <section className="content-section quote">
    <blockquote>
      <RichText field={slice.primary.quote.richText} />
    </blockquote>
  </section>
)

export const query = graphql`
  fragment HomepageDataBodyQuote on PrismicHomepageDataBodyQuote {
    primary {
      quote {
        ...RichText
      }
    }
  }
`
