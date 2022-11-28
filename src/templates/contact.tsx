import { Form, Page } from '@superrb/gatsby-addons/components'
import { PageStub } from '@superrb/gatsby-addons/types'
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import * as yup from 'yup'
import ContactPageType from '../types/pages/contact-page'

const NATURE_OF_ENQUIRY_OPTIONS = [
  'General Enquiry',
  'Sales Enquiry',
  'Support Enquiry',
]

const Schema = yup.object({
  name: yup.string().label('Something else').required(),
  email: yup.string().email().required(),
  phone: yup.string(),
  natureOfEnquiry: yup
    .string()
    .oneOf(NATURE_OF_ENQUIRY_OPTIONS)
    .required()
    .default('Sales Enquiry'),
  message: yup.string().meta({ textarea: true }).required(),
})

const ContactPage = ({
  data,
}: PageProps<{ page: ContactPageType }, PageStub>) => {
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
        <Form
          action="https://test-contact-handler.superrb.workers.dev"
          name="contact-form"
          schema={Schema}
        />
      </Page>
    </>
  )
}

export const query = graphql`
  query ContactPageQuery($id: String) {
    prismicContactPage(id: { eq: $id }) {
      ...ContactPage
    }
  }
`

export default ContactPage
