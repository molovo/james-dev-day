import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { SkipTo } from './skip-to'
import Header from './header'
import Footer from './footer'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Helmet>
      <SkipTo />
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </>
  )
}
