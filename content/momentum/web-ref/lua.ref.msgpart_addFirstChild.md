| [Prev](lua.ref.msg_text_replace)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_addLastChild.php) |

<a name="lua.ref.msgpart_addFirstChild"></a>
## Name

msgpart:addFirstChild — Adds a child as the first child on this part

<a name="idp25676608"></a>
## Synopsis

`msgpart:addFirstChild(child);`

`child: table`<a name="idp25679248"></a>
## Description

Adds a child as the first child on this part. This part must already be a container for the addition to succeed. Returns `true` on success, `false` on error.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25682816"></a>
## See Also

[msgpart:addLastChild](lua.ref.msgpart_addLastChild "msgpart:addLastChild")

| [Prev](lua.ref.msg_text_replace)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_addLastChild.php) |
| msg:text_replace  | [Table of Contents](index) |  msgpart:addLastChild |
