import React, { Component } from 'react'
import { map } from 'lodash'
import styled from 'styled-components'
import { font, weight } from 'utils/fonts'
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

const EventsWrapper = styled.div`
  padding: 0 0.75rem 0 0;
  display: none;
  ${mediaQuery('lg', `display: block;`)};
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

class EventsTable extends Component {
  state = { activeIndex: 0 }

  setActive = activeIndex => {
    this.setState({ activeIndex })
  }

  render() {
    const { events } = this.props
    const activeEvent = events[this.state.activeIndex]

    return (
      <Row>
        <Right>
          <br />
          <HttpHeading>&nbsp;</HttpHeading>
          <Json>{JSON.stringify(activeEvent.sample)}</Json>
        </Right>
        <div className="block">
          <SelectWrapper>
            <Select
              value={this.state.activeIndex}
              onChange={event => this.setActive(event.target.value)}
            >
              {events.map((event, i) => (
                <option value={i} key={i}>
                  {event.name}
                </option>
              ))}
            </Select>
            <i
              className="fa fa-caret-down"
              style={{
                position: `absolute`,
                right: `.5rem`,
                top: `.65rem`,
                color: grayscale(4),
                fontSize: `12px`,
              }}
            />
          </SelectWrapper>
        </div>
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
              {events.map((event, i) => (
                <Event
                  active={i === this.state.activeIndex}
                  onClick={() => this.setActive(i)}
                  key={i}
                >
                  {event.name}
                </Event>
              ))}
            </EventsHover>
          </EventsWrapper>
          <div id="attributes" style={{ flexGrow: 1 }}>
            <DataStructure
              title={`${activeEvent.name} Object`}
              jsonArray={map(
                activeEvent.attributes,
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
}

export default EventsTable
