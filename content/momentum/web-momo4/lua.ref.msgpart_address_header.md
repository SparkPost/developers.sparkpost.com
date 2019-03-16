| [Prev](lua.ref.msgpart_addLastChild)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msgpart_body_match) |

<a name="lua.ref.msgpart_address_header"></a>
## Name

msgpart:address_header — Parse each instance of the named header for RFC2822 addresses

<a name="idp17043728"></a>
## Synopsis

`msgpart:address_header(headername, component);`

```
headername: string
component: string, optional
```
<a name="idp17046752"></a>
## Description

Parse each instance of the named header for RFC2822 addresses.

Where the address header is made up of `user+detail@domain`, the possible components are:

*   `all` the entire email address

*   `localpart` everything before the `@`

*   `user` the user portion

*   `detail` the detail portion

*   `domain` the domain portion

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_addLastChild)  | [Up](lua.function.details) |  [Next](lua.ref.msgpart_body_match) |
| msgpart:addLastChild  | [Table of Contents](index) |  msgpart:body_match |

