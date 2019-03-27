import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-mdx'
// import { MDXProvider } from '@mdx-js/tag'
import { first } from 'lodash'
import Heading from 'components/api/components/Heading'
import Markdown from 'components/Markdown'
import Layout from 'components/Layout'
import { Sidebar, Search, Navigation, Content } from 'components/docs'
import tableOfContents from '../../content/momentum/table-of-contents.json'

const Wrapper = styled.div`
  width: 100%;
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;
`

const EmptyHeader = styled.th`
  padding: 0;
`

const TableOverflow = styled.div`
  overflow: scroll;
`

let components = {
  h1(props) {
    return <Heading level={1} {...props} />
  },
  h2(props) {
    return <Heading level={2} {...props} />
  },
  h3(props) {
    return <Heading level={3} {...props} />
  },
  h4(props) {
    return <Heading level={4} {...props} />
  },
  h5(props) {
    return <Heading level={5} {...props} />
  },
  h6(props) {
    return <Heading level={6} {...props} />
  },
  table(props) {
    return (
      <TableOverflow>
        <table {...props} />
      </TableOverflow>
    )
  },
  th(props) {
    return props.children && props.children.length > 0 ? (
      <th {...props} />
    ) : (
      <EmptyHeader />
    )
  },
  a({ href = '', ...props }) {
    return <a href={href.startsWith('/') ? href : `../${href}`} {...props} />
  },
}

export default class MomentumTemplate extends Component {
  render() {
    const { props } = this
    const { markdownRemark } = props.data
    const title =
      markdownRemark.headings.length > 0
        ? `${first(markdownRemark.headings).value} - Momentum`
        : 'Momentum'

    return (
      <Layout {...props}>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: markdownRemark.excerpt },
            { name: 'robots', content: 'noindex' },
          ]}
        />
        <Sidebar>
          <Search index="momentum" placeholder="Search Momentum" />
          <Navigation navigation={tableOfContents} location={props.location} />
        </Sidebar>
        <Content>
          <Wrapper>
            <Markdown components={components}>{markdownRemark.rawMarkdownBody}</Markdown>
          </Wrapper>
        </Content>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query markdownRemarkQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      rawMarkdownBody
      headings {
        value
      }
    }
  }
`
