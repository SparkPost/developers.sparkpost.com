import React, { Component, Fragment } from 'react'
import io from 'socket.io-client'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'

import parseEvent from './parseEvent'

import Panel from 'components/Panel'
import Link from 'components/Link'
import Section from 'components/Section'
import ToolTip from 'components/ToolTip'
import CodeSamples from 'components/CodeSamples'

const Wrapper = styled.div`
  color: black;
`

/**
  Table of webhook events with empty state
*/
const Events = ({ events, loading }) => (
  <Fragment>
    {events.length === 0 ? (
      <p>Waiting for events...(or appropriate loading)</p>
    ) : (
      <table>
        <tbody>
          {events.map((e, index) => (
            <tr key={index}>
              <td>{e.name}</td>
              <td>{e.description}</td>
              <td>
                <TimeAgo date={e.timestamp} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </Fragment>
)

const WebhookToolTip = ({ children }) => (
  <ToolTip
    content={'Webhooks batch and deliver events to an endpoint of your choice.'}
  >
    <Link to="https://developers.sparkpost.com/api/webhooks" target="_blank">
      {children}
    </Link>
  </ToolTip>
)

class Demo extends Component {
  state = {
    email: null,
    socket: null,
    events: [],
    step: 1,
    error: null,
  }

  /**
    Sets up socket connection to server
  */
  componentDidMount() {
    const socket = io.connect('http://localhost:8100')

    socket.on('demoEvent', this.handleDemoEvent)

    // Demo started successfully
    socket.on('accepted', () => {
      // Fabricate loading
      setTimeout(() => this.setState({ step: 3 }), 1000)
    })

    socket.on('demoError', err => {
      console.log('Error seinding email: ', err)
      this.setState({ error: err, step: 1 })
    })

    this.setState({ socket })
  }

  componentWillUnmount() {
    if (this.state.socket.connected) {
      this.state.socket.close()
    }
  }

  startDemo = email => {
    this.state.socket.emit('startDemo', { email })
    this.setState({ step: 2 })
  }

  handleDemoEvent = data => {
    const { events, step } = this.state

    const event = parseEvent(data)
    let nextStep = event.name === 'Click' ? 4 : step

    events.push(parseEvent(data))
    this.setState({ events, step: nextStep })
  }

  render() {
    const { events, step, error } = this.state

    return (
      <Wrapper>
        <h2 style={{ color: 'white' }}>Give it a try!</h2>
        <p style={{ color: 'white' }}>
          Enter your email address and click "Run Code" to send yourself an
          email with SparkPost.
        </p>
        {step === 1 && (
          <Fragment>
            <CodeSamples startDemo={this.startDemo} />
          </Fragment>
        )}
        {step === 2 && (
          <Panel>
            <p>Sending request... (Replace with appropriate loading)</p>
          </Panel>
        )}
        {step === 3 && (
          <Panel sectioned>
            <Section>
              <Events events={events} />
            </Section>
            <Section>
              The request was successfull. As your email is being generated and
              delivered, SparkPost logs events to track it's progress. We'll use{' '}
              <WebhookToolTip>Webhooks</WebhookToolTip> to display these events
              live.
            </Section>
          </Panel>
        )}
        {step === 4 && (
          <Panel sectioned>
            <Section>
              <Events events={events} />
            </Section>
            <Section>
              <p>Well done! Cool info about where to go next.</p>
            </Section>
          </Panel>
        )}
        {error && <p>Sorry, there was an error sending your email!</p>}
      </Wrapper>
    )
  }
}

export default Demo
