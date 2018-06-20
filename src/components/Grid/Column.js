import styled, { css } from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { isUndefined } from 'lodash'

function columnToWidth(columns = 12) {
  if (columns === 'auto') {
    return columns
  } else {
    return `${100 / 12 * (columns > 12 ? 12 : columns < 0 ? 0 : columns)}%`
  }
}

function flexWidth(width) {
  if (width === 'auto') {
    return `flex-grow: 0; flex-shrink: 1; flex-basis: auto;`
  } else {
    return `flex-basis: ${width}; max-width: ${width};`
  }
}

// prettier-ignore
const width = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  xlOffset,
}) => css`
  ${!isUndefined(xs) && mediaQuery('xs', flexWidth(columnToWidth(xs)))}
  ${!isUndefined(sm) && mediaQuery('sm', flexWidth(columnToWidth(sm)))}
  ${!isUndefined(md) && mediaQuery('md', flexWidth(columnToWidth(md)))}
  ${!isUndefined(lg) && mediaQuery('lg', flexWidth(columnToWidth(lg)))}
  ${!isUndefined(xl) && mediaQuery('xl', flexWidth(columnToWidth(xl)))}
  ${!isUndefined(xsOffset) && mediaQuery('xs', `margin-left: ${columnToWidth(xsOffset)};`)}
  ${!isUndefined(smOffset) && mediaQuery('sm', `margin-left: ${columnToWidth(smOffset)};`)}
  ${!isUndefined(mdOffset) && mediaQuery('md', `margin-left: ${columnToWidth(mdOffset)};`)}
  ${!isUndefined(lgOffset) && mediaQuery('lg', `margin-left: ${columnToWidth(lgOffset)};`)}
  ${!isUndefined(xlOffset) && mediaQuery('xl', `margin-left: ${columnToWidth(xlOffset)};`)}
`

export default styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;
  text-align: left;
  padding-left: 1rem;

  ${width};
`
