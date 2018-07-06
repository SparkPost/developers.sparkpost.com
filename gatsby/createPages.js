/**
 * create the API reference pages
 */

'use strict'

const fs = require('fs')
const { flatten } = require('lodash')
const apiDirectory = `${__dirname}/../content/api`
const tableOfContents = flatten(require(`${apiDirectory}/table-of-contents.json`).map(({ pages }) => pages))

const buildOldPath = path => path === '/api/' ? `/api/index.html` : `${path.replace(/\/$/, '')}.html`

module.exports = async ({ actions }) => {
  const { createPage, createRedirect } = actions

  tableOfContents.forEach(({ file, path }) => {
    if (fs.existsSync(`${apiDirectory}/${file}`)) {

      // redirect /{api}.html paths to /{api}/
      createRedirect({ fromPath: buildOldPath(path), toPath: path })

      createPage({
        path,
        component: `${__dirname}/../src/templates/api.js`,
        context: { file },
      })
    }
  })
}

