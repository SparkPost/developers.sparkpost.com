import React, { Fragment } from 'react'
import styled from 'styled-components'
import { toArray } from 'lodash'
import Markdown from 'components/Markdown'
import Heading from './Heading'

const TableOverflow = styled.div`
  overflow: scroll;
`

const BlockMarkdown = ({ components, ...props }) => {
  const componentNames = toArray(components).map(c => c.name)
  const hasComponent = props =>
    (
      React.Children.map(
        props.children,
        component =>
          component.type && componentNames.includes(component.type.name)
      ) || []
    ).includes(true)

  const markdownComponents = {
    h1(props) {
      return <Heading level={1} {...props} />
    },
    h2(props) {
      return <Heading level={2} {...props} />
    },
    h3(props) {
      return <Heading level={3} {...props} />
    },
    h4(props) {
      return <Heading level={4} {...props} />
    },
    h5(props) {
      return <Heading level={5} {...props} />
    },
    h6(props) {
      return <Heading level={6} {...props} />
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
        <div class="block">
          <ul {...props} />
        </div>
      )
    },
    table(props) {
      return (
        <div className="block">
          <TableOverflow><table {...props} /></TableOverflow>
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
        <th style={{ padding: 0 }} />
      )
    },
    ...components,
  }

  return <Markdown components={markdownComponents} {...props} />
}

export default BlockMarkdown
