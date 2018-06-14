import React from 'react'
import Helmet from 'react-helmet'
import styled, { css } from 'styled-components'
import { saturate, darken } from 'polished'
import { color, grayscale, shadow } from 'utils/colors'
import { uppercase, weight, monospace } from 'utils/fonts'
import { Container, Row, Column } from 'components/Grid'
import Link from 'components/Link'
import Button from 'components/Button'
import Markdown from 'components/Markdown'
import Tooltip from 'components/Tooltip'
import map from 'utils/map'
import { isString, isEmpty, first, last, get, keyBy, mapValues, uniqBy, uniq } from 'lodash'
import TableOfContents from 'data/api/table-of-contents.json'
import { Sidebar, Search, Navigation, Content } from 'components/docs'
import Banner from 'components/Banner'
import dataStructureToJson from 'utils/api/dataStructureToJson'
import generateSample from 'utils/api/generateSample'

import BlockMarkdownBase from 'components/api/components/BlockMarkdown'
import Section from 'components/api/components/Section'
import Right from 'components/api/components/Right'
import Json from 'components/api/components/Json'
import Heading from 'components/api/components/Heading'

const debug = false

const Block = styled.div``

const Debug = ({ children }) => (<React.Fragment>{children}</React.Fragment>)

const DataStructureContext = React.createContext([])

const components = {
  banner({ children, status }) {
    return (<div className="block"><Banner status={status}><p>{children}</p></Banner></div>)
  },
  "data-structure": ({ id, sample }) => (
    <DataStructureContext.Consumer>
      {(dataStructures) => (
      <React.Fragment>

        <Section>
          {sample !== undefined && <Right>
            <HttpTitle>Response</HttpTitle>
            <Json>{generateSample(dataStructures.find((dataStructure) => {
              return id.toLowerCase() === dataStructure.content.id.toValue().toLowerCase()
            }), dataStructures)}</Json>
          </Right>}
          <div className="block">
            <DataStructure dataStructure={dataStructures.find((dataStructure) => {
              return id.toLowerCase() === dataStructure.content.id.toValue().toLowerCase()
            })} />
          </div>
        </Section>
      </React.Fragment>
      )}
    </DataStructureContext.Consumer>
  ),
  row: Section,
  left: ({ children }) => {
    return (<BlockMarkdown>{children}</BlockMarkdown>)
  },
  right: ({ children }) => {
    return (<Right>{children}</Right>)
  },
}

function values(element, props = []) {
  const obj = {}

  for (let prop of props) {
    obj[prop] = element[prop].toValue()
  }

  return obj
}

const BlockMarkdown = (props) => (<BlockMarkdownBase components={components} {...props} />)

function API({ api }) {
  // get meta data for rendering in <head>
  const meta = mapValues(keyBy(api.attributes.get('meta').toValue(), 'key'), 'value')
  
  // we don't seem to use these since we just have a single resource group
  const { title, description, copy } = values(api, [ 'title', 'description', 'copy' ])


  const dataStructures = api.dataStructures.first ? api.dataStructures.first.content : null

  return (
    <div>
      <DataStructureContext.Provider value={dataStructures}>
        <Debug title="api" enable={debug}>
          {title && <Heading level={1}>{title}</Heading>}
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
            <div className="block" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline'
            }}>
              <Heading level={1}>{title}</Heading>
              <Tooltip content="Import the SparkPost API as a Postman collection">
                <a style={{
                  lineHeight: '1rem'
                }} href="https://app.getpostman.com/run-collection/5d9ae743a661a15d64bb" target="_blank">
                  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman" style={{ maxWidth: 'inherit' }} />
                </a>
              </Tooltip>
            </div>
          )}
          {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
        </Section>
        {resourceGroup.resources.map((resource, i) => (
          <Resource key={i} resource={resource} />
        ))}
      </Debug>
    </div>
  )
}

function Resource({ resource }) {
  const { title, copy } = values(resource, ['title', 'copy'])

  return (
    <div>
      <Debug title="resource" enable={debug}>
        <Section style={{ marginTop: '3rem' }}>
          {title && (resource.transitions.length > 1 || !isEmpty(copy)) && <Heading level={3}>{title}</Heading>} 
          {copy && <BlockMarkdown>{copy}</BlockMarkdown>}
        </Section>
        {resource.transitions.map((transition, i) => (
          <Transition key={i} transition={transition} resource={resource} />
        ))}
      </Debug>
    </div>
  )
}

