import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale, shadow } from 'utils/colors'
import Search from 'components/Search'
import MultiIndexResults from 'components/Search/MultiIndexResults'
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
          return (
            <div>
              <FocusableInput {...getInputProps({ placeholder: 'Search' })} />
              {isOpen && (
                <SearchResults {...getMenuProps()}>
                  <MultiIndexResults
                    indexes={indexes}
                    indexLabels={{
                      api_reference: 'API Reference',
                      production_site_posts_support_article: 'Documentation',
                      production_site_posts_post: 'Blog',
                    }}
                    highlightedIndex={highlightedIndex}
                    getItemProps={getItemProps}
                  />
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
