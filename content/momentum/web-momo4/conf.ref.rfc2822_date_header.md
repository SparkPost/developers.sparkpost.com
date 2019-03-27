| [Prev](conf.ref.rfc2821_pedantic_address_rules)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.rfc2822_lone_lf_in_body) |

<a name="conf.ref.rfc2822_date_header"></a>
## Name

rfc2822_date_header — rfc2822 conformance

## Synopsis

`rfc2822_date_header = "ignore"`
`rfc2822_date_header = "pedantic"`
`rfc2822_date_header = "ifneeded"`

<a name="idp26158000"></a>
## Description

RFC 2822 requires that a Date header be present in all email messages. This requirement can often pose problems with incompatible mail user agents that neglect to present messages with Date fields.

The default, "ifneeded," behavior is to add a Date header if one is not present upon receiving the message.

If you would prefer to reject messages that do not contain a Date header, the "pedantic" option can be used.

If you would prefer to accept messages without Date headers and have Momentum attempt delivery of those messages without adding a Date header, a value of "ignore" may be specified.

<a name="idp26161760"></a>
## Scope

`rfc2822_date_header` is valid in the global and the pathway scopes.

<a name="idp26164032"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")

| [Prev](conf.ref.rfc2821_pedantic_address_rules)  | [Up](config.options.ref) |  [Next](conf.ref.rfc2822_lone_lf_in_body) |
| rfc2821_pedantic_address_rules  | [Table of Contents](index) |  rfc2822_lone_lf_in_body |

