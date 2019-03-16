| [Prev](conf.ref.relay_hosts)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.require_ehlo.php) |

<a name="conf.ref.remote_smtp_port"></a>
## Name

remote_smtp_port — set the port to be used for SMTP deliveries

## Synopsis

`Remote_SMTP_Port = "25"`

<a name="idp11145680"></a>
## Description

This will set the port to which outbound SMTP connections are attempted. It can be set globally and overridden at the domain level. The default value for this option is `25`.

<a name="idp11147872"></a>
## Scope

remote_smtp_port is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.relay_hosts)  | [Up](conf.ref.files.php) |  [Next](conf.ref.require_ehlo.php) |
| relay_hosts  | [Table of Contents](index) |  require_ehlo |
