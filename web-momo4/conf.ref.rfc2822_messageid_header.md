| [Prev](conf.ref.rfc2822_max_line_length_policy)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.rfc2822_missing_headers) |

<a name="conf.ref.rfc2822_messageid_header"></a>
## Name

rfc2822_messageid_header — rfc2822 conformance

## Synopsis

`rfc2822_messageid_header = "ignore"`
`rfc2822_messageid_header = "ifneeded"`

<a name="idp26268768"></a>
## Description

If a message is missing the `Message-ID:` header and `MessageID_Header` is set to `ifneeded`, Momentum will generate a suitable header and insert it into the message.

<a name="idp26271984"></a>
## Scope

`rfc2822_messageid_header` is valid in the global and the pathway scopes.

<a name="idp26274288"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")

| [Prev](conf.ref.rfc2822_max_line_length_policy)  | [Up](config.options.ref) |  [Next](conf.ref.rfc2822_missing_headers) |
| rfc2822_max_line_length_policy  | [Table of Contents](index) |  rfc2822_missing_headers |

