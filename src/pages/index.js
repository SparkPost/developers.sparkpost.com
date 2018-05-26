import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from '../utils/colors'
import { uppercase, weight } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import Card from '../components/Card'
import ClientLibrary from '../components/ClientLibrary'
import Event from '../components/Event'
import BlogPost from '../components/BlogPost'
import Link from '../components/Link'
import map from '../utils/map'
import { get } from 'lodash'

const Title = styled.h1`
  text-align: center;
`

const Subtitle = styled.p`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : color('gray'))};
  margin-bottom: 2rem;
  line-height: 28px;
  font-size: 1rem;
`

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : grayscale('dark'))};
`

const CodeSamples = styled.div`
  padding: 1rem;
  word-break: break-all;
  word-wrap: break-word;
  color: inherit;
  background-color: ${grayscale('light')};
  border-radius: 4px;
  overflow: auto;
  line-height: 1.5;
`

const SamplesNav = styled.nav`
  background: ${grayscale('white')};
  box-shadow: ${shadow(1)};
  padding: .5rem;
`

const Code = styled.code``

const CodeSample = styled((({ children, ...props }) => <pre {...props}><Code>{children}</Code></pre>))`
  padding: 0;
  margin: 0;
`

const IndexPage = (props) => {
  const now = new Date()
  const upcomingEvents = get(props, 'data.eventsJson.events', []).filter(({ end_date }) => new Date(end_date) > now)

  return (
    <div>
      <Section light>
        <Container>
          <Title>SparkPost Developers</Title>
          <Row>
            <Column md={8} mdOffset={2}>
              <Subtitle>
                Fast, flexible email integration for websites or applications big
                and small
              </Subtitle>
            </Column>
          </Row>
          <Row center="xs">
            <Column xs={10} sm={4}>
              <Card color="orange" title="API Reference">
                Comprehensive documentation of our API endpoints &amp; parameters
              </Card>
            </Column>
            <Column xs={10} sm={4}>
              <Card color="blue" title="Documentation">
                Articles to give you support where you need it
              </Card>
            </Column>
          </Row>
          <Row center="xs">
            <Column xs={10} sm={4}>
              <Card color="green" title="Libraries and Integrations">
                Comprehensive documentation of our API endpoints &amp; parameters
              </Card>
            </Column>
            <Column xs={10} sm={4}>
              <Card color="mustard" title="Community">
                Articles to give you support where you need it
              </Card>
            </Column>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Column md={8} mdOffset={2}>
              {/*<CodeSamples>
                              <SamplesNav>hello</SamplesNav>
                              <CodeSample>{`hello`}</CodeSample>
                            </CodeSamples>*/}
              <Row>
                <Column md={4}>
                  <ClientLibrary title="Node.js" />
                </Column>
                <Column md={4}>
                  <ClientLibrary title="PHP" />
                </Column>
                <Column md={4}>
                  <ClientLibrary title="Python" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary title="Java" />
                </Column>
                <Column md={4}>
                  <ClientLibrary title="Elixir" />
                </Column>
                <Column md={4}>
                  <ClientLibrary title="NodeMailer" />
                </Column>
              </Row>
              <Row>
                <Column md={4}>
                  <ClientLibrary title="Go" />
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Section>
      {!!upcomingEvents.length && <Section dark>
        <Container>
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
          <Row center="xs">
            {upcomingEvents.map(({ name, start_date, end_date, location }) => (
              <Column md={2}>
                <Event name={name} start={start_date} end={end_date} location={location} />
              </Column>
            ))}
          </Row>
        </Container>
      </Section>}
      <Section light>
        <Container>
          <SectionTitle>Engineering Blog</SectionTitle>
          <Row>
            <Column md={12}>
              {<Row>
                {map(props, 'allWordpressPost', (node) => (
                  <Column md={4} key={node.title}>
                    <BlogPost
                      image={node.fields.media}
                      date={node.date}
                      author={node.author}
                      title={node.title}
                      description={node.excerpt}
                      link={node.link} />
                  </Column>
                ))}
              </Row>}
            </Column>
          </Row>
        </Container>
      </Section>
    </div>
  )
}

export default IndexPage


export const pageQuery = graphql`
  query indexQuery {
    eventsJson {
      events {
        name
        start_date
        end_date
        url
        location
      }
    }
    allWordpressPost(filter: {categories: {name: {eq: "Developer"}}}, sort: {fields: [date], order: DESC}, limit: 3) {
      edges {
        node {
          fields {
            media
          }
          link
          title
          excerpt
          date(formatString: "MMM D, YYYY")
          author {
            name
            link
          }
        }
      }
    }
  }
`