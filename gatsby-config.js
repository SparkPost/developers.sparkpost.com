'use strict'

const { flatten } = require('lodash')
const queries = require('./algolia-queries.js')

// Environment variables prefixed by "GATSBY" are accessible in src/ files
process.env.GATSBY_ACTIVE_ENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV

module.exports = {
  siteMetadata: {
    title: `SparkPost Developers`,
    description: `SparkPost developer resources including documentation, API reference, and client libraries.`,
  },
  plugins: flatten([
    process.env.GATSBY_ACTIVE_ENV !== 'docs' ? [
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/content/pages`,
        },
      },
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: 'sparkpost.com',
          protocol: 'https',
          hostingWPCOM: false,
          useACF: false,
          excludedRoutes: [ '**/oembed/**', '**/akismet/**', '**/yoast/**' , '**/users/**', '**/settings', '**/pages', '**/yst_prominent_words', '**/comments', '**/statuses', '**/media' ]
        }
      }
    ] : [],
    process.env.GATSBY_ACTIVE_ENV === 'publish' ? [
      {
        resolve: `gatsby-plugin-algolia`,
        options: {
          appId: 'SFXAWCYDV8',
          apiKey: process.env.ALGOLIA_TOKEN,
          queries
        }
      }
    ] : [],
    `gatsby-transformer-json`,
    `gatsby-transformer-api-blueprint`,
    `gatsby-source-sparkpost-api`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true
      }
    },
    // Google Analytics, etc. are added through GTM
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WN7C84',
        includeInDevelopment: false,
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: '706123',
        sv: '6'
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#fa6423`,
        showSpinner: false,
      }
    },
    `gatsby-plugin-lodash`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          // Disable cache for Gatsby's default service worker file path
          // suggested by https://www.netlify.com/blog/2018/06/28/5-pro-tips-and-plugins-for-optimizing-your-gatsby---netlify-site/
          "/sw.js": [ "Cache-Control: no-cache" ]
        },
      }
    }
  ])
}
