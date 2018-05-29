import styled from 'styled-components'
import { grayscale } from '../../utils/colors'

const navHeight = `63px`
const sidebarWidth = `275px`

export default styled.aside`
  width: ${sidebarWidth};
  position: fixed;
  background: ${grayscale('light')};
  height: calc(100% - ${navHeight});
  top: ${navHeight};
  left: 0;
  padding: 1rem;
  border-right: 1px solid ${grayscale(8)};
  overflow: auto;
`