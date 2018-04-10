import React from 'react'
import Link from '../Link'
import styled from 'styled-components'
import { grayscale, color } from '../../utils/colors'

import NavLink from './NavLink'

const SecondaryNav = styled.div`
  text-align: right;
`

const SecondaryNavLink = NavLink.extend`
  font-weight: 400;
`

export default () => (
  <SecondaryNav>
    <SecondaryNavLink>Blog</SecondaryNavLink>
    <SecondaryNavLink>Support</SecondaryNavLink>
    <SecondaryNavLink>Your Dashboard</SecondaryNavLink>
  </SecondaryNav>
)
