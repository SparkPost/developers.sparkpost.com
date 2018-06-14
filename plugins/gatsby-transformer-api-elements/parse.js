const fury = require('fury')
const apibParser = require('fury-adapter-apib-parser')

fury.use(apibParser)


/**
 * parse a API blueprint string into the minim object
 */
module.exports = function parse(source) {
  return new Promise((resolve, reject) => {
    fury.parse({ source }, (err, result) => {
      err ? reject(err) : resolve(result)
    })
  }) 
}