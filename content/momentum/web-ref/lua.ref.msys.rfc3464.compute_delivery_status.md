| [Prev](lua.ref.msys.qp.encode)  | 15.2. Lua Functions |  [Next](lua.ref.msys.rfc3464.compute_delivery_status_string.php) |

<a name="lua.ref.msys.rfc3464.compute_delivery_status"></a>
## Name

msys.rfc3464.compute_delivery_status — Generate RFC3464 compliant delivery status headers

<a name="idp26908576"></a>
## Synopsis

`msys.rfc3464.compute_delivery_status(msg, action);`

```
msg: userdata, ec_message type
action: number
```
<a name="idp26911328"></a>
## Description

Generates RFC3464 compliant delivery status headers. It takes two inputs: `msg` and `action`. `msg` is an msys.core:_ec_message and `action` is one of the following integers: msys.core.FAILED, msys.core.DELAYED, msys.core.DELIVERED, msys.core.RELAYED and msys.core.EXPANDED. Returns a table of header/value pairs.

Enable this function with the statement `require('msys.rfc3464');`.

<a name="idp26915856"></a>
## See Also

[msys.rfc3464.compute_delivery_status_string](lua.ref.msys.rfc3464.compute_delivery_status_string "msys.rfc3464.compute_delivery_status_string")

| [Prev](lua.ref.msys.qp.encode)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.rfc3464.compute_delivery_status_string.php) |
| msys.qp.encode  | [Table of Contents](index) |  msys.rfc3464.compute_delivery_status_string |
