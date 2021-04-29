/**
 * When developing the docs, redirect the home page to the api introduction page
 */

'use strict'

module.exports = ({ actions }) => {
  if (process.env.GATSBY_ACTIVE_ENV === 'docs') {
    const { createRedirect } = actions

    createRedirect({ fromPath: '/', toPath: '/api/', redirectInBrowser: true })
  }
}
