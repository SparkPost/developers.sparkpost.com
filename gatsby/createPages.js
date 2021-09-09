/**
 * create the API reference and momentum docs
 */

'use strict'

const { resolve } = require('path')
const { flatten } = require('lodash')
const apiTemplate = resolve(__dirname, `../src/templates/api.js`)
const apiTableOfContents = flatten(
  require(`../content/api/table-of-contents.json`).map(({ pages }) => pages)
)

module.exports = async data => {
  await createApiReference(data)
  await createMomentumDocs(data)
}

async function createApiReference({ actions, graphql }) {
  const { createPage, createRedirect } = actions

  const {
    data: {
      allApiBlueprint: { edges },
    },
  } = await graphql(`
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
    if (apiTableOfContents.includes(file)) {
      // redirect /{api}.html paths to /{api}/
      createRedirect({
        fromPath: `/api/${file.replace(/\.apib$/, '.html')}`,
        toPath: path,
      })

      createPage({
        path,
        component: apiTemplate,
        context: { file },
      })
    }
  })
}
