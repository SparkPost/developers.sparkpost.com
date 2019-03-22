| [Prev](lua.ref.msg_makeContainer)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_mime) |

<a name="lua.ref.msg_makePart"></a>
## Name

msg:makePart — Creates a new, unlinked, singleton (or leaf) message part

<a name="idp16871760"></a>
## Synopsis

`msg:makePart(mimetype, body, encoding);`

```
mimetype: string
body: userdata, io_object, optional
encoding: string, optional
```
<a name="idp16874800"></a>
## Description

Creates a new, unlinked, singleton (or leaf) message part. `mimetype` specifies the MIME Content-Type that is to be used, and `body` is an optional io_object that contains the raw message body excluding headers. `encoding` is one of:

*   `msys.core.EC_MIME_TE_7BIT` (this is the default if left unspecified)

*   `msys.core.EC_MIME_TE_8BIT`

*   `msys.core.EC_MIME_TE_BASE64`

*   `msys.core.EC_MIME_TE_QUOTED_PRINTABLE`

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msg_makeContainer)  | [Up](lua.function.details) |  [Next](lua.ref.msg_mime) |
| msg:makeContainer  | [Table of Contents](index) |  msg:mime |

