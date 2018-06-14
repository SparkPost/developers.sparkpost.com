const axios = require('axios')
const fs = require('fs')
const { flatten } = require('lodash')

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

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const apiDirectory = `${__dirname}/src/data/api`
  const apiTemplate = `${__dirname}/src/templates/api.js`
  const apiPages = flatten(require(`${apiDirectory}/table-of-contents.json`).map(({ pages }) => pages))

  apiPages.forEach(({ file, path }) => {
    if (fs.existsSync(`${apiDirectory}/${file}`)) {
      createPage({
        path,
        component: apiTemplate,
        context: { file },
      })
    }
  })
}

// Add Babel for styled components for easier debugging
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