const crypto = require('crypto')
const visit = require('unist-util-visit')
const modify = require('unist-util-modify-children')
const removePosition = require('unist-util-remove-position')
const flatten = require('lodash.flatten')
const unified = require('unified')
const remarkParse = require('remark-parse')

const parseProcessor = unified().use(remarkParse)
const parseMarkdown = parseProcessor.parse

/**
 * inserts html parameter tags before all lists that start with Parameters
 */
function insertParametersTag(tree) {
  modify((node, index, parent) => {
    if (isParametersList(node)) {
      parent.children.splice(index, 0, {
        "type": "paragraph",
        "children": [
          { "type": "html", "value": "<parameters>" },
          { "type": "html", "value": "</parameters>" }
        ]
      })
    }

    // skip this node so we don't get stuck in an infinite loop
    return index + 2
  })(tree)

  return tree
}

/**
 * inserts html parameter tags before all lists that start with Parameters
 */
function moveParametersList(tree) {
  modify((node, nodeIndex, parent) => {

    if (isParametersList(node)) {
      // remove Parameters list
      parent.children.splice(nodeIndex, 1)


      // find next Request list
      const requestIndex = parent.children.findIndex((node, index) => {
        if (node.type !== 'list') {
          return false
        }

        if (index < nodeIndex) {
          return false
        }

        const text = node.children[0].children[0].children[0].value

        return text && text.startsWith('Request')
      })

      // insert parameters list right before the request
      parent.children.splice(requestIndex, 0, node)
    }

    // skip this node so we don't get stuck in an infinite loop
    // return nodeIndex+1
  })(tree)

  return tree
}

const parametersPattern = /^\s*Parameters\s*/i
/** checks if a node is a parameters list */
function isParametersList(node) {
  // we have a list...
  if(node.type !== 'list')
    return false

  // with 1 item
  if (node.children.length !== 1)
    return false

  const listItem = node.children[0]

  const paragraph = listItem.children[0]
  const text = paragraph.children[0]

  // that matches our data structure heading
  return text.type === 'text' && parametersPattern.test(text.value)
}


module.exports = { insertParametersTag, moveParametersList }
