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
    `gatsby-plugin-netlify-cms`,
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
      },
      {
        resolve: 'gatsby-source-github',
        options: {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
          queries: [
            `{
              search(type: REPOSITORY, query: "is:public user:SparkPost", first: 100) {
                edges {
                  node {
                    ... on Repository {
                      name
                      url
                      description
                      stargazers {
                        totalCount
                      }
                    }
                  }
                }
              }
            }`,
          ],
        }
      },
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
    // Google Analytics, HotJar, etc. are added through GTM
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WN7C84',
        includeInDevelopment: false,
      }
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
    `gatsby-plugin-netlify`
  ])
}
