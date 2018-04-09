import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Container, Row, Column } from '../components/Grid'
import { color, grayscale } from '../utils/colors'
import Card from '../components/Card'
import ClientLibrary from '../components/ClientLibrary'
import Event from '../components/Event'
import BlogPost from '../components/BlogPost'

const Title = styled.h1`
  text-align: center;
  color: ${color('gray')};
`

const Subtitle = styled.p`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : color('gray'))};
  margin-bottom: 36px;
  line-height: 28px;
  font-size: 18px;
`

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : grayscale('dark'))};
`

const IndexPage = () => (
  <div>
    <Container background={grayscale('light')}>
      <Title>SparkPost Developers</Title>
      <Row>
        <Column md={8} mdOffset={2}>
          <Subtitle>
            Fast, flexible email integration for websites or applications big
            and small
          </Subtitle>
        </Column>
      </Row>
      <Row>
        <Column md={4} mdOffset={2}>
          <Card color="orange" title="API Documentation">
            Comprehensive documentation of our API endpoints &amp; parameters
          </Card>
        </Column>
        <Column md={4}>
          <Card color="blue" title="Support Articles">
            Articles to give you support where you need it
          </Card>
        </Column>
      </Row>
      <Row>
        <Column md={4} mdOffset={2}>
          <Card color="green" title="Libraries and Integrations">
            Comprehensive documentation of our API endpoints &amp; parameters
          </Card>
        </Column>
        <Column md={4}>
          <Card color="mustard" title="Community">
            Articles to give you support where you need it
          </Card>
        </Column>
      </Row>
    </Container>
    <Container>
      <Row>
        <Column md={8} mdOffset={2}>
          <Row>
            <Column md={4}>
              <ClientLibrary img="" title="Node.js" />
            </Column>
            <Column md={4}>
              <ClientLibrary img="" title="PHP" />
            </Column>
            <Column md={4}>
              <ClientLibrary img="" title="Python" />
            </Column>
          </Row>
          <Row>
            <Column md={4}>
              <ClientLibrary img="" title="Java" />
            </Column>
            <Column md={4}>
              <ClientLibrary img="" title="Elixir" />
            </Column>
            <Column md={4}>
              <ClientLibrary img="" title="NodeMailer" />
            </Column>
          </Row>
          <Row>
            <Column md={4}>
              <ClientLibrary img="" title="Go" />
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
    <Container background={grayscale('dark')}>
      <SectionTitle dark>Dev Events</SectionTitle>
      <Row>
        <Column md={8} mdOffset={2}>
          <Subtitle dark>
            Whether you're using SparkPost or want to know more about us, we
            would love to meet you in person! Come say hi to the SparkPost team
            at one of these events.
          </Subtitle>
        </Column>
      </Row>
      <Row>
        <Column md={2} mdOffset={2}>
          <Event />
        </Column>
        <Column md={2} mdOffset={1}>
          <Event />
        </Column>
        <Column md={2} mdOffset={1}>
          <Event />
        </Column>
      </Row>
    </Container>
    <Container background={grayscale('light')}>
      <SectionTitle>Engineering Blog</SectionTitle>
      <Row>
        <Column md={10} mdOffset={1}>
          <Row>
            <Column md={4}>
              <BlogPost />
            </Column>
            <Column md={4}>
              <BlogPost />
            </Column>
            <Column md={4}>
              <BlogPost />
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </div>
)

export default IndexPage
