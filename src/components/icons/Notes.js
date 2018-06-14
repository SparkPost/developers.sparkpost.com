import React from 'react'

export default props => (
  <svg
    fill="currentColor"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    style={{ verticalAlign: 'middle' }}
    {...props}
  >
    <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
)
