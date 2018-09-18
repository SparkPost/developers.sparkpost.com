import React, { Component, Fragment } from 'react'
import io from 'socket.io-client'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'

import parseEvent from './parseEvent'
import { color, grayscale } from 'utils/colors'
import Panel from 'components/Panel'
import Link from 'components/Link'
import Section from 'components/Section'
import Form from './Form'
import Events from './Events'
import NextSteps from './NextSteps'

const Wrapper = styled.div``

/**
 * Steps:
 *
 * 1 – get the user's email address, send the email, and show the response
 * 2 - show the email events
 * 3 - show the next steps for the user to take
 */

class Demo extends Component {
  state = {
    socket: null,
    step: 1,
    error: null,
    response: null,
    timeout: null,
    events: [],
  }

  /**
   * Sets up socket connection to server
   */
  componentDidMount() {
    const socket = io.connect('http://localhost:8100')

    socket.on('demo__event', this.handleEvent)
    socket.on('demo__error', error => this.setState({ error }))
    this.setState({ socket })
  }

  /**
   * close socket when we are done
   */
  componentWillUnmount() {
    if (this.state.socket.connected) {
      this.state.socket.close()
    }
  }

  sendEmail = email => {
    return new Promise((resolve, reject) => {
      this.state.socket.once('demo__emailSent', response => resolve(response))
      this.state.socket.once('demo__error', error => reject(error))

      this.state.socket.emit('demo__sendEmail', { email })
      this.setState({
        timeout: setTimeout(() => this.setState({ step: 3 }), 1 * 60 * 1000),
      })
    })
  }

  nextStep = () => {
    this.setState(({ step }) => ({ step: step + 1 }))
  }

  handleEvent = data => {
    const { events, step } = this.state
    const event = parseEvent(data)
    const triggerLastStep = step !== 3 && event.name === 'Click'

    this.setState({ events: [...events, event] })

    if (triggerLastStep) {
      this.nextStep()
    }
  }

  render() {
    const { events, step, error } = this.state

    return (
      <Wrapper>
        <h2>Give it a try!</h2>
        <p>
          Enter your email address and click "Run Code" to send yourself an
          email with SparkPost.
        </p>
        <Panel
          style={{
            borderColor: grayscale(8),
            borderRadius: `4px`,
            boxShadow: `0 8px 31px -13px rgba(65,65,70,.1)`,
          }}
        >
          {step === 1 && (
            <Form sendEmail={this.sendEmail} nextStep={this.nextStep} />
          )}
          {step === 2 && <Events events={events} />}
          {step === 3 && <NextSteps />}
        </Panel>
        {error && <p>Sorry, there was an error sending your email!</p>}
      </Wrapper>
    )
  }
}

export default Demo
