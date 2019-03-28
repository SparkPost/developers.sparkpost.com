|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_fail_domain)  | 12.2. System Console Commands |  [Next](console_commands.binding_flush_domain.php) |

<a name="console_commands.binding_fail_domain_quiet"></a>
## Name

binding fail domain quiet — fail messages for a domain on a binding without generating bounces

## Synopsis

`binding fail domain quiet` { *`binding_name`* } { *`domain_name`* }

<a name="idp15438096"></a>
## Description

The **binding fail domain quiet**                   command allows the administrative failure of all messages bound for the specified domain on the specified binding in such a way that no bounce is sent, even if Generate_Bounces is set in the server configuration. Its usage is similar to **binding fail domain** :

```
ecelerity> binding fail domain quiet BINDING1 unresolvableproblems.com
unresolvableproblems.com purged, 62415 messages failed.
```

You may substitute `all` for the domain name to apply to all domains.

```
ecelerity> binding fail domain quiet BINDING1 all
All domains purged.  62415 messages failed.
```
<a name="idp15443024"></a>
## See Also

[binding fail domain](console_commands.binding_fail_domain "binding fail domain")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_fail_domain)  | [Up](console.commands.non-module.php) |  [Next](console_commands.binding_flush_domain.php) |
| binding fail domain  | [Table of Contents](index) |  binding flush domain |
