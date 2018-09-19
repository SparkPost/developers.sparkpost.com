/**
 * Render a result from algolia
 */
import React from 'react'
import styled from 'styled-components'
import { Snippet } from 'react-instantsearch/dom'
import { grayscale } from 'utils/colors'
import { weight } from 'utils/fonts'
import { serializeHit } from 'components/Search'

const Description = styled.div`
  font-size: 0.722222222rem;
  margin-top: 0.15rem;
  font-weight: ${weight('normal')};
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
        {category && <Description>{category}</Description>}
        {content && (
          <Description>
            <Snippet
              attribute="content"
              hit={hit}
              tagName="strong"
            />
          </Description>
        )}
      </li>
    )
  }
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

export default Hit
