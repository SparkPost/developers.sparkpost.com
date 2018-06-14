import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { InstantSearch } from 'react-instantsearch/dom'
import {
  connectSearchBox,
  connectStateResults,
} from 'react-instantsearch/connectors'
import { color, grayscale, shadow } from 'utils/colors'
import { uppercase, weight, monospace } from 'utils/fonts'
import { Container, Row, Column } from 'components/Grid'
import Link from 'components/Link'

const SearchInput = styled.input`
  background: ${grayscale('white')};
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  border-radius: 2px;
  font: inherit;
  font-size: 0.888888889rem;
  padding: 0.5rem;
  width: 100%;
  outline: 0;

  &:focus {
    border-color: ${color('blue')};
    box-shadow: 0 0 0 1px ${color('blue')}, ${shadow(1)};
  }
`

const SearchResults = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  border-radius: 2px;
  background: ${grayscale('white')};
  margin: 0.166666667rem 0;
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  z-index: 9;
  max-height: 400px;
  overflow: auto;
`

const SearchResult = styled(Link.Unstyled)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.833333333rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props =>
    props.active &&
    `
    background: ${grayscale('light')};
    color: ${grayscale(1)};
  `};
`

const Section = styled.div`
  font-size: 0.666666667rem;
  margin-top: 0.25rem;
`

function serializeHit(hit) {
  if (hit.actionName) {
    return {
      href: hit.objectID,
      title: hit.actionName,
      section:
        hit.actionName === hit.resGroupName ? hit.resName : hit.resGroupName,
    }
  } else if (hit.resName) {
    return { href: hit.objectID, title: hit.resName, section: hit.resGroupName }
  } else if (hit.resGroupName) {
    return {
      href: hit.objectID,
      title: hit.resGroupName,
      section: 'SparkPost API',
    }
  } else {
    return {
      href: hit.objectID,
      title: hit.sectionName,
      section: 'SparkPost API',
    }
  }
}

const SearchBox = connectSearchBox(
  ({ currentRefinement, refine, ...props }) => (
    <SearchInput
      type="text"
      placeholder="Search something"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      {...props}
    />
  )
)

const Hits = connectStateResults(
  ({
    searchState,
    searchResults,
    hitComponent: Hit,
    active,
    activeIndex,
    setActiveIndex,
  }) =>
    active &&
    searchResults &&
    searchState.query &&
    searchResults.nbHits !== 0 ? (
      <SearchResults>
        {searchResults.hits.map((hit, i) => (
          <Hit
            key={i}
            hit={hit}
            active={i === activeIndex}
            setActive={() => {
              setActiveIndex(i)
            }}
          />
        ))}
      </SearchResults>
    ) : (
      <div />
    )
)

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = { active: false, activeIndex: -1 }
  }

  toggleActive = () => {
    this.setState({ active: !this.state.active, activeIndex: -1 })
  }

  setActiveIndex = activeIndex => {
    this.setState({ activeIndex })
  }

  render() {
    return (
      <InstantSearch
        appId="SFXAWCYDV8"
        apiKey="9ba87280f36f539fcc0a318c2d4fcfe6"
        indexName="APIDocsProd"
      >
        <SearchBox
          onKeyDown={e => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              this.setState(state => ({
                ...state,
                activeIndex: state.activeIndex + 1,
              }))
            } else if (e.key === 'ArrowUp') {
              e.preventDefault()
              this.setState(state => ({
                ...state,
                activeIndex: state.activeIndex - 1,
              }))
            }

            if (e.key == 'Enter') {
            }
          }}
          onFocus={this.toggleActive}
          onBlur={this.toggleActive}
        />
        <Hits
          active={this.state.active}
          activeIndex={this.state.activeIndex}
          setActiveIndex={this.setActiveIndex}
          hitComponent={({ hit, active, setActive }) => {
            const { title, section, href } = serializeHit(hit)

            return (
              <SearchResult to={href} active={active} onMouseEnter={setActive}>
                {title}
                <Section>{section}</Section>
              </SearchResult>
            )
          }}
        />
        <div />
      </InstantSearch>
    )
  }
}

export default Search
