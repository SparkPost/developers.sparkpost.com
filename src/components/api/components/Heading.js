import React from 'react'
import styled from 'styled-components'
import { isString } from 'lodash'
import Link from 'components/Link'
import slugify from 'utils/slugify'

const Id = styled.span`
  display: block; 
  margin-top: -4rem; 
  height: 4rem;
  visibility: hidden;
`

const Heading = ({ level = 3, id, className, children, ...props }) => {
  const Tag = `h${level}`

  const slug = id || slugify(isString(children) ? children : children.join(''))

  return (
    <Tag className={`${className} block`} {...props}>
      <Id id={slug} />
      <Link.Unstyled to={`#${slug}`}>{children}</Link.Unstyled>
    </Tag>)
}

export default styled(Heading)``