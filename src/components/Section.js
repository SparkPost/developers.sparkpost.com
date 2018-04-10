import React from 'react'
import styled, { css } from 'styled-components'
import { grayscale } from '../utils/colors'

import hex from '../assets/hex.png'

const Section = styled.section`
  padding: 4rem 0 5rem 0;

  ${props => props.dark && css`
    background-color: ${grayscale('dark')};
    background-image: url(${hex});
    background-size: cover;
  `}

  ${props => props.light && css`
    background-color: ${grayscale('light')};
  `}
`

export default Section