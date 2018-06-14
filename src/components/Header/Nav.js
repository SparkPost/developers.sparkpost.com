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
      <li>
        <NavLink to="/api" active={path.startsWith('/api')}>
          API Reference
        </NavLink>
      </li>
      <li>
        <NavLink to="https://sparkpost.com/docs">Documentation</NavLink>
      </li>
      {
        '' /* <li><NavLink to="/integrations" active={path.startsWith('/integrations')}>Integrations</NavLink></li> */
      }
      <li>
        <NavLink to="http://slack.sparkpost.com/">Community</NavLink>
      </li>
      {
        '' /* <li><NavLink to="/oss" active={path === '/oss'}>OSS</NavLink></li> */
      }
    </ul>
  </Nav>
)
