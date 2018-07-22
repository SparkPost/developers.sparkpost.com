const fs = require('fs')
const path = require('path')
const crypto = require('crypto')
const { TextLintEngine } = require('textlint')
const { GraphQLJSON } = require('gatsby/graphql')

const basePath = `${__dirname}/../..`
const defaultConfigFile = `.textlintrc`
const defaultPluginPath = `node_modules`

exports.onCreateNode = async function (
  { node, actions, loadNodeContent, },
  { configFile, pluginPath }) {
  const { createNode, createParentChildLink } = actions

  configFile = path.resolve(basePath, configFile || defaultConfigFile)
  pluginPath = path.resolve(basePath, pluginPath || defaultPluginPath)

  const textlint = new TextLintEngine({
    configFile,
    rulesBaseDirectory: pluginPath
  })

  if (!(node.internal.type === 'File' && textlint.availableExtensions.includes(node.ext))) {
    return
  }

  const content = await loadNodeContent(node)

  const results = await textlint.executeOnFiles([ node.absolutePath ])

  const contentDigest = crypto
      .createHash(`md5`)
      .update(content)
      .digest(`hex`)

  const textLintNode = {
    id: `${node.id} >>> TextLint`,
    children: [],
    parent: node.id,
    rawResults: JSON.stringify(results[0]),
    internal: { content, contentDigest, type: `TextLint` },
  }

  createNode(textLintNode)
  createParentChildLink({ parent: node, child: textLintNode })
}


exports.setFieldsOnGraphQLNodeType = async ({ type }) => {
  if (type.name !== `TextLint`) {
    return {}
  }

  return {
    messages: {
      type: GraphQLJSON,
      async resolve(node) {
        const results = JSON.parse(node.rawResults)

        return results.messages
      }
    },
    filePath: {
      type: GraphQLJSON,
      resolve(node) {
        const results = JSON.parse(node.rawResults)

        return results.filePath
      }
    }
  }
}
