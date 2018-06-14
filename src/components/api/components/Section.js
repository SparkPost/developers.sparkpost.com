import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import Right from './Right'

export default styled.div`
  display: flex;
  flex-wrap: wrap;

  ${Right} {
    order: 1;
    float: none;
    width: 100% !important;
  }

  ${mediaQuery('md', `
    clear: both;
    display: block;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
  `)}
`