import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { rgba, lighten } from 'polished'
import { color, grayscale } from 'utils/colors'
import { uppercase, weight } from 'utils/fonts'
import { mediaQuery } from 'utils/breakpoint'
import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Panel from 'components/Panel'
import Card from 'components/Card'
import Button from 'components/Button'
import Link from 'components/Link'
import Anchor from 'components/Anchor'
import CodeSamples from 'components/CodeSamples'
import map from 'utils/map'

import flameBackground from 'assets/flame-background.png'
import elixir from 'assets/libraries/elixir.png'
import go from 'assets/libraries/go.png'
import java from 'assets/libraries/java.png'
import nodeJs from 'assets/libraries/node.png'
import php from 'assets/libraries/php.png'
import python from 'assets/libraries/python.png'
import ruby from 'assets/libraries/ruby.png'
import cSharp from 'assets/libraries/c-sharp.png'

import RawCode from 'components/icons/Code'
import RawNotes from 'components/icons/Notes'
import RawPeople from 'components/icons/People'

const Code = styled(props => <RawCode viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${grayscale('white')};
    background: ${color('orange')};
    border-radius: 50%;
    border: 3px solid ${lighten(0.25, color('orange'))};
    box-sizing: content-box;
  }
`
const Notes = styled(props => <RawNotes viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${grayscale('white')};
    background: ${color('blue')};
    border-radius: 50%;
    border: 3px solid ${lighten(0.25, color('blue'))};
    box-sizing: content-box;
  }
`
const People = styled(props => <RawPeople viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${grayscale('white')};
    background: ${color('mustard')};
    border-radius: 50%;
    border: 3px solid ${lighten(0.25, color('mustard'))};
    box-sizing: content-box;
  }
`

const SectionLink = styled(Link.Unstyled)`
  &:hover svg {
    transform: scale(1);
  }
`

const SectionTitle = styled.h4`
  margin-bottom: 0.35rem;

  svg {
    margin-right: 0.35rem;
    transform: scale(0.9);
    transition: 0.2s;
  }
`

const Title = styled.h1`
  color: ${grayscale('white')};
  font-size: 2em;
  text-align: center;

  ${mediaQuery(
    'md',
    `
    margin-top: 3.5rem;
    text-align: left;
  `
  )};
`

const Subtitle = styled.p`
  margin-bottom: 2rem;
  line-height: 28px;
  font-size: 1.166666667rem;
  text-align: center;

  ${mediaQuery(
    'md',
    `
    text-align: left;
  `
  )};
`

const ButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  ${Button} {
    margin-bottom: 0.5rem;
  }

  ${mediaQuery(
    'md',
    `
    text-align: left;
    margin-bottom: 0rem;
  `
  )};
`

const LanguageWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border-top: 1px solid ${grayscale(8)};
  margin-top: 1rem;
  padding-top: 0.5rem;
`

// prettier-ignore
const Language = styled(Link.Unstyled)`
  display: block;
  color: ${grayscale(5)};
  font-weight: ${weight('medium')};
  text-align: center;
  padding-top: 1.25rem;

  width: ${100/4}%;
  min-width: 60px;

  ${mediaQuery('sm', `
    min-width: auto;
    width: ${100/8}%;
  `)}

  &:hover {
    color: ${color('blue')};
  }

  img {
    margin: 0 auto 0.5rem;
    display: block;
  }
`

const TopSection = styled(Section)`
  background-color: ${grayscale('dark')};
  background-image: url(${flameBackground});
  background-size: 150%;
  color: ${grayscale('white')};
  padding: 8rem 0 10rem 0;
`

const Resources = styled(props => <h3 {...props}>Resources</h3>)`
  ${uppercase} font-size: .9rem;
  font-weight: ${weight('bold')};
  color: ${grayscale(3)};
  margin-bottom: 1.75rem;
`

const timelineWidth = 4
const StartTimeline = styled.div`
  width: ${timelineWidth}px;
  height: 100%;
  background: ${grayscale(8)};
  position: absolute;
  top: 0;
`

const StartStep = styled.div`
  padding: 0 0 4rem 3rem;

  &:last-child {
    padding-bottom: 7rem;
  }
`

const StartIcon = styled(({ icon, color, ...props }) => (
  <div {...props}>
    <i className={`fa fa-${icon}`} />
  </div>
))`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: ${props => color(props.color)};
  line-height: 35px;
  text-align: center;
  color: ${rgba(grayscale('white'), 0.4)};
  font-size: 1.166666667rem;
  position: absolute;
  top: 0;
  left: ${timelineWidth / 2}px;
  transform: translate(-50%, -15%);
