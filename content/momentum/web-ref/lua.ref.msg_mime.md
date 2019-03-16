| [Prev](lua.ref.msg_makePart)  | 15.2. Lua Functions |  [Next](lua.ref.msg_raw.php) |

<a name="lua.ref.msg_mime"></a>
## Name

msg:mime — Returns the top of the MIME tree for the message, a message part

<a name="idp25563056"></a>
## Synopsis

`msg:mime(readonly);`

`readonly: boolean, optional`<a name="idp25565744"></a>
## Description

Returns the top of the MIME tree for the message, a message part. Setting `readonly` to `false`, indicates that modifications are going to be made and a MIME tree optimized for modifications is returned. If you attempt to modify a MIME part that is not writable, a runtime error will result. The returned part has a "thread" member that allows easy iteration of the MIME tree.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msg_makePart)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_raw.php) |
| msg:makePart  | [Table of Contents](index) |  msg:raw |
