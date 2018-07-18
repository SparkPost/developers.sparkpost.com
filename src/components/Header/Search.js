import React, { Component, Fragment } from 'react'
import { push } from 'gatsby'
import styled from 'styled-components'
import { isEqual } from 'lodash'
import isAbsoluteUrl from 'is-absolute-url'
import {
  InstantSearch,
  Index,
  Configure,
  Snippet,
} from 'react-instantsearch/dom'
import { connectAutoComplete } from 'react-instantsearch/connectors'
import Autosuggest from 'react-autosuggest'
import { color, grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'
import { mediaQuery } from 'utils/breakpoint'
import Link from 'components/Link'
import EventListener from 'react-event-listener'

// prettier-ignore
const SearchWrapper = styled.div`
  display: none;
  text-align: right;
  white-space: normal;

  & > div {
    max-width: 20rem;
  }

  & > div, & > div > div {
    width: 100%;
  }

  ${mediaQuery('md', `
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `)}
`

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

const SearchResults = styled.div`
  display: block;
  position: absolute;
  right: 0;
  text-align: left;
  width: 500px;
  border-radius: 2px;
  background: ${grayscale('white')};
  margin: 0.35rem 0 0 0;
  box-shadow: ${shadow(2)};
  border: 1px solid ${grayscale(8)};
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

const SectionTitle = styled.h5`
  margin: 0;
  padding: 0.35rem 0.5rem;
  color: ${grayscale(4)};
  font-size: 0.777777778rem;
  display: block;
  border-top: 1px solid ${grayscale(9)};
  border-bottom: 1px solid ${grayscale(9)};
`

// prettier-ignore
const SearchResult = styled(
  ({ isHighlighted, ...props }) => <div {...props} />
)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: .833333333rem;
  font-weight: ${weight('medium')};
  cursor: pointer;

  ${props => props.isHighlighted &&`
    background: ${grayscale('light')};
    color: ${grayscale(1)};
  `}
`

const Category = styled.div`
  font-size: 0.722222222rem;
  margin-top: 0.15rem;
  font-weight: ${weight('normal')};
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
  let title, category, content
  // documentation
  if (hit.post_type === 'support_article') {
    title = hit.post_title
    content = hit.content
  }
  // blog post
  else if (hit.post_type === 'post') {
    title = hit.post_title
    content = hit.content
  }
  // api reference
  else {
    const { title: hitTitle, category: hitCategory } = serializeHit(hit)
    title = hitTitle
    category = hitCategory
  }

  return (
    <SearchResult isHighlighted={isHighlighted}>
      {title}
      {category && <Category>{category}</Category>}
      {content && (
        <Category>
          {<Snippet attribute="content" hit={hit} tagName="strong" />}
        </Category>
      )}
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
      placeholder: 'Search',
      value,
      onChange: this.onChange,
    }

    return (
      <Autosuggest
        id="universal"
        inputProps={inputProps}
        multiSection={true}
        renderSectionTitle={section =>
          section.hits.length > 0 && (
            <SectionTitle>
              {section.index === 'api_docs_dev' && 'API Reference'}
              {section.index === 'production_site_posts_support_article' &&
                'Documentation'}
              {section.index === 'production_site_posts_post' && 'Blog'}
            </SectionTitle>
          )
        }
        getSectionSuggestions={section => section.hits}
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={hit => hit}
        renderSuggestion={renderSuggestion}
        renderInputComponent={props => <FocusableInput {...props} />}
        renderSuggestionsContainer={({ containerProps, children, query }) =>
          query.length > 0 &&
          children && (
            <SearchResults {...containerProps}>{children}</SearchResults>
          )
        }
        onSuggestionSelected={(e, { suggestion: hit }) => {
          let href
          if (hit.post_type) {
            href = hit.permalink
          } else {
            const { href: hitHref } = serializeHit(hit)
            href = hitHref
          }

          // catch external links and send them out
          if (isAbsoluteUrl(href)) {
            return (window.location.href = href)
          }

          // get the pathname without the hash
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

            // if we are, scroll to the correct element
            if (element !== null) {
              element.scrollIntoView()
              return true
            } else {
              window.scrollTo(0, 0)
              return true
            }
          }

          // otherwise just navigate to the relative path
          push(href)
        }}
      />
    )
  }
}

const ConnectedAutoComplete = connectAutoComplete(AutoComplete)

const Search = () => (
  <SearchWrapper>
    <InstantSearch
      appId="SFXAWCYDV8"
      apiKey="9ba87280f36f539fcc0a318c2d4fcfe6"
      indexName="api_docs_dev"
    >
      <Index indexName="production_site_posts_support_article" />
      <Index indexName="production_site_posts_post" />
      <Configure hitsPerPage={3} />
      <ConnectedAutoComplete />
    </InstantSearch>
  </SearchWrapper>
)

export default Search
