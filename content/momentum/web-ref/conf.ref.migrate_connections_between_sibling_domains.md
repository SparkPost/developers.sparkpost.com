| [Prev](conf.ref.message_expiration)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.mime_parse_large_messages_during_reception.php) |

<a name="conf.ref.migrate_connections_between_sibling_domains"></a>
## Name

migrate_connections_between_sibling_domains — optimize connections for sibling domains

## Synopsis

`migrate_connections_between_sibling_domains = true`

<a name="idp10398992"></a>
## Description

When this option is `false`, if the active queue for a binding/domain pair becomes empty, its existing connection(s) sit idle. When set to `true`, Momentum attempts to find a sibling domain which shares the same binding and has a non-empty active queue and then move the idle connections to it.

If two domains have at least one common mail server (MX), they are considered siblings.

The default value for this option is `true`.

<a name="idp10402976"></a>
## Scope

`migrate_connections_between_sibling_domains` is valid in the global scope.

| [Prev](conf.ref.message_expiration)  | [Up](conf.ref.files.php) |  [Next](conf.ref.mime_parse_large_messages_during_reception.php) |
| message_expiration  | [Table of Contents](index) |  mime_parse_large_messages_during_reception |
