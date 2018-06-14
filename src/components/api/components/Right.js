import styled from 'styled-components'
import { lighten, saturate } from 'polished'
import { mediaQuery } from 'utils/breakpoint'
import { color, grayscale } from 'utils/colors'

export default styled.div`
  order: 1;
  float: none;
  width: 100%;
  padding: 0 2rem 1rem;

  ${mediaQuery(
    'md',
    `
    float: right;
    width: 45%;
    padding: 0 1.5rem;
  `
  )} z-index: 1;
  background: ${grayscale('dark')};
  color: ${grayscale('white')};

  background: #1d1d1d; // dark theme
  background: #212125; // dark theme
  color: ${grayscale(7)}; // dark theme

  code {
    background: transparent;
    border: 1px solid ${grayscale('medium')};
  }

  pre {
    color: ${grayscale(8)};
    overflow: auto;
    border: 0;
    font-weight: 500;
    background: transparent;
    border: 1px solid ${grayscale('medium')};
    border-color: #38383b; // dark theme

    code {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 1);
      border: 0;
    }

    [class*='hljs'] {
      color: inherit;
    }

    .hljs-string {
      color: ${saturate(0.1, lighten(0.05, color('green')))};
    }

    .hljs-number,
    .hljs-literal {
      color: ${lighten(0.15, color('blue'))};
    }
  }
`
