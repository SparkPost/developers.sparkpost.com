| [Prev](lua.ref.msg_makeBoundary)  | 15.2. Lua Functions |  [Next](lua.ref.msg_makePart.php) |

<a name="lua.ref.msg_makeContainer"></a>
## Name

msg:makeContainer — Creates a new, unlinked, container message part

<a name="idp25532448"></a>
## Synopsis

`msg:makeContainer(mimetype, boundary, add_terminator);`

```
mimetype: string
boundary: string, optional
add_terminator: boolean, optional
```
<a name="idp25535232"></a>
## Description

Creates a new, unlinked, container message part. The `mimetype` parameter specifies the MIME Content-Type that is to be used. If `boundary` is left unspecified, a random boundary will be generated on your behalf.

If add_terminator is `true`, "`CRLF.CFLF`" will be added to the container so that it can be used as the top part of a message. This parameter defaults to `false`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25540688"></a>
## See Also

[msg:makeBoundary](lua.ref.msg_makeBoundary "msg:makeBoundary")

| [Prev](lua.ref.msg_makeBoundary)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_makePart.php) |
| msg:makeBoundary  | [Table of Contents](index) |  msg:makePart |
