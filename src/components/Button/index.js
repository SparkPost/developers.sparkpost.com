import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { grayscale, color, shadow } from 'utils/colors'
import { weight, uppercase } from 'utils/fonts'
import Link from 'components/Link'

// prettier-ignore
const hoverSelector = css`
  ${props => !props.disabled ? css`&:hover ${props => (props.hover || props.active) && `, &`}` : '.noop'}
`

// prettier-ignore
const activeSelector = css`
  &:active ${props => props.active && `, &`}
`

// prettier-ignore
export default styled(({
  block, size, primary, secondary, outline, ...props
}) => (
  !!props.to ? <Link.Unstyled {...props} /> : <button {...props} />)
)`
  ${uppercase} border: 1px solid transparent;
  padding: 0.6em 1.8em;
  font-size: 0.9375em; // 15px
  font-weight: ${weight('bold')};
  outline: 0;
  cursor: pointer;
  border-radius: 2px;
  margin-right: 0.5rem;
  display: inline-block;

  &[disabled] {
    opacity: 0.5;
  }

  // block button
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}

  // small button
  ${props => props.size === 'small' && css`
    font-size: 0.666666667rem;
    padding: 0.6em 1.15em;
  `}

  // large button
  ${props => props.size === 'large' && css`
    padding: 0.8em 2em;
  `}

  color: ${grayscale('medium')};
  background: ${grayscale(8)};

  ${hoverSelector} {
    background: ${grayscale(7)};
    border-color: ${grayscale(6)};
  }

  ${activeSelector} {
    box-shadow: inset 2px 3px 6px ${rgba(grayscale(1), 0.2)};
  }

  // primary
  ${props => props.primary && css`
    color: ${grayscale('white')};
    background: ${color('orange')};
    border-color: ${color('orangeDark')};

    ${hoverSelector} {
      background: ${color('orangeDark')};
      border-color: #c84a13;
    }
  `}

  ${props => props.secondary && css`
    color: ${grayscale('white')};
    background: ${color('blue')};
    border-color: ${color('blueDark')};

    ${hoverSelector} {
      background: ${color('blueDark')};
      border-color: #1f79a1;
    }
  `}

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
