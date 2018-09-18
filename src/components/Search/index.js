import React, { Component } from 'react'
import { isString } from 'lodash'
import { push } from 'gatsby'
import isAbsoluteUrl from 'is-absolute-url'
import { InstantSearch, Configure, Index } from 'react-instantsearch/dom'
import { connectAutoComplete } from 'react-instantsearch/connectors'
import Downshift from 'downshift'
import PropTypes from 'prop-types'
import serializeHit from './serializeHit'

function defaultOnChange(hit) {
  const { to } = serializeHit(hit)

  // catch external links and send them out
  if (isAbsoluteUrl(to)) {
    return (window.location.href = to)
  }

  // get the pathname without the hash
  let pathname = to
  if (pathname.split(`#`).length > 1) {
    pathname = pathname
      .split(`#`)
      .slice(0, -1)
      .join(``)
  }

  // check if we are on the same page as the select result
  if (pathname === window.location.pathname) {
    const hashFragment = to
      .split(`#`)
      .slice(1)
      .join(`#`)
    const element = hashFragment ? document.getElementById(hashFragment) : null

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
  push(to)
}

const AutoComplete = connectAutoComplete(({ children, downshift, ...algoliaProps }) => {
  return (
    <Downshift
      itemToString={(h) => h ? serializeHit(h).to : h}
      onChange={defaultOnChange} {...downshift}
    >
      {({ getInputProps: downshiftGetInputProps, ...downshiftProps }) => {
        // be default, refine the search when the input value changes
        const getInputProps = props =>
          downshiftGetInputProps({
            onChange(e) {
              algoliaProps.refine(e.target.value)
            },
            value: undefined,
            ...props,
          })

        return children({
          getInputProps,
          ...downshiftProps,
          ...algoliaProps,
        })
      }}
    </Downshift>
  )
})

class Search extends Component {
  render() {
    const { indexes, algolia, children, downshift } = this.props

    // convert all indexes to be objects with a `index` prop and an optional `config` prop
    const indexesObjects = indexes.map(
      index => (isString(index) ? { index } : index)
    )
    // first index without a config
    const firstIndex = indexesObjects.find(index => !index.config).index

    return (
      <InstantSearch
        appId="SFXAWCYDV8"
        apiKey="9ba87280f36f539fcc0a318c2d4fcfe6"
        indexName={firstIndex}
      >
        <Configure hitsPerPage={10} {...algolia} />
        {indexesObjects
          .filter(({ index }) => index !== firstIndex)
          .map(({ index, config }) => (
            <Index indexName={index}>
              {config && <Configure {...config} />}
            </Index>
          ))}
        <AutoComplete downshift={downshift}>{children}</AutoComplete>
      </InstantSearch>
    )
  }
}

Search.propTypes = {
  indexes: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
}

export default Search

export { serializeHit }
