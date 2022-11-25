import { Link } from '@superrb/gatsby-addons/types'
import { graphql } from 'gatsby'

export interface MainFooterLink {
  label: string
  link: Link
}

interface MainFooter {
  data: {
    navigation_items: MainFooterLink[]
  }
}

export const query = graphql`
  fragment MainFooter on PrismicMainFooter {
    data {
      navigation_items {
        label
        link {
          ...Link
        }
      }
    }
  }
`

export default MainFooter
