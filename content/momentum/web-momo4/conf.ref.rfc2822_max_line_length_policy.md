| [Prev](conf.ref.rfc2822_max_line_length)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.rfc2822_messageid_header) |

<a name="conf.ref.rfc2822_max_line_length_policy"></a>
## Name

rfc2822_max_line_length_policy — determine how non-RFC-compliant line lengths are handled

## Synopsis

`rfc2822_max_line_length_policy = "none"`

<a name="idp26249120"></a>
## Description

This option defines how messages with non-RFC-compliant line lengths are handled. When set to `none`, messages are processed as usual. When set to `fix`, Momentum will attempt to fix the body of the message. When set to `reject`, messages with non-RFC-compliant line lengths are rejected.

When `rfc2822_max_line_length_policy` is set to a value other than `none`, it is recommended that `rfc2822_max_line_length` be set to a *numeric* value greater than the RFC guideline. For example, `rfc2822_max_line_length = 2048`.

The default value for this option is `none`.

<a name="idp26256224"></a>
## Scope

`rfc2822_max_line_length_policy` is valid in the global, pathway, and pathway_group scopes.

<a name="idp26258528"></a>
## See Also

[rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length")

| [Prev](conf.ref.rfc2822_max_line_length)  | [Up](config.options.ref) |  [Next](conf.ref.rfc2822_messageid_header) |
| rfc2822_max_line_length  | [Table of Contents](index) |  rfc2822_messageid_header |

