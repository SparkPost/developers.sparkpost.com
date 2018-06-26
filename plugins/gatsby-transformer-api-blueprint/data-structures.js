const crypto = require('crypto')
const visit = require('unist-util-visit')
const modify = require('unist-util-modify-children')
const removePosition = require('unist-util-remove-position')
const flatten = require('lodash.flatten')
const unified = require('unified')
const remarkParse = require('remark-parse')

const parseProcessor = unified().use(remarkParse)
const parseMarkdown = parseProcessor.parse
function stringify(node) {
  if (node.value) return node.value

  return node.children.map(stringify).join('\n')
}

/**
 * get all data structures from code blocks with the language "attributes"
 */
function gatherDataStructures(tree) {
  let dataStructures = []
  visit(tree, 'list', (node) => {
    if (isDataStructure(node)) {
      dataStructures.push(parseDataStructure(node))
    }
  })

  return dataStructures
}


/**
 * replace all data structures with html data-structure tags
 */

function replaceDataStructures(tree, dataStructures) {
  if (!dataStructures || dataStructures && dataStructures.length === 0)
    return tree

  modify(function(node, index, parent) {
    const matchedDataStructure = dataStructures.find(dataStructure => dataStructure.node === node)

    if (matchedDataStructure) {
      parent.children.splice(index, 1, generateHtmlReplacement(matchedDataStructure))
    }
  })(tree)

  return tree
}

/**
 * inserts data structures into api blueprint structure content
 */
function insertDataStructures(tree, dataStructures) {
  if (!dataStructures || dataStructures && dataStructures.length === 0)
    return tree

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


const dataStructurePattern = /^\s*Data Structure(?::\s?([\w-]+))?\s*$/i
/** checks if a node is a data structure */
function isDataStructure(node) {
  // we have a list...
  if(node.type !== 'list')
    return false

  // with 1 or 2 items...
  if (node.children.length < 1 || node.children.length > 2)
    return false

  const listItem = node.children[0]

  // that has some text and a list...
  if (listItem.children.length !== 2)
    return false

  const paragraph = listItem.children[0]
  const text = paragraph.children[0]

  // that matches our data structure heading
  return text.type === 'text' && dataStructurePattern.test(text.value)
}

/**
 * pull out the data from the data structure block: id, sample, and children
 */
function parseDataStructure(node) {
  const listItem = node.children[0]
  const paragraph = listItem.children[0]
  const text = paragraph.children[0]
  const list = listItem.children[1]
  const [ all, id ] = text.value.match(dataStructurePattern)
  const secondListItemText = node.children.length > 1 && stringify({
    type: 'root',
    children: node.children[1].children
  })

  const hasSample = !!secondListItemText && /^Sample\s+/i.test(secondListItemText)
  const sample = hasSample && escape(secondListItemText.replace(/^Sample\s+/i, '').trim())

  return {
    id: id || crypto.createHash(`md5`).update(JSON.stringify(node)).digest(`hex`),
    sample,
    children: [ removePosition(list) ],
    node
  }
}

/**
 * generate the node for the data-structure tag
 */
function generateHtmlReplacement({ id, sample }) {
  return Object.assign({}, {
    type: "paragraph",
    children: [
      { type: "html", value: `<data-structure id="${id}"${sample ? ` sample="${sample}"` : ''}>` },
      { type: "html", value: "</data-structure>" }
    ]
  })
}

module.exports = { gatherDataStructures, replaceDataStructures, insertDataStructures }
