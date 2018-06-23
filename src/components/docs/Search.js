import React from 'react'
import { navigateTo } from 'gatsby'
import styled from 'styled-components'
import { InstantSearch, Configure } from 'react-instantsearch/dom'
import { connectAutoComplete } from 'react-instantsearch/connectors'
import Autosuggest from 'react-autosuggest'
import { color, grayscale, shadow } from 'utils/colors'
import Link from 'components/Link'

const SearchInput = styled.input`
  background: ${grayscale('white')};
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};
  border-radius: 2px;
  font: inherit;
  font-size: 0.833333333rem;
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

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin: 0;
    padding: 0;
  }
`

// prettier-ignore
const SearchResult = styled(Link.Unstyled)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.833333333rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props => props.isHighlighted &&`
    background: ${grayscale('light')};
    color: ${grayscale(1)};
  `}
`

const Category = styled.div`
  font-size: 0.666666667rem;
  margin-top: 0.15rem;
`

function serializeHit(hit) {
  if (hit.actionName) {
    return {
      href: hit.objectID,
      title: hit.actionName,
      category:
        hit.actionName === hit.resGroupName ? hit.resName : hit.resGroupName,
    }
  } else if (hit.resName) {
    return {
      href: hit.objectID,
      title: hit.resName,
      category: hit.resGroupName,
    }
  } else if (hit.resGroupName) {
    return {
      href: hit.objectID,
      title: hit.resGroupName,
      category: 'SparkPost API',
    }
  } else {
    return {
      href: hit.objectID,
      title: hit.sectionName,
      category: 'SparkPost API',
    }
  }
}

const AutoComplete = connectAutoComplete(
  ({ hits, currentRefinement, refine }) => (
    <Autosuggest
      inputProps={{
        placeholder: 'Search API reference',
        value: currentRefinement,
        onChange: () => {},
      }}
      renderInputComponent={props => <SearchInput {...props} />}
      renderSuggestionsContainer={({ containerProps, children, query }) =>
        query.length > 0 &&
        children && (
          <SearchResults {...containerProps}>{children}</SearchResults>
        )
      }
      suggestions={hits}
      onSuggestionsFetchRequested={({ value }) => refine(value)}
      onSuggestionsClearRequested={() => refine('')}
      getSuggestionValue={hit => hit}
      renderSuggestion={(hit, { isHighlighted }) => {
        const { title, category, href } = serializeHit(hit)

        return (
          <SearchResult to={href} isHighlighted={isHighlighted}>
            {title}
            <Category>{category}</Category>
          </SearchResult>
        )
      }}
      onSuggestionSelected={(e, { suggestion: hit }) => {
        const { href } = serializeHit(hit)
        navigateTo(href)
      }}
    />
  )
)

const Search = () => (
  <InstantSearch
    appId="SFXAWCYDV8"
    apiKey="9ba87280f36f539fcc0a318c2d4fcfe6"
    indexName="APIDocsProd"
  >
    <Configure hitsPerPage={10} />
    <AutoComplete />
  </InstantSearch>
)

export default Search
