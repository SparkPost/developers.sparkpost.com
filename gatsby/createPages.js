'use strict'

const { resolve } = require('path')
const { flatten } = require('lodash')
const apiTemplate = resolve(__dirname, `../src/templates/api.js`)
const changelogTemplate = resolve(__dirname, `../src/templates/changelog.js`)
const files = flatten(require(`../content/api/table-of-contents.json`).map(({ pages }) => pages))

module.exports = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  /**
   * create the API reference pages
   */
  const { data: { allApiBlueprint: { edges: apiNodes } } } = await graphql(`
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

  apiNodes.forEach(({ node: { fields: { path, file } } }) => {
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

  /**
   * create the changelog pages
   */
  const { data: { allMarkdownRemark: { edges: changelogNodes } } } = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/changelog/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            fields {
              path
            }
          }
        }
      }
    }
  `)

  changelogNodes.forEach(({ node: { id, fields: { path } } }) => {
    createPage({
      path,
      component: changelogTemplate,
      context: { id },
    })
  })
}
