import React, { Component, Fragment } from 'react'
import io from 'socket.io-client'
import styled from 'styled-components'
import TimeAgo from 'react-timeago'

import parseEvent from './parseEvent'
import { color, grayscale } from 'utils/colors'

import { Container, Row, Column } from 'components/Grid'
import Panel from 'components/Panel'
import Link from 'components/Link'
import Section from 'components/Section'

// prettier-ignore
const Paragraph = styled.p`
  ${props => props.border && `border-right: 1px solid ${grayscale(7)};`}
  height: 100%;
  padding: .25rem .65rem .25rem 0;
  margin: 0;
`

export default ({}) => {
  return (
    <Panel.Section>
      <div style={{ padding: `0.5rem .35rem 1rem` }}>
        <i
          className="fa fa-check-circle"
          style={{
            fontSize: `1.166666667rem`,
            margin: `.5rem 0`,
            color: color('green'),
          }}
        />
        <h2 style={{ fontSize: `1.5rem`, marginBottom: `0.5rem` }}>
          Well done!
        </h2>
        <p style={{ fontSize: `1rem`, marginBottom: `1.5rem` }}>
          You successfully sent an email and tracked it all the way to the
          inbox.
        </p>
        <Row>
          <Column>
            <Paragraph border>
              <Link>Sign Up</Link>
              <br />
              Create a full-featured, free account designed for developers.
            </Paragraph>
          </Column>
          <Column>
            <Paragraph border>
              <Link>New User Guide</Link>
              <br />
              New to SparkPost? Get set up with our new user guide.
            </Paragraph>
          </Column>
          <Column>
            <Paragraph>
              <Link>API Reference</Link>
              <br />
              Check out our API reference for a full overview of the SparkPost.
            </Paragraph>
          </Column>
        </Row>
      </div>
    </Panel.Section>
  )
}
