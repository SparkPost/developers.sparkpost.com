| [Prev](conf.ref.rfc2822_max_line_length)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.rfc2822_messageid_header.php) |

<a name="conf.ref.rfc2822_max_line_length_policy"></a>
## Name

rfc2822_max_line_length_policy — determine how non-RFC-compliant line lengths are handled

## Synopsis

`rfc2822_max_line_length_policy = "none"`

<a name="idp11405328"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

This option defines how messages with non-RFC-compliant line lengths are handled. When set to `none`, messages are processed as usual. When set to `fix`, Momentum will attempt to fix the body of the message. When set to `reject`, messages with non-RFC-compliant line lengths are rejected.

### Note

From the web UI, when this option has not been set, its value is shown as `0`. This is the integer constant value of the default, `none`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

When `rfc2822_max_line_length_policy` is set to a value other than `none`, it is recommended that `RFC2822_Max_Line_Length` be set to a *numeric* value greater than the RFC guideline. For example, `rfc2822_max_line_length = 2048`.

The default value for this option is `none`.

<a name="idp11417632"></a>
## Scope

`rfc2822_max_line_length_policy` is valid in the global, pathway and pathway_group scopes.

<a name="idp11419712"></a>
## See Also

[rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length")

| [Prev](conf.ref.rfc2822_max_line_length)  | [Up](conf.ref.files.php) |  [Next](conf.ref.rfc2822_messageid_header.php) |
| rfc2822_max_line_length  | [Table of Contents](index) |  rfc2822_messageid_header |
