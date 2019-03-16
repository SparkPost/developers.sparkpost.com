| [Prev](conf.ref.routes)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.scope_max_outbound_connections) |

<a name="conf.ref.rset_timeout"></a>
## Name

rset_timeout — set the timeout after RSET

## Synopsis

`rset_timeout = 30`

<a name="idp26390176"></a>
## Description

The amount of time in seconds to wait for a response to a `RSET` command. `RSET` commands are used to reset the state of an SMTP session in which a transaction has only partially succeeded. It allows subsequent messages to be delivered down a single SMTP session immediately following a transient or permanent failure response from the remote server before the complete and successful delivery of the prior message. The default value is `30`.

<a name="idp26393744"></a>
## Scope

rset_timeout is valid in the binding, binding_group, domain, and global scopes.

| [Prev](conf.ref.routes)  | [Up](config.options.ref) |  [Next](conf.ref.scope_max_outbound_connections) |
| routes  | [Table of Contents](index) |  scope_max_outbound_connections |

