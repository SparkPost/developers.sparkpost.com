import React from 'react'
import styled, { css } from 'styled-components'
import { rgba, lighten, saturate } from 'polished'
import { color, grayscale, shadow } from '../utils/colors'
import { uppercase, weight, monospace } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Link from '../components/Link'
import Button from '../components/Button'
import MarkdownBase from '../components/Markdown'
import Tooltip from '../components/Tooltip'
import map from '../utils/map'
import { isString, isEmpty, first, last, get, keyBy, mapValues, uniqBy } from 'lodash'
import ToC from '../data/api/table-of-contents.json'
import { Sidebar, Search, Navigation, Content, Debug } from '../components/api'
import dataStructureToJSON from '../utils/api/data-structure-to-json'

import parseResult from 'minim-parse-result'
const minim = require('minim').namespace()
minim.use(parseResult)

const debug = false

function values(element, props = []) {
  const obj = {}

  for (let prop of props) {
    obj[prop] = element[prop].toValue()
  }

  return obj
}

const StyledMarkdown = styled(MarkdownBase)``

const Section = styled.div`
  &&& {
    width: 100%;
    padding: 0;
  }

  &:after {
    content: "";
    display: block;
    clear: both;
  }

  > *:not(${StyledMarkdown}),
  ${StyledMarkdown} > div > * {
    width: 55%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

const Right = styled.div`
  float: right;
  width: 45% !important;
  padding: 0 1.5rem;
  z-index: 1;
  background: ${grayscale('dark')};
  color: ${grayscale('white')};
  
  background: #1d1d1d; // dark theme
  background: #212125; // dark theme
  color: ${grayscale(7)}; // dark theme

  pre {
    color: ${grayscale(8)};
    overflow: auto;
    border: 0;
    font-weight: 500;
    background: transparent;
    border: 1px solid ${grayscale('medium')};
    border-color: #38383b; // dark theme
    code {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      text-shadow: 0px 1px 2px rgba(0,0,0,1);
    }

    .hljs-string {
      color: ${saturate(0.1, lighten(0.05, color('green')))};
    }

    .hljs-number, .hljs-literal {
      color: ${lighten(0.15, color('blue'))};
    }
  }
`

const DataStructureContext = React.createContext([])


function Markdown(props) {
  const components = {
    table(props) {
      return (<div><table {...props} /></div>)
    },
    p(props) {
      const hasComponent = React.Children.map(props.children, x => (
        x.type && (
          x.type.name === 'dataStructure' ||
          x.type.name === 'note'
        )
      )).includes(true)

      return hasComponent ? <React.Fragment {...props} /> : <p {...props} />
    },
    note({ children }) {
      return (<div><div className="alert alert-info"><strong>Note</strong>: {children}</div></div>)
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
            <DataStructure dataStructure={dataStructures.find((dataStructure) => {
              return id.toLowerCase() === dataStructure.content.id.toValue().toLowerCase()
            })} />
          </Section>
        </React.Fragment>
        )}
      </DataStructureContext.Consumer>
    )
  }
  
  return (<StyledMarkdown components={components} {...props} />)
}


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
          {title && <h1>{title}</h1>}
          {copy && <Markdown>{copy}</Markdown>}
          {api.resourceGroups.map((resourceGroup) => (
            <ResourceGroup resourceGroup={resourceGroup} />
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
            <h1 style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>{title}</span>
              <Tooltip content="Import the SparkPost API as a Postman collection">
                <a style={{
                  lineHeight: '1rem'
                }} href="https://app.getpostman.com/run-collection/5d9ae743a661a15d64bb" target="_blank">
                  <img src="https://run.pstmn.io/button.svg" alt="Run in Postman"/>
                </a>
              </Tooltip>
            </h1>
          )}
          {copy && <Markdown>{copy}</Markdown>}
        </Section>
        {resourceGroup.resources.map((resource) => (
          <Resource resource={resource} />
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
          {/* title is driven through the transition */ title && <h3>{title}</h3>} 
          {copy && <Markdown>{copy}</Markdown>}
        </Section>
        {resource.transitions.map((transition) => (
          <Transition transition={transition} resource={resource} />
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

function Transition({ transition, resource }) {
  const {
    title, copy, method
  } = values(transition, ['title', 'copy', 'method'])

  return (
    <div>
      <Debug title="transition" enable={debug}>
        <Section>
          <Right>
            {transition.transactions.length && mergeDuplicateTransactions(transition.transactions).map((transaction) => (
              <Transaction transaction={transaction} transition={transition} resource={resource} />
            ))}
          </Right>
          {title && <h3>{title}</h3>}
          {copy && <Markdown>{copy}</Markdown>}
          {transition.hrefVariables && <Parameters parameters={transition.hrefVariables} />}
          {transition.data && <DataStructure dataStructure={transition.data} />}
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
        {title && <h4>{title}</h4>}
        {copy && <Markdown>{copy}</Markdown>}
        {transaction.request && <Request
            request={transaction.request}
            transition={transition}
            resource={resource} />}
        {transaction.responses ? 
          <Responses responses={transaction.responses} /> :
          <Responses responses={[ transaction.response ]} /> }
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

function Json({ children, ...props }) {
  return (<Markdown {...props}>
          {`\`\`\`json
${children}
\`\`\``}</Markdown>)
}

