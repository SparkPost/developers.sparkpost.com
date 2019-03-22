const { flatten, repeat, last, first } = require('lodash')
const slugify = require('../src/utils/api/slugify')

module.exports = {
  indexName: `momentum`,
  query: `{
    allMdx(filter: {fileAbsolutePath: {regex: "/momentum/"}}) {
      edges {
        node {
          fields {
            path
          }
          headings {
            value
            depth
          }
          rawBody
        }
      }
    }
  }`,
  transformer(results) {
    return flatten(results.data.allMdx.edges.map(({ node: { fields: { path }, headings, rawBody } }) => {
      const chunks = headings.map(({ value, depth}) => {
        const pattern = new RegExp(`(?:\\n|^)${repeat('#', depth)} ?${escapeRegExp(value)}\\n`)
        // grab content from this header to the next
        const description = first(last(rawBody.split(pattern)).split(/\n#/)).trim()

        return {
          sectionName: value,
          description,
          momentum: true,
          objectID: `${path}#${slugify.markdown({ heading: value })}`
        }
      })

      return chunks
    }))
  },
}

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
