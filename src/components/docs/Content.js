import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { color } from 'utils/colors'
import { weight } from 'utils/fonts'

const sidebarWidth = `275px`

// prettier-ignore
const Content = styled.div`
  max-width: 100%;
  overflow: auto;

  .block {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;

    // reset for when we have a block in a block (i.e. a 'p' in a 'li' inside of a 'ul')
    .block {
      width: 100%;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }

  ${mediaQuery('sm', `
    margin-left: ${sidebarWidth};
  `)}

  ${mediaQuery('md', `
    .block {
      width: 55%;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  `)}

  h1, h2, h3, h4, h5, h6 {
    margin-top: 2rem;
  }

  h1 {
    padding-top: 2.5rem;
    margin: 0 0 1.5rem 0;
  }

  .label {
    display: inline-block;
    padding: 0 0.35em;
    border: 1px solid transparent;
    border-bottom-color: rgba(0, 0, 0, 0.2);
    font-size: 85%;
    font-weight: ${weight('bold')};
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25em;

    &.label-primary {
      background: ${color('orange')};
    }

    &.label-warning {
      background: ${color('mustard')};
    }

    &.label-info {
      background: ${color('blue')};
    }
  }
`

export default Content
