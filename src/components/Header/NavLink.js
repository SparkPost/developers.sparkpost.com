import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale, color } from 'utils/colors'
import Link from 'components/Link'

// prettier-ignore
const NavLink = styled(({ active, ...props }) => (
  <li><Link.Unstyled {...props} /></li>
))`
  padding: .5rem 1rem;
  font-weight: inherit;
  display: block;
  color: ${grayscale(4)};
  text-decoration: none;
  border-top: 3px solid transparent;
  transition-property: color, border;
  ${props => props.active && css`
    color: ${color('orange')};
  `}

  &:hover {
    color: ${grayscale('medium')};
  }

  ${mediaQuery('md', css`
    padding: 1rem 0.75rem;
    display: inline-block;

    ${props => props.active && css`
      border-top-color: ${color('orange')};
      color: ${grayscale('medium')};
    `}
  `)}
`

export default NavLink
