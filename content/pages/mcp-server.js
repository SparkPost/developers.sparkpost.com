import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from 'components/Layout'
import { Container, Row, Column } from 'components/Grid'
import Section from 'components/Section'
import Banner from 'components/Banner'
import Markdown from 'components/Markdown'

const description =
  'Connect an AI assistant to your SparkPost account over the Model Context Protocol.'

const components = {
  banner: ({ children, status }) => (
    <Banner status={status}>
      <p>{children}</p>
    </Banner>
  ),
}

const Body = styled(Markdown)`
  h1 {
    margin-bottom: 1rem;
  }

  h2 {
    margin-top: 3rem;
  }

  h3 {
    margin-top: 2rem;
  }

  table {
    width: 100%;
  }
`

/**
 * Authored as an array of lines rather than a template literal: the page is
 * mostly inline code spans, and a single missed backtick escape inside a
 * template literal would break the build.
 */
const content = [
  '# MCP Server',
  '',
  'The SparkPost MCP server lets an AI assistant work in your SparkPost account —',
  'sending transmissions, managing templates and sending domains, pulling',
  'deliverability metrics — over the',
  '[Model Context Protocol](https://modelcontextprotocol.io/).',
  '',
  'It is a remote server, so there is nothing to install and no API key to create.',
  'Point a supported host at the endpoint for your region, sign in to SparkPost, and',
  'approve the connection.',
  '',
  '## Endpoints',
  '',
  '| Account | MCP endpoint |',
  '|---|---|',
  '| **SparkPost** | `https://mcp.sparkpost.com/mcp` |',
  '| **SparkPost EU** | `https://mcp.eu.sparkpost.com/mcp` |',
  '',
  'Use the endpoint that matches the region your account is in. An account on',
  '[app.sparkpost.com](https://app.sparkpost.com) uses the first; an account on',
  '[app.eu.sparkpost.com](https://app.eu.sparkpost.com) uses the second.',
  '',
  '<Banner status="info">The server speaks Streamable HTTP. Most hosts need nothing',
  'but the endpoint URL — they work out the rest themselves.</Banner>',
  '',
  '## Connecting',
  '',
  '### Claude',
  '',
  'In [Claude](https://claude.ai) on the web or in the desktop app, open **Settings →',
  'Connectors → Add custom connector**, name it `SparkPost`, and paste the endpoint',
  'URL for your region. Claude opens a SparkPost sign-in window; approve the',
  'connection and the tools become available in your conversations.',
  '',
  '### Claude Code',
  '',
  'Add the server from your terminal:',
  '',
  '```',
  'claude mcp add --transport http sparkpost https://mcp.sparkpost.com/mcp',
  '```',
  '',
  'For an EU account, use `https://mcp.eu.sparkpost.com/mcp` instead. Then run `/mcp`',
  'inside Claude Code and choose to authenticate. Your browser opens for SparkPost',
  'sign-in and consent.',
  '',
  '## Signing in',
  '',
  'Authorization uses OAuth 2.1 with PKCE. The first time a host connects:',
  '',
  '1. It sends you to SparkPost to sign in.',
  '2. SparkPost shows a consent screen describing what the connection will be able to do.',
  '3. Approving it returns you to the host with the connection ready to use.',
  '',
  'You sign in with your ordinary SparkPost credentials. No API key is created, and',
  'none is pasted into the host.',
  '',
  '## Permissions follow the user',
  '',
  'A connection can never do more than the person who approved it. At consent time the',
  'permissions being requested are intersected with your role on the account and with',
  "what the account itself is entitled to. A reporting user's connection gets read",
  'access however much the host asks for, and nothing a connection does can exceed your',
  'own access.',
  '',
  'To give an assistant narrower access than you have yourself, connect from a',
  'SparkPost user created for the purpose, holding the role you want the assistant to',
  'have.',
  '',
  '## What the server can do',
  '',
  '51 tools, in ten families. Each family lists the SparkPost permissions a connection',
  'needs before those tools will run — the same permission names used for API keys and',
  'roles.',
  '',
  '| Family | Tools | What it covers | Permissions |',
  '|---|---|---|---|',
  '| Transmissions | 4 | Send email; list, retrieve, and delete transmissions. | `transmissions/view`, `transmissions/modify` |',
  '| Templates | 6 | Create, list, retrieve, update, delete, and preview templates. | `templates/view`, `templates/modify` |',
  '| Suppression lists | 5 | Search the suppression list; retrieve, add, update, and remove entries. | `suppression_lists/manage` |',
  '| Recipient lists | 5 | Create, list, retrieve, update, and delete recipient lists. | `recipient_lists/manage` |',
  '| Sending domains | 6 | Create, list, retrieve, update, delete, and verify sending domains. | `sending_domains/view`, `sending_domains/manage` |',
  '| Tracking domains | 6 | Create, list, retrieve, update, delete, and verify tracking domains. | `tracking_domains/view`, `tracking_domains/manage` |',
  '| Webhooks | 6 | Create, list, retrieve, update, delete, and validate webhooks. | `webhooks/view`, `webhooks/modify` |',
  '| Metrics | 7 | Deliverability metrics overall and over time, broken out by domain, campaign, or template, plus bounce and rejection reasons. | `metrics/view` |',
  '| Message events | 2 | Search message events, and fetch sample events. | `message_events/view` |',
  '| Subaccounts | 4 | List, create, retrieve, and update subaccounts. | `subaccount/view`, `subaccount/manage` |',
  '',
  '## How discovery works',
  '',
  'You should not need any of this to connect — hosts handle it — but it is useful when',
  'building or debugging one.',
  '',
  'The MCP endpoint advertises its authorization server following',
  '[RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728). A request carrying no',
  'token is answered with `401` and a `WWW-Authenticate` header naming the resource',
  'metadata document:',
  '',
  '| Account | Resource metadata | Authorization server |',
  '|---|---|---|',
  '| **SparkPost** | `https://mcp.sparkpost.com/.well-known/oauth-protected-resource` | `https://api.sparkpost.com` |',
  '| **SparkPost EU** | `https://mcp.eu.sparkpost.com/.well-known/oauth-protected-resource` | `https://api.eu.sparkpost.com` |',
  '',
  'That document names the authorization server, whose own metadata sits at',
  '`/.well-known/oauth-authorization-server` and carries the authorization and token',
  'endpoints. The MCP endpoint itself accepts `POST` only.',
].join('\n')

const McpServerPage = props => (
  <Layout {...props}>
    <Helmet
      title="MCP Server"
      meta={[{ name: 'description', content: description }]}
    />
    <Section borderless>
      <Container>
        <Row center="xs">
          <Column md={9} sm={11} xs={12}>
            <Body components={components}>{content}</Body>
          </Column>
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default McpServerPage
