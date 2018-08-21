import React, { Component } from 'react'
import io from 'socket.io-client'
import parseEvent from './parseEvent'

class Demo extends Component {
  constructor(props) {
    super(props)

    // Bind before setting on state
    this.startDemo = this.startDemo.bind(this)
    this.handleDemoEvent = this.handleDemoEvent.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      email: null,
      socket: null,
      events: [],
      startDemo: this.startDemo,
      handleChange: this.handleChange,
    }
  }

  handleChange({ target }) {
    this.setState({ email: target.value })
  }

  startDemo(event) {
    event.preventDefault()
    this.state.socket.emit('startDemo', { email: this.state.email })
  }

  handleDemoEvent(data) {
    const { events } = this.state
    events.push(parseEvent(data))
    this.setState({ events })
  }

  componentDidMount() {
    const socket = io.connect('http://localhost:8100')

    socket.on('demoEvent', this.handleDemoEvent)

    socket.on('accepted', () => {
      console.log('Request successful')
    })

    socket.on('demoError', err => {
      console.log('Error seinding email: ', err)
    })

    this.setState({ socket })
  }

  componentWillUnmount() {
    // Close socket connection if it exists
    if (this.state.socket.connected) {
      this.state.socket.close()
    }
  }

  render() {
    return <div>{this.props.children(this.state)}</div>
  }
}

export default Demo
