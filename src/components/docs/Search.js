import React, { Component } from 'react'
import { push } from 'gatsby'
import styled from 'styled-components'
import { isEqual } from 'lodash'
import { InstantSearch, Configure } from 'react-instantsearch/dom'
import { connectAutoComplete } from 'react-instantsearch/connectors'
import Autosuggest from 'react-autosuggest'
import { color, grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'
import Link from 'components/Link'
import EventListener from 'react-event-listener'

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

    + ${SlashIcon} {
      opacity: 0;
    }
  }
`

class FocusableInput extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()

    this.state = {
      isFocused: false,
    }
  }

  render() {
    return (
      <div>
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
      </div>
    )
  }
}

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
const SearchResult = styled(
  ({ isHighlighted, ...props }) => <Link.Unstyled {...props} />
)`
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

function renderSuggestion(hit, { isHighlighted }) {
  const { title, category, href } = serializeHit(hit)

  return (
    <SearchResult to={href} isHighlighted={isHighlighted}>
      {title}
      <Category>{category}</Category>
    </SearchResult>
  )
}

class AutoComplete extends Component {
  state = { value: '', hits: [] }

  onChange = (event, { newValue, method }) => {
    if (method === 'type' || method === 'escape') {
      this.setState({ value: newValue })
    }
  }

  onSuggestionsFetchRequested = ({ reason, value }) => {
    return this.props.refine(value)
  }

  onSuggestionsClearRequested = () => {
    this.setState({ hits: [] })
  }

  componentDidUpdate() {
    // if the new hits we have don't match our stored hits, update our hits
    if (!isEqual(this.props.hits, this.state.hits)) {
      this.setState({ hits: this.props.hits })
    }
  }

  render() {
    const { value, hits } = this.state

    const inputProps = {
      placeholder: 'Search API reference',
      value,
      onChange: this.onChange,
    }

    return (
      <Autosuggest
        inputProps={inputProps}
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={hit => serializeHit(hit).title}
        renderSuggestion={renderSuggestion}
        renderInputComponent={props => <FocusableInput {...props} />}
        renderSuggestionsContainer={({ containerProps, children, query }) =>
          query.length > 0 &&
          children && (
            <SearchResults {...containerProps}>{children}</SearchResults>
          )
        }
        onSuggestionSelected={(e, { suggestion: hit }) => {
          const { href } = serializeHit(hit)

          // get the pathname with the hash
          let pathname = href
          if (pathname.split(`#`).length > 1) {
            pathname = pathname
              .split(`#`)
              .slice(0, -1)
              .join(``)
          }
          // check if we are on the same page as the select result
          if (pathname === window.location.pathname) {
            const hashFragment = href
              .split(`#`)
              .slice(1)
              .join(`#`)
            const element = hashFragment
              ? document.getElementById(hashFragment)
              : null

            // scroll to the correct element
            if (element !== null) {
              element.scrollIntoView()
              return true
            } else {
              window.scrollTo(0, 0)
              return true
            }
          }

          push(href)
        }}
      />
    )
  }
}

const ConnectedAutoComplete = connectAutoComplete(AutoComplete)

const Search = () => (
  <InstantSearch
    appId="SFXAWCYDV8"
    apiKey="9ba87280f36f539fcc0a318c2d4fcfe6"
    indexName="api_docs_dev"
  >
    <Configure hitsPerPage={10} />
    <ConnectedAutoComplete />
  </InstantSearch>
)

export default Search
