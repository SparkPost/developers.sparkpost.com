import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.css'
import './global-styles.css'
import Header from '../components/header'
import Footer from '../components/footer'

import {injectGlobal} from 'styled-components'

injectGlobal`
  @import 'https://cloud.typography.com/6240112/779488/css/fonts.css'
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="SparkPost Developer"
      meta={[
        { name: 'description', content: 'The SparkPost Developer Hub is a collection of resources to help you succeed with SparkPost – the email delivery and analytics service for developers. What will you build?' },
        { name: 'keywords', content: 'SparkPost' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
