import React from 'react'
import Link from 'gatsby-link'
import {grayscale} from '../utils/colors'

export default () => (
  <header style={{backgroundColor: grayscale('light')}}>
    <div className={'container'}>
      <Link to="index">

      </Link>
      <ul>
        <li>API Docs</li>
        <li>Libraries</li>
        <li>Community</li>
        <li>Changelog</li>
      </ul>

      <div style={{float: 'right'}}>
        <ul>
          <li>Blog</li>
          <li>Support</li>
          <li>Your Dashboard</li>
        </ul>
      </div>
    </div>
  </header>
)