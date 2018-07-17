import { injectGlobal } from 'styled-components'
import { darken } from 'polished'
import { mediaQuery } from 'utils/breakpoint'
import { color, grayscale } from 'utils/colors'
import { font, weight, monospace, uppercase } from 'utils/fonts'
import normalize from 'styled-normalize'

injectGlobal`
  @import 'https://cloud.typography.com/6240112/7284192/css/fonts.css';

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

  ::selection {
    color: #111;
    background: #D6EDFF;
    text-shadow: none;
  }

  /** Typography */

  html {
    font-family: ${font('primary')};
    font-weight: ${weight('normal')};
    font-size: 17px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${grayscale('medium')};
    line-height: 1.15;

    ${mediaQuery('sm', `font-size: 18px;`)};

    ${mediaQuery('xl', `font-size: 19px;`)};
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

  p, td, tr, li {
    line-height: 1.65;
    font-weight: ${weight('normal')};
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

    a {
      font-weight: ${weight('bold')};
    }
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
      padding: 0;

      .hljs-string {
        color: ${darken(0.175, color('green'))};
      }

      .hljs-attr {
        color: ${darken(0.125, color('mustard'))};
      }

      .hljs-number, .hljs-literal {
        color: ${darken(0.2, color('blue'))};
      }
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    margin-bottom: 2rem;
    font-variant-numeric: lining-nums tabular-nums;

    th, td {
      border-style: solid;
      border-color: ${grayscale(8)};
      border-width: 0 0 1px;
      padding: 0.5rem;
      vertical-align: top;
      text-align: left;

      &[align="left"] {
        text-align: left;
      }

      &[align="center"] {
        text-align: center;
      }

      &[align="right"] {
        text-align: right;
      }
    }

    th {
      border-top-width: 1px;
      border-bottom-width: 1px;
      padding: 0.35rem 0.5rem 0.25rem;
      background: ${grayscale('light')};

      padding: 0.5rem;
      ${uppercase}
      font-weight: ${weight('bold')};
      font-size: 0.722222222rem;
      text-transform: uppercase;
      color: ${grayscale(3)};
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
