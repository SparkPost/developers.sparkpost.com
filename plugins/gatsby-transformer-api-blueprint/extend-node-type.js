const { GraphQLJSON } = require('gatsby/graphql')
const { flatMapDeep, flatten } = require('lodash')
const fury = require('@apielements/core')
const parseApiBlueprint = require('./parse-api-blueprint')
const unified = require('unified')
const remarkParse = require('remark-parse')
const remarkStringify = require('remark-stringify')
const generateTOC = require('mdast-util-toc')
const slugify = require('../../src/utils/api/slugify')
const {
  gatherDataStructures,
  replaceDataStructures,
  insertDataStructures,
} = require('./data-structures')

const parseProcessor = unified().use(remarkParse)
const parseMarkdown = parseProcessor.parse
const stringifyProcessor = unified().use(remarkStringify, { fences: true })
const stringifyMarkdown = stringifyProcessor.stringify

function generateHeading({ title, slug = '', children }) {
  const header = { anchor: `#${slug}`, title }

  if (children && children.length > 0) {
    header.children = children
  }

  return header
}

function childrenToString(node) {
  return node.children.map(({ value }) => value).join('')
}

/**
 * Convert mdast node to our ToC structure
 */
function convertMdastTOC(node, current = {}) {
  if (!node) {
    return {}
  } else if (node.type === 'paragraph') {
    const heading = childrenToString(node.children[0])

    return {
      ...current,
      ...generateHeading({
        title: heading,
        slug: slugify.markdown({ heading }),
      }),
    }
  } else {
    if (node.type === 'list') {
      current.children = node.children.map(i => convertMdastTOC(i, {}))
      return current
    } else if (node.type === 'listItem') {
      const heading = convertMdastTOC(node.children[0], {})
      if (node.children.length > 1) {
        convertMdastTOC(node.children[1], heading)
      }
      return heading
    }
  }
  return {}
}

/**
 * remove empty steps in the ToC that happen when the headers skip a level
 */
function removeEmptySteps(toc) {
  return flatten(
    toc.map(heading => {
      if (heading.children && !heading.title) {
        return removeEmptySteps(heading.children)
      }

      if (heading.children) {
        return {
          ...heading,
          children: removeEmptySteps(heading.children),
        }
      }

      return heading
    })
  )
}

/**
 * Generate a table of content where the heading hierarchy is respected
 */
function generateLeveledMarkdownTableOfContents(markdown) {
  const tree = parseMarkdown(markdown.join(''))
  const toc = convertMdastTOC(generateTOC(tree).map).children || []

  return removeEmptySteps(toc)
}

/**
 * Flatten the markdon table of contents
 */
function generateMarkdownTableOfContents(markdown) {
  const toc = generateLeveledMarkdownTableOfContents(markdown)

  // flatten the leveled table of contents
  return flatMapDeep(toc, heading => {
    const { children = [], ...justHeading } = heading

    return [justHeading, ...children]
  })
}

async function generateTableOfContents(node) {
  const { api } = await parseApiBlueprint(node.internal.content)

  let toc = [
    ...generateLeveledMarkdownTableOfContents(api.copy.toValue()),
    ...api.resourceGroups.map(resourceGroup => {
      return generateHeading({
        title: resourceGroup.title.toValue(),
        slug: slugify.resourceGroup({ resourceGroup }),
        children: [
          ...generateMarkdownTableOfContents(resourceGroup.copy.toValue()),
          ...resourceGroup.resources.map(resource => {
            return generateHeading({
              title: resource.title.toValue(),
              slug: slugify.resource({ resourceGroup, resource }),
              children: [
                ...generateMarkdownTableOfContents(resource.copy.toValue()),
                ...resource.transitions.map(transition => {
                  return generateHeading({
                    title: transition.title.toValue(),
                    slug: slugify.transition({
                      resourceGroup,
                      resource,
                      transition,
                    }),
                    children: [
                      ...generateMarkdownTableOfContents(
                        transition.copy.toValue()
                      ),
                    ],
                  })
                }),
              ],
            })
          }),
        ],
      })
    }),
  ]

  return toc
}

/**
 * Add the `ast` JSON property to all ApiBlueprint nodes
 */
module.exports = async ({ type }) => {
  if (type.name !== `ApiBlueprint`) {
    return {}
  }

  return {
    ast: {
      type: GraphQLJSON,
      async resolve(node) {
        let tree = parseMarkdown(node.internal.content)
        const dataStructures = gatherDataStructures(tree)
        tree = replaceDataStructures(tree, dataStructures)
        tree = insertDataStructures(tree, dataStructures)
        const markdown = stringifyMarkdown(tree)
        const parseResult = await parseApiBlueprint(markdown)
        const warnings = parseResult.warnings.toValue()
        const errors = parseResult.errors.toValue()

        console.log('================== parseResult - BEGIN ==================')
        if (warnings.length === 0 && errors.length === 0) {
          console.log('title', parseResult.api.title.toValue())
        } else {
          console.log(node.meta.title)
          console.log('parseResult.warnings', warnings)
          console.log('parseResult.errors', errors)
        }
        console.log('================== parseResult - END ==================')

        return fury.minim.toRefract(parseResult)
      },
    },
    TableOfContents: {
      type: GraphQLJSON,
      resolve(node) {
        return generateTableOfContents(node)
      },
    },
  }
}
