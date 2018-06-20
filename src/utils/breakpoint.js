import { css } from 'styled-components'

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

function mediaQuery(size, styles) {
  if (size === 'xs') {
    return styles
  } else {
    return css`
      @media only screen and (min-width: ${breakpoint(size)}) {
        ${styles};
      }
    `
  }
}

export default breakpoint

export { mediaQuery }
