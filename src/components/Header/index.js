import React from 'react'
import styled, { css } from 'styled-components'
import { grayscale, color, shadow } from '../../utils/colors'
import { Container, Row, Column } from '../Grid'

import Logo from './Logo'
import Nav from './Nav'
import SecondaryNav from './SecondaryNav'

const Header = styled.header`
  background-color: ${grayscale('light')};
  transition: .25s;

  ${props => props.isSticky && css`
    box-shadow: ${shadow(1)};
    background-color: ${grayscale('white')};
  `}
`

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: .833333333rem;
  display: flex;
`

const Primary = styled.div`
  display: flex;
  align-items: center;
`

export default ({ path, style, isSticky }) => (
  <Header isSticky={isSticky}>
    <Wrapper>
      <Primary>
        <Logo />
        <Nav path={path} />
      </Primary>
      <SecondaryNav />
    </Wrapper>
  </Header>
)
