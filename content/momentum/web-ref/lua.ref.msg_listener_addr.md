| [Prev](lua.ref.header)  | 15.2. Lua Functions |  [Next](lua.ref.msg_reception_peer.php) |

<a name="lua.ref.msg_listener_addr"></a>
## Name

msg:listener_addr — Get the `recv_via` IP and/or PORT.

<a name="idp24246880"></a>
## Synopsis

`require('msys.extended.message')`

`msg:listener_addr(flag);`

`flag: string (optional)`<a name="idp24250288"></a>
## Description

This function returns the IP and/or PORT of the local listener that the message was received on. In particular, it returns the component of the sockaddr, in human-readable form, as indicated by the flag. The value of the flag parameter can be `ip`, `port` or `all`. The default input parameter is `all`. That is, if `flag` is `nil`, then this returns the same string as if `all` was passed as the parameter.

<a name="lua.ref.msg_listener_addr.example"></a>

**Example 15.27. msg:listener_addr example**

```
require("msys.extended.message");

local mod = {};

function mod:validate_data(msg, ac, vctx)
  print(msg:listener_addr('ip'));
    -- "10.1.2.3"
  print(msg:listener_addr('port'));
      -- "25"
  print(msg:listener_addr('all'));
      -- "10.1.2.3:25"
  print(msg:listener_addr()); -- defaults to 'all'
      -- "10.1.2.3:25"
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("myMod", mod);
```

<a name="idp24257840"></a>
## See Also

[msg:reception_peer](lua.ref.msg_reception_peer "msg:reception_peer")

| [Prev](lua.ref.header)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_reception_peer.php) |
| msg:header  | [Table of Contents](index) |  msg:reception_peer |
