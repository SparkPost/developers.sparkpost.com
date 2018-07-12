import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { color, grayscale } from 'utils/colors'

// prettier-ignore
const Badge = styled.span`
  display: inline-block;
  transition: opacity .15s, transform .15s;
  opacity: 1;
  transform: translateX(3px);
  ${props => props.loading && `
    opacity: 0;
    transform: translateX(-10%);
  `}

  font-size: .55rem;
  padding: 0 .3rem;
  background: ${color('blueDark')};
  color: ${grayscale('white')};
  border-radius: 2px;
  top: -2px;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    transform: translate(-80%, -3%);
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid ${color('blueDark')};
  }
`

class CommunityBadge extends Component {
  state = {
    loading: true,
    count: 0,
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/.netlify/functions/slack')

      this.setState({ loading: false, count: response.data.count })
    } catch (e) {
      // swallow the error
    }
  }

  render() {
    return <Badge loading={this.state.loading}>{this.state.count}</Badge>
  }
}

export default CommunityBadge
