import React, { Fragment, Component } from 'react'
import styled from 'styled-components'
import EventListener from 'react-event-listener'
import { Snippet } from 'react-instantsearch/dom'
import { mediaQuery } from 'utils/breakpoint'
import { color, grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'
import Search, { serializeHit } from 'components/Search'

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
    box-shadow: 0 0 0 1px ${color('blue')}, ${shadow('base')};

    + ${SlashIcon} {
      opacity: 0;
    }
  }
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

const SectionTitle = styled(({ children, ...props }) => (
  <li {...props}>
    <h5>{children}</h5>
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

// prettier-ignore
const SearchResult = styled(
  ({ isHighlighted, ...props }) => <li {...props} />
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

const UniversalSearch = () => {
  return (
    <SearchWrapper>
      <Search
        algolia={{ hitsPerPage: 3 }}
        indexes={[
          'api_reference',
          'production_site_posts_support_article',
          {
            index: 'production_site_posts_post',
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
                        <Fragment>
                          <SectionTitle>
                            {indexName === 'api_reference' && 'API Reference'}
                            {indexName ===
                              'production_site_posts_support_article' &&
                              'Documentation'}
                            {indexName === 'production_site_posts_post' &&
                              'Blog'}
                          </SectionTitle>
                          {hits.map(hit => {
                            const {
                              to,
                              title,
                              category,
                              content,
                            } = serializeHit(hit)
                            hitIndex++

                            return (
                              <SearchResult
                                key={to}
                                {...getItemProps({
                                  item: hit,
                                  isHighlighted: highlightedIndex === hitIndex,
                                })}
                              >
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
                              </SearchResult>
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
