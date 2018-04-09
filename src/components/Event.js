import React from 'React'
import styled from 'styled-components'
import { color, grayscale } from '../utils/colors'

const Calendar = styled.div`
	background-color: ${grayscale('white')};
	border-top: 5px solid ${color('orange')};
	height: 150px;
	padding: 24px;
`

const Month = styled.p`
	color: ${color('orange')};
	text-align: center;
	text-transform: uppercase;
	margin: 0;
	font-size: 1.5em;
`

const Day = styled.p`
	color: ${grayscale('medium')};
	text-align: center;
	font-size: 4em;
	margin: 0;
	font-weight: 600;
`

const Title = styled.h3`
	text-align: center;
	color: white;
`

const Info = styled.p`
	text-align: center;
	margin: 0;
	color: white
`

export default props => (
  <div>
    <Calendar>
      <Month>Jun</Month>
      <Day>15</Day>
    </Calendar>
    <Title>The Incredibles II</Title>
    <Info>June 15 - 16</Info>
    <Info>College Park, MD</Info>
  </div>
)
