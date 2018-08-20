import React from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import { castArray } from 'lodash'
import Link from 'components/Link'

function Anchor({ title, children, ...props }) {
  if (!title) title = castArray(children).join('')

  return (
    <Anchor.Target title={title} {...props}>
      {children}{' '}
      <AnchorLink title={title}>
        <i className="fa fa-link" />
      </AnchorLink>
    </Anchor.Target>
  )
}

Anchor.slugify = title => slugify(title).toLowerCase()

Anchor.Link = ({ title, ...props }) => {
  const slug = Anchor.slugify(title)

  return <Link.Unstyled title={title} {...props} to={`#${slug}`} />
}

Anchor.Target = ({ title, children, ...props }) => {
  const slug = Anchor.slugify(title)

  return (
    <Target {...props}>
      <Id id={slug} />
      {children}
    </Target>
  )
}

const AnchorLink = styled(Anchor.Link)`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: -1.5rem;
  opacity: 0;
  padding-left: 1.5rem;
`

const Target = styled.div`
  &:hover ${AnchorLink} {
    opacity: 1;
  }
`

const Id = styled.span`
  display: block;
  margin-top: -4rem;
  height: 4rem;
  visibility: hidden;
  position: absolute;
`

export default Anchor
