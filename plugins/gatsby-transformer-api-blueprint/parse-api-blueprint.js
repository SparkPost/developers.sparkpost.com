const fury = require('@apielements/core')
const apibParser = require('@apielements/apib-parser')

fury.use(apibParser)

/**
 * parse a API blueprint string into the minim object
 */
module.exports = function parseApiBlueprint(originalSource) {
  // replace tabs with 4 spaces to keep api blueprint happy
  const source = originalSource.replace(/\t/g, '    ')
  return fury.parse({ source })
}
