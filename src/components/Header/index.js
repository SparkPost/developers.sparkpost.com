import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale, shadow } from 'utils/colors'
import Button from 'components/Button'
import Logo from './Logo'
import Nav from './Nav'
import NavLink from './NavLink'
import Search from './Search'
import StatusIcon from './StatusIcon'
import Hamburger from './Hamburger'

// prettier-ignore
const Wrapper = styled.header`
  background: ${grayscale('light')};
  transition: background 0.25s, box-shadow 0.25s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  font-size: 0.9rem;
  padding: 1rem 1rem;
  white-space: nowrap;

  ${props => props.isSticky && css`
    box-shadow: ${shadow('base')};
    background-color: ${grayscale('white')};
  `}

  ${mediaQuery('md', `
    padding: 0 1rem;
  `)}
`

const NavButton = styled(Button)`
  margin: 0 0 0 0.5rem;
  line-height: 0.9rem;
`

// prettier-ignore
const NavWrapper = styled.div`
  width: 100%;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(0%);
  background: ${grayscale('white')};
  transition: .2s cubic-bezier(.1,1,.4,1);
  z-index: -1;
  padding: .5rem 0;
  visibility: hidden;

  ${props => props.isOpen && css`
    transform: translateY(100%);
    visibility: visible;
  `}

  ${mediaQuery('md', `
    position: relative;
    z-index: 0;
    width: auto;
    transform: translateY(0%);
    flex-grow: 1;
    display: flex;
    height: auto;
    padding: 0;
    visibility: visible;
  `)}
`

// prettier-ignore
const Overlay = styled.div`
  background: ${rgba(grayscale('dark'), 0.8)};
  opacity: 0;
  height: 100vh;
  width: 100vw;
  transition: opacity .3s;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: -2;

  ${props => props.isOpen && css`
    opacity: 1;
    pointer-events: auto;
  `}

  ${mediaQuery('md', `
    display: none;
  `)}
`

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }

  toggleOpen = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { path, isSticky } = this.props

    return (
      <Wrapper isSticky={isSticky}>
        <Logo />
        <Hamburger isOpen={this.state.isOpen} onClick={this.toggleOpen} />
        <NavWrapper isOpen={this.state.isOpen}>
          <Nav>
            <NavLink to="/api/" active={path.startsWith('/api')}>
              API Reference
            </NavLink>
            <NavLink to="https://sparkpost.com/docs">Documentation</NavLink>
            <NavLink to="https://slack.sparkpost.com">Slack</NavLink>
            <NavLink to="https://status.sparkpost.com" target="_blank">
              <span>
                <StatusIcon /> Status
              </span>
            </NavLink>
          </Nav>
          <Search />
          <Nav>
            <NavLink to="https://app.sparkpost.com/auth">Login</NavLink>
            {
              <li>
                <NavButton
                  to="https://app.sparkpost.com/join"
                  secondary
                  size="small"
                >
                  Sign Up
                </NavButton>
              </li>
            }
          </Nav>
        </NavWrapper>
        <Overlay isOpen={this.state.isOpen} onClick={this.toggleOpen} />
      </Wrapper>
    )
  }
}

export default Header
