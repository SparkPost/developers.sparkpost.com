import React from 'react'
import styled, { css } from 'styled-components'
import { grayscale } from '../utils/colors'

import hex from '../assets/hex.png'

const paddingMap = {
  none: { top: 0, bottom: 0 },
  xs:   { top: 2, bottom: 3 },
  sm:   { top: 3, bottom: 4 },
  md:   { top: 4, bottom: 5 },
  lg:   { top: 5, bottom: 6 }
}

const Section = styled.section`

  ${({ spacing = 'md', spacingTop, spacingBottom }) => {
    const top = paddingMap[spacingTop || spacing].top
    const bottom = paddingMap[spacingBottom || spacing].bottom

    return `padding: ${top}rem 0 ${bottom}rem;`

  }}

  ${props => !props.borderless && `border-bottom: 1px solid ${grayscale(7)};`}

  ${props => props.dark && css`
    background-color: ${grayscale('dark')};
    background-image: url(${hex});
    background-size: cover;
    color: ${grayscale('white')};
  `}

  ${props => props.light && css`
    background-color: ${grayscale('light')};
  `}

  ${props => props.small && css`
    padding: 1rem 0 2rem 0;
  `}
`

export default Section