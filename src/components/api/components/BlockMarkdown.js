import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { toArray, map } from 'lodash'
import { monospace, font, weight } from 'utils/fonts'
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

const EventsWrapper = styled.div`
  padding: 0 0.75rem 0 0;
`

const EventsHover = styled.div`
  &:hover {
    color: ${grayscale(4)};
  }
`

// prettier-ignore
const Event = styled(({ active, ...props }) => <button {...props} />)`
  display: block;
  width: 100%;
  padding: 0.4rem 0.333333333rem;
  border-radius: 2px;
  font-size: .833333333rem;
  font-weight: ${weight('medium')};
  color: inherit;
  text-align: left;
  background: none;
  margin: 0 0 0.333333333rem 0;
  border: 0;
  outline: 0;
  transition: .15s;
  cursor: pointer;

  ${props => props.active ? `
    background: ${grayscale('light')};
    color: ${grayscale('medium')};
  ` : `
    &:hover, &:focus {
      background: ${grayscale('light')};
      color: ${grayscale('medium')};
    }
  `}
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
            <br />
            <HttpHeading>&nbsp;</HttpHeading>
            <Json>{JSON.stringify(this.state.activeSample)}</Json>
          </Right>
          <div
            className="block"
            style={{
              display: 'flex',
            }}
          >
            <EventsWrapper>
              <div
                style={{
                  fontFamily: font('secondary'),
                  textTransform: 'uppercase',
                  fontWeight: weight('medium'),
                  fontSize: `0.75rem`,
                  color: grayscale(4),
                  margin: `2rem 0 0.5rem`,
                  paddingBottom: `.5rem`,
                  borderBottom: `1px solid ${grayscale(8)}`,
                }}
              >
                Events
              </div>
              <EventsHover>
                {documentation
                  .map((event, i) => {
                    return (
                      !event.type.sampleValue.includes('sms') && (
                        <Event
                          active={i === this.state.activeIndex}
                          onClick={() => this.setActive(i)}
                          key={i}
                        >
                          {event.type.sampleValue}
                        </Event>
                      )
                    )
                  })
                  .filter(Boolean)}
              </EventsHover>
            </EventsWrapper>
            <div id="attributes" style={{ flexGrow: 1 }}>
              <DataStructure
                title={`${
                  Object.values(this.state.activeDocumentation)[0].sampleValue
                } Object`}
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
