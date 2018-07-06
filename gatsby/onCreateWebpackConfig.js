/**
 * Resolve files through webpack
 * `../../utils/colors` becomes `utils/colors`
 */

'use strict'

module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: { modules: [ `${__dirname}/../src`, 'node_modules' ] }
  })
}
