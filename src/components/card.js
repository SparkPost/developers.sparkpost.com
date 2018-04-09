import React from 'react'
import styled from 'styled-components'
import { color, grayscale } from '../utils/colors'

const Wrapper = styled.div`
  border-top: 6px solid ${props => props.color};
  background-color: ${grayscale('white')};
  padding: 1rem 1.25rem 1.5rem;
  margin-bottom: 1.25rem;
`

const Title = styled.h3`
  font-size: 1rem;  
  margin: 0 0 .5rem 0;
`

const Text = styled.p`
  margin: 0;
`

export default ({ title, children, color: c, ...props }) => (
  <Wrapper color={color(c)} {...props}>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </Wrapper>
)
