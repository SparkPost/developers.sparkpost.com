import React from 'react'
import styled from 'styled-components'

import NavLink from './NavLink'

const Nav = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    list-style: none; 
  }

  li {
    margin: 0;
    display: inline-block;
  }
`


export default ({ path }) => (
  <Nav>
    <ul>
      <li><NavLink to="/" active={path === '/'}>API Docs</NavLink></li>
      <li><NavLink to="/libraries" active={path === '/libraries'}>Libraries</NavLink></li>
      <li><NavLink to="/community" active={path === '/community'}>Community</NavLink></li>
      <li><NavLink to="/changelog" active={path === '/changelog'}>Changelog</NavLink></li>
    </ul>
  </Nav>
)
