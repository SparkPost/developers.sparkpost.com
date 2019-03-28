|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.migrate_connections_between_sibling_domains)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.min_dns_ttl.php) |

<a name="conf.ref.mime_parse_large_messages_during_reception"></a>
## Name

mime_parse_large_messages_during_reception — configure whether large messages are parsed upon reception or just in time.

## Synopsis

`mime_parse_large_messages_during_reception = true`

<a name="idp10411744"></a>
## Description

This option sets or unsets the message mime parse state on a message generated with the builder API.

### Warning

Setting this value to "false" may result in blocking the scheduler thread. The default value for this option is `true`.

<a name="idp10414976"></a>
## Scope

mime_parse_large_messages_during_reception is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.migrate_connections_between_sibling_domains)  | [Up](conf.ref.files.php) |  [Next](conf.ref.min_dns_ttl.php) |
| migrate_connections_between_sibling_domains  | [Table of Contents](index) |  min_dns_ttl |
