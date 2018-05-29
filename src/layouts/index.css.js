import { injectGlobal } from 'styled-components'
import { color, grayscale } from '../utils/colors'
import { font, weight, monospace } from '../utils/fonts'
import normalize from 'styled-normalize'

injectGlobal`
  // @import 'https://cloud.typography.com/6240112/779488/css/fonts.css';

  ${normalize}

  html {
    box-sizing: border-box;
    background: ${grayscale('light')};
    height: 100%;
  }

  body {
    background: ${grayscale('white')};
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    position: relative;
  }

  /** Typography */

  html {
    font-family: ${font('primary')};
    font-weight: ${weight('light')};
    font-size: 18px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${grayscale('medium')};
    line-height: 1.15;
  }

  body {
    font-size: .888888889rem;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0 0 1rem 0;
  }

  h1, h2 {
    color: ${grayscale('dark')};
  }

  h1 {
    font-size: 1.666666667rem;
  }

  h2 {
    font-size: 1.333333333rem;
  }

  h3 {
    font-size: 1.166666667rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: .888888889rem;
  }

  h6 {
    font-size: .833333333rem;
  }

  p, td, tr {
    line-height: 1.65;
  }

  ul {
    padding-left: 1.5rem;
  }

  li p {
    margin-bottom: .333333333rem; 
  }

  a {
    transition: .15s;
    color: ${color('blue')};
    font-weight: ${weight('medium')};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline; 
  }

  .textLeft {
    text-align: left;
  }

  .textCenter {
    text-align: center;
  }

  .textRight {
    text-align: right;
  }  

  b, strong {
    font-weight: ${weight('bold')};
  }

  code {
    ${monospace}
    background: ${grayscale('light')};
    font-weight: 500;
    padding: 2px 4px;
    border-radius: 2px;
    // border: 1px solid ${grayscale(8)};
  }

  pre {
    display: block;
    padding: 1rem;
    word-break: break-all;
    word-wrap: break-word;
    color: inherit;
    background-color: ${grayscale('light')};
    border-radius: 4px;
    overflow: auto;
    line-height: 1.25;

    code {
      background: transparent;
      color: inherit;
      overflow: auto;
      border: 0;
      white-space: inherit;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    margin-bottom: 2rem;

    th, td {
      border-bottom: 1px solid ${grayscale(8)};
      text-align: left;
      padding: 0.83333rem;
      vertical-align: top;

      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }

    th {
      border-bottom-width: 2px;
      padding: 0.5rem;
    }
  } 

  img {
    max-width: 100%;
  } 

  hr {
    border: 0;
    border-bottom: 1px solid ${grayscale(8)};
    margin: 2rem 0;
  }
`
