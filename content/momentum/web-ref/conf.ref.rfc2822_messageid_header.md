|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_max_line_length_policy)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.rfc2822_missing_headers.php) |

<a name="conf.ref.rfc2822_messageid_header"></a>
## Name

rfc2822_messageid_header — rfc2822 conformance

## Synopsis

`RFC2822_MessageID_Header = "ignore"`
`RFC2822_MessageID_Header = "ifneeded"`

<a name="idp11428960"></a>
## Description

If a message is missing the `Message-ID:` header and `MessageID_Header` is set to `ifneeded`, Momentum will generate a suitable header and insert it into the message.

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

From the web UI, when this option has not been set, its value is shown as `1`. This is the integer constant value of the default, `ifneeded`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

<a name="idp11435248"></a>
## Scope

RFC2822_MessageID_Header is valid in the global and the pathway scopes.

<a name="idp11436928"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers.php "rfc2822_lone_lf_in_headers"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers.php "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers.php "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length.php "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header.php "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules.php "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope.php "rfc2821_allow_whitespace_in_envelope")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rfc2822_max_line_length_policy)  | [Up](conf.ref.files.php) |  [Next](conf.ref.rfc2822_missing_headers.php) |
| rfc2822_max_line_length_policy  | [Table of Contents](index) |  rfc2822_missing_headers |
