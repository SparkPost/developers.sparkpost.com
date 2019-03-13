import React from 'react'
import Markdown from 'components/Markdown'
import Debug from 'components/api/Debug'
import { Heading } from 'components/api/components'
import Request from './Request'
import Responses from './Responses'

export default function Transaction({ transaction, transition, resource }) {
  const title = transaction.title.toValue()
  const copy = transaction.copy.toValue()
  const request = transaction.request
  const responses = transaction.responses
    ? transaction.responses
    : [transaction.response]

  return (
    <div>
      <Debug title="Transaction">
        {title && (
          <Heading className="block" level={4}>
            {title}
          </Heading>
        )}
        {copy && <Markdown>{copy}</Markdown>}
        {request && (
          <Request
            request={request}
            transition={transition}
            resource={resource}
          />
        )}
        {responses && <Responses responses={responses} />}
      </Debug>
    </div>
  )
}
