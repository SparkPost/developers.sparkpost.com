const GraphQLJSON = require('graphql-type-json')
const minim = require('minim').namespace()
const fury = require('fury')
const apibParser = require('fury-adapter-apib-parser')

fury.use(apibParser)

/** 
 * Add the `ast` JSON property to all ApiElement nodes
 */
module.exports = async ({ type }) => {
  if (type.name !== `ApiElement`) {
    return {}
  }

  return {
    ast: {
      type: GraphQLJSON,
      async resolve(node) {
        const ast = await parse(node.internal.content)

        return minim.toRefract(ast)
      }
    },
    TableOfContents: {
      type: GraphQLJSON,
      resolve(node) {
        return minim.toRefract(ast)
      }
    }
  } 
}


/**
 * parse a API blueprint string into the minim object
 */
function parse(source) {
  return new Promise((resolve, reject) => {
    fury.parse({ source }, (err, result) => {
      err ? reject(err) : resolve(result)
    })
  }) 
}