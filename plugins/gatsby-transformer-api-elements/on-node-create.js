const crypto = require('crypto')

/**
 * Create ApiElement nodes from files with the extention apib
 */
module.exports = async function ({ node, boundActionCreators, loadNodeContent }) {
  const { createNode, createParentChildLink } = boundActionCreators

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

  createNode(apiElementNode)
  createParentChildLink({ parent: node, child: apiElementNode })
} 