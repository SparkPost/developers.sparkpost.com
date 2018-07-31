import React from 'react'
import styled from 'styled-components'
import highlightHref from 'utils/api/highlightHref'
import Markdown from 'components/Markdown'
import Debug from 'components/api/Debug'
import { HttpHeading, Json } from 'components/api/components'

const HrefWrapper = styled(({ children, ...props }) => (
  <pre {...props}>
    <code>{children}</code>
  </pre>
))`
  padding: 0.5rem;
  white-space: pre-wrap;
`

export default function Request({ request, transition, resource }) {
  const title = request.title.toValue()
  const copy = request.copy.toValue()
  const method = request.method.toValue()
  const href = (transition.href || {}).content || resource.href.content
  const highlightedHref = highlightHref(href, transition.hrefVariables)

  return (
    <Debug title="Request">
      <HttpHeading top>{title ? `Request: ${title}` : `Request`}</HttpHeading>
      {copy && <Markdown>{copy}</Markdown>}
      <HrefWrapper>
        {method}{' '}
        <span
          dangerouslySetInnerHTML={{
            __html: `/api${highlightedHref}`,
          }}
        />
      </HrefWrapper>
      {request.messageBody && <Json>{request.messageBody.content}</Json>}
    </Debug>
  )
}
