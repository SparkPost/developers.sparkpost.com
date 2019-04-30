import React, { Fragment } from 'react'
import styled from 'styled-components'
import { mapKeys, mapValues, keys } from 'lodash'
import Markdown from 'components/Markdown'
import Banner from 'components/Banner'
import Heading from '../Heading'
import DataStructure from './DataStructure'
import MessageEvents from './MessageEvents'
import WebhookEvents from './WebhookEvents'
import REPL from './REPL'

const EmptyHeader = styled.th`
  padding: 0;
`

const TableOverflow = styled.div`
  overflow: scroll;
`

let components = {
  h2(props) {
    return <Heading level={2} className="block" {...props} />
  },
  h3(props) {
    return <Heading level={3} className="block" {...props} />
  },
  h4(props) {
    return <Heading level={4} className="block" {...props} />
  },
  h5(props) {
    return <Heading level={5} className="block" {...props} />
  },
  h6(props) {
    return <Heading level={6} className="block" {...props} />
  },
  ul(props) {
    return (
      <div className="block">
        <ul {...props} />
      </div>
    )
  },
  ol(props) {
    return (
      <div className="block">
        <ol {...props} />
      </div>
    )
  },
  table(props) {
    return (
      <div className="block">
        <TableOverflow>
          <table {...props} />
        </TableOverflow>
      </div>
    )
  },
  pre(props) {
    return (
      <div className="block">
        <pre {...props} />
      </div>
    )
  },
  p(props) {
    return !hasComponent(props) ? (
      <p {...props} className="block" />
    ) : (
      <Fragment {...props} />
    )
  },
  th(props) {
    return props.children && props.children.length > 0 ? (
      <th {...props} />
    ) : (
      <EmptyHeader />
    )
  },
  banner({ children, status }) {
    return (
      <div className="block">
        <Banner status={status}>
          <p>{children}</p>
        </Banner>
      </div>
    )
  },
  DataStructure,
  MessageEvents,
  WebhookEvents,
  REPL,
}

// remove any ambiguity between uppercase and lowercase components
components = mapKeys(components, (component, key) => {
  return key.toLowerCase()
})

// we add in the displayName for all these components since it gets dropped somewhere in the client-side render in firefox
components = mapValues(components, (component, key) => {
  component.displayName = key

  return component
})

const componentNames = keys(components)
const hasComponent = props =>
  (
    React.Children.map(
      props.children,
      component =>
        component.type &&
        componentNames.includes(
          (
            component.type.displayName ||
            component.type.name ||
            ''
          ).toLowerCase()
        )
    ) || []
  ).includes(true)

const BlockMarkdown = props => <Markdown components={components} {...props} />

export default BlockMarkdown
