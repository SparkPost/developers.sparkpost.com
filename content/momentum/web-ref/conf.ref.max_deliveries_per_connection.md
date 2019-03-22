| [Prev](conf.ref.match_cache_size)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.max_dns_ttl.php) |

<a name="conf.ref.max_deliveries_per_connection"></a>
## Name

max_deliveries_per_connection — maximum number of messages to deliver before closing a connection

## Synopsis

`Max_Deliveries_Per_Connection = 0`

<a name="idp10180560"></a>
## Description

The maximum number of messages that will be sent over a single SMTP connection. This option limits *successful* deliveries only. If you wish to limit the number of attempted RCPT TO commands that are sent, use `max_recipients_per_connection`. `Max_Deliveries_Per_Connection` is configurable globally, in the binding scope and on a per-domain basis. If set to `0` (the default), then no maximum limit will be enforced.

<a name="idp10184272"></a>
## Scope

max_deliveries_per_connection is valid in the binding, binding_group, domain and global scopes.

<a name="idp10185968"></a>
## See Also

[max_recipients_per_connection](conf.ref.max_recipients_per_connection "max_recipients_per_connection")

| [Prev](conf.ref.match_cache_size)  | [Up](conf.ref.files.php) |  [Next](conf.ref.max_dns_ttl.php) |
| match_cache_size  | [Table of Contents](index) |  max_dns_ttl |
