|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_routing_domain)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_text1) |

<a name="lua.ref.msg_text"></a>
## Name

msg:text — Return the transfer decoded text for the body

<a name="idp16968864"></a>
## Synopsis

`msg:text(...);`

`...: mixed`<a name="idp16971824"></a>
## Description

This function returns the transfer decoded text for the body, in UTF-8\. Only parts that have a 'text' mime type will be included. If there are multiple text parts, they are returned as a table.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_routing_domain)  | [Up](lua.function.details) |  [Next](lua.ref.msg_text1) |
| msg:routing_domain  | [Table of Contents](index) |  msg:text |

