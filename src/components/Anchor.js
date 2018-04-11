import React from 'react'
import styled from 'styled-components'
import slugify from 'slugify'
import Link from './Link'


function Anchor({ title, children, ...props }) {
  return (
    <Anchor.Target title={title} {...props}>
      {children} <AnchorLink title={title}><i className="fa fa-link" /></AnchorLink>
    </Anchor.Target>
  )
}

Anchor.Link = ({ title, ...props }) => {
  const slug = slugify(title).toLowerCase()

  return (<Link.Unstyled {...props} to={`#${slug}`} />)
}

Anchor.Target = ({ title, ...props }) => {
  const slug = slugify(title).toLowerCase()

  return (<Target id={slug} title={title} {...props} />)
}

const AnchorLink = styled(Anchor.Link)`
  position: absolute;
  right: 0;
  transform: translate(0, -50%);
  top: 50%;
  opacity: 0;
`

const Target = styled.div`
  padding-right: 1.5rem;

  &:hover ${AnchorLink} {
    opacity: 1;
  }
`

export default Anchor