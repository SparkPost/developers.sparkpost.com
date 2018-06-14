const GraphQLJSON = require('graphql-type-json')
const parse = require('./parse')
const minim = require('minim').namespace()
const unified = require('unified')
const remarkParse = require('remark-parse')
const toc = require('mdast-util-toc')
const slugify = require('../../src/utils/slugify')


function generateHeading(title, children) {
  const header = { anchor: `#${slugify(title)}`, title }

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
  const tree = unified()
    .use(remarkParse)
    .parse(markdown.join(''))

  const headings = findHeadings(tree)

  return headings.map((heading) => generateHeading(heading))
}

async function generateTableOfContents(node) {
  const { api } = await parse(node.internal.content)

  let toc = [
    ...generateMarkdownTableOfContents(api.copy.toValue()),
    ...api.resourceGroups.map((resourceGroup) => generateHeading(resourceGroup.title.toValue(), [
      ...generateMarkdownTableOfContents(resourceGroup.copy.toValue()),
      ...resourceGroup.resources.map((resource) => generateHeading(resource.title.toValue(), [
        ...generateMarkdownTableOfContents(resource.copy.toValue()),
        ...resource.transitions.map((transition) => generateHeading(transition.title.toValue(), [
          ...generateMarkdownTableOfContents(transition.copy.toValue())
        ]))
      ]))
    ]))
  ]

  return toc
}


/** 
 * Add the `ast` JSON property to all ApiElement nodes
 */
module.exports = async ({ type }) => {
  if (type.name !== `ApiElement`) {
    return {}
  }

  return {
    ast: {
      type: GraphQLJSON,
      async resolve(node) {
        const ast = await parse(node.internal.content)

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