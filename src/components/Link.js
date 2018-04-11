import React from 'react'
import GatsbyLink from 'gatsby-link'
import isAbsoluteUrl from 'is-absolute-url'
import styled from 'styled-components'

function Link ({ to = null, onClick, ...props }) {
  return (to && isAbsoluteUrl(to)) || onClick ? (
    <a href={to} onClick={onClick} {...props} />
  ) : (
    <GatsbyLink to={to} {...props} />
  )
}


Link.Unstyled = styled(Link)`
  color: inherit;
  font-weight: inherit;

  &:hover {
    text-decoration: none;
  }
`



export default Link