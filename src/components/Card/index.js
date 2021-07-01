import React from 'react'
import styled from 'styled-components'
import { grayscale, shadow } from 'utils/colors'
import { weight, uppercase } from 'utils/fonts'
import Link from 'components/Link'

const Card = styled.div`
  background-color: ${grayscale('white')};
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow('base')};
  text-align: center;
  overflow: hidden;
  border-radius: 2px;
  max-width: 20rem;
  margin: 0 auto 2rem;
  height: calc(100% - 2rem); // subtract the margin from the height
`

const Image = styled.div`
  height: 0;
  padding-bottom: 76.1111111%;
  background-color: ${grayscale(8)};
  background-size: cover;
  margin: 0 0 0.75rem 0;
`

const Text = styled.div`
  padding: 0 2rem 2rem;
`

const Title = styled.h3`
  font-size: 1rem;
  margin: 0 0 1.5rem 0;
`

const ByLine = styled.p`
  ${uppercase} margin: 0 0 1.5rem 0;
  font-size: 0.8rem;
`

const ReadMore = styled(Link)`
  font-weight: ${weight('normal')};
  font-size: 0.95rem;

  i {
    padding-left: 0.5rem;
  }
`

export default ({ image, date, title, description, link }) => (
  <Card>
    <Image style={{ backgroundImage: `url(${image})` }} />
    <Text>
      <ByLine>
        {date}
      </ByLine>
      <Title>{title}</Title>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <ReadMore to={link}>
        read more <i className="fa fa-chevron-right" />
      </ReadMore>
    </Text>
  </Card>
)
