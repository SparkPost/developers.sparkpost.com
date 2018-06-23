const fury = require('fury')
const apibParser = require('fury-adapter-apib-parser')

fury.use(apibParser)


/**
 * parse a API blueprint string into the minim object
 */
module.exports = function parseApiBlueprint(originalSource) {
  // replace tabs with 4 spaces to keep api blueprint happy
  const source = originalSource.replace(/\t/g, '    ')
  return new Promise((resolve, reject) => {
    fury.parse({ source }, (err, result) => {
      err ? reject(err) : resolve(result)
    })
  })
}