function mergeDuplicateTransactions(transactions) {
  const transactionsArray = transactions.map((transition) => transition.clone())
  
  // get all the unique transactions based on their request.
  // For every identical transaction after, add its response to the first one
  const uniqueTransactions = transactionsArray.reduce((arr, transaction) => {
    // first element will always be unique
    if (arr.length === 0) return [ transaction ]
  
    const lastTransaction = last(arr)  
    
    // TODO: also check against the method and headers
    if (get(lastTransaction.request.messageBody, 'content') === get(transaction.request.messageBody, 'content')) {
      
      // we are setting up a responses array since we are adding this response onto the last request
      lastTransaction.responses = lastTransaction.responses || [ lastTransaction.response ]

      lastTransaction.responses.push(transaction.response)

      return arr
    }

    return [ ...arr, transaction ]
  }, [])


  return minim.toElement(uniqueTransactions)
}

const methodColors = {
  GET: color('blue'),
  PUT: color('magenta'),
  POST: saturate(0.2, darken(0.2, color('green'))),
  DELETE: darken(0.02, color('red'))
}

function Transition({ transition, resource }) {
  const {
    title, copy, method
  } = values(transition, ['title', 'copy', 'method'])

  const href = (transition.href || {}).content || resource.href.content
  const version = href === 'ab-testing' ? 'labs' : 'v1'

  return (
    <div>
      <Debug title="transition" enable={debug}>
        <Section>
          <Right>
            {transition.transactions.length && mergeDuplicateTransactions(transition.transactions).map((transaction, i) => (
              <Transaction key={i} transaction={transaction} transition={transition} resource={resource} />
            ))}
          </Right>
          {title && <Heading level={3}>{title}</Heading>}
          {'' /*
            <div className="block">
              <pre style={{
                padding: 0,
                background: 'transparent',
                border: `1px solid ${grayscale(8)}`,
                
              }}><code><span style={{
                // color: 'white',
                // background: color('magenta'),
                // padding: `.45rem .75rem`,
                padding: `.5rem 0 .5rem .5rem`,
                color: methodColors[method],
                display: 'inline-block',
                fontWeight: '600'
              }}>{method}</span> {`/api/${version}${href}`}</code></pre>
            </div>
          */}
          {transition.hrefVariables && <Parameters parameters={transition.hrefVariables} />}
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
        {transaction.request && <Request
            request={transaction.request}
            transition={transition}
            resource={resource} />}
        {transaction.responses ? 
          <Responses responses={transaction.responses} /> :
          <Responses responses={[ transaction.response ]} />}
      </Debug>
    </div>
  )
}


function format(content) {
  return JSON.stringify(JSON.parse(content.trim()), null, 2)
}

const HttpTitle = styled.h4`
  font-size: .888888889rem;
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
      // replace it if it is a url parameter
      modifiedHref = modifiedHref.replace(`{${param.name}}`, param.value)

      // add the value if it is a query parameter 
      modifiedHref = modifiedHref.replace(new RegExp(`(.+)({\?(?:.+,)?)${param.name}((?:,.+)?})`, 'i'), `$1$2${param.name}=${param.value}&$3`)
    }

    // remove the comma deliminators
    modifiedHref = modifiedHref.replace('&,', '&')

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
        <pre style={{padding: `.5rem`}}><code>{method && (
          <React.Fragment>{method} {`/api/${version}${modifiedHref}`}</React.Fragment>
        )}</code></pre>
        {request.messageBody && (
          <Json>{format(request.messageBody.content)}</Json>
        )}
      </Debug>
    </div>
  )
}

class Responses extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
  }

  setActiveResponse = (i) => {
    this.setState({ activeIndex: i })
  }

  render() {
    // if we have no body or status code on the only response, then it was just empty so we don't have a response for the request
    if (this.props.responses.length === 1 && !this.props.responses[0].messageBody && !this.props.responses[0].statusCode) {
      return null
    }

    return (
      <div>
        <Debug title="responses" enable={debug}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            // marginTop: '4rem',
            paddingTop: '2rem',
            // borderTop: `1px solid ${grayscale('medium')}`,
            // borderTopColor: '#38383b' // dark theme'
          }}>
            <HttpTitle style={{margin: 0}}>Response</HttpTitle>
            <div style={{ display: 'flex' }}>
              {this.props.responses.map((response, i) => (
                <StatusCode
                  key={i}
                  code={response.statusCode.toValue()}
                  active={i === this.state.activeIndex}
                  onClick={() => this.setActiveResponse(i)} />
              ))}
            </div>
          </div>
          {/*copy && <BlockMarkdown>{copy}</BlockMarkdown>*/ '' /*is it possible to have copy in requests/responses?*/} 
          {
            this.props.responses.map((response, i) => (
              <React.Fragment key={i}>
                <Json style={{
                  display: i === this.state.activeIndex ? 'block' : 'none'
                }}>{response.messageBody ? format(response.messageBody.content) : '// Empty response body'}</Json>
                {response.copy && <Markdown style={{
                  display: i === this.state.activeIndex ? 'block' : 'none'
                }}>{response.copy.toValue()}</Markdown>}
              </React.Fragment>
            ))
          }
          
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
  ${monospace}
  padding: .166666667rem .5rem;
  border-radius: 2px;
  outline: 0;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    margin-right: .333333333rem;
    height: .333333333rem;
    width: .333333333rem;
    border-radius: 50%;

    ${props => props.code.startsWith('2') && `background: ${color('green')}`}
    ${props => props.code.startsWith('3') && `background: ${color('mustard')}`}
    ${props => props.code.startsWith('4') && `background: ${color('orange')}`}
    ${props => props.code.startsWith('5') && `background: ${color('red')}`}
  }

  ${props => props.active && `
    background: ${grayscale('medium')};
    background: #38383b; // dark theme
  `}
`

