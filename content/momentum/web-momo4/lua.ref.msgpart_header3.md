|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_header2)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msgpart_insertAfter) |

<a name="lua.ref.msgpart_header3"></a>
## Name

msgpart:header — If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers

<a name="idp17118816"></a>
## Synopsis

`msgpart:header(name, value, mode);`

```
name: string
value: string
mode: string, optional
```
<a name="idp17121824"></a>
## Description

If the mode is `replace` (or unspecified), first delete all other headers of that name before appending the new value to the message headers. The other modes are `prepend` and `append`.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_header2)  | [Up](lua.function.details) |  [Next](lua.ref.msgpart_insertAfter) |
| msgpart:header  | [Table of Contents](index) |  msgpart:insertAfter |

