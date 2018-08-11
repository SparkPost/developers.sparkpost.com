import React, { Fragment } from 'react'
import styled from 'styled-components'
import { mapValues, keys } from 'lodash'
import Markdown from 'components/Markdown'
import Banner from 'components/Banner'
import Button from 'components/Button'
import Heading from '../Heading'
import DataStructure from './DataStructure'
import MessageEvents from './MessageEvents'
import WebhookEvents from './WebhookEvents'
import SubstitutionReferenceContext from 'components/api/SubstitutionReferenceContext'

const EmptyHeader = styled.th`
  padding: 0;
`

const TableOverflow = styled.div`
  overflow: scroll;
`

// we add in the displayName for all these components since it gets dropped somewhere in the client-side render in firefox
const components = mapValues(
  {
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
    replbutton({ children }) {
      const code = JSON.parse(children.join(''))

      const replCode = {}

      // allow either html or data or both
      if (code.html) replCode.html = code.html

      if (code.substitution_data)
        replCode.substitution_data = JSON.stringify(
          code.substitution_data,
          null,
          2
        )

      return (
        <div className="block" style={{ marginBottom: `1rem` }}>
          <SubstitutionReferenceContext.Consumer>
            {data => (
              <Button
                size="small"
                outline
                onClick={() => {
                  data.setREPL(replCode, { debounce: false })
                }}
              >
                Try it
              </Button>
            )}
          </SubstitutionReferenceContext.Consumer>
        </div>
      )
    },
    ...DataStructure,
    ...MessageEvents,
    ...WebhookEvents,
  },
  (component, name) => {
    component.displayName = name

    return component
  }
)

const componentNames = keys(components)
const hasComponent = props =>
  (
    React.Children.map(
      props.children,
      component =>
        component.type &&
        componentNames.includes(
          component.type.displayName || component.type.name
        )
    ) || []
  ).includes(true)

const BlockMarkdown = props => <Markdown components={components} {...props} />

export default BlockMarkdown
