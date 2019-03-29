|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_messageid_header)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.rfc2822_trace_headers.php) |

<a name="conf.ref.rfc2822_missing_headers"></a>
## Name

rfc2822_missing_headers — rfc2822 conformance

## Synopsis

`RFC2822_missing_headers = "reject"`
`RFC2822_missing_headers = "allow"`

<a name="idp11450176"></a>
## Description

**Configuration Change. ** This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

### Note

From the web UI, when this option has not been set, its value is shown as `0`. This is the integer constant value of the default, `reject`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

RFC 2822 requires that all messages consist of headers and a body, separated by a blank line. By default, Momentum will reject messages that are missing their headers, but by setting the Missing_Headers option to "allow", it will accept those messages and treat them as header-less messages, prepend trace headers as normal.

<a name="idp11456848"></a>
## Scope

RFC2822_missing_headers is valid in the global and the pathway scopes.

<a name="idp11458528"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers.php "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header.php "rfc2822_messageid_header"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers.php "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length.php "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header.php "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules.php "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope.php "rfc2821_allow_whitespace_in_envelope")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_messageid_header)  | [Up](conf.ref.files.php) |  [Next](conf.ref.rfc2822_trace_headers.php) |
| rfc2822_messageid_header  | [Table of Contents](index) |  rfc2822_trace_headers |
