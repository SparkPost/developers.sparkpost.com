/**
 * es5 export so `gatsby-transformer-api-blueprint` plugin can use it
 */
const slugify = require('../slugify')

module.exports = {
  markdown({ heading }) {
    return `header-${slugify(heading)}`
  },
  resourceGroup({ resourceGroup }) {
    return slugify(resourceGroup.title.toValue())
  },
  resource({ resourceGroup, resource }) {
    return slugify(
      `${resourceGroup.title.toValue()}-${resource.title.toValue()}`
    )
  },
  transition({ resourceGroup, resource, transition }) {
    const method = transition.method ? transition.method.toValue() : 'get'

    return slugify(
      `${resourceGroup.title.toValue()}-${method}-${transition.title.toValue()}`
    )
  },
}
