|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.migrate_connections_between_sibling_domains)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.min_dns_ttl) |

<a name="conf.ref.mime_parse_large_messages_during_reception"></a>
## Name

mime_parse_large_messages_during_reception — configure whether large messages are parsed upon reception or just in time.

## Synopsis

`mime_parse_large_messages_during_reception = true`

<a name="idp25563936"></a>
## Description

This option sets or unsets the message mime parse state on a message generated with the builder API.

### Warning

Setting this value to "false" may result in blocking the scheduler thread. The default value for this option is `true`.

<a name="idp25567296"></a>
## Scope

`mime_parse_large_messages_during_reception` is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.migrate_connections_between_sibling_domains)  | [Up](config.options.ref) |  [Next](conf.ref.min_dns_ttl) |
| migrate_connections_between_sibling_domains  | [Table of Contents](index) |  min_dns_ttl |

