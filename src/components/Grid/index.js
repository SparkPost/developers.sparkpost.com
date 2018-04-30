import React from 'react'
import styled from 'styled-components'
import { mediaQuery } from '../../utils/breakpoint'

import Row from './Row'
import Column from './Column'

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;

  ${mediaQuery('sm', 'width: 750px;')}

  ${mediaQuery('md', 'width: 970px;')}

  ${mediaQuery('lg', 'width: 1170px;')}
`

export { Container, Row, Column }
