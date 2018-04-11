module.exports = {
  siteMetadata: {
    title: `Sparkpost Developer`,
    description: `The SparkPost Developer Hub is a collection of resources to help you succeed with SparkPost – the email delivery and analytics service for developers. What will you build?`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
  ],
}
