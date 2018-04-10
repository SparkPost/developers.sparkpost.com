/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios')

exports.onCreateNode = async ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `wordpress__POST` && node._links.wp_featuredmedia) {
    try {
      const media = await axios.get(`${node._links.wp_featuredmedia[0].href}?_embed`)

      createNodeField({
        node,
        name: `media`,
        value: media.data.guid.rendered,
      })
    }
    catch(e) {
    }
  }
}

