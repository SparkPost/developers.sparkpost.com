import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { color, grayscale } from 'utils/colors'
import TimeAgo from 'react-timeago'

import parseEvent from './parseEvent'

import Panel from 'components/Panel'
import Link from 'components/Link'
import Section from 'components/Section'
import Tooltip from 'components/Tooltip'

const WebhookTooltip = ({ children }) => (
  <Tooltip
    content={'Webhooks batch and deliver events to an endpoint of your choice.'}
  >
    <Link to="https://developers.sparkpost.com/api/webhooks" target="_blank">
      {children}
    </Link>
  </Tooltip>
)

const EventsTable = styled.div`
  width: 100%;
`

const StatusIcon = styled.span`
  background: ${props => color(props.color)};
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`

const Name = styled.span`
  display: inline-block;
  width: 100px;
`
const Description = styled.p`
  display: inline-block;
  flex-grow: 1;
  color: ${grayscale(3)};
  margin: 0;
`
const Time = styled.span`
  display: inline-block;
  align-self: flex-end;
  color: ${grayscale(3)};
`

const Loader = styled.div`
  &,
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  & {
    color: ${grayscale('light')};
    font-size: 10px;
    margin: 0 auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`

const Event = styled(({ name, description, timestamp, ...props }) => (
  <div {...props}>
    <StatusIcon color={'blue'} />
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Time>
      <TimeAgo date={timestamp} />
    </Time>
  </div>
))`
  display: flex;
  align-items: baseline;
  font-size: 0.833333333rem;
  margin-bottom: 0.25rem;
`

/**
 * Table of webhook events with empty state
 */
const Events = ({ events, loading }) => (
  <Fragment>
    {events.length === 0 ? (
      <p>Waiting for events...(or appropriate loading)</p>
    ) : (
      <EventsTable>
        {events.map((event, index) => <Event key={index} {...event} />)}
      </EventsTable>
    )}
  </Fragment>
)

const LastEvent = styled.p`
  margin: 0;
  font-size: 1.111111111rem;
  padding: 1rem 1rem;
  text-align: center;
`

export default ({ events }) => {
  events = [
    {
      name: 'Name',
      description: 'description',
      timestamp: new Date().toString(),
    },
  ]

  return (
    <Fragment>
      <Panel.Section>
        <Events events={events} />
        <Loader />
      </Panel.Section>
      <Panel.Section>
        <LastEvent>So far so good! SparkPost accepted your email.</LastEvent>
      </Panel.Section>
    </Fragment>
  )
}

/**
 * The request was successfull. As your email is being generated and
        delivered, SparkPost logs events to track it's progress. We'll use{' '}
        <WebhookTooltip>Webhooks</WebhookTooltip> to display these events
        live.
 */
