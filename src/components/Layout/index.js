import React from 'react'
import { graphql, StaticQuery, withPrefix } from 'gatsby'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'
import { CookiesProvider } from 'react-cookie'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ConsentBar from 'components/ConsentBar'
import zIndex from 'utils/zIndex'

function onApiPage(location) {
  return location.pathname.startsWith('/api')
}

const Layout = ({ data, children, location }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <CookiesProvider>
        <StickyContainer>
          <Sticky>
            {({ style: { width, ...style }, isSticky, distanceFromTop }) => (
              <div
                style={{ ...style, width: `100%`, zIndex: zIndex('header') }}
              >
                <Header
                  path={location.pathname}
                  isSticky={
                    true ||
                    (isSticky && distanceFromTop !== 0) ||
                    onApiPage(location) ||
                    location.pathname === '/integraion'
                  }
                />
              </div>
            )}
          </Sticky>
          <Helmet
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate="%s - SparkPost"
          >
            <html lang="en" />
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            {'' /*open graph and twitter */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="SparkPost" />
            <meta name="twitter:site" content="@SparkPost" />
            <meta property="fb:admins" content="371333539709717" />
            <meta name="twitter:creator" content="@SparkPost" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:image"
              content={withPrefix('/meta/cover.jpg')}
            />
            {'' /* favicon and app data */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={withPrefix('/favicons/apple-touch-icon.png')}
            />
            <link
              rel="icon"
              type="image/png"
              href={withPrefix('/favicons/favicon-32x32.png')}
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href={withPrefix('/favicons/favicon-16x16.png')}
              sizes="16x16"
            />
            <link
              rel="mask-icon"
              href={withPrefix('/favicons/safari-pinned-tab.svg')}
              color="#5bbad5"
            />
            <link
              rel="shortcut icon"
              href={withPrefix('/favicons/favicon.ico')}
            />
            <meta
              name="msapplication-config"
              content={withPrefix('/meta/browserconfig.xml')}
            />
            <link rel="manifest" href={withPrefix('/meta/manifest.json')} />
            <meta name="theme-color" content="#ffffff" />
          </Helmet>
          {children}
          {!onApiPage(location) && <Footer />}
        </StickyContainer>
        <ConsentBar />
      </CookiesProvider>
    )}
  />
)

export default Layout
