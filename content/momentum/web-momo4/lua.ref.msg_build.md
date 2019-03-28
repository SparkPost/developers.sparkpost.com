|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_body_replace)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_discard) |

<a name="lua.ref.msg_build"></a>
## Name

msg:build — Create a message

<a name="idp16720336"></a>
## Synopsis

`msg:build(headers, parts, attachments);`

```
headers: table
parts: table
attachments: array of userdata
```
<a name="idp16723360"></a>

## Description

When calling this function, msg must be an empty message (created using `msys.core.ec_message_new()`). It requires the following inputs:

*   `headers` a table of *`header name`*      /*`header value`*        pairs. If the header's value contains non-ASCII or non-printable ASCII text, the caller must encode the text appropriately (see RFC 2047).

*   `parts` a table of alternative contents. Each pair consists of *`content-type/content`* pairs. For example, "text/plain; charset=utf8" / "Momentum rocks."; "text/html" / "&lt;b>Momentum&lt;/b> rocks.". "

    If the value of Content-Type is `text/*` and there is no charset specified, the content will be quoted-printable encoded; if a charset is specified or content type is not `text/*`, the content will be base64 encoded.

*   `attachments` an array of attachment objects. Each element is a table representing an attachment. The attachment table must contain the following pairs:

    *   `type` the "content-type" of the attachment. If your content charset encoding is not UTF-8, you will need to specify it in here as a parameter. For example: charset=*`charset_encoding`*.

    *   `name` a file name.

        ### Note

        If the file is in the current directory, you cannot use the file name alone. As a workaround, precede the file name with `./`, for example, `./attachment.txt`.

    *   `headers` a string of concatenated headers. Such as "Openby: iphone4\r\nCertificate: AKJSdwuiqdQIWDUHQIWDUH". Note that there should not be a CRLF at end.

    *   `content` the content of the attachment. The value can be a string, an io_object or an ec_message. For a string, the content will be quoted-printable encoded for transferring; for an io_object, the content will be base64 encoded. It is the caller's responsibility to encode the io_object. When the content is an ec_message, values of type, name or headers are ignored. The ec_message will be treated as an attached mail with content-type equal to `message/rfc822; name="Attached Message"`.

Enable this function with the statement `require('msys.extended.message');`.

When it is complete the message will have the following structure:

```
Content-Type: multipart/mixed; boundary="_bbb_"
Other-headers

--_bbb_
Content-Type: multipart/alternative; boundary="_ccc_"
Other-headers

--_ccc_
Content-Type: text/plain
Content-Disposition: inline
Other-headers

<the content of plain mail>
--_ccc_
Content-Type: text/html
Content-Disposition: inline
Content-Transfer-Encoding: quoted-printable
Other-headers

<the content of html mail>
--_ccc_
...
... other parts
...
--_ccc_--
--_bbb_
Content-type: attachment; name=cool-app.exe
other headers
Content-Transfer-Encoding: base64

<base64 encoded binary>
--_bbb_
...
... other attachments
...
--_bbb_--

.
```
<a name="idp16746144"></a>
## See Also

[msg:inject](lua.ref.msg_inject "msg:inject")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_body_replace)  | [Up](lua.function.details) |  [Next](lua.ref.msg_discard) |
| msg:body_replace  | [Table of Contents](index) |  msg:discard |

