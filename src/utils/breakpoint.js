/**
 * Taken from the amazing SparkPost Matchbox
 *
 * https://github.com/SparkPost/matchbox/blob/master/src/styles/config/_breakpoints.scss
 */

const breakpoints = {
  xs: `450px`,
  sm: `720px`,
  md: `960px`,
  lg: `1200px`,
  xl: `1470px`,
}

function breakpoint(b = 'xs') {
  return breakpoints[b]
}

function mediaQuery(size, css) {
  if (size === 'xs') {
    return css
  } else {
    return `@media only screen and (min-width: ${breakpoint(size)}) { ${css} }`
  }
}

export default breakpoint

export { mediaQuery }
