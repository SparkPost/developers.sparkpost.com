# MCP Server

The SparkPost MCP server lets agents work in your SparkPost account —
sending transmissions, managing templates and sending domains, pulling
deliverability metrics — over the
[Model Context Protocol](https://modelcontextprotocol.io/).

It is a remote server, so there is nothing to install and no API key to create.
Point a supported host at the endpoint for your region, sign in to SparkPost, and
approve the connection.

## Endpoints

| Account | MCP endpoint |
|---|---|
| **SparkPost** | `https://mcp.sparkpost.com/mcp` |
| **SparkPost EU** | `https://mcp.eu.sparkpost.com/mcp` |

Use the endpoint that matches the region your account is in. An account on
[app.sparkpost.com](https://app.sparkpost.com) uses the first; an account on
[app.eu.sparkpost.com](https://app.eu.sparkpost.com) uses the second.

<!-- Keep the Banner tags on their own lines. Inline, the banner parses as
     phrasing content and its <div> ends up inside a <p>. -->

<Banner status="info">
The server speaks Streamable HTTP. Most hosts need nothing but the endpoint URL —
they work out the rest themselves.
</Banner>

## Connecting

### Claude

In [Claude](https://claude.ai) on the web or in the desktop app, open **Settings →
Connectors → Add custom connector**, name it `SparkPost`, and paste the endpoint
URL for your region. Claude opens a SparkPost sign-in window; approve the
connection and the tools become available in your conversations.

### Claude Code

Add the server from your terminal:

```bash
claude mcp add --transport http sparkpost https://mcp.sparkpost.com/mcp
```

For an EU account, use `https://mcp.eu.sparkpost.com/mcp` instead. Then run `/mcp`
inside Claude Code and choose to authenticate. Your browser opens for SparkPost
sign-in and consent.

## Signing in

Authorization uses OAuth 2.1 with PKCE. The first time a host connects:

1. It sends you to SparkPost to sign in.
2. SparkPost shows a consent screen describing what the connection will be able to do.
3. Approving it returns you to the host with the connection ready to use.

You sign in with your ordinary SparkPost credentials. No API key is created, and
none is pasted into the host.

## Access follows the user

A connection can never do more than the person who approved it. What a host asks for
is narrowed at consent time to what your role on the account allows, and to what the
account itself is entitled to. A reporting user's connection gets read access only,
however much the host asks for, and nothing a connection does can exceed your own
access.

To give an assistant narrower access than you have yourself, connect from a
SparkPost user created for the purpose, holding the role you want the assistant to
have.

## What the server can do

51 tools, in ten families.

| Family | What it covers | Tools |
|---|---|---|
| Transmissions | Send email; list, retrieve, and delete transmissions. | `transmissions_send`, `transmissions_list`, `transmissions_get`, `transmissions_delete` |
| Templates | Create, list, retrieve, update, delete, and preview templates. | `templates_create`, `templates_list`, `templates_get`, `templates_update`, `templates_delete`, `templates_preview` |
| Suppression lists | Search the suppression list; retrieve, add, update, and remove entries. | `suppression_search`, `suppression_get`, `suppression_upsert_bulk`, `suppression_upsert`, `suppression_delete` |
| Recipient lists | Create, list, retrieve, update, and delete recipient lists. | `recipient_lists_create`, `recipient_lists_list`, `recipient_lists_get`, `recipient_lists_update`, `recipient_lists_delete` |
| Sending domains | Create, list, retrieve, update, delete, and verify sending domains. | `sending_domains_create`, `sending_domains_list`, `sending_domains_get`, `sending_domains_update`, `sending_domains_delete`, `sending_domains_verify` |
| Tracking domains | Create, list, retrieve, update, delete, and verify tracking domains. | `tracking_domains_create`, `tracking_domains_list`, `tracking_domains_get`, `tracking_domains_update`, `tracking_domains_delete`, `tracking_domains_verify` |
| Webhooks | Create, list, retrieve, update, delete, and validate webhooks. | `webhooks_create`, `webhooks_list`, `webhooks_get`, `webhooks_update`, `webhooks_delete`, `webhooks_validate` |
| Metrics | Deliverability metrics overall and over time, broken out by domain, campaign, or template, plus bounce and rejection reasons. | `metrics_deliverability`, `metrics_deliverability_time_series`, `metrics_deliverability_by_domain`, `metrics_deliverability_by_campaign`, `metrics_deliverability_by_template`, `metrics_bounce_reasons`, `metrics_rejection_reasons` |
| Message events | Search message events, and fetch sample events. | `events_search_message`, `events_samples_message` |
| Subaccounts | List, create, retrieve, and update subaccounts. | `subaccounts_list`, `subaccounts_create`, `subaccounts_get`, `subaccounts_update` |

## How discovery works

You should not need any of this to connect — hosts handle it — but it is useful when
building or debugging one.

The MCP endpoint advertises its authorization server following
[RFC 9728](https://datatracker.ietf.org/doc/html/rfc9728). An MCP request carrying
no token is answered with `401` and a `WWW-Authenticate` header naming the resource
metadata document:

| Account | Resource metadata | Authorization server |
|---|---|---|
| **SparkPost** | `https://mcp.sparkpost.com/.well-known/oauth-protected-resource/mcp` | `https://api.sparkpost.com` |
| **SparkPost EU** | `https://mcp.eu.sparkpost.com/.well-known/oauth-protected-resource/mcp` | `https://api.eu.sparkpost.com` |

That document names the authorization server, whose own metadata sits at
`/.well-known/oauth-authorization-server` and carries the authorization and token
endpoints. The MCP endpoint itself accepts `POST` only.
