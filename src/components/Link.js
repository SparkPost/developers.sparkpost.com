import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import isAbsoluteUrl from 'is-absolute-url'
import styled from 'styled-components'

import { color, grayscale } from '../utils/colors'
import { weight } from '../utils/fonts'

function Link({ to = null, onClick, children, ...props }) {
  return (to && (isAbsoluteUrl(to) || to.startsWith('#'))) || onClick ? (
    <a href={to} onClick={onClick} {...props}>
      {children}
    </a>
  ) : (
    <GatsbyLink to={to} {...props}>
      {children}
    </GatsbyLink>
  )
}

Link.Unstyled = styled(Link)`
  color: inherit;
  font-weight: inherit;
  outline: 0;

  &:hover {
    text-decoration: none;
  }
`

Link.Action = styled(Link.Unstyled)`
  background: transparent;
  border: 0;
  font-size: 0.833333333rem;
  padding: 0.3rem 0.66667rem;
  color: ${color('orange')};
  font-weight: ${weight('medium')};
  cursor: pointer;
  outline: 0;
  display: inline-block;

  &:hover,
  &:active,
  &:focus {
    color: ${color('orangeDark')};
    background: ${grayscale('light')};
  }
`

export default Link
