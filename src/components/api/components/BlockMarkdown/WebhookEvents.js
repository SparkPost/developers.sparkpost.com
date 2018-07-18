import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import EventsTable from './EventsTable'

class WebhookEvents extends Component {
  state = { activeIndex: 1 }

  setActive = activeIndex => {
    console.log(activeIndex)
    this.setState({ activeIndex })
  }

  render() {
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
          const events = data.allWebhookEvent.edges.map(({ node }) => node)

          return <EventsTable events={events} />
        }}
      />
    )
  }
}

export default WebhookEvents
