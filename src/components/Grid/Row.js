import styled, { css } from 'styled-components'

import { mediaQuery } from 'utils/breakpoint'

const horizontalAlignment = ({ start, center, end }) => css`
  ${start &&
    mediaQuery(
      start,
      `justify-content: flex-start; text-align: start;`
    )} ${center &&
  mediaQuery(center, `justify-content: center; text-align: center;`)} ${end &&
  mediaQuery(end, `justify-content: flex-end; text-align: end;`)};
`

const vericalAlignment = ({ top, middle, bottom }) => css`
  ${top && mediaQuery(top, `align-items: flex-start;`)} ${middle &&
  mediaQuery(middle, `align-items: center;`)} ${bottom &&
  mediaQuery(bottom, `align-items: flex-end;`)};
`

const distribution = ({ around, between }) => css`
  ${around && mediaQuery(around, `justify-content: space-around;`)} ${between &&
    mediaQuery(between, `justify-content: space-between;`)};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: -1rem;

  ${horizontalAlignment} ${vericalAlignment} ${distribution};
`

export default Row
