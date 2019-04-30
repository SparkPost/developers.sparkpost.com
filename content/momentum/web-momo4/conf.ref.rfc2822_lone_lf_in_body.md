|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_date_header)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.rfc2822_lone_lf_in_headers) |

<a name="conf.ref.rfc2822_lone_lf_in_body"></a>
## Name

rfc2822_lone_lf_in_body — rfc2822 conformance

## Synopsis

`rfc2822_lone_lf_in_body = "ignore"`
`rfc2822_lone_lf_in_body = "pedantic"`
`rfc2822_lone_lf_in_body = "fix"`

<a name="idp26178736"></a>
## Description

RFC 2822 (section 2.3) strictly forbids Internet email from containing a carriage return (CR) or a linefeed (LF) by itself. If they do occur, they must appear in a CR LF sequence.

However, a wide variety of Internet email messages are transmitted with lone CR or LF characters in them. To be pedantic would lead to the rejection of messages that may be of importance. By default, Momentum will accept messages with lone CR or LF characters in the body. If the value "pedantic" is given, Momentum will inspect the body for violations of this nature and reject the message during SMTP.

To convert lone linefeeds into a canonical CRLF sequence, set `rfc2822_lone_lf_in_body` to `fix`.

### Note

This option is intended for use by sites that are injecting mail.

Any MTA which modifies the body of a message is considered hostile, and Momentum will not act as a hostile MTA without being explicitly configured to do so. If you are considering setting this option to `fix`, think twice: message content modification in any MTA can invalidate digital signatures and imposes a performance overhead. It is generally better to ensure that the content you are injecting is appropriately formed, rather than leaving it for the MTA to correct. We recognize that this may not always be possible, so we offer the "fix" option as a convenience.

When set to `fix`, this option also fixes lone CRs.

<a name="idp26186384"></a>
## Scope

`rfc2822_lone_lf_in_body` is valid in the global and the pathway scopes.

<a name="idp26188672"></a>
## See Also

[rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_date_header)  | [Up](config.options.ref) |  [Next](conf.ref.rfc2822_lone_lf_in_headers) |
| rfc2822_date_header  | [Table of Contents](index) |  rfc2822_lone_lf_in_headers |

