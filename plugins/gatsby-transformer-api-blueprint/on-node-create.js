const crypto = require('crypto')
const parseApiBlueprint = require('./parse-api-blueprint')

const normalizeValue = value => {
  if (value === 'true') return true
  if (value === 'false') return false

  if (!isNaN(value)) return +value

  return value
}

/**
 * Create ApiBlueprint nodes from files with the extension apib
 */
module.exports = async function({ node, actions, loadNodeContent }) {
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
    const parseResult = await parseApiBlueprint(content)
    const attributes = parseResult.api.attributes.toValue()

    apiBlueprintNode.meta = attributes.metadata.reduce(
      (acc, { key, value }) => ({
        ...acc,
        [key]: normalizeValue(value),
      }),
      { full: false }
    )

    createNode(apiBlueprintNode)
    createParentChildLink({ parent: node, child: apiBlueprintNode })
  } catch (e) {
    throw new Error(`Blueprint parsing error: ${node.absolutePath}

${e}

${JSON.stringify(e.result, null, 2)}`)
  }
}
