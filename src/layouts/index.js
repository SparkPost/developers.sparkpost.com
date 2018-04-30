import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StickyContainer, Sticky } from 'react-sticky'

import './index.css'
import 'font-awesome/css/font-awesome.min.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function onApiPage(location) {
  return location.pathname.startsWith('/api')
}

const TemplateWrapper = ({ children, location }) => (
  <div>
    <StickyContainer>
      <Sticky>
        {({ style, isSticky, distanceFromTop }) => (
            <div style={{ ...style, zIndex: 10 }}>
              <Header
                path={location.pathname}
                isSticky={isSticky && distanceFromTop !== 0 || onApiPage(location) || location.pathname === '/integraion'} />
            </div>
          )}
      </Sticky>
      <Helmet
        defaultTitle="SparkPost Developers"
        titleTemplate="%s - SparkPost"
        meta={[
          {
            name: 'description',
            content:
              'The SparkPost Developer Hub is a collection of resources to help you succeed with SparkPost – the email delivery and analytics service for developers. What will you build?',
          },
          { name: 'keywords', content: 'SparkPost' },
        ]}
      />
      {children()}
      {!onApiPage(location) && <Footer />}
    </StickyContainer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
