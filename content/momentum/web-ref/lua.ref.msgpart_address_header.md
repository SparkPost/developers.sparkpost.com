| [Prev](lua.ref.msgpart_addLastChild)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_body_match.php) |

<a name="lua.ref.msgpart_address_header"></a>
## Name

msgpart:address_header — Parse each instance of the named header for RFC2822 addresses

<a name="idp25705776"></a>
## Synopsis

`msgpart:address_header(headername, component);`

```
headername: string
component: string, optional
```
<a name="idp25708512"></a>
## Description

Parse each instance of the named header for RFC2822 addresses.

Where the address header is made up of `user+detail@domain`, the possible components are:

*   `all` the entire email address

*   `localpart` everything before the `@`

*   `user` the user portion

*   `detail` the detail portion

*   `domain` the domain portion

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_addLastChild)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_body_match.php) |
| msgpart:addLastChild  | [Table of Contents](index) |  msgpart:body_match |
