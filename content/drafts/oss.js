import React from 'react'
import styled from 'styled-components'
import Link from '../components/Link'
import Section from '../components/Section'
import { Container, Row, Column } from '../components/Grid'
import Card from '../components/Card'
import { grayscale, color } from '../utils/colors'
import { weight } from '../utils/fonts'
import map from '../utils/map'

import { projects as fullProjects } from '../data/projects/index.json'

const projects = fullProjects.map(({ name }) => name)
const featuredProjects = fullProjects.filter(({ featured }) => featured)

const Title = styled.h1`
  text-align: center;
  color: ${color('gray')};
`

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 64px;
  color: ${color('gray')};
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
`

const Table = styled.div`
  width: 100%;
  font-size: 0.888888889rem;
`

const Project = styled(Link.Unstyled)`
  display: block;
  padding: 0.35rem 0;

  &:hover > *:first-child {
    text-decoration: underline;
  }
`

const Name = styled.h4`
  font-weight: ${weight('bold')};
  margin: 0;
  width: 11em;
  display: inline-block;
  font-size: inherit;
`

const Description = styled.div`
  display: inline-block;
`

const Stars = styled.div`
  display: inline-block;
  float: right;

  &:after {
    content: '★';
    font-size: 0.8333em;
    top: -1px;
    margin-left: 0.25rem;
  }
`

export default props => (
  <div>
    <Section light>
      <Container>
        <Title>Open Source Software</Title>
        <Row>
          <Column md="8" mdOffset="2">
            <Subtitle>
              At SparkPost we rely on Open Source and Standards from hundreds of
              NPM modules to the SMTP spec. We believe that it is important to
              give back to the community where we can.
            </Subtitle>
          </Column>
        </Row>
        <Row center="xs">
          {featuredProjects.map(({ name, color }) =>
            map(
              props,
              'allGithubSearch',
              ({ name: githubName, description, url }) =>
                githubName === name && (
                  <Column md="4">
                    <Card color={color} title={name} to={url}>
                      {description}
                    </Card>
                  </Column>
                )
            )
          )}
        </Row>
      </Container>
    </Section>
    <Section>
      <Container>
        <Row>
          <Column md="10" mdOffset="1">
            <h2>Our Projects</h2>
            <Table>
              {map(
                props,
                'allGithubSearch',
                ({
                  name,
                  url,
                  description,
                  stargazers: { totalCount: stars },
                }) =>
                  projects.includes(name) && (
                    <Project to={url} target="_blank">
                      <Name>{name}</Name>
                      <Description>{description}</Description>
                      <Stars>{stars}</Stars>
                    </Project>
                  )
              )}
            </Table>
          </Column>
        </Row>
      </Container>
    </Section>
    <Section light>
      <Container>
        <Row center="xs">
          <Column xs={10}>
            <h2>We support</h2>
            <Row between="xs">
              <Column sm={3}>
                <img src="https://placehold.it/200x100" alt="" />
              </Column>
              <Column sm={3}>
                <img src="https://placehold.it/200x100" alt="" />
              </Column>
              <Column sm={3}>
                <img src="https://placehold.it/200x100" alt="" />
              </Column>
            </Row>
          </Column>
        </Row>
      </Container>
    </Section>
  </div>
)

export const pageQuery = graphql`
  query ossQuery {
    allGithubSearch {
      totalCount
      edges {
        node {
          name
          url
          description
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`
