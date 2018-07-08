import React from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'
import slugify from 'utils/api/slugify'
import Debug from 'components/api/Debug'
import { Heading, BlockMarkdown } from 'components/api/components'
import Transition from './Transition'

const Wrapper = styled.div`
  padding-top: 3rem;
`

export default function Resource({ resource, resourceGroup }) {
  const title = resource.title.toValue()
  const copy = resource.copy.toValue()
  const transitions = resource.transitions
  /**
   * When we skip the Resource, it is added in with the title equal to
   * the first Transition title. This is the case when we set the href
   * in the transition level. We don't want the title to appear twice
   * so we dedup it by checking it there is a single transition with the
   * same title as the resource.
   *
   * EXAMPLE
   *
   * With the resource:
   * ## Message Events [/message-events]
   * ### Search for Message Events [GET]
   *
   *
   * Without the resource: (this is what we are accounting for here)
   * ### Search for Message Events [GET /message-events]
   */
  const sameAsChildTitle =
    resource.transitions.length === 1 &&
    resource.transitions.first.title.toValue() === title
  const showTitle = title && !sameAsChildTitle

  return (
    <Debug title="Resource">
      <Wrapper>
        {showTitle && (
          <Heading level={2} id={slugify.resource({ resourceGroup, resource })}>
            {title}
          </Heading>
        )}
        {!isEmpty(copy) && <BlockMarkdown>{copy}</BlockMarkdown>}
        {transitions.map((transition, i) => (
          <Transition
            key={i}
            index={i}
            transition={transition}
            resource={resource}
            resourceGroup={resourceGroup}
          />
        ))}
      </Wrapper>
    </Debug>
  )
}
