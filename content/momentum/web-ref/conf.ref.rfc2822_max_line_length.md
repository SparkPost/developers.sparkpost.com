| [Prev](conf.ref.rfc2822_lone_lf_in_headers)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.rfc2822_max_line_length_policy.php) |

<a name="conf.ref.rfc2822_max_line_length"></a>
## Name

rfc2822_max_line_length — rfc2822 conformance

## Synopsis

`RFC2822_Max_Line_Length =` [ "ignore" ] [ "pedantic" ] [ "fix" ]

`RFC2822_Max_Line_Length = 2048`

<a name="idp11378272"></a>
## Description

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

From the web UI, when this option has not been set, its value is shown as `0`. This is the integer constant value of the default, `ignore`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

RFC2822 requires that the maximum length of a single line of a message be no longer than 998 characters.

The default, "ignore," behavior is to ignore the length of the lines and process the email normally regardless.

If you would prefer to reject messages that do contain a line with more than 998 characters, the "pedantic" option can be used.

If you would prefer to accept messages with more than 998 characters on a line and have Momentum fix those messages by breaking up lines with more than 998 characters a value of "fix" may be specified.

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

As of version 3.0.25, this option can be set to a numeric value. When `rfc2822_max_line_length_policy` is set to a value other than `none`, it is recommended that `RFC2822_Max_Line_Length` be set to a *numeric* value greater than the RFC guideline. For example, `rfc2822_max_line_length = 2048`.

<a name="idp11391008"></a>
## Scope

RFC2822_Max_Line_Length is valid in the global and the pathway scopes.

<a name="idp11392688"></a>
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers.php "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header.php "rfc2822_messageid_header"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers.php "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers.php "rfc2822_trace_headers"), [rfc2822_date_header](conf.ref.rfc2822_date_header.php "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules.php "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope.php "rfc2821_allow_whitespace_in_envelope"), [rfc2822_max_line_length_policy](conf.ref.rfc2822_max_line_length_policy.php "rfc2822_max_line_length_policy")

| [Prev](conf.ref.rfc2822_lone_lf_in_headers)  | [Up](conf.ref.files.php) |  [Next](conf.ref.rfc2822_max_line_length_policy.php) |
| rfc2822_lone_lf_in_headers  | [Table of Contents](index) |  rfc2822_max_line_length_policy |