function Request({ request, transition, resource }) {
  const { title, copy, method } = values(request, ['title', 'copy', 'method'])

  return (
    <div>
      <Debug title="request" enable={debug}>
        <HttpTitle>{title ? `Request: ${title}` : `Request`}</HttpTitle>
        {copy && <Markdown>{copy}</Markdown>}
        <pre style={{padding: `.5rem`}}><code>{method && (
          <React.Fragment>{method} {(transition.href || {}).content || resource.href.content}</React.Fragment>
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
                  code={response.statusCode.toValue()}
                  active={i === this.state.activeIndex}
                  onClick={() => this.setActiveResponse(i)} />
              ))}
            </div>
          </div>
          {/*copy && <Markdown>{copy}</Markdown>*/ '' /*is it possible to have copy in requests/responses?*/} 
          {
            this.props.responses.map((response, i) => (
              <React.Fragment>
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
  return (
    <div>
      {parameters.children.map((param) => {
        const { key, description, value } = values(param, ['key', 'description', 'value'])
        const defaultValue = param.value.attributes.toValue().default
        // TODO: missing "values" and "required"

        return (
          <div>
            <div>{key} - <Markdown>{description}</Markdown> <br /> Example: {value} Default: {defaultValue}</div>
            <hr />
          </div>
        )
      })}
    </div>)
}


function DataStructure({ dataStructure }) {
  const jsonArray = dataStructureToJSON(dataStructure)

  return (<Attributes id={dataStructure.content.id.toValue()}>{
    jsonArray.map((props) => <Attribute {...props} />)
  }</Attributes>)
}

function generateSample(dataStructure, dataStructures) {
  const jsonArray = !!dataStructure._storedElement ? dataStructureToJSON(dataStructure, dataStructures) : dataStructure


  // use value or first sample. make sure it works with nested objects.
  return JSON.stringify(buildSample(jsonArray), null, 2)
}

function buildSample(jsonArray) {
  return mapValues(keyBy(jsonArray.map(({
    name, type, value, samples, children, enumerations
  }) => {
    if (type === 'object') {
      return {
        name,
        value: buildSample(children)
      }
    }

    return {
      name,
      value: !isEmpty(value) && value || first(samples) || first(enumerations)
    }
  }), 'name'), 'value')
}


function Attributes({ id, children }) {
  return (
    <AttributesWrapper>
    <h4>{id} Attributes</h4>
      {children}
    </AttributesWrapper>)
}

const AttributesWrapper = styled.div`
  > h4 {
    // border-bottom: 1px solid ${grayscale(7)};
  }
`

function toType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

const types = [ 'boolean', 'string', 'number', 'object', 'array', 'enum' ]

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
    enumerations
  } = props

  const sample = first(samples)
  const actualType = types.includes(type) ? type : 'object'

  // TODO: figure out how to have arbitrarily set properties
  // let properties

  // // we have an object that has some extra properties on it
  // if (actualType === 'object' && toType(value) === 'array') {
  //   properties = mapValues(keyBy(value, 'key'), 'value')

  //   console.log(properties)
  // }

  return (
    <AttributeWrapper>
      <AttributeProperties>
        <Name>{name}</Name>
        <Type>{actualType /*generate link to dereferenced type */}{actualType === 'array' && sample && ` of ${toType(first(sample))}s`}</Type> {'' /* if its an array, array of what??? */}
        {'' /* required, value, and default are all mutually exlusive */}
        {required && <Required>required</Required>}
        {actualType !== 'object' && !isEmpty(value) && <React.Fragment>, value is <code>{isString(value) ? value : JSON.stringify(value)}</code></React.Fragment>}
        {actualType !== 'object' && defaultValue && <React.Fragment>, default is <code>{isString(defaultValue) ? defaultValue : JSON.stringify(defaultValue)}</code></React.Fragment>}
      </AttributeProperties>
      <Markdown>{description}</Markdown>
      {'' /* samples should be shown through example JSON blobs */}
      {'' /* type !== 'object' && sample && <div>Example: <code>{isString(sample) ? sample : JSON.stringify(sample)}</code></div> */}
      {enumerations && <div>Values: {JSON.stringify(enumerations)}</div>}
      {children && children.length > 0 && (
        <AttributeChildren>
          {children.map((props) => <Attribute {...props} />)}
        </AttributeChildren>
        )}
    </AttributeWrapper>)
}

const AttributeWrapper = styled.div`
  padding: .888888889rem 0;
  border-bottom: 1px solid ${grayscale(8)};

  ${AttributesWrapper} &:first-of-type {
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
  color: ${grayscale('medium')};
`
const Type = styled.span`
  diplay: inline-block;
`

const Required = styled.span`
  diplay: inline-block;
  margin-left: .666666667rem;
  color: ${color('mustard')};
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
  outline: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`









const IndexPage = (props) => {
  const { api } = minim.fromRefract(props.data.allApiElement.edges[0].node.ast)

  // console.log(api.resourceGroups.first.resources.map((resources) => resources.title.toValue()))

  // console.log(JSON.stringify(props.data.allApiElement.edges[0].node.ast, null, 2))

  return (
    <div>
      <Sidebar>
        <Search />
        <Navigation navigation={ToC} />
      </Sidebar>
      <Content>
        <Right style={{
          height: '100%',
          position: 'absolute',
          top: 0,
          right: 0
        }} />
        <API api={api} />
      </Content>
    </div>
  )
}

export default IndexPage


export const pageQuery = graphql`
query apiQuery {
  allApiElement {
    edges {
      node {
        ast
      }
    }
  }
}

`