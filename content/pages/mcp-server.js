import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Banner from 'components/Banner'
import Markdown from 'components/Markdown'

const description =
  'Connect an AI assistant to your SparkPost account over the Model Context Protocol.'

const components = {
  banner: ({ children, status }) => (
    <Banner status={status}>
      <p>{children}</p>
    </Banner>
  ),
}

const Body = styled(Markdown)`
  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 3rem;
  }

  h3 {
    margin-top: 2rem;
  }

  table {
    width: 100%;
  }
`

const McpServerPage = props => (
  <Layout {...props}>
    <Helmet
      title="MCP Server"
      meta={[{ name: 'description', content: description }]}
    />
    <Section borderless>
      <Container>
        <Row center="xs">
          <Column md={9} sm={11} xs={12}>
            <Body components={components}>
              {props.data.markdownRemark.rawMarkdownBody}
            </Body>
          </Column>
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default McpServerPage

export const pageQuery = graphql`
  query mcpServerQuery {
    markdownRemark(fileAbsolutePath: { regex: "/content/mcp-server.md$/" }) {
      rawMarkdownBody
    }
  }
`
