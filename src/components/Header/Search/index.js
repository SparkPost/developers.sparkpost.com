import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Snippet } from 'react-instantsearch/dom'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'
import Search, { serializeHit } from 'components/Search'
import FocusableInput from './FocusableInput'

// prettier-ignore
const SearchWrapper = styled.div`
  display: none;
  text-align: right;
  white-space: normal;
  padding-right: 0.5rem;

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

const SearchResults = styled.ul`
  display: block;
  position: absolute;
  right: 0;
  text-align: left;
  width: 500px;
  border-radius: 2px;
  background: ${grayscale('white')};
  margin: 0.35rem 0 0 0;
  box-shadow: ${shadow('deep')};
  border: 1px solid ${grayscale(8)};
  z-index: 9;
  max-height: 400px;
  overflow: auto;
  padding: 0;
  list-style: none;
`

const SectionTitle = styled(({ indexName, ...props }) => (
  <li {...props}>
    <h5>
      {indexName === 'api_reference' && 'API Reference'}
      {indexName === 'production_site_posts_support_article' && 'Documentation'}
      {indexName === 'production_site_posts_post' && 'Blog'}
    </h5>
  </li>
))`
  display: block;

  h5 {
    margin: 0;
    padding: 0.35rem 0.5rem;
    color: ${grayscale(4)};
    font-size: 0.85rem;
    display: block;
    border-top: 1px solid ${grayscale(9)};
    border-bottom: 1px solid ${grayscale(9)};
  }
`

// prettier-ignore
const Hit = styled(
  ({ hit, isHighlighted, ...props }) => {
    const {
      title,
      category,
      content,
    } = serializeHit(hit)

    return (
      <li {...props}>
        {title}
        {category && <Category>{category}</Category>}
        {content && (
          <Category>
            {
              <Snippet
                attribute="content"
                hit={hit}
                tagName="strong"
              />
            }
          </Category>
        )}
      </li>
    )
  }
)`
  display: block;
  padding: 0.5rem 1rem;
  font-size: .95rem;
  font-weight: ${weight('medium')};
  cursor: pointer;

  ${props => props.isHighlighted &&`
    background: ${grayscale('light')};
    color: ${grayscale(1)};
  `}
`

const Category = styled.div`
  font-size: 0.9rem;
  margin-top: 0.15rem;
  font-weight: ${weight('normal')};
`

const UniversalSearch = () => {
  return (
    <SearchWrapper>
      <Search
        algolia={{ hitsPerPage: 3 }}
        indexes={[
          'api_reference',
          'production_site_posts_support_article',
          {
            indexName: 'production_site_posts_post',
            config: {
              facetFilters:
                '[["taxonomies_hierarchical.category.lvl0:Developer"]]',
            },
          },
        ]}
      >
        {({
          getInputProps,
          getMenuProps,
          getItemProps,
          isOpen,
          hits: indexes,
          highlightedIndex,
        }) => {
          let hitIndex = -1
          return (
            <div>
              <FocusableInput {...getInputProps({ placeholder: 'Search' })} />
              {isOpen && (
                <SearchResults {...getMenuProps()}>
                  {indexes.map(
                    ({ index: indexName, hits }) =>
                      !!hits.length && (
                        <Fragment key={indexName}>
                          <SectionTitle indexName={indexName} />
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
                </SearchResults>
              )}
            </div>
          )
        }}
      </Search>
    </SearchWrapper>
  )
}

export default UniversalSearch
