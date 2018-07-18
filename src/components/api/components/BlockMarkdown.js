import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { toArray, map } from 'lodash'
import { monospace } from 'utils/fonts'
import { grayscale } from 'utils/colors'
import Markdown from 'components/Markdown'
import Banner from 'components/Banner'
import DataStructureContext from 'components/api/DataStructureContext'
import DataStructure from 'components/api/parts/DataStructure'
import Heading from './Heading'
import HttpHeading from './HttpHeading'
import Row from './Row'
import Right from './Right'
import Json from './Json'

const documentation = require('../../../../documentation.json').results
const samples = require('../../../../samples.json').results

// prettier-ignore
const Event = styled(({ active, ...props }) => <button {...props} />)`
  ${monospace}
  display: block;
  padding: 0.5rem 0.5rem 0.5rem 0;
  width: 100%;
  text-align: left;
  outline: 0;

  background: none;
  border: 0;
  ${props => props.active && `background: ${grayscale('light')};`}
`

const EmptyHeader = styled.th`
  padding: 0;
`

const TableOverflow = styled.div`
  overflow: scroll;
`

const components = {
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
  'message-events': class extends Component {
    state = {
      activeIndex: 0,
      activeDocumentation: documentation[0],
      activeSample: samples[0],
    }

    setActive = activeIndex => {
      this.setState({
        activeIndex,
        activeDocumentation: documentation[activeIndex],
        activeSample: samples[activeIndex],
      })
    }

    render() {
      return (
        <Row>
          <Right>
            <Json>{JSON.stringify(this.state.activeSample)}</Json>
          </Right>
          <div
            className="block"
            style={{
              display: 'flex',
            }}
          >
            <div id="navigation">
              {documentation.map((event, i) => {
                return (
                  <Event
                    active={i === this.state.activeIndex}
                    onClick={() => this.setActive(i)}
                    key={i}
                  >
                    {event.type.sampleValue}
                  </Event>
                )
              })}
            </div>
            <div id="attributes" style={{ flexGrow: 1 }}>
              <DataStructure
                title={''}
                jsonArray={map(
                  this.state.activeDocumentation,
                  ({ description }, name) =>
                    !name.includes('sms') && {
                      name,
                      description: description.endsWith('.')
                        ? description
                        : `${description}.`,
                    }
                ).filter(Boolean)}
              />
            </div>
          </div>
        </Row>
      )
    }
  },
}

const componentNames = toArray(components).map(c => c.name)
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
