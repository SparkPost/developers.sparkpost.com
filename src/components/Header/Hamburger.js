import React from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from 'utils/breakpoint'
import { grayscale } from 'utils/colors'

const Hamburger = styled(props => (
  <div {...props}>
    <span />
    <span />
    <span />
  </div>
))`
  display: block;
  cursor: pointer;

  // hide on desktop
  ${mediaQuery(
    'md',
    `
    display: none;
  `
  )} span {
    display: block;
    width: 18px;
    height: 2px;
    margin-bottom: 3px;
    position: relative;
    background: ${grayscale('medium')};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.25s cubic-bezier(0.1, 1, 0.4, 1),
      background 0.25s cubic-bezier(0.1, 1, 0.4, 1), opacity 0.25s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  ${props =>
    props.isOpen &&
    css`
      span {
        opacity: 1;
        transform: rotate(45deg) translate(-3.7px, -9px);
      }

      span:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      span:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, 7px);
      }
    `};
`

export default Hamburger
