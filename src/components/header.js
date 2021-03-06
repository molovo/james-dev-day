import React, { useCallback, useContext, useEffect, useRef } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import MainHeader from '../types/main-header'
import MenuToggle from './navigation/mobile-menu-toggle'
import { NavContext } from './../context/nav-context-provider'
import { linkResolver } from '../utils/linkResolver'
import { SiteConfig } from '@superrb/gatsby-addons/types'
import { useIsMobile } from '@superrb/gatsby-addons/hooks'

const Header = () => {
  const data = useStaticQuery(graphql`
    query MainHeaderQuery {
      header: prismicMainHeader {
        ...MainHeader
      }
      config: prismicSiteConfig {
        ...SiteConfig
      }
    }
  `)

  const isMobile = useIsMobile()
  const { navOpen } = useContext(NavContext)
  const headerElement = useRef(null)

  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      //If header needs to be sticky, do it here
    })
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: false })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  /** @type {MainHeader} header */
  const header = data?.header
  if (!header) {
    return null
  }

  /** @type {SiteConfig} config */
  const config = data?.config
  if (!config) {
    return null
  }

  return (
    <header className="main-header" ref={headerElement}>
      <div className="main-header__container">
        <Link to="/" className="main-header__logo">
          Back To Home
        </Link>
        {isMobile && (
          <MenuToggle
            className="main-header__toggle"
            label="Open Nav"
            closeLabel="Close Nav"
          />
        )}
        <nav
          className="main-header__nav nav"
          aria-hidden={isMobile && !navOpen}
        >
          <ul className="nav__list">
            {header.data.navigation_items.map((link, index) => (
              <li key={index} className="nav__item">
                <Link to={linkResolver(link.link)} className="nav__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
