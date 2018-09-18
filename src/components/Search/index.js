import React, { Component } from 'react'
import { isString } from 'lodash'
import { push } from 'gatsby'
import isAbsoluteUrl from 'is-absolute-url'
import { InstantSearch, Configure, Index } from 'react-instantsearch/dom'
import { connectAutoComplete } from 'react-instantsearch/connectors'
import Downshift from 'downshift'
import PropTypes from 'prop-types'

function onChange(hit) {
  let href = hit.to || hit.permalink || hit.objectID

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
}

const AutoComplete = ({ children, downshiftConfig, ...algoliaProps }) => {
  return (
    <Downshift
      onChange={onChange}
      {...downshiftConfig}
    >
      {({ getInputProps: downshiftGetInputProps, ...downshiftProps }) => {
        // be default, refine the search when the input value changes
        const getInputProps = (props) => downshiftGetInputProps({
          onChange(e) {
            algoliaProps.refine(e.target.value)
          },
          value: undefined,
          ...props
        })



        return children({
          getInputProps,
          ...downshiftProps,
          ...algoliaProps
        })
      }}
    </Downshift>
  )
}

const ConnectedAutoComplete = connectAutoComplete(AutoComplete)

class Search extends Component {
  render() {
    const { indexes, config, children, ...downshiftConfig } = this.props

    // convert all indexes to be objects with a `index` prop and an optional `config` prop
    const indexesObjects = indexes.map((index) => isString(index) ? { index } : index)
    // first index with out a config
    const firstIndex = indexesObjects.find((index) => !index.config).index

    return (
      <InstantSearch
        appId="SFXAWCYDV8"
        apiKey="9ba87280f36f539fcc0a318c2d4fcfe6"
        indexName={firstIndex}
      >
        <Configure
          hitsPerPage={10}
          {...config}
        />
        {indexesObjects
          .filter(({ index }) => index !== firstIndex)
          .map(({ index, config }) => (
            <Index indexName={index}>{config && <Configure {...config} />}</Index>
          ))
        }
        <ConnectedAutoComplete downshiftConfig={downshiftConfig}>{children}</ConnectedAutoComplete>
      </InstantSearch>
    )
  }
}

Search.propTypes = {
  indexes: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
};

export default Search
