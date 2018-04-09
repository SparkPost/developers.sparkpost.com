import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { grayscale, color } from '../utils/colors'
import { Container, Row, Column } from './Grid'

const Header = styled.header`
  background-color: ${grayscale('light')};
  padding: 0 40px;
`

const InnerContainer = Row.extend`
  justify-content: space-between;
`

const Nav = styled.nav``

const NavItem = styled.span`
  padding: 8px 14px;
  font-weight: 800;
  display: inline-block;
  line-height: 36px;
  ${props => props.active && 'border-top: 4px solid ' + color('orange')};
`

const SecondaryNav = styled.div`
  text-align: right;
`

const SecondaryNavItem = styled.span`
  padding: 8px 14px;
  display: inline-block;
  line-height: 36px;
`

export default ({ path }) => (
  <Header>
    <InnerContainer>
      <Nav>
        <NavItem active={path === '/'}>API Docs</NavItem>
        <NavItem active={path === '/libraries'}>Libraries</NavItem>
        <NavItem active={path === '/community'}>Community</NavItem>
        <NavItem active={path === '/changelog'}>Changelog</NavItem>
      </Nav>
      <SecondaryNav>
        <SecondaryNavItem>Blog</SecondaryNavItem>
        <SecondaryNavItem>Support</SecondaryNavItem>
        <SecondaryNavItem>Your Dashboard</SecondaryNavItem>
      </SecondaryNav>
    </InnerContainer>
  </Header>
)
