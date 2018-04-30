import React from 'react'
import styled from 'styled-components'
import { grayscale, color } from '../utils/colors'
import { weight } from '../utils/fonts'

import Link from './Link'

const Wrapper = styled(Link.Unstyled)`
  border: 1px solid ${grayscale(7)};
  display: block;
  line-height: 1.5;
  padding: .833333333rem 1rem;
  margin: .333333333rem 0;
  font-size: .888888889rem;
  font-weight: ${weight('medium')};

  &:hover {
    border-color: ${color('orange')};
  }
`

const Img = styled.img`
  height: 2rem;
  vertical-align: middle;
  margin-right: 1rem;
`

export default ({ img, title }) => (
  <Wrapper>{img && <Img src={img} alt={title} />}{title}</Wrapper>
)
