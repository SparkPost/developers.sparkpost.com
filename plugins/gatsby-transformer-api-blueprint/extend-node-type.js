const GraphQLJSON = require('graphql-type-json')
const parseApiBlueprint = require('./parse-api-blueprint')
const minim = require('minim').namespace()
const unified = require('unified')
const remarkParse = require('remark-parse')
const remarkStringify = require('remark-stringify')
const slugify = require('../../src/utils/api/slugify')
const { gatherDataStructures, replaceDataStructures, insertDataStructures } = require('./data-structures')

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

function findHeadings(tree) {
  return tree.children.reduce((headings, node) => {
    return node.type === 'heading' ? [ ...headings, childrenToString(node) ] : headings
  }, [])
}

function generateMarkdownTableOfContents(markdown) {
  const tree = parseMarkdown(markdown.join(''))

  const headings = findHeadings(tree)

  return headings.map((heading) => generateHeading({
    title: heading,
    slug: slugify.markdown({ heading })
  }))
}

async function generateTableOfContents(node) {
  const { api } = await parseApiBlueprint(node.internal.content)

  let toc = [
    ...generateMarkdownTableOfContents(api.copy.toValue()),
    ...api.resourceGroups.map((resourceGroup) => {
      return generateHeading({
        title: resourceGroup.title.toValue(),
        slug: slugify.resourceGroup({ resourceGroup }),
        children: [
          ...generateMarkdownTableOfContents(resourceGroup.copy.toValue()),
          ...resourceGroup.resources.map((resource) => {
            return generateHeading({
              title: resource.title.toValue(),
              slug: slugify.resource({ resourceGroup, resource }),
              children: [
                ...generateMarkdownTableOfContents(resource.copy.toValue()),
                ...resource.transitions.map((transition) => {
                  return generateHeading({
                    title: transition.title.toValue(),
                    slug: slugify.transition({ resourceGroup, resource, transition }),
                    children: [ ...generateMarkdownTableOfContents(transition.copy.toValue()) ]
                  })
                })
              ]
            })
          })
        ]
      })
    })
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

        const ast = await parseApiBlueprint(markdown)

        return minim.toRefract(ast)
      }
    },
    TableOfContents: {
      type: GraphQLJSON,
      resolve(node) {
        return generateTableOfContents(node)
      }
    }
  }
}
