| [Prev](conf.ref.rfc2822_lone_lf_in_headers)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.rfc2822_max_line_length_policy) |

<a name="conf.ref.rfc2822_max_line_length"></a>
## Name

rfc2822_max_line_length — rfc2822 conformance

## Synopsis

`rfc2822_max_line_length =` [ "ignore" ] [ "pedantic" ] [ "fix" ]

`rfc2822_max_line_length = 2048`

<a name="idp26226688"></a>
## Description

RFC2822 requires that the maximum length of a single line of a message be no longer than 998 characters.

The default, "ignore," behavior is to ignore the length of the lines and process the email normally regardless.

If you would prefer to reject messages that do contain a line with more than 998 characters, the "pedantic" option can be used.

If you would prefer to accept messages with more than 998 characters on a line and have Momentum fix those messages by breaking up lines with more than 998 characters a value of "fix" may be specified.

This option can be set to a numeric value. When `rfc2822_max_line_length_policy` is set to a value other than `none`, it is recommended that `rfc2822_max_line_length` be set to a *numeric* value greater than the RFC guideline. For example, `rfc2822_max_line_length = 2048`.

<a name="idp26233232"></a>
## Scope

`rfc2822_max_line_length` is valid in the global and the pathway scopes.

<a name="idp26235520"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers"), [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope"), [rfc2822_max_line_length_policy](conf.ref.rfc2822_max_line_length_policy "rfc2822_max_line_length_policy")

| [Prev](conf.ref.rfc2822_lone_lf_in_headers)  | [Up](config.options.ref) |  [Next](conf.ref.rfc2822_max_line_length_policy) |
| rfc2822_lone_lf_in_headers  | [Table of Contents](index) |  rfc2822_max_line_length_policy |

