import styled, { css } from 'styled-components'
import { mediaQuery } from '../../utils/breakpoint'

function columnToWidth(columns = 12) {
  if (columns === 'auto') {
    return columns
  } else {
    return `${100 / 12 * (columns > 12 ? 12 : columns < 1 ? 1 : columns)}%`
  }
}

function flexWidth(width) {
  if (width === 'auto') {
    return `flex-grow: 0; flex-shrink: 1; flex-basis: auto;`
  } else {
    return `flex-basis: ${width}; max-width: ${width};`
  }
}

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
  ${xs && mediaQuery('xs', flexWidth(columnToWidth(xs)))} ${sm &&
      mediaQuery('sm', flexWidth(columnToWidth(sm)))} ${md &&
      mediaQuery('md', flexWidth(columnToWidth(md)))} ${lg &&
      mediaQuery('lg', flexWidth(columnToWidth(lg)))} ${xl &&
      mediaQuery('xl', flexWidth(columnToWidth(xl)))} ${xsOffset &&
      mediaQuery(
        'xs',
        `margin-left: ${columnToWidth(xsOffset)};`
      )} ${smOffset &&
      mediaQuery(
        'sm',
        `margin-left: ${columnToWidth(smOffset)};`
      )} ${mdOffset &&
      mediaQuery(
        'md',
        `margin-left: ${columnToWidth(mdOffset)};`
      )} ${lgOffset &&
      mediaQuery(
        'lg',
        `margin-left: ${columnToWidth(lgOffset)};`
      )} ${xlOffset &&
      mediaQuery('xl', `margin-left: ${columnToWidth(xlOffset)};`)};
`

export default styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-grow: 1;
  flex-basis: 0;
  padding-left: 1rem;
  text-align: left;

  ${width};
`
