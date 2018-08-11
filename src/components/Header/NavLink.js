import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale, color } from 'utils/colors'
import Link from 'components/Link'

// prettier-ignore
const NavLink = styled(({ active, className, ...props }) => (
  <li className={className}><Link.Unstyled {...props} /></li>
))`
  display: block;
  font-weight: inherit;

  a {
    display: inherit;
    font-weight: inherit;
    padding: .5rem 1rem;
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
  }

  ${mediaQuery('md', css`
    display: inline-block;

    a {
      padding: 1rem 0.75rem;
      ${props => props.active && css`
        border-top-color: ${color('orange')};
        color: ${grayscale('medium')};
      `}
    }
  `)}
`

export default NavLink
