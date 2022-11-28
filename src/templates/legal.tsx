import { graphql, PageProps } from 'gatsby'
import React from 'react'
import Homepage from '../types/pages/homepage'
import { Page, Seo } from '@superrb/gatsby-addons/components'
import { PageStub } from '@superrb/gatsby-addons/types'
import LegalPageType from '../types/pages/legal-page'

const LegalPage = ({
  data,
}: PageProps<{ prismicLegalPage: LegalPageType }, PageStub>) => {
  /** @type {Homepage} page */
  const page = data.prismicLegalPage
  if (!page) {
    return null
  }

  const {
    data: { page_title },
  } = page

  return (
    <>
      <Page page={page}>{page_title && <h1>{page_title}</h1>}</Page>
    </>
  )
}

export const query = graphql`
  query LegalPageQuery($id: String) {
    prismicLegalPage(id: { eq: $id }) {
      ...LegalPage
    }
  }
`

export default LegalPage
