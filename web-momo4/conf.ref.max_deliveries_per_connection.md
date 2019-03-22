| [Prev](conf.ref.match_cache_size)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.max_dns_ttl) |

<a name="conf.ref.max_deliveries_per_connection"></a>
## Name

max_deliveries_per_connection — maximum number of messages to deliver before closing a connection

## Synopsis

`max_deliveries_per_connection = 0`

<a name="idp25287152"></a>
## Description

The maximum number of messages that will be sent over a single SMTP connection. This option limits *successful* deliveries only. If you wish to limit the number of attempted RCPT TO commands that are sent, use `max_recipients_per_connection`. `max_deliveries_per_connection` is configurable globally, in the binding scope and on a per-domain basis. If set to `0` (the default), then no maximum limit will be enforced.

<a name="idp25291088"></a>
## Scope

max_deliveries_per_connection is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.match_cache_size)  | [Up](config.options.ref) |  [Next](conf.ref.max_dns_ttl) |
| match_cache_size  | [Table of Contents](index) |  max_dns_ttl |

