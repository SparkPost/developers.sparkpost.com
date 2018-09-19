import React, { Component, Fragment } from 'react'
import io from 'socket.io-client'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'
import { rgba } from 'polished'
import parseEvent from './parseEvent'
import { color, grayscale } from 'utils/colors'
import Panel from 'components/Panel'
import Link from 'components/Link'
import Section from 'components/Section'
import Tooltip from 'components/Tooltip'
import Form from './Form'
import Events from './Events'
import NextSteps from './NextSteps'

const DemoTip = styled(Tooltip)`
  background-image: linear-gradient(
    to right,
    ${grayscale(4)} 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  line-height: 1.4;
`

const Steps = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
`

const Step = styled(({ step, activeStep, ...props }) => {
  return <div {...props} />
})`
  opacity: 0;
  z-index: 0;
  transition: 0.1s;
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 1;
  transition: 0.5s ease-in-out;
  transform: translateY(25px);

  ${props =>
    props.step === props.activeStep &&
    `
    opacity: 1;
    z-index: 1;
    transform: translateX(0);
  `} ${props =>
    props.step < props.activeStep &&
    `
    transform: translateY(-25px);
  `};
`
const StepIndicators = styled.div`
  display: flex;
  justify-content: center;
`

const StepIndicator = styled(({ step, activeStep, ...props }) => {
  return <div {...props} />
})`
  background: ${grayscale('white')};
  border: 2px solid ${rgba(color('orange'), 0.3)};
  border-radius: 50%;
  height: 0.666666667rem;
  width: 0.666666667rem;
  transition: 0.2s;

  &:not(:first-child) {
    margin-left: 1rem;

    &:before {
      transition: 0.2s;
      content: '';
      background: ${rgba(color('orange'), 0.3)};
      display: block;
      width: 1rem;
      height: 2px;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: 0;
      transform: translateX(-100%);
      margin-left: -2px;

      ${props =>
        props.step <= props.activeStep &&
        `
        background: ${color('orange')};
      `};
    }
  }

  ${props =>
    props.step <= props.activeStep &&
    `
    background: ${color('orange')};
    border-color: ${color('orange')};
  `};
`

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
    this.setState({ email })
    return new Promise((resolve, reject) => {
      let passedMinimumTime = false,
        savedResponse

      setTimeout(() => {
        if (savedResponse) {
          resolve(savedResponse)
        } else {
          passedMinimumTime = true
        }
      }, 1500)

      this.state.socket.once('demo__emailSent', response => {
        if (passedMinimumTime) {
          resolve(response)
        } else {
          savedResponse = response
        }
      })
      this.state.socket.once('demo__error', error => reject(error))
      this.state.socket.emit('demo__sendEmail', { email })
      // this.setState({
      //   timeout: setTimeout(() => this.setState({ step: 3 }), 1 * 60 * 1000),
      // })
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
    const { events, step, email, error } = this.state

    return (
      <Wrapper>
        <h2>Give it a try!</h2>
        <Steps>
          <Step step={1} activeStep={step}>
            <p>
              The code below sends an email from{' '}
              <DemoTip
                content={() => (
                  <Fragment>
                    This is a demo{' '}
                    <Link to="/api/sending-domains">sending domain</Link>. Use
                    the{' '}
                    <Link to="/api/transmissions/#header-the-sandbox-domain">
                      sandbox domain
                    </Link>{' '}
                    to send test messages from your account.
                  </Fragment>
                )}
              >
                demo@sparkpost.com
              </DemoTip>{' '}
              to your email address. To send an email to yourself, enter your{' '}
              <Link to="#">email address</Link> and click "Run Code."
            </p>
          </Step>
          <Step step={2} activeStep={step}>
            <p>
              Using a{' '}
              <DemoTip
                content={() => (
                  <Fragment>
                    <Link to="/api/webhooks">Webhooks</Link> allow you to be
                    notified when events around your emails occur.
                  </Fragment>
                )}
              >
                webhook
              </DemoTip>
              , we will now collect and report all the events about the email
              you just sent to <code>{email}</code>. Once you see the delivered
              event, find the email in your inbox, and open it to see the "open"
              event.
            </p>
          </Step>
          <Step step={3} activeStep={step}>
            Done
          </Step>
        </Steps>
        <Panel
          style={{
            borderColor: grayscale(8),
            borderRadius: `4px`,
            boxShadow: `0 8px 31px -13px rgba(65,65,70,.1)`,
            marginBottom: `1.5rem`,
          }}
        >
          <Steps>
            <Step step={1} activeStep={step}>
              <Form sendEmail={this.sendEmail} nextStep={this.nextStep} />
            </Step>
            <Step step={2} activeStep={step}>
              <Events events={events} />
            </Step>
            <Step step={3} activeStep={step}>
              <NextSteps />
            </Step>
          </Steps>
        </Panel>
        <StepIndicators>
          <StepIndicator step={1} activeStep={step} />
          <StepIndicator step={2} activeStep={step} />
          <StepIndicator step={3} activeStep={step} />
        </StepIndicators>
        {error && <p>Sorry, there was an error sending your email!</p>}
      </Wrapper>
    )
  }
}

export default Demo
