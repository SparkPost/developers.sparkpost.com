| [Prev](conf.ref.connection_allocation_aggressiveness)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.control_client_timeout) |

<a name="conf.ref.context"></a>
## Name

context — use to set arbitrary connection context key value pairs.

## Synopsis

context = "*`(name = value)`*          "

<a name="idp24062288"></a>
## Description

Provides a mechanism to set arbitrary connection context key value pairs. The connection context is visible to all validation modules and scriptlets. It allows the efficient assignment of metadata to connections based on the listener and arbitrary ACLs.

<a name="idp24064352"></a>
## Scope

context is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scopes.

<a name="idp24066240"></a>
## See Also

[Section 62.1, “Validation and the Validation Context”](policy#policy.validation "62.1. Validation and the Validation Context")

| [Prev](conf.ref.connection_allocation_aggressiveness)  | [Up](config.options.ref) |  [Next](conf.ref.control_client_timeout) |
| connection_allocation_aggressiveness  | [Table of Contents](index) |  control_client_timeout |

