import React, { Component, Fragment } from 'react'
import { graphql } from 'gatsby'
import { debounce } from 'lodash'
import Helmet from 'react-helmet'
import { rgba, lighten } from 'polished'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import Layout from 'components/Layout'
import tableOfContents from '../../content/api/table-of-contents.json'
import { Sidebar, Search, Navigation, Content } from 'components/docs'
import Right from 'components/api/components/Right'
import ApiaryRedirects from 'components/api/ApiaryRedirects'
import SubstitutionReferenceContext from 'components/api/SubstitutionReferenceContext'
import HttpHeading from 'components/api/components/HttpHeading'
import API from 'components/api'
import { grayscale, color } from 'utils/colors'
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
`

const REPLHeading = styled(HttpHeading)`
  padding: 0.5rem;
  background: ${grayscale('light')};
  border-top: 1px solid ${grayscale('8')};
  border-bottom: 1px solid ${grayscale('8')};

  ${props =>
    props.error &&
    `
    border-color: ${lighten(0.2, '#ec4852')};
    background: #ec4852;
    color: ${grayscale('white')};
  `};
`

const Textarea = styled.textarea`
  ${monospace} margin-top: 12px;
  color: ${grayscale('dark')};
  flex-grow: 1;
  border: 0;
  outline: 0;
  resize: none;
`

const Results = styled.div`
  ${monospace}
  color: ${grayscale('dark')};
  margin-top: 12px;
  white-space: pre;
  height: 100%;
  outline: 0;
`

const Errors = styled(({ errors, ...props }) => (
  <div {...props}>
    {errors.map(error => {
      return <div key={error.message}>{JSON.stringify(error, null, 2)}</div>
    })}
  </div>
))`
  ${monospace} color: #ec4852;
  margin: 0.5rem 0;
  white-space: pre;
  flex-grow: 1;
  overflow: auto;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

// show the loading background after half a second
const Spinner = styled.div`
  z-index: 1;
  position: absolute;
  transform: translateZ(0);
  top: 0.55rem;
  right: 0.5rem;
  border-style: solid;
  border-width: 0.2em;
  border-color: ${color('blue')};
  border-color: ${rgba(grayscale('medium'), 0.25)};
  border-left-color: transparent;
  padding: 0;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  animation: ${rotate360} 0.7s infinite linear;
  opacity: 0;
  transition: opacity 0.15s;
  ${props => props.visible && `opacity: 1;`};
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
  fetchPreview = async ({ code }) => {
    try {
      const { data } = await axios.post(
        '/.netlify/functions/substitution-repl',
        code
      )
      const { results, errors = [] } = data

      this.setState({ results, errors, loading: false })
    } catch (e) {
      this.setState({
        errors: [{ message: e.message }],
        loading: false,
      })
    }
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
            <Wrapper>
              {
                '' /*<SubstitutionReferenceContext.Consumer>
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
                              <REPLHeading>Substitution Data</REPLHeading>
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
                              <REPLHeading>HTML</REPLHeading>
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
                              <Spinner visible={data.loading} />
                              {data.errors.length > 0 ? (
                                <REPLHeading error>Error</REPLHeading>
                              ) : (
                                <REPLHeading>Results</REPLHeading>
                              )}
                              {data.errors.length > 0 ? (
                                <Errors errors={data.errors} />
                              ) : (
                                <Results>{data.results.html}</Results>
                              )}
                            </Third>
                          </div>
                        </div>
                      )}
                    </Sticky>
                  </StyledStickyContainer>
                )}
              </SubstitutionReferenceContext.Consumer>*/
              }
              {!meta.full && <RightBackground />}
              <API api={api} />
            </Wrapper>
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
