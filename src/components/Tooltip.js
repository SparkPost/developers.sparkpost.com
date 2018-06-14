import React from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale } from '../utils/colors'
import zIndex from '../utils/zIndex'

const arrowMargin = `10px`

const Tip = styled.div`
  display: block;
  position: absolute;
  top: -0.777777778rem;
  left: 1.166666667rem;
  width: 0.888888889rem;
  height: 0.888888889rem;

  margin: 0.333333333rem 0 0;

  background: ${grayscale(10)};
  border-top-left-radius: 4px;
  border-top: 1px solid ${grayscale(8)};
  border-left: 1px solid ${grayscale(8)};
  transform: rotate(45deg);
  z-index: -1;
`

const Tooltip = styled.div`
  display: block;
  position: absolute;
  z-index: ${zIndex('tooltip')};
  top: 100%;
  left: 0;
  width: 11rem;
  max-height: 11rem;

  background: ${grayscale(10)};
  margin: ${arrowMargin} 0 0;
  padding: 0.666666667rem;
  box-shadow: 0px 10px 30px ${rgba(grayscale('dark'), 0.16)};
  border-radius: 4px;
  border: 1px solid ${grayscale(8)};

  opacity: 0;
  pointer-events: none;
  transform: translate(0, 0) scale(0.96);
  transition: 0.06s ease-out;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 4px;
  max-height: 10.5rem;
  overflow: hidden;

  word-break: normal;
  text-align: left;
  font-size: 0.777777778rem;
  font-weight: 400;
  line-height: 1.166666667rem;
`

const Activator = styled.span`
  display: inline-block;

  &:hover {
    ${Tooltip} {
      opacity: 1;
      transform: translate(0, 0) scale(1);
    }
  }
`

export default ({ content, children }) => {
  return (
    <Activator>
      {children}
      <Tooltip>
        <Tip />
        <Content>{content}</Content>
      </Tooltip>
    </Activator>
  )
}

// .dark {
//   .Tip, .Tooltip {
//     background: ${grayscale(1)};
//     border: none !important;
//   }

//   .Content {
//     color: ${grayscale(10)};
//   }
// }

// .top {
//   .Tip {
//     top: auto;
//     bottom: rem(-14);
//     margin: 0 0 rem(7);
//     border-top: none;
//     border-left: none;
//     border-bottom-right-radius: 4px;
//     border-top: none;
//     border-left: none;
//     border-bottom: 1px solid ${grayscale(8)};
//     border-right: 1px solid ${grayscale(8)};
//   }

//   .Tooltip {
//     top: auto;
//     bottom: 100%;
//     margin: 0 0 ${arrowMargin};
//   }
// }

// .left {
//   .Tooltip {
//     left: auto;
//     right: 0;
//   }

//   .Tip {
//     left: auto;
//     right: rem(21);
//   }
// }
