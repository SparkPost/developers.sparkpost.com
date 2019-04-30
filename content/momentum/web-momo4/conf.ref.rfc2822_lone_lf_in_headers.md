|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_lone_lf_in_body)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.rfc2822_max_line_length) |

<a name="conf.ref.rfc2822_lone_lf_in_headers"></a>
## Name

rfc2822_lone_lf_in_headers — rfc2822 conformance

## Synopsis

`rfc2822_lone_lf_in_headers = "fix"`
`rfc2822_lone_lf_in_headers = "pedantic"`

<a name="idp26203040"></a>
## Description

RFC 2822 (section 2.2) requires that all headers end with a carriage return (CR) and a linefeed (LF). Technically, any MTA that accepts messages that do not separate headers with a CR LF sequence is not compliant. Therefore, the default behavior is to reject those messages during the SMTP session.

Many mail user agents do not comply to this standard and send messages with headers separated by lone LF. While non-compliant, you can have Momentum rectify these mistakes upon message reception by setting this option to "fix". *Note*: Setting this to "fix" will incur a slight performance penalty during reception. However, the performance impact is very small (almost negligible for a single message) and only applies to the messages that are badly formatted.

When set to `fix`, this option also fixes lone CRs.

<a name="idp26207456"></a>
## Scope

`rfc2822_lone_lf_in_headers` is valid in global and pathway scopes.

<a name="idp26209744"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_lone_lf_in_body)  | [Up](config.options.ref) |  [Next](conf.ref.rfc2822_max_line_length) |
| rfc2822_lone_lf_in_body  | [Table of Contents](index) |  rfc2822_max_line_length |

