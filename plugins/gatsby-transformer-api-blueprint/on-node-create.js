const crypto = require('crypto')
const { keyBy, mapValues } = require('lodash')
const parseApiBlueprint = require('./parse-api-blueprint')

/**
 * Create ApiBlueprint nodes from files with the extention apib
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

  const apiBlueprintNode = {
    id: `${node.id} >>> ApiBlueprint`,
    children: [],
    parent: node.id,
    internal: { content, contentDigest, type: `ApiBlueprint` },
  }

  try {
    const { api } = await parseApiBlueprint(content)

    apiBlueprintNode.meta = mapValues(keyBy(api.attributes.get('meta').toValue(), 'key'), ({ value }) => {
      if (value === 'true') return true
      if (value === 'false') return false

      if (!isNaN(value)) return +value

      return value
    })

    // full defaults to false
    apiBlueprintNode.meta.full = apiBlueprintNode.meta.full || false

    createNode(apiBlueprintNode)
    createParentChildLink({ parent: node, child: apiBlueprintNode })
  }
  catch(e) {
    throw new Error(`Blueprint parsing error: ${node.absolutePath}

${e}

${JSON.stringify(e.result, null, 2)}`)
  }
}
