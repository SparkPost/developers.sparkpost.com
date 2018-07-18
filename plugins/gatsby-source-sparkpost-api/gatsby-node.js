/**
 * Create MessageEvent nodes
 */

const crypto = require('crypto')
const axios = require('axios')
const { GraphQLJSON } = require('gatsby/graphql')
const map = require('lodash.map')
const keyBy = require('lodash.keyBy')

exports.sourceNodes = async ({ actions, createNodeId }) => {
  const { createNode, createParentChildLink } = actions

  // Create message event nodes
  const { data: { results: messageEventsDocumentation } } = await axios.get('https://api.sparkpost.com/api/v1/message-events/events/documentation')
  const { data: { results: messageEventsSamples } } = await axios.get('https://api.sparkpost.com/api/v1/message-events/events/samples')

  messageEventsDocumentation.forEach((attributes, i) => {
    const name = attributes.type.sampleValue
    const sample = messageEventsSamples[i]
    const nodeId = createNodeId(`sparkpost-message-event-${name}`)
    const nodeObject = { name, attributes, sample }
    const nodeContent = JSON.stringify(nodeObject)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = {
      id: nodeId,
      parent: null,
      children: [],
      name: nodeObject.name,
      internal: {
        type: `MessageEvent`,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    }

    createNode(nodeData)
  })
}

exports.setFieldsOnGraphQLNodeType = async ({ type }) => {
  if (type.name !== `MessageEvent`) {
    return {}
  }

  return {
    attributes: {
      type: GraphQLJSON,
      resolve(node) {
        const object = JSON.parse(node.internal.content)

        return object.attributes
      }
    },
    sample: {
      type: GraphQLJSON,
      resolve(node) {
        const object = JSON.parse(node.internal.content)

        return object.sample
      }
    }
  }
}
