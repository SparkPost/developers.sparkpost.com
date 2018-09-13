import React, { Component, Fragment } from 'react'
import { map } from 'lodash'
import styled from 'styled-components'
import { uppercase, weight } from 'utils/fonts'
import { color, grayscale, shadow } from 'utils/colors'
import { mediaQuery } from 'utils/breakpoint'
import DataStructure from 'components/api/parts/DataStructure'
import HttpHeading from '../HttpHeading'
import Row from '../Row'
import Right from '../Right'
import Json from '../Json'

const SelectWrapper = styled.div`
  ${mediaQuery('lg', `display: none;`)};
`

const Select = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  padding: 0.277777778rem 1.5rem 0.277777778rem 0.666666667rem;
  outline: none;
  border: 1px solid ${grayscale(7)};
  border-radius: 2px;
  background: ${grayscale('white')};
  color: ${grayscale(1)};
  font-weight: 400;
  font-size: 0.833333333rem;
  line-height: 1.333333333rem;
  box-shadow: ${shadow(1)};
  transition: border 0.15s;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border: 1px solid ${color('blue')};
    box-shadow: 0 0 0 1px ${color('blue')};
  }
`

const SelectCarot = styled.span.attrs({ className: 'fa fa-caret-down' })`
  position: absolute;
  right: 0.5rem;
  top: 0.65rem;
  color: ${grayscale(4)};
  font-size: 0.666666667rem;
`

const TableWrapper = styled.div.attrs({ className: 'block' })`
  display: flex;
`

const EventsWrapper = styled.div`
  padding: 0 0.75rem 0 0;
  border-bottom: 1px solid ${grayscale(8)};
  margin-bottom: 1rem;
  display: none;
  ${mediaQuery('lg', `display: block;`)};
`

const EventsHeading = styled.h4.attrs({ children: 'Events' })`
  && {
    ${uppercase}
    font-weight: ${weight('medium')};
    font-size: 0.75rem;
    color: ${grayscale(4)};
    margin: 2rem 0 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${grayscale(8)};
  }
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

const TableDataStructure = styled(DataStructure)`
  flex-grow: 1;
`

const DescriptionHeading = styled(HttpHeading)`
  ${uppercase}
  font-weight: ${weight('medium')};
  font-size: 0.75rem;
  color: ${grayscale(7)};
  border-bottom: 1px solid ${grayscale(1)};
  margin: 1rem 0 0.5rem;
  padding-bottom: 0.5rem;
`

const Description = styled.p`
  font-size: 15px;
  margin: 1rem 0 0.5rem;
`

class EventsTable extends Component {
  state = { activeIndex: 0, activeEvent: this.props.events[0] }

  setActive = activeIndex => {
    this.setState({
      activeIndex,
      activeEvent: this.props.events[activeIndex],
    })
  }

  renderSample() {
    const { activeEvent } = this.state

    return (
      <Fragment>
        <br />
        <DescriptionHeading>{activeEvent.name} Event</DescriptionHeading>
        <Description>{activeEvent.description}</Description>
        <Json>{JSON.stringify(activeEvent.sample)}</Json>
      </Fragment>
    )
  }

  renderMobileSelector() {
    const { events } = this.props
    const { activeIndex } = this.state

    return (
      <div className="block">
        <SelectWrapper>
          <Select
            value={activeIndex}
            onChange={e => this.setActive(e.target.value)}
          >
            {events.map((event, i) => (
              <option value={i} key={i}>
                {event.name}
              </option>
            ))}
          </Select>
          <SelectCarot />
        </SelectWrapper>
      </div>
    )
  }

  renderDesktopSelector() {
    const { events } = this.props
    const { activeIndex } = this.state

    return (
      <EventsWrapper>
        <EventsHeading />
        <EventsHover>
          {events.map((event, i) => (
            <Event
              active={i === activeIndex}
              onClick={() => this.setActive(i)}
              key={i}
            >
              {event.name}
            </Event>
          ))}
        </EventsHover>
      </EventsWrapper>
    )
  }

  renderAttributes() {
    const { activeEvent } = this.state
    const jsonArray = map(activeEvent.attributes, ({ description }, name) => ({
      name,
      description,
    }))

    return <TableDataStructure title={' '} jsonArray={jsonArray} />
  }

  render() {
    return (
      <Row>
        <Right>{this.renderSample()}</Right>
        {this.renderMobileSelector()}
        <TableWrapper>
          {this.renderDesktopSelector()}
          {this.renderAttributes()}
        </TableWrapper>
      </Row>
    )
  }
}

export default EventsTable
