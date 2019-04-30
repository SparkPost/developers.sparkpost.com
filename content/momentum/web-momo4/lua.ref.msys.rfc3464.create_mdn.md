|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.rfc3464.compute_delivery_status_string)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.rfc3464.extract_delivery_status) |

<a name="lua.ref.msys.rfc3464.create_mdn"></a>
## Name

msys.rfc3464.create_mdn — Generate an MDN from a message

<a name="idp18393648"></a>
## Synopsis

`msys.rfc3464.create_mdn(msg, action);`

```
msg: userdata, ec_message type
action: number
```
<a name="idp18396656"></a>
## Description

Generates an MDN from the input `msg`. `action` can be one of msys.core.FAILED, msys.core.DELAYED, msys.core.DELIVERED, msys.core.RELAYED and msys.core.EXPANDED. Returns the generated MDN.

Enable this function with the statement `require('msys.rfc3464');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.rfc3464.compute_delivery_status_string)  | [Up](lua.function.details) |  [Next](lua.ref.msys.rfc3464.extract_delivery_status) |
| msys.rfc3464.compute_delivery_status_string  | [Table of Contents](index) |  msys.rfc3464.extract_delivery_status |

