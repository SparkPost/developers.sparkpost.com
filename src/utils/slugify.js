/**
 * pulled from aglo/olio
 *
 * es5 export so `gatsby-transformer-api-elements` plugin can use it
 */
module.exports = function slugify(value) {
  return value.toLowerCase().replace(/[ \t\n\\<>"'=:\/]/g, '-').replace(/-+/g, '-').replace(/^-/, '');
}