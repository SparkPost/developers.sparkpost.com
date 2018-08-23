'use strict'

const axios = require('axios')
const slugify = require('slugify')
const { resolve } = require('path')
const tableOfContents = require(`../content/api/table-of-contents.json`)

module.exports = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  /**
   * Add the image links to wordpress posts since it takes way too much time to download them all
   */
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

  /**
   * Add the path and file to ApiBlueprint nodes
   */
  if (node.internal.type === 'ApiBlueprint') {
    const { name: fileName, base: file } = getNode(node.parent)

    // add path
    createNodeField({
      node,
      name: `path`,
      value: `/api/${fileName === 'index' ? '' : `${fileName}/`}`
    })

    // add file
    createNodeField({
      node,
      name: `file`,
      value: file
    })
  }

  /**
   * Add the path to the changelog nodes
   */
  if (node.internal.type === 'MarkdownRemark' && node.fileAbsolutePath.includes('changelog/')) {
    const slug = slugify(node.frontmatter.title)

    // add path
    createNodeField({
      node,
      name: `path`,
      value: `/changelog/${slug}/`
    })
  }
}