function StatusCode({ code, active, ...props }) {
  return (
    <StatusCodeWrapper {...props} code={`${code}`} active={active}>
      {code}
    </StatusCodeWrapper>)
}


function Parameters({ parameters }) {
  const jsonArray = dataStructureToJson({ content: parameters })

  return (
    <AttributesWrapper className="block">
      <AttributesTitle>Parameters</AttributesTitle>
      {jsonArray.map((props, i) => <Attribute key={i} {...props} isParameter={true} />)}
    </AttributesWrapper>)
}


function Parameter({
  name,
  type,
  description,
  required,
  samples,
  children,
  value,
  default: defaultValue,
  enumerations
}) {
  return (
    <ParameterRow>
      <ParameterDetails>
        <ParameterName>{name}</ParameterName>
        {required && <div><Required style={{margin:0}}>required</Required></div>}
        {type && <div><Property>{type}</Property></div>}
        {defaultValue && <Property>Default: {defaultValue}</Property>}
      </ParameterDetails>
      <ParameterCell>
        <Markdown>{description}</Markdown>
        {value && <Property>Example: {value}</Property>}
      </ParameterCell>
    </ParameterRow>
  )
}

const ParameterName = styled.div`
  font-weight: ${weight('medium')};
  padding-bottom: .25rem;
}
`


const ParameterDetails = styled.div`
  display: table-cell;
  padding: .888888889rem 1.166666667rem .888888889rem 0;
  font-size: .833333333rem;
  border-bottom: 1px solid ${grayscale(8)};
`

const ParameterCell = styled.div`
  display: table-cell;
  padding: .888888889rem 0;
  font-size: .833333333rem;

  border-bottom: 1px solid ${grayscale(8)};

  > div > p:last-child {
    margin: 0;
  }
`

const ParameterRow = styled.div`
  display: table-row;

  ${ParameterDetails}, ${ParameterCell} {
    border-top: 1px solid ${grayscale(8)};
  }
`


function DataStructure({ dataStructure }) {
  const jsonArray = dataStructureToJson(dataStructure)

  return (<Attributes id={dataStructure.content.id.toValue()}>{
    jsonArray.map((props, i) => <Attribute key={i} {...props} />)
  }</Attributes>)
}

const AttributesTitle = styled.h4`
  ${uppercase}
  font-weight: ${weight('medium')};
  font-size: .75rem;
  color: ${grayscale(4)};
  margin-bottom: .5rem;
`


function Attributes({ id, children }) {
  return (
    <AttributesWrapper className="block">
      <AttributesTitle>Attributes</AttributesTitle>
      {children}
    </AttributesWrapper>)
}

const AttributesWrapper = styled.div`
  > h4 {
    // border-bottom: 1px solid ${grayscale(7)};
  }

  margin-bottom: 1rem;
`

function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

