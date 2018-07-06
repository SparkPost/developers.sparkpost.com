import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { darken } from 'polished'
import { color, grayscale } from 'utils/colors'
import { uppercase, weight, monospace } from 'utils/fonts'
import Markdown from 'components/Markdown'
import Tooltip from 'components/Tooltip'
import Link from 'components/Link'
import { isString, isUndefined, isEmpty, first, last, get, uniq } from 'lodash'
import Layout from 'components/Layout'
import TableOfContents from '../../content/api/table-of-contents.json'
import { Sidebar, Search, Navigation, Content } from 'components/docs'
import Banner from 'components/Banner'
import dataStructureToJson from 'utils/api/dataStructureToJson'
import generateSample from 'utils/api/generateSample'
import plainSlugify from 'utils/slugify'
import slugify from 'utils/api/slugify'

import BlockMarkdownBase from 'components/api/components/BlockMarkdown'
import Section from 'components/api/components/Section'
import Right from 'components/api/components/Right'
import Json from 'components/api/components/Json'
import Heading from 'components/api/components/Heading'
import Debug from 'components/api/Debug'

import { mediaQuery } from 'utils/breakpoint'
import parseResult from 'minim-parse-result'

const debug = false

const DataStructureContext = React.createContext([])

const components = {
  banner({ children, status }) {
    return (
      <div className="block">
        <Banner status={status}>
          <p>{children}</p>
        </Banner>
      </div>
    )
  },
  'data-structure': ({ id, title, sample }) => (
    <DataStructureContext.Consumer>
      {dataStructures => {
        const Wrapper = sample !== undefined ? Section : Fragment
        return (
          <Wrapper>
            {sample !== undefined && (
              <Right>
                <HttpTitle>Example</HttpTitle>
                <Json>{format(unescape(sample))}</Json>
              </Right>
            )}
            <div className="block">
              <DataStructure
                title={title}
                dataStructure={dataStructures.find(dataStructure => {
                  return (
                    id.toLowerCase() ===
                    dataStructure.content.id.toValue().toLowerCase()
                  )
                })}
              />
            </div>
          </Wrapper>
        )
      }}
    </DataStructureContext.Consumer>
  ),
  row: Section,
  left: ({ children }) => {
    return <BlockMarkdown>{children}</BlockMarkdown>
  },
  right: ({ children }) => {
    return <Right>{children}</Right>
  },
}

function values(element, props = []) {
  const obj = {}

  for (let prop of props) {
    obj[prop] = element[prop].toValue()
  }

  return obj
}

const BlockMarkdown = props => (
  <BlockMarkdownBase components={components} {...props} />
)

