| [Prev](lua.ref.msg_routing_domain)  | 15.2. Lua Functions |  [Next](lua.ref.msg_text1.php) |

<a name="lua.ref.msg_text"></a>
## Name

msg:text — Return the transfer decoded text for the body

<a name="idp25636672"></a>
## Synopsis

`msg:text(...);`

`...: mixed`<a name="idp25639344"></a>
## Description

This function returns the transfer decoded text for the body, in UTF-8\. Only parts that have a 'text' mime type will be included. If there are multiple text parts, they are returned as a table.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msg_routing_domain)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_text1.php) |
| msg:routing_domain  | [Table of Contents](index) |  msg:text |
