import React from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import { color, grayscale, shadow } from '../utils/colors'
import { uppercase, weight, monospace } from '../utils/fonts'
import { Container, Row, Column } from '../components/Grid'
import Section from '../components/Section'
import Link from '../components/Link'
import Button from '../components/Button'
import map from '../utils/map'
import { keyBy, mapValues, castArray } from 'lodash'

// markdown
const unified = require('unified')
const parseMarkdown = require('remark-parse')
const remark2rehype = require('remark-rehype')
const markdownToHtml = require('rehype-stringify')

import {
  Wrapper, Sidebar, Reference, Content, Layout
} from '../components/API'

import parseResult from 'minim-parse-result'
const minim = require('minim').namespace()
minim.use(parseResult)

function values(element, props = []) {
  const obj = {}

  for (let prop of props) {
    obj[prop] = element[prop].toValue()
  }

  return obj
}

const RenderBlock = styled(({ title, children, ...props }) => (
  <div {...props}>
    <div className="renderBlockTitle">{title}</div>
    {children}
  </div>
))`
  border-radius: 0 5px 5px 5px;
  border: 1px solid blue;
  margin: 2rem 1rem 1rem;
  padding: .5rem;

  .renderBlockTitle {
    border-radius: 5px 5px 0 0;
    border: 1px solid blue;
    border-bottom-color: white;
    transform: translateY(-100%);
    position: absolute;
    top: 0;
    left: -1px;
    padding: .25rem;
  }
`

function Markdown({ children }) {
  const markdown = castArray(children).join('')

  return (<div dangerouslySetInnerHTML={{ __html: String(unified()
  .use(parseMarkdown)
  .use(remark2rehype)
  .use(markdownToHtml)
  .processSync(markdown)) }}></div>)
}

function API({ api }) {
  // get meta data for rendering in <head>
  const meta = mapValues(keyBy(api.attributes.toValue().meta, 'key'), 'value')
  
  // we don't seem to use these since we just have a single resource group
  const { title, description } = values(api, [ 'title', 'description' ])

  return (
    <div>
      <RenderBlock title="api">
        {api.resourceGroups.map((resourceGroup) => (
          <ResourceGroup resourceGroup={resourceGroup} />
        ))}
      </RenderBlock>
    </div>
  )
}

function ResourceGroup({ resourceGroup }) {
  const { title, copy } = values(resourceGroup, ['title', 'copy'])

  return (
    <div>
      <RenderBlock title="resource group">
        {title && <h1>{title}</h1>}
        {copy && <Markdown>{copy}</Markdown>}
        {resourceGroup.resources.map((resource) => (
          <Resource resource={resource} />
        ))}
      </RenderBlock>
    </div>
  )
}

function Resource({ resource }) {
  const { title, copy } = values(resource, ['title', 'copy'])

  return (
    <div>
      <RenderBlock title="resource">
        {title && <h3>{title}</h3>}
        {copy && <Markdown>{copy}</Markdown>}
        {resource.transitions.map((transition) => (
          <Transition transition={transition} />
        ))}
      </RenderBlock>
    </div>
  )
}

function Transition({ transition }) {
  const {
    title, copy, method
  } = values(transition, ['title', 'copy', 'method'])

  return (
    <div>
      <RenderBlock title="transition">
        {title && <h4>{title}</h4>}
        {transition.hrefVariables && <Parameters parameters={transition.hrefVariables} />}
        {copy && <Markdown>{copy}</Markdown>}
        {transition.transactions.map((transaction) => (
          <Transaction transaction={transaction} />
        ))}
      </RenderBlock>
    </div>
  )
}

function Transaction({ transaction }) {
  const { title, copy } = values(transaction, ['title', 'copy'])

  return (
    <div>
      <RenderBlock title="transaction">
        <h4>{title || 'Examples'}</h4>
        {copy && <Markdown>{copy}</Markdown>}
        {transaction.request && <Request request={transaction.request} />}
        {transaction.response && <Response response={transaction.response} />}
      </RenderBlock>
    </div>
  )
}

function Request({ request }) {
  const { title, copy, method } = values(request, ['title', 'copy', 'method'])

  return (
    <div>
      <RenderBlock title="request">
        <h4>{title ? `Request: ${title}` : `Request`}</h4>
        {copy && <Markdown>{copy}</Markdown>}
        {method && <div>{method}</div>}
        {request.messageBody && (
          <pre><code>{request.messageBody.content}</code></pre>
        )}
      </RenderBlock>
    </div>
  )
}

function Response({ response }) {
  const { title, copy, statusCode } = values(response, ['title', 'copy', 'statusCode'])

  console.log(response)

  return (
    <div>
      <RenderBlock title="response">
        <h4>(HTTP status code: {statusCode})</h4>
        {copy && <Markdown>{copy}</Markdown> /*is it possible to have copy in requests/responses*/} 
        <pre><code>{response.messageBody ? response.messageBody.content : '// Empty response body'}</code></pre>
        
      </RenderBlock>
    </div>
  )
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


const IndexPage = (props) => {
  const { api } = minim.fromRefract(props.data.allFury.edges[0].node.ast)

  return (
    <Wrapper>
      <Sidebar />
      <Reference>
        <Content>
          <Layout>
            <API api={api} />
          </Layout>
        </Content>
      </Reference>
    </Wrapper>
  )
}

export default IndexPage


export const pageQuery = graphql`
query apiQuery {
  allFury {
    edges {
      node {
        ast
      }
    }
  }
}

`