const slugify = require('./src/utils/api/slugify')
const { flatten } = require('lodash')
const apiDirectory = `${__dirname}/content/api`
const parseResult = require('minim-parse-result')
const minim = require('minim').namespace().use(parseResult)
const tableOfContents = flatten(require(`${apiDirectory}/table-of-contents.json`).map(({ pages }) => pages))

process.env.GATSBY_ACTIVE_ENV = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV

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

const plugins = flatten([
  basePlugins,
  docsPlugins,
  process.env.GATSBY_ACTIVE_ENV !== 'docs' && contentPlugins,
  process.env.GATSBY_ACTIVE_ENV === 'publish' && {
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: 'SFXAWCYDV8',
      apiKey: process.env.ALGOLIA_TOKEN,
      queries: [
        {
          query: `{
            allFile(filter:{extension:{eq:"apib"}}) {
              edges {
                node {
                  base
                  childApiBlueprint {
                    ast
                  }
                }
              }
            }

          }`,
          transformer(results) {
            console.log('push to aloglia')
            const apiPages = orderApiPages(results.data.allFile.edges.map(({ node }) => node))

            const searchableChunks = flatten(apiPages.map(({ base, childApiBlueprint }, pageIndex) => {
              const { path } = tableOfContents.find(({ file }) => file === base)

              return gatherSearchableCunks({ path, ast: childApiBlueprint.ast, pageIndex })
            }))

            console.log(`Pushing ${searchableChunks.length} chunks to algolia`)

            return searchableChunks
          },
          indexName: `api_docs_dev`

        }
      ]
    }
  }
]).filter(Boolean)

module.exports = { ...baseConfig, plugins }


function gatherSearchableCunks({ ast, path, pageIndex }) {
  const { api } = minim.fromRefract(ast)
  let searchables = []

  const link = (slug) => `${path}#${slug}`

  // an array of { heading, content } objects
  const sections = chunkMarkdown(api.copy.toValue().join(''))

  sections.forEach((section, sectionIndex) => {
    searchables.push({
      sectionName: section.heading,
      description: section.content,
      element: 'description',
      objectID: link(slugify.markdown({ heading: section.heading })),
      rank: rank(sectionIndex + pageIndex, SECTION_RANK)
    })
  })

  api.resourceGroups.forEach((resourceGroup, resourceGroupIndex) => {
    const resourceGroupRank = rank(resourceGroupIndex + pageIndex, RESOURCE_GROUP_RANK)

    searchables.push({
      resGroupName: resourceGroup.title.toValue(),
      description: resourceGroup.copy.toValue().join(''),
      element: 'resourceGroup',
      objectID: link(slugify.resourceGroup({ resourceGroup })),
      rank: resourceGroupRank
    })

    resourceGroup.resources.forEach((resource, resourceIndex) => {
      const resourceRank = resourceGroupRank + rank(resourceIndex, RESOURCE_RANK)

      searchables.push({
        resGroupName: resourceGroup.title.toValue(),
        resName: resource.title.toValue(),
        description: resource.copy.toValue().join(''),
        element: 'resource',
        objectID: link(slugify.resource({ resourceGroup, resource })),
        rank: resourceRank
      })

      // "transitions" are called "actions" in api blueprint - this is legacy naming from jekyll days
      resource.transitions.forEach((action, actionIndex) => {
        searchables.push({
          resGroupName: resourceGroup.title.toValue(),
          resName: resource.title.toValue(),
          actionName: action.title.toValue(),
          description: action.copy.toValue().join(''),
          element: 'action',
          objectID: link(slugify.transition({ resourceGroup, resource, transition: action })),
          rank: resourceRank + rank(actionIndex, ACTION_RANK)
        })
      })
    })
  })

  return searchables
}

const SECTION_RANK = 10000
const RESOURCE_GROUP_RANK = 10000
const RESOURCE_RANK = 100
const ACTION_RANK = 10

/**
 * generate algolia rank
 */
function rank(index, scale) {
  return (index + 1) * scale
}

function orderApiPages(apiPages) {
  // order the api pages into the order given by the table of contents
  const orderedApiPages = tableOfContents.map(({ file }) => {
    return apiPages.find(({ base }) => base === file)
  })

  return orderedApiPages
}

/**
 * Extract a human readable heading string from a Markdown heading line
 */
function cleanHeading(heading) {
  let match = heading.match(/^\s*#+\s*(.+)\s*$/)
  if (match) {
    return match[1]
  }
  return heading
}

/**
 * Split markdown content into heading/content pairs
 */
function chunkMarkdown(markdown) {
  let lines = markdown.split(/\n/).map((line, lineIndex) => ({ line, lineIndex }))

  let headings = lines.filter(({ line }) => line.match(/^\s*#+/))

  return headings.map((heading, headingIndex) => ({
    heading: cleanHeading(heading.line),
    content: lines.slice(heading.lineIndex + 1, headingIndex < headings.length - 1 ? headings[headingIndex + 1].lineIndex : lines.length)
      .map(({ line }) => line)
      .join('\n')
  }))
}
