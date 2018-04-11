import React from 'react'
import styled from 'styled-components'
import { grayscale, color } from '../utils/colors'

import Link from './Link'

const Wrapper = styled(Link.Unstyled)`
  border: 1px solid ${grayscale(7)};
  display: block;
  height: 75px;
  padding: 8px 12px;
  margin: 6px 0;
  line-height: 56px;
  transition: .15s;

  &:hover {
    border-color: ${color('orange')};
  }
`

export default props => <Wrapper>{props.title}</Wrapper>
