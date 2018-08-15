import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import EventsTable from './EventsTable'

function WebhookEvents({ id, title, sample }) {
  return (
    <StaticQuery
      query={graphql`
        query WebhookEventsQuery {
          allWebhookEvent {
            edges {
              node {
                name
                description
                attributes
                sample
              }
            }
          }
        }
      `}
      render={data => {
        const events = data.allWebhookEvent.edges
          .map(({ node }) => node)
          .filter(({ name }) => !name.includes('sms'))

        return <EventsTable events={events} />
      }}
    />
  )
}

export default WebhookEvents
