| [Prev](lua.ref.msgpart_header2)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_insertAfter.php) |

<a name="lua.ref.msgpart_header3"></a>
## Name

msgpart:header — If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers

<a name="idp25774544"></a>
## Synopsis

`msgpart:header(name, value, mode);`

```
name: string
value: string
mode: string, optional
```
<a name="idp25777264"></a>
## Description

If the mode is `replace` (or unspecified), first delete all other headers of that name before appending the new value to the message headers. The other modes are `prepend` and `append`.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_header2)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_insertAfter.php) |
| msgpart:header  | [Table of Contents](index) |  msgpart:insertAfter |
