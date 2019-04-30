|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.ehlo_timeout)  | Chapter 72. Configuration Options Reference |  [Next](config.ref.event_loop) |

<a name="conf.ref.enable_fbl_header_insertion"></a>
## Name

enable_fbl_header_insertion — enable or disable fbl header insertion

## Synopsis

`enable_fbl_header_insertion = "enabled"`

<a name="idp24574672"></a>
## Description

This option is used to enable or disable feedback loop header insertion. Note that for header insertion to work, the fbl module option, `Auto_log`, must also be set to `true`.

<a name="idp24577520"></a>
## Scope

This option is valid in the global, binding, binding_group, and domain scopes.

<a name="idp24579392"></a>
## See Also

[Section 71.35, “fbl - Feedback Loop”](modules.fbl "71.35. fbl - Feedback Loop")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.ehlo_timeout)  | [Up](config.options.ref) |  [Next](config.ref.event_loop) |
| ehlo_timeout  | [Table of Contents](index) |  event_loop |

