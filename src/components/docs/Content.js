import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { mediaQuery } from 'utils/breakpoint'
import { color, grayscale, shadow } from '../../utils/colors'
import { uppercase, weight, monospace } from '../../utils/fonts'
import { Container, Row, Column } from '../Grid'
import Link from '../Link'


const sidebarWidth = `275px`

const Content = styled.div`
  margin-left: ${sidebarWidth};
  max-width: 100%;
  overflow: auto;
  
  .block {
    padding-left: 2rem;
    padding-right: 2rem;

    // reset for when we have a block in a block (i.e. a 'p' in a 'li' inside of a 'ul')
    .block {
      width: 100%;
      padding-left: 0rem;
      padding-right: 0rem;
    }
  }

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

  .alert {
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 1px solid ${grayscale(8)};
    border-left: 0;
    border-radius: 2px;
    box-shadow: ${shadow(1)};
    line-height: 1.65;

    background: ${grayscale('white')};

    &:before {
      display: block;
      position: absolute;
      content: '';
      top: -1px;
      bottom: -1px;
      left: 0px;

      width: 5px;
      background: ${grayscale(6)};
      border-radius: 2px 0 0 2px;
    }

    &.alert-success {
      &:before {
        background: ${color('green')};
      }
    }

    &.alert-info {
      &:before {
        background: ${color('blue')};
      }
    }

    &.alert-warning {
      &:before {
        background: ${color('mustard')};
      }
    }

    &.alert-danger {
      &:before {
        background: ${color('red')};
      }
    }
  }

  .label {
    display: inline;
    padding: .1em .35em .185em;
    border: 1px solid transparent;
    border-bottom-color: rgba(0,0,0,.2);;
    font-size: 85%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;

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