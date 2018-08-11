import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { debounce } from 'lodash'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import axios from 'axios'
import Layout from 'components/Layout'
import tableOfContents from '../../content/api/table-of-contents.json'
import { Sidebar, Search, Navigation, Content } from 'components/docs'
import Right from 'components/api/components/Right'
import ApiaryRedirects from 'components/api/ApiaryRedirects'
import SubstitutionReferenceContext from 'components/api/SubstitutionReferenceContext'
import HttpHeading from 'components/api/components/HttpHeading'
import API from 'components/api'
import { grayscale } from 'utils/colors'
import { monospace } from 'utils/fonts'
import { StickyContainer, Sticky } from 'react-sticky'

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

const StyledStickyContainer = styled(StickyContainer)`
  float: right;
  width: 45%;
  padding: 1rem 0;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid ${grayscale('8')};
  z-index: 1;

  > div {
    height: 100%;
  }
`

const Third = styled.div`
  height: 33.3333%;
  width: 100%;

  display: flex;
  flex-direction: column;

  > * {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  ${HttpHeading} {
    padding: 0.5rem;
    background: ${grayscale('light')};
    border-bottom: 1px solid ${grayscale('8')};
  }
`

const Textarea = styled.textarea`
  ${monospace} margin-top: 12px;
  flex-grow: 1;
  border: 0;
  border-bottom: 1px solid ${grayscale('8')};
  outline: 0;
  resize: none;
`

const Results = styled.div`
  margin-top: 12px;
  flex-grow: 1;
  border-bottom: 1px solid ${grayscale('8')};
  outline: 0;
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

class Provider extends Component {
  state = {
    code: {
      substitution_data: `{"name": "world"}`,
      html: `Hello, {{name}}`,
    },
    results: { html: '' },
    errors: [],
    loading: true,
  }

  setREPL = (code, { debounce }) => {
    const newCode = {
      ...this.state.code,
      ...code,
    }

    this.setState({ code: newCode, loading: true })

    if (debounce) {
      this.debouncedFetchPreview({ code: newCode })
    } else {
      this.fetchPreview({ code: newCode })
    }
  }

  // request a preview from the API
  fetchPreview = ({ code }) => {
    axios.post('/.netlify/functions/substitution-repl', code).then(response => {
      const { results, errors = [] } = response.data

      this.setState({ results, errors, loading: false })
    })
  }

  debouncedFetchPreview = debounce(this.fetchPreview, 500)

  componentDidMount() {
    this.fetchPreview(this.state)
  }

  render() {
    return (
      <SubstitutionReferenceContext.Provider
        value={{
          ...this.state,
          setREPL: this.setREPL,
        }}
      >
        {this.props.children}
      </SubstitutionReferenceContext.Provider>
    )
  }
}

class Template extends Component {
  /**
   * In production: only re-render if we change full pages
   */
  shouldComponentUpdate() {
    if (
      process.env.GATSBY_ACTIVE_ENV === 'docs' ||
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
    } = props.data.file.childApiBlueprint
    const { api } = minim.fromRefract(ast)

    const fullTableOfContents = insertPageTableOfContents({
      file: props.pageContext.file,
      tableOfContents,
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
          <Search />
          <Navigation
            navigation={fullTableOfContents}
            location={props.location}
          />
        </Sidebar>
        <Content>
          <Provider>
            <Fragment>
              <SubstitutionReferenceContext.Consumer>
                {data => (
                  <StyledStickyContainer>
                    <Sticky topOffset={-63}>
                      {({ style }) => (
                        <div
                          style={{
                            ...style,
                            paddingTop: `63px`,
                            height: `100%`,
                          }}
                        >
                          <div style={{ height: `100%` }}>
                            <Third>
                              <HttpHeading>Substitution Data</HttpHeading>
                              <Textarea
                                value={data.code.substitution_data}
                                onChange={event =>
                                  data.setREPL(
                                    {
                                      substitution_data: event.target.value,
                                    },
                                    { debounce: true }
                                  )
                                }
                              />
                            </Third>
                            <Third>
                              <HttpHeading>HTML</HttpHeading>
                              <Textarea
                                value={data.code.html}
                                onChange={event =>
                                  data.setREPL(
                                    {
                                      html: event.target.value,
                                    },
                                    { debounce: true }
                                  )
                                }
                              />
                            </Third>
                            <Third>
                              <HttpHeading>Results</HttpHeading>
                              {data.loading && <Results>loading</Results>}
                              {!data.loading &&
                                data.errors.length > 0 && (
                                  <pre>
                                    {data.errors.map(v =>
                                      JSON.stringify(v, null, 2)
                                    )}
                                  </pre>
                                )}
                              {!data.loading &&
                                data.errors.length === 0 && (
                                  <Results
                                    dangerouslySetInnerHTML={{
                                      __html: data.results.html,
                                    }}
                                  />
                                )}
                            </Third>
                          </div>
                        </div>
                      )}
                    </Sticky>
                  </StyledStickyContainer>
                )}
              </SubstitutionReferenceContext.Consumer>
              {!meta.full && <RightBackground />}
              <API api={api} />
            </Fragment>
          </Provider>
        </Content>
      </Layout>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query apiTemplateQuery($file: String!) {
    file(base: { eq: $file }) {
      base
      childApiBlueprint {
        ast
        TableOfContents
        meta {
          title
          description
          full
        }
      }
    }
  }
`
