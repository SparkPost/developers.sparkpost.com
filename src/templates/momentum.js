import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-mdx'
// import { MDXProvider } from '@mdx-js/tag'
import { first } from 'lodash'
import { grayscale } from 'utils/colors'
import Heading from 'components/api/components/Heading'
import Markdown from 'components/Markdown'
import Layout from 'components/Layout'
import { Sidebar, Search, Navigation, Content } from 'components/docs'
import tableOfContents from '../../content/momentum/table-of-contents.json'

const TableOverflow = styled.div`
  overflow: scroll;
`

const Wrapper = styled.div`
  width: 100%;
  max-width: 45rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  > div > div {
    > ${TableOverflow}:first-child, > ${TableOverflow}:last-child {
      background: #f5f5f8;
      border: 1px solid ${grayscale(8)};
      border-radius: 3px;

      table {
        margin: 0 0 0 0;
        width: 100%;

        td,
        th {
          border: 0;
          text-align: center;
          vertical-align: middle;
          font-size: 0.8125rem;
        }

        tr + tr {
          td,
          th {
            border-top: 1px solid ${grayscale(8)};
          }
        }
      }
    }

    > ${TableOverflow}:first-child {
      td,
      th {
        &:first-child,
        &:last-child {
          width: 1px;
          padding: 0 2rem;
        }
      }
    }
  }
`

const EmptyHeader = styled.th`
  padding: 0;
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
    return (
      <a
        href={
          href.startsWith('/') || href.startsWith('.') ? href : `../${href}`
        }
        {...props}
      />
    )
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
            <Markdown components={components}>
              {markdownRemark.rawMarkdownBody}
            </Markdown>
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
