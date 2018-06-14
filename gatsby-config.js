module.exports = {
  siteMetadata: {
    title: `Sparkpost Developer`,
    description: `The SparkPost Developer Hub is a collection of resources to help you succeed with SparkPost – the email delivery and analytics service for developers. What will you build?`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: { root: `${__dirname}/src` }
    },
    `gatsby-plugin-react-next`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    /** data sourcing */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-api-elements`,
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
    /** Analytics
     ** Note: Google Analytics, HotJar, etc. is added through GTM */
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WN7C84',
        includeInDevelopment: false,
      }
    },
  ],
}
