import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { rgba, lighten } from 'polished'
import { color, grayscale, shadow } from 'utils/colors'
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
import Demo from 'components/Demo'
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

const TopSection = styled(props => <Section {...props} light />)`
  background-image: url(${flameBackground});
  background-size: 150%;
  padding: 6rem 0;
`

const Title = styled.h1`
  font-size: 2.25em;
  text-align: center;
`

const Subtitle = styled.p`
  margin-bottom: 2rem;
  line-height: 28px;
  font-size: 1.25rem;
  color: ${grayscale(3)};
  text-align: center;
`

const Resource = styled(Link.Unstyled)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${grayscale('white')};
  height: 100%;
  box-shadow: 0px 2px 4px rgba(65, 65, 70, 0.14);
  margin: 0 2rem;
  border-radius: 2px;
  transition: 0.25s;

  p {
    margin: 0;
    padding: 0.666666667rem 1.166666667rem;
    flex-grow: 1;
  }

  svg {
    transform: scale(1.15);
    transition: 0.2s;
    padding: 1rem 0 0.5rem;
    margin: 0 auto;
    display: block;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${shadow(2)};

    svg {
      // transform: scale(1);
    }
  }
`

const ResourceTitle = styled.h4`
  padding-bottom: 1rem;
  margin-bottom: 0;
  border-bottom: 1px solid ${grayscale('light')};
  font-size: 1.05rem;
  font-weight: ${weight('medium')};
  text-align: center;
  width: 100%;
`

const ResourceLink = styled(({ children, ...props }) => (
  <div {...props}>
    <span>
      {children} <i className="fa fa-chevron-right" />
    </span>
  </div>
))`
  border-top: 1px solid ${grayscale('light')};
  font-weight: ${weight('medium')};
  color: ${color('blue')};
  font-size: 0.833333333rem;
  padding: 0.666666667rem 1.166666667rem;
  width: 100%;

  i {
    transition: 0.15s;
    padding-left: 0.166666667rem;
    font-size: 0.7rem;
  }

  span:hover i {
    padding-left: 0.366666667rem;
  }
`

const Code = styled(props => <RawCode viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${color('orange')};
    border-radius: 50%;
    box-sizing: content-box;
  }
`
const Notes = styled(props => <RawNotes viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${color('blue')};
    border-radius: 50%;
    box-sizing: content-box;
  }
`
const People = styled(props => <RawPeople viewBox="-3 -3 30 30" {...props} />)`
  && {
    fill: ${color('mustard')};
    border-radius: 50%;
    box-sizing: content-box;
  }
`

const Resources = styled(props => <h3 {...props}>Resources</h3>)`
  ${uppercase} font-size: .833333333rem;
  font-weight: ${weight('bold')};
  color: ${grayscale(3)};
  margin-bottom: 1.75rem;
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
            <Column md={12} sm={10} xs={11}>
              <Title>SparkPost Developers</Title>
              <Subtitle>
                Start sending with the most powerful email platform.
              </Subtitle>
              <div className="textCenter">
                <input
                  placeholder="Search documentation, API reference, blog posts"
                  type="text"
                  style={{
                    width: `100%`,
                    maxWidth: `700px`,
                    margin: `0 0 5rem 0`,
                    boxSizing: 'border-box',
                    padding: `0.63rem 1rem`,
                    border: `1px solid ${grayscale(8)}`,
                    boxShadow: `0 1px 2px ${rgba(grayscale(1), 0.1)}`,
                  }}
                />
              </div>
              <Row>
                <Column xs={12} sm={4}>
                  <Resource to="/api">
                    <Code />
                    <ResourceTitle>API Reference</ResourceTitle>
                    <p>
                      Comprehensive specification of our API endpoints and
                      parameters.
                    </p>
                    <ResourceLink>Start reading</ResourceLink>
                  </Resource>
                </Column>
                <Column xs={12} sm={4}>
                  <Resource to="https://sparkpost.com/docs">
                    <Notes />
                    <ResourceTitle>Documentation</ResourceTitle>
                    <p>
                      Understand SparkPost and how to use it most effectively.
                    </p>
                    <ResourceLink>Get started</ResourceLink>
                  </Resource>
                </Column>
                <Column xs={12} sm={4}>
                  <Resource to="http://slack.sparkpost.com">
                    <People />
                    <ResourceTitle>Community</ResourceTitle>
                    <p>
                      Join a community happy to help with code or other
                      questions you might have!
                    </p>
                    <ResourceLink>Join now</ResourceLink>
                  </Resource>
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </TopSection>
      <Section>
        <Container>
          <Row center="xs">
            <Column md={9}>
              <Demo />
            </Column>
          </Row>
        </Container>
      </Section>
      {/*       <Section light> */}
      {/*         <Container> */}
      {/*           <Row center="xs"> */}
      {/*             <Column xs={11}> */}
      {/*                 <Row> */}
      {/*                   <Column md={12}> */}
      {/*                     <Anchor.Target title="client-libraries" /> */}
      {/*                     <LanguageWrapper> */}
      {/*                       <Language to="https://github.com/SparkPost/node-sparkpost"> */}
      {/*                         <img height={2 * 18} src={nodeJs} alt="Node.js" /> */}
      {/*                         Node.js */}
      {/*                       </Language> */}
      {/*                       <Language to="https://github.com/SparkPost/php-sparkpost"> */}
      {/*                         <img height={2 * 18} src={php} alt="PHP" /> */}
      {/*                         PHP */}
      {/*                       </Language> */}
      {/*                       <Language to="https://github.com/SparkPost/python-sparkpost"> */}
      {/*                         <img height={2 * 18} src={python} alt="Python" /> */}
      {/*                         Python */}
      {/*                       </Language> */}
      {/*                       <Language to="https://github.com/SparkPost/java-sparkpost"> */}
      {/*                         <img height={2 * 18} src={java} alt="Java" /> */}
      {/*                         Java */}
      {/*                       </Language> */}
      {/*                       <Language to="https://github.com/SparkPost/elixir-sparkpost"> */}
      {/*                         <img height={2 * 18} src={elixir} alt="Elixir" /> */}
      {/*                         Elixir */}
      {/*                       </Language> */}
      {/*                       <Language to="https://github.com/search?l=Ruby&q=sparkpost&type=Repositories"> */}
      {/*                         <img height={2 * 18} src={ruby} alt="Ruby" /> */}
      {/*                         Ruby */}
      {/*                       </Language> */}
      {/*                       <Language to="https://github.com/SparkPost/gosparkpost"> */}
      {/*                         <img height={2 * 18} src={go} alt="Go" /> */}
      {/*                         Go Lang */}
      {/*                       </Language> */}
      {/*                       <Language to="https://github.com/darrencauthon/csharp-sparkpost"> */}
      {/*                         <img height={2 * 18} src={cSharp} alt="C#" /> */}
      {/*                         C# */}
      {/*                       </Language> */}
      {/*                     </LanguageWrapper> */}
      {/*                   </Column> */}
      {/*                 </Row> */}
      {/*             </Column> */}
      {/*           </Row> */}
      {/*         </Container> */}
      {/*       </Section> */}
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
                  author={node.author}
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
      filter: { categories: { name: { eq: "Developer" } } }
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
          author {
            name
            link
          }
        }
      }
    }
  }
`
