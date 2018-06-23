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
  width: 100%;
  font-weight: ${weight('medium')};

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    display: block;
    font-weight: inherit;
  }


  ${mediaQuery('md', css`
    li {
      margin: 0;
      display: inline-block;
    }

    ${props => props.secondary && css`
      text-align: right;
      flex-grow: 1;
      font-weight: ${weight('light')};
    `}
  `)}
`
