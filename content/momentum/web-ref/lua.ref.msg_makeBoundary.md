| [Prev](lua.ref.msg_mailfrom)  | 15.2. Lua Functions |  [Next](lua.ref.msg_makeContainer.php) |

<a name="lua.ref.msg_makeBoundary"></a>
## Name

msg:makeBoundary — Generates a unique boundary string

<a name="idp25519200"></a>
## Synopsis

`msg:makeBoundary(...);`

`...: mixed`<a name="idp25521872"></a>
## Description

The MIME specification requires that each boundary be a unique string that is not a common prefix/substring of any other boundary in the complete message. This function generates a unique boundary string by assessing the boundaries defined for all the parts in the current message, in addition to those defined in the mime tree for each mime part passed to it as a parameter. This function is called by `makeContainer` when its boundary parameter is `nil`.

Enable this function with the statement `require('msys.extended.message');`.

The ellipsis (...) in the parameter list indicate that this function has any number of arguments.

<a name="idp25526272"></a>
## See Also

[msg:makeContainer](lua.ref.msg_makeContainer "msg:makeContainer")

| [Prev](lua.ref.msg_mailfrom)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_makeContainer.php) |
| msg:mailfrom  | [Table of Contents](index) |  msg:makeContainer |
