import React from 'react'
import styled from 'styled-components'
import { isString } from 'lodash'
import Link from 'components/Link'
import slugify from 'utils/api/slugify'

const Id = styled.span`
  display: block;
  margin-top: -4rem;
  height: 4rem;
  visibility: hidden;
  position: absolute;
`

// prettier-ignore
const Tag = styled(({ level, ...props }) => {
  const H = `h${level}`

  return <H {...props} />
})`
  margin-top: 2rem;

  ${props => props.level === 1 && `
    padding-top: 2.5rem;
    margin: 0 0 1.5rem 0;
  `}
`

const Heading = ({ level = 3, id, children, ...props }) => {
  const slug =
    id ||
    slugify.markdown({
      heading: stringifyChildren(children),
    })

  return (
    <Tag level={level} {...props}>
      <Id id={slug} />
      <Link.Unstyled to={`#${slug}`}>{children}</Link.Unstyled>
    </Tag>
  )
}

function stringifyChildren(children) {
  if (isString(children)) {
    return children
  }

  return children
    .map(child => {
      return isString(child) ? child : stringifyChildren(child.props.children)
    })
    .join('')
}

export default styled(Heading)``
