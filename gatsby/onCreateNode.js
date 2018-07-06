/**
 * Add the image links to wordpress posts since it takes way too much time to download them all
 */

'use strict'

const axios = require('axios')

module.exports = async ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `wordpress__POST`) {
    let mediaUrl = ''

    try {
      if (node._links.wp_featuredmedia) {
        const media = await axios.get(`${node._links.wp_featuredmedia[0].href}`)

        mediaUrl = media.data.guid.rendered
      }
    }
    catch(e) {
    }

    createNodeField({ node, name: `media`, value: mediaUrl })
  }
}
