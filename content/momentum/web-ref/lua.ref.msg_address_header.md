|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg.id)  | 15.2. Lua Functions |  [Next](lua.ref.msg_binding.php) |

<a name="lua.ref.msg_address_header"></a>
## Name

msg:address_header — Returns address components as an array

<a name="idp25325920"></a>
## Synopsis

`msg:address_header(...);`

`...: mixed`<a name="idp25328608"></a>
## Description

Parses each instance of the named header for RFC2822 addresses and returns the component of those addresses as an array.

The ellipsis (...) in the parameter list indicates that this function has any number of arguments.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25331792"></a>
## See Also

[msys.parseRFC2822Addresses](lua.ref.msys.parseRFC2822Addresses "msys.parseRFC2822Addresses")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg.id)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_binding.php) |
| msg.id  | [Table of Contents](index) |  msg:binding |
