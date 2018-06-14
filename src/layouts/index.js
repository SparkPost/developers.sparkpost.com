import React from 'react'
import PropTypes from 'prop-types'
import { withPrefix } from 'gatsby-link'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import zIndex from '../utils/zIndex'

function onApiPage(location) {
  return location.pathname.startsWith('/api')
}

const TemplateWrapper = ({ data, children, location }) => (
  <div>
    <StickyContainer>
      <Sticky>
        {({ style, isSticky, distanceFromTop }) => (
          <div style={{ ...style, zIndex: zIndex('header') }}>
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
        <meta name="description" content={data.site.siteMetadata.description} />
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
        <link rel="manifest" href={withPrefix('/favicons/manifest.json')} />
        <link
          rel="mask-icon"
          href={withPrefix('/favicons/safari-pinned-tab.svg')}
          color="#5bbad5"
        />
        <link rel="shortcut icon" href={withPrefix('/favicons/favicon.ico')} />
        <meta
          name="msapplication-config"
          content={withPrefix('/favicons/browserconfig.xml')}
        />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>
      {children()}
      {!onApiPage(location) && <Footer />}
    </StickyContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
