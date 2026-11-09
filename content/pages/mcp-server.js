import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Banner from 'components/Banner'
import Markdown from 'components/Markdown'
import Heading from 'components/api/components/Heading'
import { Sidebar, Navigation, Content } from 'components/docs'
import slugify from 'utils/api/slugify'

const description =
  'Connect AI agents to your SparkPost account over the Model Context Protocol.'

const components = {
  h2: props => <Heading level={2} {...props} />,
  h3: props => <Heading level={3} {...props} />,
  banner: ({ children, status }) => (
    <Banner status={status}>
      <p>{children}</p>
    </Banner>
  ),
}

const Body = styled(Markdown)`
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;

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

// Anchors must match the ids Heading derives from the same heading text.
const anchor = heading => `#${slugify.markdown({ heading })}`

function tableOfContents(headings) {
  const sections = []

  headings.forEach(({ value, depth }) => {
    if (depth === 2) {
      sections.push({ title: value, path: anchor(value), children: [] })
    } else if (depth === 3 && sections.length > 0) {
      sections[sections.length - 1].children.push({
        title: value,
        anchor: anchor(value),
      })
    }
  })

  // Navigation renders a nested list for any children array, even an empty one.
  const pages = sections.map(({ children, ...section }) =>
    children.length > 0 ? { ...section, children } : section
  )

  return [{ category: 'MCP Server', pages }]
}

const McpServerPage = props => {
  const { rawMarkdownBody, headings } = props.data.markdownRemark

  return (
    <Layout {...props}>
      <Helmet
        title="MCP Server"
        meta={[{ name: 'description', content: description }]}
      />
      <Sidebar>
        <Navigation
          navigation={tableOfContents(headings)}
          location={props.location}
        />
      </Sidebar>
      <Content>
        <Body components={components}>{rawMarkdownBody}</Body>
      </Content>
    </Layout>
  )
}

export default McpServerPage

export const pageQuery = graphql`
  query mcpServerQuery {
    markdownRemark(fileAbsolutePath: { regex: "/content/mcp-server.md$/" }) {
      rawMarkdownBody
      headings {
        value
        depth
      }
    }
  }
`
