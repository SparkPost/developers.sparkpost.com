import styled, { css } from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { weight } from 'utils/fonts'

// prettier-ignore
export default styled.h4`
  font-size: 0.95rem;
  font-weight: ${weight('medium')};
  margin: 0;

  ${props => props.top && css`
    margin-top: 2rem;

    ${mediaQuery('md',`
      margin-top: 0;
    `)}
  `}
`
