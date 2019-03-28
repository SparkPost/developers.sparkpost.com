|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_code)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.header) |

<a name="lua.ref.msg_get_envelope2"></a>
## Name

msg:get_envelope2 — Get envelope values

<a name="idp15772864"></a>
## Synopsis

`require('msys.extended.message')`

`msg:get_envelope2(flags, localpart_str, domain_str);`

```
number: flags
localpart_str: userdata, ec_string type
domain_str: userdata, ec_string type
```
<a name="idp15776688"></a>
## Description

Return information from the envelope of the message. The value of `flags` determines the source of the information. `flags` may be an OR'ed combination of the following constants:

*   If `flags` includes `msys.core.EC_MSG_ENV_FROM` then the envelope sender will be the source of the information.

*   If `flags` includes `msys.core.EC_MSG_ENV_TO`, then the envelope recipient will be the source of the information.

*   If `msys.core.EC_MSG_ENV_COMPLETE` is contained in `flags`, then the address will be copied into the localpart buffer only, without any protocol decoration (for example, no MAIL FROM:<>CRLF).

### Warning

It is not valid to pass `msys.core.EC_MSG_ENV_FROM | msys.core.EC_MSG_ENV_TO` as a parameter to `flags`.

**Bitwise Operators**

To make it easier to work with libraries that use bitmasks as part of their API, bitwise logical operators are enabled as detailed below. The bitwise operators first convert their numeric operands to an integer, apply the operator and then generate a standard Lua number result.

*   `a & b` – bitwise AND, uses the __and metatable event (if defined)

*   `a | b` – bitwise OR (__or)

*   `a ^^ b` – bitwise XOR (__xor)

*   `a << 1` – bitwise shift left (__shl)

*   `a >> 1` – bitwise shift right (__shr)

*   `~a` – bitwise negation (__not)

*   `a \ 2` – integer division (__intdiv)

You must use the [msys.core.string_new](lua.ref.msys.core.string_new "msys.core.string_new") function to create the userdata variables used as the second and third parameters. Upon execution of this function, these variables will contain, respectively, the local part and the domain of the specific message as explained above.

<a name="lua.ref.msg_get_envelope2.example.get"></a>

**Example 70.22. msg:get_envelope2 example**

```
require('msys.core');
require('msys.extended.message');

local mod = {};

function mod:validate_set_binding(msg)
  local from = msg:mailfrom();
  local localpart_str = msys.core.string_new();
  local domain_str = msys.core.string_new();
  msg:get_envelope2(msys.core.EC_MSG_ENV_FROM, localpart_str, domain_str);
  local domain = tostring(domain_str);
  localpart_str = nil;
  if msys.pcre.match(domain, "mydomain.com") then
    msg:binding("mydomain");
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_set_binding", mod);
```

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp15804560"></a>
## See Also

[ec_message_get_envelope2](https://support.messagesystems.com/docs/web-c-api/apis.ec_message_get_envelope2)

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_code)  | [Up](lua.function.details) |  [Next](lua.ref.header) |
| msg:code  | [Table of Contents](index) |  msg:header |

