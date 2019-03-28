|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_rotate)  | Chapter 74. Executable Commands Reference |  [Next](executable.ec_show) |

<a name="executable.ec_sendmail"></a>
## Name

ec_sendmail — a sendmail compatibility interface

## Synopsis

`/opt/msys/ecelerity/bin/ec_sendmail` [ -F *`full_name`* ] [ -f *`email_address`* ] [ -h ] [ -i ] [ -t ]

<a name="idp13117120"></a>
## Description

**ec_sendmail** is a command line utility for Unix systems that requires a local binary to perform submission to the local MTA.

It has the following options:

<dl className="variablelist">

<dt>-F *`full_name`*</dt>

<dd>

Set sender's full name. This will be displayed in the From: header.

</dd>

<dt>-f *`email_address`*</dt>

<dd>

Specify the MAIL FROM: part on the envelope. This address is also displayed in the From: header. If `-f` is used to specify a different address other than the actual `username@hostname` by a user who is not root or whose `geteuid()` doesn't return 0, a `X-Authentication-Warning` header will be added in the email.

</dd>

<dt>-h</dt>

<dd>

Show a help message.

</dd>

<dt>-i</dt>

<dd>

Ignore lines containing only a single dot. It is recommended to set this if data is read from a file.

</dd>

<dt>-t</dt>

<dd>

Scanning the message for recipient(s). Lines starting with To:, Cc: or Bcc: will be used to extract recipient address(es).

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_rotate)  | [Up](exec.cmds.ref) |  [Next](executable.ec_show) |
| ec_rotate  | [Table of Contents](index) |  ec_show |

