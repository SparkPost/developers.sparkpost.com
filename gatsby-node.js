const axios = require('axios')
const fs = require('fs')
const { flatten } = require('lodash')

const apiDirectory = `${__dirname}/content/api`
const apiTemplate = `${__dirname}/src/templates/api.js`
// the table of contents as [ { title, file, path }, ... ]
const tableOfContents = flatten(require(`${apiDirectory}/table-of-contents.json`).map(({ pages }) => pages))

/**
 * Add the image links to wordpress posts
 */
exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `wordpress__POST`) {
    let mediaUrl = ''
    // try {
    //   if (node._links.wp_featuredmedia) {
    //     const media = await axios.get(`${node._links.wp_featuredmedia[0].href}`)

    //     mediaUrl = media.data.guid.rendered
    //   }
    // }
    // catch(e) {
    // }

    createNodeField({ node, name: `media`, value: mediaUrl })
  }
}

/**
 * create the API reference pages
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  tableOfContents.forEach(({ file, path }) => {
    if (fs.existsSync(`${apiDirectory}/${file}`)) {
      // redirect /{api}.html paths to /{api}/
      const oldPath = path === '/api/' ? `/api/index.html` : `${path.replace(/\/$/, '')}.html`
      createRedirect({ fromPath: oldPath, toPath: path })

      createPage({
        path,
        component: apiTemplate,
        context: { file },
      })
    }
  })
}


/**
 * Resolve files through webpack
 * `../../utils/colors` becomes `utils/colors`
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: { modules: [ `${__dirname}/src`, 'node_modules' ] }
  })
}


/**
 * when developing the docs redirect the home page to the api intro page
 */
exports.onPostBootstrap = ({ page, actions }) => {
  if (process.env.GATSBY_ACTIVE_ENV === 'docs') {
    const { createRedirect, deletePage } = actions

    createRedirect({ fromPath: '/', toPath: '/api/', redirectInBrowser: true })
  }
}
