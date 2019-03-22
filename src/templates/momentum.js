import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
import { MDXProvider } from '@mdx-js/tag'
import { first } from 'lodash'
import Heading from 'components/api/components/Heading'
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
  a({ href, ...props }) {
    return <a href={href.startsWith('/') ? href : `../${href}`} {...props} />
  },
}

export default class MomentumTemplate extends Component {
  render() {
    const { props } = this
    const { mdx } = props.data
    const title =
      mdx.headings.length > 0
        ? `${first(mdx.headings).value} - Momentum`
        : 'Momentum'

    // const decoratedTableOfContents = tableOfContents.map(category => {
    // return {
    // ...category,
    // pages: category.pages.map(file => {
    //   const pageNode = props.data.allApiBlueprint.edges.find(
    //     ({ node }) => node.fields.file === file
    //   ).node
    //   return {
    //     file,
    //     title: pageNode.meta.title,
    //     path: pageNode.fields.path,
    //     label: pageNode.meta.label,
    //   }
    // }),
    // }
    // })

    return (
      <Layout {...props}>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: mdx.excerpt },
            { name: 'robots', content: 'noindex' },
          ]}
        />
        <Sidebar>
          <Search index="momentum" placeholder="Search Momentum" />
          <Navigation navigation={tableOfContents} location={props.location} />
        </Sidebar>
        <Content>
          <Wrapper>
            <MDXProvider components={components}>
              <MDXRenderer>{mdx.code.body}</MDXRenderer>
            </MDXProvider>
          </Wrapper>
        </Content>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query MDXQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      headings {
        value
      }
      code {
        body
      }
    }
  }
`
