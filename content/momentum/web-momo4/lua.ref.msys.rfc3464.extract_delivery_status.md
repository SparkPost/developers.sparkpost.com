| [Prev](lua.ref.msys.rfc3464.create_mdn)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.rfc3464.send_mdn) |

<a name="lua.ref.msys.rfc3464.extract_delivery_status"></a>
## Name

msys.rfc3464.extract_delivery_status — Return a table of parsed email headers

<a name="idp18403776"></a>
## Synopsis

`msys.rfc3464.extract_delivery_status(msg);`

`msg: userdata, ec_message type`<a name="idp18406720"></a>
## Description

This function parses the headers of the mail and returns a table of successfully parsed header/values. `msg` is an RFC3464 MDN. If `msg` is not an MDN or the headers cannot be parsed, this function will return a nil.

Enable this function with the statement `require('msys.rfc3464');`.

| [Prev](lua.ref.msys.rfc3464.create_mdn)  | [Up](lua.function.details) |  [Next](lua.ref.msys.rfc3464.send_mdn) |
| msys.rfc3464.create_mdn  | [Table of Contents](index) |  msys.rfc3464.send_mdn |

