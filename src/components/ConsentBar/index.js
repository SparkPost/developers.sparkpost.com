import React, { Component } from 'react'
import styled from 'styled-components'
import { has } from 'lodash'
import { withCookies } from 'react-cookie'
import Link from 'components/Link'
import { grayscale, shadow } from 'utils/colors'
import { weight } from 'utils/fonts'
import zIndex from 'utils/zIndex'

const Bar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1.333333333rem;
  margin: auto;
  display: inline-block;
  z-index: ${zIndex('overlay')};
  max-width: 790px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  box-shadow: ${shadow(2)};
  background: ${grayscale(2)};
  color: ${grayscale(10)};
`

const Content = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-right: -4px;
  padding: 0.666666667rem 1rem;
  min-width: 11.111111111rem;
  font-size: 0.833333333rem;
  line-height: 1.65em;
  font-weight: ${weight('medium')};

  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a,
  a:visited {
    color: ${grayscale(10)};
    text-decoration: underline;
  }
`

const DismissIcon = styled(props => (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    width={21}
    height={21}
    {...props}
  >
    <g>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </g>
  </svg>
))`
  fill: ${grayscale(10)};
  opacity: 0.9;
  transition: opacity 0.15s;
`

const Dismiss = styled(Link)`
  display: inline-block;
  margin: 0 -4px;
  vertical-align: top;
  padding: 0.666666667rem 1rem;
  border-bottom: none;
  cursor: pointer;

  color: ${grayscale(10)};
  font-size: 0.777777778rem;

  &:hover {
    ${DismissIcon} {
      opacity: 1;
    }
  }
`

class ConsentBar extends Component {
  setConsentFlag = () => {
    const { cookies } = this.props
    const time = new Date().toISOString()
    const expires = new Date()
    expires.setFullYear(new Date().getFullYear() + 1)

    cookies.set('cookieConsent', time, {
      path: '/',
      domain: process.env.COOKIE_DOMAIN,
      expires,
    })

    this.setState({ consentGiven: time })
  }

  componentDidMount() {
    const { cookies } = this.props

    this.setState({
      consentGiven: cookies.get('cookieConsent') || false,
    })
  }

  render() {
    if (!has(this.state, 'consentGiven') || this.state.consentGiven) {
      return null
    }

    return (
      <Bar>
        <Content>
          We use cookies to optimize your experience, analyze traffic, and
          personalize content. To learn more, please visit our{' '}
          <Link
            target="_blank"
            to="https://www.sparkpost.com/policies/privacy/"
          >
            Cookie Policy
          </Link>. By using our site without disabling cookies, you consent to
          our use of them.
        </Content>
        <Dismiss onClick={this.setConsentFlag}>
          <DismissIcon />
        </Dismiss>
      </Bar>
    )
  }
}

export default withCookies(ConsentBar)
