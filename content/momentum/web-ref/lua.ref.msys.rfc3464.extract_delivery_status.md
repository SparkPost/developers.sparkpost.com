| [Prev](lua.ref.msys.rfc3464.create_mdn)  | 15.2. Lua Functions |  [Next](lua.ref.msys.rfc3464.send_mdn.php) |

<a name="lua.ref.msys.rfc3464.extract_delivery_status"></a>
## Name

msys.rfc3464.extract_delivery_status — Return a table of parsed email headers

<a name="idp26941664"></a>
## Synopsis

`msys.rfc3464.extract_delivery_status(msg);`

`msg: userdata, ec_message type`<a name="idp26944320"></a>
## Description

This function parses the headers of the mail and returns a table of successfully parsed header/values. `msg` is an RFC3464 MDN. If `msg` is not an MDN or the headers cannot be parsed, this function will return a nil.

Enable this function with the statement `require('msys.rfc3464');`.

| [Prev](lua.ref.msys.rfc3464.create_mdn)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.rfc3464.send_mdn.php) |
| msys.rfc3464.create_mdn  | [Table of Contents](index) |  msys.rfc3464.send_mdn |
