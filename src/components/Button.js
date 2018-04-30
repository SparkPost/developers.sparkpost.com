import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { grayscale, color, shadow } from '../utils/colors'
import { weight, uppercase } from '../utils/fonts'

const hoverSelector = css`&:hover ${props => (props.hover || props.active) && `, &`}`
const activeSelector = css`&:active ${props => props.active && `, &`}`

const Button = styled.button`
  ${uppercase}
  border: 1px solid transparent;
  padding: .6em 1.8em;
  font-size: .833333333em;
  font-weight: ${weight('bold')};
  outline: 0;
  cursor: pointer;

  &[disabled] {
    opacity: .5;
  }
  
  // block button
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}

  // size=small
  ${props => props.size === 'small' && css`
    font-size: .666666667rem;
    padding: .6em 1.25em;
  `}

  // size=large
  ${props => props.size === 'large' && css`
    padding: .8em 2em;
  `}
  
  // default
  color: ${grayscale('medium')};
  background: ${grayscale(8)};

  ${hoverSelector} {
    background: ${grayscale(7)};
    border-color: ${grayscale(6)};
  }

  ${activeSelector} {
    box-shadow: inset 2px 3px 6px ${rgba(grayscale(1), .2)};
  }
  
  // primary
  ${props => props.primary && css`
    color: ${grayscale('white')};
    background: ${color('orange')};
    border-color: ${color('orangeDark')};

    ${hoverSelector} {
      background: ${color('orangeDark')};
      border-color: #C84A13;
    }
  `}
  
  // secondary
  ${props => props.secondary && css`
    color: ${grayscale('white')};
    background: ${color('blue')};
    border-color: ${color('blueDark')};

    ${hoverSelector} {
      background: ${color('blueDark')};
      border-color: #1F79A1;
    }
  `}

  // outline
  ${props => props.outline && css`
    color: ${grayscale('medium')};
    background: ${grayscale('white')};
    border-color: ${grayscale(7)};
    box-shadow: ${shadow(1)};

    ${hoverSelector} {
      background: #f1f1f2;
      border-color: ${grayscale(7)};
    }
  `}
`

export default Button