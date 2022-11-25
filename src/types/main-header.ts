import { Link } from '@superrb/gatsby-addons/types'
import { graphql } from 'gatsby'

export interface MainHeaderLink {
  label: string
  link: Link
}

interface MainHeader {
  data: {
    navigation_items: MainHeaderLink[]
  }
}

export const query = graphql`
  fragment MainHeader on PrismicMainHeader {
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

export default MainHeader
