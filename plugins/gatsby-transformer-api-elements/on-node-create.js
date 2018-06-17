const crypto = require('crypto')
const { keyBy, mapValues } = require('lodash')
const parse = require('./parse')

/**
 * Create ApiElement nodes from files with the extention apib
 */
module.exports = async function ({ node, actions, loadNodeContent }) {
  const { createNode, createParentChildLink } = actions

  if (node.extension !== 'apib') {
    return
  }

  const content = await loadNodeContent(node)

  const contentDigest = crypto
      .createHash(`md5`)
      .update(content)
      .digest(`hex`)

  const apiElementNode = {
    id: `${node.id} >>> ApiElement`,
    children: [],
    parent: node.id,
    internal: { content, contentDigest, type: `ApiElement` },
  }

  const { api } = await parse(content)

  apiElementNode.meta = mapValues(keyBy(api.attributes.get('meta').toValue(), 'key'), ({ value }) => {
    if (value === 'true') return true
    if (value === 'false') return false

    if (!isNaN(value)) return +value

    return value
  })

  // full defaults to false
  apiElementNode.meta.full = apiElementNode.meta.full || false

  createNode(apiElementNode)
  createParentChildLink({ parent: node, child: apiElementNode })
}
