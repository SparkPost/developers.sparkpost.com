import React from 'react'
import styled, { css } from 'styled-components'
import { rgba, lighten } from 'polished'
import { color, grayscale, shadow } from 'utils/colors'
import { uppercase, weight } from 'utils/fonts'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Card from 'components/Card'
import ClientLibrary from 'components/ClientLibrary'
import Panel from 'components/Panel'
import Event from 'components/Event'
import BlogPost from 'components/BlogPost'
import Banner from 'components/Banner'
import Button from 'components/Button'
import Link from 'components/Link'
import map from 'utils/map'
import { get } from 'lodash'

import elixir from 'assets/libraries/elixir.png'
import go from 'assets/libraries/go.png'
import java from 'assets/libraries/java.png'
import node_js from 'assets/libraries/node.png'
import php from 'assets/libraries/php.png'
import python from 'assets/libraries/python.png'

import RawCode from 'components/icons/Code'
import RawNotes from 'components/icons/Notes'
import RawPeople from 'components/icons/People'

const Code = styled((props) => <RawCode viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${grayscale('white')};
    background: ${color('orange')};
    border-radius: 50%;
    border: 3px solid ${lighten(.25, color('orange'))};
    box-sizing: content-box;
  }
`
const Notes = styled((props) => <RawNotes viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${grayscale('white')};
    background: ${color('blue')};
    border-radius: 50%;
    border: 3px solid ${lighten(.25, color('blue'))};
    box-sizing: content-box;
  }
`
const People = styled((props) => <RawPeople viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${grayscale('white')};
    background: ${color('mustard')};
    border-radius: 50%;
    border: 3px solid ${lighten(.25, color('mustard'))};
    box-sizing: content-box;
  }
`

const SectionLink = styled(Link.Unstyled)`
  &:hover svg {
    transform: scale(1);
  } 
`

const SectionTitle = styled.h4`
  margin-bottom: .35rem;

  svg {
    margin-right: .35rem;
    transform: scale(.9);
    transition: .2s;
  }
`

const Title = styled.h1`
  margin-top: 3.5rem;
  color: ${grayscale('white')};
  font-size: 2em;
`

const Subtitle = styled.p`
  margin-bottom: 2rem;
  line-height: 28px;
  font-size: 1.166666667rem;
`


const Language = styled(Link.Unstyled)`
  display: block;
  color: ${grayscale(5)};
  font-weight: ${weight('medium')};
  text-align: center;

  &:hover {
    color: ${color('blue')};
  }

  img {
    margin: 0 auto .5rem;
    display: block;
  }
