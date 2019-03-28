|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_makeBoundary)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_makePart) |

<a name="lua.ref.msg_makeContainer"></a>
## Name

msg:makeContainer — Creates a new, unlinked, container message part

<a name="idp16856096"></a>
## Synopsis

`msg:makeContainer(mimetype, boundary, add_terminator);`

```
mimetype: string
boundary: string, optional
add_terminator: boolean, optional
```
<a name="idp16859168"></a>
## Description

Creates a new, unlinked, container message part. The `mimetype` parameter specifies the MIME Content-Type that is to be used. If `boundary` is left unspecified, a random boundary will be generated on your behalf.

If add_terminator is `true`, "`CRLF.CFLF`" will be added to the container so that it can be used as the top part of a message. This parameter defaults to `false`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16864880"></a>
## See Also

[msg:makeBoundary](lua.ref.msg_makeBoundary "msg:makeBoundary")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_makeBoundary)  | [Up](lua.function.details) |  [Next](lua.ref.msg_makePart) |
| msg:makeBoundary  | [Table of Contents](index) |  msg:makePart |

