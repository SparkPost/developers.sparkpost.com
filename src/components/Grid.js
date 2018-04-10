import React from 'react'
import styled from 'styled-components'
import { grayscale } from '../utils/colors'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`

const Column = styled.div`
  width: ${props => props.xs / 12 * 100}%;
  padding: 0 15px;

  @media (min-width: 768px) {
    width: ${props => props.sm / 12 * 100}%;
    ${props =>
      props.smOffset && 'margin-left: ' + props.smOffset / 12 * 100 + '%;'};
  }

  @media (min-width: 992px) {
    width: ${props => props.md / 12 * 100}%;
    ${props =>
      props.mdOffset && 'margin-left: ' + props.mdOffset / 12 * 100 + '%;'};
  }

  @media (min-width: 1200px) {
    width: ${props => props.lg / 12 * 100}%;
    ${props =>
      props.lgOffset && 'margin-left: ' + props.lgOffset / 12 * 100 + '%;'};
  }
`

export { Container, Row, Column }
