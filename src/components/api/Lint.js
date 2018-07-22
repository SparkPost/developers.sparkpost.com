import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 9;
  font-size: .9rem;
  line-height: 44px;
  height: 50px;
  width: 50px;
  border: 2px solid;
  border-radius: 50%;
  box-shadow: 0px 5px 13px 1px rgba(0, 0, 0, 0.14);
  outline: 0;
  cursor: pointer;
  ${props => props.status === 'ok' ? `
    background: rgba(16, 138, 16, 0.13);
    border-color: rgba(16, 138, 16, 0.6);
    color: rgba(16, 138, 16, 0.9);
  `: props.status === 'warning' ? `
    background: yellow;
  ` : `
      background: rgba(255, 34, 34, 0.05);
      border-color: rgba(255, 34, 34, .6);
      color: rgba(255, 34, 34, .9);
  ` }

  ${props => props.isOpen && `
    &:before {
      content: "";
      width: 100%;
      background: white;
      height: 3px;
      bottom: -1px;
      right: -1px;
      display: block;
      position: absolute;
      z-index: 1;
      border-left: 1px solid #d6d6d6;
      border-right: 1px solid #d6d6d6;
      box-sizing: content-box;
    }
  `}
`

const Times = styled.span`
  color: red;
  font-size: 1.5rem;
`

const Messages = styled.div`
  display: ${props => props.isOpen ? 'block': 'none'};
  z-index: 9999;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  max-width: 500px;
  width: 50%;
  padding: .5rem 1rem;
  background: white;
  border-left: 1px solid #d6d6d6;
  box-shadow: -5px 0px 20px rgba(0, 0, 0, 0.1);
`

const Message = styled.div``

class Lint extends Component {
  state = { isOpen: false }

  toggleOpen = () => {
    if (this.props.messages.length === 0) {
      return this.setState({ isOpen: false })
    }

    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { messages, annotations } = this.props
    console.log(annotations)

    annotations.map((annotation) => {
      // console.log(annotation.content, annotation.meta.toValue(), annotation.attributes.toValue())
      console.log(annotation.content, annotation.code.toValue(), annotation.classes.toValue())
    })

    const status = messages.length > 0 ? `danger` : `ok`

    if (process.env.GATSBY_ACTIVE_ENV !== 'docs') {
      return false
    }

    return (
      <Fragment>
        <Button onClick={this.toggleOpen} status={status}>
          {messages.length ? `${messages.length}` : <span style={{fontSize: `1.15em`}}>✓</span>}
        </Button>
        <Messages isOpen={this.state.isOpen}>
          {messages.map((message, i) => <Message key={i}>{JSON.stringify(message, null, 2)}</Message>)}
        </Messages>
      </Fragment>
    )
  }
}


export default Lint
