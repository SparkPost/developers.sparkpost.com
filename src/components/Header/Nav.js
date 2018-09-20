import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { weight } from 'utils/fonts'

// prettier-ignore
export default styled(({ children, secondary, ...props }) => (
  <nav {...props}>
    <ul>{children}</ul>
  </nav>
))`
  display: block;

  > ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-weight: ${weight('medium')};
  }

  ${mediaQuery('md', css`
    > ul {
      display: flex;
      align-items: center;
      ${props => props.secondary && css` font-weight: ${weight('normal')};`}
    }
  `)}
`
