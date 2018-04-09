import React from 'react'
import Link from 'gatsby-link'
import isAbsoluteUrl from 'is-absolute-url'

export default ({ to, ...props }) => (
  to && isAbsoluteUrl(to) ? <a href={to} {...props} /> : <Link to={to} {...props} />
)