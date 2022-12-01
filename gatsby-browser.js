import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'
import { Layout } from './src/components/layout'
import { repositoryConfigs } from './src/utils/prismicPreviews'
import NavContextProvider from './src/context/nav-context-provider'

import './src/stylesheets/style.sass'
import { StateInspector } from 'reinspect'
import { TranslationContextProvider } from '@superrb/gatsby-addons/context'

export const wrapRootElement = ({ element }) => (
  <StateInspector name="App">
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link to={href} {...props} />
      )}
    >
      <PrismicPreviewProvider repositoryConfigs={repositoryConfigs}>
        <TranslationContextProvider>
          <NavContextProvider>
            <Layout>{element}</Layout>
          </NavContextProvider>
        </TranslationContextProvider>
      </PrismicPreviewProvider>
    </PrismicProvider>
  </StateInspector>
)

export const onRouteUpdate = ({ location: { pathname }, prevLocation }) => {
  if (pathname === '/') {
    pathname = 'home'
  }

  document.body.setAttribute(
    'class',
    `page ${[
      ...pathname
        .split('/')
        .filter((x) => !!x)
        .map((slug) => `page--${slug}`),
    ].join(' ')}`,
  )
}
