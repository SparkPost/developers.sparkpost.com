import React from 'react'
import Link from '../Link'
import styled from 'styled-components'
import { grayscale, color } from '../../utils/colors'
import { weight } from '../../utils/fonts'

import NavLink from './NavLink'

const Nav = styled.div`
  text-align: right;
`

const SecondaryNavLink = NavLink.extend`
  font-weight: ${weight('light')};
`

const colorMap = {
  loading: grayscale(7),
  none: color('green'),
  minor: color('mustard'),
  major: color('orange'),
  critical: color('red'),
}

const StatusIcon = styled.div`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -4px;
  background: ${props => colorMap[props.status]};
  transition: 0.25s;
`

const ChangelogIcon = styled.div`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -4px;
  background: ${color('orange')};
`

class SecondaryNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 'loading' }
  }

  componentDidMount() {
    require('scriptjs')('https://cdn.statuspage.io/se-v2.js', () => {
      if (!window.StatusPage) return

      // eslint-disable-next-line no-undef
      const sp = new StatusPage.page({ page: '7ky1q6zd3fyp' })

      sp.summary({
        success: data => {
          this.setState({ status: data.status.indicator })
        },
      })
    })
  }

  render() {
    return (
      <Nav>
        <SecondaryNavLink to="https://status.sparkpost.com" target="_blank">
          <span>
            <StatusIcon status={this.state.status} /> Status
          </span>
        </SecondaryNavLink>
        {
          '' /* <SecondaryNavLink to="/changelog">
          <span><ChangelogIcon /> Changelog</span>
        </SecondaryNavLink> */
        }
        <SecondaryNavLink to="https://www.sparkpost.com/blog/category/developer">
          Blog
        </SecondaryNavLink>
        <SecondaryNavLink to="https://app.sparkpost.com/join">
          Sign Up
        </SecondaryNavLink>
      </Nav>
    )
  }
}

export default SecondaryNav
