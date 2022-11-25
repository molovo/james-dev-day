import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Homepage from '../types/pages/homepage'
import { Page, Seo } from '@superrb/gatsby-addons/components'
// import { SliceZone } from '@prismicio/react'
// import { components } from '../slices'

const Index = ({ data }: PageProps<{ page: Homepage }>) => {
  /** @type {Homepage} page */
  const page = data.page
  if (!page) {
    return null
  }

  const {
    data: { page_title },
  } = page

  return (
    <>
      <Page page={page}>
        {page_title && <h1>{page_title}</h1>}
        {/* <SliceZone slices={page.data.body} components={components} /> */}
      </Page>
    </>
  )
}

export const query = graphql`
  query HomepageQuery($id: String) {
    prismicHomepage(id: { eq: $id }) {
      ...Homepage
    }
  }
`

export default Index
