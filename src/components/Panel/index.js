import React from 'react'
import styled from 'styled-components'
import { color, grayscale, shadow } from 'utils/colors'

const PanelWrapper = styled.div`
  margin-bottom: 1rem;
  background: ${grayscale('white')};
  border: 1px solid ${grayscale('light')};
  box-shadow: ${shadow('base')};
  border-radius: 2px;

  ${props => props.accent && `border-top: 3px solid ${color('orange')};`};
`

const Panel = ({ title, sectioned, accent, children, ...props }) => (
  <PanelWrapper accent={accent} {...props}>
    {title && (
      <Panel.Header>
        <Panel.Title>{title}</Panel.Title>
      </Panel.Header>
    )}
    {sectioned ? <Panel.Section>{children}</Panel.Section> : children}
  </PanelWrapper>
)

const Header = styled.div`
  padding: 0.888888889rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${grayscale(8)};
`

Panel.Header = ({ children, title, right }) => (
  <Header>
    <div>{children}</div>
    {right && <div>{right}</div>}
  </Header>
)

Panel.Title = styled.h4`
  margin: 0;
`

Panel.Section = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${grayscale('light')};

  &:last-child {
    border-bottom: 0;
  }
`

export default Panel
