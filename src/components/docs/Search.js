import React from 'react'
import styled from 'styled-components'
import { color, grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'
import Search, { serializeHit } from 'components/Search'

const SearchInput = styled.input`
  background: ${grayscale('white')};
  border: 1px solid ${grayscale(7)};
  border-radius: 2px;
  font: inherit;
  font-size: 0.833333333rem;
  padding: 0.45rem 0.5rem;
  width: 100%;
  outline: 0;

  &:focus {
    border-color: ${color('blue')};
    box-shadow: 0 0 0 1px ${color('blue')}, ${shadow('base')};
  }
`

const SearchResults = styled.ul`
  display: block;
  position: absolute;
  width: 100%;
  border-radius: 2px;
  background: ${grayscale('white')};
  margin: 0.166666667rem 0;
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow('base')};
  z-index: 9;
  max-height: 400px;
  overflow: auto;
  padding: 0;
  list-style: none;
`

// prettier-ignore
const SearchResult = styled(
  ({ isHighlighted, ...props }) => <li {...props} />
)`
  display: block;
  padding: 0.5rem .75rem;
  font-size: 0.888888889rem;
  font-weight: ${weight('medium')};
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${props => props.isHighlighted &&`
    background: ${grayscale('light')};
    color: ${grayscale(1)};
  `}
`

const Category = styled.div`
  font-size: 0.833333333rem;
  margin-top: 0.15rem;
  font-weight: ${weight('normal')};
`

const DocsSearch = ({ index, placeholder = '' }) => {
  return (
    <Search indexes={[index]}>
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        isOpen,
        hits,
        highlightedIndex,
      }) => (
        <div>
          <SearchInput
            {...getInputProps({
              placeholder: placeholder,
            })}
          />
          {isOpen &&
            hits.length > 0 && (
              <SearchResults {...getMenuProps()}>
                {hits.map((hit, index) => {
                  const { title, category, to } = serializeHit(hit)

                  return (
                    <SearchResult
                      key={to}
                      {...getItemProps({
                        item: hit,
                        isHighlighted: highlightedIndex === index,
                      })}
                    >
                      {title}
                      <Category>{category}</Category>
                    </SearchResult>
                  )
                })}
              </SearchResults>
            )}
        </div>
      )}
    </Search>
  )
}

export default DocsSearch
