import React from 'react'
import { Container, Row, Column } from '../components/Grid'
import { grayscale, color, shadow } from '../utils/colors'
import { uppercase, weight } from '../utils/fonts'
import map from '../utils/map'
import styled from 'styled-components'
import Section from '../components/Section'
import BlogPost from '../components/BlogPost'
import Link from '../components/Link'
import Button from '../components/Button'
import Panel from '../components/Panel'

const CodeBlock = styled.pre`
  background: ${grayscale('white')};
  position: absolute;
  width: 100%;
  border: 1px solid ${grayscale(8)};
  box-shadow: ${shadow(1)};

  ${Button} {
    position: absolute;
    right: 1rem;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  color: ${props => (props.dark ? grayscale('white') : grayscale('dark'))};
`

const Integrations = styled.h5`
  ${uppercase} font-size: .833333333rem;
  margin: 2rem 0 0.25rem 0;
  font-weight: ${weight('medium')};
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
    <Section light style={{ paddingBottom: `4rem` }}>
      <Container className="textCenter">
        <Row>
          <Column md={8} mdOffset={2}>
            <div
              className="textLeft"
              style={{ display: 'inline-block', margin: 'auto' }}
            >
              <Integrations>Libraries</Integrations>
              <h1 className="textCenter">SparkPost + Node.js</h1>
            </div>
            <div>
              <CodeBlock>
                <Button size="small">View on GitHub</Button>
                <code>{`curl -v \\
-H "Content-Type: application/json" \\
-H "Authorization: 14ac5499cfdd2bb2859e4476d2e5b1d2bad079bf" \\
-X GET "https://api.sparkpost.com/api/v1/metrics/deliverability/"`}</code>
              </CodeBlock>
            </div>
          </Column>
        </Row>
      </Container>
    </Section>
    <br />
    <br />
    <br />
    <br />
    <br />
    <Section>
      <Container>
        <Row>
          <Column md={7} mdOffset={2}>
            <div style={{ padding: `0 2rem 0 0` }}>
              <h2>Client Library</h2>
              <p>
                Our Node.js client library lets you easily send emails and make
                other API calls.{' '}
                <Link to="https://app.sparkpost.com/join">
                  Create an account
                </Link>, grab the{' '}
                <Link to="https://github.com/SparkPost/node-sparkpost">
                  Node.js client library
                </Link>, and start sending.
              </p>
              <Link.Action>View on GitHub</Link.Action>
              <br />
              <br />
              Subscribe to the{' '}
              <Link src="https://github.com/SparkPost/node-sparkpost/releases.atom">
                release feed
              </Link>{' '}
              to keep up-to-date with changes.
              <hr />
              <p>
                Here are samples you can use to get started sending email with
                Node.js and SparkPost.
              </p>
              {/*topic:sample topic:sparkpost language:Javascript*/}
              <Table>
                <Project to={'https://sparkpost.com'} target="_blank">
                  <Name>SparkPost/sample</Name>
                  <Description>It does things</Description>
                  <Stars>3</Stars>
                </Project>
              </Table>
              <p>
                Built a sample application? <Link to="">List it here</Link>
              </p>
            </div>
          </Column>
          <Column md={3}>
            <h3>Other tools</h3>
            <Table>
              <Panel sectioned>
                <strong>nodemailer-sparkpost-transport</strong>
                <div>It does things</div>
              </Panel>
              <Panel sectioned>
                <strong>loopback-connector-sparkopst</strong>
                <div>It does things</div>
              </Panel>
              <Panel sectioned>
                <strong>sparkpost-mail</strong>
                <div>It does things</div>
              </Panel>
            </Table>
          </Column>
        </Row>
      </Container>
    </Section>
    <Section light>
      <Container>
        <SectionTitle>Posts about Node.js</SectionTitle>
        <Row>
          <Column md={12}>
            {
              <Row>
                {map(props, 'allWordpressPost', node => (
                  <Column md={4} key={node.title}>
                    <BlogPost
                      image={node.fields.media}
                      date={node.date}
                      author={node.author}
                      title={node.title}
                      description={node.excerpt}
                      link={node.link}
                    />
                  </Column>
                ))}
              </Row>
            }
          </Column>
        </Row>
        <div className="textCenter">
          <Link>See more</Link>
        </div>
      </Container>
    </Section>
  </div>
)

export const pageQuery = graphql`
  query libraryQuery {
    allWordpressPost(
      filter: {
        categories: { name: { eq: "Developer" } }
        tags: { name: { regex: "/node/" } }
      }
      sort: { fields: [date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            media
          }
          categories {
            name
          }
          tags {
            name
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
