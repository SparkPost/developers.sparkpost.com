"use strict";

const { resolve } = require("path");
const { flatten } = require("lodash");
const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
const apiTemplate = resolve(__dirname, `../src/templates/api.js`);
const docsTemplate = resolve(__dirname, `../src/templates/docs.js`);

const files = flatten(
  require(`../content/api/table-of-contents.json`).map(({ pages }) => pages)
);

module.exports = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions;

  /**
   * create the API reference pages
   */
  const {
    data: {
      allApiBlueprint: { edges: blueprintEdges }
    }
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
  `);

  blueprintEdges.forEach(({ node: { fields: { path, file } } }) => {
    if (files.includes(file)) {
      // redirect /{api}.html paths to /{api}/
      createRedirect({
        fromPath: `/api/${file.replace(/\.apib$/, ".html")}`,
        toPath: path
      });

      createPage({
        path,
        component: apiTemplate,
        context: { file }
      });
    }
  });

  /**
   * create the docs pages
   */
  const {
    data: {
      allMdx: { edges: mdxEdges }
    }
  } = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            code {
              scope
            }
            parent {
              ... on File {
                relativePath
              }
            }
          }
        }
      }
    }
  `);

  mdxEdges.forEach(
    ({
      node: {
        id,
        code: { scope },
        parent: { relativePath }
      }
    }) => {
      createPage({
        path: relativePath.split(".")[0].replace(/\/index$/, ""),
        component: componentWithMDXScope(docsTemplate, scope),
        context: { id }
      });
    }
  );
};
