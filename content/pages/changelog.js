import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Panel from 'components/Panel'
import Markdown from 'components/Markdown'
import Anchor from 'components/Anchor'
import Link from 'components/Link'
import { grayscale } from 'utils/colors'

const components = {
  h1(props) {
    return <h3 {...props} />
  },
  h2(props) {
    return <h4 {...props} />
  },
}

export default props => {
  const {
    data: {
      allMarkdownRemark: { edges: changes },
    },
  } = props

  return (
    <Layout {...props}>
      <Section light>
        <Container>
          <Row center="xs">
            <Column md={7} sm={10} xs={11}>
              <h1 className="textCenter">Changelog</h1>
              <p className="textCenter">
                A running log of what's new and what's been changed in
                SparkPost.
              </p>
              <br />
              <br />
              <br />
              {changes.map(
                (
                  {
                    node: {
                      frontmatter: { title, date, image, details },
                      rawMarkdownBody: body,
                    },
                  },
                  i
                ) => (
                  <Panel key={i}>
                    <Panel.Header
                      right={
                        <span
                          style={{
                            fontSize: `.833333333rem`,
                            fontWeight: `500`,
                            color: grayscale(4),
                          }}
                        >
                          {title && date}
                        </span>
                      }
                    >
                      <Panel.Title>
                        <Anchor>{title || date}</Anchor>
                      </Panel.Title>
                    </Panel.Header>
                    {image && (
                      <img
                        src={image}
                        alt={title || `${date} image`}
                        style={{
                          width: `100%`,
                        }}
                      />
                    )}
                    <Panel.Section>
                      <Markdown components={components}>{body}</Markdown>
                      {details && <Link>Show details</Link>}
                    </Panel.Section>
                    {details && (
                      <Panel.Section>
                        <Markdown components={components}>{details}</Markdown>
                      </Panel.Section>
                    )}
                  </Panel>
                )
              )}
            </Column>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query changelogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/changelog/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            details
            date(formatString: "MMMM D, YYYY")
          }
          rawMarkdownBody
        }
      }
    }
  }
`
