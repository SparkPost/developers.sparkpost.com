| [Prev](conf.ref.ehlo_timeout)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.eventloop.php) |

<a name="conf.ref.enable_fbl_header_insertion"></a>
## Name

enable_fbl_header_insertion — enable or disable fbl header insertion

## Synopsis

`enable_fbl_header_insertion = "enabled"`

<a name="idp9548144"></a>
## Description

This option is used to enable or disable feedback loop header insertion. Note that for header insertion to work, the fbl module option, `Auto_log`, must also be set to `true`.

<a name="idp9550800"></a>
## Scope

This option is valid in the global, binding, binding_group and the domain scopes.

<a name="idp9552480"></a>
## See Also

[Section 14.34, “fbl – Feedback Loop Module”](modules.fbl "14.34. fbl – Feedback Loop Module")

| [Prev](conf.ref.ehlo_timeout)  | [Up](conf.ref.files.php) |  [Next](conf.ref.eventloop.php) |
| ehlo_timeout  | [Table of Contents](index) |  eventloop |
