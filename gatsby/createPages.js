/**
 * create the API reference pages
 */

'use strict'

const { resolve } = require('path')
const { flatten } = require('lodash')
const apiTemplate = resolve(__dirname, `../src/templates/api.js`)
const files = flatten(require(`../content/api/table-of-contents.json`).map(({ pages }) => pages))

module.exports = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  const { data: { allApiBlueprint: { edges } } } = await graphql(`
    {
      allApiBlueprint {
        edges {
          node {
            fields {
              path
              file
            }
          }
        }
      }
    }
  `)

  edges.forEach(({ node: { fields: { path, file } } }) => {
    if (files.includes(file)) {
      // redirect /{api}.html paths to /{api}/
      createRedirect({
        fromPath: `/api/${file.replace(/\.apib$/, '.html')}`,
        toPath: path
      })

      createPage({
        path,
        component: apiTemplate,
        context: { file },
      })
    }
  })
}
