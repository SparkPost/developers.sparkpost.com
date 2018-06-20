import React from 'react'
import styled from 'styled-components'
import { color, grayscale } from 'utils/colors'

const colorMap = {
  loading: grayscale(7),
  none: color('green'),
  minor: color('mustard'),
  major: color('orange'),
  critical: color('red'),
}

const Icon = styled.div`
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

class StatusIcon extends React.Component {
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
    return <Icon status={this.state.status} />
  }
}

export default StatusIcon
