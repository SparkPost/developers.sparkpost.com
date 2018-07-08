import styled from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'

// prettier-ignore
export default styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;

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
