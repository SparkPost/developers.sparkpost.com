|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_missing_headers)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.routes) |

<a name="conf.ref.rfc2822_trace_headers"></a>
## Name

rfc2822_trace_headers — rfc2822 conformance

## Synopsis

`rfc2822_trace_headers = "true"`
`rfc2822_trace_headers = "false"`

<a name="idp26307264"></a>
## Description

Trace headers are headers added to the email message as it passes through the system to provide evidence of its transit through the MTA. These are of the form "Return-path:" and "Received:". If this option is set to `true`, the following occurs:

*   If there is no Return-Path, Momentum will add one using the MAILFROM

*   If there is a Return-Path, Momentum will replace it with the MAILFROM

*   Momentum will add a Received header for this hop

If this option is set to `false`, the following occurs:

*   If there is no Return-Path, Momentum will not add one

*   If there is a Return-Path, Momentum will ignore the existing header

*   Ecelerity will **not** add a Received header for this hop

Trace headers are defined in RFC 822 and 2822 and recommended by RFC 821 and 2821\. It is recommended that they be enabled (per the default), but can be disabled under special circumstances by setting this option to `false`.

Turning off trace headers can easily result in messages looking like direct-to-mx spam, especially if there are no additional hops through internal MTAs before leaving the network.

Turning off trace headers may hamper mail loop detection methods, allowing malformed addresses to loop infinitely through the system.

<a name="idp26320416"></a>
## Scope

`rfc2822_trace_headers` is valid in the global and the pathway scopes.

<a name="idp26322704"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_missing_headers)  | [Up](config.options.ref) |  [Next](conf.ref.routes) |
| rfc2822_missing_headers  | [Table of Contents](index) |  routes |

