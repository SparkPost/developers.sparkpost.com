const axios = require('axios')

exports.onCreateNode = async ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

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

