const visit = require('unist-util-visit')
const map = require('unist-util-map')
const removePosition = require('unist-util-remove-position')
const flatten = require('lodash.flatten')
const unified = require('unified')
const remarkParse = require('remark-parse')
const parseProcessor = unified().use(remarkParse)
const parseMarkdown = parseProcessor.parse

/**
 * get all data structures from code blocks with the language "attributes"
 */
function gatherDataStructures(tree) {
  let dataStructures = []

  visit(tree, 'code', (node) => {
    if (isDataStructure(node)) {
      dataStructures.push(parseDataStructure(node))
    }
  })

  return dataStructures
}


/**
 * replace all data structures with html data-structure tags
 */

function replaceDataStructures(tree) {
  return map(tree, function(node) {
    if (isDataStructure(node)) {
      return generateHtmlReplacement(node)
    }
    return node
  })
}

/**
 * generate the node for the data-structure tag
 */
function generateHtmlReplacement(node) {
  const { id, sample } = parseDataStructure(node)

  return Object.assign({}, node, {
    type: "paragraph",
    children: [
      {
        type: "html",
        value: `<data-structure id="${id}" ${sample ? 'sample' : ''}>`,
      },
      {
        type: "html",
        value: "</data-structure>",
      }
    ]
  })
}


/**
 * inserts data structures into api blueprint structure content
 */
function insertDataStructures(tree, dataStructures) {
  const headingMarkdown = {
    "type": "heading",
    "depth": 1,
    "children": [ { "type": "text", "value": "Data Structures" } ],
  }

  const dataStructureAST = flatten(dataStructures.map(({ id, children }) => {
      return [
        {
          "type": "heading",
          "depth": 2,
          "children": [ { "type": "text", "value": id } ],
        },
        ...children
      ]
    }))

  tree.children = [ ...tree.children, headingMarkdown, ...dataStructureAST ]

  return tree
}


const dataStructurePattern = /\s*data-structure\(([^\s,]+),?(.+)?\)\s*/i
/** checks if a node is a data structure */
function isDataStructure(node) {
  return node.type === 'code' && node.lang && dataStructurePattern.test(node.lang)
}

/**
 * pull out the data from the data structure block: id, sample, and children
 */
function parseDataStructure(node) {
  const [ all, id, showSample ] = node.lang.match(dataStructurePattern)
  const { children } = parseMarkdown(node.value)
  const sample = showSample ? showSample.trim().toLowerCase() === 'sample' : false

  return {
    id,
    sample,
    children
  }
}

module.exports = { gatherDataStructures, replaceDataStructures, insertDataStructures }
