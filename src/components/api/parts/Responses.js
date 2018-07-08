import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { color, grayscale } from 'utils/colors'
import { monospace } from 'utils/fonts'
import Markdown from 'components/Markdown'
import Debug from 'components/api/Debug'
import { HttpHeading, Json } from 'components/api/components'

export default class Responses extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  setActiveResponse = i => {
    this.setState({ activeIndex: i })
  }

  render() {
    // if we have no body or status code on the only response, then it was just empty so we don't have a response for the request
    if (
      this.props.responses.length === 1 &&
      !this.props.responses[0].messageBody &&
      !this.props.responses[0].statusCode
    ) {
      return null
    }

    return (
      <Debug title="Responses">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: '2rem',
          }}
        >
          <HttpHeading>Response</HttpHeading>
          <div style={{ display: 'flex' }}>
            {this.props.responses.map((response, i) => (
              <StatusCode
                key={i}
                code={response.statusCode.toValue()}
                active={i === this.state.activeIndex}
                onClick={() => this.setActiveResponse(i)}
              />
            ))}
          </div>
        </div>
        {this.props.responses.map((response, i) => (
          <Fragment key={i}>
            <Json
              style={{
                display: i === this.state.activeIndex ? 'block' : 'none',
              }}
            >
              {response.messageBody
                ? response.messageBody.content
                : '// Empty response body'}
            </Json>
            {response.copy && (
              <Markdown
                style={{
                  display: i === this.state.activeIndex ? 'block' : 'none',
                }}
              >
                {response.copy.toValue()}
              </Markdown>
            )}
          </Fragment>
        ))}
      </Debug>
    )
  }
}

// prettier ignore
const StatusCodeWrapper = styled.button`
  font: inherit;
  color: ${grayscale('white')};
  background: transparent;
  border: 0;
  ${monospace}
  padding: .166666667rem .5rem;
  border-radius: 2px;
  cursor: pointer;

  &:before {
    content: '';
    display: inline-block;
    margin-right: 0.333333333rem;
    height: 0.333333333rem;
    width: 0.333333333rem;
    border-radius: 50%;

    ${props => props.code.startsWith('2') && `background: ${color('green')};`}
    ${props => props.code.startsWith('3') && `background: ${color('mustard')};`}
    ${props => props.code.startsWith('4') && `background: ${color('orange')};`}
    ${props => props.code.startsWith('5') && `background: ${color('red')};`}
  }

  ${props =>
    props.active &&
    `
    background: ${grayscale('medium')};
    background: #38383b; // dark theme
  `};
`

function StatusCode({ code, active, ...props }) {
  return (
    <StatusCodeWrapper {...props} code={`${code}`} active={active}>
      {code}
    </StatusCodeWrapper>
  )
}
