import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import Right from './Right'

export default styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

  ${mediaQuery(
    'md',
    `
    clear: both;
    display: block;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
  `
  )};
`
