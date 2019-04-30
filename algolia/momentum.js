const { compact, flatten, repeat, last, first } = require('lodash')
const slugify = require('../src/utils/api/slugify')

module.exports = {
  indexName: `momentum`,
  query: `{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/momentum\/web-momo4/"}}) {
      edges {
        node {
          fields {
            path
          }
          headings {
            value
            depth
          }
          rawMarkdownBody
        }
      }
    }
  }`,
  transformer({ data }) {
    const results = compact(flatten(data.allMarkdownRemark.edges.map(({ node }) => {
      const { fields: { path }, headings, rawMarkdownBody } = node
      if (headings.length === 0) return

      const mainHeading = findMainHeading(node)
      const category = findCategory(node)
      const weighting = getWeighting(category)

      const parts = explodeContent(rawMarkdownBody)

      return parts.map((part, index) => {
        return {
          sectionName: mainHeading,
          category: category,
          description: part,
          momentum: true,
          rank: weighting + index,
          objectID: `${path}`
        }
      })
    })))

    return results
  },
}

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

// grab the first heading and if it is just "Name" then try to find the actual function the document is talking about
function findMainHeading({ headings, rawMarkdownBody }) {
  const firstHeading = first(headings).value

  if (firstHeading !== 'Name') {
    return firstHeading
  }

  // get the first paragraph after until a dash which is where the definition starts and them function name ends
  return rawMarkdownBody.split('# Name')[1].split('—')[0].trim()
}


function findCategory({ rawMarkdownBody }) {
  const tableRegex = /^\|\s+\|\s+\|\s+\|\s*\n\| --- \| --- \| --- \|\n\|.*\|(.*)\|.*\|/
  const categoryMatch = rawMarkdownBody.match(tableRegex)

  return categoryMatch ? categoryMatch[1].trim() : 'Momentum'
}


function getWeighting(category) {
  // top level "part" page
  if (category === '') {
    return 10000
  }
  // category page
  else if (category.startsWith('Part. ')) {
    return 1000
  }
  // regular page
  else {
    return 100
  }
}


function explodeContent(rawMarkdownBody) {
  const algoliaMaxLength = 5000;

  const parts = []

  let content = rawMarkdownBody.trim()
  let prefix = ''
  while (true) {
    if (content.length <= algoliaMaxLength) {
      parts.push(content)
      break;
    }

    const offset = content.length - algoliaMaxLength
    parts.push(`${prefix}${content.substring(0, offset+1)}`)
    content = content.substring(offset)
    prefix = '… ';
  }

  return parts
}
