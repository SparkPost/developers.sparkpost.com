const baseConfig = {
  siteMetadata: {
    title: `Sparkpost Developers`,
    description: `SparkPost developer resources including Documentation, API reference, and client libraries.`,
  }
}

const basePlugins = [
  // `gatsby-plugin-netlify-cms`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: true
    }
  },
  `gatsby-plugin-lodash`,
  /** Analytics
   ** Note: Google Analytics, HotJar, etc. is added through GTM */
  {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: 'GTM-WN7C84',
      includeInDevelopment: false,
    }
  },
]

const docsPlugins = [
  /** data sourcing */
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `${__dirname}/content/`,
    },
  },
  `gatsby-transformer-api-elements`,
]

const contentPlugins = [
  `gatsby-transformer-json`,
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
]

const plugins = process.env.ACTIVE_ENV === 'docs' ? [
  ...basePlugins,
  ...docsPlugins,
] : [
  ...basePlugins,
  ...docsPlugins,
  ...contentPlugins
]

module.exports = { ...baseConfig, plugins }
