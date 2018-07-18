/**
 * Create MessageEvent, WebhookCategory, and WebhookEvent nodes
 */

const crypto = require('crypto')
const axios = require('axios')
const { GraphQLJSON } = require('gatsby/graphql')
const map = require('lodash.map')
const keyBy = require('lodash.keyby')

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

  // Create webhook event nodes
  const { data: { results: webhookDocumentation } } = await axios.get('https://api.sparkpost.com/api/v1/webhooks/events/documentation')
  const { data: { results: webhookSamples } } = await axios.get('https://api.sparkpost.com/api/v1/webhooks/events/samples')

  const webhookSamplesMap = keyBy(webhookSamples, (sample) => {
    const category = Object.keys(sample.msys)[0]

    return sample.msys[category].type
  })

  const processWebhookCategory = (category) => {
    const nodeId = createNodeId(`sparkpost-webhook-category-${category.name}`)
    const nodeContent = JSON.stringify(category)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    return Object.assign({}, category, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `WebhookCategory`,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    })
  }

  const processWebhookEvent = (event) => {
    const attributes = event.event
    const name = attributes.type.sampleValue
    const sample = webhookSamplesMap[name]
    const nodeId = createNodeId(`sparkpost-webhook-event-${name}`)
    const nodeObject = {
      name, attributes, sample, description: event.description, display_name: event.display_name
    }
    const nodeContent = JSON.stringify(nodeObject)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    return {
      id: nodeId,
      parent: null,
      children: [],
      name: nodeObject.name,
      description: nodeObject.description,
      display_name: nodeObject.display_name,
      internal: {
        type: `WebhookEvent`,
        content: nodeContent,
        contentDigest: nodeContentDigest
      }
    }
  }

  map(webhookDocumentation, (category, name) => {
    const categoryNode = processWebhookCategory({
      name,
      description: category.description,
      display_name: category.display_name
    })

    createNode(categoryNode)

    map(category.events, (event) => {
      const eventNode = processWebhookEvent(event)
      eventNode.parent = categoryNode.id
      eventNode.category = categoryNode.name

      createNode(eventNode)
      createParentChildLink({ parent: categoryNode, child: eventNode })
    })
  })
}

exports.setFieldsOnGraphQLNodeType = async ({ type }) => {
  if (type.name !== `MessageEvent` && type.name !== `WebhookEvent`) {
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
