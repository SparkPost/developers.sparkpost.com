import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from '../../utils/colors'
import { uppercase, weight, monospace } from '../../utils/fonts'
import { Container, Row, Column } from '../Grid'
import Link from '../Link'


const SearchInput = styled.input`
  background: ${grayscale('white')};
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  border-radius: 2px;
  font: inherit;
  font-size: .888888889rem;
  padding: .5rem;
  width: 100%;
  outline: 0;

  &:focus {
    border-color: ${color('blue')};
    box-shadow: 0 0 0 1px ${color('blue')}, ${shadow(1)};
  }
`

const SearchResults = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  position: absolute;
  width: 100%;
  border-radius: 2px;
  background: ${grayscale('white')};
  margin: .166666667rem 0;
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  z-index: 9;
`

const SearchResult = styled(Link.Unstyled)`
  display: block;
  padding: .5rem 1rem;
  font-size: .833333333rem;

  &:hover {
    background: ${grayscale('light')};
    color: ${grayscale(1)};
  }
`

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = { visible: false }
  }

  toggleResults = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <div>
        <SearchInput placeholder="Search something" onFocus={this.toggleResults} onBlur={this.toggleResults} />
        <SearchResults visible={this.state.visible}>
          <SearchResult>Substitution Data </SearchResult>
          <SearchResult>Substitution Syntax Examples</SearchResult>
        </SearchResults>
      </div>
    )
  }
}

export default Search