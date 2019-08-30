import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from 'components/Layout'
import tableOfContents from '../../content/api/table-of-contents.json'
import { Sidebar, Search, Navigation, Content } from 'components/docs'
import Right from 'components/api/components/Right'
import ApiaryRedirects from 'components/api/ApiaryRedirects'
import API from 'components/api'

import { mediaQuery } from 'utils/breakpoint'
import parseResult from 'minim-parse-result'

const minim = require('minim').namespace()
minim.use(parseResult)

// prettier-ignore
const RightBackground = styled(Right)`
  display: none;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  ${mediaQuery('md', `
    display: block;
  `)}
`

const FullWidth = styled.div`
  .block {
    width: 100%;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }
`

function insertPageTableOfContents({
  tableOfContents,
  file,
  pageTableOfContents,
}) {
  return tableOfContents.map(category => {
    return {
      ...category,
      pages: category.pages.map(page => {
        if (page.file === file) {
          return {
            ...page,
            children:
              pageTableOfContents.length === 1 &&
              pageTableOfContents[0].children
                ? pageTableOfContents[0].children
                : pageTableOfContents, // if we only have one item at the top, skip it
          }
        }

        return page
      }),
    }
  })
}

class Template extends Component {
  /**
   * In production: only re-render if we change full pages
   */
  shouldComponentUpdate() {
    if (
      process.env.GATSBY_ACTIVE_ENV === 'api' ||
      process.env.GATSBY_ACTIVE_ENV === 'development'
    )
      return true

    const isSamePage = this.props.location.pathname === window.location.pathname
    return !isSamePage
  }

  render() {
    const { props } = this
    const {
      ast,
      TableOfContents: pageTableOfContents = [],
      meta,
    } = props.data.apiBlueprint
    const { api } = minim.fromRefract(ast)

    // decorate the table of contents with title, path, and label
    const decoratedTableOfContents = tableOfContents.map(category => {
      return {
        ...category,
        pages: category.pages.map(file => {
          const pageNode = props.data.allApiBlueprint.edges.find(
            ({ node }) => node.fields.file === file
          ).node

          return {
            file,
            title: pageNode.meta.title.replace('API', '').trim(),
            path: pageNode.fields.path,
            label: pageNode.meta.label,
          }
        }),
      }
    })

    const fullTableOfContents = insertPageTableOfContents({
      file: props.pageContext.file,
      tableOfContents: decoratedTableOfContents,
      pageTableOfContents,
    })

    const Wrapper = meta.full ? FullWidth : Fragment

    return (
      <Layout {...props}>
        <Helmet
          title={meta.title}
          meta={[{ name: 'description', content: meta.description }]}
        />
        <ApiaryRedirects />
        <Sidebar>
          <Search index="api_reference" placeholder="Search API reference" />
          <Navigation
            navigation={fullTableOfContents}
            location={props.location}
          />
        </Sidebar>
        <Content>
          <Wrapper>
            {!meta.full && <RightBackground />}
            <API api={api} />
          </Wrapper>
        </Content>
      </Layout>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query apiTemplateQuery($file: String!) {
    allApiBlueprint {
      edges {
        node {
          meta {
            title
            label
          }
          fields {
            path
            file
          }
        }
      }
    }
    apiBlueprint(fields: { file: { eq: $file } }) {
      ast
      TableOfContents
      meta {
        title
        description
        full
      }
      fields {
        path
      }
    }
  }
`
