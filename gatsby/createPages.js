/**
 * create the API reference and momentum docs
 */

'use strict'

const { resolve } = require('path')
const { flatten } = require('lodash')
const apiTemplate = resolve(__dirname, `../src/templates/api.js`)
const momentumTemplate = resolve(__dirname, `../src/templates/momentum.js`)
const apiTableOfContents = flatten(require(`../content/api/table-of-contents.json`).map(({ pages }) => pages))

module.exports = async (data) => {
  await createApiReference(data)
  await createMomentumDocs(data)
}


async function createApiReference({ actions, graphql }) {
  const { createPage, createRedirect } = actions

  const { data: { allApiBlueprint: { edges } } } = await graphql(`
    {
      allApiBlueprint {
        edges {
          node {
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


async function createMomentumDocs({ actions, graphql }) {
  const { createPage, createRedirect } = actions

  const { data: { allMarkdownRemark: { edges } } }  = await graphql(`
    {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/momentum/"}}) {
        edges {
          node {
            id
            fields {
              path
              file {
                base
              }
            }
          }
        }
      }
    }
  `)

  edges.forEach(({ node: { id, fields: { path, file: { base } } } }) => {
    createRedirect({
      fromPath: `${path.replace(/\/$/, '.md')}`,
      toPath: path
    })

    if (base === 'index.md') {
      createRedirect({
        fromPath: `${path}index`,
        toPath: path
      })
      createRedirect({
        fromPath: `${path}index.md`,
        toPath: path
      })
    }

    createPage({
      path: path,
      component: momentumTemplate,
      context: { id }
    })
  })
}
