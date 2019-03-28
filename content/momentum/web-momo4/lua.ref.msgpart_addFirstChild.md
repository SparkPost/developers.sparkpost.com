|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_text_replace)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msgpart_addLastChild) |

<a name="lua.ref.msgpart_addFirstChild"></a>
## Name

msgpart:addFirstChild — Adds a child as the first child on this part

<a name="idp17012768"></a>
## Synopsis

`msgpart:addFirstChild(child);`

`child: table`<a name="idp17015696"></a>
## Description

Adds a child as the first child on this part. This part must already be a container for the addition to succeed. Returns `true` on success, `false` on error.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp17019488"></a>
## See Also

[msgpart:addLastChild](lua.ref.msgpart_addLastChild "msgpart:addLastChild")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_text_replace)  | [Up](lua.function.details) |  [Next](lua.ref.msgpart_addLastChild) |
| msg:text_replace  | [Table of Contents](index) |  msgpart:addLastChild |

