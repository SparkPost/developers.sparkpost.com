/**
 * Render multi-index results from algolia
 *
 * returns an array of `li` tags
 *
 * Usage:
 *
 * <MultiIndexResults
 *   indexes={indexHitsFromAlgolia}
 *   indexLabels={{
 *     index_name: 'Index Label'
 *   }}
 *   highlightedIndex={highlightedIndex}
 *   getItemProps={getItemProps}
 * />
 */
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { grayscale } from 'utils/colors'
import Hit from './Hit'

const SectionTitle = styled(({ indexLabels, indexName, ...props }) => (
  <li {...props}>
    <h5>{indexLabels[indexName]}</h5>
  </li>
))`
  display: block;

  h5 {
    margin: 0;
    padding: 0.35rem 0.5rem;
    color: ${grayscale(4)};
    font-size: 0.777777778rem;
    display: block;
    border-top: 1px solid ${grayscale(9)};
    border-bottom: 1px solid ${grayscale(9)};
  }
`

const MultiIndexResults = ({
  indexes,
  indexLabels,
  getItemProps,
  highlightedIndex,
}) => {
  let hitIndex = -1

  return (
    <Fragment>
      {indexes.map(
        ({ index: indexName, hits }) =>
          !!hits.length && (
            <Fragment key={indexName}>
              <SectionTitle indexName={indexName} indexLabels={indexLabels} />
              {hits.map(hit => {
                hitIndex++
                return (
                  <Hit
                    key={hitIndex}
                    hit={hit}
                    {...getItemProps({
                      item: hit,
                      isHighlighted: hitIndex === highlightedIndex,
                    })}
                  />
                )
              })}
            </Fragment>
          )
      )}
    </Fragment>
  )
}

export default MultiIndexResults
