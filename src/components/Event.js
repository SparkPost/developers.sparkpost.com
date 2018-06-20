import React from 'react'
import styled from 'styled-components'
import { color, grayscale } from 'utils/colors'
import { uppercase } from 'utils/fonts'

const Calendar = styled.div`
  background-color: ${grayscale('white')};
  border-top: 5px solid ${color('orange')};
  height: 9rem;
  width: 9rem;
  margin: auto;
`

const Month = styled.p`
  ${uppercase} color: ${color('orange')};
  text-align: center;
  margin: 0.25rem 0 0 0;
  font-size: 1.25em;
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
  font-size: 1.1rem;
  margin: 1.5rem 0 0.5rem 0;
`

const Info = styled.div`
  text-align: center;
  margin: 0;
  color: white;
`

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default ({ start, end, name, location }) => {
  const startDate = new Date(start)
  const endDate = new Date(end)

  const startMonth = monthNames[startDate.getMonth()]
  const startDay = startDate.getDate()
  const isSameMonth = startDate.getMonth() === endDate.getMonth()

  return (
    <div>
      <Calendar>
        <Month>{startMonth}</Month>
        <Day>{startDay}</Day>
      </Calendar>
      <Title>{name}</Title>
      <Info>
        {startMonth} {startDay} -{' '}
        {isSameMonth ? '' : monthNames[endDate.getMonth()]} {endDate.getDate()}
      </Info>
      <Info>{location}</Info>
    </div>
  )
}
