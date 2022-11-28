import React from 'react'
import { graphql } from 'gatsby'
import { RichText } from '@superrb/gatsby-addons/components'
import { RichText as RichTextType } from '@superrb/gatsby-addons/types'
import { SliceComponentProps } from '@prismicio/react'
import { Slice } from '@prismicio/types'

interface Props extends Record<string, any> {
  content: RichTextType
}

export const Text = ({ slice }: SliceComponentProps<Slice<'text', Props>>) => {
  return (
    <section className={`content-section`}>
      <RichText field={slice.primary.content.richText} />
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyText on PrismicHomepageDataBodyText {
    primary {
      content {
        ...RichText
      }
    }
  }
`
