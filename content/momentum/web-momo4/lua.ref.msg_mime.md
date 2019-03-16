| [Prev](lua.ref.msg_makePart)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_raw) |

<a name="lua.ref.msg_mime"></a>
## Name

msg:mime — Returns the top of the MIME tree for the message, a message part

<a name="idp16889536"></a>
## Synopsis

`msg:mime(readonly);`

`readonly: boolean, optional`<a name="idp16892512"></a>
## Description

Returns the top of the MIME tree for the message, a message part. Setting `readonly` to `false`, indicates that modifications are going to be made and a MIME tree optimized for modifications is returned. If you attempt to modify a MIME part that is not writable, a runtime error will result. The returned part has a "thread" member that allows easy iteration of the MIME tree.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msg_makePart)  | [Up](lua.function.details) |  [Next](lua.ref.msg_raw) |
| msg:makePart  | [Table of Contents](index) |  msg:raw |