`

const IndexPage = props => {
  return (
    <Layout {...props}>
      <TopSection>
        <Container>
          <Row center="xs">
            <Column md={6} sm={10} xs={11}>
              <Title>Send email from your app!</Title>
              <Subtitle>
                The world’s most powerful email delivery solution is now yours
                in a developer-friendly, quick to set up cloud service.{' '}
              </Subtitle>
              <ButtonWrapper>
                <Button to="https://app.sparkpost.com/join" secondary>
                  Sign Up
                </Button>
              </ButtonWrapper>
            </Column>
            <Column md={6} sm={10} xs={12}>
              <CodeSamples />
            </Column>
          </Row>
        </Container>
      </TopSection>
      <Section light spacingTop="xs" spacingBottom="none">
        <Container style={{ marginTop: -95 }}>
          <Row center="xs">
            <Column xs={11}>
              <Panel sectioned style={{ padding: `1rem 1.5rem .75rem` }}>
                <Resources />
                <Row>
                  <Column xs={12} sm={4}>
                    <SectionLink to="/api">
                      <SectionTitle>
                        <Code /> API Reference
                      </SectionTitle>
                      <p>
                        Comprehensive specification of our API endpoints and
                        parameters.
                      </p>
                    </SectionLink>
                  </Column>
                  <Column xs={12} sm={4}>
                    <SectionLink to="https://sparkpost.com/docs">
                      <SectionTitle>
                        <Notes /> Documentation
                      </SectionTitle>
                      <p>
                        Understand SparkPost and how to use it most effectively.
                      </p>
                    </SectionLink>
                  </Column>
                  <Column xs={12} sm={4}>
                    <SectionLink to="https://slack.sparkpost.com">
                      <SectionTitle>
                        <People /> Community
                      </SectionTitle>
                      <p>
                        Join a community happy to help with code or other
                        questions you might have!
                      </p>
                    </SectionLink>
                  </Column>
                </Row>
                <Row>
                  <Column md={12}>
                    <Anchor.Target title="client-libraries" />
                    <LanguageWrapper>
                      <Language to="https://github.com/SparkPost/node-sparkpost">
                        <img height={2 * 18} src={nodeJs} alt="Node.js" />
                        Node.js
                      </Language>
                      <Language to="https://github.com/SparkPost/php-sparkpost">
                        <img height={2 * 18} src={php} alt="PHP" />
                        PHP
                      </Language>
                      <Language to="https://github.com/SparkPost/python-sparkpost">
                        <img height={2 * 18} src={python} alt="Python" />
                        Python
                      </Language>
                      <Language to="https://github.com/SparkPost/java-sparkpost">
                        <img height={2 * 18} src={java} alt="Java" />
                        Java
                      </Language>
                      <Language to="https://github.com/SparkPost/elixir-sparkpost">
                        <img height={2 * 18} src={elixir} alt="Elixir" />
                        Elixir
                      </Language>
                      <Language to="https://github.com/search?l=Ruby&q=sparkpost&type=Repositories">
                        <img height={2 * 18} src={ruby} alt="Ruby" />
                        Ruby
                      </Language>
                      <Language to="https://github.com/SparkPost/gosparkpost">
                        <img height={2 * 18} src={go} alt="Go" />
                        Go Lang
                      </Language>
                      <Language to="https://github.com/darrencauthon/csharp-sparkpost">
                        <img height={2 * 18} src={cSharp} alt="C#" />
                        C#
                      </Language>
                    </LanguageWrapper>
                  </Column>
                </Row>
              </Panel>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row center="xs">
            <Column md={8} sm={10} xs={11}>
              <h2
                style={{
                  fontSize: `1.5rem`,
                  textAlign: 'center',
                  margin: `10rem 0 2rem`,
                }}
              >
                Steps to Start Sending
              </h2>
              <p
                style={{
                  textAlign: 'center',
                  fontSize: `1.166666667rem`,
                  color: grayscale(4),
                  lineHeight: `1.5em`,
                  marginBottom: `4.5rem`,
                }}
              >
                Start sending with the most powerful email platform. Check out
                the{' '}
                <Link to="https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/">
                  full guide
                </Link>{' '}
                to get started.
              </p>
            </Column>
          </Row>
          <Row center="xs">
            <Column lg={5} md={6} sm={8} xs={10}>
              <div style={{ padding: `0 0 0 .75rem` }}>
                <StartTimeline />
                <StartStep>
                  <StartIcon icon="user" color="magenta" />
                  <h3>Sign up for an account</h3>
                  <Link to="https://app.sparkpost.com/join">
                    Sign up <i className="fa fa-chevron-right" />
                  </Link>
                </StartStep>
                <StartStep>
                  <StartIcon icon="at" color="mustard" />
                  <h3>Set up your domain</h3>
                  <p>
                    Add the domain you want to send from and verify you own it
                    through DNS settings.
                  </p>
                  <Link to="https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#preparing-your-from-address">
                    Add a sending domain <i className="fa fa-chevron-right" />
                  </Link>
                </StartStep>
                <StartStep>
                  <StartIcon icon="server" color="teal" />
                  <h3>Start sending!</h3>
                  <p>
                    Send emails from your domain using the API or SMTP. You can
                    also send with your favorite programming language using any
                    of our official or community supported{' '}
                    <Link to="#client-libraries">client libraries</Link>.
                  </p>
                  <Link to="https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/#sending-email">
                    Send your first email <i className="fa fa-chevron-right" />
                  </Link>
                </StartStep>
              </div>
            </Column>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="textCenter" style={{ marginBottom: `4rem` }}>
            Engineering Blog
          </h2>
          <Row>
            {map(props, 'allWordpressPost', node => (
              <Column md={4} xs={12} key={node.title}>
                <Card
                  image={node.fields.media}
                  date={node.date}
                  title={node.title}
                  description={node.excerpt}
                  link={node.link}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Section>
    </Layout>
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
    allWordpressPost(
      filter: { categories: { elemMatch: { name: { eq: "Developer" } } } }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            media
          }
          link
          title
          excerpt
          date(formatString: "MMM D, YYYY")
        }
      }
    }
  }
`
