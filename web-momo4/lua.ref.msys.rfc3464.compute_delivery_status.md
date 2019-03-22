| [Prev](lua.ref.msys.qp.encode)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.rfc3464.compute_delivery_status_string) |

<a name="lua.ref.msys.rfc3464.compute_delivery_status"></a>
## Name

msys.rfc3464.compute_delivery_status — Generate RFC3464 compliant delivery status headers

<a name="idp18367696"></a>
## Synopsis

`msys.rfc3464.compute_delivery_status(msg, action);`

```
msg: userdata, ec_message type
action: number
```
<a name="idp18370736"></a>
## Description

Generates RFC3464 compliant delivery status headers. It takes two inputs: `msg` and `action`. `msg` is an msys.core:_ec_message and `action` is one of the following integers: msys.core.FAILED, msys.core.DELAYED, msys.core.DELIVERED, msys.core.RELAYED and msys.core.EXPANDED. Returns a table of header/value pairs.

Enable this function with the statement `require('msys.rfc3464');`.

<a name="idp18375584"></a>
## See Also

[msys.rfc3464.compute_delivery_status_string](lua.ref.msys.rfc3464.compute_delivery_status_string "msys.rfc3464.compute_delivery_status_string")

| [Prev](lua.ref.msys.qp.encode)  | [Up](lua.function.details) |  [Next](lua.ref.msys.rfc3464.compute_delivery_status_string) |
| msys.qp.encode  | [Table of Contents](index) |  msys.rfc3464.compute_delivery_status_string |

