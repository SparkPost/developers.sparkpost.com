import React, { Fragment } from 'react'
import styled from 'styled-components'
import { mapValues, keys } from 'lodash'
import Markdown from 'components/Markdown'
import Banner from 'components/Banner'
import DataStructureContext from 'components/api/DataStructureContext'
import DataStructure from 'components/api/parts/DataStructure'
import Heading from './Heading'
import HttpHeading from './HttpHeading'
import Row from './Row'
import Right from './Right'
import Json from './Json'

const EmptyHeader = styled.th`
  padding: 0;
`

const TableOverflow = styled.div`
  overflow: scroll;
`

// we add in the displayName for all these components since it gets dropped somewhere in the client-side render in firefox
const components = mapValues(
  {
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
    'data-structure': ({ id, title, sample }) => (
      <DataStructureContext.Consumer>
        {dataStructures => {
          const Wrapper = sample !== undefined ? Row : Fragment
          return (
            <Wrapper>
              {sample !== undefined && (
                <Right>
                  <HttpHeading top>Example</HttpHeading>
                  <Json>{unescape(sample)}</Json>
                </Right>
              )}
              <div className="block">
                <DataStructure
                  title={title}
                  dataStructure={dataStructures[id.toLowerCase()]}
                />
              </div>
            </Wrapper>
          )
        }}
      </DataStructureContext.Consumer>
    ),
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
