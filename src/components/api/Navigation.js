import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from '../../utils/colors'
import { uppercase, weight, monospace } from '../../utils/fonts'
import { Container, Row, Column } from '../Grid'
import Link from '../Link'

const Category = styled.div`
  margin: 1.5rem .5rem;

  &:not(:last-child) {
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${grayscale(8)};
  }
`

const CategoryTitle = styled.div`
  ${uppercase}
  font-size: .75rem;
  margin: .888888889rem 0;
  color: ${grayscale(4)};
  font-weight: ${weight('medium')};
`

const Subsection = styled.div`
  border-left: 2px solid ${grayscale(8)};
  margin-left: .1rem;
  padding-left: .75rem;

  a {
    font-size: 15px;
    // margin: 0 0 0 .1rem;  
    // padding: .175rem 0 .175rem .75rem;
    color: ${grayscale(4)};
  }
`

const ApiLink = styled(Link.Unstyled)`
  display: block;
  font-size: .888888889rem;
  font-weight: ${weight('medium')};
  margin: .35rem 0;
  line-height: 1.65;

  &:last-child {
    margin-bottom: 0;
  }
`

const Navigation = ({ navigation }) => (
  <React.Fragment>
  {navigation.map(({ category, pages }) => (
    <Category>
      <CategoryTitle>{category}</CategoryTitle>
      {pages.map(({ title }) => <ApiLink>{title}</ApiLink>)}
    </Category>
  ))}
  </React.Fragment>
)


export default Navigation