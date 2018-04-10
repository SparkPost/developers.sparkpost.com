import { injectGlobal } from 'styled-components'
import { color, grayscale } from '../utils/colors'
import { font, weight } from '../utils/fonts'
import normalize from 'styled-normalize'

injectGlobal`
  // @import 'https://cloud.typography.com/6240112/779488/css/fonts.css';

  ${normalize}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    position: relative;
  }

  /** Typography */

  html, body {
    font-family: ${font('primary')};
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${grayscale('medium')};
    line-height: 1.15;
  }


  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
  }

  h4 {
    font-size: 1.1rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: .833333333rem;
  }

  p {
    font-size: .888888889rem;
    line-height: 1.5;
  }

  a {
    transition: .15s;
    color: ${color('blue')};
    font-weight: ${weight('medium')};
  }
`