function API({ api }) {
  // we don't seem to use these since we just have a single resource group
  const { title, copy } = values(api, ['title', 'copy'])

  const dataStructures = api.dataStructures.first
    ? api.dataStructures.first.content
    : null

  return (
    <div>
      <DataStructureContext.Provider value={dataStructures}>
        <Debug title="api" enable={debug}>
          {title && (
            <Heading level={1} id={plainSlugify(title)}>
              {title}
            </Heading>
          )}
          {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
          {api.resourceGroups.map((resourceGroup, i) => (
            <ResourceGroup key={i} resourceGroup={resourceGroup} />
          ))}
        </Debug>
      </DataStructureContext.Provider>
    </div>
  )
}

function ResourceGroup({ resourceGroup }) {
  const { title, copy } = values(resourceGroup, ['title', 'copy'])

  return (
    <div>
      <Debug title="resource group" enable={debug}>
        <Section>
          {title && (
            <div
              className="block"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <Heading level={1} id={slugify.resourceGroup({ resourceGroup })}>
                {title}
              </Heading>
              <Tooltip content="Import the SparkPost API as a Postman collection">
                <Link
                  style={{
                    lineHeight: '1rem',
                  }}
                  to="https://app.getpostman.com/run-collection/5d9ae743a661a15d64bb"
                  target="_blank"
                >
                  <img
                    src="https://run.pstmn.io/button.svg"
                    alt="Run in Postman"
                    style={{ maxWidth: 'inherit' }}
                  />
                </Link>
              </Tooltip>
            </div>
          )}
          {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
        </Section>
        {resourceGroup.resources.map((resource, i) => (
          <Resource key={i} resource={resource} resourceGroup={resourceGroup} />
        ))}
      </Debug>
    </div>
  )
}

function Resource({ resource, resourceGroup }) {
  const { title, copy } = values(resource, ['title', 'copy'])

  return (
    <div>
      <Debug title="resource" enable={debug}>
        <Section style={{ marginTop: '2rem' }}>
          {title &&
            (resource.transitions.length > 1 || !isEmpty(copy)) && (
              <Heading
                level={3}
                id={slugify.resource({ resourceGroup, resource })}
                style={{ fontSize: `1rem` }}
              >
                {title}
              </Heading>
            )}
          {!isEmpty(copy) && <BlockMarkdown>{copy}</BlockMarkdown>}
        </Section>
        {resource.transitions.map((transition, i) => (
          <Transition
            key={i}
            transition={transition}
            resource={resource}
            resourceGroup={resourceGroup}
          />
        ))}
      </Debug>
    </div>
  )
}

function mergeDuplicateTransactions(transactions) {
  const transactionsArray = transactions.map(transition => transition.clone())

  // get all the unique transactions based on their request.
  // For every identical transaction after, add its response to the first one
  const uniqueTransactions = transactionsArray.reduce((arr, transaction) => {
    // first element will always be unique
    if (arr.length === 0) return [transaction]

    const lastTransaction = last(arr)

    // TODO: also check against the method and headers
    if (
      get(lastTransaction.request.messageBody, 'content') ===
      get(transaction.request.messageBody, 'content')
    ) {
      // we are setting up a responses array since we are adding this response onto the last request
      lastTransaction.responses = lastTransaction.responses || [
        lastTransaction.response,
      ]

      lastTransaction.responses.push(transaction.response)

      return arr
    }

    return [...arr, transaction]
  }, [])

  return minim.toElement(uniqueTransactions)
}

const methodMap = {
  POST: darken(0.175, color('green')),
  GET: color('blue'),
  PUT: color('magenta'),
  DELETE: color('red'),
}

function Transition({ transition, resource, resourceGroup }) {
  const { title, copy, method } = values(transition, [
    'title',
    'copy',
    'method',
  ])

  const href = (transition.href || {}).content || resource.href.content
  const version = href === 'ab-testing' ? 'labs' : 'v1'

  return (
    <div>
      <Debug title="transition" enable={debug}>
        <Section>
          <Right>
            {transition.transactions.length &&
              mergeDuplicateTransactions(transition.transactions).map(
                (transaction, i) => (
                  <Transaction
                    key={i}
                    transaction={transaction}
                    transition={transition}
                    resource={resource}
                  />
                )
              )}
          </Right>
          {title && (
            <Heading
              level={3}
              id={slugify.transition({ resourceGroup, resource, transition })}
            >
              {title}
            </Heading>
          )}
          <div className="block">
            <div
              style={{
                borderTop: `1px solid ${grayscale(8)}`,
                borderBottom: `1px solid ${grayscale(8)}`,
                padding: `.5rem 0`,
                fontSize: `.833333333rem`,
                marginBottom: `1rem`,
                wordWrap: `break-word`,
              }}
            >
              <b
                style={{
                  color: methodMap[method],
                  fontWeight: weight('medium'),
                  marginRight: `0.666666667rem`,
                }}
              >
                {method}
              </b>
              <span
                style={{
                  fontWeight: weight('medium'),
                  color: grayscale(4),
                }}
              >{`/api/${version}${href}`}</span>
            </div>
          </div>
          {transition.hrefVariables && (
            <Parameters parameters={transition.hrefVariables} />
          )}
          {transition.data && <DataStructure dataStructure={transition.data} />}
          {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
        </Section>
      </Debug>
    </div>
  )
}

function Transaction({ transaction, transition, resource }) {
  const { title, copy } = values(transaction, ['title', 'copy'])

  return (
    <div>
      <Debug title="transaction" enable={debug}>
        {title && <Heading level={4}>{title}</Heading>}
        {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
        {transaction.request && (
          <Request
            request={transaction.request}
            transition={transition}
            resource={resource}
          />
        )}
        {transaction.responses ? (
          <Responses responses={transaction.responses} />
        ) : (
          <Responses responses={[transaction.response]} />
        )}
      </Debug>
    </div>
  )
}

function format(content) {
  try {
    return JSON.stringify(JSON.parse(content.trim()), null, 2)
  } catch (e) {
    return content
  }
}

const HttpTitle = styled.h4`
  font-size: 0.888888889rem;
  font-weight: ${weight('medium')};
`

function Request({ request, transition, resource }) {
  const { title, copy, method } = values(request, ['title', 'copy', 'method'])

  const href = (transition.href || {}).content || resource.href.content
  const version = href === 'ab-testing' ? 'labs' : 'v1'

  let modifiedHref = href

  if (transition.hrefVariables) {
    const jsonArray = dataStructureToJson({ content: transition.hrefVariables })

    for (let param of jsonArray) {
      const value = isUndefined(param.value) ? '' : param.value
      // replace it if it is a url parameter
      modifiedHref = modifiedHref.replace(`{${param.name}}`, value)

      // add the value if it is a query parameter
      modifiedHref = modifiedHref.replace(
        // eslint-disable-next-line
        new RegExp(`(.+)({\?(?:.+,)?)${param.name}((?:,.+)?})`, 'i'),
        `$1$2${param.name}=${value}&$3`
      )
    }

    // remove the comma deliminators
    modifiedHref = modifiedHref.replace(/&,/g, '&')

    // remove the wrapper notation from the query params
    modifiedHref = modifiedHref.replace(/(.+){\?(.+)}/i, `$1?$2`)

    // remove the extra ampersand
    modifiedHref = modifiedHref.replace(/&$/, '')
  }

  return (
    <div>
      <Debug title="request" enable={debug}>
        <HttpTitle>{title ? `Request: ${title}` : `Request`}</HttpTitle>
        {copy && <Markdown>{copy}</Markdown>}
        <pre style={{ padding: `.5rem`, whiteSpace: `pre-wrap` }}>
          <code>
            {method && (
              <Fragment>
                {method} {`/api/${version}${modifiedHref}`}
              </Fragment>
            )}
          </code>
        </pre>
        {request.messageBody && (
          <Json>{format(request.messageBody.content)}</Json>
        )}
      </Debug>
    </div>
  )
}

class Responses extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  setActiveResponse = i => {
    this.setState({ activeIndex: i })
  }

  render() {
    // if we have no body or status code on the only response, then it was just empty so we don't have a response for the request
    if (
      this.props.responses.length === 1 &&
      !this.props.responses[0].messageBody &&
      !this.props.responses[0].statusCode
    ) {
      return null
    }

    return (
      <div>
        <Debug title="responses" enable={debug}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              paddingTop: '2rem',
            }}
          >
            <HttpTitle style={{ margin: 0 }}>Response</HttpTitle>
            <div style={{ display: 'flex' }}>
              {this.props.responses.map((response, i) => (
                <StatusCode
                  key={i}
                  code={response.statusCode.toValue()}
                  active={i === this.state.activeIndex}
                  onClick={() => this.setActiveResponse(i)}
                />
              ))}
            </div>
          </div>
          {this.props.responses.map((response, i) => (
            <Fragment key={i}>
              <Json
                style={{
                  display: i === this.state.activeIndex ? 'block' : 'none',
                }}
              >
                {response.messageBody
                  ? format(response.messageBody.content)
                  : '// Empty response body'}
              </Json>
              {response.copy && (
                <Markdown
                  style={{
                    display: i === this.state.activeIndex ? 'block' : 'none',
                  }}
                >
                  {response.copy.toValue()}
                </Markdown>
              )}
            </Fragment>
          ))}
        </Debug>
      </div>
    )
  }
}

const StatusCodeWrapper = styled.button`
  font: inherit;
  color: ${grayscale('white')};
  background: transparent;
  border: 0;
  ${monospace} padding: .166666667rem .5rem;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;

  &:before {
    content: '';
    display: inline-block;
    margin-right: 0.333333333rem;
    height: 0.333333333rem;
    width: 0.333333333rem;
    border-radius: 50%;

    ${props =>
      props.code.startsWith('2') && `background: ${color('green')}`} ${props =>
        props.code.startsWith('3') &&
        `background: ${color('mustard')}`} ${props =>
        props.code.startsWith('4') &&
        `background: ${color('orange')}`} ${props =>
        props.code.startsWith('5') && `background: ${color('red')}`};
  }

  ${props =>
    props.active &&
    `
    background: ${grayscale('medium')};
    background: #38383b; // dark theme
  `};
`

function StatusCode({ code, active, ...props }) {
  return (
    <StatusCodeWrapper {...props} code={`${code}`} active={active}>
      {code}
    </StatusCodeWrapper>
  )
}

function Parameters({ parameters }) {
  const jsonArray = dataStructureToJson({ content: parameters })

  return (
    <AttributesWrapper className="block">
      <AttributesTitle>Parameters</AttributesTitle>
      {jsonArray.map((props, i) => (
        <Attribute key={i} {...props} isParameter={true} />
      ))}
    </AttributesWrapper>
  )
}

function DataStructure({ title, dataStructure }) {
  const jsonArray = dataStructureToJson(dataStructure)

  return (
    <Attributes title={title} id={dataStructure.content.id.toValue()}>
      {jsonArray.map((props, i) => <Attribute key={i} {...props} />)}
    </Attributes>
  )
}

const AttributesTitle = styled.h4`
  && {
    ${uppercase} font-weight: ${weight('medium')};
    font-size: 0.75rem;
    color: ${grayscale(4)};
    margin: 2rem 0 0.5rem;
  }
`

function Attributes({ title, id, children }) {
  return (
    <AttributesWrapper className="block">
      <AttributesTitle>{title || 'Request Body'}</AttributesTitle>
      {children}
    </AttributesWrapper>
  )
}

const AttributesWrapper = styled.div`
  margin-bottom: 1rem;
`

function toType(obj) {
  return {}.toString
    .call(obj)
    .match(/\s([a-zA-Z]+)/)[1]
    .toLowerCase()
}

const nativeTypes = ['boolean', 'string', 'number', 'object', 'array', 'enum']

function Attribute(props) {
  const {
    name,
    type,
    description,
    required,
    samples,
    children,
    value,
    default: defaultValue,
    enumerations,
    isParameter,
  } = props

  const sample = first(samples)
  const sampleTypes =
    sample && type === 'array' && sample.map(member => toType(member))
  const actualType = nativeTypes.includes(type) ? type : 'object'

  let isMultipleTypes, types
  if (actualType === 'enum') {
    // where we have no values for an enum, it is simply the definition that a single field can be of multiple types
    isMultipleTypes = !enumerations.find(
      enumeration => !isEmpty(enumeration.value)
    )

    if (isMultipleTypes) {
      types = uniq(enumerations.map(({ type }) => type))
    }
  }

  return (
    <AttributeWrapper>
      <AttributeProperties>
        <Name>{name}</Name>
        <Property>
          {isMultipleTypes
            ? types.join(' or ')
            : actualType /*generate link to dereferenced type */}
          {actualType === 'array' &&
            ((sampleTypes &&
              uniq(sampleTypes).length === 1 &&
              ` of ${first(sampleTypes)}s`) ||
              (value &&
                value.length === 1 &&
                isEmpty(value[0]) &&
                ` of ${toType(
                  value[0] || ''
                )}s`)) /* if its an array, array of what??? */}
        </Property>
        {'' /* required, value, and default are all mutually exlusive */}
        {required && <Required>required</Required>}
        {!isParameter &&
          actualType !== 'object' &&
          !isEmpty(actualType === 'array' ? value[0] : value) && (
            <Property>
              , value is{' '}
              <code>{isString(value) ? value : JSON.stringify(value)}</code>
            </Property>
          )}
        {actualType !== 'object' &&
          !isUndefined(defaultValue) && (
            <Property>
              , default is{' '}
              <code>
                {isString(defaultValue)
                  ? defaultValue
                  : JSON.stringify(defaultValue)}
              </code>
            </Property>
          )}
      </AttributeProperties>
      <Markdown>{description}</Markdown>
      {'' /* samples should be shown through example JSON blobs */}
      {
        '' /* type !== 'object' && sample && <div>Example: <code>{isString(sample) ? sample : JSON.stringify(sample)}</code></div> */
      }
      {enumerations &&
        !isMultipleTypes && (
          <p style={{ marginTop: `.5rem` }}>
            <b
              style={{
                color: grayscale(4),
                fontSize: 15,
                fontWeight: weight('medium'),
              }}
            >
              Possible Values:
            </b>{' '}
            {enumerations.map(({ value }, i) => (
              <Fragment key={i}>
                <code>{value}</code>
                {i !== enumerations.length - 1 ? ', ' : ''}
              </Fragment>
            ))}
          </p>
        )}
      {children &&
        children.length > 0 && (
          <AttributeChildren>
            {children.map((props, i) => <Attribute key={i} {...props} />)}
          </AttributeChildren>
        )}
    </AttributeWrapper>
  )
}

const AttributeWrapper = styled.div`
  padding: 0.888888889rem 0;
  border-bottom: 1px solid ${grayscale(8)};

  div &:first-of-type {
    border-top: 1px solid ${grayscale(8)};
    // padding-top: 0;
  }

  p {
    font-size: 0.833333333rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const AttributeProperties = styled.div`
  padding-bottom: 0.25rem;
`

const Property = styled.span`
  display: inline-block;
  font-size: 0.777777778rem;
  font-weight: ${weight('medium')};
  color: ${grayscale(4)};

  code {
    color: ${grayscale('medium')};
  }
`

const Name = styled.span`
  display: inline-block;
  font-size: 0.888888889rem;
  margin-right: 0.666666667rem;
  font-weight: ${weight('medium')};
  color: ${grayscale('medium')};
`

const Required = styled(Property)`
  margin-left: 0.666666667rem;

  && {
    color: ${color('mustard')};
  }
`

const ChildrenWrapper = styled.div`
  border: 1px solid ${grayscale(8)};
  border-radius: 4px;
  margin: 0.833333333rem 0 0.333333333rem 1rem;

  &:before {
    width: 0.5rem;
  }

  ${AttributeWrapper} {
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &:last-child {
      border-bottom: 0;
    }
  }
`

class AttributeChildren extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
  }

  toggleOpen = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <ChildrenWrapper>
        <ChildrenToggle onClick={this.toggleOpen}>
          {this.state.open ? 'Hide' : 'Show'} attributes
        </ChildrenToggle>
        {this.state.open && this.props.children}
      </ChildrenWrapper>
    )
  }
}

const ChildrenToggle = styled.button`
  color: ${color('blue')};
  border: 0;
  background: transparent;
  font: inherit;
  font-weight: ${weight('medium')};
  font-size: 0.777777778rem;
  padding: 0.5rem 1rem;
  width: 100%;
  display: block;
  outline: 0;
  cursor: pointer;
  text-align: left;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

const minim = require('minim').namespace()
minim.use(parseResult)

const RightBackground = styled(Right)`
  display: none;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;

  ${mediaQuery(
    'md',
    `
    display: block;
  `
  )};
`

const FullWidth = styled.div`
  .block {
    width: 100%;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const Render = props => {
  const {
    ast,
    TableOfContents: PageTableOfContents = [],
    meta,
  } = props.data.file.childApiBlueprint
  const { api } = minim.fromRefract(ast)

  const fullTableOfContents = TableOfContents.map(category => {
    return {
      ...category,
      pages: category.pages.map(page => {
        if (page.file === props.pageContext.file) {
          return {
            ...page,
            children:
              PageTableOfContents.length === 1
                ? PageTableOfContents[0].children
                : PageTableOfContents, // if we only have one item at the top, skip it
          }
        }

        return page
      }),
    }
  })

  return (
    <Layout {...props}>
      <Helmet
        title={meta.title}
        meta={[{ name: 'description', content: meta.description }]}
      />
      <Sidebar>
        <Search />
        <Navigation
          navigation={fullTableOfContents}
          location={props.location}
        />
      </Sidebar>
      <Content>
        {meta.full ? (
          <FullWidth>
            <API api={api} />
          </FullWidth>
        ) : (
          <Fragment>
            <RightBackground />
            <API api={api} />
          </Fragment>
        )}
      </Content>
    </Layout>
  )
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
    return Render(this.props)
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
