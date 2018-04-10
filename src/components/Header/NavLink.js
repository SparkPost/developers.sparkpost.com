import React from 'react'
import Link from '../Link'
import styled, { css } from 'styled-components'
import { grayscale, color } from '../../utils/colors'

const NavLink = styled(Link.Unstyled)`
  padding: 1.1rem .75rem;
  font-weight: 500;
  display: inline-block;
  color: ${grayscale(4)};
  text-decoration: none;
  border-top: 3px solid transparent;
  ${props => props.active && css`
    border-top-color: ${color('orange')};
    color: ${grayscale('medium')};
  `};

  &:hover {
    color: ${grayscale('medium')};
  }
`


export default NavLink