`

const TopSection = styled(Section)`
  background-color: ${grayscale('dark')};
  background-image: url(https://www.sparkpost.com/wp-content/themes/jolteon/images/background-pattern-flame.png);
  background-size: cover;
  color: ${grayscale('white')};
  padding: 8rem 0 10rem 0;
`

const Samples = styled.div`
  background: ${grayscale('white')};
  border-radius: 4px;
  box-shadow: 0 10px 31px -13px ${rgba(grayscale('dark'), .1)}, 0 12px 20px -9px ${rgba('#3D3D49', .1)};
  margin-left: 1rem;
  min-height: 300px;
`

const Sample = styled.pre`
  padding: 1rem;
  margin: 0;
  background: transparent;

  color: ${grayscale('medium')};
  overflow: auto;
`


const Tabs = styled.div`
  border-bottom: 1px solid ${grayscale('light')};
  padding: 0 1rem;
`

const Tab = styled.button`
  background: transparent;
  border-width: 3px 0;
  border-style: solid;
  border-color: transparent;
  padding: .65rem 0;
  margin: 0 .5rem;
  color: ${grayscale(4)};
  font-size: .777777778rem;
  font-weight: ${weight('medium')};
  outline: 0;
  bottom: -1px;
  cursor: pointer;

  ${props => props.active ? `
    border-bottom-color: ${color('orange')};
    color: ${color('orange')};` : `
      
      &:hover {
        color: ${grayscale(3)};
        border-bottom-color: ${grayscale(8)};
      }
    `}
`

const Resources = styled((props) => <h3 {...props}>Resources</h3>)`
  ${uppercase}
  font-size: .833333333rem;
  font-weight: ${weight('bold')};
  color: ${grayscale(3)};
  margin-bottom: 1.75rem;
`


const timelineWidth = 6
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

const StartIcon = styled(({ icon, color, ...props }) => <div {...props}><i className={`fa fa-${icon}`}></i></div>)`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background: ${props => color(props.color)};
  line-height: 35px;
  text-align: center;
  color: ${rgba(grayscale('white'), .4)};
  font-size: 1.166666667rem;
  position: absolute;
  top: 0;
  left: ${timelineWidth/2}px;
  transform: translate(-50%, -15%);
`

const SecondaryButton = styled(Button)`
  background: ${grayscale('medium')};
  border-color: ${color('blue')};
  color: ${grayscale('white')};
`

const IndexPage = (props) => {
  const now = new Date()
  const upcomingEvents = get(props, 'data.eventsJson.events', []).filter(({ end_date }) => new Date(end_date) > now)

  return (
    <div>
      <TopSection>
        <Container>
          <Row>
            <Column>
              <Title>Start Sending Email in Minutes!</Title>
              <Subtitle>The world’s most powerful email delivery solution is now yours in a developer-friendly, quick to set up cloud service. </Subtitle>
              <Button secondary>Sign Up</Button>
              <Button outline>Get Started</Button>
            </Column>
            <Column sm={6}>
              <Samples>
                <Tabs>
                  <Tab active>cURL</Tab>
                  <Tab>Node.js</Tab>
                </Tabs>
                <Sample><code>{`curl -XPOST https://api.sparkpost.com/api/v1/transmissions 
-H "Authorization: <YOUR API KEY>" \\
-H "Content-Type: application/json" \\
-d '{
    "options": { "sandbox": true },
    "content": {
      "from": "testing@sparkpostbox.com",
      "subject": "Oh hey",
      "text":"Testing SparkPost - the most awesomest email service in the world"
    },
    "recipients": [
      {"address": "developers+curl@sparkpost.com" }
    ]
  }'`}</code></Sample>
              </Samples>
            </Column>
          </Row>
        </Container>
      </TopSection>
      <Section light spacingTop="xs" spacingBottom="none">
        <Container style={{ marginTop: -95 }}>
          <Row center="xs">
            <Column xs={11}>
              <Panel sectioned style={{ padding: `1rem 1.5rem .75rem` }}>
                <Resources/>
                <Row>
                  <Column xs={10} sm={4}>
                    <SectionLink to="/api">
                      <SectionTitle><Code /> API Reference</SectionTitle>
                      <p>Comprehensive documentation of our API endpoints &amp; parameters.</p>
                    </SectionLink>
                  </Column>
                  <Column xs={10} sm={4}>
                    <SectionLink to="https://sparkpost.com/docs">
                      <SectionTitle><Notes /> Documentation</SectionTitle>
                      <p>Understand SparkPost and how to use it most affectively.</p>
                    </SectionLink>
                  </Column>
                  <Column xs={10} sm={4}>
                    <SectionLink to="http://slack.sparkpost.com">
                      <SectionTitle><People /> Community</SectionTitle>
                      <p>Join a community happy to help with code or other questions you might have!</p>
                    </SectionLink>
                  </Column>
                </Row>
                <Row>
                  <Column md={12}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      borderTop: `1px solid ${grayscale(8)}`,
                      marginTop: `1rem`,
                      paddingTop: `1.75rem`,
                    }}>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={node_js} title="Node.js" />
                          Node.js
                        </Language>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={php} title="PHP" />
                          PHP
                        </Language>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={python} title="Python" />
                          Python
                        </Language>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={java} title="Java" />
                          Java
                        </Language>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={elixir} title="Elixir" />
                          Elixir
                        </Language>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={elixir} title="Rails" />
                          Rails
                        </Language>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={go} title="Go" />
                          Go
                        </Language>
                        <Language to="https://github.com/SparkPost/node-sparkpost">
                          <img height={2*18} src={go} title="C#" />
                          C#
                        </Language>
                    </div>
                  </Column>
                </Row>
              </Panel>
            </Column>
          </Row>
        </Container>
        <Container>
          <Row center="xs">
            <Column sm={8}>
              <h2 style={{ fontSize: `1.5rem`, textAlign: 'center', margin: `10rem 0 2rem` }}>Get Started With SparkPost</h2>
              <p style={{
                textAlign: 'center',
                fontSize: `1.166666667rem`,
                color: grayscale(4),
                lineHeight: `1.5em`,
                marginBottom: `4.5rem`
              }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque dictum semper. Check out the <Link to="https://www.sparkpost.com/docs/getting-started/getting-started-sparkpost/">full guide</Link>.</p>
            </Column>
          </Row>
          <Row center="xs">
            <Column sm="5">
              <div style={{ padding: `0 0 0 .75rem` }}>
                <StartTimeline />
                <StartStep>
                  <StartIcon icon="user" color="magenta" />
                  <h3>Sign up for a Developer Account</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque dictum semper. Phasellus accumsan dolor risus.</p>
                  <Link to="https://app.sparkpost.com/join">Sign up <i className="fa fa-chevron-right"></i></Link>
                </StartStep>
                <StartStep>
                  <StartIcon icon="at" color="mustard" />
                  <h3>Setup your domain</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque dictum semper. Phasellus accumsan dolor risus.</p>
                  <Link to="https://app.sparkpost.com/join">Create a sending domain <i className="fa fa-chevron-right"></i></Link>
                </StartStep>
                <StartStep>
                  <StartIcon icon="server" color="teal" />
                  <h3>Start sending!</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque dictum semper. Phasellus accumsan dolor risus.</p>
                  <Link to="https://app.sparkpost.com/join">Sending your first email <i className="fa fa-chevron-right"></i></Link>
                </StartStep>
              </div>
            </Column>
            </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="textCenter" style={{ marginBottom: `4rem` }}>Engineering Blog</h2>
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