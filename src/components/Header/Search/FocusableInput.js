import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import EventListener from 'react-event-listener'
import { color, grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'

const SlashIcon = styled.div.attrs({ children: '/' })`
  color: ${grayscale(6)};
  border: 1px solid ${grayscale(7)};
  border-radius: 2px;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  line-height: 0.9rem;
  text-align: center;
  font-size: 0.555555556rem;
  font-weight: ${weight('bold')};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.5rem;
  margin: auto;
  transition: opacity 0.05s;
`

const SearchInput = styled.input`
  background: ${grayscale('white')};
  border: 1px solid ${grayscale(7)};
  border-radius: 2px;
  font: inherit;
  font-size: 0.833333333rem;
  padding: 0.45rem 0.5rem;
  outline: 0;
  transition: 0.2s;
  width: 9rem;
  margin-top: 1px;

  &:focus {
    width: 100%;
    border-color: ${color('blue')};
    box-shadow: 0 0 0 1px ${color('blue')}, ${shadow('base')};

    + ${SlashIcon} {
      opacity: 0;
    }
  }
`

class FocusableInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  render() {
    return (
      <Fragment>
        <EventListener
          target="window"
          onKeydown={e => {
            if (e.key === '/' && e.target.tagName === 'BODY') {
              e.preventDefault()
              this.inputRef.current.focus()
            }

            if (
              e.key === 'Escape' &&
              e.target === this.inputRef.current &&
              this.inputRef.current.value.length === 0
            ) {
              this.inputRef.current.blur()
            }
          }}
        />
        <SearchInput {...this.props} innerRef={this.inputRef} />
        <SlashIcon />
      </Fragment>
    )
  }
}

export default FocusableInput