const nativeTypes = [ 'boolean', 'string', 'number', 'object', 'array', 'enum' ]

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
    isParameter
  } = props

  const sample = first(samples)
  const sampleTypes = sample && type === 'array' && sample.map((member) => toType(member))
  const actualType = nativeTypes.includes(type) ? type : 'object'

  let isMultipleTypes, types
  if (actualType === 'enum') {
    // where we have no values for an enum, it is simply the definition that a single field can be of multiple types
    isMultipleTypes = !enumerations.find((enumeration) => !isEmpty(enumeration.value))

    if (isMultipleTypes) {
      types = uniq(enumerations.map(({ type }) => type))
    }
    
  }

  return (
    <AttributeWrapper>
      <AttributeProperties>
        <Name>{name}</Name>
        <Property>
          {isMultipleTypes ? types.join(' or ') : actualType /*generate link to dereferenced type */}
          {actualType === 'array' && sampleTypes && uniq(sampleTypes).length === 1 && ` of ${first(sampleTypes)}s` /* if its an array, array of what??? */}</Property>
        {'' /* required, value, and default are all mutually exlusive */}
        {required && <Required>required</Required>}
        {!isParameter && actualType !== 'object' && !isEmpty(value) && <Property>, value is <code>{isString(value) ? value : JSON.stringify(value)}</code></Property>}
        {actualType !== 'object' && defaultValue && <Property>, default is <code>{isString(defaultValue) ? defaultValue : JSON.stringify(defaultValue)}</code></Property>}
      </AttributeProperties>
      <Markdown>{description}</Markdown>
      {'' /* samples should be shown through example JSON blobs */}
      {'' /* type !== 'object' && sample && <div>Example: <code>{isString(sample) ? sample : JSON.stringify(sample)}</code></div> */}
      {enumerations && !isMultipleTypes && <p style={{marginTop: `.5rem` }}><b style={{color: grayscale(4), fontSize: 15, fontWeight: weight('medium')}}>Possible Values:</b> {enumerations.map(({ value }) => <React.Fragment><code>{value}</code>, </React.Fragment>)}</p>}
      {children && children.length > 0 && (
        <AttributeChildren>
          {children.map((props, i) => <Attribute key={i} {...props} />)}
        </AttributeChildren>
        )}
    </AttributeWrapper>)
}

const AttributeWrapper = styled.div`
  padding: .888888889rem 0;
  border-bottom: 1px solid ${grayscale(8)};

  div &:first-of-type {
    border-top: 1px solid ${grayscale(8)};
    // padding-top: 0;
  }

  p {
    font-size: .833333333rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`

const AttributeProperties = styled.div`
  padding-bottom: .25rem;
`

const Property = styled.span`
  display: inline-block;
  font-size: .777777778rem;
  font-weight: ${weight('medium')};
  color: ${grayscale(4)};

  code {
    color: ${grayscale('medium')};
  }
`

const Name = styled.span`
  display: inline-block;
  font-size: .888888889rem;
  margin-right: .666666667rem;
  font-weight: ${weight('medium')};
  color: ${grayscale('medium')};
`

const Required = styled(Property)`
  margin-left: .666666667rem;
  
  && {
    color: ${color('mustard')};
  }
`

const ChildrenWrapper = styled.div`
  border: 1px solid ${grayscale(8)};
  border-radius: 4px;
  margin: .833333333rem 0 .333333333rem 1rem;

  &:before {
    width: .5rem;
  }

  ${AttributeWrapper} {
    padding-left: .5rem;
    padding-right: .5rem;

    &:last-child {
      border-bottom: 0;
    }
  }
`

class AttributeChildren extends React.Component {
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
  font-size: .777777778rem;
  padding: .5rem 1rem;
  width: 100%;
  display: block;
  outline: 0;
  cursor: pointer;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`

import { mediaQuery } from 'utils/breakpoint'

import parseResult from 'minim-parse-result'
const minim = require('minim').namespace()
minim.use(parseResult)

const RightBackground = styled(Right)`
  ${mediaQuery('md', `
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  `)}
`

const Full = styled.div`
  .block {
    width: 100%;
    max-width: 45rem;
    margin-left: auto;
    margin-right: auto;
  }
`



const IndexPage = (props) => {
  const { ast, TableOfContents: PageTableOfContents = [], meta } = props.data.file.childApiElement
  const { api } = minim.fromRefract(ast)



  const fullTableOfContents = TableOfContents.map((category) => {
    return {
      ...category,
      pages: category.pages.map((page) => {
        if (page.file === props.pathContext.file) {

          return {
            ...page,
            children: PageTableOfContents.length === 1 ? PageTableOfContents[0].children : PageTableOfContents // if we only have one item at the top, skip it
          }
        }

        return page
      })
    }
  })

  return (
    <div>
      <Helmet
        title={meta.title}
        meta={[
          { name: 'description', content: meta.description }
        ]}
      />
      <Sidebar>
        <Search />
        <Navigation navigation={fullTableOfContents} location={props.location} />
      </Sidebar>
      <Content>
        {meta.full ?
        (<Full>
          <API api={api} />
        </Full>) : (
          <React.Fragment>
            <RightBackground />
            <API api={api} />
          </React.Fragment>
        )}
      </Content>
    </div>
  )
}

export default IndexPage


export const pageQuery = graphql`
query apiTemplateQuery($file: String!) { 
  file(base:{eq:$file}) {
    base
    childApiElement {
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