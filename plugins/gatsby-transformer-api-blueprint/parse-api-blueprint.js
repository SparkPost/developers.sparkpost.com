const fury = require('fury')
const apibParser = require('fury-adapter-apib-parser')

fury.use(apibParser)

/**
 * The API Blueprint parser matches action headings against a fixed list of
 * methods that lacks `QUERY`. It drops a heading it cannot match and merges
 * that action into the one above it. So a `QUERY` action is parsed as `MKCOL`,
 * which no page uses, and renamed afterwards. Both names have five letters, so
 * source maps stay aligned.
 */
const QUERY_STAND_IN = 'MKCOL'

/**
 * @typedef {object} ParseResult The minim parse result that fury returns.
 * @property {(name: string) => Array<{ method?: { toValue: () => string } | string }>} findRecursive
 */

/**
 * parse a API blueprint string into the minim object
 *
 * @public
 * @param {string} originalSource - API Blueprint source.
 * @returns {Promise<ParseResult>} Rejects when the parser fails.
 * @throws {Error} When a page uses the stand-in for `QUERY` as its own method.
 */
module.exports = function parseApiBlueprint(originalSource) {
  // replace tabs with 4 spaces to keep api blueprint happy
  const source = replaceQueryWithStandIn(originalSource.replace(/\t/g, '    '))
  return new Promise((resolve, reject) => {
    fury.parse({ source }, (err, result) => {
      err ? reject(err) : resolve(restoreQuery(result))
    })
  })
}

/**
 * Swap `QUERY` for its stand-in in every action heading, such as
 * `### Search Templates [QUERY /v1/templates]`.
 *
 * @private
 * @param {string} source - API Blueprint source.
 * @returns {string} The source with each `QUERY` action heading swapped.
 * @throws {Error} When a page uses the stand-in as its own method.
 */
function replaceQueryWithStandIn(source) {
  if (actionHeadingPattern(QUERY_STAND_IN).test(source)) {
    throw new Error(
      `${QUERY_STAND_IN} stands in for QUERY and cannot be an action method`
    )
  }
  return source.replace(actionHeadingPattern('QUERY'), `$1${QUERY_STAND_IN}`)
}

/**
 * Rename the stand-in back to `QUERY` on every request. A transition reads
 * its method from its first request, so this renames the action too.
 *
 * @private
 * @param {ParseResult} result - The minim parse result from fury.
 * @returns {ParseResult} The same parse result.
 */
function restoreQuery(result) {
  result.findRecursive('httpRequest').forEach(request => {
    if (request.method && request.method.toValue() === QUERY_STAND_IN) {
      request.method = 'QUERY'
    }
  })
  return result
}

/**
 * Build the pattern for an action heading that uses a method.
 *
 * @private
 * @param {string} method - An HTTP method name.
 * @returns {RegExp} Matches an action heading that uses the method, and
 * captures everything before the method.
 */
function actionHeadingPattern(method) {
  return new RegExp(`^(#{1,6} .*\\[)${method}(?= )`, 'gm')
}
