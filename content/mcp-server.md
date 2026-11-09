# MCP Server

The SparkPost MCP server lets AI agents work in your SparkPost account over the
[Model Context Protocol](https://modelcontextprotocol.io/). They can send
transmissions, manage templates and sending domains, pull deliverability metrics,
and much more.

It is a remote server, so there is nothing to install and no API key to create.
Point a supported host at the endpoint for your account, sign in to SparkPost, and
approve the connection.

## Endpoints

| Account | MCP endpoint |
|---|---|
| **SparkPost** | `https://mcp.sparkpost.com/mcp` |
| **SparkPost EU** | `https://mcp.eu.sparkpost.com/mcp` |
| **SparkPost Enterprise** | `https://mcp.sparkpost.com/<tenant>/mcp` |
| **SparkPost EU Enterprise** | `https://mcp.eu.sparkpost.com/<tenant>/mcp` |

Use the endpoint that matches the region your account is in. An account on
[app.sparkpost.com](https://app.sparkpost.com) uses the SparkPost endpoint; an
account on [app.eu.sparkpost.com](https://app.eu.sparkpost.com) uses the SparkPost
EU endpoint.

Enterprise accounts use their own path. Your account manager can give you the
`<tenant>` value for your account.

<!-- Keep the Banner tags on their own lines. Inline, the banner parses as
     phrasing content and its <div> ends up inside a <p>. -->

<Banner status="info">
The server speaks Streamable HTTP. Most hosts need nothing but the endpoint URL and
work out the rest themselves.
</Banner>

## Connecting

The examples below use the SparkPost endpoint. For an EU or Enterprise account, use
your endpoint from the table above instead.

### Claude

In [Claude](https://claude.ai) on the web or in the desktop app, open **Settings →
Connectors → Add custom connector**, name it `SparkPost`, and paste the endpoint
URL for your account. Claude opens a SparkPost sign-in window; approve the
connection and the tools become available in your conversations.

### Claude Code

Add the server from your terminal:

```bash
claude mcp add --transport http sparkpost https://mcp.sparkpost.com/mcp
```

Then run `/mcp` inside Claude Code and choose to authenticate. Your browser opens for
SparkPost sign-in and consent.

`claude mcp list` now reports sparkpost as `! Needs authentication`.

Run `/mcp`.
Select **sparkpost** and press Enter.
Choose Authenticate. Your browser opens SparkPost's consent screen; review your permissions and approve.
The server then reads as connected and the tools work. To sign in again later, /mcp offers Re-authenticate; Clear authentication drops the stored token.

### Cursor

Add the server to `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "sparkpost": {
      "url": "https://mcp.sparkpost.com/mcp"
    }
  }
}
```

Then open Cursor's MCP settings, find `sparkpost`, and follow the sign-in prompt.

### VS Code

Add the server to `.vscode/mcp.json` in your workspace, or to your user `mcp.json`:

```json
{
  "servers": {
    "sparkpost": {
      "type": "http",
      "url": "https://mcp.sparkpost.com/mcp"
    }
  }
}
```

The first time the server starts, VS Code asks you to trust it and then opens the
SparkPost sign-in.

### Codex

Add the server to `~/.codex/config.toml`:

```toml
[mcp_servers.sparkpost]
url = "https://mcp.sparkpost.com/mcp"
```

Then sign in from your terminal:

```bash
codex mcp login sparkpost
```

### ChatGPT

ChatGPT connects to custom MCP servers in developer mode.

1. Turn on developer mode in **Settings → Security and login**.
2. Open **Plugins**, select **+**, and create a developer-mode app.
3. Name it `SparkPost`, paste the endpoint URL, and choose **OAuth** as the
   authentication method.
4. Sign in to SparkPost and approve the connection.

To use it in a conversation, choose **Developer mode** from the **+** menu and select
SparkPost.

### Google Antigravity

Add the server to `~/.gemini/config/mcp_config.json`:

```json
{
  "mcpServers": {
    "sparkpost": {
      "serverUrl": "https://mcp.sparkpost.com/mcp"
    }
  }
}
```

1. Navigate to **Settings → Customizations → Installed MCP Servers**.
2. Click **Refresh MCP Servers** if SparkPost is not available at first.
2. Click **Authenticate** next to the SparkPost server. Sign in and approve the connection.
3. Google will provide an authorization code in your browser. Paste the code back into the settings panel in Antigravity, and click **Submit**.


## Signing in

Authorization uses OAuth 2.1 with PKCE. The first time a host connects:

1. It sends you to SparkPost to sign in.
2. SparkPost shows a consent screen where you choose what the connection can do.
3. Approving it returns you to the host with the connection ready to use.

You sign in with your ordinary SparkPost credentials. No API key is created, and
none is pasted into the host.

## Permissions

You select the permissions a connection holds on the consent screen. You may grant
all of your own permissions, or any narrower subset of them.

A connection cannot be granted a permission you do not hold. The available set is
bounded by your role on the account.

## Tools

| Family | What it covers | Tools |
|---|---|---|
| Transmissions | Send email. | `transmissions_send` |
| Templates | Create, list, retrieve, update, delete, and preview templates. | `templates_create`, `templates_list`, `templates_get`, `templates_update`, `templates_delete`, `templates_preview` |
| Suppression lists | Search the suppression list; retrieve, add, update, and remove entries. | `suppression_search`, `suppression_get`, `suppression_upsert_bulk`, `suppression_upsert`, `suppression_delete` |
| Recipient lists | Create, list, retrieve, update, and delete recipient lists. | `recipient_lists_create`, `recipient_lists_list`, `recipient_lists_get`, `recipient_lists_update`, `recipient_lists_delete` |
| Sending domains | Create, list, retrieve, update, delete, and verify sending domains. | `sending_domains_create`, `sending_domains_list`, `sending_domains_get`, `sending_domains_update`, `sending_domains_delete`, `sending_domains_verify` |
| Tracking domains | Create, list, retrieve, update, delete, and verify tracking domains. | `tracking_domains_create`, `tracking_domains_list`, `tracking_domains_get`, `tracking_domains_update`, `tracking_domains_delete`, `tracking_domains_verify` |
| Webhooks | Create, list, retrieve, update, delete, and validate webhooks. | `webhooks_create`, `webhooks_list`, `webhooks_get`, `webhooks_update`, `webhooks_delete`, `webhooks_validate` |
| Metrics | Deliverability metrics overall and over time, broken out by domain, campaign, or template, plus bounce and rejection reasons. | `metrics_deliverability`, `metrics_deliverability_time_series`, `metrics_deliverability_by_domain`, `metrics_deliverability_by_campaign`, `metrics_deliverability_by_template`, `metrics_bounce_reasons`, `metrics_rejection_reasons` |
| Message events | Search message events, and fetch sample events. | `events_search_message`, `events_samples_message` |
| Subaccounts | List, create, retrieve, and update subaccounts. | `subaccounts_list`, `subaccounts_create`, `subaccounts_get`, `subaccounts_update` |
