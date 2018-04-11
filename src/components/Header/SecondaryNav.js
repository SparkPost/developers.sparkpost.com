import React from 'react'
import Link from '../Link'
import styled from 'styled-components'
import scriptjs from 'scriptjs'
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
  critical: color('alert')
}

const StatusIcon = styled.div`
  display: inline-block;
  width: .5rem;
  height: .5rem;
  border-radius: 50%;
  background: ${props => colorMap[props.status]};
  margin-right: .25rem;
  transition: .25s;
`

class SecondaryNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { status: 'loading' }
  }

  componentDidMount() {
    scriptjs('https://cdn.statuspage.io/se-v2.js', () => {
      var sp = new StatusPage.page({ page: '7ky1q6zd3fyp'})

      sp.summary({
        success: (data) => {
          this.setState({ status: data.status.indicator })
        }
      })
    })
  }

  render() {

    return (
      <Nav>
        <SecondaryNavLink to="https://status.sparkpost.com" target="_blank"><StatusIcon status={this.state.status} /> Status</SecondaryNavLink>
        <SecondaryNavLink to="https://sparkpost.com/blog" target="_blank">Blog</SecondaryNavLink>
        <SecondaryNavLink to="https://sparkpost.com/docs" target="_blank">Docs</SecondaryNavLink>
        <SecondaryNavLink to="https://app.sparkpost.com/" target="_blank">Your Dashboard</SecondaryNavLink>
      </Nav>
    )
  }

}

export default SecondaryNav
