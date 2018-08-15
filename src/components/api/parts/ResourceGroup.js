import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import slugify from 'utils/api/slugify'
import Tooltip from 'components/Tooltip'
import Link from 'components/Link'
import Debug from 'components/api/Debug'
import { Heading, BlockMarkdown } from 'components/api/components'
import Resource from './Resource'

// prettier-ignore
const TitleWrapper = styled.div.attrs({ className: 'block' })`
  display: flex;
  flex-direction: column-reverse;

  ${mediaQuery('sm', `
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  `)}
`

// prettier-ignore
const PostmanLink = styled(props => (
  <Tooltip
    {...props}
    content="Import the SparkPost API as a Postman collection"
  >
    <Link
      to="https://app.getpostman.com/run-collection/5d9ae743a661a15d64bb"
      target="_blank"
    >
      <img src="https://run.pstmn.io/button.svg" alt="Run in Postman" />
    </Link>
  </Tooltip>
))`
  margin: 2.5rem 0 -1rem 0;

  ${mediaQuery('sm', `
    margin: 0;
  `)}

  a {
    line-height: 1rem;
  }

  img {
    max-width: inherit;
  }
`

export default function ResourceGroup({ resourceGroup }) {
  const title = resourceGroup.title.toValue()
  const copy = resourceGroup.copy.toValue()
  const resources = resourceGroup.resources

  return (
    <Debug title="Resource Group">
      {title && (
        <TitleWrapper>
          <Heading level={1} id={slugify.resourceGroup({ resourceGroup })}>
            {title}
          </Heading>
          <PostmanLink />
        </TitleWrapper>
      )}
      {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
      {resources.map((resource, i) => (
        <Resource key={i} resource={resource} resourceGroup={resourceGroup} />
      ))}
    </Debug>
  )
}
