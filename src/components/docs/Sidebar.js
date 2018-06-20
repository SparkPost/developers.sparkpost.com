import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale } from 'utils/colors'

const navHeight = `63px`
const sidebarWidth = `275px`

// prettier-ignore
export default styled.aside`
  padding: 1rem;
  background: ${grayscale('light')};
  border-bottom: 1px solid ${grayscale(8)};

  ${mediaQuery('sm', `
    width: ${sidebarWidth};
    position: fixed;
    height: calc(100% - ${navHeight});
    top: ${navHeight};
    left: 0;
    border-right: 1px solid ${grayscale(8)};
    border-bottom: 0;
    overflow: auto;
  `)}
`
