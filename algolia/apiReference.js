/**
 * Queries for content to be indexed by Aloglia
 */

'use strict'

const slugify = require('../src/utils/api/slugify')
const { flatten } = require('lodash')
const parseResult = require('minim-parse-result')
const minim = require('minim').namespace().use(parseResult)
const files = flatten(require(`${__dirname}/../content/api/table-of-contents.json`).map(({ pages }) => pages))

module.exports = {
  indexName: `api_reference`,
  query: `{
    allApiBlueprint {
      edges {
        node {
          ast
          fields {
            path
            file
          }
        }
      }
    }
  }`,
  transformer(results) {
    const pages = results.data.allApiBlueprint.edges.map(({ node }) => node)
    const apiPages = orderApiPages(pages)

    const searchableChunks = flatten(apiPages.map(({ fields: { path }, ast }, pageIndex) => {
      return gatherSearchableCunks({ path, ast, pageIndex })
    }))

    /**
     * Remove all resources that don't have any description since they are
     * almost definitely the same title as their transition child and only
     * create noise in the search.
     */
    const filteredSearchableChunks = searchableChunks.filter(({ element, description }) => {
      return !(element === 'resource' && description.length === 0)
    })

    console.log(`push ${filteredSearchableChunks.length} chunks to algolia`)

    return filteredSearchableChunks
  },
}


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
  const orderedApiPages = files.map((file) => {
    return apiPages.find(({ fields: { file: apiFile } }) => apiFile === file)
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
