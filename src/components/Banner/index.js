import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from 'utils/colors'
import Check from 'components/icons/Check'
import Info from 'components/icons/Info'
import ErrorIcon from 'components/icons/Error'

const svgStyle = `
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: 1;
`

const IconSection = ({ status, icon }) => {
  const icons = {
    success: Check,
    info: Info,
    warning: ErrorIcon,
    danger: ErrorIcon,
  }

  if ((status === 'default' || !icons[status]) && !icon) {
    return null
  }

  const Icon = styled(icon || icons[status])`
    ${svgStyle};
  `

  return (
    <IconWrapper>
      <Icon />
      <IconBackdrop />
    </IconWrapper>
  )
}

const IconBackdrop = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

const IconWrapper = styled.div`
  position: relative;
  flex: 1 0 0;
  max-width: 52px;
  margin-right: 18px;
  height: 40px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  padding: 1rem;
  margin: 2rem 0;
  border: 1px solid ${grayscale(8)};
  border-left: 0;
  border-radius: 2px;
  box-shadow: ${shadow('base')};

  background: ${grayscale('white')};

  &:before {
    display: block;
    position: absolute;
    content: '';
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: 5px;
    background: ${grayscale(6)};
    border-radius: 2px 0 0 2px;
  }

  ${props =>
    props.status === 'success' &&
    css`
      &:before {
        background: ${color('green')};
      }

      ${IconBackdrop} {
        box-shadow: 0 0 0 7px ${rgba(color('green'), 0.25)};
      }

      svg {
        fill: ${color('green')};
      }
    `}

  ${props =>
    props.status === 'info' &&
    css`
      &:before {
        background: ${color('blue')};
      }

      ${IconBackdrop} {
        box-shadow: 0 0 0 7px ${rgba(color('blue'), 0.25)};
      }

      svg {
        fill: ${color('blue')};
      }
    `}

  ${props =>
    props.status === 'warning' &&
    css`
      &:before {
        background: ${color('mustard')};
      }

      ${IconBackdrop} {
        box-shadow: 0 0 0 7px ${rgba(color('mustard'), 0.25)};
      }

      svg {
        fill: ${color('mustard')};
      }
    `}

  ${props =>
    props.status === 'danger' &&
    css`
      &:before {
        background: ${color('red')};
      }

      ${IconBackdrop} {
        box-shadow: 0 0 0 7px ${rgba(color('red'), 0.25)};
      }

      svg {
        fill: ${color('red')};
      }
    `}
  }
`

const Content = styled.div`
  flex: 1 0 0;

  p {
    margin: 0;
  }

  p:not(:first-child) {
    margin-top: 0.333333333rem;
  }
`

const Title = styled.h4`
  margin: 0;
`

const Banner = ({ title, children, status, icon, ...props }) => (
  <Wrapper status={status} {...props}>
    <IconSection status={status} icon={icon} />
    <Content>
      {title && <Title>{title}</Title>}
      {children}
    </Content>
  </Wrapper>
)

export default Banner
