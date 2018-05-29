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

// Add Babel plugin
let babelPluginExists = false
try {
  require.resolve(`babel-plugin-styled-components`)
  babelPluginExists = true
} catch (e) {
  // Ignore
}

exports.modifyBabelrc = ({ babelrc, stage }) => {

  if (babelPluginExists) {
    if (stage === 'develop') {
      return {
        ...babelrc,
        plugins: babelrc.plugins.concat([
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              minify: false
            },
          ],
        ]),
      }
    }
  }

  return babelrc
}