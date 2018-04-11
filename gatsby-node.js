/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const axios = require('axios')

exports.onCreateNode = async ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

  if (node.internal.type === `wordpress__POST`) {
    try {
      let mediaUrl = ''
      
      if (node._links.wp_featuredmedia) {
        const media = await axios.get(`${node._links.wp_featuredmedia[0].href}?_embed`)

        mediaUrl = media.data.guid.rendered
      }

      createNodeField({ node, name: `media`, value: mediaUrl })
    }
    catch(e) {
    }
  }
}

