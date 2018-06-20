import React from 'react'
import styled from 'styled-components'
import { grayscale, color } from 'utils/colors'
import { weight } from 'utils/fonts'
import { snakeCase } from 'lodash'

import elixir from 'assets/libraries/elixir.png'
import go from 'assets/libraries/go.png'
import java from 'assets/libraries/java.png'
import node_js from 'assets/libraries/node.png'
import php from 'assets/libraries/php.png'
import python from 'assets/libraries/python.png'

import Link from 'components/Link'

const icons = { elixir, go, java, node_js, php, python }

const Wrapper = styled(Link.Unstyled)`
  border: 1px solid ${grayscale(7)};
  background: ${grayscale('white')};
  display: block;
  line-height: 1.5;
  padding: 0.833333333rem 1rem;
  margin: 0.333333333rem 0;
  font-size: 0.888888889rem;
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
  <Wrapper>
    {(img || icons[snakeCase(title)]) && (
      <Img src={img || icons[snakeCase(title)]} alt={title} />
    )}
    {title}
  </Wrapper>
)
